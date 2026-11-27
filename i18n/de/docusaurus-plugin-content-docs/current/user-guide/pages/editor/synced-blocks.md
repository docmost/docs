---
sidebar_position: 1
slug: /user-guide/editor/synced-blocks
---

# Synchronisierte Blöcke

Ein synchronisierter Block zeigt denselben Inhalt auf mehreren Seiten. Sie erstellen das Original auf einer Seite und fügen Kopien davon auf anderen Seiten ein. Wenn Sie das Original bearbeiten, zeigen die Kopien die Änderung.

## Einen synchronisierten Block erstellen {#create-a-synced-block}

Geben Sie in einer neuen Zeile `/synchron` ein, wählen Sie **Synchronisierter Block** und fügen Sie darin Inhalt hinzu.

Um vorhandenen Inhalt in einen synchronisierten Block umzuwandeln, markieren Sie ihn und wählen Sie in der Formatierungsleiste **In verwandeln > Synchronisierter Block**.

Die meisten Blöcke können in einen synchronisierten Block eingefügt werden. Einige nicht, etwa ein weiterer synchronisierter Block, Registerkarten und Bases.

## Auf einer anderen Seite einfügen {#add-it-to-another-page}

1. Fahren Sie im Bearbeitungsmodus mit der Maus über den synchronisierten Block und klicken Sie auf **Synchronisierten Block kopieren** (das Kopiersymbol über dem Block).
2. Öffnen Sie die Seite, auf der er erscheinen soll, und fügen Sie ihn ein.

Sie können ihn auf beliebig vielen Seiten einfügen, auch in anderen Bereichen.

Wenn Sie stattdessen den ganzen Block mit `Ctrl/Cmd + C` kopieren, wird der eingefügte Block ein neuer, eigenständiger synchronisierter Block.

## Einen synchronisierten Block bearbeiten {#edit-a-synced-block}

Sie können einen synchronisierten Block nur auf seiner Originalseite bearbeiten. Kopien sind schreibgeschützt. Um zum Original zu gelangen, fahren Sie mit der Maus über eine Kopie und klicken Sie auf **Quelle bearbeiten**.

Änderungen erscheinen auf anderen Seiten, wenn diese das nächste Mal geöffnet werden. Auf einer bereits geöffneten Seite klicken Sie bei der Kopie auf **Aktualisieren**, um die neueste Version zu laden.

## Sehen, wo er verwendet wird {#see-where-its-used}

Fahren Sie mit der Maus über einen synchronisierten Block und klicken Sie auf die Schaltfläche darüber. Beim Original lautet sie **Original bearbeiten**, bei einer Kopie **Mit N anderen Seiten synchronisiert**.

Die Liste zeigt jede Seite mit dem Block. Das Original ist mit **ORIGINAL** markiert, die Seite, auf der Sie sich befinden, mit **DIESE SEITE**. Seiten, auf die Sie keinen Zugriff haben, werden nicht angezeigt.

## Synchronisierung aufheben oder entfernen {#unsync-or-remove}

Fahren Sie mit der Maus über den Block und öffnen Sie das Menü `...`.

Beim Original:

- **Synchronisierung aufheben** behält den Inhalt als normale Blöcke auf dieser Seite.
- **Synchronisierten Block löschen** löscht den Block mit seinem Inhalt.

In beiden Fällen zeigen Kopien auf anderen Seiten **Der originale synchronisierte Block existiert nicht mehr**. Entfernen Sie sie mit **Von Seite entfernen**.

Bei einer Kopie:

- **Synchronisierung aufheben** ersetzt die Kopie durch normalen Inhalt, den Sie auf dieser Seite bearbeiten können. Das Original und andere Kopien bleiben unverändert.
- **Von Seite entfernen** entfernt die Kopie nur von dieser Seite.

## Wer einen synchronisierten Block sehen kann {#who-can-see-a-synced-block}

Eine Kopie zeigt ihren Inhalt nur Personen, die die Originalseite ansehen können. Alle anderen sehen **Sie haben keinen Zugriff auf diesen synchronisierten Block**. Dieselbe Meldung erscheint, wenn die Originalseite gelöscht wurde.

Auf einer [öffentlich freigegebenen Seite](/user-guide/pages#freigabe) zeigt eine Kopie ihren Inhalt nur, wenn die Originalseite ebenfalls freigegeben ist.
