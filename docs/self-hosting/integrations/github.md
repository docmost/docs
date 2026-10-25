---
sidebar_position: 1
---

# GitHub

Preview repositories, pull requests, issues, commits, files, and repository lists.

## Set up

1. [Register a GitHub OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) on GitHub.com or your GitHub Enterprise Server instance.
2. Set its homepage URL to your Docmost address and its authorization callback URL to:

   ```text
   https://docmost.example.com/api/integrations/oauth/github/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Copy the client ID and create a client secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_GITHUB_CLIENT_ID=<client-id>
   INTEGRATION_GITHUB_CLIENT_SECRET=<client-secret>
   # Only for GitHub Enterprise Server:
   INTEGRATION_GITHUB_URL=https://github.example.com
   ```

   Setting `INTEGRATION_GITHUB_URL` replaces GitHub.com support with your Enterprise Server instance.

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.
5. [Install GitHub in your workspace](/self-hosting/integrations#install-and-connect).

Docmost requests `repo` and `read:user`. GitHub's [`repo` scope](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) includes write access, although Docmost only reads data for previews.

Docmost uses the app's credentials to preview public repositories without a member's connection. These credentials can only read public data. On GitHub Enterprise Server in private mode, every preview requires a connected account.

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **GitHub**, and sign in.

If a private repository's preview is missing information, check that your GitHub account has access and your organization allows the OAuth app.

## Supported links

| Link | Example |
|------|---------|
| Repository | `https://github.com/example-org/docs` |
| Pull request | `https://github.com/example-org/docs/pull/42` |
| Issue | `https://github.com/example-org/docs/issues/12` |
| Commit | `https://github.com/example-org/docs/commit/a1b2c3d` |
| Commit in a pull request | `https://github.com/example-org/docs/pull/42/commits/a1b2c3d` |
| File, with optional line range | `https://github.com/example-org/docs/blob/main/README.md#L10-L20` |
| Pull requests, issues, or releases list | `https://github.com/example-org/docs/pulls`, `https://github.com/example-org/docs/issues`, `https://github.com/example-org/docs/releases` |

## Troubleshooting

| Problem | What to do |
|---------|------------|
| Public repositories show a connect button | Check the server log for `Public unfurl failed`. The app credentials may be wrong or GitHub may be rate-limiting requests. |
| Enterprise Server links stay normal links | Check `INTEGRATION_GITHUB_URL` and restart. An invalid URL logs a warning and falls back to GitHub.com. |
