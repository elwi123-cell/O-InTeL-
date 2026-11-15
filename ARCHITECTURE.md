# O-InTeL architecture

## High-level flow
Android/PWA client → HTTPS API → authentication/session layer → Gmail integration service → sync workers → PostgreSQL + encrypted object storage → entity resolution and analytics → authorised dashboard.

## Gmail coverage
The agreed configuration is **all historical messages** and **full content**. The Gmail integration should:
1. Complete OAuth 2.0 using the minimum required `gmail.readonly` scope.
2. Page through the mailbox using Gmail `users.messages.list` and retrieve each message using `users.messages.get` with `format=full`.
3. Parse MIME parts, headers, participants, dates, labels and thread IDs.
4. Fetch attachment bytes through `users.messages.attachments.get` when present and save to encrypted object storage.
5. Store a Gmail `historyId` checkpoint and make ingestion idempotent.
6. Use Gmail `users.watch` with Pub/Sub notifications and `users.history.list` to process changes.
7. Renew Gmail Watch before its expiration; recover from expired history IDs with a controlled rescan.

## Intelligence layer
Normalise email addresses and display names; resolve aliases cautiously; keep a provenance link from each extracted entity to its source messages; represent interactions as sender/recipient/cc relationships; expose timelines and aggregate counts. Do not infer sensitive attributes or present uncertain identity matches as facts.

## Scale and resilience
Use a durable queue for historical ingestion, bounded concurrency, exponential backoff, quota-aware retries, pagination checkpoints, dead-letter handling and resumable jobs. A full mailbox scan must never run synchronously inside a web request.
