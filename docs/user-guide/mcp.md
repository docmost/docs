---
sidebar_position: 14
tags:
    - enterprise
---

# MCP

Docmost provides a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that allows AI assistants and tools to interact with your workspace content. Through MCP, AI clients can search, read, create, and update pages, manage spaces, and more — all using your existing API key for authentication.

:::note
MCP is an enterprise feature. An active enterprise license is required.
:::

## Enabling MCP (Admin)

MCP must be enabled by a workspace admin before it can be used.

1. Go to **Settings** > **AI & MCP**.
2. Click the **MCP** tab.
3. Toggle the MCP switch on.
4. The **MCP Server URL** is displayed. It follows the format: `https://YOUR_DOCMOST_URL.com/api/mcp`.

Once enabled, any workspace member with an API key can connect their AI tools to the MCP server.

## Authentication

MCP uses your personal API key for authentication. To create an API key:

1. Go to **Settings** > **API keys** (under Account).
2. Click **Create API Key**.
3. Copy the key and store it securely — it cannot be viewed again.

The API key is passed as a Bearer token in the Authorization header. Your MCP client will handle this automatically once configured.

## Connecting AI Clients

### Claude Desktop

Add the following to your Claude Desktop configuration file (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "docmost": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://YOUR_DOCMOST_URL.com/api/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

Replace `https://YOUR_DOCMOST_URL.com` with your Docmost instance URL and `YOUR_API_KEY` with your API key.

### Claude Code

Run one of the following commands to add the Docmost MCP server:

```bash
claude mcp add --transport http --header "Authorization: Bearer YOUR_API_KEY" docmost https://YOUR_DOCMOST_URL.com/api/mcp
```

Or using `mcp-remote`:

```bash
claude mcp add docmost -- npx -y mcp-remote https://YOUR_DOCMOST_URL.com/api/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

### Cursor

Add the following to your Cursor MCP configuration (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "docmost": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://YOUR_DOCMOST_URL.com/api/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

## Supported Tools

The MCP server exposes the following tools:

### Pages

| Tool | Description |
|------|-------------|
| **search_pages** | Search for pages by keyword |
| **get_page** | Get the content of a specific page |
| **create_page** | Create a new page in a space |
| **update_page** | Update an existing page's title or content |
| **list_pages** | List recent pages in a space |
| **list_child_pages** | List child pages of a specific page |
| **duplicate_page** | Duplicate a page within its space |
| **copy_page_to_space** | Copy a page to a different space |
| **move_page** | Move a page to a different position or parent |
| **move_page_to_space** | Move a page to a different space |

### Spaces

| Tool | Description |
|------|-------------|
| **get_space** | Get details of a specific space |
| **list_spaces** | List all spaces you have access to |
| **create_space** | Create a new space |
| **update_space** | Update a space's name or description |

### Comments

| Tool | Description |
|------|-------------|
| **get_comments** | Get comments on a page |
| **create_comment** | Add a comment to a page |
| **update_comment** | Update an existing comment |

### Other

| Tool | Description |
|------|-------------|
| **search_attachments** | Search for file attachments across the workspace |
| **list_workspace_members** | List members of the workspace |
| **get_current_user** | Get details of the authenticated user |

## Permissions

MCP respects the same permissions as the Docmost web application. The connected user can only access spaces and pages they have permission to view or edit. Actions like creating or updating pages require the appropriate write permissions.
