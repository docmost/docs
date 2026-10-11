---
sidebar_position: 4
---

# Linear

Preview Linear issues, projects, initiatives, and views.

## Connect your account

A workspace admin must [install Linear](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/linear).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Linear**, and authorize the account that has access to the linked work.

## Supported links

| Link | Example |
|------|---------|
| Issue | `https://linear.app/example-team/issue/DOC-12/update-the-guide` |
| Project | `https://linear.app/example-team/project/documentation-a1b2c3d4e5f6/overview` |
| Initiative | `https://linear.app/example-team/initiative/onboarding-a1b2c3d4e5f6/overview` |
| View | `https://linear.app/example-team/view/assigned-a1b2c3d4e5f6` |

Issue cards show the title, identifier, status, team, assignee, and creation date. Project cards show the name, status, lead, team, and creation date. Initiative cards show the name, status, and description. View cards show a label from the URL.

Mentions show the title and status when available. Projects and initiatives also have a type label. Issue mentions show the title without a separate issue-key prefix.

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| A preview shows only an identifier or URL label | Linear did not return the resource | Check access with the connected account. View links always show a URL label. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
