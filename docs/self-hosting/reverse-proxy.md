---
sidebar_position: 4
---

# Reverse Proxy Setup

If you want to expose docmost to the internet, you should hide it behind a reverse proxy with SSL enabled.
You need to enable websockets for a working setup.

## Nginx
In addition to the usual configuration for SSL, the following configuration is required for docmost to operate:

```
http {

    # Adjust as required. This is the maximum size for file uploads.
    # The default value 1M might be a little too small.
    # This should be equal or higher than the FILE_UPLOAD_SIZE_LIMIT environment in your docker compose file
    client_max_body_size 10M;

    server {

        location / {

            # Adjust host and port as required.
            proxy_pass http://localhost:3000/;

            # These configuration options are required for WebSockets to work.
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";

            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Host $server_name;
            add_header Referrer-Policy "strict-origin-when-cross-origin";
        }
    }
}
```

## Traefik
TBD

## Caddy
TBD

## Apache2
TBD