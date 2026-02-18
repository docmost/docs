---
sidebar_position: 12
---

# AI

Docmost includes AI-powered features that help you write, edit, and search your workspace content. AI capabilities are available in two areas: the editor (Ask AI) and search (AI Answers). Since Docmost is self-hosted, you can choose to use cloud-based AI models (OpenAI, Google Gemini) or local LLMs (via Ollama) — keeping your data fully under your control.

:::note
AI is an enterprise feature. An active enterprise license is required. AI features also require an AI provider to be configured by a workspace admin. See the [AI Search Setup](/self-hosting/ai/ai-search) guide for provider configuration.
:::

## AI Settings (Admin)

Workspace admins can enable or disable AI features from **Settings** > **AI settings**. There are two independent toggles:

- **AI-powered search (AI Answers)** — Uses vector embeddings to provide semantic search capabilities across your workspace content. When enabled, users can ask natural language questions in the search dialog and receive AI-generated answers based on workspace pages.
- **Generative AI (Ask AI)** — Enables AI-powered content generation in the editor. When enabled, users can generate, improve, translate and transform text directly within the editor.

Each feature can be toggled on or off independently.

## Ask AI (Editor)

When Generative AI is enabled, an **Ask AI** button appears in the editor toolbar when you select text. You can also type a custom prompt in the **Ask AI...** input field to give the AI specific instructions.

### Available Actions

| Action | Description |
|--------|-------------|
| **Improve writing** | Refine and enhance the selected text |
| **Fix spelling & grammar** | Correct spelling and grammar errors |
| **Make longer** | Expand the selected text with more detail |
| **Make shorter** | Condense the selected text |
| **Continue writing** | Generate additional content from where the text ends |
| **Explain** | Provide an explanation of the selected text |
| **Summarize** | Create a summary of the selected text |

### Change Tone

Rewrite the selected text in a different tone:

- Professional
- Casual
- Friendly

### Translate

Translate the selected text into one of the supported languages:

English, Spanish, German, French, Dutch, Portuguese, Italian, Japanese, Korean, Swedish, Chinese (Simplified).

## AI Answers (Search)

When AI-powered search is enabled, an **AI Answers** toggle appears in the search dialog. With AI Answers turned on, you can ask natural language questions about your workspace content and receive AI-generated answers based on your pages.

To use AI Answers:

1. Open the search dialog (`Ctrl/Cmd + K`).
2. Toggle **AI Answers** on.
3. Type your question in the search field.
4. Click the **Ask** button or press Enter.
5. The AI returns an answer based on the content in your workspace.

AI Answers only searches content you have permission to access. Results are scoped to the spaces and pages visible to your account.
