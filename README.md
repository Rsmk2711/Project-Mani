# Mani — Flagship Product of RSMK AI

> Part of the **RSMK AI** product line · An **RSMK Technologies** group product

Mani is a modular AI assistant — the first and flagship product under **RSMK AI**, the AI division of RSMK Technologies. It serves as the unified intelligence layer across all RSMK platforms. It is not a chatbot. It is an orchestrator — a system that decides *how* to answer, not just *what* to answer.

---

## Vision

Every RSMK product (portfolio, BudgetBuddy, GridForge, and future apps) will eventually need an AI interface. Instead of building isolated chatbots per app, Mani acts as a shared brain — one system with domain-aware context switching.

**Core promise:** Ask Mani anything across any RSMK platform, and it routes, reasons, and responds with the right context — always as **RSMK AI**, never exposing the underlying model.

---

## Architecture

Mani is built in layers. Each layer has a single responsibility.

```
User Input
    ↓
[ Intent Classifier ]        ← What is the user trying to do?
    ↓
[ Context Router ]           ← Which domain? (Portfolio / BudgetBuddy / GridForge / General)
    ↓
[ AI Model (Claude API) ]    ← Generate response with domain-specific system prompt
    ↓
[ Response Builder ]         ← Enforce Mani identity, tone, and format
    ↓
User Output
```

> The AI backbone is the **Claude API** — reliable, fast, and already in use for RSMK AI. Hugging Face is reserved for self-hosted fine-tuned models only (future phases).

---

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Frontend | Next.js (App Router) | SSR, API routes, easy deployment on Vercel |
| Backend / API | Next.js API routes (initially) | No separate server needed in v1 |
| AI Model | Claude API (`claude-sonnet-4`) | Already proven in RSMK AI chatbot |
| RAG (Phase 3) | LlamaIndex or LangChain + vector DB | Standard, well-documented, free tier available |
| Vector DB | Supabase pgvector or Chroma (local) | Free and easy to self-host |
| Deployment | Vercel | Already in RSMK stack |

---

## Roadmap

### ✅ Phase 1 — Core System (Start Here)

**Goal:** Get a working Mani that responds correctly under RSMK identity with basic domain awareness.

- Mani identity layer via system prompt (never reveals Claude or any provider)
- Domain context switcher (Portfolio / BudgetBuddy / GridForge / General)
- Basic chat interface in Next.js
- API route that calls Claude API with domain-specific system prompt
- Deploy to `mani.rsmk.me` (or as a component on `rsmk.me`)

**What this looks like in code:**
```js
// Simplified Phase 1 logic
const domainPrompts = {
  portfolio: "You are Mani, RSMK's portfolio assistant. Answer about projects, skills, and experience.",
  budgetbuddy: "You are Mani, assisting with BudgetBuddy finance tracking. Help with budgets and expenses.",
  gridforge: "You are Mani, GridForge's smart grid assistant. Help with energy simulations.",
  general: "You are Mani, the AI assistant of RSMK AI by RSMK Technologies."
};

const systemPrompt = domainPrompts[detectedDomain] ?? domainPrompts.general;
```

---

### 🔄 Phase 2 — Smart Routing

**Goal:** Mani detects intent and routes without the user specifying a domain.

- Intent classification via LLM (prompt Claude to return a JSON with `domain` and `intent`)
- Fallback chain: fast path (simple Q&A) → deep path (multi-turn reasoning)
- Conversation memory within a session (pass history array in API call)
- Typing indicators, error handling, retry logic in UI

---

### 🧠 Phase 3 — RAG per Platform

**Goal:** Mani can answer questions grounded in real content from each RSMK site.

- Embed content from each platform (portfolio projects, BudgetBuddy docs, GridForge specs)
- Store embeddings in Supabase pgvector (free) or Chroma (local dev)
- On each query: retrieve relevant chunks → inject into system prompt as context
- RAG pipeline per domain, not one shared index (keeps context clean)

> This is what makes Mani genuinely useful — not just a wrapper around Claude, but a system with knowledge of your actual products.

---

### 🔗 Phase 4 — Ecosystem Integration

**Goal:** Mani talks *to* your apps, not just *about* them.

- BudgetBuddy: Mani reads Firebase RTDB to answer "How much did I spend this month?"
- GridForge: Mani triggers simulations and returns results in natural language
- Portfolio: Mani surfaces latest projects, blog posts, and contact info dynamically
- Unified Mani API — one endpoint, platform passed as a parameter

---

## Identity Rules

These are non-negotiable across all phases:

- Mani **never** mentions Claude, Anthropic, OpenAI, Hugging Face, or any model provider
- Mani **always** refers to itself as *"Mani, a product of RSMK AI by RSMK Technologies"*
- Tone: confident, concise, technical when needed, friendly when appropriate
- If asked "What AI are you?": *"I'm Mani — RSMK AI's assistant, built by RSMK Technologies."*

---

## What This Is Not

- Not a fine-tuned model (Phase 1 and 2 are entirely prompt-based — fast to ship)
- Not a separate mobile app (Mani is a web-first system embedded into existing RSMK apps)
- Not a general-purpose chatbot (Mani is domain-scoped and identity-locked)

---

## Project Status

> 🚧 **Phase 1 — In Development**

- [x] Architecture defined
- [ ] Tech stack finalized
- [ ] Next.js project scaffolded
- [ ] Claude API integration with identity system prompt
- [ ] Domain router (keyword-based, Phase 1)
- [ ] Basic chat UI
- [ ] Deployed to `mani.rsmk.me`

---

## Maintained by

**RSMK AI** · A product of **RSMK Technologies** — [rsmk.me](https://rsmk.me)
