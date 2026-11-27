---
sidebar_position: 1.7
---

# Seitenverlauf

Docmost speichert Versionen einer Seite, während sie bearbeitet wird. Im Seitenverlauf sehen Sie, was sich geändert hat, vergleichen zwei Versionen oder stellen eine frühere Version wieder her.

## Seitenverlauf öffnen {#open-page-history}

Öffnen Sie oben rechts das Seitenmenü (`...`) und klicken Sie auf **Seitenverlauf**.

Jede Version in der Liste zeigt, wann sie gespeichert wurde und wer sie bearbeitet hat. Die neueste Version steht oben. Jeder, der eine Seite ansehen kann, kann auch ihren Verlauf sehen.

## Wann Versionen gespeichert werden {#when-versions-are-saved}

Docmost speichert eine Version kurz nach einer Änderung, nicht bei jedem Tastendruck:

- in den ersten 5 Minuten nach dem Erstellen einer Seite jede Minute
- danach alle 5 Minuten, solange die Seite bearbeitet wird

Hat sich seit der letzten Version nichts geändert, wird keine neue Version gespeichert. Serveradministratoren können das 5-Minuten-Intervall mit [PAGE_HISTORY_INTERVAL](/self-hosting/environment-variables) ändern.

## Änderungen ansehen {#see-what-changed}

Wählen Sie eine Version aus, um sie anzusehen. Ist **Änderungen hervorheben** aktiviert, wird die Version mit der vorherigen verglichen. Hinzugefügter und entfernter Text wird markiert, ebenso Formatierungsänderungen, etwa fett gesetzter Text oder ein Absatz, der zur Überschrift wurde. Fahren Sie mit der Maus über eine Formatierungsänderung, um zu sehen, was sich geändert hat.

Mit den Pfeilen unten im Fenster springen Sie zur vorherigen oder nächsten Änderung.

## Zwei Versionen vergleichen {#compare-two-versions}

1. Öffnen Sie das Menü (`...`) einer Version und klicken Sie auf **Vergleichen**.
2. Wählen Sie die zweite Version aus.
3. Klicken Sie auf **Vergleichen**.

Die neuere der beiden Versionen wird geöffnet, mit den Änderungen seit der älteren Version hervorgehoben. Schließen Sie die Vergleichsleiste, um wieder einzelne Versionen anzusehen. Auf kleinen Bildschirmen ist der Vergleich nicht verfügbar.

## Eine Version wiederherstellen {#restore-a-version}

1. Wählen Sie die Version aus.
2. Klicken Sie auf **Wiederherstellen** und dann auf **Bestätigen**.

Sie können auch im Menü (`...`) einer Version auf **Wiederherstellen** klicken.

Titel und Inhalt der Seite werden für alle ersetzt, die die Seite geöffnet haben. Änderungen nach der zuletzt gespeicherten Version gehen verloren. Ältere Versionen bleiben in der Liste, sodass Sie später eine andere wiederherstellen können. Seitensymbol und Cover werden nicht wiederhergestellt.

Zum Wiederherstellen brauchen Sie Bearbeitungsrechte für die Seite.

## Was der Verlauf aufbewahrt {#what-history-keeps}

Versionen bleiben erhalten, solange die Seite existiert. Wird eine Seite endgültig gelöscht, wird auch ihr Verlauf gelöscht. Eine in einen anderen Bereich verschobene Seite behält ihren Verlauf. Duplizierte und kopierte Seiten beginnen mit einem leeren Verlauf.

Kommentare sind nicht Teil des Seitenverlaufs.
