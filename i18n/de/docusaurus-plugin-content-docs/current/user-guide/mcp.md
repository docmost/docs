---
sidebar_position: 14
tags:
    - enterprise
---

# MCP

Docmost stellt einen [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)-Server bereit, der es AI-Assistenten und -Tools ermöglicht, mit den Inhalten Ihres Arbeitsbereichs zu interagieren. Über MCP können AI-Clients Seiten durchsuchen, lesen, erstellen und aktualisieren, Bereiche verwalten und mehr — und das alles unter Verwendung Ihres vorhandenen API-Schlüssels zur Authentifizierung.

:::note
MCP ist eine Enterprise-Funktion. Eine aktive Enterprise-Lizenz ist erforderlich.
:::

## MCP aktivieren (Admin)

MCP muss von einem Arbeitsbereich-Administrator aktiviert werden, bevor es verwendet werden kann.

1. Gehen Sie zu **Einstellungen** > **AI & MCP**.
2. Klicken Sie auf den Tab **MCP**.
3. Schalten Sie den MCP-Schalter ein.
4. Die **MCP Server URL** wird angezeigt. Sie hat das folgende Format: `https://YOUR_DOCMOST_URL.com/mcp`.

Nach der Aktivierung kann jedes Arbeitsbereich-Mitglied mit einem API-Schlüssel seine AI-Tools mit dem MCP-Server verbinden.

## Authentifizierung

MCP verwendet Ihren persönlichen API-Schlüssel zur Authentifizierung. So erstellen Sie einen API-Schlüssel:

1. Gehen Sie zu **Einstellungen** > **API keys** (unter Account).
2. Klicken Sie auf **Create API Key**.
3. Kopieren Sie den Schlüssel und bewahren Sie ihn sicher auf — er kann nicht erneut angezeigt werden.

Der API-Schlüssel wird als Bearer-Token im Authorization-Header übergeben. Ihr MCP-Client erledigt dies nach der Konfiguration automatisch.

## AI-Clients verbinden

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

Führen Sie einen der folgenden Befehle aus, um den Docmost-MCP-Server hinzuzufügen:

```bash
claude mcp add Docmost  --transport http https://YOUR_DOCMOST_URL.com/mcp --header "Authorization: Bearer YOUR_API_KEY" 
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

## Berechtigungen

MCP berücksichtigt dieselben Berechtigungen wie die Docmost-Webanwendung. Der verbundene Benutzer kann nur auf Bereiche und Seiten zugreifen, die er anzeigen oder bearbeiten darf. Aktionen wie das Erstellen oder Aktualisieren von Seiten erfordern die entsprechenden Schreibberechtigungen.
