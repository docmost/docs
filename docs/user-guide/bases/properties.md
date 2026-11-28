---
sidebar_position: 1
tags:
  - enterprise
---

# Properties

Properties are the typed fields of a base. Every row shares the same set of properties, and in the table view each property is a column. The type of a property decides what its cells can hold, how they are edited, and which filters apply to them.

## Property Types

| Type | Description |
|------|-------------|
| **Text** | A short single line of text. Up to 1,000 characters. |
| **Long text** | Multi-line text for longer notes. Up to 25,000 characters. |
| **Number** | A numeric value with a configurable display format. |
| **Select** | A single choice from a list of options, each with a color. |
| **Status** | A single choice meant for workflow stages, grouped into To Do, In Progress, and Complete categories. Comes pre-filled with default options. |
| **Multi-select** | Several choices from a list of options. |
| **Date** | A date, optionally with a time. |
| **Person** | One or more members of your workspace. |
| **File** | One or more uploaded files. |
| **Formula** | A read-only value calculated from other properties. See [Formulas](./formulas.md). |
| **Page** | A link to a page in your workspace. |
| **Relation** | Links to rows in another base, or in the same base. See [Relations](./relations.md). |
| **Checkbox** | A true or false toggle. |
| **URL** | A web address. |
| **Email** | An email address. |
| **Created at** | The date and time the row was created. Filled automatically. |
| **Last edited at** | The date and time the row was last changed. Filled automatically. |
| **Last edited by** | The member who last changed the row. Filled automatically. |

The last three types (**Created at**, **Last edited at**, **Last edited by**) are maintained by Docmost and are read-only. **Formula** values are also read-only, since they are calculated.

## Adding a Property

1. In the table view, click the **+** at the right end of the column headers.
2. Choose a type from the list.
3. Give the property a name. If you leave it blank, the type name is used.
4. Set any options for the type (see below).
5. Click to create it.

## Configuring a Property Type

Some types have options you can set when you create the property or later from its menu.

### Number

Choose how the value is displayed:

- **Plain** — the raw number.
- **Separators** — grouped with thousands separators.
- **Currency** — formatted as money, with a currency code and symbol.
- **Percent** — shown as a percentage.
- **Progress** — shown as a progress bar.

You can also set the number of decimal places (precision).

### Select, Status, and Multi-select

These types hold a list of choices. For each choice you can set a name and a color. You can add new choices while editing a cell, not only when configuring the property. Status choices are organized into the To Do, In Progress, and Complete categories.

### Date

- Pick a date format.
- Choose whether to include a time.
- When time is included, display it on a 12-hour or 24-hour clock.

### Person

- Toggle whether a cell can hold more than one person.

### Relation

- Pick the related base when you create the property. It can't be changed later.
- Turn on **Show on [other base]** to give the other base a matching property.
- Turn off **Allow multiple rows** to pick only one row in a property.
- A relation can't be converted to another type.

See [Relations](./relations.md).

### Text, Long text, URL, Email, Checkbox

You can set a default value that is applied to new rows. URL and Email values are validated for the correct format.

## Editing a Property

Click a column header to open its menu. From there you can:

- **Rename** the property.
- **Change type** — convert it to another type. Some conversions lose data (for example, changing a Date to Text), and Docmost warns you before continuing.
- Edit the property's options.
- **Delete** the property.

A type change on a base with many rows may run in the background. While it does, the column shows a converting indicator and updates when it finishes.

## Reordering and Resizing Columns

- Reorder — drag a column header left or right.
- Resize — drag the handle on the right edge of a column header.

Column order and width are saved per view, so different views of the same base can lay out their columns differently.
