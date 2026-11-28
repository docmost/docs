---
sidebar_position: 5
tags:
  - business
  - enterprise
---

# Verknüpfungen

Eine **Verknüpfung** verbindet Zeilen einer Base mit Zeilen einer anderen Base oder mit anderen Zeilen derselben Base. Ein Projekt kann seine Aufgaben auflisten, eine Aufgabe kann auf den zugehörigen Kunden verweisen, und eine Aufgabe kann die Aufgaben nennen, die sie blockieren.

Jede Zelle zeigt die verknüpften Zeilen mit ihrem Titel, also der ersten Eigenschaft der anderen Base. Klicken Sie auf eine verknüpfte Zeile, um sie in ihrer eigenen Base zu öffnen. Verknüpfungen erscheinen auch auf Kanban-Karten und Kalendereinträgen, wenn Sie sie unter **Karteneigenschaften** hinzufügen.

## Eine Verknüpfung hinzufügen

1. Klicken Sie in der Tabellenansicht auf das **+** am rechten Ende der Spaltenköpfe und wählen Sie **Verknüpfung**.
2. Wählen Sie unter **Verknüpfte Base** die Base aus, mit der verknüpft werden soll. Sie können jede Base wählen, die Sie öffnen können, in jedem Bereich, auch die aktuelle Base.
3. Aktivieren Sie bei Bedarf **In [andere Base] anzeigen**. Die andere Base erhält dann eine passende Eigenschaft, die dieselben Verknüpfungen von ihrer Seite zeigt. Benennen Sie sie unter **Name in [andere Base]**.
4. Deaktivieren Sie **Mehrere Zeilen erlauben**, um in dieser Eigenschaft nur eine Zeile auszuwählen.
5. Erstellen Sie die Eigenschaft.

Die verknüpfte Base lässt sich später nicht ändern. Um mit einer anderen Base zu verknüpfen, fügen Sie eine neue Verknüpfung hinzu.

## Zeilen verknüpfen

Doppelklicken Sie auf eine Verknüpfungszelle oder wählen Sie sie aus und drücken Sie die Eingabetaste, um die Auswahl zu öffnen. Bereits verknüpfte Zeilen stehen oben unter **Verknüpft**. Darunter listet **Aus [andere Base] hinzufügen** die Zeilen, die Sie noch hinzufügen können. Tippen Sie, um beide Listen nach Titel zu durchsuchen, und klicken Sie auf eine Zeile oder drücken Sie die Eingabetaste, um sie zu verknüpfen. Klicken Sie auf eine verknüpfte Zeile, um die Verknüpfung aufzuheben.

Ist **Mehrere Zeilen erlauben** deaktiviert, ersetzt eine in dieser Eigenschaft gewählte Zeile die bisherigen Verknüpfungen. Verknüpfungen, die aus der anderen Base hinzugefügt werden, bleiben erhalten, sodass die Eigenschaft trotzdem mehr als eine Zeile zeigen kann.

In der Vollansicht einer Zeile listet eine Verknüpfung ihre verknüpften Zeilen auf. Mit **Zeile verknüpfen** fügen Sie weitere hinzu, mit **Alle anzeigen** laden Sie eine lange Liste.

Das Verknüpfen oder Lösen einer Zeile gilt als Bearbeitung, daher ändern sich ihre Werte für **Zuletzt bearbeitet am** und **Zuletzt bearbeitet von**. Ist **In [andere Base] anzeigen** aktiviert, gilt das auch für die Zeilen, die verknüpft oder gelöst werden.

## Verknüpfungen in beide Richtungen

Ist **In [andere Base] anzeigen** aktiviert, erscheint eine Verknüpfung, die auf einer Seite angelegt wird, auf beiden Seiten. Sie können die Option später in den Optionen der Eigenschaft ein- oder ausschalten.

Wird die passende Eigenschaft in der anderen Base gelöscht, funktioniert die Verknüpfung von dieser Seite weiter. Wird auch die letzte verbleibende Seite gelöscht, werden die Verknüpfungen entfernt.

## Berechtigungen

- Um eine Verknüpfung hinzuzufügen, benötigen Sie Bearbeitungszugriff auf diese Base und Lesezugriff auf die verknüpfte Base. Für die Anzeige in der anderen Base ist dort zusätzlich Bearbeitungszugriff nötig.
- Um Zeilen zu verknüpfen oder zu lösen, benötigen Sie Bearbeitungszugriff auf die Base, in der Sie arbeiten, und Lesezugriff auf die andere Base. Wird die Verknüpfung auch in der anderen Base angezeigt, benötigen Sie dort ebenfalls Bearbeitungszugriff.
- Können Sie die verknüpfte Base nicht öffnen, erscheinen ihre Zeilen als **Kein Zugriff** und ihre Titel bleiben verborgen. Filter auf diese Verknüpfung behandeln für Sie jede Zeile so, als hätte sie keine Verknüpfungen.
- Liegt die verknüpfte Base im Papierkorb oder wurde sie gelöscht, zeigen die Zellen der Verknüpfung **Base gelöscht**. Wird die Base aus dem Papierkorb wiederhergestellt, sind die Verknüpfungen wieder da.

## Filtern und Exportieren

Sie können eine Verknüpfung mit **Ist eines von**, **Ist keines von**, **Ist leer** und **Ist nicht leer** filtern. Wird eine in einem Filter gewählte Zeile später gelöscht, zeigt der Filter sie als **Gelöschte Zeile**, bis Sie sie entfernen. Verknüpfungen lassen sich nicht zum Sortieren oder Gruppieren verwenden.

CSV-Exporte enthalten die Titel der verknüpften Zeilen, getrennt durch Semikolons. Eine sehr lange Liste endet mit **+N more** für die ausgelassenen Zeilen. Ein CSV-Import kann Verknüpfungen nicht füllen.

Verknüpfungen können nicht in Formeln verwendet werden, und eine Verknüpfung lässt sich nicht in einen anderen Typ umwandeln.
