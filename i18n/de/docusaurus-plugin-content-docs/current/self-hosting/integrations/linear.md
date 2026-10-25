---
sidebar_position: 4
---

# Linear

Zeigen Sie Vorschauen von Linear-Issues, Projekten, Initiativen und Ansichten an.

## Einrichtung {#set-up}

1. [Erstellen Sie eine Linear-OAuth-Anwendung](https://linear.app/developers/oauth-2-0-authentication).
2. Fügen Sie diese Callback-URL hinzu. Docmost fordert die Berechtigung `read` an:

   ```text
   https://docmost.example.com/api/integrations/oauth/linear/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Kopieren Sie Client-ID und Client-Secret. Setzen Sie diese Werte auf dem Docmost-Server:

   ```shell
   INTEGRATION_LINEAR_CLIENT_ID=<client-id>
   INTEGRATION_LINEAR_CLIENT_SECRET=<client-secret>
   ```

4. Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu.
5. [Installieren Sie Linear in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **Linear** die Option **Verbinden** und melden Sie sich an.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Issue | `https://linear.app/example-team/issue/DOC-12/update-the-guide` |
| Projekt | `https://linear.app/example-team/project/documentation-a1b2c3d4e5f6/overview` |
| Initiative | `https://linear.app/example-team/initiative/onboarding-a1b2c3d4e5f6/overview` |
| Ansicht | `https://linear.app/example-team/view/assigned-a1b2c3d4e5f6` |

Links zu Ansichten zeigen eine Beschriftung aus der URL statt einer vollständigen Vorschau.
