---
sidebar_position: 4
---

# Linear

Configure a Linear OAuth application for Docmost.

## Set up

1. [Create a Linear OAuth application](https://linear.app/developers/oauth-2-0-authentication).
2. Add this redirect callback URL. Docmost requests the `read` scope:

   ```text
   <APP_URL>/api/integrations/oauth/linear/callback
   ```

3. Copy the client ID and secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_LINEAR_CLIENT_ID=<client-id>
   INTEGRATION_LINEAR_CLIENT_SECRET=<client-secret>
   ```

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.

## Install in a workspace

After setup, a workspace admin can [install Linear](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/linear#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | App credentials are missing | Set `INTEGRATION_LINEAR_CLIENT_ID` and `INTEGRATION_LINEAR_CLIENT_SECRET`, then restart. |
| **OAuth connection failed. Please try again.** | App credentials or callback URL may be wrong | Check the client ID, secret, and registered redirect URL. The server log's `Token exchange failed for linear` message gives the provider's error. |
