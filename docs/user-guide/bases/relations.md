---
sidebar_position: 5
tags:
  - business
  - enterprise
---

# Relations

A **Relation** property links rows of one base to rows of another base, or to other rows of the same base. A project can list its tasks, a task can point to the client it is for, and a task can name the tasks that block it.

Each cell shows the linked rows by their title, which is the first property of the other base. Click a linked row to open it in its own base. Relations also appear on Kanban cards and calendar entries when you add them under **Card properties**.

## Adding a Relation

1. In the table view, click the **+** at the right end of the column headers and choose **Relation**.
2. Under **Related base**, pick the base to link to. You can pick any base you can open, in any space, including the base you are in.
3. Optionally turn on **Show on [other base]**. The other base then gets a matching property that shows the same links from its side. Name it under **Name on [other base]**.
4. Turn off **Allow multiple rows** to pick only one row in this property.
5. Create the property.

The related base can't be changed later. To link to a different base, add a new relation property.

## Linking Rows

Double-click a relation cell, or select it and press Enter, to open the picker. The rows already linked are listed first, under **Linked**. Below them, **Add from [other base]** lists the rows you can still add. Type to search both lists by title, then click a row, or press Enter, to link it. Click a linked row to unlink it.

When **Allow multiple rows** is off, picking a row in that property replaces the rows it links to. Links added from the other base are kept, so the property can still show more than one row.

In the row's full view, a relation lists its linked rows. Use **Link a row** to add more, and **Show all** to load a long list.

Linking or unlinking a row counts as editing it, so its **Last edited at** and **Last edited by** values change. With **Show on [other base]** turned on, the same goes for the rows it links to or unlinks from.

## Two-Way Relations

With **Show on [other base]** turned on, a link made on either side appears on both sides. You can turn it on or off later from the property's options.

Deleting the matching property in the other base keeps the relation working from this side. Deleting the last remaining side removes the links.

## Permissions

- To add a relation property, you need edit access to this base and view access to the related base. Showing it on the other base also needs edit access there.
- To link or unlink rows, you need edit access to the base you are editing in and view access to the other base. When the relation also shows on the other base, you need edit access there too.
- If you can't open the related base, its rows show as **No access** and their titles stay hidden. Filters on that relation treat every row as having no links for you.
- If the related base is in the trash or deleted, the relation's cells show **Base deleted**. Restoring the base from the trash brings the links back.

## Filtering and Exporting

You can filter on a relation with **Is any of**, **Is none of**, **Is empty**, and **Is not empty**. If a row picked in a filter is deleted later, the filter shows it as **Deleted row** until you remove it. Relations can't be used to sort or group rows.

CSV exports list the titles of the linked rows, separated by semicolons. A very long list ends with **+N more** for the rows it leaves out. A CSV import can't fill relation properties.

Relations can't be used in formulas, and a relation property can't be converted to another type.
