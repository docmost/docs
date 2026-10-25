---
sidebar_position: 5
---

# Figma

Zeigen Sie Vorschauen von Figma-Designdateien, Prototypen und FigJam-Boards an.

## Einrichtung {#set-up}

1. [Erstellen Sie eine Figma-OAuth-App](https://developers.figma.com/docs/rest-api/oauth-apps/) und ordnen Sie sie Ihrem Team oder Ihrer Organisation zu. Kopieren Sie Client-ID und Client-Secret.
2. Fügen Sie diese Weiterleitungs-URL hinzu und wählen Sie die Berechtigung [`file_metadata:read`](https://developers.figma.com/docs/rest-api/scopes/):

   ```text
   https://docmost.example.com/api/integrations/oauth/figma/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Veröffentlichen Sie die App. Eine private App steht ihrem Team oder ihrer Organisation zur Verfügung. Eine öffentliche App benötigt die Genehmigung von Figma, bevor andere Benutzer sie autorisieren können. Eine App im Entwurfsstatus kann nur vom Eigentümer und von Plan-Administratoren getestet werden.
4. Setzen Sie diese Werte auf dem Docmost-Server:

   ```shell
   INTEGRATION_FIGMA_CLIENT_ID=<client-id>
   INTEGRATION_FIGMA_CLIENT_SECRET=<client-secret>
   ```

5. Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu.
6. [Installieren Sie Figma in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **Figma** die Option **Verbinden** und melden Sie sich an.

Wenn Sie die App nicht autorisieren können, bitten Sie einen Administrator, die [Veröffentlichungseinstellungen](#set-up) zu prüfen.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Design | `https://www.figma.com/design/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| Datei | `https://www.figma.com/file/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| Prototyp | `https://www.figma.com/proto/AbCdEfGhIjKlMnOpQrStUv/Onboarding` |
| FigJam-Board | `https://www.figma.com/board/AbCdEfGhIjKlMnOpQrStUv/Planning` |
