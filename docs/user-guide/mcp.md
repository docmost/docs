---
sidebar_position: 14
tags:
    - business
    - enterprise
---

# MCP

Docmost provides a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that allows AI assistants and tools to interact with your workspace content. Through MCP, AI clients can search, read, create, and update pages, manage spaces, and more.

Most clients connect with OAuth: you sign in to Docmost, choose what the app may do, and no credentials are copied around. An API key remains available for clients that do not support OAuth, unless your admin has turned that off.

:::note
A valid Business or Enterprise license is required to unlock this feature.
:::

## Enabling MCP (Admin)

MCP must be enabled by a workspace admin before it can be used.

1. Go to **Settings** > **AI settings**.
2. Click the **MCP** tab.
3. Toggle the MCP switch on.
4. The **MCP Server URL** is displayed. It follows the format: `https://YOUR_DOCMOST_URL.com/mcp`.

Once enabled, any workspace member can connect their AI tools to the MCP server.

## Connecting with OAuth

Give your client the MCP server URL and it will handle the rest: it registers itself, sends you to Docmost to sign in, and asks you to authorize it.

On the authorization screen you choose what the application may do:

| Permission | Meaning |
|------|-------------|
| **Read** | View content without making changes |
| **Write** | Create and modify content |

Both are selected by default. Clearing **Write** connects the app in read-only mode, and it will only see the read tools.

An application can never do more than your own account can. It acts as you, so space and page permissions still apply.

### claude.ai

1. Go to **Settings** > **Connectors** > **Add custom connector**.
2. Enter your MCP server URL: `https://YOUR_DOCMOST_URL.com/mcp`.
3. Click **Connect** and authorize the connector in the Docmost window that opens.

### ChatGPT

Custom MCP plugins require a paid ChatGPT plan and work on the web only.

1. Go to **Settings** > **Security and login** and turn on **Developer mode**.
2. Open [chatgpt.com/plugins](https://chatgpt.com/plugins) and click the **+** button.
3. Enter a name and description, set the connection to your MCP server URL: `https://YOUR_DOCMOST_URL.com/mcp`, and set authentication to **OAuth**.
4. Click **Create**. Docmost opens in a new window for you to sign in and authorize the connection.

### Claude Code

```bash
claude mcp add Docmost --transport http https://YOUR_DOCMOST_URL.com/mcp
```

Run `/mcp` inside Claude Code to start the login flow, then authorize Docmost in your browser.

### Cursor, VS Code, and other clients

Add the MCP server URL to the client's MCP configuration. Any client that supports remote MCP servers with OAuth will prompt you to sign in on first use.

```json
{
  "mcpServers": {
    "docmost": {
      "url": "https://YOUR_DOCMOST_URL.com/mcp"
    }
  }
}
```

## Managing authorized applications

Applications you authorize appear under **Settings** > **API keys** > **Authorized apps**, showing the permissions granted, when you authorized the app, and when it was last used.

Click the delete icon to revoke access. The application loses access immediately and must be authorized again to reconnect.

You stay connected as long as the application keeps using its access. Access tokens are short lived and renewed automatically; an application that goes unused for 30 days must be authorized again. Resetting your password also revokes every application you have authorized.

## Requiring OAuth (Admin)

Admins can require every MCP client to connect through OAuth.

1. Go to **Settings** > **AI settings** > **MCP**.
2. Turn on **Enforce OAuth**.

With this on, API keys are rejected by the MCP server. Clients that support OAuth are sent through the sign-in flow instead; clients configured with an API key stop working until they are reconnected.

## Connecting with an API key

For clients that do not support OAuth, you can authenticate with a personal API key. This option is unavailable when **Enforce OAuth** is on.

1. Go to **Settings** > **API keys**.
2. Click **Create API Key**.
3. Copy the key and store it securely. It cannot be viewed again.

The key is sent as a Bearer token in the Authorization header. Unlike OAuth, an API key is not limited to read or write permissions; it can do anything your account can do through the API.

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
        "https://YOUR_DOCMOST_URL.com/mcp",
        "--header",
        "Authorization: Bearer YOUR_API_KEY"
      ]
    }
  }
}
```

Replace `https://YOUR_DOCMOST_URL.com` with your Docmost instance URL and `YOUR_API_KEY` with your API key.

### Claude Code

```bash
claude mcp add Docmost --transport http https://YOUR_DOCMOST_URL.com/mcp --header "Authorization: Bearer YOUR_API_KEY"
```

Or using `mcp-remote`:

```bash
claude mcp add docmost -- npx -y mcp-remote https://YOUR_DOCMOST_URL.com/mcp --header "Authorization: Bearer YOUR_API_KEY"
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
        "https://YOUR_DOCMOST_URL.com/mcp",
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

Applications authorized with read-only permission see only the tools that read content. API keys have access to all tools.

## Permissions

MCP respects the same permissions as the Docmost web application. The connected user can only access spaces and pages they have permission to view or edit. Actions like creating or updating pages require the appropriate write permissions.
