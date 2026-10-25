---
sidebar_position: 2
tags:
    - business
    - enterprise
---

# AI Chat Setup

AI Chat lets users have conversations about workspace content, find and summarize pages, and create or edit pages. It is available on the Business and Enterprise editions.

For everyday usage, see the [AI Chat guide](/user-guide/ai#ai-chat).

## Configure a provider

Self-hosted instances require a valid license and a configured AI provider. AI Chat uses the same provider credentials as the other AI features. Supported providers are OpenAI, OpenAI-compatible providers, Google Gemini, and Ollama. See [provider configuration](/self-hosting/ai/ai-search#supported-ai-providers).

By default, AI Chat uses `AI_COMPLETION_MODEL`. Set `AI_CHAT_MODEL` if you want to use a different model for chat:

```bash
AI_CHAT_MODEL=your-chat-model
```

Choose a model that supports tool calling so AI Chat can search, read, create, and update pages. To use image attachments, choose a model that also supports image input. Restart Docmost after changing environment variables.

AI Chat uses semantic search when AI-powered search is enabled and embeddings are configured. Follow [AI Search Setup](/self-hosting/ai/ai-search) to configure embeddings and index workspace pages. Without semantic search, AI Chat can fall back to keyword search.

## Enable AI Chat

1. Log in as a workspace admin.
2. Go to **Settings** > **AI settings**.
3. Turn on **AI Chat**.

The **AI Chat** entry appears in the top navigation. AI Chat is enabled independently of **Generative AI (Ask AI)** and **AI-powered search (AI Answers)**.

## Admin controls

Enterprise and Cloud Business admins can configure two additional settings below the AI Chat toggle:

| Setting | Effect |
|---------|--------|
| **Read-only mode** | AI Chat can search and read content, but cannot create or edit pages. Users can still ask it to draft content in the chat. |
| **Workspace knowledge only** | Instructs AI Chat to answer using workspace pages and files uploaded to the chat, without adding outside knowledge. |

Both controls are off by default and can be enabled independently. AI Chat respects each user's page and space permissions, including when creating or editing pages.
