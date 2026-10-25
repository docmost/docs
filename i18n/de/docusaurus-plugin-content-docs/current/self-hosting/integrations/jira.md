---
sidebar_position: 3
tags:
  - business
  - enterprise
---

# Jira

Zeigen Sie Vorschauen von Jira-Issues an, auch wenn sie in einem Board oder Backlog ausgewählt sind.

## Einrichtung {#set-up}

Verwenden Sie für beide Varianten diese Callback-URL:

```text
https://docmost.example.com/api/integrations/oauth/jira/callback
```

Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

### Jira Cloud {#jira-cloud}

1. Erstellen Sie eine [OAuth-2.0-Integration in der Atlassian-Entwicklerkonsole](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/).
2. Konfigurieren Sie die OAuth-2.0-Autorisierung mit der Callback-URL oben. Fügen Sie die Jira-API-Berechtigungen `read:jira-work` und `read:jira-user` hinzu. Docmost fordert außerdem `offline_access` an, um den Zugriff zu erneuern.
3. Aktivieren Sie die App-Freigabe, damit sich auch andere Mitglieder als der App-Eigentümer autorisieren können. Kopieren Sie Client-ID und Client-Secret in die Docmost-Serverkonfiguration:

   ```shell
   INTEGRATION_ATLASSIAN_CLIENT_ID=<client-id>
   INTEGRATION_ATLASSIAN_CLIENT_SECRET=<client-secret>
   ```

Lassen Sie `INTEGRATION_JIRA_URL` für Jira Cloud ungesetzt.

### Jira Data Center {#jira-data-center}

1. Erstellen Sie in Jira einen [eingehenden Anwendungslink](https://confluence.atlassian.com/adminjiraserver/configure-an-incoming-link-1115659067.html) für eine externe Anwendung.
2. Tragen Sie die Callback-URL oben ein und erteilen Sie die [`READ`-Berechtigung](https://confluence.atlassian.com/adminjiraserver/oauth-2-0-scopes-for-incoming-links-1115659069.html).
3. Kopieren Sie die erzeugte Client-ID und das Client-Secret in die Docmost-Serverkonfiguration:

   ```shell
   INTEGRATION_JIRA_URL=https://jira.example.com
   INTEGRATION_JIRA_CLIENT_ID=<client-id>
   INTEGRATION_JIRA_CLIENT_SECRET=<client-secret>
   ```

Mit `INTEGRATION_JIRA_URL` wird Data Center anstelle von Jira Cloud ausgewählt.

Der Editor erkennt keine Data-Center-Links mit einem Kontextpfad wie `/jira/browse/DOC-12`.

Setzen Sie für beide Varianten `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad, starten Sie Docmost neu und [installieren Sie Jira in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **Jira** die Option **Verbinden** und melden Sie sich an. Erteilen Sie für Jira Cloud Zugriff auf die Site, die Ihre Issues enthält. Wenn Sie die falsche Site gewählt haben, verbinden Sie Ihr Konto erneut und erteilen Sie Zugriff auf die richtige Site.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Issue | `https://example-team.atlassian.net/browse/DOC-12` |
| Board mit ausgewähltem Issue | `https://example-team.atlassian.net/jira/software/projects/DOC/boards/1?selectedIssue=DOC-12` |
| Backlog mit ausgewähltem Issue | `https://example-team.atlassian.net/jira/software/c/projects/DOC/boards/1/backlog?selectedIssue=DOC-12` |
| Älteres Board mit ausgewähltem Issue | `https://example-team.atlassian.net/secure/RapidBoard.jspa?rapidView=1&selectedIssue=DOC-12` |

Issue-Links auf `*.jira.com` werden ebenfalls erkannt. Verwenden Sie für Data Center den konfigurierten Host mit `/browse/DOC-12` oder `/secure/RapidBoard.jspa?selectedIssue=DOC-12`.

## Fehlerbehebung {#troubleshooting}

Wenn Data-Center-Links normale Links bleiben, prüfen Sie den konfigurierten Host und die [Einschränkung für Kontextpfade](#jira-data-center). Eine ungültige `INTEGRATION_JIRA_URL` erzeugt eine Warnung im Protokoll und führt zum Rückfall auf Jira Cloud.
