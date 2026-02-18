---
sidebar_position: 6
---

# Editor

Docmost features a block-based rich text editor built on top of TipTap. The editor supports a wide range of content types, formatting options, and embeds to help you create rich documentation.

## Slash Commands

Type `/` on a new line to open the slash command menu. You can also type to filter commands by name. The following commands are available:

### Basic

| Command | Description |
|---------|-------------|
| **Text** | Plain paragraph text |
| **To-do list** | Track tasks with a to-do list with checkboxes |
| **Heading 1** | Large section heading |
| **Heading 2** | Medium section heading |
| **Heading 3** | Small section heading |
| **Bullet list** | Create an unordered bullet list |
| **Numbered list** | Create an ordered numbered list |
| **Quote** | Create a block quote |
| **Code** | Insert a code block with syntax highlighting |
| **Divider** | Insert a horizontal rule divider |

### Media

| Command | Description |
|---------|-------------|
| **Image** | Upload an image from your device |
| **Video** | Upload a video from your device |
| **File attachment** | Upload any file from your device |

### Structure

| Command | Description |
|---------|-------------|
| **Table** | Insert a table |
| **Table View** | Insert a database-style table view |
| **Kanban Board** | Insert a Kanban board |
| **Toggle block** | Insert a collapsible block |
| **Callout** | Insert a callout notice block |
| **Columns (2-5)** | Insert multi-column layouts |

### Advanced

| Command | Description |
|---------|-------------|
| **Math inline** | Insert an inline math equation (KaTeX) |
| **Math block** | Insert a block-level math equation (KaTeX) |
| **Mermaid diagram** | Insert a Mermaid diagram (flowcharts, sequence diagrams, etc.) |
| **Draw.io** | Open the Draw.io diagram editor |
| **Excalidraw** | Open the Excalidraw whiteboard editor |
| **Date** | Insert a date with a calendar picker |
| **Subpages** | List all child pages of the current page |
| **Insert Link** | Link to pages or external URLs |
| **Mention member** | Mention a workspace member |

### Embeds

| Command | Description |
|---------|-------------|
| **Iframe embed** | Embed content via an iframe URL |
| **Airtable** | Embed an Airtable base |
| **Loom** | Embed a Loom video |
| **Figma** | Embed Figma files |
| **Typeform** | Embed a Typeform |
| **Miro** | Embed a Miro board |
| **YouTube** | Embed a YouTube video |
| **Vimeo** | Embed a Vimeo video |
| **Framer** | Embed a Framer prototype |
| **Google Drive** | Embed Google Drive content |
| **Google Sheets** | Embed Google Sheets |
| **Google Docs** | Embed Google Docs |

## Formatting Toolbar

Select text to reveal the floating formatting toolbar. The toolbar provides quick access to:

- **Ask AI** - Use the AI assistant to help with writing
- **Block type** - Convert the block to a different type (Text, Heading 1-3, To-do List, Bullet List, Numbered List, Blockquote, Code, Callout, Toggle block)
- **Alignment** - Align text left, center, right, or justify
- **Bold** (`Ctrl/Cmd + B`)
- **Italic** (`Ctrl/Cmd + I`)
- **Underline** (`Ctrl/Cmd + U`)
- **Strikethrough**
- **Inline code** (`Ctrl/Cmd + E`)
- **Link** - Insert or edit a hyperlink
- **Text color** - Choose from a palette of text colors
- **Highlight color** - Choose from a palette of background highlight colors
- **Comment** - Add an inline comment on the selected text

## @ Mentions

Type `@` in the editor to open the mention menu. The menu shows two sections:

- **Users** - Mention workspace members by name. Mentioned users may receive notifications.
- **Pages** - Link to existing pages in your workspace. Type to search for a specific page.

## Emoji

Type `:` followed by a keyword to search and insert emoji. For example, `:smile` shows matching emoji suggestions.

## Drag and Drop

Hover over any block to reveal a drag handle on the left. Click and drag the handle to reorder blocks within the page.

## Keyboard Shortcuts

### Text Formatting

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + B` | Bold |
| `Ctrl/Cmd + I` | Italic |
| `Ctrl/Cmd + U` | Underline |
| `Ctrl/Cmd + E` | Inline code |
| `Ctrl/Cmd + Shift + X` | Strikethrough |

### Blocks

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Alt + 1-6` | Heading 1-6 |
| `Ctrl/Cmd + Shift + B` | Block quote |
| `Ctrl/Cmd + Alt + C` | Code block |
| `Ctrl/Cmd + Shift + U` | Bullet list |
| `Ctrl/Cmd + Shift + O` | Numbered list |
| `Ctrl/Cmd + Shift + T` | Toggle task list |

### General

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + F` | Find and replace |
| `Ctrl/Cmd + A` | Select all (within code block, selects code content only) |
| `Tab` | Indent list item or navigate to next table cell |
| `Shift + Tab` | Outdent list item or navigate to previous table cell |
| `/` | Open slash command menu |
| `@` | Open mention menu |
| `:` | Open emoji picker |

### Markdown Shortcuts

The editor supports standard Markdown shortcuts as you type:

| Input | Result |
|-------|--------|
| `# ` | Heading 1 |
| `## ` | Heading 2 |
| `### ` | Heading 3 |
| `- ` or `* ` | Bullet list |
| `1. ` | Numbered list |
| `[ ] ` | To-do list item |
| `> ` | Block quote |
| `` ``` `` | Code block |
| `---` | Divider |
| `**text**` | Bold |
| `*text*` | Italic |
| `` `text` `` | Inline code |
| `~~text~~` | Strikethrough |

You can also paste Markdown content directly into the editor and it will be automatically converted to rich text.
