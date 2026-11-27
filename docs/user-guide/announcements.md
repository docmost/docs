---
sidebar_position: 3.5
tags:
  - business
  - enterprise
---

# Announcements

Announcements put a banner at the top of every page, for news such as planned maintenance or a policy change. Workspace owners and admins manage them in **Settings** > **Announcements**. Announcements are available in the Business and Enterprise editions.

## Create an announcement

1. Open **Settings** > **Announcements** and click **New announcement**.
2. Enter a **Title**. It identifies the announcement in the list and isn't shown in the banner.
3. Choose a **Type** and write the **Message**.
4. Change any other options, check the **Preview**, and click **Create**.

| Option | Description |
|--------|-------------|
| **Type** | **Info**, **Success**, **Warning**, **Critical** or **Neutral**. Sets the icon and the default color. |
| **Message** | One line of up to 500 characters. You can use bold, italic, underline, links and emoji. |
| **Color** | Replaces the type's default color. |
| **Audience** | **Logged-in users** see the banner inside Docmost. **Everyone** also shows it on the login page and on public pages. |
| **Allow people to dismiss it** | Adds a close button to the banner. |
| **Starts** and **Ends** | Leave **Starts** empty to show the banner right away. Leave **Ends** empty to keep it up until you archive it. |

Links in the message can go to a website, an email address (`mailto:`), or a page in your workspace (a path starting with `/`). Links to other websites open in a new tab.

People see a new or edited announcement the next time they load a page, or within a few minutes.

## One banner at a time

Only one announcement can show at a time. If a new announcement overlaps one that has an end time, you can't save it. Change its times or archive the other announcement first.

An announcement without an end time can be replaced. Docmost tells you which announcement will be archived and when. Click **Save and replace** to confirm. The older announcement is archived when the new one starts.

## Dismissed banners

When **Allow people to dismiss it** is on, people can close the banner. It stays closed in that browser. If you change the announcement's type, color or message, it shows again.

## Manage announcements

The list shows each announcement's type, audience, schedule and status:

- **Active**: showing now.
- **Scheduled**: starts later.
- **Archived**: archived by hand, replaced by another announcement, or past its end time.

By default, the list shows active and scheduled announcements. Use the status filter to see archived announcements or all of them.

In an announcement's menu (`...`):

- **Edit** changes the announcement, including an archived one.
- **Archive** takes down an active or scheduled announcement right away.
- **Unarchive** brings back an archived announcement. If its end time has passed, edit it and set a later end time first.
- **Delete** permanently removes an archived announcement.

Without a paid license, announcements stop showing. Admins can still see the list and archive or delete announcements.

Changes to announcements are recorded in the [audit log](/user-guide/audit-logs).
