---
sidebar_position: 6
tags:
  - enterprise
---

# Seitenverifizierung

Die Seitenverifizierung zeigt Lesern, ob eine Seite von den richtigen Personen geprüft wurde. Prüfer bestätigen, dass eine Seite korrekt ist, und die Seite zeigt ihren Status neben dem Namen des Autors an.

:::note
Die Seitenverifizierung ist eine kommerzielle Funktion. Eine aktive Enterprise-Lizenz ist erforderlich.
:::

## Workflows

Beim Einrichten der Verifizierung wählen Sie einen von zwei Workflows:

- **Wiederkehrende Verifizierung**: Prüfer bestätigen die Seite in regelmäßigen Abständen, zum Beispiel alle 30 Tage, zu einem festen Datum oder einmalig ohne Ablaufdatum. Geeignet für Runbooks, FAQs und andere lebende Dokumentation.
- **Genehmigungsworkflow**: Die Seite durchläuft die Status **Entwurf**, **In Genehmigung**, **Genehmigt** und **Veraltet**. Geeignet für SOPs und andere gelenkte Dokumente.

## Verifizierung einrichten

Sie benötigen Bearbeitungszugriff auf die Seite.

1. Öffnen Sie die Seite und klicken Sie auf das Schild-Symbol neben dem Namen des Autors, oder öffnen Sie das Seitenmenü und wählen Sie **Verifizierung hinzufügen**.
2. Wählen Sie **Wiederkehrende Verifizierung** oder **Genehmigungsworkflow**.
3. Fügen Sie bis zu fünf Prüfer hinzu.
4. Bei der wiederkehrenden Verifizierung legen Sie fest, wann die Verifizierung abläuft, bestätigen, dass Sie die Seite geprüft haben, und klicken auf **Bestätigen**. Beim Genehmigungsworkflow klicken Sie auf **Einrichten**. Die Seite beginnt als Entwurf.

Um Prüfer oder das Ablaufdatum zu ändern oder die Verifizierung zu entfernen, klicken Sie auf den Status neben dem Namen des Autors.

## Wer verifizieren und genehmigen kann

Festgelegte Prüfer können eine Seite verifizieren und genehmigen, auch wenn sie nur den Zugriff **Kann anzeigen** haben. Bereichsadministratoren, die die Seite bearbeiten können, können sie ebenfalls verifizieren und genehmigen.

## Wiederkehrende Verifizierung

Eine verifizierte Seite zeigt einen dieser Status:

| Status | Bedeutung |
|---|---|
| **Verifiziert** | Ein Prüfer hat die Seite bestätigt, und die Verifizierung ist noch gültig. |
| **Prüfung erforderlich** | Die Verifizierung läuft innerhalb von vier Tagen ab. Prüfer erhalten eine Erinnerung. |
| **Verifizierung abgelaufen** | Das Ablaufdatum ist überschritten. Prüfer werden benachrichtigt. |
| **Nicht verifizierte Änderungen** | Die Seite wurde nach der Verifizierung geändert. |

Um die Seite erneut zu verifizieren, klicken Sie auf den Status, bestätigen, dass Sie die Seite geprüft haben, und klicken auf **Bestätigen**.

## Genehmigungsworkflow

1. Wenn der Entwurf fertig ist, öffnet ein Bearbeiter den Status und klickt auf **Zur Genehmigung einreichen**. Die Prüfer erhalten eine Benachrichtigung und eine E-Mail.
2. Ein Prüfer prüft die Seite und klickt auf **Genehmigen** oder auf **Ablehnen** mit einem optionalen Kommentar. Eine abgelehnte Seite geht zurück in den Entwurf, und die Person, die sie eingereicht hat, wird benachrichtigt.
3. Eine genehmigte Seite kann erneut zur Prüfung eingereicht oder als **Veraltet** markiert werden, wenn sie nicht mehr verwendet wird. Veraltet ist endgültig: Um die Seite wieder zu verwenden, entfernen Sie die Verifizierung und richten sie neu ein.

Eine Seite kann nur genehmigt werden, solange sie sich in Genehmigung befindet.

## Wenn sich eine verifizierte Seite ändert

Jede Änderung am Inhalt oder Titel einer verifizierten Seite beendet ihren verifizierten Status:

- Eine **genehmigte** Seite geht zurück in den **Entwurf**. Sie muss erneut eingereicht und genehmigt werden.
- Eine Seite **in Genehmigung** geht zurück in den **Entwurf**. Die Genehmigungsanfrage wird zurückgezogen.
- Eine Seite mit **wiederkehrender Verifizierung** zeigt **Nicht verifizierte Änderungen**, bis ein Prüfer sie erneut verifiziert.

Das gilt für jede Art von Änderung: Bearbeitungen im Editor, das Wiederherstellen einer früheren Version sowie Änderungen über die API, MCP oder KI. Die Prüfer der Seite erhalten eine Benachrichtigung und eine E-Mail, außer der Person, die die Änderung vorgenommen hat. Die Änderung wird im Audit-Protokoll als **Seitenverifizierung aufgehoben** erfasst.

Diese Aktionen zählen nicht als Änderung:

- Kommentare hinzufügen, auflösen oder löschen
- Aufklappbare Blöcke auf- oder zuklappen
- das Seitensymbol ändern
- Anpassungen, die der Editor beim Öffnen einer Seite selbst vornimmt

Änderungen, die vor dem Klick auf **Zur Genehmigung einreichen** oder **Genehmigen** eingegeben, aber erst einige Sekunden später gespeichert wurden, setzen den neuen Status nicht zurück.

Seiten, die veraltet sind, sich im Entwurf befinden oder deren Verifizierung bereits abgelaufen ist, behalten ihren Status, wenn sie bearbeitet werden.

## Eine verifizierte Seite bearbeiten

Seiten mit dem Status **Verifiziert**, **Prüfung erforderlich**, **Genehmigt** oder **In Genehmigung** öffnen sich für alle im Lesemodus, auch wenn Ihr Standard-Bearbeitungsmodus für Seiten **Bearbeiten** ist.

Um eine solche Seite zu bearbeiten, wählen Sie in der Seitenkopfzeile **Bearbeiten** und bestätigen Sie. Der Bearbeitungsmodus gilt nur für diese Seite, bis Sie sie verlassen. Ihr Standard-Bearbeitungsmodus und andere Seiten bleiben unverändert.

Wenn jemand die Seite genehmigt oder zur Genehmigung einreicht, während Sie sie geöffnet haben, wechselt die Seite zurück in den Lesemodus.

## Liste der verifizierten Seiten

Unter **Einstellungen > Verifizierte Seiten** sehen Sie alle Seiten mit Verifizierung, auf die Sie Zugriff haben, mit Status und Prüfern. Sie können nach Titel suchen und nach Bereich und Workflow filtern.
