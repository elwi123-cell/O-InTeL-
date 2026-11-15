# Initial test plan

- OAuth: state mismatch rejected; callback errors handled; refresh token never returned to client/logs.
- Authorisation: user A cannot read user B's accounts, messages, entities or attachments.
- Sync: pagination resumes; duplicate message IDs are idempotent; expired history checkpoint triggers recovery.
- Content: MIME multipart, encoded headers, text/plain, text/html, inline and regular attachments parsed correctly.
- Security: rate limits, input validation, HTTPS, encrypted payloads, secret scanning and log redaction.
- Mobile: Android small-screen layout, offline shell, install prompt, keyboard navigation and screen-reader labels.
- Operations: worker retries, quota backoff, watch renewal, failed-job recovery and deletion propagation.
