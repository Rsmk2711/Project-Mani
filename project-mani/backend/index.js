require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { detectIntent, routes } = require("./src/router");
const { callHuggingFace } = require("./src/hf");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Mani Orchestrator is live 🧠" });
});

// Core query endpoint
app.post("/api/query", async (req, res) => {
  const { query } = req.body;

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Query is required." });
  }

  const intent = detectIntent(query);
  const model = routes[intent];

  try {
    const response = await callHuggingFace(model, query);
    res.json({
      success: true,
      intent,
      model,
      response,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🧠 Mani Orchestrator running on port ${PORT}`);
});