---
sidebar_position: 13
tags:
  - enterprise
---

# API

Docmost stellt eine REST-API bereit, mit der Sie programmgesteuert mit Ihrem Arbeitsbereich interagieren können. Sie können Seiten, Bereiche und andere Ressourcen erstellen, lesen, aktualisieren und löschen. Die vollständige API-Referenz finden Sie in der [API-Dokumentation](https://docmost.com/api-docs).

:::note
Die API ist eine Enterprise-Funktion. Eine aktive Enterprise-Lizenz ist erforderlich.
:::

## API Keys

Jeder Benutzer kann persönliche API-Schlüssel erstellen, um sich bei der API zu authentifizieren. API-Schlüssel sind auf den Benutzer beschränkt, der sie erstellt hat, und erben dessen Berechtigungen.

### Einen API-Schlüssel erstellen

1. Gehen Sie zu **Einstellungen** > **API keys** (unter Account).
2. Klicken Sie auf **Create API Key**.
3. Geben Sie einen aussagekräftigen **Name** für den Schlüssel ein.
4. Wählen Sie einen Zeitraum für die **Expiration** (Ablauf):
   - 30 Tage
   - 60 Tage
   - 90 Tage
   - 365 Tage
   - Benutzerdefiniert
   - Kein Ablauf
5. Klicken Sie auf **Create**.

Der API-Schlüssel wird nach der Erstellung einmalig angezeigt. Kopieren Sie ihn und bewahren Sie ihn sicher auf — er kann nicht erneut angezeigt werden.

### Ihre Schlüssel verwalten

Ihre API-Schlüssel werden unter **Einstellungen** > **API keys** mit den folgenden Details aufgelistet:

- **Name** — Der aussagekräftige Name, den Sie dem Schlüssel zugewiesen haben.
- **Last used** — Wann der Schlüssel zuletzt für eine API-Anfrage verwendet wurde.
- **Expires** — Das Ablaufdatum oder „Never“, wenn der Schlüssel keinen Ablauf hat.
- **Created** — Wann der Schlüssel erstellt wurde.

Klicken Sie auf das Menü **...** bei einem beliebigen Schlüssel, um:

- **Rename** — Den Namen des Schlüssels zu ändern.
- **Revoke** — Den Schlüssel dauerhaft zu widerrufen. Diese Aktion kann nicht rückgängig gemacht werden.

## API-Verwaltung (Admin)

Arbeitsbereich-Administratoren können API-Schlüssel für alle Benutzer im Arbeitsbereich anzeigen und verwalten.

1. Gehen Sie zu **Einstellungen** > **API management** (unter Workspace).

Auf dieser Seite werden alle API-Schlüssel des gesamten Arbeitsbereichs angezeigt, einschließlich des **User**, dem jeder Schlüssel gehört. Administratoren können jeden Schlüssel umbenennen und widerrufen.
