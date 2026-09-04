---
sidebar_position: 4
---

# Environment Variables

To configure your application, set the following environment variables. These variables control various aspects of the application's behavior, including URLs, database connections, and third-party integrations.

## Application Configuration

| Variable              | Example                       | Description                                                                                      |
|-----------------------|-------------------------------|--------------------------------------------------------------------------------------------------|
| `APP_URL`             | `https://docmost.example.com` | The base URL of your application. It is optional, but useful for correct email links.            |
| `APP_SECRET`           | `LONG_SECRET_KEY`             | A secure key for application security (32 chars minimum).  Generate with `openssl rand -hex 32`. |
| `PORT`                | `3000`                        | The port on which the application will run.                                                      |
| `JWT_TOKEN_EXPIRES_IN` | `30d`                         | The expiration time for JSON Web Tokens (JWT). The default is 30 days.                           |

## Database Configuration

| Variable       | Example                                                               | Description                                      |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------ |
| `DATABASE_URL` | `postgresql://postgres:password@localhost:5432/docmost?schema=public` | The connection URL for your PostgreSQL database. |

## Redis Configuration

| Variable    | Example                  | Description                                             |
| ----------- | ------------------------ |---------------------------------------------------------|
| `REDIS_URL` | `redis://127.0.0.1:6379` | The connection URL for your Redis server.<br/> **Format**: `redis://username:password@host:port/db-number` |

## Storage Configuration

### Using Local storage

| Variable            | Example | Description                                        |
|---------------------|---------|----------------------------------------------------|
| `STORAGE_DRIVER`    | `local` | The storage driver to use for file storage.        |

### Using S3-compatible storage

| Variable                   | Example | Description                                      |
| -------------------------- | ------- | ------------------------------------------------ |
| `STORAGE_DRIVER`           | `s3`    | The storage driver to use for file storage.      |
| `AWS_S3_ACCESS_KEY_ID`     |         | Your AWS S3 access key ID.                       |
| `AWS_S3_SECRET_ACCESS_KEY` |         | Your AWS S3 secret access key.                   |
| `AWS_S3_REGION`            |         | The region where your S3 bucket is located.      |
| `AWS_S3_BUCKET`            |         | The name of your S3 bucket.                      |
| `AWS_S3_ENDPOINT`          |         | The endpoint URL for your S3 service (optional). |
| `AWS_S3_FORCE_PATH_STYLE`  | `true`  | Force the request to use path-style addressing (optional). |

### Using Azure Blob Storage

| Variable                       | Example | Description                                                |
| ------------------------------ | ------- | ---------------------------------------------------------- |
| `STORAGE_DRIVER`               | `azure` | The storage driver to use for file storage.                |
| `AZURE_STORAGE_ACCOUNT_NAME`   |         | Your Azure Storage account name.                           |
| `AZURE_STORAGE_ACCOUNT_KEY`    |         | Your Azure Storage account key.                            |
| `AZURE_STORAGE_CONTAINER`      |         | The name of your blob container.                           |


### Storage file upload limits

| Variable                 | Example | Description                                           |
|--------------------------|---------|-------------------------------------------------------|
| `FILE_UPLOAD_SIZE_LIMIT` | `50mb`  | The maximum file size per upload. Default is 50mb.    |
| `FILE_IMPORT_SIZE_LIMIT` | `100mb` | The maximum file import size limit. Default is 200mb. |


## Email Configuration

### Using SMTP

| Variable    | Example             | Description                                      |
|-------------| ------------------- | ------------------------------------------------ |
| `MAIL_DRIVER` | `smtp`              | The mail driver to use for sending emails.       |
| `SMTP_HOST` | `smtp.example.com`  | The SMTP server to use for sending emails.       |
| `SMTP_PORT` | `587`               | The port to use for the SMTP server.             |
| `SMTP_USERNAME` |                     | The username for the SMTP server.                |
| `SMTP_PASSWORD` |                     | The password for the SMTP server.                |
| `SMTP_SECURE` | `false`               | Use TLS when connecting to the server, typically for port 465. Defaults to false. [See nodemailer 'secure' for details](https://nodemailer.com/smtp/)  |
| `MAIL_FROM_ADDRESS` | `hello@example.com` | The email address that emails will be sent from. |
| `MAIL_FROM_NAME` | `Docmost`           | The name that emails will be sent from.          |

### Using Postmark

| Variable            | Example             | Description                                                     |
| ------------------- | ------------------- | --------------------------------------------------------------- |
| `MAIL_DRIVER`       | `postmark`          | The mail driver to use for sending emails.                      |
| `POSTMARK_TOKEN`    |                     | The token for Postmark, if using Postmark as the `MAIL_DRIVER`. |
| `MAIL_FROM_ADDRESS` | `hello@example.com` | The email address that emails will be sent from.                |
| `MAIL_FROM_NAME`    | `Docmost`           | The name that emails will be sent from.                         |

## AI Configuration (Enterprise)

| Variable                      | Example                        | Description                                                                                                                                                              |
|-------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AI_DRIVER`                   | `openai`                       | The AI provider to use. Options: `openai`, `openai-compatible`, `gemini`, `ollama`.                                                                                      |
| `AI_EMBEDDING_MODEL`          | `text-embedding-3-small`       | The model used for generating vector embeddings.                                                                                                                         |
| `AI_COMPLETION_MODEL`         | `gpt-4o-mini`                  | The model used for answering questions.                                                                                                                                  |
| `AI_EMBEDDING_DIMENSION`      | `1536`                         | Optional. The vector dimension for pgvector. Auto-detected for preset models. Supported values: `768`, `1024`, `1536`, `2000`, `3072`.                                   |
| `AI_EMBEDDING_SUPPORTS_MRL`   | `true`                         | Optional. Controls whether the `dimensions` parameter is sent to the embedding model API. Defaults to model preset if available, otherwise `true`. Set to `false` for models that do not accept a `dimensions` parameter. |
| `OPENAI_API_KEY`              | `sk-proj-xxxxx`                | Your OpenAI API key. Required when `AI_DRIVER` is `openai` or `openai-compatible`.                                                                                       |
| `OPENAI_API_URL`              | `https://api.openai.com/v1`    | Optional. Custom API endpoint for Azure OpenAI or compatible providers.                                                                                                  |
| `GEMINI_API_KEY`              | `AIzaSyxxxxx`                  | Your Google Gemini API key. Required when `AI_DRIVER=gemini`.                                                                                                            |
| `OLLAMA_API_URL`              | `http://localhost:11434`       | The URL of your Ollama instance. Required when `AI_DRIVER=ollama`.                                                                                                       |

## DRAW.IO (Diagrams.net) configuration
The default Draw.io embed url is `https://embed.diagrams.net`.
| Variable  | Example                  | Description                |
|-----------| ------------------------ |----------------------------|
| `DRAWIO_URL` | `https://embed.diagrams.net` | Your custom draw.io server url. |

## Search Configuration (Enterprise)

| Variable            | Example                   | Description                                                                                                                                                                                      |
|---------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SEARCH_DRIVER`     | `typesense`               | The search engine driver to use. Default is `postgres` (database search). `typesense` is a purpose-built search engine with typo-tolerant, fast search available in Enterprise edition.         |
| `TYPESENSE_URL`     | `http://localhost:8108`   | The URL of your Typesense server. Required when `SEARCH_DRIVER=typesense`. (Enterprise)                                                                                                         |
| `TYPESENSE_API_KEY` | `your_api_key_here`       | Your Typesense API key with read/write permissions. Required when `SEARCH_DRIVER=typesense`. (Enterprise)                                                                                       |
| `TYPESENSE_LOCALE`  | `en`                      | The locale for text analysis and search. Default is `en`. Examples: `en`, `es`, `fr`, `de`, `ja`, `zh`, `ko`, etc. See [Typesense supported languages](https://typesense.org/docs/latest/api/search.html#supported-languages) for full list. (Enterprise) |

## SAML

Most SAML configuration is done from the **Settings → Security & SSO** page in the app. The variable below is the exception, as it must be set on the server.

| Variable                               | Example | Description                                                                                                                                                                                                                                                                                                                                                 |
|----------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SAML_DISABLE_REQUESTED_AUTHN_CONTEXT` | `false` | When `true`, Docmost omits the `RequestedAuthnContext` element (which requests `PasswordProtectedTransport`) from the SAML AuthnRequest. This lets identity providers such as AD FS use their default authentication method, for example Windows Integrated Authentication for intranet clients. Instance-wide; applies to all SAML providers. Defaults to `false`. |

## Security

### Iframe embedding

By default, Docmost blocks other origins from embedding your instance in an `<iframe>`. This protects users against clickjacking attacks where a malicious site loads Docmost in a hidden frame and tricks signed-in users into clicking destructive actions. Out of the box, Docmost responds with `X-Frame-Options: SAMEORIGIN`, so only pages served from your own Docmost origin can iframe Docmost content.

Public shared pages (`/share/...`) are exempt from this restriction and can always be embedded from any origin. Shares are public, read-only content with no authenticated actions, so they have no clickjacking surface.

If you legitimately need to embed the rest of Docmost (the app itself) inside another tool, for example an intranet portal or LMS, use the variables below.

| Variable                 | Example                                                   | Description                                                                                                                                                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IFRAME_EMBED_ALLOWED`   | `false`                                                   | Master switch for external iframe embedding. Defaults to `false`, which emits `X-Frame-Options: SAMEORIGIN`. Set to `true` to permit external embedding.                                                                                                                                                     |
| `IFRAME_ALLOWED_ORIGINS` | `https://intranet.example.com,https://portal.example.com` | Optional comma-separated allowlist. Only consulted when `IFRAME_EMBED_ALLOWED=true`. When provided, Docmost emits `Content-Security-Policy: frame-ancestors 'self' <origins>` instead of `X-Frame-Options`. When empty, embedding is allowed from any origin. |

### Outbound requests to private networks
Integrations such as SIEM streaming make the server send requests to URLs that workspace owners configure. On self-hosted instances, destinations on private networks are refused by default. Link-local, cloud metadata, unspecified and multicast addresses are always refused. Docmost Cloud ignores this variable.

| Variable                   | Example                    | Description                                                                                                                                                                                                                                                                                                                                       |
|----------------------------|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ALLOWED_PRIVATE_NETWORKS` | `all,127.0.0.0/8,::1/128`  | `none` (default) refuses private, loopback and reserved destinations. `all` allows private networks (10.x, 172.16-31.x, 192.168.x, 100.64.x, IPv6 unique-local). A comma-separated list of CIDR ranges, each optionally with a port (`192.168.1.20/32:8088`), allows only those ranges. Ranges listed after `all` are added on top, for example loopback for a collector on the same machine. |

## Telemetry
We anonymously collect the active version, user count, page count, space and workspace count.

| Variable  | Example                  | Description                |
|-----------| ------------------------ |----------------------------|
| `DISABLE_TELEMETRY` | `true` | To disable telemetry |
