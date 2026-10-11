---
sidebar_position: 5
---

# Figma

Preview Figma design files, prototypes, and FigJam boards.

## Connect your account

A workspace admin must [install Figma](./index.md#install-and-connect) before you connect. For self-hosted instances, see the [server setup guide](/self-hosting/integrations/figma).

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Figma**, and authorize the account that can open the linked files.

## Supported links

| Link | Example |
|------|---------|
| Design | `https://www.figma.com/design/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| File | `https://www.figma.com/file/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| Prototype | `https://www.figma.com/proto/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| FigJam board | `https://www.figma.com/board/AbCdEfGhIjKlMnOpQrStUv/Planning` |

See [using cards and mentions](./index.md#cards-and-mentions) for display options and what other readers see.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| You cannot authorize the app | The app is in draft, or its audience excludes you | Ask the workspace admin to check the Figma app settings with the server operator. |
| The file name or thumbnail is missing | The account lacks file access, or the image failed to load | Check access with the connected Figma account. For a missing thumbnail, reload after the preview cache expires. |

See [common troubleshooting](./index.md#troubleshooting) for connection and paste errors.
