---
sidebar_position: 7
tags:
  - enterprise
---

# Microsoft 365

Zeigen Sie Vorschauen von SharePoint- und OneDrive-Links an und betten Sie SharePoint- und OneDrive-Dateien in Seiten ein.

## Einrichtung {#set-up}

### App registrieren {#register-the-app}

1. [Registrieren Sie eine App in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) im Verzeichnis, das Ihre SharePoint-Websites enthält. Für die Verwendung innerhalb eines Entra-Verzeichnisses wird **Single Tenant** empfohlen.
2. Fügen Sie eine [Web-Weiterleitungs-URI](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri) hinzu:

   ```text
   https://docmost.example.com/api/integrations/oauth/microsoft_365/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Kopieren Sie die **Anwendungs-ID (Client)** und die **Verzeichnis-ID (Mandant)**. [Erstellen Sie einen geheimen Clientschlüssel](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials) und kopieren Sie dessen **Wert**.
4. Fügen Sie in den API-Berechtigungen der App die delegierten **Microsoft-Graph**-Berechtigungen `User.Read`, `User.ReadBasic.All` und `Sites.ReadWrite.All` hinzu. Docmost fordert außerdem `openid`, `profile`, `email` und `offline_access` an. Erteilen Sie die Administratorzustimmung, wenn Ihr Verzeichnis die Benutzerzustimmung blockiert.

Microsoft Graph verlangt zum Öffnen von Freigabelinks eine Schreibberechtigung. Docmost liest Dateien jedoch nur und ändert sie nie.

### Docmost konfigurieren {#configure-docmost}

```shell
INTEGRATION_MICROSOFT_CLIENT_ID=<client-id>
INTEGRATION_MICROSOFT_CLIENT_SECRET=<client-secret-value>
INTEGRATION_MICROSOFT_TENANT_ID=<tenant-id>
```

Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu. Eine Single-Tenant-App benötigt `INTEGRATION_MICROSOFT_TENANT_ID`. Ohne Angabe wird der Microsoft-Endpunkt `organizations` verwendet, der eine Multi-Tenant-App voraussetzt.

Bei der Installation von Microsoft 365 speichert Docmost das Verzeichnis, in dem sich der Arbeitsbereich-Administrator angemeldet hat. Mitglieder verbinden sich immer mit diesem Verzeichnis, auch wenn sich `INTEGRATION_MICROSOFT_TENANT_ID` später ändert.

[Installieren Sie anschließend Microsoft 365 in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

### Eine App gemeinsam mit Azure DevOps verwenden {#use-one-app-with-azure-devops}

[Azure DevOps](/self-hosting/integrations/azure-devops) liest dieselben Variablen, daher kann eine App-Registrierung beide Integrationen bedienen. Fügen Sie ihr beide Weiterleitungs-URIs und beide Berechtigungssätze hinzu.

Liegen Ihre Azure-DevOps-Organisation und Ihre SharePoint-Websites in unterschiedlichen Verzeichnissen, richten Sie die App als Multi-Tenant-App ein und lassen Sie `INTEGRATION_MICROSOFT_TENANT_ID` leer. Melden Sie sich bei der Installation von Microsoft 365 im Verzeichnis an, das Ihre SharePoint-Websites enthält.

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **Microsoft 365** die Option **Verbinden** und melden Sie sich mit Ihrem Geschäfts-, Schul- oder Unikonto an. Persönliche Microsoft-Konten werden nicht unterstützt.

## Dateien zu einer Seite hinzufügen {#add-files-to-a-page}

Geben Sie `/` ein und wählen Sie **SharePoint-Datei**, um die Dateiauswahl zu öffnen. Dateien finden Sie unter **Mein OneDrive**, **Suche** und **Websites**. Wählen Sie eine oder mehrere Dateien aus, wählen Sie **Einbetten** oder **Erwähnung** und anschließend **Einfügen**. Mehrere eingebettete Dateien teilen sich einen Block, zwischen den Dateien wechseln Sie mit Pfeilen.

Um eine Datei über einen Link einzubetten, fügen Sie den Link in einen Absatz ein und wählen Sie unter **Einfügen als** die Option **Einbetten**. Um eine vorhandene Dateikarte einzubetten, wählen Sie die Karte aus und wählen Sie **Einbetten**. Nur Dateien lassen sich einbetten. Ordner, Listen, Dokumentbibliotheken und Websites erscheinen als Karten oder Erwähnungen.

Bewegen Sie beim Bearbeiten den Mauszeiger über eine Einbettung und wählen Sie **Erwähnung**, um sie in Erwähnungen umzuwandeln, oder **Löschen**, um sie zu entfernen. Ziehen Sie eine Ecke oder den unteren Rand, um die Größe zu ändern. Jede Vorschau bietet außerdem **In SharePoint bearbeiten**, **Übergeordneten Ordner öffnen**, **In SharePoint öffnen** und **Vollbild**.

## Was Leser sehen {#what-readers-see}

Jeder Leser sieht eine eingebettete Datei über sein eigenes Microsoft-365-Konto. Das Teilen einer Docmost-Seite gibt die Dateien nicht frei.

| Leser | Darstellung der Einbettung |
|-------|----------------------------|
| Konto verbunden, mit Zugriff auf die Datei | Live-Vorschau |
| Konto nicht verbunden | Schaltfläche **Mit Microsoft 365 verbinden, um die Vorschau anzuzeigen** |
| Konto verbunden, ohne Zugriff | **Sie haben in SharePoint keinen Zugriff auf diese Datei** |
| Nicht bei Docmost angemeldet, etwa auf einer geteilten Seite | **Bei Microsoft 365 anmelden, um die Vorschau anzuzeigen** |

Jede Einbettung zeigt den Dateinamen und den Link **In SharePoint öffnen**. Für Karten und Erwähnungen gelten [dieselben Regeln wie bei anderen Integrationen](/self-hosting/integrations#cards-and-mentions).

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Freigabelink für eine Datei | `https://example.sharepoint.com/:w:/s/Marketing/EZabc123` |
| Freigabelink für einen Ordner | `https://example.sharepoint.com/:f:/s/Marketing/Ek1abc` |
| Dateipfad | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Plan.docx` |
| Im Browser geöffnete Office-Datei | `https://example.sharepoint.com/sites/Marketing/_layouts/15/Doc.aspx?sourcedoc=%7B<id>%7D&file=Plan.docx` |
| Dokumentbibliothek | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Forms/AllItems.aspx` |
| In einer Bibliothek geöffneter Ordner oder geöffnete Datei | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMarketing%2FShared%20Documents%2FReports` |
| Liste | `https://example.sharepoint.com/sites/Marketing/Lists/Issues/AllItems.aspx` |
| Website | `https://example.sharepoint.com/sites/Marketing` |
| OneDrive-Datei | `https://example-my.sharepoint.com/:x:/g/personal/jane_example_com/EY9abc` |

Teamwebsites unter `/teams/` funktionieren wie Websites unter `/sites/`. Persönliches OneDrive, SharePoint Server und SharePoint-Seiten wie `SitePages/Home.aspx` werden nicht unterstützt.

## Client-Secret erneuern {#renew-the-client-secret}

Erstellen Sie vor Ablauf des geheimen Clientschlüssels einen neuen Schlüssel in derselben Entra-App-Registrierung. Setzen Sie `INTEGRATION_MICROSOFT_CLIENT_SECRET` auf dessen **Wert** und starten Sie Docmost neu. Lassen Sie Docmosts `APP_SECRET` unverändert. Nutzt Azure DevOps dieselbe App, gilt der neue Schlüssel für beide.

## Fehlerbehebung {#troubleshooting}

| Problem | Lösung |
|---------|--------|
| `AADSTS50194`: Single-Tenant-App verwendet eine gemeinsame Autorität | Setzen Sie `INTEGRATION_MICROSOFT_TENANT_ID` auf Ihre Verzeichnis-ID und starten Sie Docmost neu. |
| `AADSTS50011`: Weiterleitungs-URI stimmt nicht überein | Gleichen Sie die Web-Weiterleitungs-URI mit der Callback-URL oben ab und prüfen Sie `APP_URL`. |
| `AADSTS65001` oder Administratorgenehmigung erforderlich | Bitten Sie den Entra-Administrator, den konfigurierten Berechtigungen zuzustimmen, und verbinden Sie das Konto erneut. |
| Mitglieder melden sich im falschen Verzeichnis an | Docmost behält das bei der Installation gespeicherte Verzeichnis. Prüfen Sie `INTEGRATION_MICROSOFT_TENANT_ID`, deinstallieren Sie Microsoft 365 unter **Einstellungen** > **Integrationen** und installieren Sie es erneut. |
| **Bitten Sie einen Arbeitsbereich-Administrator, zuerst die Microsoft-365-Integration zu installieren** | Ein Arbeitsbereich-Administrator muss [Microsoft 365 installieren](/self-hosting/integrations#install-and-connect), bevor Mitglieder Dateien hinzufügen können. |
| **Nur Dateien können eingebettet werden** | Zeigen Sie Ordner, Listen, Dokumentbibliotheken und Websites stattdessen als Karte oder Erwähnung an. |
| **Vorschau nicht verfügbar** | Microsoft 365 hat für diese Datei keine Vorschau geliefert. Wählen Sie **In SharePoint öffnen**. |
| **Diese Datei wurde verschoben oder gelöscht** | Fügen Sie die Datei erneut von ihrem neuen Speicherort hinzu. |
| **Sie haben in SharePoint keinen Zugriff auf diese Datei** | Bitten Sie die Person, der die Datei gehört, sie für Ihr Microsoft-Konto freizugeben. Laden Sie die Seite nach einer Minute neu. |
| **Diese Datei konnte nicht geladen werden** | Laden Sie die Seite neu. Suchen Sie bei wiederholten Fehlern im Serverprotokoll nach `Microsoft Graph API error`. |
| `Token refresh failed for microsoft_365` mit `invalid_client` | [Erneuern Sie das Client-Secret](#renew-the-client-secret). Bestehende Verbindungen können wieder funktionieren, wenn ihre Aktualisierungstoken noch gültig sind. |
| **Verbindung abgelaufen** mit `invalid_grant` oder `interaction_required` | Wählen Sie **Erneut verbinden**. Bitten Sie bei wiederholten Fehlern den Entra-Administrator, die Anmelderichtlinien und Richtlinien für bedingten Zugriff zu prüfen. |

Microsoft dokumentiert die [Anmeldefehlercodes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes).
