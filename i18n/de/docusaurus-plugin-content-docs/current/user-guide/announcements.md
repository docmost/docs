---
sidebar_position: 3.5
tags:
  - business
  - enterprise
---

# Ankündigungen

Ankündigungen zeigen ein Banner oben auf jeder Seite, etwa für geplante Wartungsarbeiten oder eine geänderte Richtlinie. Eigentümer und Administratoren des Arbeitsbereichs verwalten sie unter **Einstellungen** > **Ankündigungen**. Ankündigungen sind in den Editionen Business und Enterprise verfügbar.

## Eine Ankündigung erstellen {#create-an-announcement}

1. Öffnen Sie **Einstellungen** > **Ankündigungen** und klicken Sie auf **Neue Ankündigung**.
2. Geben Sie einen **Titel** ein. Er kennzeichnet die Ankündigung in der Liste und wird nicht im Banner angezeigt.
3. Wählen Sie einen **Typ** und schreiben Sie die **Nachricht**.
4. Ändern Sie bei Bedarf weitere Optionen, prüfen Sie die **Vorschau** und klicken Sie auf **Erstellen**.

| Option | Beschreibung |
|--------|--------------|
| **Typ** | **Info**, **Erfolg**, **Warnung**, **Kritisch** oder **Neutral**. Legt das Symbol und die Standardfarbe fest. |
| **Nachricht** | Eine Zeile mit bis zu 500 Zeichen. Sie können Fett, Kursiv, Unterstrichen, Links und Emojis verwenden. |
| **Farbe** | Ersetzt die Standardfarbe des Typs. |
| **Zielgruppe** | **Angemeldete Benutzer** sehen das Banner in Docmost. Bei **Alle** erscheint es zusätzlich auf der Anmeldeseite und auf öffentlichen Seiten. |
| **Benutzern erlauben, es auszublenden** | Fügt dem Banner eine Schaltfläche zum Schließen hinzu. |
| **Beginnt** und **Endet** | Lassen Sie **Beginnt** leer, damit das Banner sofort erscheint. Lassen Sie **Endet** leer, damit es bleibt, bis Sie es archivieren. |

Links in der Nachricht können auf eine Website, eine E-Mail-Adresse (`mailto:`) oder eine Seite in Ihrem Arbeitsbereich verweisen (ein Pfad, der mit `/` beginnt). Links zu anderen Websites öffnen sich in einem neuen Tab.

Eine neue oder geänderte Ankündigung erscheint beim nächsten Laden einer Seite oder innerhalb weniger Minuten.

## Nur ein Banner gleichzeitig {#one-banner-at-a-time}

Es kann immer nur eine Ankündigung angezeigt werden. Überschneidet sich eine neue Ankündigung mit einer, die eine Endzeit hat, können Sie sie nicht speichern. Ändern Sie die Zeiten oder archivieren Sie zuerst die andere Ankündigung.

Eine Ankündigung ohne Endzeit kann ersetzt werden. Docmost zeigt an, welche Ankündigung wann archiviert wird. Klicken Sie zur Bestätigung auf **Speichern und ersetzen**. Die ältere Ankündigung wird archiviert, sobald die neue beginnt.

## Ausgeblendete Banner {#dismissed-banners}

Ist **Benutzern erlauben, es auszublenden** aktiviert, können Personen das Banner schließen. Es bleibt in diesem Browser geschlossen. Wenn Sie Typ, Farbe oder Nachricht der Ankündigung ändern, erscheint es wieder.

## Ankündigungen verwalten {#manage-announcements}

Die Liste zeigt Typ, Zielgruppe, Zeitplan und Status jeder Ankündigung:

- **Aktiv**: wird gerade angezeigt.
- **Geplant**: beginnt später.
- **Archiviert**: manuell archiviert, durch eine andere Ankündigung ersetzt oder nach Ablauf ihrer Endzeit.

Standardmäßig zeigt die Liste aktive und geplante Ankündigungen. Mit dem Statusfilter sehen Sie archivierte oder alle Ankündigungen.

Im Menü (`...`) einer Ankündigung:

- **Bearbeiten** ändert die Ankündigung, auch eine archivierte.
- **Archivieren** beendet eine aktive oder geplante Ankündigung sofort.
- **Archivierung aufheben** holt eine archivierte Ankündigung zurück. Ist ihre Endzeit vorbei, bearbeiten Sie sie zuerst und legen Sie eine spätere Endzeit fest.
- **Löschen** entfernt eine archivierte Ankündigung endgültig.

Ohne kostenpflichtige Lizenz werden Ankündigungen nicht mehr angezeigt. Administratoren sehen die Liste weiterhin und können Ankündigungen archivieren oder löschen.

Änderungen an Ankündigungen werden im [Audit-Protokoll](/user-guide/audit-logs) festgehalten.
