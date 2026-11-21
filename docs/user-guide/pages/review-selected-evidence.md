---
title: Review a decision against selected evidence
description: Keep copied source facts separate from your interpretation and follow-up in a manual decision note.
---

# Review a decision against selected evidence

Before deciding how a product should behave, record which evidence you reviewed,
why you selected it, and what remains unknown. A Docmost page can hold that manual
review without connecting another service to your workspace.

This example considers notifications when a workspace member's access changes.
It uses invented product insights and makes no decision on their behalf.

## Prepare the review

- Choose a specific question and the entries you are authorized to review.
- Check the underlying evidence before relying on a short title. A title alone
  does not establish frequency, importance, customer agreement or approval.
- Copy only the facts needed for the review. Exclude customer names, quotations,
  credentials and other private detail unless the page's audience is authorized.
- Keep the source's logical ID, copied title and source update time together.
  Record when you captured them separately; capture time is not the time the
  customer spoke or the source entry changed.

For example, authorized [ClosedLoop AI API](https://closedloop.sh/developers/api)
reads expose `id`, `title` and `updated_at`. The note below uses those facts;
`Captured at` is a manual review field, not a field attributed to that API.
Another source can use the same pattern with its actual identifiers and dates.

## Create the note

Create a page in an appropriate space, give it a title, then copy the Markdown
below and paste it into the editor. Review the resulting headings and lists.

Use a private review space when the real evidence is private. A copied page
does not establish permission to share its contents. Respect any disabled export
or sharing controls; this workflow does not require public page sharing.

```markdown
# Access-change notifications: evidence review

## Review question
- Question: When should a workspace administrator be notified that a member's role changed?
- Review status: Open; no product decision has been made.
- Review date: 2026-10-21.
- Example status: All entries and dates in this note are invented.

## Selected source facts
### Entry A
- Source: ClosedLoop AI.
- Logical ID: 11111111-1111-4111-8111-111111111111.
- Copied title: Administrators need a record of permission changes.
- Source updated time: 2026-10-20T09:00:00Z.
- Captured at: 2026-10-21T10:00:00Z.

### Entry B
- Source: ClosedLoop AI.
- Logical ID: 22222222-2222-4222-8222-222222222222.
- Copied title: Repeated administration emails are difficult to triage.
- Source updated time: 2026-10-20T15:30:00Z.
- Captured at: 2026-10-21T10:00:00Z.

## Reviewer interpretation
- Selection rationale: Both entries might inform access-change visibility; their titles do not prove that they concern the same workflow.
- Underlying evidence checked: Not applicable to this invented example; record what you actually checked in a real review.
- Possible tension: A visible change record and fewer emails may be compatible; neither title determines the notification channel.
- Unknowns: Which role changes matter, who needs notice, acceptable delay, and whether a digest is sufficient.
- Confidence: Undetermined until relevant underlying evidence is reviewed.

## Decision and follow-up
- Decision: Deferred; do not treat selected titles as approval or priority.
- Next action: Compare an in-product change history with immediate and digest notification options.
- Responsible role: Product reviewer.
- Next review date: 2026-10-28.
- Verification needed: Review permitted evidence about high-risk changes and notification preferences before choosing an option.

## Source boundary
- This note contains two selected title snapshots, not a complete evidence inventory.
- A source update, deletion or access change will not update this page automatically.
- Recheck access and source freshness at the next review; remove details that no longer belong in this space.
```

## Review before acting

Check that source facts remain distinct from the reviewer's interpretation.
Replace the invented content with your permitted selection, preserve unknowns,
and record a decision only when someone actually makes it. Set the next review
date so a copied title does not silently become permanent evidence.

Prepared by ClosedLoop Labs LLC, the team behind ClosedLoop AI. This is a manual
documentation example, not an automated integration or an adoption claim.
