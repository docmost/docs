---
sidebar_position: 6
tags:
  - enterprise
---

# Page Verification

Page verification shows readers whether a page has been checked by the right people. Verifiers confirm that a page is accurate, and the page shows its status next to the author's name.

:::note
Page verification is a commercial feature. An active Enterprise license is required.
:::

## Workflows

When you set up verification, you choose one of two workflows:

- **Recurring verification**: verifiers confirm the page on a schedule, for example every 30 days, on a fixed date, or once without an expiry date. Use it for runbooks, FAQs and other living documentation.
- **Approval workflow**: the page moves through **Draft**, **In approval**, **Approved** and **Obsolete**. Use it for SOPs and other controlled documents.

## Set up verification

You need edit access to the page.

1. Open the page and click the shield icon next to the author's name, or open the page menu and choose **Add verification**.
2. Choose **Recurring verification** or **Approval workflow**.
3. Add up to five verifiers.
4. For recurring verification, choose when the verification expires, confirm that you reviewed the page, and click **Verify**. For the approval workflow, click **Set up**. The page starts as a draft.

To change verifiers or the expiry, or to remove verification, click the status next to the author's name.

## Who can verify and approve

Designated verifiers can verify and approve a page even if they only have **Can view** access to it. Space admins who can edit the page can also verify and approve it.

## Recurring verification

A verified page shows one of these statuses:

| Status | Meaning |
|---|---|
| **Verified** | A verifier confirmed the page and the verification is still valid. |
| **Review needed** | The verification expires within four days. Verifiers get a reminder. |
| **Verification expired** | The expiry date has passed. Verifiers are notified. |
| **Unverified changes** | The page was changed after it was verified. |

To verify the page again, click the status, confirm that you reviewed the page, and click **Verify**.

## Approval workflow

1. When the draft is ready, an editor opens the status and clicks **Submit for approval**. Verifiers get a notification and an email.
2. A verifier reviews the page and clicks **Approve**, or **Reject** with an optional comment. A rejected page goes back to draft, and the person who submitted it is notified.
3. An approved page can be submitted again for a new review, or marked as **Obsolete** when it is no longer in use. Obsolete is final: to use the page again, remove verification and set it up again.

A page can only be approved while it is in approval.

## When a verified page changes

Any change to the content or title of a verified page ends its verified state:

- An **approved** page goes back to **Draft**. It has to be submitted and approved again.
- A page **in approval** goes back to **Draft**. The approval request is withdrawn.
- A page with **recurring verification** shows **Unverified changes** until a verifier verifies it again.

This applies to every kind of change: edits in the editor, restoring an earlier version, and changes made through the API, MCP or AI. The page's verifiers get a notification and an email, except the person who made the change. The change is recorded in the audit log as **Invalidated page verification**.

These actions do not count as changes:

- adding, resolving or deleting comments
- expanding or collapsing toggle blocks
- changing the page icon
- adjustments the editor makes on its own when a page opens

Changes that were typed before someone clicked **Submit for approval** or **Approve**, but saved a few seconds later, do not reset the new status.

Pages that are obsolete, in draft, or whose verification has already expired keep their status when they are edited.

## Editing a verified page

Pages that are **Verified**, **Review needed**, **Approved** or **In approval** open in read mode for everyone, even if your default page edit mode is Edit.

To edit such a page, select **Edit** in the page header and confirm. Edit mode applies only to that page until you leave it. Your default page edit mode and other pages are not affected.

If someone approves the page or submits it for approval while you have it open, the page switches back to read mode.

## Verified pages list

Go to **Settings > Verified pages** to see every page with verification that you can access, with its status and verifiers. You can search by title and filter by space and workflow.
