const rsmkCore = require("../knowledge/rsmk-core.json");
const projects = require("../knowledge/projects.json");

function getKnowledgeBase() {
  return { rsmkCore, projects };
}

module.exports = { getKnowledgeBase };
