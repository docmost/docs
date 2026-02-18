---
sidebar_position: 4
---

# Caddy

Caddy is a modern web server with automatic HTTPS built in. It obtains and renews SSL certificates from Let's Encrypt automatically with no additional configuration.

## Docker Compose with Caddy

Create a `Caddyfile` in the same directory as your `docker-compose.yml`:
Replace `docmost.example.com` with your actual domain.

```text title="Caddyfile"
docmost.example.com {
    reverse_proxy docmost:3000
}
```

Below is a full `docker-compose.yml` that includes Docmost with Caddy as the reverse proxy.

```yaml title="docker-compose.yml"
services:
  caddy:
    image: caddy:2
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    depends_on:
      - docmost
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
  caddy_data:
  caddy_config:
```

That's it. Caddy automatically handles SSL certificates and WebSocket connections.

## File Structure

```
docmost/
├── docker-compose.yml
└── Caddyfile
```

## Verify

After starting the services with `docker compose up -d`, navigate to `https://docmost.example.com` in your browser. You should see the Docmost setup page.
