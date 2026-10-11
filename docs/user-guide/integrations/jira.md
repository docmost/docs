---
sidebar_position: 3
tags:
  - business
  - enterprise
---

# Jira

Preview Jira issues, including issues selected on boards or backlogs.

## Connect your account

A workspace admin must [install Jira](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/jira).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Jira**, and authorize your account. For Jira Cloud, grant access to the site that contains the linked issues.

## Supported links

| Link | Example |
|------|---------|
| Issue | `https://example-team.atlassian.net/browse/DOC-12` |
| Board with a selected issue | `https://example-team.atlassian.net/jira/software/projects/DOC/boards/1?selectedIssue=DOC-12` |
| Backlog with a selected issue | `https://example-team.atlassian.net/jira/software/c/projects/DOC/boards/1/backlog?selectedIssue=DOC-12` |
| Legacy board with a selected issue | `https://example-team.atlassian.net/secure/RapidBoard.jspa?rapidView=1&selectedIssue=DOC-12` |

Issue links on `*.jira.com` are also recognized. For Data Center, use the configured host with `/browse/DOC-12` or `/secure/RapidBoard.jspa?selectedIssue=DOC-12`.

Cards show the issue summary, key, status, assignee, and update time. Mentions show the key, summary, and status.

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Cloud issues have no details | The account has not granted access to that Jira site, or lacks issue access | Connect again and grant access to the site. Check issue permissions. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
