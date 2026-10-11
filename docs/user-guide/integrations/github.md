---
sidebar_position: 1
---

# GitHub

Preview repositories, pull requests, issues, commits, files, and repository lists.

## Connect your account

A workspace admin must [install GitHub](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/github).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **GitHub**, and authorize the account you use to access the linked repositories.

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

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| A private resource has no details | The connected account or OAuth app cannot access it | Check access with that GitHub account and ask the repository or organization admin to allow the app if required. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
