---
slug: /installation
sidebar_position: 1
---

# Installation

For now, Docker is the recommended mode of installation. If you are a developer, you may be interested in the [development guide](/self-hosting/development).

## Prerequisites

Before you begin, make sure you have Docker installed on your server. See the [official Docker installation guide](https://docs.docker.com/engine/install/) based on your OS.

If you use Ubuntu, you can install Docker with the commands below:

<details>
  <summary>Click to see Ubuntu docker installation commands</summary>

```shell
    # Add Docker's official GPG key:
    sudo apt-get update -qqy
    sudo apt-get install ca-certificates curl -qqy
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    
    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -qqy
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -qqy
```

</details>

## Installation Steps

### 1. Setup the Docker compose file

Create a new directory for Docmost and download the Docker compose file with commands below:

```shell
mkdir docmost
cd docmost
curl -O https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml
```

Next, open the docker-compose.yml file. On Linux, you can use vim:

```shell
vi docker-compose.yml
```

The downloaded `docker-compose.yml` file should contain the template below with default environment variables.

:::info
`APP_URL` is optional, but useful for correct email links.
:::

```yaml title="docmost/docker-compose.yml"
version: "3"

services:
  docmost:
    image: docmost/docmost:latest
    depends_on:
      - db
      - redis
    environment:
      APP_URL: "http://localhost:3000"
      APP_SECRET: "REPLACE_WITH_LONG_SECRET"
      DATABASE_URL: "postgresql://docmost:STRONG_DB_PASSWORD@db:5432/docmost?schema=public"
      REDIS_URL: "redis://redis:6379"
    ports:
      - "3000:3000"
    restart: unless-stopped
    volumes:
      - docmost:/app/data/storage

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: docmost
      POSTGRES_USER: docmost
      POSTGRES_PASSWORD: STRONG_DB_PASSWORD
    restart: unless-stopped
    volumes:
      - db_data:/var/lib/postgresql/data

  redis:
    image: redis:7.2-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data

volumes:
  docmost:
  db_data:
  redis_data:
```

### Replace the default configs

You are to replace the default environment variables in the `docker-compose.yml` file.

The `APP_URL` should be replaced with your chosen domain. E.g. `https://example.com` or `https://docmost.example.com`.

The `APP_SECRET` value must be replaced with a long random secret key.  
You can generate the secret with `openssl rand -hex 32`. If you leave the default value, the app will fail to start.

Replace `STRONG_DB_PASSWORD` in the `POSTGRES_PASSWORD` environment variable with a secure password.

Update the `DATABASE_URL` default `STRONG_DB_PASSWORD` value with your chosen Postgres password.

To configure Emails or File storage driver, see the [Configuration](/self-hosting/configuration) doc.  
The default File storage driver is `local storage`. You don't have to do anything unless you wish to use S3 storage.

### Start the Services

Make sure you are inside the `docmost` directory which contains the `docker-compose.yml` file.

To start the services, run:

```shell
docker compose up -d
```

Once the services are up and running, verify the installation by opening your web browser and navigating to:
`http://localhost:3000` or the domain that points to your server.

If all is set, you should see the Docmost setup page which will enable you set up your workspace and account.

<p align="center">
<img src="/docs/img/setup.png" width="700"/>
</p>

After a successful setup, you will become the workspace owner. You can then invite other users to join your workspace.
Congratulations 🎉.

If you encounter any issues, feel free to create an issue or discussion on the [GitHub repo](https://github.com/docmost/docmost).

## Upgrade

To upgrade to the latest Docmost version, run the following commands:

```shell
docker pull docmost/docmost
docker compose up --force-recreate --build docmost -d
```

## Helpful docker commands

To stop the services:

```shell
docker compose down
```

To restart the services:

```shell
docker compose restart
```
