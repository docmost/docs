---
sidebar_position: 2
tags:
  - business
  - enterprise
---

# GitLab

Preview projects, merge requests, issues, commits, and project lists.

## Set up

1. [Create an OAuth application in GitLab](https://docs.gitlab.com/integration/oauth_provider/), owned by a user or group on the GitLab instance you want to connect.
2. Add this redirect URI and select the `read_api` and `read_user` scopes:

   ```text
   https://docmost.example.com/api/integrations/oauth/gitlab/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Copy the application ID and secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_GITLAB_CLIENT_ID=<application-id>
   INTEGRATION_GITLAB_CLIENT_SECRET=<application-secret>
   # Only for GitLab self-managed:
   INTEGRATION_GITLAB_URL=https://gitlab.example.com
   ```

   Setting `INTEGRATION_GITLAB_URL` replaces GitLab.com support with your self-managed instance.

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.
5. [Install GitLab in your workspace](/self-hosting/integrations#install-and-connect).

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **GitLab**, and sign in.

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
