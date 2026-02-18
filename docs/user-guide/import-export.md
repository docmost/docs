---
sidebar_position: 9
---

# Import & Export

Docmost lets you import content from other platforms and export your pages for backup or migration.

## Importing Pages

You can import pages into any space from a variety of sources. To access the import dialog:

1. Navigate to the space where you want to import pages.
2. In the sidebar, click the **...** menu next to the **Pages** header.
3. Select **Import pages**.

### Supported Import Formats

The import dialog supports the following source formats:

| Format | Description |
|--------|-------------|
| **Markdown** | Import `.md` files directly into the space |
| **HTML** | Import `.html` files directly into the space |
| **Word (DOCX)** | Import Microsoft Word `.docx` documents |
| **Notion** | Import a Notion export (ZIP file) |
| **Confluence** | Import a Confluence export |

### Importing from Markdown or HTML

1. In the import dialog, click **Markdown** or **HTML**.
2. Select the file(s) from your device.
3. The pages are created in the space with the imported content.

### Importing a ZIP Archive

You can also upload a ZIP file containing Markdown and HTML files. This is useful for bulk imports.

1. In the import dialog, scroll to the **Import zip file** section.
2. Click **Upload file**.
3. Select a ZIP archive from your device.
4. Docmost extracts and imports all pages from the archive.

### Importing from Word (DOCX)

1. In the import dialog, click **Word (DOCX)**.
2. Select the `.docx` file(s) from your device.
3. The document content is converted and imported as pages.

### Migrating from Notion

If you are moving from Notion to Docmost, you can import your Notion content directly:

1. In Notion, export your workspace or pages. Notion exports as a ZIP file containing Markdown or HTML files.
2. In Docmost, open the import dialog in the target space.
3. Click **Notion**.
4. Upload the ZIP file exported from Notion.
5. Docmost processes the import and creates pages preserving the page structure.

### Migrating from Confluence

Teams moving from Confluence can import their content into Docmost. To do this, you first need to export your Confluence space as HTML, then import it into Docmost.

#### Exporting from Confluence

1. In Confluence, navigate to the space you want to export.
2. Next to the space name in the sidebar, click **More actions (...)**, then select **Space settings**.
3. In the **General** section, select **Export space**.
4. Choose **HTML** as the export format.
5. Select whether to export the full space or specific pages, then click **Next**.
6. Click **Export space** to start the export process.
7. Once the export is complete, click the download link to save the ZIP file to your device.

#### Importing into Docmost

1. In Docmost, open the import dialog in the target space.
2. Click **Confluence**.
3. Upload the ZIP file exported from Confluence.
4. Docmost processes the import and creates pages with your Confluence content.

The following content is preserved during import:

- Formatting (callouts, toggle blocks, colors)
- Page tree hierarchy
- Internal page links
- Images and attachments
- Draw.io diagrams

## Exporting Pages

### Exporting a Single Page

You can export individual pages as Markdown or HTML files.

1. Open the page you want to export.
2. Click the **page menu (...)** at the top right.
3. Click **Export**.
4. In the export dialog:
   - Select your format: **Markdown** or **HTML**.
   - Toggle **Include subpages** to export all child pages along with the page.
   - Toggle **Include attachments** to bundle attached files into the export.
5. Click **Export** to download.

When exporting with subpages or attachments, the export is packaged as a ZIP file with a folder structure matching the page hierarchy.

### Exporting a Space

You can export all pages in a space at once. This is useful for full backups or migrating content to another tool.

1. Navigate to the space you want to export.
2. In the sidebar, click the **...** menu next to the **Pages** header.
3. Select **Export space**.
4. In the export dialog:
   - Select your format: **Markdown** or **HTML**.
   - Toggle **Include attachments** if you want attached files included.
5. Click **Export**.
6. A ZIP file containing all pages (and optionally attachments) downloads to your device.

You can also access space export through **Space Settings > Settings > Export**.

### Print to PDF

To generate a PDF version of a page:

1. Open the page.
2. Click the **page menu (...)** at the top right.
3. Click **Print PDF**.
4. Use your browser's print dialog to save as PDF.
