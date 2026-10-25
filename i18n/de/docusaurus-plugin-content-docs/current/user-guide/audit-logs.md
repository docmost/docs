---
sidebar_position: 14.5
tags:
  - enterprise
---

# Audit-Protokolle

Audit-Protokolle zeichnen sicherheitsrelevante und administrative Aktivitäten in Ihrem Arbeitsbereich auf, darunter Anmeldungen, Änderungen an Mitgliedschaften, Berechtigungen, Freigaben und Integrationseinstellungen. Audit-Protokolle und SIEM-Streaming sind in der Enterprise-Edition verfügbar und können von Arbeitsbereich-Eigentümern verwaltet werden.

## Audit-Protokolle anzeigen {#view-audit-logs}

1. Öffnen Sie **Einstellungen** > **Audit-Protokolle & SIEM**.
2. Wählen Sie den Tab **Audit-Protokolle**.
3. Verwenden Sie **Filter by event**, um nach einer bestimmten Aktivität zu suchen.

Klappen Sie einen Eintrag auf, um die aufgezeichneten Änderungen und Metadaten zu sehen, sofern vorhanden.

## Aufbewahrung {#retention}

Audit-Protokolle werden standardmäßig **365 Tage** aufbewahrt. Um den Zeitraum zu ändern, klicken Sie im Tab Audit-Protokolle auf das Zahnradsymbol **Audit settings**, geben Sie unter **Retention** einen Zeitraum in Tagen, Monaten oder Jahren ein und klicken Sie auf **Speichern**. Der Mindestzeitraum beträgt **30 Tage**. Ältere Einträge werden automatisch entfernt.

## SIEM

Übertragen Sie Audit-Ereignisse an Ihr System für Sicherheitsinformations- und Ereignismanagement (SIEM). Jeder Arbeitsbereich unterstützt bis zu **zwei Ziele**. Das Streaming beginnt mit Ereignissen, die nach der Erstellung eines Ziels aufgezeichnet werden.

### Ziel hinzufügen {#add-a-destination}

1. Öffnen Sie **Einstellungen** > **Audit-Protokolle & SIEM** und wählen Sie **SIEM**.
2. Klicken Sie auf **Ziel hinzufügen**, wählen Sie eine **Voreinstellung** und geben Sie einen Namen ein.
3. Geben Sie die Verbindungsdaten für Ihren Empfänger ein:

   | Voreinstellung | Verbindungsdaten |
   |----------------|------------------|
   | **Splunk HEC** | Geben Sie die HEC-URL, zum Beispiel `https://splunk.example.com:8088`, und ein HEC-Token ein. Unter **Erweiterte Optionen anzeigen** können Sie einen Index festlegen. Andernfalls wird der Standardindex des Tokens verwendet. |
   | **Datadog** | Wählen Sie Ihre Datadog-Website und geben Sie einen API-Schlüssel ein. Service und Tags können unter **Erweiterte Optionen anzeigen** festgelegt werden. |
   | **Generic HTTP** | Geben Sie die Endpunkt-URL und bei Bedarf ein Token ein. Unter **Erweiterte Optionen anzeigen** wählen Sie ein JSON-Array oder NDJSON als Body-Format und konfigurieren den Authentifizierungsheader. Der Standardheader lautet `Authorization: Bearer <token>`. |

4. Klicken Sie auf **Verbindung testen** und prüfen Sie, ob das Testereignis beim Empfänger ankommt.
5. Klicken Sie nach einem erfolgreichen Test auf **Erstellen**.

Nach Änderungen an den Verbindungsdaten ist vor dem Speichern erneut ein erfolgreicher Test erforderlich.

Für Empfänger in einem privaten Netzwerk konfigurieren Sie [ALLOWED_PRIVATE_NETWORKS](/self-hosting/environment-variables#ausgehende-anfragen-an-private-netzwerke) auf dem Docmost-Server und starten ihn neu, bevor Sie die Verbindung testen.
