---
sidebar_position: 6
tags:
  - enterprise
---

# Azure DevOps

Preview Azure DevOps work items and pull requests.

## Connect your account

A workspace admin must [install Azure DevOps](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/azure-devops).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Azure DevOps**, and sign in with a work account in the directory that is also a user in the Azure DevOps organization.

## Supported links

| Link | Example |
|------|---------|
| Work item | `https://dev.azure.com/<org>/<project>/_workitems/edit/5` |
| Pull request | `https://dev.azure.com/<org>/<project>/_git/<repo>/pullrequest/42` |
| Board with an open work item | `https://dev.azure.com/<org>/<project>/_boards/board/t/<team>/<board>?workitem=5` |
| Backlog with an open work item | `https://dev.azure.com/<org>/<project>/_backlogs/backlog/<team>?workitem=5` |
| Sprint with an open work item | `https://dev.azure.com/<org>/<project>/_sprints/taskboard/<team>?workitem=5` |
| Legacy host | `https://<org>.visualstudio.com/DefaultCollection/<project>/_workitems/edit/5` |

Work item cards show the title, type, number, state, assignee, and last change time. Pull request cards show the title, number, status, creator, and creation or completion time. Mentions show `#5` or `#42`, followed by the title and status.

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Connected**, but cards have no details | The account is personal, belongs to the wrong directory, or is not a user in the organization | Sign in with the work account that belongs to the connected directory and organization. |
| **Connection expired** | Microsoft requires fresh authorization | Choose **Reconnect**. Ask the Entra admin to check sign-in policies if it repeats. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
