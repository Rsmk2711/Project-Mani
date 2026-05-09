require("dotenv").config();
const axios = require("axios");

async function callHuggingFace(model, prompt) {
  if (!process.env.HF_TOKEN) {
    throw new Error("HF_TOKEN is not set in environment");
  }

  try {
    const res = await axios.post(
  `https://router.huggingface.co/hf-inference/models/${model}`,
  {
    inputs: prompt,
    parameters: {
      max_new_tokens: 512,
      temperature: 0.7,
      return_full_text: false,
    },
  },
  {
    headers: {
      Authorization: `Bearer ${process.env.HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    timeout: 30000,
  }
);
    return res.data;
  } catch (err) {
    throw new Error(`HF API Error: ${err.response?.data?.error || err.message}`);
  }
}

module.exports = { callHuggingFace };