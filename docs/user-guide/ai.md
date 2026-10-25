---
sidebar_position: 12
tags:
    - business
    - enterprise
---

# AI

Docmost includes AI-powered features that help you write, edit, and search your workspace content: **Ask AI** in the editor, **AI Answers** in search, and **AI Chat** for conversations about your workspace. Self-hosted instances can use OpenAI, OpenAI-compatible providers, Google Gemini, or local models through Ollama.

:::note
AI is available on the Business and Enterprise editions. Self-hosted instances require a valid license and an AI provider configuration. See [AI Search Setup](/self-hosting/ai/ai-search) and [AI Chat Setup](/self-hosting/ai/ai-chat).
:::

## AI Settings (Admin)

Workspace admins can enable or disable AI features from **Settings** > **AI settings**:

- **AI-powered search (AI Answers)** — Uses vector embeddings to provide semantic search capabilities across your workspace content. When enabled, users can ask natural language questions in the search dialog and receive AI-generated answers based on workspace pages.
- **Generative AI (Ask AI)** — Enables AI-powered content generation in the editor. When enabled, users can generate, improve, translate and transform text directly within the editor.
- **AI Chat** — Enables conversations with AI to find information, ask follow-up questions, and create or edit pages.

Each feature can be toggled on or off independently. The AI-powered search toggle is only shown on self-hosted instances. Additional [AI Chat controls](/self-hosting/ai/ai-chat#admin-controls) are available on Enterprise and Cloud Business.

## AI Chat

AI Chat lets you ask questions about your workspace and continue with follow-up questions in the same conversation. It can find and summarize pages, answer questions about their content, and create or update pages for you.

### Start a chat

1. Click **AI Chat** in the top navigation.
2. Type a question, such as “What is our onboarding process?”
3. Press Enter or click **Send message**.
4. Ask follow-up questions in the same chat. Use Shift + Enter to add a new line.

When you open AI Chat while viewing a page, it opens in a side panel with that page added as context for the new conversation. You can remove the page from the input before sending. Use the quick actions to **Summarize this page**, **Translate this page**, or **Analyze for insights**. Click **Open full page** to continue in the full chat view.

### Add pages and files

Type `@` and select a page to include it in your question. You can also use **+** > **Mention a page**.

To ask about a file, choose **+** > **Add files**. You can attach up to five files per message: PDF, Word (`.docx`), text, CSV, Markdown, and images (`.png`, `.jpg`, `.jpeg`, `.webp`). Image understanding depends on the configured model supporting images.

### Create and edit pages

Ask AI Chat to create a page in a named space or update an existing page. For example:

- “Create a page titled Onboarding checklist in the People space using these notes.”
- “Add a summary to the end of this page.” Mention the page with `@` to identify it.

AI Chat can only read pages you have access to and create or edit pages where you have permission. If an admin enables **Read-only mode**, it can draft content in the chat but cannot save changes to pages.

### Chat history

Conversations are saved to your account. In the full chat view, use the sidebar to reopen or search previous chats. Use a chat's menu to rename or delete it, or click **New chat** to start another conversation. In the side panel, click the chat title to open your history.

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
