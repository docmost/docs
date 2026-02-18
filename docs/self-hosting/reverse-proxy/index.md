import DocCardList from '@theme/DocCardList';

# Reverse Proxy

When deploying Docmost in production, it is recommended to run it behind a reverse proxy. A reverse proxy handles SSL/TLS termination, manages incoming traffic, and forwards requests to the Docmost application.

## Why Use a Reverse Proxy?

- **SSL/TLS** — Serve Docmost over HTTPS with automatic or manual certificate management.
- **Security** — Add an additional layer between the internet and your application.
- **Load balancing** — Distribute traffic across multiple instances if needed.

## WebSocket Support

Docmost's real-time collaborative editor relies on WebSockets. Your reverse proxy **must** be configured to support WebSocket connections, otherwise the page editor will be in read-only mode.

Make sure your reverse proxy forwards the `Upgrade` and `Connection` headers to enable WebSocket connections.

## Choose Your Reverse Proxy

Select a reverse proxy guide based on your preference:


<DocCardList />
:::tip
Before setting up a reverse proxy, make sure the A record for your domain points to the server IP address where Docmost is running. Replace docmost.example.com with your actual domain.
:::
