# Security requirements

- Enforce HTTPS/TLS for all production traffic.
- Use OAuth 2.0; request only Gmail `gmail.readonly` unless a later, explicit feature requires more.
- Generate and verify OAuth `state` with a secure, server-side session to prevent CSRF.
- Keep client secrets and refresh tokens server-side; encrypt tokens using a managed KMS or envelope encryption.
- Encrypt message bodies and attachments at rest; use private object storage and short-lived signed access only after authorisation.
- Apply per-user authorisation to every record and API operation; never trust account IDs supplied by the client.
- Add audit events for account connection, sync, access, export and deletion.
- Provide disconnect, revoke-access, export and deletion workflows.
- Redact tokens, message bodies, attachment contents and personal data from logs.
- Use rate limits, input validation, dependency updates, backups and restore tests.
- Do not enable public sharing or multi-user access until tenant isolation and consent flows are implemented.
- Complete a security review and privacy impact assessment before real mailbox ingestion.
