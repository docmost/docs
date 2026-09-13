---
tags:
  - business
  - enterprise
---

import DocCardList from '@theme/DocCardList';

# Bases

A base is a database inside Docmost. Instead of writing content in a document, you organize it as structured records: a set of rows, each with the same properties. The same data can be shown in more than one view, so a list of tasks can appear as a table for editing and as a Kanban board for tracking.

<p align="center">
<img src="/docs/img/base-table.png" width="100%" alt="Bases table view"/>
</p>

:::note
Bases is a commercial feature available on all self-hosted paid plans. An active Business or Enterprise license is required. Bases is not available in the free, open source edition.
:::

## Key Concepts

| Term | Meaning |
|------|---------|
| **Base** | A database. It lives in a space and appears in the sidebar, alongside your pages. |
| **Row** | A single record in the base, like one task or one contact. |
| **Property** | A typed field shared by every row, such as Text, Number, Date, or Select. Properties are the columns in the table view. |
| **Cell** | The value of one property on one row. |
| **View** | A saved way of looking at the rows. Each view keeps its own filters, sorts, visible properties, and grouping. A base can have several views. |

## Creating a Base

There are two ways to create a base.

### As a Full Page

A base can take up a whole page, the same way a document does.

1. Create a new page.
2. On the empty page, find the **Get started with** prompt.
3. Click **Base** to start with a table, or **Kanban** to start with a board.

The page becomes a base and shows the grid. It appears in the sidebar with a table icon and is titled **Untitled base** until you name it.

### Inline, Inside a Document

You can also embed a base in the middle of a regular page.

1. In the editor, type `/base` for a table, or `/kanban` for a board.
2. Choose **Base (Inline)** or **Kanban** from the slash menu.

The base is inserted as a block in the document. Both commands create a base; **Kanban** simply starts on a board view. Use the expand control in its toolbar to open it as a full page when you need more room.

## Views

Every base supports two view types:

- **Table** — a spreadsheet-style grid of rows and columns. Best for editing and scanning data.
- **Kanban** — a board grouped by a Select or Status property, with one column per option. Best for moving records through stages.

See [Views](./views.md) for how to create and configure them.

### Kanban

The Kanban view groups your rows into columns by a Select or Status property — one card per row, one column per option. Drag a card from one column to another to update its status. It's best for tracking work as it moves through stages.

<p align="center">
<img src="/docs/img/base-kanban.png" width="100%" alt="Bases Kanban view"/>
</p>

## Permissions & Access

A base lives in a [space](../spaces.md), and access to it follows the same rules as pages:

- **Viewer** — can open a base and read its rows, but cannot change anything.
- **Can Edit** and **Full Access** — can create bases and edit rows, properties, and views.

A base is a page, so [page permissions](../pages/page-permissions.md) can restrict an individual base to specific people and groups, just like any other page.

:::note
Public sharing of bases is not yet supported. When a page that contains a base is shared publicly, the base does not appear for public visitors. Support for this is planned.
:::

## Limits

Some values are capped to keep bases responsive:

| Limit | Value |
|-------|-------|
| Text property length | 1,000 characters |
| Long text property length | 25,000 characters |
| Choices selected in one Multi-select cell | 100 |
| People in one Person cell | 100 |
| Files in one File cell | 50 |
| Sort rules per view | 5 |

:::note
Bases are designed for small to medium datasets. For the best performance, keep a base under 5,000 rows.
:::

## In This Section

<DocCardList />
