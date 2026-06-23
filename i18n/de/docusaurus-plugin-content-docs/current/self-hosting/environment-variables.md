---
sidebar_position: 4
---

# Umgebungsvariablen

Um Ihre Anwendung zu konfigurieren, setzen Sie die folgenden Umgebungsvariablen. Diese Variablen steuern verschiedene Aspekte des Anwendungsverhaltens, einschließlich URLs, Datenbankverbindungen und Integrationen von Drittanbietern.

## Anwendungskonfiguration

| Variable              | Beispiel                      | Beschreibung                                                                                     |
|-----------------------|-------------------------------|--------------------------------------------------------------------------------------------------|
| `APP_URL`             | `https://docmost.example.com` | Die Basis-URL Ihrer Anwendung. Sie ist optional, aber nützlich für korrekte E-Mail-Links.        |
| `APP_SECRET`           | `LONG_SECRET_KEY`             | Ein sicherer Schlüssel für die Anwendungssicherheit (mindestens 32 Zeichen). Generieren Sie ihn mit `openssl rand -hex 32`. |
| `PORT`                | `3000`                        | Der Port, auf dem die Anwendung ausgeführt wird.                                                 |
| `JWT_TOKEN_EXPIRES_IN` | `30d`                         | Die Ablaufzeit für JSON Web Tokens (JWT). Der Standardwert beträgt 30 Tage.                      |

## Datenbankkonfiguration

| Variable       | Beispiel                                                              | Beschreibung                                     |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------ |
| `DATABASE_URL` | `postgresql://postgres:password@localhost:5432/docmost?schema=public` | Die Verbindungs-URL für Ihre PostgreSQL-Datenbank. |

## Redis-Konfiguration

| Variable    | Beispiel                 | Beschreibung                                            |
| ----------- | ------------------------ |---------------------------------------------------------|
| `REDIS_URL` | `redis://127.0.0.1:6379` | Die Verbindungs-URL für Ihren Redis-Server.<br/> **Format**: `redis://username:password@host:port/db-number` |

## Speicherkonfiguration

### Lokalen Speicher verwenden

| Variable            | Beispiel | Beschreibung                                       |
|---------------------|---------|----------------------------------------------------|
| `STORAGE_DRIVER`    | `local` | Der für die Dateispeicherung zu verwendende Speichertreiber. |

### S3-kompatiblen Speicher verwenden

| Variable                   | Beispiel | Beschreibung                                     |
| -------------------------- | ------- | ------------------------------------------------ |
| `STORAGE_DRIVER`           | `s3`    | Der für die Dateispeicherung zu verwendende Speichertreiber. |
| `AWS_S3_ACCESS_KEY_ID`     |         | Ihre AWS-S3-Zugriffsschlüssel-ID.                |
| `AWS_S3_SECRET_ACCESS_KEY` |         | Ihr geheimer AWS-S3-Zugriffsschlüssel.           |
| `AWS_S3_REGION`            |         | Die Region, in der sich Ihr S3-Bucket befindet.  |
| `AWS_S3_BUCKET`            |         | Der Name Ihres S3-Buckets.                       |
| `AWS_S3_ENDPOINT`          |         | Die Endpunkt-URL für Ihren S3-Dienst (optional). |
| `AWS_S3_FORCE_PATH_STYLE`  | `true`  | Erzwingt, dass die Anfrage Path-Style-Adressierung verwendet (optional). |

### Azure Blob Storage verwenden

| Variable                       | Beispiel | Beschreibung                                               |
| ------------------------------ | ------- | ---------------------------------------------------------- |
| `STORAGE_DRIVER`               | `azure` | Der für die Dateispeicherung zu verwendende Speichertreiber. |
| `AZURE_STORAGE_ACCOUNT_NAME`   |         | Ihr Azure-Storage-Kontoname.                               |
| `AZURE_STORAGE_ACCOUNT_KEY`    |         | Ihr Azure-Storage-Kontoschlüssel.                          |
| `AZURE_STORAGE_CONTAINER`      |         | Der Name Ihres Blob-Containers.                            |


### Größenbeschränkungen für Datei-Uploads

| Variable                 | Beispiel | Beschreibung                                          |
|--------------------------|---------|-------------------------------------------------------|
| `FILE_UPLOAD_SIZE_LIMIT` | `50mb`  | Die maximale Dateigröße pro Upload. Der Standardwert ist 50mb. |
| `FILE_IMPORT_SIZE_LIMIT` | `100mb` | Die maximale Größenbeschränkung für Datei-Importe. Der Standardwert ist 200mb. |


## E-Mail-Konfiguration

### SMTP verwenden

| Variable    | Beispiel            | Beschreibung                                     |
|-------------| ------------------- | ------------------------------------------------ |
| `MAIL_DRIVER` | `smtp`              | Der für den E-Mail-Versand zu verwendende E-Mail-Treiber. |
| `SMTP_HOST` | `smtp.example.com`  | Der für den E-Mail-Versand zu verwendende SMTP-Server. |
| `SMTP_PORT` | `587`               | Der für den SMTP-Server zu verwendende Port.     |
| `SMTP_USERNAME` |                     | Der Benutzername für den SMTP-Server.            |
| `SMTP_PASSWORD` |                     | Das Passwort für den SMTP-Server.                |
| `SMTP_SECURE` | `false`               | Verwendet TLS bei der Verbindung mit dem Server, üblicherweise für Port 465. Standardmäßig false. [Siehe nodemailer 'secure' für Details](https://nodemailer.com/smtp/)  |
| `MAIL_FROM_ADDRESS` | `hello@example.com` | Die E-Mail-Adresse, von der E-Mails gesendet werden. |
| `MAIL_FROM_NAME` | `Docmost`           | Der Name, unter dem E-Mails gesendet werden.     |

### Postmark verwenden

| Variable            | Beispiel            | Beschreibung                                                    |
| ------------------- | ------------------- | --------------------------------------------------------------- |
| `MAIL_DRIVER`       | `postmark`          | Der für den E-Mail-Versand zu verwendende E-Mail-Treiber.       |
| `POSTMARK_TOKEN`    |                     | Das Token für Postmark, falls Postmark als `MAIL_DRIVER` verwendet wird. |
| `MAIL_FROM_ADDRESS` | `hello@example.com` | Die E-Mail-Adresse, von der E-Mails gesendet werden.            |
| `MAIL_FROM_NAME`    | `Docmost`           | Der Name, unter dem E-Mails gesendet werden.                    |

## AI-Konfiguration (Enterprise)

| Variable                      | Beispiel                       | Beschreibung                                                                                                                                                            |
|-------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AI_DRIVER`                   | `openai`                       | Der zu verwendende AI-Anbieter. Optionen: `openai`, `openai-compatible`, `gemini`, `ollama`.                                                                            |
| `AI_EMBEDDING_MODEL`          | `text-embedding-3-small`       | Das für die Erzeugung von Vektor-Embeddings verwendete Modell.                                                                                                          |
| `AI_COMPLETION_MODEL`         | `gpt-4o-mini`                  | Das für die Beantwortung von Fragen verwendete Modell.                                                                                                                  |
| `AI_EMBEDDING_DIMENSION`      | `1536`                         | Optional. Die Vektordimension für pgvector. Wird für voreingestellte Modelle automatisch erkannt. Unterstützte Werte: `768`, `1024`, `1536`, `2000`, `3072`.            |
| `AI_EMBEDDING_SUPPORTS_MRL`   | `true`                         | Optional. Steuert, ob der Parameter `dimensions` an die API des Embedding-Modells gesendet wird. Standardmäßig wird die Modellvoreinstellung verwendet, falls verfügbar, andernfalls `true`. Auf `false` setzen für Modelle, die keinen `dimensions`-Parameter akzeptieren. |
| `OPENAI_API_KEY`              | `sk-proj-xxxxx`                | Ihr OpenAI-API-Schlüssel. Erforderlich, wenn `AI_DRIVER` auf `openai` oder `openai-compatible` gesetzt ist.                                                             |
| `OPENAI_API_URL`              | `https://api.openai.com/v1`    | Optional. Benutzerdefinierter API-Endpunkt für Azure OpenAI oder kompatible Anbieter.                                                                                   |
| `GEMINI_API_KEY`              | `AIzaSyxxxxx`                  | Ihr Google-Gemini-API-Schlüssel. Erforderlich, wenn `AI_DRIVER=gemini`.                                                                                                 |
| `OLLAMA_API_URL`              | `http://localhost:11434`       | Die URL Ihrer Ollama-Instanz. Erforderlich, wenn `AI_DRIVER=ollama`.                                                                                                    |

## DRAW.IO (Diagrams.net) Konfiguration
Die standardmäßige Draw.io-Einbettungs-URL ist `https://embed.diagrams.net`.
| Variable  | Beispiel                 | Beschreibung               |
|-----------| ------------------------ |----------------------------|
| `DRAWIO_URL` | `https://embed.diagrams.net` | Die URL Ihres benutzerdefinierten draw.io-Servers. |

## Suchkonfiguration (Enterprise)

| Variable            | Beispiel                  | Beschreibung                                                                                                                                                                                   |
|---------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SEARCH_DRIVER`     | `typesense`               | Der zu verwendende Suchmaschinen-Treiber. Der Standardwert ist `postgres` (Datenbanksuche). `typesense` ist eine speziell entwickelte Suchmaschine mit tippfehlertoleranter, schneller Suche, die in der Enterprise Edition verfügbar ist. |
| `TYPESENSE_URL`     | `http://localhost:8108`   | Die URL Ihres Typesense-Servers. Erforderlich, wenn `SEARCH_DRIVER=typesense`. (Enterprise)                                                                                                     |
| `TYPESENSE_API_KEY` | `your_api_key_here`       | Ihr Typesense-API-Schlüssel mit Lese-/Schreibberechtigungen. Erforderlich, wenn `SEARCH_DRIVER=typesense`. (Enterprise)                                                                         |
| `TYPESENSE_LOCALE`  | `en`                      | Die Locale für Textanalyse und Suche. Der Standardwert ist `en`. Beispiele: `en`, `es`, `fr`, `de`, `ja`, `zh`, `ko` usw. Eine vollständige Liste finden Sie unter [Von Typesense unterstützte Sprachen](https://typesense.org/docs/latest/api/search.html#supported-languages). (Enterprise) |

## SAML

Der Großteil der SAML-Konfiguration erfolgt über die Seite **Einstellungen → Sicherheit & SSO** in der App. Die folgende Variable ist die Ausnahme, da sie auf dem Server gesetzt werden muss.

| Variable                               | Beispiel | Beschreibung                                                                                                                                                                                                                                                                                                                                                |
|----------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SAML_DISABLE_REQUESTED_AUTHN_CONTEXT` | `false` | Wenn auf `true` gesetzt, lässt Docmost das Element `RequestedAuthnContext` (das `PasswordProtectedTransport` anfordert) aus der SAML-AuthnRequest weg. Dadurch können Identitätsanbieter wie AD FS ihre Standard-Authentifizierungsmethode verwenden, beispielsweise die integrierte Windows-Authentifizierung für Intranet-Clients. Gilt instanzweit für alle SAML-Anbieter. Standardmäßig `false`. |

## Sicherheit

### Iframe-Einbettung

Standardmäßig blockiert Docmost die Einbettung Ihrer Instanz in einem `<iframe>` durch andere Ursprünge. Dies schützt Benutzer vor Clickjacking-Angriffen, bei denen eine bösartige Website Docmost in einem versteckten Frame lädt und angemeldete Benutzer dazu verleitet, auf zerstörerische Aktionen zu klicken. Standardmäßig antwortet Docmost mit `X-Frame-Options: SAMEORIGIN`, sodass nur Seiten, die von Ihrem eigenen Docmost-Ursprung ausgeliefert werden, Docmost-Inhalte in einem Iframe einbetten können.

Öffentlich geteilte Seiten (`/share/...`) sind von dieser Einschränkung ausgenommen und können immer von jedem Ursprung aus eingebettet werden. Geteilte Inhalte sind öffentlich, schreibgeschützt und enthalten keine authentifizierten Aktionen, sodass sie keine Clickjacking-Angriffsfläche bieten.

Wenn Sie den Rest von Docmost (die App selbst) berechtigterweise in einem anderen Tool einbetten müssen, beispielsweise in einem Intranet-Portal oder LMS, verwenden Sie die folgenden Variablen.

| Variable                 | Beispiel                                                  | Beschreibung                                                                                                                                                                                                                                                                                                 |
|--------------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IFRAME_EMBED_ALLOWED`   | `false`                                                   | Hauptschalter für die externe Iframe-Einbettung. Standardmäßig `false`, was `X-Frame-Options: SAMEORIGIN` ausgibt. Auf `true` setzen, um externe Einbettung zuzulassen.                                                                                                                                      |
| `IFRAME_ALLOWED_ORIGINS` | `https://intranet.example.com,https://portal.example.com` | Optionale, durch Kommas getrennte Zulassungsliste. Wird nur berücksichtigt, wenn `IFRAME_EMBED_ALLOWED=true`. Wenn angegeben, gibt Docmost `Content-Security-Policy: frame-ancestors 'self' <origins>` anstelle von `X-Frame-Options` aus. Wenn leer, ist die Einbettung von jedem Ursprung aus zulässig. |

## Telemetrie
Wir erfassen anonym die aktive Version, die Anzahl der Benutzer, die Anzahl der Seiten sowie die Anzahl der Bereiche und Arbeitsbereiche.

| Variable  | Beispiel                 | Beschreibung               |
|-----------| ------------------------ |----------------------------|
| `DISABLE_TELEMETRY` | `true` | Zum Deaktivieren der Telemetrie |
