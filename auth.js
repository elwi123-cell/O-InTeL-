import { Router } from "express";
import { createOAuthClient, GMAIL_SCOPES } from "../services/google.js";
const router = Router();

router.get("/google/url", (_req, res, next) => {
  try {
    const oauth = createOAuthClient();
    const url = oauth.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: GMAIL_SCOPES,
      include_granted_scopes: true,
      // TODO: add a cryptographically random, server-stored OAuth state and verify it in callback.
    });
    res.json({ url });
  } catch (error) { next(error); }
});

router.get("/google/callback", async (req, res) => {
  try {
    if (!req.query.code) return res.status(400).send("Missing OAuth authorisation code.");
    const oauth = createOAuthClient();
    const { tokens } = await oauth.getToken(String(req.query.code));
    // IMPORTANT: persist tokens only in an encrypted server-side token vault.
    // Never return tokens to the browser or write them to logs.
    if (!tokens.refresh_token) return res.status(400).send("No refresh token received. Revoke app access and reconnect with consent.");
    res.status(501).send("OAuth code received. Complete encrypted token-vault persistence and secure session creation before enabling account access.");
  } catch (_error) {
    res.status(400).send("Google authorisation could not be completed.");
  }
});
export default router;
