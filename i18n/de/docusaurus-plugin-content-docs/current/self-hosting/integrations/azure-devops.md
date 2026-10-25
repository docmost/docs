---
sidebar_position: 6
tags:
  - enterprise
---

# Azure DevOps

Zeigen Sie Vorschauen von Azure-DevOps-Arbeitselementen und Pull Requests an.

## Einrichtung {#set-up}

### App registrieren {#register-the-app}

1. [Registrieren Sie eine App in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) im Verzeichnis, das mit Ihrer Azure-DevOps-Organisation verbunden ist. Für die Verwendung innerhalb eines Entra-Verzeichnisses wird **Single Tenant** empfohlen.
2. Fügen Sie eine [Web-Weiterleitungs-URI](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri) hinzu:

   ```text
   https://docmost.example.com/api/integrations/oauth/azure_devops/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Kopieren Sie die **Anwendungs-ID (Client)** und die **Verzeichnis-ID (Mandant)**. [Erstellen Sie einen geheimen Clientschlüssel](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials) und kopieren Sie dessen **Wert**.
4. Fügen Sie in den API-Berechtigungen der App die delegierten **Azure-DevOps**-Berechtigungen `vso.work` und `vso.code` hinzu. Beide gewähren Lesezugriff. Erteilen Sie die Administratorzustimmung, wenn Ihr Verzeichnis die Benutzerzustimmung blockiert. Siehe [Microsofts Azure-DevOps-Einrichtungsanleitung](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/entra-oauth?view=azure-devops).

### Docmost konfigurieren {#configure-docmost}

```shell
INTEGRATION_MICROSOFT_CLIENT_ID=<client-id>
INTEGRATION_MICROSOFT_CLIENT_SECRET=<client-secret-value>
INTEGRATION_MICROSOFT_TENANT_ID=<tenant-id>
```

Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu. Die Mandanten-ID muss die ID des mit der Azure-DevOps-Organisation verbundenen Verzeichnisses sein. Eine Single-Tenant-App benötigt diese Variable. Ohne Angabe wird der Microsoft-Endpunkt `organizations` verwendet.

[Installieren Sie anschließend Azure DevOps in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **Azure DevOps** die Option **Verbinden** und melden Sie sich mit Ihrem Geschäftskonto an. Das Konto muss zum Microsoft-Entra-Verzeichnis der Organisation gehören und als Benutzer in der Azure-DevOps-Organisation eingetragen sein.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Arbeitselement | `https://dev.azure.com/<org>/<project>/_workitems/edit/5` |
| Pull Request | `https://dev.azure.com/<org>/<project>/_git/<repo>/pullrequest/42` |
| Board mit geöffnetem Arbeitselement | `https://dev.azure.com/<org>/<project>/_boards/board/t/<team>/<board>?workitem=5` |
| Backlog mit geöffnetem Arbeitselement | `https://dev.azure.com/<org>/<project>/_backlogs/backlog/<team>?workitem=5` |
| Sprint mit geöffnetem Arbeitselement | `https://dev.azure.com/<org>/<project>/_sprints/taskboard/<team>?workitem=5` |
| Älterer Host | `https://<org>.visualstudio.com/DefaultCollection/<project>/_workitems/edit/5` |

## Client-Secret erneuern {#renew-the-client-secret}

Erstellen Sie vor Ablauf des geheimen Clientschlüssels einen neuen Schlüssel in derselben Entra-App-Registrierung. Setzen Sie `INTEGRATION_MICROSOFT_CLIENT_SECRET` auf dessen **Wert** und starten Sie Docmost neu. Lassen Sie Docmosts `APP_SECRET` unverändert.

## Fehlerbehebung {#troubleshooting}

| Problem | Lösung |
|---------|--------|
| `AADSTS50194`: Single-Tenant-App verwendet eine gemeinsame Autorität | Setzen Sie `INTEGRATION_MICROSOFT_TENANT_ID` auf die Verzeichnis-ID der Organisation und starten Sie Docmost neu. |
| `AADSTS50011`: Weiterleitungs-URI stimmt nicht überein | Gleichen Sie die Web-Weiterleitungs-URI mit der Callback-URL oben ab und prüfen Sie `APP_URL`. |
| `AADSTS65001` oder Administratorgenehmigung erforderlich | Bitten Sie den Entra-Administrator, den konfigurierten Berechtigungen zuzustimmen, und verbinden Sie das Konto erneut. |
| `AADSTS650052`: Im Verzeichnis fehlt ein Azure-DevOps-Dienstprinzipal | [Verbinden Sie die Organisation mit dem Verzeichnis](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops) unter **Organisationseinstellungen** > **Microsoft Entra ID** in Azure DevOps. Verwenden Sie die Mandanten-ID dieses Verzeichnisses. |
| Konto verbunden, aber Vorschauen schlagen mit HTTP 401 fehl | Prüfen Sie, ob das Mitglied ein Geschäftskonto im richtigen Verzeichnis verwendet und Zugriff auf die Azure-DevOps-Organisation hat. |
| `Token refresh failed for azure_devops` mit `invalid_client` | [Erneuern Sie das Client-Secret](#renew-the-client-secret). Bestehende Verbindungen können wieder funktionieren, wenn ihre Aktualisierungstoken noch gültig sind. |
| **Verbindung abgelaufen** mit `invalid_grant` oder `interaction_required` | Wählen Sie **Erneut verbinden**. Bitten Sie bei wiederholten Fehlern den Entra-Administrator, die Anmelderichtlinien und Richtlinien für bedingten Zugriff zu prüfen. |
| `INTEGRATION_MICROSOFT_TENANT_ID is not a tenant id or domain` | Setzen Sie die Mandanten-ID auf die Verzeichnis-ID ohne Anführungszeichen oder URL und starten Sie Docmost neu. |

Microsoft dokumentiert die [Anmeldefehlercodes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes).
