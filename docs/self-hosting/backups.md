---
sidebar_position: 6
---

# Backup and Restore

Docmost stores workspace data in PostgreSQL and uploaded files on disk or in object storage. This guide covers backup and restore for Docker Compose and non-Docker installations.

## What to back up

| Data | What to save |
| --- | --- |
| PostgreSQL | A database dump containing pages, users, settings, and other workspace data. |
| Uploaded files | The local storage directory, or your S3 bucket or Azure Blob container. |
| Configuration | `docker-compose.yml`, any `.env` files, and other deployment configuration. |

Record the Docmost and PostgreSQL versions with each backup. Keep the original `APP_SECRET`; it is required to decrypt MFA secrets, integration tokens, and SIEM credentials after a restore.

Keep backups private and store a copy outside the Docmost server. If you use S3, Azure Blob Storage, or ClickHouse, back up those services separately. This guide does not include Redis queues.

## Backup

The commands below can run while Docmost is online. [`pg_dump`](https://www.postgresql.org/docs/current/backup-dump.html) takes a consistent database snapshot without blocking normal use.

Uploaded files are copied separately. Files changed or deleted during the backup may not match the database snapshot. To avoid this, stop all Docmost instances until both backups finish. Keep PostgreSQL running.

Create a backup directory outside the uploaded files directory:

```shell
umask 077
backup_dir="$(pwd)/backups/docmost-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"
```

### Docker Compose

Run these commands from the directory containing `docker-compose.yml`.

The Docker examples use the Compose service names `docmost`, `db`, and `redis` from the [installation guide](/installation). Replace them if yours differ. Replace `<database_user>` with your `POSTGRES_USER` value and `<database_name>` with your `POSTGRES_DB` value before running the commands.

To pause Docmost during the backup, run `docker compose stop docmost` first.

Back up the database:

```shell
docker compose exec -T db pg_dump -U <database_user> -d <database_name> -Fc > "$backup_dir/docmost-database.dump"
```

If you use the local storage driver, back up the uploads volume:

```shell
docker compose run --rm --no-deps -T --user root --entrypoint tar docmost \
  -czf - -C /app/data/storage . > "$backup_dir/docmost-storage.tar.gz"
```

Copy your Compose file:

```shell
cp docker-compose.yml "$backup_dir/"
```

Copy any `.env` files into the same backup directory. If you stopped Docmost, start it again with `docker compose start docmost`.

### PostgreSQL without Docker

Use `pg_dump` from the same PostgreSQL major version as your server. Replace `<database_user>` and `<database_name>` with your PostgreSQL user and database name. Change `localhost` if your database runs on another host.

```shell
pg_dump -h localhost -U <database_user> -d <database_name> -Fc -f "$backup_dir/docmost-database.dump"
```

### Local storage without a Docker volume

If you use the local storage driver, uploaded files are stored in `data/storage` under the Docmost project directory. Replace `/opt/docmost/data/storage` with your installation's path.

```shell
tar -czf "$backup_dir/docmost-storage.tar.gz" -C /opt/docmost/data/storage .
```

Copy your configuration files into the backup directory. If you stopped Docmost, restart it using your process manager after both the database and files have been backed up.

## Restore

Restore the database and files from the same backup. Use the original `APP_SECRET`, the same Docmost version, and the same PostgreSQL major version. If you plan to upgrade, do it after the restore.

The PostgreSQL server must have the `unaccent` and `pg_trgm` extensions available, plus `vector` if you use pgvector. The restore user must have permission to recreate these extensions.

The [`pg_restore`](https://www.postgresql.org/docs/current/app-pgrestore.html) commands below overwrite existing Docmost data. Back up the target instance first and keep all Docmost instances stopped until the database and files are restored.

Set the path to your backup directory:

```shell
backup_dir="/path/to/backups/docmost-20261029-120000"
```

### Docker Compose

Restore your Compose configuration and `.env` files. Set the Docmost image tag to the version you backed up, even if you previously used `latest`.

Run these commands from the directory containing `docker-compose.yml`. Use your Compose service names, and replace `<database_user>` with `POSTGRES_USER` and `<database_name>` with `POSTGRES_DB` from your restored configuration:

```shell
docker compose stop docmost
docker compose up -d db redis
docker compose exec -T db pg_isready -U <database_user> -d <database_name>
```

Wait until PostgreSQL reports that it is accepting connections, then restore the database:

```shell
docker compose exec -T db pg_restore -U <database_user> -d <database_name> \
  --clean --if-exists --no-owner --no-privileges --single-transaction \
  < "$backup_dir/docmost-database.dump"
```

If you use the local storage driver, restore the uploads volume:

```shell
docker compose run --rm --no-deps -T --user root --entrypoint tar docmost \
  -xzf - -C /app/data/storage < "$backup_dir/docmost-storage.tar.gz"
```

Once the database and files are restored, start Docmost:

```shell
docker compose up -d docmost
```

### PostgreSQL without Docker

On a new PostgreSQL server, create the database and its user first. Use `pg_restore` from the same PostgreSQL major version used for the backup. Restore as the user that owns the Docmost database and its objects:

```shell
pg_restore -h localhost -U <database_user> -d <database_name> \
  --clean --if-exists --no-owner --no-privileges --single-transaction \
  "$backup_dir/docmost-database.dump"
```

### Local storage without a Docker volume

Replace `/opt/docmost/data/storage` with your local storage path. Run these commands as the operating system user that runs Docmost so the files remain writable:

```shell
mkdir -p /opt/docmost/data/storage
tar -xzf "$backup_dir/docmost-storage.tar.gz" -C /opt/docmost/data/storage
```

Restore your configuration, then restart Docmost.
