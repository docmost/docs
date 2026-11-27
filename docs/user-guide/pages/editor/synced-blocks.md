---
sidebar_position: 1
slug: /user-guide/editor/synced-blocks
---

# Synced Blocks

A synced block shows the same content on several pages. You create the original on one page and paste copies of it on others. When you edit the original, the copies show the change.

## Create a synced block

Type `/synced` on a new line, choose **Synced block**, and add content inside it.

To turn existing content into a synced block, select it and choose **Turn into > Synced block** in the formatting toolbar.

Most blocks can go inside a synced block. A few can't, such as another synced block, tabs and bases.

## Add it to another page

1. In edit mode, hover over the synced block and click **Copy synced block** (the copy icon above the block).
2. Open the page where you want it and paste.

You can paste it on as many pages as you need, in any space.

If you copy the whole block with `Ctrl/Cmd + C` instead, the pasted block becomes a new, separate synced block.

## Edit a synced block

You can only edit a synced block on its original page. Copies are read-only. To get to the original, hover over a copy and click **Edit source**.

Changes show on other pages the next time they're opened. On a page that's already open, click **Refresh** on the copy to load the latest version.

## See where it's used

Hover over a synced block and click the button above it. On the original, it reads **Editing original**. On a copy, it reads **Synced to N other pages**.

The list shows every page with the block. The original is marked **ORIGINAL** and the page you're on is marked **THIS PAGE**. Pages you can't access aren't listed.

## Unsync or remove

Hover over the block and open the `...` menu.

On the original:

- **Unsync** keeps the content on this page as regular blocks.
- **Delete synced block** deletes the block and its content.

Either way, copies on other pages show **The original synced block no longer exists**. Remove them with **Remove from page**.

On a copy:

- **Unsync** replaces the copy with regular content you can edit on this page. The original and other copies don't change.
- **Remove from page** removes the copy from this page only.

## Who can see a synced block

A copy shows its content only to people who can view the original page. Everyone else sees **You don't have access to this synced block**. The same message appears if the original page was deleted.

On a [publicly shared page](/user-guide/pages#sharing), a copy shows its content only if the original page is also shared.
