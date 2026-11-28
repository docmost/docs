---
sidebar_position: 3
tags:
  - enterprise
---

# Filtering and Sorting

Filters and sorts are saved on the view, so each view can show a different slice of the same base. Filters apply to both table and Kanban views. Sorting orders the rows in a table view.

:::note
Filters and sorts run every time a view loads. On a large base, many conditions or sort rules can make a view slower to load.
:::

## Filtering

Open the **Filter** control in the toolbar and add a condition. A condition has three parts:

1. The property to test.
2. An operator, such as *Is* or *Contains*.
3. A value to compare against, where the operator needs one.

When you add more than one condition, a row must match all of them to appear.

### Operators by Property Type

The available operators depend on the property type.

| Property type | Operators |
|---------------|-----------|
| Text, Long text, URL, Email | Is, Is not, Contains, Doesn't contain, Is empty, Is not empty |
| Number | Is, Is not, Greater than, Less than, Is empty, Is not empty |
| Select, Status | Is, Is not, Is any of, Is none of, Is empty, Is not empty |
| Multi-select | Is any of, Is none of, Is empty, Is not empty |
| Date, Created at, Last edited at | Is, Is before, Is after, Is on or before, Is on or after, Is within, Is empty, Is not empty |
| Person, Last edited by | Is, Is not, Is any of, Is none of, Is empty, Is not empty |
| Checkbox | Is, Is empty, Is not empty |
| Page, File | Is empty, Is not empty |
| Relation | Is any of, Is none of, Is empty, Is not empty |
| Formula | Is, Is not, Is empty, Is not empty |

### Filtering on Dates

Date conditions accept an exact date, or a relative option that is resolved when the filter runs. Relative options include single points in time (today, yesterday, tomorrow, one week or month ago, one week or month from now) and ranges (this, past, or next week, month, or year). Relative filters stay current as time passes, so a filter for *this week* always shows the current week.

## Sorting

Open the **Sort** control to order the rows in a table view. Each sort rule has a property and a direction, ascending or descending.

You can stack several sort rules, up to five. They apply in order: the first rule is the primary sort, the second breaks ties within the first, and so on.

Page and Relation properties can't be used for sorting.

## Saving View Changes

When you adjust filters or sorts, a banner appears with **Save** and **Discard**:

- **Save** writes the change to the view, so everyone who opens the view sees it.
- **Discard** drops your change and restores the saved configuration.
