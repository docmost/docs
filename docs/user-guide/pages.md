---
sidebar_position: 8
---

# Pages

Pages are the core content units in Docmost. Each page lives within a space and supports rich text editing, nested sub-pages, comments, version history, and more.

## Creating a Page

To create a new page:

1. In the sidebar, click **New page** or click the **+** icon next to the **Pages** header.
2. A new untitled page will open in the editor.
3. Click the title area to give your page a name.
4. Start writing in the body area. Type `/` to access slash commands.

### Creating a Sub-page

Pages can be nested to create a hierarchy. To create a sub-page:

1. Hover over a page in the sidebar to reveal a **+** icon.
2. Click the **+** icon to create a child page under the selected page.

You can also drag and drop pages in the sidebar to rearrange or nest them under other pages.

## Page Toolbar

At the top of every page you will find:

- **Edit / Read** toggle - Switch between editing and read-only mode.
- **Share** - Manage public sharing settings for the page (when enabled at the workspace level).
- **Comments** - Open the comments panel to view, add, or resolve comments.
- **Table of contents** - Open the table of contents sidebar, auto-generated from headings.
- **Page menu (...)** - Access additional page actions.

## Page Menu

Click the **three-dot menu (...)** at the top right of a page to access:

| Action | Description |
|--------|-------------|
| **Copy link** | Copy the page URL to your clipboard |
| **Copy as Markdown** | Copy the page content as Markdown text |
| **Full width** | Toggle full-width layout for the page |
| **Page history** | View and restore previous versions of the page |
| **Move** | Move the page and all its sub-pages to a different space |
| **Export** | Export the page in Markdown or HTML format |
| **Print PDF** | Generate a PDF version of the page |
| **Move to trash** | Delete the page by moving it to trash |

The menu footer also displays the **word count**, **creator name**, and **creation date**.

## Sidebar Page Menu

You can also right-click or hover over a page in the sidebar and click the **three-dot menu (...)** to access quick actions:

| Action | Description |
|--------|-------------|
| **Copy link** | Copy the page URL to your clipboard |
| **Export page** | Export the page in Markdown or HTML format |
| **Duplicate** | Create a copy of the page in its current position within the same space |
| **Move** | Move the page and all its sub-pages to a different space |
| **Copy to space** | Copy the page and all its sub-pages to a different space, keeping the original in place |
| **Move to trash** | Delete the page by moving it to trash |

## Comments

Docmost supports inline comments on page content. To add a comment:

1. Select the text you want to comment on.
2. Click the **comment icon** in the floating toolbar.
3. Type your comment and submit it.

Comments appear in the comments panel on the right side of the page. The panel has two tabs:

- **Open** - Active comments that need attention.
- **Resolved** - Comments that have been resolved.

## Page History

Docmost automatically saves page history as you edit. During the first 5 minutes after a page is created, snapshots are saved every minute. After that, history is saved every 5 minutes during an edit session.

To access page history:

1. Open the **page menu (...)**.
2. Click **Page history**.
3. Browse the list of saved versions on the right.
4. Select a version to view a **diff highlight** showing what changed compared to the current version.
5. Click **Restore** to revert the page to a previous version.

## Sharing

You can share individual pages publicly with anyone, even people outside your workspace.

To share a page:

1. Open the page you want to share.
2. Click the **Share** button or the **globe icon** in the page toolbar.
3. Toggle sharing on to generate a public link.

### Sharing Options

- **Include subpages** - When enabled, all child pages under the shared page are also publicly accessible.
- **Allow search engine indexing** - When enabled, search engines can index the shared page. When disabled, the page is still accessible via link but hidden from search results.

### Sharing Controls

Public sharing can be controlled at two levels:

- **Workspace level** - Admins can disable public sharing for the entire workspace in **Settings > General**.
- **Space level** - Space admins can disable public sharing for individual spaces in **Space Settings**.

Workspace-level settings take precedence over space-level settings. If public sharing is disabled at either level, all previously shared pages under that scope will be automatically unshared.

### Managing Shared Pages

To view all publicly shared pages in your workspace:

1. Go to **Settings > Public sharing**.
2. Browse the list of all currently shared pages.

## Export

Individual pages can be exported in the following formats:

- **Markdown** - Exports the page as a `.md` file.
- **HTML** - Exports the page as an `.html` file.

Export options include:

- **Include subpages** - Export the page along with all its child pages.
- **Include attachments** - Bundle attached files into the export.

Multi-page exports are packaged as a ZIP file with a folder structure matching the page hierarchy.

To export a page:

1. Open the **page menu (...)**.
2. Click **Export**.
3. Select the export format and options.
4. Click **Export** to download.

## Moving Pages

You can move a page to a different space or change its position in the hierarchy:

1. Open the **page menu (...)** and click **Move**, or
2. Drag and drop the page in the sidebar to reorder or nest it.

## Deleting Pages

To delete a page:

1. Open the **page menu (...)**.
2. Click **Move to trash**.

Deleted pages are moved to the trash and can be restored or permanently deleted from there.
