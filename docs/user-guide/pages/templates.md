---
sidebar_position: 4
tags:
  - business
  - enterprise
---

# Page Templates

Templates provide reusable content for pages such as meeting notes, project plans, and onboarding checklists. They are available in the Business and Enterprise editions.

## Use a template

On an empty page, click **Template** below the title, then click **Use** next to a template. An existing title is kept; an empty title is filled from the template.

To create a new page from the sidebar:

1. Open **Templates** in the sidebar.
2. Click a template to preview it, then click **Use template**.
3. Choose a destination space or a parent page, then click **Create page**.

You need permission to create pages in the destination. The new page copies the template's title, icon, and content, including its images, diagrams, and attachments. You can edit it without changing the template.

If the template has [variables](#variables), you fill them in before the page is created.

## Create a template

Workspace owners and admins can enable **Allow members to create templates** in **Settings > General**. This lets members create templates in spaces they belong to and can edit. Only workspace owners and admins can create global templates.

1. Open **Templates** and click **New template**.
2. Enter a **Title** and choose a **Scope**.
3. Click **Create**.
4. Add content in the template editor, including images, diagrams, and attachments. Changes are saved automatically.

The scope determines who can find and use the template:

| Scope | Availability |
|-------|--------------|
| **Global** | Everyone in the workspace |
| **Space** | Members of the selected space |

## Placeholders

Placeholders are short instructions that tell people what to write, such as "Add the meeting goal". They show in gray in pages created from the template until someone types in their place.

### Add placeholders

In the template editor:

1. Type `/` and choose **Placeholder text**. With the [fixed editor toolbar](../preferences.md#fixed-editor-toolbar), you can also find it under **More inserts**.
2. Write the instruction and press `Enter`. Press `Esc` to cancel.

To turn existing text into placeholders, select it and click **Turn into placeholder** in the formatting toolbar. Each selected line becomes its own placeholder, so you can convert a whole list at once.

To change a placeholder, click it, edit the instruction, and press `Enter`. To remove it, delete the instruction and press `Enter`.

### Fill in placeholders

In a page created from a template, click a placeholder and start typing. The instruction disappears and your text takes its place, with the formatting of the text around it. Pasting works the same way. In a table, `Tab` moves to the next cell and stops at its first placeholder.

Placeholders show only while you edit a page or preview a template. They don't appear in read mode, on shared pages, or in search results. Copying, exporting, or printing a page leaves them out.

## Variables

Variables are named fields, such as a project name or an owner, that people fill in when they use the template. Each answer becomes regular text on the new page. Unlike placeholders, variables are filled in once, before the page is created, and don't stay on the page.

### Add variables

In the template editor:

1. Type `/` and choose **Variable**. With the [fixed editor toolbar](../preferences.md#fixed-editor-toolbar), you can also find it under **More inserts**.
2. Enter a **Variable name**, such as "Project name".
3. Choose a **Field type**: **Single-line text**, **Multi-line text**, or **Select**. For **Select**, enter one choice per line under **Choices**.
4. Click **Insert**.

To ask for the same value in several places, insert another variable with the same name. One answer fills every copy. Names aren't case-sensitive.

To change a variable, click it, make your changes, and click **Save**. Renaming a variable renames all its copies. To remove a variable, delete it like regular text.

### Fill in variables

When you use a template that has variables, Docmost first opens the template with an input in place of each variable. Fill in the fields and continue. Fields you leave empty are removed from the page.

Answers keep the formatting the variable had in the template, and multi-line answers keep their line breaks. Variables fill in the page content only, not the title.

## Edit or delete a template

In **Templates**, open the template's menu (`…`) and select **Edit** or **Delete**. In the editor, use the **Template settings** gear icon to change its scope.

Editing or deleting a template does not change pages already created from it.
