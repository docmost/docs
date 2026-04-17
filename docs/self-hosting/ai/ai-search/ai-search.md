---
tags:
   - Enterprise
---

# AI Search Setup

AI-powered search and AI Chat in Docmost uses vector embeddings to provide semantic search across your workspace. This is an enterprise feature that requires a valid license key.

## Prerequisites

1. **PostgreSQL with pgvector extension** - Required for storing vector embeddings
2. **AI provider account** - OpenAI, Google Gemini, or self-hosted Ollama

## Installing pgvector

### Docker Setup
:::warning
Since Docmost's default PostgreSQL compose image is Alpine-based, and pgvector does not have an Alpine build, you will not be able to do a clean in-place swap. Instead, you'll need to migrate your data.
:::

You can switch your PostgreSQL image to pgvector's bundled PostgreSQL build.  

If you already have Docmost set up, you may want to back up your PostgreSQL database first, then import it into the pgvector PostgreSQL image.  

See pgvector docker guide: https://github.com/pgvector/pgvector#docker  

### Manual Installation
If you are using a non-docker installation of Postgres, you can manually install the pgvector extension.
See the pgvector installation guide: https://github.com/pgvector/pgvector#installation

## Supported AI Providers

Docmost supports three AI providers: OpenAI (Azure OpenAI), Google Gemini, and Ollama (local LLMs).

### Provider Configuration

All providers require these base environment variables:

```bash
AI_DRIVER=<provider>           # openai, openai-compatible, gemini, or ollama
AI_EMBEDDING_MODEL=<model>     # Model used for generating embeddings
AI_COMPLETION_MODEL=<model>    # Model used for answering questions 
```

**Important:** `AI_EMBEDDING_DIMENSION` is optional and auto-detected from preset models. Only set it manually if using a custom model not in the preset list.
The supported values are `768`, `1024`, `1536`, `2000` and `3072`.

`AI_EMBEDDING_SUPPORTS_MRL` is optional and controls whether the `dimensions` parameter is sent to the embedding model API. Most modern embedding models support Matryoshka Representation Learning (MRL) and accept a `dimensions` parameter to control output size. However, some models return fixed-size embeddings and will error if `dimensions` is passed.

- When not set, defaults to the model preset if available, otherwise defaults to `true`.
- Set to `true` to send the dimension to the model API.
- Set to `false` to skip sending it — the dimension is still used for the pgvector index.


---

## OpenAI Configuration

Supports OpenAI API, Azure OpenAI and any OpenAI-Compatible provider.
:::tip
Set `AI_DRIVER=openai` to use the official OpenAI API or Azure.   
If you are using another compatible provider, set `AI_DRIVER=openai-compatible`.
:::

### Environment Variables

```bash
AI_DRIVER=openai #or openai-compatible
OPENAI_API_KEY=sk-proj-xxxxx
AI_EMBEDDING_MODEL=text-embedding-3-small
AI_COMPLETION_MODEL=gpt-4o-mini
```

**Optional:**
```bash
OPENAI_API_URL=https://api.openai.com/v1  # For Azure or custom endpoints
```

### OpenAI Preset Models

| Model |
|-------|
| `text-embedding-3-small` |
| `text-embedding-3-large` |
| `text-embedding-ada-002` |

### Example

```bash
AI_DRIVER=openai
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
AI_EMBEDDING_MODEL=text-embedding-3-small
AI_COMPLETION_MODEL=gpt-4o-mini
```

### OpenAI-Compatible Example

For third-party providers that implement the OpenAI API format but use custom embedding models:

```bash
AI_DRIVER=openai-compatible
OPENAI_API_KEY=your-api-key
OPENAI_API_URL=https://api.your-provider.com/v1
AI_EMBEDDING_MODEL=your-custom-embedding-model
AI_COMPLETION_MODEL=your-completion-model
```

---

## Google Gemini Configuration

### Environment Variables

```bash
AI_DRIVER=gemini
GEMINI_API_KEY=AIzaSyxxxxx
AI_EMBEDDING_MODEL=gemini-embedding-001
AI_COMPLETION_MODEL=gemini-2.5-flash
```

### Gemini Preset Models

| Model |
|-------|
| `gemini-embedding-001` |

---

## Ollama Configuration
Docmost AI search and embeddings supports local LLMs via Ollama.  
Ollama Docker Installation Guide: https://docs.ollama.com/docker

:::tip
You can use any OLLAMA-supported model based on your needs and compute capacity.
:::

### Environment Variables

```bash
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
```

### Ollama Embedding Preset Models

| Model |
|-------|
| `nomic-embed-text` |
| `qwen3-embedding` |

### Setup Ollama

1. Install Ollama: https://ollama.com/download
2. Pull embedding model:
   ```bash
   ollama pull nomic-embed-text
   ```
3. Pull completion model:
   ```bash
   ollama pull qwen2.5:7b
   ```

### Example

```bash
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
AI_EMBEDDING_DIMENSION=768
```

For Docker deployments, use the Ollama container:
```yaml
services:
  ollama:
    image: ollama/ollama:latest
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
```

Then set `OLLAMA_API_URL=http://ollama:11434` in your Docmost container.

---

## Enable AI Search in Workspace

After configuring your AI provider:

1. Log in to Docmost as a workspace admin
2. Go to **Settings** → **AI settings**
3. Toggle **AI-powered search (AI Answers)** to enable
4. Wait for background job to generate embeddings for existing pages (You can monitor via logs if _DEBUG_MODE: true_ env is set)

**Note:** Embeddings are generated asynchronously. New pages get embeddings on creation/update after 10 minutes. Existing pages are queued for processing when AI search is enabled.
