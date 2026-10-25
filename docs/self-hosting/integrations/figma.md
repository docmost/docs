---
sidebar_position: 5
---

# Figma

Preview Figma design files, prototypes, and FigJam boards.

## Set up

1. [Create a Figma OAuth app](https://developers.figma.com/docs/rest-api/oauth-apps/) and associate it with your team or organization. Copy its client ID and secret.
2. Add this redirect URL and select the [`file_metadata:read` scope](https://developers.figma.com/docs/rest-api/scopes/):

   ```text
   https://docmost.example.com/api/integrations/oauth/figma/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Publish the app. A private app serves its team or organization. A public app needs Figma approval before other users can authorize it. A draft app is limited to testing by its owner and plan admins.
4. Set these on the Docmost server:

   ```shell
   INTEGRATION_FIGMA_CLIENT_ID=<client-id>
   INTEGRATION_FIGMA_CLIENT_SECRET=<client-secret>
   ```

5. Set `APP_URL` to your Docmost base address, without a path, and restart Docmost.
6. [Install Figma in your workspace](/self-hosting/integrations#install-and-connect).

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Figma**, and sign in.

If you cannot authorize the app, ask an admin to check its [publishing settings](#set-up).

## Supported links

| Link | Example |
|------|---------|
| Design | `https://www.figma.com/design/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| File | `https://www.figma.com/file/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| Prototype | `https://www.figma.com/proto/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| FigJam board | `https://www.figma.com/board/AbCdEfGhIjKlMnOpQrStUv/Planning` |
