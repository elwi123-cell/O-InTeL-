# Setup guide

## Local prerequisites
- Node.js 20+
- PostgreSQL 15+
- A Google Cloud project with Gmail API enabled

## Google Cloud OAuth
1. Configure the OAuth consent screen and add test users while in testing.
2. Create a Web application OAuth client.
3. Add the exact backend callback URL to authorised redirect URIs.
4. Put the client ID and secret in `backend/.env` only.
5. Request `https://www.googleapis.com/auth/gmail.readonly`.
6. Before production, complete Google verification requirements applicable to the app and requested scope.

## Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Set a strong random `SESSION_SECRET`, database URL and encryption key using a secrets manager in production. The callback currently deliberately stops before creating an application session: implement encrypted token storage, OAuth state validation, session issuance and account ownership checks before use.

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Set `VITE_API_BASE_URL` to the backend URL in a local `.env` file if it differs from `http://localhost:4000`.

## Pub/Sub live updates
Create a Pub/Sub topic and Gmail push subscription, grant the Gmail service publisher permission to publish to the topic, configure the topic name, verify incoming push messages, call `users.history.list` from a background worker, and renew `users.watch` before expiration. Do not expose an unauthenticated webhook that trusts arbitrary notifications.

## Android
The frontend is a mobile-first installable PWA shell. Test installation on Android Chrome. For a signed native Android application, add a Capacitor/Android wrapper after the web app and backend are configured; keep OAuth in the system browser and use a verified HTTPS app link/deep link for return handling.
