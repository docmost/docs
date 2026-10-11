---
sidebar_position: 5
---

# Figma

Configure a Figma OAuth app for Docmost.

## Set up

1. [Create a Figma OAuth app](https://developers.figma.com/docs/rest-api/oauth-apps/) and associate it with your team or organization. Copy its client ID and secret.
2. Add this redirect URL and select the [`file_metadata:read` scope](https://developers.figma.com/docs/rest-api/scopes/):

   ```text
   <APP_URL>/api/integrations/oauth/figma/callback
   ```

3. Publish the app. A private app serves its team or organization. A public app needs Figma approval before other users can authorize it. A draft app is limited to testing by its owner and plan admins.
4. Set these on the Docmost server:

   ```shell
   INTEGRATION_FIGMA_CLIENT_ID=<client-id>
   INTEGRATION_FIGMA_CLIENT_SECRET=<client-secret>
   ```

5. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.

## Install in a workspace

After setup, a workspace admin can [install Figma](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/figma#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | App credentials are missing | Set `INTEGRATION_FIGMA_CLIENT_ID` and `INTEGRATION_FIGMA_CLIENT_SECRET`, then restart. |
| Other members cannot authorize the app | The app is in draft, or its audience excludes them | Publish privately for the associated team or organization, or publish publicly and complete Figma's review. |
| **OAuth connection failed. Please try again.** | Credentials, callback URL, or token exchange may be failing | Check the app's credentials and redirect URL. If correct, send the server log's `Token exchange failed for figma` error to Docmost support. |
