---
sidebar_position: 4
tags:
  - enterprise
---

# Formulas

A **Formula** property calculates its value from other properties in the same row. The result is read-only: you write the formula once, and every row computes its own value. A formula can return a number, text, a true/false value, or a date.

## Adding a Formula

1. Add a property and choose the **Formula** type.
2. Write the expression in the formula editor.

The editor lists the available functions and the base's properties. Click a property to insert a reference to it.

## Writing Formulas

### Referencing a Property

Refer to another property by name with `prop()`:

```
prop("Price")
```

Relation properties can't be used in formulas.

### Operators

Formulas support the usual operators:

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Logical: `&&`, `||`, `!`

For example, to multiply two properties:

```
prop("Price") * prop("Qty")
```

### Conditionals

Use `if()` to choose between two values:

```
if(prop("Done"), "Complete", "In progress")
```

`if()` takes exactly three arguments: a condition, the value when it is true, and the value when it is false. Combine conditions with `and()` and `or()`, which each accept any number of arguments.

## Function Reference

Function names are not case-sensitive.

### Math

| Function | Description |
|----------|-------------|
| `round(number, [places])` | Rounds to the nearest integer, or to `places` decimals if given. |
| `floor(number)` | Rounds down. |
| `ceil(number)` | Rounds up. |
| `abs(number)` | Absolute value. |
| `min(...numbers)` | Minimum of the arguments. |
| `max(...numbers)` | Maximum of the arguments. |
| `mod(a, b)` | Remainder after division. |
| `add(a, b)` | Sum of two numbers. |
| `subtract(a, b)` | Difference of two numbers. |
| `multiply(a, b)` | Product of two numbers. |
| `divide(a, b)` | Quotient of two numbers. |
| `pow(base, exponent)` | Base raised to an exponent. |
| `sqrt(number)` | Positive square root. |
| `sum(...numbers)` | Sum of the arguments. |
| `mean(...numbers)` | Arithmetic average of the arguments. |
| `average(...numbers)` | Arithmetic average of the arguments (alias of `mean`). |
| `median(...numbers)` | Middle value of the arguments. |

### Text

| Function | Description |
|----------|-------------|
| `concat(...values)` | Concatenates strings. |
| `length(string)` | Length of a string. |
| `contains(string, substring)` | Returns true if the first string contains the second. |
| `lower(string)` | Lowercases the string. |
| `upper(string)` | Uppercases the string. |
| `trim(string)` | Strips whitespace from both ends. |

### Date

| Function | Description |
|----------|-------------|
| `now()` | Current timestamp. |
| `today()` | Midnight UTC of today. |
| `dateAdd(date, amount, unit)` | Adds a duration to a date. Units: `"days"`, `"hours"`, `"minutes"`, `"months"`, `"years"`. |
| `dateBetween(dateA, dateB, unit)` | Difference between two dates. Units: `"days"`, `"hours"`, `"minutes"`. |

The unit is passed as quoted text, for example `dateBetween(prop("Start"), prop("End"), "days")`.

### Logic

| Function | Description |
|----------|-------------|
| `empty(value)` | Returns true if the value is null, an empty string, or an error. |

### Conversion

| Function | Description |
|----------|-------------|
| `toNumber(value)` | Parses the value as a number, or null. |
| `toString(value)` | Converts the value to a string. |
