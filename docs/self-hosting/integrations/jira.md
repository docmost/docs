---
sidebar_position: 3
tags:
  - business
  - enterprise
---

# Jira

Preview Jira issues, including issues selected on boards or backlogs.

## Set up

Use this callback URL for either setup:

```text
https://docmost.example.com/api/integrations/oauth/jira/callback
```

Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

### Jira Cloud

1. Create an [OAuth 2.0 integration in the Atlassian developer console](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/).
2. Configure OAuth 2.0 authorization with the callback above. Add the Jira API scopes `read:jira-work` and `read:jira-user`. Docmost also requests `offline_access` to refresh access.
3. Enable app sharing so members other than the app owner can authorize it. Copy the client ID and secret into the Docmost server configuration:

   ```shell
   INTEGRATION_ATLASSIAN_CLIENT_ID=<client-id>
   INTEGRATION_ATLASSIAN_CLIENT_SECRET=<client-secret>
   ```

Leave `INTEGRATION_JIRA_URL` unset for Jira Cloud.

### Jira Data Center

1. Create an [incoming application link](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) for an external application in Jira.
2. Enter the callback above and grant the [`READ` scope](https://confluence.atlassian.com/adminjiraserver/oauth-2-0-scopes-for-incoming-links-1115659069.html).
3. Copy the generated client ID and secret into the Docmost server configuration:

   ```shell
   INTEGRATION_JIRA_URL=https://jira.example.com
   INTEGRATION_JIRA_CLIENT_ID=<client-id>
   INTEGRATION_JIRA_CLIENT_SECRET=<client-secret>
   ```

Setting `INTEGRATION_JIRA_URL` selects Data Center instead of Jira Cloud.

The editor does not recognize Data Center links with a context path, such as `/jira/browse/DOC-12`.

For either setup, set `APP_URL` to your Docmost base address without a path, restart Docmost, then [install Jira in your workspace](/self-hosting/integrations#install-and-connect).

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Jira**, and sign in. For Jira Cloud, grant access to the site that contains your issues. If you chose the wrong site, reconnect and grant access to the correct one.

## Supported links

| Link | Example |
|------|---------|
| Issue | `https://example-team.atlassian.net/browse/DOC-12` |
| Board with a selected issue | `https://example-team.atlassian.net/jira/software/projects/DOC/boards/1?selectedIssue=DOC-12` |
| Backlog with a selected issue | `https://example-team.atlassian.net/jira/software/c/projects/DOC/boards/1/backlog?selectedIssue=DOC-12` |
| Legacy board with a selected issue | `https://example-team.atlassian.net/secure/RapidBoard.jspa?rapidView=1&selectedIssue=DOC-12` |

Issue links on `*.jira.com` are also recognized. For Data Center, use the configured host with `/browse/DOC-12` or `/secure/RapidBoard.jspa?selectedIssue=DOC-12`.

## Troubleshooting

If Data Center links stay normal links, check the configured host and the [context-path limitation](#jira-data-center). An invalid `INTEGRATION_JIRA_URL` logs a warning and falls back to Jira Cloud.
