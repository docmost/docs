---
sidebar_position: 9
---

# Importieren & Exportieren

Mit Docmost können Sie Inhalte aus anderen Plattformen importieren und Ihre Seiten zur Sicherung oder Migration exportieren.

## Seiten importieren

Sie können Seiten aus einer Vielzahl von Quellen in jeden Bereich importieren. So öffnen Sie den Importdialog:

1. Navigieren Sie zu dem Bereich, in den Sie Seiten importieren möchten.
2. Klicken Sie in der Seitenleiste auf das Menü **...** neben der Überschrift **Pages**.
3. Wählen Sie **Import pages**.

### Unterstützte Importformate

Der Importdialog unterstützt die folgenden Quellformate:

| Format | Beschreibung |
|--------|-------------|
| **Markdown** | `.md`-Dateien direkt in den Bereich importieren |
| **HTML** | `.html`-Dateien direkt in den Bereich importieren |
| **Word (DOCX)** | Microsoft Word `.docx`-Dokumente importieren |
| **Notion** | Einen Notion-Export (ZIP-Datei) importieren |
| **Confluence** | Einen Confluence-Export importieren |

### Aus Markdown oder HTML importieren

1. Klicken Sie im Importdialog auf **Markdown** oder **HTML**.
2. Wählen Sie die Datei(en) von Ihrem Gerät aus.
3. Die Seiten werden mit den importierten Inhalten im Bereich erstellt.

### Ein ZIP-Archiv importieren

Sie können auch eine ZIP-Datei hochladen, die Markdown- und HTML-Dateien enthält. Dies ist nützlich für Massenimporte.

1. Scrollen Sie im Importdialog zum Abschnitt **Import zip file**.
2. Klicken Sie auf **Upload file**.
3. Wählen Sie ein ZIP-Archiv von Ihrem Gerät aus.
4. Docmost extrahiert und importiert alle Seiten aus dem Archiv.

### Aus Word (DOCX) importieren

1. Klicken Sie im Importdialog auf **Word (DOCX)**.
2. Wählen Sie die `.docx`-Datei(en) von Ihrem Gerät aus.
3. Der Dokumentinhalt wird konvertiert und als Seiten importiert.

### Von Notion migrieren

Wenn Sie von Notion zu Docmost wechseln, können Sie Ihre Notion-Inhalte direkt importieren:

1. Exportieren Sie in Notion Ihren Arbeitsbereich oder Ihre Seiten. Notion exportiert eine ZIP-Datei, die Markdown- oder HTML-Dateien enthält.
2. Öffnen Sie in Docmost den Importdialog im Zielbereich.
3. Klicken Sie auf **Notion**.
4. Laden Sie die aus Notion exportierte ZIP-Datei hoch.
5. Docmost verarbeitet den Import und erstellt Seiten unter Beibehaltung der Seitenstruktur.

### Von Confluence migrieren

Teams, die von Confluence wechseln, können ihre Inhalte in Docmost importieren. Dazu müssen Sie zunächst Ihren Confluence-Bereich als HTML exportieren und ihn anschließend in Docmost importieren.

#### Aus Confluence exportieren

1. Navigieren Sie in Confluence zu dem Bereich, den Sie exportieren möchten.
2. Klicken Sie in der Seitenleiste neben dem Namen des Bereichs auf **More actions (...)** und wählen Sie dann **Space settings**.
3. Wählen Sie im Abschnitt **General** die Option **Export space**.
4. Wählen Sie **HTML** als Exportformat.
5. Wählen Sie, ob Sie den gesamten Bereich oder bestimmte Seiten exportieren möchten, und klicken Sie dann auf **Next**.
6. Klicken Sie auf **Export space**, um den Exportvorgang zu starten.
7. Sobald der Export abgeschlossen ist, klicken Sie auf den Download-Link, um die ZIP-Datei auf Ihrem Gerät zu speichern.

#### In Docmost importieren

1. Öffnen Sie in Docmost den Importdialog im Zielbereich.
2. Klicken Sie auf **Confluence**.
3. Laden Sie die aus Confluence exportierte ZIP-Datei hoch.
4. Docmost verarbeitet den Import und erstellt Seiten mit Ihren Confluence-Inhalten.

Die folgenden Inhalte bleiben während des Imports erhalten:

- Formatierung (Callouts, Toggle-Blöcke, Farben)
- Seitenbaum-Hierarchie
- Interne Seitenlinks
- Bilder und Anhänge
- Draw.io-Diagramme

## Seiten exportieren

### Eine einzelne Seite exportieren

Sie können einzelne Seiten als Markdown- oder HTML-Dateien exportieren.

1. Öffnen Sie die Seite, die Sie exportieren möchten.
2. Klicken Sie oben rechts auf das **Seitenmenü (...)**.
3. Klicken Sie auf **Export**.
4. Im Exportdialog:
   - Wählen Sie Ihr Format: **Markdown** oder **HTML**.
   - Aktivieren Sie **Unterseiten einschließen**, um alle untergeordneten Seiten zusammen mit der Seite zu exportieren.
   - Aktivieren Sie **Anhänge einschließen**, um angehängte Dateien in den Export aufzunehmen.
5. Klicken Sie auf **Export**, um den Download zu starten.

Beim Export mit Unterseiten oder Anhängen wird der Export als ZIP-Datei mit einer Ordnerstruktur verpackt, die der Seitenhierarchie entspricht.

### Einen Bereich exportieren

Sie können alle Seiten eines Bereichs auf einmal exportieren. Dies ist nützlich für vollständige Sicherungen oder die Migration von Inhalten in ein anderes Tool.

1. Navigieren Sie zu dem Bereich, den Sie exportieren möchten.
2. Klicken Sie in der Seitenleiste auf das Menü **...** neben der Überschrift **Seiten**.
3. Wählen Sie **Bereich exportieren**.
4. Im Exportdialog:
   - Wählen Sie Ihr Format: **Markdown** oder **HTML**.
   - Aktivieren Sie **Anhänge einschließen**, wenn Sie angehängte Dateien einschließen möchten.
5. Klicken Sie auf **Export**.
6. Eine ZIP-Datei, die alle Seiten (und optional Anhänge) enthält, wird auf Ihr Gerät heruntergeladen.

Sie können den Bereichsexport auch über **Bereichseinstellungen > Einstellungen > Exportieren** aufrufen.

### Als PDF drucken

So erzeugen Sie eine PDF-Version einer Seite:

1. Öffnen Sie die Seite.
2. Klicken Sie oben rechts auf das **Seitenmenü (...)**.
3. Klicken Sie auf **Print PDF**.
4. Verwenden Sie den Druckdialog Ihres Browsers, um als PDF zu speichern.
