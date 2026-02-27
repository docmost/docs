---
sidebar_position: 2
tags:
  - enterprise
---

# Page Permissions

Page permissions allow you to control who can view and edit individual pages within a space. By default, all pages in a space are accessible to every space member based on their space role. With page permissions, you can restrict specific pages so that only selected users and groups have access.

:::note
Page permissions is an enterprise feature. An active enterprise license is required.
:::

## Access Levels

Each page has one of two access levels:

- **Open** — The default. All space members can access the page based on their space role. No additional restrictions apply.
- **Restricted** — Only users and groups explicitly granted permission can access the page.

## Permission Roles

When a page is restricted, each user or group is assigned one of two roles:

| Role | View | Edit |
|------|:----:|:----:|
| **Can View** | Yes | No |
| **Can Edit** | Yes | Yes |

## Restricting a Page

To restrict access to a page:

1. Open the page you want to restrict.
2. Click the **Share** button in the toolbar.
3. In the **Access** tab, click the access level dropdown and select **Restricted**.
4. You are automatically added with **Can Edit** access on the page.
5. Add other users or groups who should have access (see below).

Once restricted, only users with explicit permissions can view or edit the page.

## Adding Members

To grant access to a restricted page:

1. Click **Share** to open the permission modal.
2. In the **Access** tab, use the search field to find users or groups.
3. Select the members you want to add.
4. Choose a role (**Can View** or **Can Edit**) from the role dropdown.
5. Click **Add**.

## Changing and Removing Access

### Changing a Role

1. In the **Access** tab, find the user or group in the permission list.
2. Click the role dropdown next to their name.
3. Select the new role (**Can View** or **Can Edit**).

The change takes effect immediately.

### Removing Access

1. In the **Access** tab, find the user or group.
2. Click the role dropdown next to their name.
3. Select **Remove**.

:::warning
At least one **Can Edit** member must remain on a restricted page. You cannot remove the last **Can Edit** member.
:::

## Removing Restrictions

To make a restricted page open again:

1. Click **Share** to open the permission modal.
2. In the **Access** tab, click the access level dropdown and select **Open**.

All existing permissions are removed and the page becomes accessible to all space members based on their space role.

## Permission Inheritance

Page permissions are inherited through the page hierarchy. When a parent page is restricted, all of its child pages are also restricted, even if the child pages themselves are set to Open.

A child page under a restricted parent:

- Cannot be accessed by users who lack permission on the parent.
- Displays an **Inherited from** indicator in the Access tab, showing which ancestor page the restriction comes from. Clicking the link navigates to that ancestor page.

To access a child page, a user must have permission on **every** restricted ancestor in the page hierarchy.

### Overriding Inherited Permissions

A child page can have its own direct restriction in addition to the inherited one. In this case:

- The child page has both a direct restriction and an inherited restriction.
- Users need permission on both the child page **and** all restricted ancestors to access it.

## How Page Permissions Interact with Space Roles

Page permissions work alongside space roles. The effective access a user has depends on both levels:

| Space Role | Page Role | Can View | Can Edit |
|------------|-----------|:--------:|:--------:|
| Full Access | Can Edit | ✅ | ✅ |
| Full Access | Can View | ✅ | ❌ |
| Full Access | (Open page) | ✅ | ✅ |
| Can Edit | Can Edit | ✅ | ✅ |
| Can Edit | Can View | ✅ | ❌ |
| Can Edit | (Open page) | ✅ | ✅ |
| Can View | Can Edit | ✅ | ❌ |
| Can View | Can View | ✅ | ❌ |
| Can View | (Open page) | ✅ | ❌ |

Space role and page role are combined, and the more restrictive permission applies. A space **Can View** member cannot edit pages even with a page **Can Edit** role. A space **Can Edit** member with a page **Can View** role can only view the restricted page.

### Who Can Manage Page Permissions?

Managing page permissions includes restricting a page, removing restrictions, adding or removing members, and changing roles. The ability to manage permissions requires both space-level and page-level authorization:

| Space Role | Page Role | Can Manage Page Permissions? |
|------------|-----------|:----------------------------:|
| Full Access | Can Edit |              ✅               |
| Full Access | Can View |              ✅               |
| Full Access | (Open page) |              ✅               |
| Can Edit | Can Edit |              ✅               |
| Can Edit | Can View |              ❌               |
| Can Edit | (Open page) |              ✅               |
| Can View | Can Edit |              ❌               |
| Can View | Can View |              ❌               |
| Can View | (Open page) |              ❌               |

Space **Can View** members cannot manage page permissions regardless of their page role. Space **Can Edit** members can manage permissions only if they have a page **Can Edit** role (or if the page is open). Space **Full Access** members can manage permissions on any page they can view.

## Sidebar Behavior

Page permissions affect what users see in the sidebar page tree:

- **Hidden pages** — Pages that a user cannot access are completely hidden from the sidebar. If a restricted page has no accessible children, it does not appear at all.
- **Read-only pages** — Pages where a user has **Can View** access appear in the sidebar but cannot be dragged, renamed, or have child pages created under them. The context menu options for duplicate, move, and delete are also hidden.

## Search

Restricted pages are filtered from search results for users who do not have access. A user will never see content from pages they cannot view, regardless of whether they search within a space or across the entire workspace.

## Share Button Indicators

The **Share** button in the toolbar displays visual indicators to show the current state of a page:

- **Lock icon with red dot** — The page has restrictions (direct or inherited). Only permitted users can access it.
- **Globe icon with green dot** — The page is publicly shared via the Publish tab.
- **No icon** — The page is open with no restrictions and not publicly shared.
