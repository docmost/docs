---
sidebar_position: 1.7
---

# Page History

Docmost saves versions of a page while people edit it. Use page history to see what changed, compare two versions, or restore an earlier one.

## Open page history

Open the page menu (`...`) at the top right and click **Page history**.

Each version in the list shows when it was saved and who edited it. The newest version is at the top. Anyone who can view a page can see its history.

## When versions are saved

Docmost saves a version shortly after an edit, not on every keystroke:

- every minute during the first 5 minutes after a page is created
- every 5 minutes after that, while the page is being edited

If nothing changed since the last version, no new version is saved. Server administrators can change the 5-minute interval with [PAGE_HISTORY_INTERVAL](/self-hosting/environment-variables).

## See what changed

Select a version to view it. With **Highlight changes** on, the version is compared with the one before it. Added and removed text is marked, and so are formatting changes, such as text made bold or a paragraph turned into a heading. Hover over a formatting change to see what changed.

Use the arrows at the bottom of the window to jump to the previous or next change.

## Compare two versions

1. Open a version's menu (`...`) and click **Compare**.
2. Select the second version.
3. Click **Compare**.

The newer of the two versions opens with the changes since the older one highlighted. Close the comparison bar to go back to viewing single versions. Comparing isn't available on small screens.

## Restore a version

1. Select the version.
2. Click **Restore**, then **Confirm**.

You can also click **Restore** in a version's menu (`...`).

The page title and content are replaced for everyone who has the page open. Edits made after the latest saved version are lost. Older versions stay in the list, so you can restore a different one later. The page icon and cover aren't restored.

You need edit access to the page to restore a version.

## What history keeps

Versions are kept for as long as the page exists. When a page is permanently deleted, its history is deleted too. A page moved to another space keeps its history. Duplicated and copied pages start with an empty history.

Comments aren't part of page history.
