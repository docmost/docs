---
tags:
   - Enterprise
---

# AI Search Setup

AI-powered search in Docmost uses vector embeddings to provide semantic search across your workspace. This is an enterprise feature that requires a valid license key.

## Prerequisites

1. **PostgreSQL with pgvector extension** - Required for storing vector embeddings
2. **AI provider account** - OpenAI, Google Gemini, or self-hosted Ollama

## Installing pgvector

### Docker Setup (Recommended)

Use the official pgvector Docker image instead of the standard PostgreSQL image:

```yaml
# docker-compose.yml
services:
  db:
    image: pgvector/pgvector:pg17
    environment:
      POSTGRES_DB: docmost
      POSTGRES_USER: docmost
      POSTGRES_PASSWORD: your_password
    volumes:
      - db_data:/var/lib/postgresql/data
```

The pgvector extension will be automatically available.

### Manual Installation
If you are using a non-docker installation of Postgres, you can manually install the pgvector extension.
See the pgvector installation guide: https://github.com/pgvector/pgvector?tab=readme-ov-file#installation

## Supported AI Providers

Docmost supports three AI providers: OpenAI (Azure OpenAI), Google Gemini, and Ollama (local LLMs).

### Provider Configuration

All providers require these base environment variables:

```bash
AI_DRIVER=<provider>           # openai, gemini, or ollama
AI_EMBEDDING_MODEL=<model>     # Model used for generating embeddings
AI_COMPLETION_MODEL=<model>    # Model used for answering questions 
```

**Important:** `AI_EMBEDDING_DIMENSION` is optional and auto-detected from preset models. Only set it manually if using a custom model not in the preset list.

---

## OpenAI Configuration

Supports OpenAI API and Azure OpenAI.

### Environment Variables

```bash
AI_DRIVER=openai
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

### Environment Variables

```bash
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
```

### Ollama Preset Models

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
3. Toggle **AI-powered search (Ask AI)** to enable
4. Wait for background job to generate embeddings for existing pages (monitor via logs)

**Note:** Embeddings are generated asynchronously. New pages get embeddings on creation/update. Existing pages are queued for processing when AI search is enabled.
