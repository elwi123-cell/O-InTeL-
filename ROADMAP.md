# Delivery roadmap

1. **Foundation:** private GitHub repo, environment setup, database migrations, HTTPS deployment.
2. **Identity and OAuth:** user sessions, OAuth state verification, encrypted refresh-token vault, disconnect/revoke.
3. **Historical Gmail ingestion:** resumable queue, all-history pagination, full MIME parsing, attachment storage, quota/retry handling.
4. **Continuous sync:** Pub/Sub push verification, Gmail History API, watch renewal and recovery scans.
5. **Entity intelligence:** contacts and organisation resolution, participant graph, provenance and review of uncertain matches.
6. **Analytics:** communication timelines, interaction frequency, filters and export controls.
7. **Android release:** PWA QA, native wrapper if required, accessibility, device testing and signed release build.
8. **Production assurance:** security review, privacy documentation, backup/restore, monitoring and operational runbooks.
