---
sidebar_position: 4
tags:
  - business
  - enterprise
---

# Seitenvorlagen

Vorlagen bieten wiederverwendbare Inhalte für Seiten wie Besprechungsnotizen, Projektpläne und Checklisten zur Einarbeitung. Sie sind in den Editionen Business und Enterprise verfügbar.

## Eine Vorlage verwenden {#use-a-template}

Klicken Sie auf einer leeren Seite unter dem Titel auf **Vorlage** und dann neben einer Vorlage auf **Verwenden**. Ein vorhandener Titel bleibt erhalten. Ist der Titel leer, wird er aus der Vorlage übernommen.

So erstellen Sie eine neue Seite über die Seitenleiste:

1. Öffnen Sie **Vorlagen** in der Seitenleiste.
2. Klicken Sie auf eine Vorlage, um eine Vorschau zu öffnen, und dann auf **Vorlage verwenden**.
3. Wählen Sie einen Zielbereich oder eine übergeordnete Seite und klicken Sie auf **Seite erstellen**.

Sie benötigen die Berechtigung, am Zielort Seiten zu erstellen. Die neue Seite übernimmt den Titel, das Symbol und den Inhalt der Vorlage einschließlich ihrer Bilder, Diagramme und Anhänge. Sie können die Seite bearbeiten, ohne die Vorlage zu ändern.

Wenn die Vorlage [Variablen](#variables) enthält, füllen Sie diese vor dem Erstellen der Seite aus.

## Eine Vorlage erstellen {#create-a-template}

Eigentümer und Administratoren des Arbeitsbereichs können **Allow members to create templates** unter **Einstellungen > Allgemein** aktivieren. Damit können Mitglieder Vorlagen in Bereichen erstellen, denen sie angehören und in denen sie Bearbeitungsrechte haben. Nur Eigentümer und Administratoren des Arbeitsbereichs können globale Vorlagen erstellen.

1. Öffnen Sie **Vorlagen** und klicken Sie auf **Neue Vorlage**.
2. Geben Sie einen **Titel** ein und wählen Sie unter **Bereich** den Geltungsbereich.
3. Klicken Sie auf **Erstellen**.
4. Fügen Sie im Vorlageneditor Inhalte hinzu, auch Bilder, Diagramme und Anhänge. Änderungen werden automatisch gespeichert.

Der Geltungsbereich bestimmt, wer die Vorlage finden und verwenden kann:

| Geltungsbereich | Verfügbarkeit |
|----------------|---------------|
| **Global** | Alle im Arbeitsbereich |
| **Bereich** | Mitglieder des ausgewählten Bereichs |

## Platzhalter {#placeholders}

Platzhalter sind kurze Anweisungen, die zeigen, was an eine Stelle gehört, zum Beispiel „Ziel der Besprechung ergänzen“. Auf Seiten, die aus der Vorlage erstellt wurden, erscheinen sie grau, bis jemand an ihrer Stelle schreibt.

### Platzhalter hinzufügen {#add-placeholders}

Im Vorlageneditor:

1. Geben Sie `/` ein und wählen Sie **Platzhaltertext**. Mit der [fixierten Editor-Symbolleiste](../preferences.md#fixed-editor-toolbar) finden Sie den Eintrag auch unter **Weiteren Inhalt einfügen**.
2. Schreiben Sie die Anweisung und drücken Sie `Enter`. Mit `Esc` brechen Sie ab.

Um vorhandenen Text in Platzhalter umzuwandeln, markieren Sie ihn und klicken Sie in der Formatierungsleiste auf **In Platzhalter umwandeln**. Jede markierte Zeile wird zu einem eigenen Platzhalter, sodass Sie eine ganze Liste auf einmal umwandeln können.

Um einen Platzhalter zu ändern, klicken Sie darauf, bearbeiten Sie die Anweisung und drücken Sie `Enter`. Um ihn zu entfernen, löschen Sie die Anweisung und drücken Sie `Enter`.

### Platzhalter ausfüllen {#fill-in-placeholders}

Klicken Sie auf einer Seite, die aus einer Vorlage erstellt wurde, auf einen Platzhalter und beginnen Sie zu schreiben. Die Anweisung verschwindet und Ihr Text tritt an ihre Stelle, mit der Formatierung des umgebenden Textes. Einfügen funktioniert genauso. Mit `Tab` springen Sie in einer Tabelle in die nächste Zelle, direkt zu deren erstem Platzhalter.

Platzhalter sind nur beim Bearbeiten einer Seite und in der Vorschau einer Vorlage sichtbar. Im Lesemodus, auf freigegebenen Seiten und in Suchergebnissen erscheinen sie nicht. Beim Kopieren, Exportieren oder Drucken einer Seite werden sie weggelassen.

## Variablen {#variables}

Variablen sind benannte Felder, etwa ein Projektname oder eine verantwortliche Person, die beim Verwenden der Vorlage ausgefüllt werden. Jede Antwort wird auf der neuen Seite zu normalem Text. Anders als Platzhalter werden Variablen einmal vor dem Erstellen der Seite ausgefüllt und bleiben nicht auf der Seite.

### Variablen hinzufügen {#add-variables}

Im Vorlageneditor:

1. Geben Sie `/` ein und wählen Sie **Variable**. Mit der [fixierten Editor-Symbolleiste](../preferences.md#fixed-editor-toolbar) finden Sie den Eintrag auch unter **Weiteren Inhalt einfügen**.
2. Geben Sie im Feld **Variablenname** einen Namen ein, zum Beispiel „Projektname“.
3. Wählen Sie einen **Feldtyp**: **Einzeiliger Text**, **Mehrzeiliger Text** oder **Auswahl**. Geben Sie bei **Auswahl** unter **Auswahlmöglichkeiten** eine Option pro Zeile ein.
4. Klicken Sie auf **Einfügen**.

Um denselben Wert an mehreren Stellen abzufragen, fügen Sie eine weitere Variable mit demselben Namen ein. Eine Antwort füllt alle Vorkommen. Groß- und Kleinschreibung spielt bei Namen keine Rolle.

Um eine Variable zu ändern, klicken Sie darauf, nehmen Sie Ihre Änderungen vor und klicken Sie auf **Speichern**. Beim Umbenennen einer Variable werden alle Vorkommen umbenannt. Um eine Variable zu entfernen, löschen Sie sie wie normalen Text.

### Variablen ausfüllen {#fill-in-variables}

Wenn Sie eine Vorlage mit Variablen verwenden, öffnet Docmost zuerst die Vorlage mit einem Eingabefeld anstelle jeder Variable. Füllen Sie die Felder aus und fahren Sie fort. Leer gelassene Felder werden von der Seite entfernt.

Antworten übernehmen die Formatierung, die die Variable in der Vorlage hatte, und mehrzeilige Antworten behalten ihre Zeilenumbrüche. Variablen füllen nur den Seiteninhalt aus, nicht den Titel.

## Eine Vorlage bearbeiten oder löschen {#edit-or-delete-a-template}

Öffnen Sie unter **Vorlagen** das Menü (`…`) der Vorlage und wählen Sie **Bearbeiten** oder **Löschen**. Ändern Sie im Editor den Geltungsbereich über das Zahnradsymbol **Vorlageneinstellungen**.

Das Bearbeiten oder Löschen einer Vorlage ändert keine Seiten, die bereits daraus erstellt wurden.
