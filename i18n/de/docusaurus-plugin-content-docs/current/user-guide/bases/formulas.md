---
sidebar_position: 4
tags:
  - enterprise
---

# Formeln

Eine **Formel**-Eigenschaft berechnet ihren Wert aus anderen Eigenschaften in derselben Zeile. Das Ergebnis ist schreibgeschützt: Sie schreiben die Formel einmal, und jede Zeile berechnet ihren eigenen Wert. Eine Formel kann eine Zahl, einen Text, einen Wahr-/Falsch-Wert oder ein Datum zurückgeben.

## Eine Formel hinzufügen

1. Fügen Sie eine Eigenschaft hinzu und wählen Sie den Typ **Formel**.
2. Schreiben Sie den Ausdruck im Formel-Editor.

Der Editor listet die verfügbaren Funktionen und die Eigenschaften der Base auf. Klicken Sie auf eine Eigenschaft, um eine Referenz darauf einzufügen.

## Formeln schreiben

### Eine Eigenschaft referenzieren

Verweisen Sie mit `prop()` über den Namen auf eine andere Eigenschaft:

```
prop("Price")
```

### Operatoren

Formeln unterstützen die üblichen Operatoren:

- Arithmetik: `+`, `-`, `*`, `/`, `%`
- Vergleich: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Logik: `&&`, `||`, `!`

Zum Beispiel, um zwei Eigenschaften zu multiplizieren:

```
prop("Price") * prop("Qty")
```

### Bedingungen

Verwenden Sie `if()`, um zwischen zwei Werten zu wählen:

```
if(prop("Done"), "Complete", "In progress")
```

`if()` nimmt genau drei Argumente entgegen: eine Bedingung, den Wert, wenn sie wahr ist, und den Wert, wenn sie falsch ist. Kombinieren Sie Bedingungen mit `and()` und `or()`, die jeweils eine beliebige Anzahl von Argumenten akzeptieren.

## Funktionsreferenz

Bei Funktionsnamen wird die Groß-/Kleinschreibung nicht beachtet.

### Mathematik

| Funktion | Beschreibung |
|----------|-------------|
| `round(number, [places])` | Rundet auf die nächste ganze Zahl oder auf `places` Dezimalstellen, falls angegeben. |
| `floor(number)` | Rundet ab. |
| `ceil(number)` | Rundet auf. |
| `abs(number)` | Absolutwert. |
| `min(...numbers)` | Minimum der Argumente. |
| `max(...numbers)` | Maximum der Argumente. |
| `mod(a, b)` | Rest nach der Division. |
| `add(a, b)` | Summe zweier Zahlen. |
| `subtract(a, b)` | Differenz zweier Zahlen. |
| `multiply(a, b)` | Produkt zweier Zahlen. |
| `divide(a, b)` | Quotient zweier Zahlen. |
| `pow(base, exponent)` | Basis hoch einen Exponenten. |
| `sqrt(number)` | Positive Quadratwurzel. |
| `sum(...numbers)` | Summe der Argumente. |
| `mean(...numbers)` | Arithmetisches Mittel der Argumente. |
| `average(...numbers)` | Arithmetisches Mittel der Argumente (Alias von `mean`). |
| `median(...numbers)` | Mittlerer Wert der Argumente. |

### Text

| Funktion | Beschreibung |
|----------|-------------|
| `concat(...values)` | Verkettet Zeichenketten. |
| `length(string)` | Länge einer Zeichenkette. |
| `contains(string, substring)` | Gibt wahr zurück, wenn die erste Zeichenkette die zweite enthält. |
| `lower(string)` | Wandelt die Zeichenkette in Kleinbuchstaben um. |
| `upper(string)` | Wandelt die Zeichenkette in Großbuchstaben um. |
| `trim(string)` | Entfernt Leerzeichen an beiden Enden. |

### Datum

| Funktion | Beschreibung |
|----------|-------------|
| `now()` | Aktueller Zeitstempel. |
| `today()` | Mitternacht UTC des heutigen Tages. |
| `dateAdd(date, amount, unit)` | Fügt einem Datum eine Dauer hinzu. Einheiten: `"days"`, `"hours"`, `"minutes"`, `"months"`, `"years"`. |
| `dateBetween(dateA, dateB, unit)` | Differenz zwischen zwei Daten. Einheiten: `"days"`, `"hours"`, `"minutes"`. |

Die Einheit wird als Text in Anführungszeichen übergeben, zum Beispiel `dateBetween(prop("Start"), prop("End"), "days")`.

### Logik

| Funktion | Beschreibung |
|----------|-------------|
| `empty(value)` | Gibt wahr zurück, wenn der Wert null, eine leere Zeichenkette oder ein Fehler ist. |

### Konvertierung

| Funktion | Beschreibung |
|----------|-------------|
| `toNumber(value)` | Wandelt den Wert in eine Zahl um oder null. |
| `toString(value)` | Wandelt den Wert in eine Zeichenkette um. |
