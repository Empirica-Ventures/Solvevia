// Generic contact-form -> email relay for static sites deployed on Vercel.
//
// POST any JSON object here and it is relayed as an email over SMTP via
// nodemailer. This file has no knowledge of any particular form's field
// names — whatever keys the request body has become lines in the
// notification email. That's intentional: this file, package.json, and
// .env.example are meant to be copied verbatim into other Claude Design +
// Vercel projects. Only the frontend's fetch call site changes per project.
//
// Required environment variables (see .env.example):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO
// Optional:
//   SMTP_SECURE, MAIL_FROM, SITE_NAME
//
// Set these in Vercel -> Project Settings -> Environment Variables.
// Never commit real values.

const nodemailer = require('nodemailer');

function humanizeKey(key) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function buildTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE != null ? SMTP_SECURE === 'true' : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ ok: false, error: 'Expected a JSON object body.' });
  }

  const entries = Object.entries(body).filter(
    ([, v]) => typeof v === 'string' && v.trim().length > 0
  );
  if (entries.length === 0) {
    return res.status(400).json({ ok: false, error: 'Submission is empty.' });
  }

  const { MAIL_TO, MAIL_FROM, SMTP_USER, SITE_NAME } = process.env;
  if (!MAIL_TO) {
    console.error('[api/contact] MAIL_TO is not configured.');
    return res.status(500).json({ ok: false, error: 'Email is not configured on this site yet.' });
  }

  const transport = buildTransport();
  if (!transport) {
    console.error('[api/contact] SMTP environment variables are not fully configured.');
    return res.status(500).json({ ok: false, error: 'Email is not configured on this site yet.' });
  }

  const senderName = typeof body.name === 'string' ? body.name.trim() : '';
  const senderEmail = typeof body.email === 'string' ? body.email.trim() : '';
  const siteName = SITE_NAME || 'website';

  const subject = senderName
    ? `New submission from ${senderName} — ${siteName} contact form`
    : `New submission — ${siteName} contact form`;

  const lines = entries.map(([key, value]) => `${humanizeKey(key)}: ${value.trim()}`);
  const text = [
    `A new submission was made through the ${siteName} contact form.`,
    '',
    ...lines,
  ].join('\n');

  try {
    await transport.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: senderEmail && senderEmail.includes('@') ? senderEmail : undefined,
      subject,
      text,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[api/contact] Failed to send mail:', err);
    return res.status(502).json({ ok: false, error: 'Failed to send message. Please try again later.' });
  }
};
