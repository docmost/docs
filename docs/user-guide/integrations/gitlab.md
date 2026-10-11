---
sidebar_position: 2
tags:
  - business
  - enterprise
---

# GitLab

Preview projects, merge requests, issues, commits, and project lists.

## Connect your account

A workspace admin must [install GitLab](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/gitlab).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **GitLab**, and authorize the account you use to access the linked projects.

## Supported links

| Link | Example |
|------|---------|
| Project | `https://gitlab.com/example-group/docs` |
| Merge request | `https://gitlab.com/example-group/docs/-/merge_requests/42` |
| Issue or work item | `https://gitlab.com/example-group/docs/-/issues/12`, `https://gitlab.com/example-group/docs/-/work_items/12` |
| Commit | `https://gitlab.com/example-group/docs/-/commit/a1b2c3d` |
| Commit in a merge request | `https://gitlab.com/example-group/docs/-/merge_requests/42/diffs?commit_id=a1b2c3d` |
| Issues or merge requests list | `https://gitlab.com/example-group/docs/-/issues`, `https://gitlab.com/example-group/docs/-/merge_requests` |

Links copied from an open work item drawer are also recognized when they include GitLab's `?show=` value.

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| A resource has no details | The connected account lacks access, or the item is unavailable | Open the link with that GitLab account and check project membership. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
