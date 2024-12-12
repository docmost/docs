---
sidebar_position: 3
---

# Environment Variables

To configure your application, set the following environment variables. These variables control various aspects of the application's behavior, including URLs, database connections, and third-party integrations.

## Application Configuration

| Variable               | Example                      | Description                                                                           |
| ---------------------- |------------------------------|---------------------------------------------------------------------------------------|
| `APP_URL`              | `http://docmost.example.com` | The base URL of your application. It is optional, but useful for correct email links. |
| `APP_SECRET`           | `random_key`                 | A random key used for application security.                                           |
| `PORT`                 | `3000`                       | The port on which the application will run.                                           |
| `JWT_TOKEN_EXPIRES_IN` | `30d`                        | The expiration time for JSON Web Tokens (JWT).                                        |

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
| `FILE_UPLOAD_SIZE_LIMIT` | `50mb`  | The maximum file size per upload. Default is 50mb. |

### Using S3-compatible storage

| Variable                   | Example | Description                                      |
| -------------------------- | ------- | ------------------------------------------------ |
| `STORAGE_DRIVER`           | `s3`    | The storage driver to use for file storage.      |
| `AWS_S3_ACCESS_KEY_ID`     |         | Your AWS S3 access key ID.                       |
| `AWS_S3_SECRET_ACCESS_KEY` |         | Your AWS S3 secret access key.                   |
| `AWS_S3_REGION`            |         | The region where your S3 bucket is located.      |
| `AWS_S3_BUCKET`            |         | The name of your S3 bucket.                      |
| `AWS_S3_ENDPOINT`          |         | The endpoint URL for your S3 service (optional). |

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

## DRAW.IO (Diagrams.net) configuration
The default Draw.io embed url is `https://embed.diagrams.net`.
| Variable  | Example                  | Description                |
|-----------| ------------------------ |----------------------------|
| `DRAWIO_URL` | `https://embed.diagrams.net` | Your custom draw.io server url. |
