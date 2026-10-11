---
sidebar_position: 2
tags:
  - business
  - enterprise
---

# GitLab

Configure a GitLab OAuth application for Docmost.

## Set up

1. [Create an OAuth application in GitLab](https://docs.gitlab.com/integration/oauth_provider/), owned by a user or group on the GitLab instance you want to connect.
2. Add this redirect URI and select the `read_api` and `read_user` scopes:

   ```text
   <APP_URL>/api/integrations/oauth/gitlab/callback
   ```

3. Copy the application ID and secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_GITLAB_CLIENT_ID=<application-id>
   INTEGRATION_GITLAB_CLIENT_SECRET=<application-secret>
   # Only for GitLab self-managed:
   INTEGRATION_GITLAB_URL=https://gitlab.example.com
   ```

   Setting `INTEGRATION_GITLAB_URL` replaces GitLab.com support with your self-managed instance.

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.

## Install in a workspace

After setup, a workspace admin can [install GitLab](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/gitlab#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | App credentials are missing | Set `INTEGRATION_GITLAB_CLIENT_ID` and `INTEGRATION_GITLAB_CLIENT_SECRET`, then restart. |
| **OAuth connection failed. Please try again.** | The redirect URI, credentials, or allowed scopes may be wrong | Check the app's redirect URI, ID, secret, `read_api`, and `read_user`. The server log's `Token exchange failed for gitlab` message gives the provider's error. |
| Self-managed links stay normal links | The configured host is wrong | Check `INTEGRATION_GITLAB_URL` and restart. An invalid URL logs a warning and falls back to GitLab.com. |
