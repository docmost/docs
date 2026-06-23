---
tags:
  - enterprise
---

import DocCardList from '@theme/DocCardList';

# Bases

Eine Base ist eine Datenbank innerhalb von Docmost. Anstatt Inhalte in einem Dokument zu schreiben, organisieren Sie sie als strukturierte Datensätze: eine Reihe von Zeilen, jede mit denselben Eigenschaften. Dieselben Daten können in mehr als einer Ansicht dargestellt werden, sodass eine Aufgabenliste als Tabelle zum Bearbeiten und als Kanban-Board zum Verfolgen erscheinen kann.

<p align="center">
<img src="/docs/img/base-table.png" width="100%" alt="Bases table view"/>
</p>

:::note
Bases ist eine kommerzielle Funktion, die in allen kostenpflichtigen, selbst gehosteten Tarifen verfügbar ist. Eine aktive Business- oder Enterprise-Lizenz ist erforderlich. Bases ist in der kostenlosen Open-Source-Edition nicht verfügbar.
:::

## Schlüsselkonzepte

| Begriff | Bedeutung |
|------|---------|
| **Base** | Eine Datenbank. Sie befindet sich in einem Bereich und erscheint in der Seitenleiste, neben Ihren Seiten. |
| **Zeile** | Ein einzelner Datensatz in der Base, etwa eine Aufgabe oder ein Kontakt. |
| **Eigenschaft** | Ein typisiertes Feld, das jede Zeile gemeinsam hat, etwa Text, Zahl, Datum oder Auswahl. Eigenschaften sind die Spalten in der Tabellenansicht. |
| **Zelle** | Der Wert einer Eigenschaft in einer Zeile. |
| **Ansicht** | Eine gespeicherte Art, die Zeilen zu betrachten. Jede Ansicht behält ihre eigenen Filter, Sortierungen, sichtbaren Eigenschaften und Gruppierungen bei. Eine Base kann mehrere Ansichten haben. |

## Eine Base erstellen

Es gibt zwei Möglichkeiten, eine Base zu erstellen.

### Als ganze Seite

Eine Base kann eine ganze Seite einnehmen, genau wie ein Dokument.

1. Erstellen Sie eine neue Seite.
2. Suchen Sie auf der leeren Seite die Aufforderung **Erste Schritte mit**.
3. Klicken Sie auf **Base**, um mit einer Tabelle zu beginnen, oder auf **Kanban**, um mit einem Board zu beginnen.

Die Seite wird zu einer Base und zeigt das Raster an. Sie erscheint in der Seitenleiste mit einem Tabellensymbol und trägt den Titel **Untitled base**, bis Sie sie benennen.

### Inline, innerhalb eines Dokuments

Sie können eine Base auch mitten in eine reguläre Seite einbetten.

1. Geben Sie im Editor `/base` für eine Tabelle oder `/kanban` für ein Board ein.
2. Wählen Sie **Base (Inline)** oder **Kanban** aus dem Slash-Menü.

Die Base wird als Block in das Dokument eingefügt. Beide Befehle erstellen eine Base; **Kanban** beginnt lediglich mit einer Board-Ansicht. Verwenden Sie das Erweiterungssteuerelement in der Symbolleiste, um sie als ganze Seite zu öffnen, wenn Sie mehr Platz benötigen.

## Ansichten

Jede Base unterstützt zwei Ansichtstypen:

- **Tabelle** — ein tabellenkalkulationsähnliches Raster aus Zeilen und Spalten. Am besten geeignet zum Bearbeiten und Durchsehen von Daten.
- **Kanban** — ein Board, das nach einer Auswahl- oder Status-Eigenschaft gruppiert ist, mit einer Spalte pro Option. Am besten geeignet, um Datensätze durch Phasen zu bewegen.

Siehe [Ansichten](./views.md) für die Erstellung und Konfiguration.

### Kanban

Die Kanban-Ansicht gruppiert Ihre Zeilen nach einer Auswahl- oder Status-Eigenschaft in Spalten — eine Karte pro Zeile, eine Spalte pro Option. Ziehen Sie eine Karte von einer Spalte in eine andere, um ihren Status zu aktualisieren. Sie eignet sich am besten, um Arbeit zu verfolgen, während sie durch Phasen wandert.

<p align="center">
<img src="/docs/img/base-kanban.png" width="100%" alt="Bases Kanban view"/>
</p>

## Berechtigungen & Zugriff

Eine Base befindet sich in einem [Bereich](../spaces.md), und der Zugriff darauf folgt denselben Regeln wie bei Seiten:

- **Betrachter** — kann eine Base öffnen und ihre Zeilen lesen, aber nichts ändern.
- **Bearbeiten** und **Vollzugriff** — können Bases erstellen sowie Zeilen, Eigenschaften und Ansichten bearbeiten.

Eine Base ist eine Seite, daher können [Seitenberechtigungen](../pages/page-permissions.md) eine einzelne Base auf bestimmte Personen und Gruppen beschränken, genau wie jede andere Seite.

:::note
Die öffentliche Freigabe von Bases wird noch nicht unterstützt. Wenn eine Seite, die eine Base enthält, öffentlich freigegeben wird, erscheint die Base nicht für öffentliche Besucher. Eine Unterstützung dafür ist geplant.
:::

## Grenzwerte

Einige Werte sind begrenzt, um die Bases reaktionsschnell zu halten:

| Grenzwert | Wert |
|-------|-------|
| Länge einer Text-Eigenschaft | 1.000 Zeichen |
| Länge einer Langtext-Eigenschaft | 25.000 Zeichen |
| In einer Mehrfachauswahl-Zelle ausgewählte Optionen | 100 |
| Personen in einer Personen-Zelle | 100 |
| Dateien in einer Datei-Zelle | 50 |
| Sortierregeln pro Ansicht | 5 |

:::note
Bases sind für kleine bis mittlere Datenmengen ausgelegt. Für die beste Leistung halten Sie eine Base unter 5.000 Zeilen.
:::

## In diesem Abschnitt

<DocCardList />
