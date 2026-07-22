# CLAUDE.md — Solvevia PK website

This repo hosts a static site exported from Claude Design (claude.ai/design)
and deployed on Vercel, plus a small serverless backend for the contact form.
Read this before touching anything here.

## Repo layout

- `index.html`, `support.js`, `logo.svg`, `_ds/**` — the static frontend.
  This is wholesale-regenerated every time a new design is pulled from
  Claude Design and re-implemented. Treat these as generated output, not
  hand-maintained source — don't be surprised that hand-written comments
  or structure don't survive a re-import.
- `api/contact.js` — the contact-form backend (Vercel serverless function).
- `package.json`, `.env.example` — backend dependency and documented
  environment variable names (no real values, ever).
- `CHANGELOG.md` — dated log of what changed and why.

## Hard rule: design re-imports must never touch the backend

When implementing a newly-pulled Claude Design export:

- ONLY overwrite `index.html`, `support.js`, `logo.svg`, and `_ds/**`.
- NEVER delete or overwrite `api/`, `package.json`, `.env.example`,
  `CLAUDE.md`, or `CHANGELOG.md` as part of a design re-import. These are
  hand-maintained infrastructure, not design output, and the whole point
  of keeping them separate is that they survive a wholesale frontend
  regeneration untouched.

## Hard rule: re-wire the contact form after every re-import

Every fresh Claude Design export ships its contact form wired to a
`mailto:` link — a Claude Design prototype placeholder that does not
actually send anything. After each re-import:

1. Find the contact form's submit handler and its `state.form` shape in
   the new `index.html` (search for `mailto:` or the submit button's
   `onClick`). **Get the real field names from the new file — don't
   assume they match the previous version.**
2. Replace the `mailto:` line with a `fetch('/api/contact', { method:
   'POST', headers: {'Content-Type':'application/json'}, body:
   JSON.stringify(payload) })` call. `api/contact.js` is intentionally
   field-name-agnostic — it relays whatever keys are present as email
   lines — so the backend never needs to change to match new fields,
   only this frontend call site. If any field is a coded value (e.g. a
   `<select>` storing `"listed"` instead of a readable label), expand it
   to its human label client-side before sending, the way the current
   `submitForm` does for `audience`.
3. Keep (or restore) basic UX around the request: a `sending` state that
   disables the submit button mid-request, and a `sendError` state that
   surfaces backend failures inline instead of failing silently.
4. Verify by actually submitting the form against a deployment with real
   SMTP env vars set, and confirm an email arrives — a 200 response is
   not proof of delivery.

## Backend design notes (why it's built this way)

- `api/contact.js` is deliberately generic: it takes any JSON object and
  emails it, humanizing field names for the email body. It has no
  Solvevia-specific logic. This is intentional — the same three files
  (`api/contact.js`, `package.json`, `.env.example`) are meant to be
  copied verbatim into other Claude Design + Vercel projects; only the
  frontend's fetch call site and the Vercel env vars change per project.
- SMTP credentials come from environment variables only (see
  `.env.example` for the full list) — set them in Vercel → Project
  Settings → Environment Variables, never in this repo. The mailbox is
  provisioned via InboxKit; host/port/user/pass are whatever InboxKit
  generates for the underlying Google Workspace or Microsoft 365 account.
- No third-party form service (Formspree, Web3Forms, etc.) is used — mail
  is sent directly over SMTP via nodemailer, through the site's own
  mailbox.
- No spam protection (honeypot, rate limiting) and no submission
  persistence beyond the email itself. Add these only if they become an
  actual problem — don't add them speculatively.

## Changelog discipline

Add a dated entry to `CHANGELOG.md` for every change that affects
behavior, infrastructure, or deployment — not for cosmetic design
re-imports (those aren't tracked line-by-line; note only that a
re-import happened and on what date, if it changed something functional
like the contact form wiring).
