---
sidebar_position: 2
---

# Traefik

Traefik is a modern, cloud-native reverse proxy with automatic HTTPS via Let's Encrypt. Configuration for Docker is done through Docker labels, making it a good fit for Docker Compose deployments.

## Docker Compose with Traefik

Below is a full `docker-compose.yml` that includes Docmost with Traefik as the reverse proxy. Traefik automatically handles SSL certificates through Let's Encrypt.

Replace `docmost.example.com` with your actual domain and `admin@example.com` with your email address.

```yaml title="docker-compose.yml"
services:
  traefik:
    image: traefik:v3.6
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=admin@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - letsencrypt:/letsencrypt
    restart: unless-stopped

  docmost:
    image: docmost/docmost:latest
    depends_on:
      - db
      - redis
    environment:
      APP_URL: 'https://docmost.example.com'
      APP_SECRET: 'REPLACE_WITH_LONG_SECRET'
      DATABASE_URL: 'postgresql://docmost:STRONG_DB_PASSWORD@db:5432/docmost'
      REDIS_URL: 'redis://redis:6379'
    ports:
      - "3000:3000"
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.docmost.rule=Host(`docmost.example.com`)"
      - "traefik.http.routers.docmost.entrypoints=websecure"
      - "traefik.http.routers.docmost.tls.certresolver=letsencrypt"
      - "traefik.http.services.docmost.loadbalancer.server.port=3000"
    volumes:
      - docmost:/app/data/storage

  db:
    image: postgres:18
    environment:
      POSTGRES_DB: docmost
      POSTGRES_USER: docmost
      POSTGRES_PASSWORD: STRONG_DB_PASSWORD
    restart: unless-stopped
    volumes:
      - db_data:/var/lib/postgresql

  redis:
    image: redis:8
    command: ["redis-server", "--appendonly", "yes", "--maxmemory-policy", "noeviction"]
    restart: unless-stopped
    volumes:
      - redis_data:/data

volumes:
  docmost:
  db_data:
  redis_data:
  letsencrypt:
```

:::tip
Traefik natively supports WebSocket connections. No additional configuration is required for WebSocket support.
:::

## How It Works

- Traefik listens on ports 80 and 443 and automatically redirects HTTP to HTTPS.
- The `traefik.http.routers.docmost.rule` label routes traffic for your domain to the Docmost container.
- SSL certificates are automatically obtained and renewed via Let's Encrypt.
- WebSocket connections for real-time collaboration are handled automatically by Traefik.

## Verify

After starting the services with `docker compose up -d`, navigate to `https://docmost.example.com` in your browser. You should see the Docmost setup page.
