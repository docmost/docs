---
sidebar_position: 1
tags:
  - enterprise
---

# Eigenschaften

Eigenschaften sind die typisierten Felder einer Base. Jede Zeile teilt denselben Satz von Eigenschaften, und in der Tabellenansicht ist jede Eigenschaft eine Spalte. Der Typ einer Eigenschaft entscheidet darüber, was ihre Zellen enthalten können, wie sie bearbeitet werden und welche Filter auf sie angewendet werden.

## Eigenschaftstypen

| Typ | Beschreibung |
|------|-------------|
| **Text** | Eine kurze einzelne Textzeile. Bis zu 1.000 Zeichen. |
| **Langtext** | Mehrzeiliger Text für längere Notizen. Bis zu 25.000 Zeichen. |
| **Zahl** | Ein numerischer Wert mit einem konfigurierbaren Anzeigeformat. |
| **Auswahl** | Eine einzelne Wahl aus einer Liste von Optionen, jede mit einer Farbe. |
| **Status** | Eine einzelne Wahl, die für Workflow-Phasen gedacht ist, gruppiert in die Kategorien Zu erledigen, In Bearbeitung und Abgeschlossen. Wird mit Standardoptionen vorausgefüllt geliefert. |
| **Mehrfachauswahl** | Mehrere Optionen aus einer Liste von Optionen. |
| **Datum** | Ein Datum, optional mit einer Uhrzeit. |
| **Person** | Ein oder mehrere Mitglieder Ihres Arbeitsbereichs. |
| **Datei** | Eine oder mehrere hochgeladene Dateien. |
| **Formel** | Ein schreibgeschützter Wert, der aus anderen Eigenschaften berechnet wird. Siehe [Formeln](./formulas.md). |
| **Seite** | Ein Link zu einer Seite in Ihrem Arbeitsbereich. |
| **Kontrollkästchen** | Ein Umschalter für wahr oder falsch. |
| **URL** | Eine Webadresse. |
| **E-Mail** | Eine E-Mail-Adresse. |
| **Erstellt am** | Datum und Uhrzeit, zu der die Zeile erstellt wurde. Wird automatisch ausgefüllt. |
| **Zuletzt bearbeitet am** | Datum und Uhrzeit, zu der die Zeile zuletzt geändert wurde. Wird automatisch ausgefüllt. |
| **Zuletzt bearbeitet von** | Das Mitglied, das die Zeile zuletzt geändert hat. Wird automatisch ausgefüllt. |

Die letzten drei Typen (**Erstellt am**, **Zuletzt bearbeitet am**, **Zuletzt bearbeitet von**) werden von Docmost gepflegt und sind schreibgeschützt. **Formel**-Werte sind ebenfalls schreibgeschützt, da sie berechnet werden.

## Eine Eigenschaft hinzufügen

1. Klicken Sie in der Tabellenansicht auf das **+** am rechten Ende der Spaltenüberschriften.
2. Wählen Sie einen Typ aus der Liste.
3. Geben Sie der Eigenschaft einen Namen. Wenn Sie ihn leer lassen, wird der Typname verwendet.
4. Legen Sie etwaige Optionen für den Typ fest (siehe unten).
5. Klicken Sie, um sie zu erstellen.

## Einen Eigenschaftstyp konfigurieren

Einige Typen haben Optionen, die Sie beim Erstellen der Eigenschaft oder später über ihr Menü festlegen können.

### Zahl

Wählen Sie, wie der Wert angezeigt wird:

- **Einfach** — die reine Zahl.
- **Trennzeichen** — mit Tausendertrennzeichen gruppiert.
- **Währung** — als Geldbetrag formatiert, mit einem Währungscode und -symbol.
- **Prozent** — als Prozentsatz angezeigt.
- **Fortschritt** — als Fortschrittsbalken angezeigt.

Sie können auch die Anzahl der Dezimalstellen (Genauigkeit) festlegen.

### Auswahl, Status und Mehrfachauswahl

Diese Typen enthalten eine Liste von Optionen. Für jede Option können Sie einen Namen und eine Farbe festlegen. Sie können neue Optionen während der Bearbeitung einer Zelle hinzufügen, nicht nur beim Konfigurieren der Eigenschaft. Status-Optionen sind in die Kategorien Zu erledigen, In Bearbeitung und Abgeschlossen gegliedert.

### Datum

- Wählen Sie ein Datumsformat.
- Wählen Sie, ob eine Uhrzeit enthalten sein soll.
- Wenn die Uhrzeit enthalten ist, zeigen Sie sie im 12-Stunden- oder 24-Stunden-Format an.

### Person

- Schalten Sie um, ob eine Zelle mehr als eine Person enthalten kann.

### Text, Langtext, URL, E-Mail, Kontrollkästchen

Sie können einen Standardwert festlegen, der auf neue Zeilen angewendet wird. URL- und E-Mail-Werte werden auf das korrekte Format überprüft.

## Eine Eigenschaft bearbeiten

Klicken Sie auf eine Spaltenüberschrift, um ihr Menü zu öffnen. Von dort aus können Sie:

- Die Eigenschaft **umbenennen**.
- **Typ ändern** — sie in einen anderen Typ umwandeln. Einige Umwandlungen führen zu Datenverlust (zum Beispiel die Änderung von Datum zu Text), und Docmost warnt Sie, bevor Sie fortfahren.
- Die Optionen der Eigenschaft bearbeiten.
- Die Eigenschaft **löschen**.

Eine Typänderung bei einer Base mit vielen Zeilen kann im Hintergrund ablaufen. Währenddessen zeigt die Spalte eine Umwandlungsanzeige und aktualisiert sich, wenn sie abgeschlossen ist.

## Spalten neu anordnen und Größe ändern

- Neu anordnen — ziehen Sie eine Spaltenüberschrift nach links oder rechts.
- Größe ändern — ziehen Sie den Griff am rechten Rand einer Spaltenüberschrift.

Spaltenreihenfolge und -breite werden pro Ansicht gespeichert, sodass verschiedene Ansichten derselben Base ihre Spalten unterschiedlich anordnen können.
