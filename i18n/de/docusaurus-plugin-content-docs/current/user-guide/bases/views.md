---
sidebar_position: 2
tags:
  - enterprise
---

# Ansichten

Eine Ansicht ist eine gespeicherte Art, die Zeilen in einer Base zu betrachten. Jede Ansicht merkt sich ihre eigenen Filter, Sortierungen, sichtbaren Eigenschaften, das Spaltenlayout und die Gruppierung, sodass Sie eine Tabelle zum Bearbeiten und ein Board zum Verfolgen derselben Datensätze behalten können. Ansichten erscheinen als Registerkarten über der Base. Klicken Sie auf eine Registerkarte, um zu ihr zu wechseln.

Eine Base unterstützt drei Ansichtstypen: **Tabelle**, **Kanban** und **Kalender**.

## Tabellenansicht

Die Tabellenansicht ist ein Raster aus Zeilen und Spalten. Sie ist die Standardansicht, wenn Sie eine Base erstellen.

- Eine Zeile hinzufügen — verwenden Sie das Steuerelement zum Hinzufügen von Zeilen am unteren Rand des Rasters. Die erste bearbeitbare Zelle wird fokussiert, sodass Sie mit der Eingabe beginnen können.
- Eine Zelle bearbeiten — klicken Sie hinein. Jeder Eigenschaftstyp hat seinen eigenen Editor: ein Textfeld, eine Zahleneingabe, ein Dropdown für Auswahl und Status, eine Auswahl für Person und Seite, eine Datumsauswahl, einen Kontrollkästchen-Umschalter und so weiter.
- Zeilen neu anordnen — ziehen Sie eine Zeile an ihrer Zeilennummer auf der linken Seite.
- Zeilen auswählen — verwenden Sie das Kontrollkästchen an der Zeilennummer. Wählen Sie mehrere aus, um gemeinsam mit ihnen zu arbeiten.
- Zeilen löschen — wählen Sie eine oder mehrere Zeilen aus und löschen Sie sie über die Auswahlleiste.
- Eine Zeile erweitern — öffnen Sie eine Zeile als Datensatz, um jede Eigenschaft auf einmal zu sehen und zu bearbeiten (siehe unten).
- Spalten ausblenden oder anzeigen — verwenden Sie das Eigenschaften-Steuerelement in der Symbolleiste, um auszuwählen, welche Eigenschaften sichtbar sind.
- Spalten neu anordnen und Größe ändern — ziehen Sie Spaltenüberschriften und ihre Größengriffe. Siehe [Eigenschaften](./properties.md).

## Kanban-Ansicht

Die Kanban-Ansicht ist ein Board aus Karten, die in Spalten gruppiert sind.

- Das Board wird nach einer **Auswahl**- oder **Status**-Eigenschaft gruppiert. Jede Option wird zu einer Spalte, und Zeilen ohne Wert werden in einer Spalte **Kein Wert** gesammelt.
- Verschieben Sie eine Karte zwischen Spalten, um ihren Wert für die Gruppierungseigenschaft zu ändern.
- Ordnen Sie Karten innerhalb einer Spalte neu an, indem Sie sie ziehen.
- Ordnen Sie Spalten neu an oder blenden Sie sie aus, um sich auf die wichtigen Phasen zu konzentrieren.
- **Karteneigenschaften** — wählen Sie aus, welche Eigenschaften zusätzlich zum Titel auf jeder Karte erscheinen.

Um ein Board zu gruppieren, benötigt die Base mindestens eine Auswahl- oder Status-Eigenschaft.

## Kalenderansicht {#calendar-view}

Die Kalenderansicht zeigt Zeilen in einem Kalender, angeordnet nach einer Datumseigenschaft. Zeilen ohne Datum erscheinen nicht im Kalender.

Wählen Sie in den Kalendereinstellungen (Zahnradsymbol) unter **Kalender nach** die Eigenschaft aus. Das kann eine Eigenschaft vom Typ **Datum**, **Erstellt am** oder **Zuletzt bearbeitet am** sein. Hat die Base keine, klicken Sie auf **Datumseigenschaft erstellen**. Ein Datum mit Enddatum erstreckt sich über mehrere Tage, und ein Datum mit Uhrzeit erscheint in der Wochenansicht zu dieser Uhrzeit.

- Wechseln Sie zwischen **Monat** und **Woche** und bewegen Sie sich mit **Heute** und den Pfeilen durch die Zeit. Auf kleinen Bildschirmen ist nur die Monatsansicht verfügbar.
- Jede Zeile zeigt ihren Titel. Weitere Eigenschaften wählen Sie unter **Karteneigenschaften**. In der Monatsansicht erscheinen sie, wenn Sie mit der Maus über eine Zeile fahren.
- Hat ein Tag mehr Zeilen, als Platz ist, klicken Sie auf **+N weitere**, um den Rest zu sehen.
- Um Samstage und Sonntage auszublenden, schalten Sie in den Kalendereinstellungen **Wochenenden anzeigen** aus.

Wenn Sie die Base bearbeiten können:

- Doppelklicken Sie auf einen Tag oder in der Wochenansicht auf ein Zeitfenster, um eine Zeile mit diesem Datum hinzuzufügen. Ziehen Sie über mehrere Tage oder Zeitfenster, um eine Zeile mit einem Zeitraum hinzuzufügen.
- Ziehen Sie eine Zeile auf einen anderen Tag, um ihr Datum zu ändern. In der Wochenansicht ändert das Ziehen auch die Uhrzeit.
- Ziehen Sie am Rand einer Zeile, um ihren Beginn oder ihr Ende zu ändern.
- Änderungen an **Monat** oder **Woche**, **Kalender nach**, **Wochenenden anzeigen** und **Karteneigenschaften** werden für alle gespeichert.

Ziehen funktioniert nur mit einer Eigenschaft vom Typ **Datum**, da **Erstellt am** und **Zuletzt bearbeitet am** automatisch ausgefüllt werden. Klicken Sie auf eine Zeile, um sie zu öffnen.

Sie können einen Kalender wie jede andere Ansicht filtern. Zeilen sind nach Datum sortiert. Uhrzeiten erscheinen in Ihrer eigenen Zeitzone, und Daten ohne Uhrzeit stehen für alle am selben Tag.

## Ansichten erstellen und verwalten

1. Klicken Sie auf **+** neben den Ansichts-Registerkarten.
2. Wählen Sie **Tabelle**, **Kanban** oder **Kalender**.
3. Wählen Sie für eine Kanban-Ansicht die Auswahl- oder Status-Eigenschaft, nach der gruppiert werden soll. Wenn die Base genau eine solche Eigenschaft hat, wird sie automatisch verwendet.
4. Wählen Sie für eine Kalenderansicht die Datumseigenschaft. Wenn die Base genau eine Eigenschaft vom Typ **Datum** hat, wird sie automatisch verwendet.

Um eine Ansicht umzubenennen, neu anzuordnen oder zu löschen, verwenden Sie ihre Registerkarte.

## Der Zeilendatensatz

Beim Erweitern einer Zeile wird diese als Datensatz in einem Dialog geöffnet, der jede Eigenschaft für diese Zeile auflistet. Aus dem Datensatz heraus können Sie:

- Jede Eigenschaft bearbeiten.
- Eine neue Eigenschaft zur Base hinzufügen.
- Zur vorherigen oder nächsten Zeile wechseln.
- Die Zeile löschen.

## Export nach CSV

Verwenden Sie das Export-Steuerelement in der Symbolleiste, um die Base als CSV-Datei herunterzuladen. Der Export umfasst die Zeilen und die sichtbaren Spalten.

## Eine Inline-Base im Vollbild öffnen

Eine in ein Dokument eingebettete Base verfügt über ein Erweiterungssteuerelement in ihrer Symbolleiste, das sie als ganze Seite öffnet und Ihnen das vollständige Raster zum Arbeiten bietet. Schließen Sie es, um zum Dokument zurückzukehren.
