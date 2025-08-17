import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: process.env.MESSAGE || "Hello from Backend 🌍",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
