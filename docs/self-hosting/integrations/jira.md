---
sidebar_position: 3
tags:
  - business
  - enterprise
---

# Jira

Configure Jira Cloud or Jira Data Center for Docmost.

## Set up

Use this callback URL for either setup:

```text
<APP_URL>/api/integrations/oauth/jira/callback
```

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

For either setup, set `APP_URL` to your Docmost base address, without a path, and restart Docmost.

## Install in a workspace

After setup, a workspace admin can [install Jira](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/jira#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | The credentials for the selected setup are missing | Use `INTEGRATION_ATLASSIAN_*` for Cloud or `INTEGRATION_JIRA_*` for Data Center, then restart. |
| **OAuth connection failed. Please try again.** | The app's callback, credentials, or authorization settings may be wrong | Check the provider app settings above. The server log's `Token exchange failed for jira` message gives the provider's error. If the settings are correct, send the error to Docmost support. |
| Data Center links stay normal links | The host is wrong or the URL has a context path | Check the [Data Center setup](#jira-data-center). An invalid `INTEGRATION_JIRA_URL` logs a warning and falls back to Jira Cloud. |
