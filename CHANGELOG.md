# Changelog

All notable changes to this project are documented here.

## 2026-07-22

### Added

- Contact-form backend: `api/contact.js`, a generic Vercel serverless
  function that relays any JSON POST body to email over SMTP via
  nodemailer. It has no Solvevia-specific field logic, so the same file
  can be reused unchanged in other Claude Design + Vercel projects.
- `package.json` declaring the `nodemailer` dependency.
- `.env.example` documenting the SMTP/mailbox environment variables the
  function needs (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`,
  `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM`, `SITE_NAME`). Real credentials
  live only in Vercel's environment variables, never in this repo. The
  mailbox itself is provisioned via InboxKit (Google Workspace or
  Microsoft 365 underneath).
- `CLAUDE.md` documenting the rule that design re-imports must never
  touch the backend files, and the steps to re-wire the contact form's
  submit handler after every future re-import.

### Changed

- Contact form (`#contact` page) submit handler now POSTs the form
  fields (`name`, `org`, `role`, `email`, `audience`, `message`) as JSON
  to `/api/contact` via `fetch`, instead of opening a `mailto:` link,
  which was a Claude Design prototype placeholder that never actually
  sent anything. Added `sending`/`sendError` state so the submit button
  disables mid-request and backend failures surface inline instead of
  failing silently.
