---
sidebar_position: 2
---

# Configuration

## Email
To send emails, you will have to configure the email driver. This is necessary for inviting new users to your workspace.  
Docmost supports both SMTP and Postmark email drivers.

#### Using SMTP
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

### Using Postmark:
```shell
MAIL_DRIVER=postmark
POSTMARK_TOKEN=
MAIL_FROM_ADDRESS=hello@example.com
MAIL_FROM_NAME=Docmost
```

## File Storage
Docmost supports both local storage and S3-compatible storage drivers. The default driver is `local storage`.
```shell
STORAGE_DRIVER=local
```

### Using S3-Compatible Storage 
If you wish to use an S3-compatible storage, you have to add the below environment variables:

```shell
STORAGE_DRIVER=s3
AWS_S3_ACCESS_KEY_ID=
AWS_S3_SECRET_ACCESS_KEY=
AWS_S3_REGION=
AWS_S3_BUCKET=
AWS_S3_ENDPOINT=
AWS_S3_FORCE_PATH_STYLE=
```

Being S3-compatible means Docmost can work with AWS S3, Backblaze, Wasabi, DigitalOcean Spaces, Minio, and other S3-compatible providers.


### File upload limit
The maximum file size that can be uploaded on the editor.
```shell
FILE_UPLOAD_LIMIT=100mb
```

### File import size limit
The maximum size limit for an import file.
```shell
FILE_IMPORT_SIZE_LIMIT=200mb
```

## Telemetry
We anonymously collect the active version, user count, page count, space and workspace count.
To disable telemetry:
```shell
DISABLE_TELEMETRY=true
```


Refer to the [Environment Variables](/self-hosting/environment-variables) to see all available environment variables.  
