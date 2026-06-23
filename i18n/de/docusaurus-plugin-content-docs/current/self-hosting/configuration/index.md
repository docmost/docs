---
sidebar_position: 3
---

# Konfiguration

## E-Mail
Um E-Mails zu versenden, müssen Sie den E-Mail-Treiber konfigurieren. Dies ist erforderlich, um neue Benutzer in Ihren Arbeitsbereich einzuladen.  
Docmost unterstützt sowohl den SMTP- als auch den Postmark-E-Mail-Treiber.

#### SMTP verwenden
```shell
MAIL_DRIVER=smtp
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=
SMTP_SECURE=
MAIL_FROM_ADDRESS=hello@example.com
MAIL_FROM_NAME=Docmost
```

### Postmark verwenden:
```shell
MAIL_DRIVER=postmark
POSTMARK_TOKEN=
MAIL_FROM_ADDRESS=hello@example.com
MAIL_FROM_NAME=Docmost
```

## Dateispeicher
Docmost unterstützt lokalen Speicher, S3-kompatiblen Speicher und Azure-Blob-Storage-Treiber. Der Standardtreiber ist `local storage`.
```shell
STORAGE_DRIVER=local
```

### S3-kompatiblen Speicher verwenden 
Wenn Sie einen S3-kompatiblen Speicher verwenden möchten, müssen Sie die folgenden Umgebungsvariablen hinzufügen:

```shell
STORAGE_DRIVER=s3
AWS_S3_ACCESS_KEY_ID=
AWS_S3_SECRET_ACCESS_KEY=
AWS_S3_REGION=
AWS_S3_BUCKET=
AWS_S3_ENDPOINT=
AWS_S3_FORCE_PATH_STYLE=
```

S3-Kompatibilität bedeutet, dass Docmost mit AWS S3, Backblaze, Wasabi, DigitalOcean Spaces, Minio und anderen S3-kompatiblen Anbietern zusammenarbeiten kann.

### Azure Blob Storage verwenden
Wenn Sie Azure Blob Storage verwenden möchten, müssen Sie die folgenden Umgebungsvariablen hinzufügen:

```shell
STORAGE_DRIVER=azure
AZURE_STORAGE_ACCOUNT_NAME=
AZURE_STORAGE_ACCOUNT_KEY=
AZURE_STORAGE_CONTAINER=
```


### Größenbeschränkung für Datei-Uploads
Die maximale Dateigröße, die im Editor hochgeladen werden kann.
```shell
FILE_UPLOAD_SIZE_LIMIT=100mb
```

### Größenbeschränkung für Datei-Importe
Die maximale Größenbeschränkung für eine Importdatei.
```shell
FILE_IMPORT_SIZE_LIMIT=200mb
```

## AI
### OpenAI / Azure OpenAI
```shell
AI_DRIVER=openai
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
AI_EMBEDDING_MODEL=text-embedding-3-small
AI_COMPLETION_MODEL=gpt-4o-mini
# optional
OPENAI_API_URL=
# AI_EMBEDDING_SUPPORTS_MRL=false
```

### OpenAI-kompatibel
```shell
AI_DRIVER=openai-compatible
OPENAI_API_KEY=your-api-key
OPENAI_API_URL=https://api.your_provider.com/v1
AI_EMBEDDING_MODEL=your-embedding-model
AI_COMPLETION_MODEL=your-completion-model
# optional
AI_EMBEDDING_DIMENSION=1024
AI_EMBEDDING_SUPPORTS_MRL=false
```

### Google Gemini
```shell
AI_DRIVER=gemini
GEMINI_API_KEY=AIzaSyxxxxx
AI_EMBEDDING_MODEL=gemini-embedding-001
AI_COMPLETION_MODEL=gemini-2.5-flash
```

### Ollama
```shell
AI_DRIVER=ollama
OLLAMA_API_URL=http://localhost:11434
AI_EMBEDDING_MODEL=nomic-embed-text
AI_COMPLETION_MODEL=qwen2.5:7b
```

## Suche

Standardmäßig verwendet Docmost die Datenbank für die Volltextsuche. In der Enterprise Edition können Sie optional Typesense als Suchtreiber konfigurieren, um die Suchleistung und Relevanz zu verbessern.

### Typesense verwenden
Sie können den Typesense-Compose-Dienst zu Ihrer bestehenden Docmost-Datei docker-compose.yml hinzufügen.
Siehe den Typesense-[Installationsleitfaden](https://typesense.org/docs/guide/install-typesense.html#docker).
```yaml
  typesense:
    image: typesense/typesense:30.1
    restart: on-failure
    ports:
      - "8108:8108"
    volumes:
      - ./typesense-data:/data
    command: '--data-dir /data --api-key=YOUR_KEY --enable-cors'
```

**Umgebungsvariablen:**

```shell
SEARCH_DRIVER=typesense
TYPESENSE_API_KEY=YOUR_KEY
TYPESENSE_URL=http://localhost:8108
TYPESENSE_LOCALE=en
```

## Iframe-Einbettung
Docmost blockiert standardmäßig die Einbettung Ihrer Instanz in einem `<iframe>` durch andere Ursprünge.

**Öffentlich geteilte Seiten (`/share/...`) sind ausgenommen und können unabhängig von den nachstehenden Einstellungen immer von jedem Ursprung aus eingebettet werden.**

### Einbettung von jedem Ursprung zulassen

```shell
IFRAME_EMBED_ALLOWED=true
```

Wenn `IFRAME_EMBED_ALLOWED=true` gesetzt ist und keine Zulassungsliste angegeben wird, gibt Docmost keinen Framing-Header aus, sodass jeder Ursprung es einbetten kann.

### Einbettung von bestimmten Ursprüngen zulassen

```shell
IFRAME_EMBED_ALLOWED=true
IFRAME_ALLOWED_ORIGINS=https://intranet.example.com,https://portal.example.com
```

## Telemetrie
Wir erfassen anonym die aktive Version, die Anzahl der Benutzer, die Anzahl der Seiten sowie die Anzahl der Bereiche und Arbeitsbereiche.
Um die Telemetrie zu deaktivieren:
```shell
DISABLE_TELEMETRY=true
```


Eine Übersicht aller verfügbaren Umgebungsvariablen finden Sie unter [Umgebungsvariablen](/self-hosting/environment-variables).  
