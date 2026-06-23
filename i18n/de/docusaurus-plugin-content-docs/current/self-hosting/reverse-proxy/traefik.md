---
sidebar_position: 2
---

# Traefik

Traefik ist ein moderner, cloud-nativer Reverse Proxy mit automatischem HTTPS über Let's Encrypt. Die Konfiguration für Docker erfolgt über Docker-Labels, was ihn zu einer guten Wahl für Docker-Compose-Bereitstellungen macht.

## Docker Compose mit Traefik

Nachfolgend finden Sie eine vollständige `docker-compose.yml`, die Docmost mit Traefik als Reverse Proxy enthält. Traefik übernimmt die SSL-Zertifikate automatisch über Let's Encrypt.

Ersetzen Sie `docmost.example.com` durch Ihre tatsächliche Domain und `admin@example.com` durch Ihre E-Mail-Adresse.

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
Traefik unterstützt WebSocket-Verbindungen nativ. Für die WebSocket-Unterstützung ist keine zusätzliche Konfiguration erforderlich.
:::

## Funktionsweise

- Traefik lauscht auf den Ports 80 und 443 und leitet HTTP automatisch auf HTTPS um.
- Das Label `traefik.http.routers.docmost.rule` leitet den Datenverkehr für Ihre Domain an den Docmost-Container weiter.
- SSL-Zertifikate werden automatisch über Let's Encrypt bezogen und erneuert.
- WebSocket-Verbindungen für die Echtzeit-Zusammenarbeit werden automatisch von Traefik verarbeitet.

## Überprüfen

Nachdem Sie die Dienste mit `docker compose up -d` gestartet haben, rufen Sie `https://docmost.example.com` in Ihrem Browser auf. Sie sollten die Docmost-Einrichtungsseite sehen.
