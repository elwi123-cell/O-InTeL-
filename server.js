import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.js";
import gmailRoutes from "./routes/gmail.js";

const app = express();
app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: process.env.APP_BASE_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use("/api", rateLimit({ windowMs: 60_000, limit: 60, standardHeaders: true, legacyHeaders: false }));
app.get("/health", (_req, res) => res.json({ status: "ok", service: "O-InTeL API" }));
app.use("/api/auth", authRoutes);
app.use("/api/gmail", gmailRoutes);
app.use((err, _req, res, _next) => {
  console.error("Request failed", { name: err.name, message: err.message });
  res.status(500).json({ error: "Internal server error" });
});
const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`O-InTeL API listening on port ${port}`));
