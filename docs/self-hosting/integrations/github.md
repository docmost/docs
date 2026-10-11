---
sidebar_position: 1
---

# GitHub

Configure a GitHub OAuth app for Docmost.

## Set up

1. [Register a GitHub OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) on GitHub.com or your GitHub Enterprise Server instance.
2. Set its homepage URL to your Docmost address and its authorization callback URL to:

   ```text
   <APP_URL>/api/integrations/oauth/github/callback
   ```

3. Copy the client ID and create a client secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_GITHUB_CLIENT_ID=<client-id>
   INTEGRATION_GITHUB_CLIENT_SECRET=<client-secret>
   # Only for GitHub Enterprise Server:
   INTEGRATION_GITHUB_URL=https://github.example.com
   ```

   Setting `INTEGRATION_GITHUB_URL` replaces GitHub.com support with your Enterprise Server instance.

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.

Docmost requests `repo` and `read:user`. GitHub's [`repo` scope](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) includes write access, although Docmost only reads data for previews.

## Install in a workspace

After setup, a workspace admin can [install GitHub](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/github#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | App credentials are missing | Set `INTEGRATION_GITHUB_CLIENT_ID` and `INTEGRATION_GITHUB_CLIENT_SECRET`, then restart. |
| **OAuth connection failed. Please try again.** | App credentials or callback URL may be wrong | Match the callback to `APP_URL` and check the credentials. The server log's `Token exchange failed for github` message gives the provider's error. |
| Enterprise Server links stay normal links | The configured host is wrong | Check `INTEGRATION_GITHUB_URL` and restart. An invalid URL logs a warning and falls back to GitHub.com. |
