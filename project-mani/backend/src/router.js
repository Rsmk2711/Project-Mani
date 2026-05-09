const routes = {
  code: "bigcode/starcoder2-3b",
  general: "HuggingFaceH4/zephyr-7b-beta",
  summarize: "facebook/bart-large-cnn",
};

function detectIntent(query) {
  if (/code|function|script|bug|error|fix|write a|implement/i.test(query)) return "code";
  if (/summarize|tldr|brief|short|condense/i.test(query)) return "summarize";
  return "general";
}

module.exports = { routes, detectIntent };