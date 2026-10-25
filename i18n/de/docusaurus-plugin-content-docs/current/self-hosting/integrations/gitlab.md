---
sidebar_position: 2
tags:
  - business
  - enterprise
---

# GitLab

Zeigen Sie Vorschauen von Projekten, Merge Requests, Issues, Commits und Projektlisten an.

## Einrichtung {#set-up}

1. [Erstellen Sie eine OAuth-Anwendung in GitLab](https://docs.gitlab.com/integration/oauth_provider/), die einem Benutzer oder einer Gruppe auf der gewünschten GitLab-Instanz gehört.
2. Fügen Sie diese Weiterleitungs-URI hinzu und wählen Sie die Berechtigungen `read_api` und `read_user`:

   ```text
   https://docmost.example.com/api/integrations/oauth/gitlab/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Kopieren Sie die Anwendungs-ID und das Secret. Setzen Sie diese Werte auf dem Docmost-Server:

   ```shell
   INTEGRATION_GITLAB_CLIENT_ID=<application-id>
   INTEGRATION_GITLAB_CLIENT_SECRET=<application-secret>
   # Nur für GitLab Self-Managed:
   INTEGRATION_GITLAB_URL=https://gitlab.example.com
   ```

   Mit `INTEGRATION_GITLAB_URL` wird GitLab.com durch Ihre selbstverwaltete Instanz ersetzt.

4. Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu.
5. [Installieren Sie GitLab in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **GitLab** die Option **Verbinden** und melden Sie sich an.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Projekt | `https://gitlab.com/example-group/docs` |
| Merge Request | `https://gitlab.com/example-group/docs/-/merge_requests/42` |
| Issue oder Work Item | `https://gitlab.com/example-group/docs/-/issues/12`, `https://gitlab.com/example-group/docs/-/work_items/12` |
| Commit | `https://gitlab.com/example-group/docs/-/commit/a1b2c3d` |
| Commit in einem Merge Request | `https://gitlab.com/example-group/docs/-/merge_requests/42/diffs?commit_id=a1b2c3d` |
| Liste der Issues oder Merge Requests | `https://gitlab.com/example-group/docs/-/issues`, `https://gitlab.com/example-group/docs/-/merge_requests` |

Links aus der Detailansicht eines geöffneten Work Items werden ebenfalls erkannt, wenn sie den GitLab-Parameter `?show=` enthalten.
