---
sidebar_position: 7
---

# Editor

Docmost features an advanced WYSIWYG rich text editor. The editor supports a wide range of content types, formatting options, and embeds to help you create rich documentation.

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
| **Toggle block** | Insert a collapsible block |
| **Callout** | Insert a callout notice block |

### Advanced

| Command             | Description                                                    |
|---------------------|----------------------------------------------------------------|
| **Math inline**     | Insert an inline math equation (KaTeX)                         |
| **Math block**      | Insert a block-level math equation (KaTeX)                     |
| **Mermaid diagram** | Insert a Mermaid diagram (flowcharts, sequence diagrams, etc.) |
| **Draw.io**         | Open the Draw.io diagram editor                                |
| **Excalidraw**      | Open the Excalidraw whiteboard editor                          |
| **Date**            | Insert a date with a calendar picker                           |
| **Subpages**        | List all child pages of the current page                       |
| **Status**          | Display a custom status badge in the page.                        | |

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

## Diagrams

The editor supports three diagram tools that you can insert via the `/` slash command menu:

- **Mermaid** - Write text-based diagrams using Mermaid syntax (flowcharts, sequence diagrams, Gantt charts, and more).
- **Draw.io (diagrams.net)** - Create visual diagrams with a full-featured drag-and-drop editor.
- **Excalidraw** - Create hand-drawn style whiteboard diagrams.

For more details, see the [Diagrams](./diagrams) page.

## Anchors

You can copy page anchors in headings to quickly link to specific sections. Simply hover over a heading to reveal the anchor icon, then click to copy the link.

## Tables

To insert a table, type `/` and select **Table**. A 3×3 table is inserted with a header row enabled by default.

### Table Toolbar

Click inside a table cell to reveal the table toolbar above the table. The toolbar provides the following actions:

| Action | Description |
|--------|-------------|
| **Add left column** | Insert a new column to the left of the current cell |
| **Add right column** | Insert a new column to the right of the current cell |
| **Delete column** | Remove the current column |
| **Add row above** | Insert a new row above the current cell |
| **Add row below** | Insert a new row below the current cell |
| **Delete row** | Remove the current row |
| **Toggle header row** | Enable or disable the header style on the first row |
| **Toggle header column** | Enable or disable the header style on the first column |
| **Delete table** | Remove the entire table |

### Table Features

- **Resize columns** — Drag the column borders to adjust column widths.
- **Reorder rows and columns** — Drag rows or columns to rearrange them.
- **Merge cells** — Select multiple cells and merge them into one.
- **Split cells** — Split a previously merged cell back into individual cells.
- **Cell alignment** — Align cell content left, center, or right.
- **Cell background color** — Set a background color on individual cells.

### Navigation

Use `Tab` to move to the next cell and `Shift + Tab` to move to the previous cell.

## Drag and Drop

Hover over any block to reveal a drag handle on the left. Click and drag the handle to reorder blocks within the page.

## Keyboard Shortcuts

### Essentials

| Command | Shortcut |
|---------|----------|
| Copy | `Ctrl/Cmd + C` |
| Cut | `Ctrl/Cmd + X` |
| Paste | `Ctrl/Cmd + V` |
| Paste without formatting | `Ctrl/Cmd + Shift + V` |
| Undo | `Ctrl/Cmd + Z` |
| Redo | `Ctrl/Cmd + Shift + Z` |
| Add a line break | `Shift + Enter` |
| Find and replace | `Ctrl/Cmd + F` |

### Text Formatting

| Command | Shortcut |
|---------|----------|
| Bold | `Ctrl/Cmd + B` |
| Italic | `Ctrl/Cmd + I` |
| Underline | `Ctrl/Cmd + U` |
| Strikethrough | `Ctrl/Cmd + Shift + S` |
| Highlight | `Ctrl/Cmd + Shift + H` |
| Inline code | `Ctrl/Cmd + E` |
| Subscript | `Ctrl/Cmd + ,` |
| Superscript | `Ctrl/Cmd + .` |

### Paragraph Formatting

| Command | Shortcut |
|---------|----------|
| Normal text | `Ctrl/Cmd + Alt + 0` |
| Heading 1 | `Ctrl/Cmd + Alt + 1` |
| Heading 2 | `Ctrl/Cmd + Alt + 2` |
| Heading 3 | `Ctrl/Cmd + Alt + 3` |
| Heading 4 | `Ctrl/Cmd + Alt + 4` |
| Heading 5 | `Ctrl/Cmd + Alt + 5` |
| Heading 6 | `Ctrl/Cmd + Alt + 6` |
| Ordered list | `Ctrl/Cmd + Shift + 7` |
| Bullet list | `Ctrl/Cmd + Shift + 8` |
| Task list | `Ctrl/Cmd + Shift + 9` |
| Blockquote | `Ctrl/Cmd + Shift + B` |
| Code block | `Ctrl/Cmd + Alt + C` |
| Left align | `Ctrl/Cmd + Shift + L` |
| Center align | `Ctrl/Cmd + Shift + E` |
| Right align | `Ctrl/Cmd + Shift + R` |
| Justify | `Ctrl/Cmd + Shift + J` |

### Text Selection

| Command | Shortcut |
|---------|----------|
| Select all | `Ctrl/Cmd + A` |
| Extend selection one character to left | `Shift + ←` |
| Extend selection one character to right | `Shift + →` |
| Extend selection one line up | `Shift + ↑` |
| Extend selection one line down | `Shift + ↓` |

### Navigation

| Command | Shortcut |
|---------|----------|
| Indent list item / next table cell | `Tab` |
| Outdent list item / previous table cell | `Shift + Tab` |
| Open slash command menu | `/` |
| Open mention menu | `@` |
| Open emoji picker | `:` |

### Markdown Shortcuts

The editor supports standard Markdown shortcuts as you type:

| Input | Result |
|-------|--------|
| `# ` | Heading 1 |
| `## ` | Heading 2 |
| `### ` | Heading 3 |
| `#### ` | Heading 4 |
| `##### ` | Heading 5 |
| `###### ` | Heading 6 |
| `- ` or `* ` | Bullet list |
| `1. ` | Numbered list |
| `[ ] ` | To-do list item |
| `> ` | Block quote |
| `` ``` `` | Code block |
| `---` | Divider |
| `**text**` | Bold |
| `*text*` or `_text_` | Italic |
| `` `text` `` | Inline code |
| `~~text~~` | Strikethrough |
| `$$text$$` | Inline math equation |
| `$$$text$$$` | Math block |
| `:::` | Callout block |

You can also paste Markdown content directly into the editor and it will be automatically converted to rich text.
