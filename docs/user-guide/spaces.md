---
sidebar_position: 4
---

# Spaces

Docmost **Spaces** are dedicated, organized areas within your workspace that group together documents, permissions, and collaborators by project, team, or purpose.

Spaces act as top-level folders. Within a space, you can:
- Move or copy pages between spaces
- Create nested page hierarchies
- Drag and drop pages in the sidebar
- Import or export pages

### Creating a Space
To create a new space:

1. Go to **Settings > Spaces**.
2. Click the **Create Space** button in the top right.
3. In the popup:
    - Enter a **Space Name** (e.g., `Engineering`).
    - Choose a custom **Space Slug**.
    - Add an optional **Description**.
4. Click **Create** to finish.
5. You'll be redirected to the newly created space.

> As the creator, you become the **Space Admin** with **Full Access** permissions.

### Adding Members to a Space

To add members to a space:

1. In the sidebar, click **Space Settings** for the space you want to manage.
2. In the popup, go to the **Members** tab.
3. Click **Add Space Members**.
4. Search for individual workspace members or groups.
5. Select a role and click **Add**.

The available space roles are:
- **Full Access:** Full control over settings, permissions, and pages.
- **Can Edit:** Can create and modify pages within the space.
- **Viewer:** Can view pages, but cannot edit.

### Removing a Member from a Space

To remove a member or group from a space:

1. In the sidebar, click **Space Settings** for the space you want to manage.
2. In the popup, go to the **Members** tab.
3. Click the **three dots (⋯)** next to the member or group.
4. Select **Remove Space Member**.
5. Click **Remove** to confirm.

Removed members lose access to the space unless they still belong to a group that is a member of it. A space must keep at least one member with **Full Access**.

### Editing a Space

To update a space’s details:

1. Go to **Settings > Spaces**.
2. Select the space.
3. In the popup, switch to the **Settings** tab.
4. Edit the **name**, **slug**, or **description**.
5. Click **Save** to apply changes.

### Exporting a Space

You can export pages and attachments within a space for backup, migration, or offline use. Docmost provides both Markdown and HTML export formats.

  <p align="center">
<img src="/docs/img/space-settings.png" width="500"/>
</p>

To export a space,

1. Navigate to the **Space Settings**.

2. Within **Space Settings**, select the **Settings** tab at the top.

3. Click the **Export** button to initiate the export process.

  <p align="center">
<img src="/docs/img/export-space.png" width="500"/>
</p>

4. In the export dialog:
   - Select your desired export format: **Markdown** or **HTML**.
   - Toggle the **Include attachments** option if you want to export attached files along with your content.

5. Click the **Export** button to start downloading.

The exported content will be bundled into a ZIP file and automatically downloaded to your device. You can then extract and use it according to your needs.

### Archiving a Space

Archive a space you no longer use to keep it out of space lists and search without deleting it. People with **Full Access** to a space can archive and restore it.

To archive a space:

1. Open the space's **Settings**.
2. Switch to the **Settings** tab.
3. Click **Archive** next to **Archive space**.
4. Click **Archive** to confirm.

When a space is archived:

- It's hidden from space lists. To see it, choose **Archived spaces** in the filter next to the search box on the **Spaces** page or in **Settings > Spaces**.
- Search leaves out its pages unless you turn on [Include archived](/user-guide/search#archived-spaces). Archived spaces are never used for AI Answers.
- Members keep their roles and can still open and edit its pages. The space shows a notice that it's archived.
- Public links to its pages keep working.

To restore the space, click **Restore space** on the notice, or click **Restore** in the space's **Settings** tab.

Personal spaces can't be archived.

### Deleting a Space

To permanently delete a space:

1. Open the space’s **Settings**.
2. Switch to the **Settings** tab.
3. Click the **Delete** button.
4. In the confirmation dialog:
   - Type the space name to confirm.
   - Click **Confirm**.

> ⚠️ This action is irreversible. The space and all its content will be permanently deleted.
