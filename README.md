# O-InTeL — Android-first Intelligent Communication Intelligence

O-InTeL is an Android-first application project for securely organising communication intelligence, beginning with Gmail.

## Agreed project settings
- Gmail historical coverage: **ALL**
- Data collection: **FULL** (message bodies, headers, labels, thread relationships, and supported attachments)
- Gmail access: OAuth 2.0 using the read-only `gmail.readonly` scope
- Updates: Gmail API synchronisation; Gmail Watch + Pub/Sub + History API for near-real-time change notifications
- Security: HTTPS, encrypted database/storage, protected refresh tokens, audit logging, access controls, and user-controlled retention/deletion
- Initial client: mobile-first web app/PWA suitable for Android; native Android packaging can follow
- Repository: private GitHub repository named `O-InTeL`

## Package contents
- `frontend/`: mobile-first dashboard and PWA shell with the supplied logo
- `backend/`: Node.js API foundation, Google OAuth flow, Gmail sync service boundary, and protected API routes
- `database/`: PostgreSQL schema for accounts, people/entities, messages, threads, attachments, sync state, and audit events
- `docs/`: architecture, security, setup, and deployment notes
- `tests/`: initial test plan
- `.env.example`: configuration template (contains no secrets)

## Important implementation boundary
This is a development starter package, not a live connected Gmail service. Gmail access will not begin until you create/configure a Google Cloud project, enable the Gmail API, configure OAuth consent and credentials, set a verified redirect URI, and run the backend over HTTPS. Gmail Watch also requires a configured Google Cloud Pub/Sub topic and renewal process. Never put OAuth client secrets, refresh tokens, private keys, or database credentials in the frontend or GitHub.

The app requests read-only Gmail access. It does not send, delete, or modify Gmail messages. Full historical ingestion can take time and must respect Gmail API quotas. Attachments should be downloaded only through authenticated backend jobs and stored encrypted.

## Quick start (development)
1. Create a **private** GitHub repository called `O-InTeL`.
2. Extract this ZIP and upload the contents of this folder to the repository root (not the ZIP file itself).
3. Install Node.js 20+ and PostgreSQL 15+ on your development machine/server.
4. Copy `backend/.env.example` to `backend/.env` and fill in values locally. Do not commit `.env`.
5. Start PostgreSQL and apply `database/schema.sql`.
6. In `backend/`, run `npm install`, then `npm run dev`.
7. Serve the frontend using a local static server or configure the backend/static hosting as described in `docs/SETUP.md`.
8. Configure Google OAuth only after setting the correct public HTTPS callback URL.

## Current status
The dashboard is a working UI prototype. The backend contains the secure integration structure and OAuth/sync foundations; production Gmail ingestion, Pub/Sub deployment, attachment processing, entity resolution, analytics, and Android store packaging require credentials, infrastructure, testing, and completion of the documented steps.
