---
sidebar_position: 14
tags:
    - enterprise
---

# MCP

Docmost stellt einen [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)-Server bereit, der es AI-Assistenten und -Tools ermöglicht, mit den Inhalten Ihres Arbeitsbereichs zu interagieren. Über MCP können AI-Clients Seiten durchsuchen, lesen, erstellen und aktualisieren, Bereiche verwalten und mehr.

Die meisten Clients verbinden sich über OAuth: Sie melden sich bei Docmost an, legen fest, was die Anwendung darf, und es werden keine Zugangsdaten kopiert. Für Clients, die kein OAuth unterstützen, steht weiterhin ein API-Schlüssel zur Verfügung, sofern Ihr Administrator diese Möglichkeit nicht deaktiviert hat.

:::note
MCP ist eine Enterprise-Funktion. Eine aktive Enterprise-Lizenz ist erforderlich.
:::

## MCP aktivieren (Admin)

MCP muss von einem Arbeitsbereich-Administrator aktiviert werden, bevor es verwendet werden kann.

1. Gehen Sie zu **Einstellungen** > **AI settings**.
2. Klicken Sie auf den Tab **MCP**.
3. Schalten Sie den MCP-Schalter ein.
4. Die **MCP Server URL** wird angezeigt. Sie hat das folgende Format: `https://YOUR_DOCMOST_URL.com/mcp`.

Nach der Aktivierung kann jedes Arbeitsbereich-Mitglied seine AI-Tools mit dem MCP-Server verbinden.

## Verbindung über OAuth

Geben Sie Ihrem Client die MCP-Server-URL, den Rest erledigt er selbst: Er registriert sich, leitet Sie zur Anmeldung an Docmost weiter und bittet Sie, ihn zu autorisieren.

Auf dem Autorisierungsbildschirm legen Sie fest, was die Anwendung darf:

| Berechtigung | Bedeutung |
|------|-------------|
| **Read** | Inhalte ansehen, ohne Änderungen vorzunehmen |
| **Write** | Inhalte erstellen und ändern |

Beide sind standardmäßig ausgewählt. Wenn Sie **Write** abwählen, wird die Anwendung im Nur-Lese-Modus verbunden und sieht nur die lesenden Tools.

Eine Anwendung kann nie mehr tun als Ihr eigenes Konto. Sie handelt in Ihrem Namen, sodass Bereichs- und Seitenberechtigungen weiterhin gelten.

### claude.ai

1. Gehen Sie zu **Settings** > **Connectors** > **Add custom connector**.
2. Geben Sie Ihre MCP-Server-URL ein: `https://YOUR_DOCMOST_URL.com/mcp`.
3. Klicken Sie auf **Connect** und autorisieren Sie den Connector im Docmost-Fenster, das sich öffnet.

### ChatGPT

Benutzerdefinierte MCP-Plugins erfordern einen kostenpflichtigen ChatGPT-Tarif und funktionieren nur im Web.

1. Gehen Sie zu **Settings** > **Security and login** und aktivieren Sie **Developer mode**.
2. Öffnen Sie [chatgpt.com/plugins](https://chatgpt.com/plugins) und klicken Sie auf die Schaltfläche **+**.
3. Geben Sie einen Namen und eine Beschreibung ein, tragen Sie als Verbindung Ihre MCP-Server-URL ein: `https://YOUR_DOCMOST_URL.com/mcp`, und wählen Sie als Authentifizierung **OAuth**.
4. Klicken Sie auf **Create**. Docmost öffnet sich in einem neuen Fenster, damit Sie sich anmelden und die Verbindung autorisieren können.

### Claude Code

```bash
claude mcp add Docmost --transport http https://YOUR_DOCMOST_URL.com/mcp
```

Führen Sie in Claude Code `/mcp` aus, um den Anmeldevorgang zu starten, und autorisieren Sie Docmost anschließend in Ihrem Browser.

### Cursor, VS Code und andere Clients

Tragen Sie die MCP-Server-URL in die MCP-Konfiguration des Clients ein. Jeder Client, der Remote-MCP-Server mit OAuth unterstützt, fordert Sie bei der ersten Verwendung zur Anmeldung auf.

```json
{
  "mcpServers": {
    "docmost": {
      "url": "https://YOUR_DOCMOST_URL.com/mcp"
    }
  }
}
```

## Autorisierte Anwendungen verwalten

Von Ihnen autorisierte Anwendungen erscheinen unter **Einstellungen** > **API keys** > **Authorized apps**, zusammen mit den erteilten Berechtigungen, dem Zeitpunkt der Autorisierung und der letzten Verwendung.

Klicken Sie auf das Löschsymbol, um den Zugriff zu entziehen. Die Anwendung verliert den Zugriff sofort und muss erneut autorisiert werden, um sich wieder zu verbinden.

Die Verbindung bleibt bestehen, solange die Anwendung ihren Zugriff weiter nutzt. Access-Tokens sind kurzlebig und werden automatisch erneuert; eine Anwendung, die 30 Tage lang ungenutzt bleibt, muss erneut autorisiert werden. Auch das Zurücksetzen Ihres Passworts entzieht allen von Ihnen autorisierten Anwendungen den Zugriff.

## OAuth erzwingen (Admin)

Administratoren können festlegen, dass sich jeder MCP-Client über OAuth verbinden muss.

1. Gehen Sie zu **Einstellungen** > **AI settings** > **MCP**.
2. Aktivieren Sie **Enforce OAuth**.

Ist diese Option aktiv, weist der MCP-Server API-Schlüssel ab. Clients, die OAuth unterstützen, werden stattdessen durch den Anmeldevorgang geführt; Clients, die mit einem API-Schlüssel konfiguriert sind, funktionieren erst wieder, nachdem sie neu verbunden wurden.

## Verbindung über einen API-Schlüssel

Für Clients, die kein OAuth unterstützen, können Sie sich mit einem persönlichen API-Schlüssel authentifizieren. Diese Möglichkeit steht nicht zur Verfügung, wenn **Enforce OAuth** aktiviert ist.

1. Gehen Sie zu **Einstellungen** > **API keys**.
2. Klicken Sie auf **Create API Key**.
3. Kopieren Sie den Schlüssel und bewahren Sie ihn sicher auf. Er kann nicht erneut angezeigt werden.

Der Schlüssel wird als Bearer-Token im Authorization-Header übergeben. Anders als bei OAuth ist ein API-Schlüssel nicht auf Lese- oder Schreibrechte beschränkt; er kann alles tun, was Ihr Konto über die API tun kann.

### Claude Desktop

Fügen Sie Folgendes zu Ihrer Claude-Desktop-Konfigurationsdatei (`claude_desktop_config.json`) hinzu:

```json
{
  "mcpServers": {
    "docmost": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://YOUR_DOCMOST_URL.com/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

Ersetzen Sie `https://YOUR_DOCMOST_URL.com` durch die URL Ihrer Docmost-Instanz und `YOUR_API_KEY` durch Ihren API-Schlüssel.

### Claude Code

```bash
claude mcp add Docmost --transport http https://YOUR_DOCMOST_URL.com/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

Oder mit `mcp-remote`:

```bash
claude mcp add docmost -- npx -y mcp-remote https://YOUR_DOCMOST_URL.com/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

### Cursor

Fügen Sie Folgendes zu Ihrer Cursor-MCP-Konfiguration (`.cursor/mcp.json`) hinzu:

```json
{
  "mcpServers": {
    "docmost": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://YOUR_DOCMOST_URL.com/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

## Unterstützte Tools

Der MCP-Server stellt die folgenden Tools bereit:

### Seiten

| Tool | Beschreibung |
|------|-------------|
| **search_pages** | Seiten nach Stichwort durchsuchen |
| **get_page** | Den Inhalt einer bestimmten Seite abrufen |
| **create_page** | Eine neue Seite in einem Bereich erstellen |
| **update_page** | Titel oder Inhalt einer vorhandenen Seite aktualisieren |
| **list_pages** | Zuletzt verwendete Seiten in einem Bereich auflisten |
| **list_child_pages** | Untergeordnete Seiten einer bestimmten Seite auflisten |
| **duplicate_page** | Eine Seite innerhalb ihres Bereichs duplizieren |
| **copy_page_to_space** | Eine Seite in einen anderen Bereich kopieren |
| **move_page** | Eine Seite an eine andere Position oder zu einem anderen übergeordneten Element verschieben |
| **move_page_to_space** | Eine Seite in einen anderen Bereich verschieben |

### Bereiche

| Tool | Beschreibung |
|------|-------------|
| **get_space** | Details eines bestimmten Bereichs abrufen |
| **list_spaces** | Alle Bereiche auflisten, auf die Sie Zugriff haben |
| **create_space** | Einen neuen Bereich erstellen |
| **update_space** | Name oder Beschreibung eines Bereichs aktualisieren |

### Kommentare

| Tool | Beschreibung |
|------|-------------|
| **get_comments** | Kommentare auf einer Seite abrufen |
| **create_comment** | Einen Kommentar zu einer Seite hinzufügen |
| **update_comment** | Einen vorhandenen Kommentar aktualisieren |

### Sonstiges

| Tool | Beschreibung |
|------|-------------|
| **search_attachments** | Dateianhänge im gesamten Arbeitsbereich durchsuchen |
| **list_workspace_members** | Mitglieder des Arbeitsbereichs auflisten |
| **get_current_user** | Details des authentifizierten Benutzers abrufen |

Anwendungen, die nur mit Leseberechtigung autorisiert wurden, sehen ausschließlich die lesenden Tools. API-Schlüssel haben Zugriff auf alle Tools.

## Berechtigungen

MCP berücksichtigt dieselben Berechtigungen wie die Docmost-Webanwendung. Der verbundene Benutzer kann nur auf Bereiche und Seiten zugreifen, die er anzeigen oder bearbeiten darf. Aktionen wie das Erstellen oder Aktualisieren von Seiten erfordern die entsprechenden Schreibberechtigungen.
