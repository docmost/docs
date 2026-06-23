---
sidebar_position: 3
tags:
  - enterprise
---

# Filtern und Sortieren

Filter und Sortierungen werden in der Ansicht gespeichert, sodass jede Ansicht einen anderen Ausschnitt derselben Base zeigen kann. Filter gelten sowohl für Tabellen- als auch für Kanban-Ansichten. Die Sortierung ordnet die Zeilen in einer Tabellenansicht.

:::note
Filter und Sortierungen werden jedes Mal ausgeführt, wenn eine Ansicht geladen wird. Bei einer großen Base können viele Bedingungen oder Sortierregeln das Laden einer Ansicht verlangsamen.
:::

## Filtern

Öffnen Sie das **Filter**-Steuerelement in der Symbolleiste und fügen Sie eine Bedingung hinzu. Eine Bedingung besteht aus drei Teilen:

1. Der zu prüfenden Eigenschaft.
2. Einem Operator, etwa *Ist* oder *Enthält*.
3. Einem Wert zum Vergleich, sofern der Operator einen benötigt.

Wenn Sie mehr als eine Bedingung hinzufügen, muss eine Zeile alle erfüllen, um zu erscheinen.

### Operatoren nach Eigenschaftstyp

Die verfügbaren Operatoren hängen vom Eigenschaftstyp ab.

| Eigenschaftstyp | Operatoren |
|---------------|-----------|
| Text, Langtext, URL, E-Mail | Ist, Ist nicht, Enthält, Enthält nicht, Ist leer, Ist nicht leer |
| Zahl | Ist, Ist nicht, Größer als, Kleiner als, Ist leer, Ist nicht leer |
| Auswahl, Status | Ist, Ist nicht, Ist eines von, Ist keines von, Ist leer, Ist nicht leer |
| Mehrfachauswahl | Ist eines von, Ist keines von, Ist leer, Ist nicht leer |
| Datum, Erstellt am, Zuletzt bearbeitet am | Ist, Ist vor, Ist nach, Ist am oder vor, Ist am oder nach, Ist innerhalb, Ist leer, Ist nicht leer |
| Person, Zuletzt bearbeitet von | Ist, Ist nicht, Ist eines von, Ist keines von, Ist leer, Ist nicht leer |
| Kontrollkästchen | Ist, Ist leer, Ist nicht leer |
| Seite, Datei | Ist leer, Ist nicht leer |
| Formel | Ist, Ist nicht, Ist leer, Ist nicht leer |

### Nach Datum filtern

Datumsbedingungen akzeptieren ein exaktes Datum oder eine relative Option, die aufgelöst wird, wenn der Filter ausgeführt wird. Relative Optionen umfassen einzelne Zeitpunkte (heute, gestern, morgen, vor einer Woche oder einem Monat, in einer Woche oder einem Monat) und Zeiträume (diese, vergangene oder nächste Woche, Monat oder Jahr). Relative Filter bleiben aktuell, während die Zeit vergeht, sodass ein Filter für *diese Woche* immer die aktuelle Woche anzeigt.

## Sortieren

Öffnen Sie das **Sortierung**-Steuerelement, um die Zeilen in einer Tabellenansicht zu ordnen. Jede Sortierregel hat eine Eigenschaft und eine Richtung, aufsteigend oder absteigend.

Sie können mehrere Sortierregeln stapeln, bis zu fünf. Sie werden der Reihe nach angewendet: Die erste Regel ist die primäre Sortierung, die zweite löst Gleichstände innerhalb der ersten auf, und so weiter.

## Ansichtsänderungen speichern

Wenn Sie Filter oder Sortierungen anpassen, erscheint ein Banner mit **Speichern** und **Verwerfen**:

- **Speichern** schreibt die Änderung in die Ansicht, sodass jeder, der die Ansicht öffnet, sie sieht.
- **Verwerfen** verwirft Ihre Änderung und stellt die gespeicherte Konfiguration wieder her.
