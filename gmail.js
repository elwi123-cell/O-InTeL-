import { Router } from "express";
import { gmailClient } from "../services/google.js";
const router = Router();

// All Gmail routes must be protected by authenticated user/session middleware
// and load the user's encrypted OAuth credentials from the server-side vault.
router.get("/status", (_req, res) => res.json({
  connected: false,
  historicalCoverage: "all",
  collectionMode: "full",
  message: "Complete token vault, database, and user-session implementation before enabling sync."
}));

router.post("/sync/start", (_req, res) => res.status(501).json({
  error: "Historical sync worker is not enabled yet.",
  required: ["encrypted token vault", "authenticated session", "Gmail API quota handling", "durable job queue"]
}));

export default router;
