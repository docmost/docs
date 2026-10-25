---
sidebar_position: 4
---

# Linear

Preview Linear issues, projects, initiatives, and views.

## Set up

1. [Create a Linear OAuth application](https://linear.app/developers/oauth-2-0-authentication).
2. Add this redirect callback URL. Docmost requests the `read` scope:

   ```text
   https://docmost.example.com/api/integrations/oauth/linear/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Copy the client ID and secret. Set these on the Docmost server:

   ```shell
   INTEGRATION_LINEAR_CLIENT_ID=<client-id>
   INTEGRATION_LINEAR_CLIENT_SECRET=<client-secret>
   ```

4. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.
5. [Install Linear in your workspace](/self-hosting/integrations#install-and-connect).

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Linear**, and sign in.

## Supported links

| Link | Example |
|------|---------|
| Issue | `https://linear.app/example-team/issue/DOC-12/update-the-guide` |
| Project | `https://linear.app/example-team/project/documentation-a1b2c3d4e5f6/overview` |
| Initiative | `https://linear.app/example-team/initiative/onboarding-a1b2c3d4e5f6/overview` |
| View | `https://linear.app/example-team/view/assigned-a1b2c3d4e5f6` |

View links display a label based on the URL rather than a full preview.
