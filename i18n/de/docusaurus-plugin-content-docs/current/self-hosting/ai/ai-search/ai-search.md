---
tags:
   - Enterprise
---

# AI-Suche einrichten

Die AI-gestützte Suche und der AI Chat in Docmost verwenden Vektor-Embeddings, um eine semantische Suche über Ihren gesamten Arbeitsbereich zu ermöglichen. Dies ist eine Enterprise-Funktion, die einen gültigen Lizenzschlüssel erfordert.

## Voraussetzungen

1. **PostgreSQL mit der pgvector-Erweiterung** - Erforderlich für die Speicherung von Vektor-Embeddings
2. **AI-Anbieter-Konto** - OpenAI, Google Gemini oder selbst gehostetes Ollama

## pgvector installieren

### Docker-Einrichtung
:::warning
Da das standardmäßige PostgreSQL-Compose-Image von Docmost auf Alpine basiert und pgvector keinen Alpine-Build hat, können Sie keinen sauberen In-Place-Austausch durchführen. Stattdessen müssen Sie Ihre Daten migrieren.
:::

Sie können Ihr PostgreSQL-Image auf den von pgvector mitgelieferten PostgreSQL-Build umstellen.  

Wenn Sie Docmost bereits eingerichtet haben, sollten Sie zunächst ein Backup Ihrer PostgreSQL-Datenbank erstellen und diese dann in das pgvector-PostgreSQL-Image importieren.  

Siehe die pgvector-Docker-Anleitung: https://github.com/pgvector/pgvector#docker  

### Manuelle Installation
Wenn Sie eine Nicht-Docker-Installation von Postgres verwenden, können Sie die pgvector-Erweiterung manuell installieren.
Siehe die pgvector-Installationsanleitung: https://github.com/pgvector/pgvector#installation

## Unterstützte AI-Anbieter

Docmost unterstützt drei AI-Anbieter: OpenAI (Azure OpenAI), Google Gemini und Ollama (lokale LLMs).

### Anbieterkonfiguration

Alle Anbieter benötigen diese grundlegenden Umgebungsvariablen:

```bash
AI_DRIVER=<provider>           # openai, openai-compatible, gemini, or ollama
AI_EMBEDDING_MODEL=<model>     # Model used for generating embeddings
AI_COMPLETION_MODEL=<model>    # Model used for answering questions 
```

**Wichtig:** `AI_EMBEDDING_DIMENSION` ist optional und wird automatisch aus den voreingestellten Modellen erkannt. Legen Sie es nur dann manuell fest, wenn Sie ein benutzerdefiniertes Modell verwenden, das nicht in der Voreinstellungsliste enthalten ist.
Die unterstützten Werte sind `768`, `1024`, `1536`, `2000` und `3072`.

`AI_EMBEDDING_SUPPORTS_MRL` ist optional und steuert, ob der Parameter `dimensions` an die API des Embedding-Modells gesendet wird. Die meisten modernen Embedding-Modelle unterstützen Matryoshka Representation Learning (MRL) und akzeptieren einen `dimensions`-Parameter zur Steuerung der Ausgabegröße. Einige Modelle geben jedoch Embeddings mit fester Größe zurück und geben einen Fehler aus, wenn `dimensions` übergeben wird.

- Wenn nicht festgelegt, wird standardmäßig die Modellvoreinstellung verwendet, sofern verfügbar, andernfalls standardmäßig `true`.
- Auf `true` setzen, um die Dimension an die Modell-API zu senden.
- Auf `false` setzen, um das Senden zu überspringen — die Dimension wird weiterhin für den pgvector-Index verwendet.


---

## OpenAI-Konfiguration

Unterstützt die OpenAI API, Azure OpenAI und jeden OpenAI-kompatiblen Anbieter.
:::tip
Setzen Sie `AI_DRIVER=openai`, um die offizielle OpenAI API oder Azure zu verwenden.   
Wenn Sie einen anderen kompatiblen Anbieter verwenden, setzen Sie `AI_DRIVER=openai-compatible`.
:::

### Umgebungsvariablen

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

### Voreingestellte OpenAI-Modelle

| Modell |
|-------|
| `text-embedding-3-small` |
| `text-embedding-3-large` |
| `text-embedding-ada-002` |

### Beispiel

```bash
AI_DRIVER=openai
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
AI_EMBEDDING_MODEL=text-embedding-3-small
AI_COMPLETION_MODEL=gpt-4o-mini
```

### OpenAI-kompatibles Beispiel

Für Drittanbieter, die das OpenAI-API-Format implementieren, aber benutzerdefinierte Embedding-Modelle verwenden:

```bash
AI_DRIVER=openai-compatible
OPENAI_API_KEY=your-api-key
OPENAI_API_URL=https://api.your-provider.com/v1
AI_EMBEDDING_MODEL=your-custom-embedding-model
AI_COMPLETION_MODEL=your-completion-model
```

---

## Google-Gemini-Konfiguration

### Umgebungsvariablen

```bash
AI_DRIVER=gemini
GEMINI_API_KEY=AIzaSyxxxxx
AI_EMBEDDING_MODEL=gemini-embedding-001
AI_COMPLETION_MODEL=gemini-2.5-flash
```

### Voreingestellte Gemini-Modelle

| Modell |
|-------|
| `gemini-embedding-001` |

---

## Ollama-Konfiguration
Die AI-Suche und Embeddings von Docmost unterstützen lokale LLMs über Ollama.  
Ollama-Docker-Installationsanleitung: https://docs.ollama.com/docker

:::tip
Sie können je nach Bedarf und Rechenkapazität jedes von OLLAMA unterstützte Modell verwenden.
:::

### Umgebungsvariablen

```bash
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
```

### Voreingestellte Ollama-Embedding-Modelle

| Modell |
|-------|
| `nomic-embed-text` |
| `qwen3-embedding` |

### Ollama einrichten

1. Ollama installieren: https://ollama.com/download
2. Embedding-Modell abrufen:
   ```bash
   ollama pull nomic-embed-text
   ```
3. Completion-Modell abrufen:
   ```bash
   ollama pull qwen2.5:7b
   ```

### Beispiel

```bash
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
AI_EMBEDDING_DIMENSION=768
```

Verwenden Sie für Docker-Bereitstellungen den Ollama-Container:
```yaml
services:
  ollama:
    image: ollama/ollama:latest
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
```

Setzen Sie dann `OLLAMA_API_URL=http://ollama:11434` in Ihrem Docmost-Container.

---

## AI-Suche im Arbeitsbereich aktivieren

Nachdem Sie Ihren AI-Anbieter konfiguriert haben:

1. Melden Sie sich bei Docmost als Arbeitsbereich-Administrator an
2. Gehen Sie zu **Einstellungen** → **AI settings**
3. Aktivieren Sie **AI-powered search (AI Answers)**
4. Warten Sie, bis der Hintergrundjob Embeddings für vorhandene Seiten generiert hat (Sie können dies über die Logs überwachen, wenn die Umgebungsvariable _DEBUG_MODE: true_ gesetzt ist)

**Hinweis:** Embeddings werden asynchron generiert. Neue Seiten erhalten Embeddings bei der Erstellung/Aktualisierung nach 10 Minuten. Vorhandene Seiten werden zur Verarbeitung in die Warteschlange gestellt, wenn die AI-Suche aktiviert wird.
