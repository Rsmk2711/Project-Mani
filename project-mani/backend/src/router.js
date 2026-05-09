const routes = {
  code: "Qwen/Qwen2.5-Coder-32B-Instruct",
  general: "mistralai/Mistral-7B-Instruct-v0.3",
  summarize: "facebook/bart-large-cnn",
};

function detectIntent(query) {
  if (/code|function|script|bug|error|fix|write a|implement/i.test(query)) return "code";
  if (/summarize|tldr|brief|short|condense/i.test(query)) return "summarize";
  return "general";
}

module.exports = { routes, detectIntent };