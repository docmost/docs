---
sidebar_position: 10
---

# Diagramme

Docmost unterstützt drei Diagramm-Tools direkt im Editor, sodass Sie visuelle Diagramme erstellen können, ohne Ihre Seite zu verlassen.

Um ein Diagramm einzufügen, geben Sie `/` im Editor ein und wählen Sie eine der Diagrammoptionen aus.

## Mermaid

Mit Mermaid können Sie Diagramme mithilfe einer einfachen textbasierten Syntax erstellen. Das Diagramm wird live gerendert, während Sie tippen.

So fügen Sie ein Mermaid-Diagramm ein:

1. Geben Sie `/` ein und wählen Sie **Mermaid diagram**.
2. Es erscheint ein Code-Editor-Block, in dem Sie Mermaid-Syntax schreiben können.
3. Das Diagramm wird automatisch gerendert, während Sie tippen.

### Unterstützte Diagrammtypen

Mermaid unterstützt eine Vielzahl von Diagrammtypen, darunter:

- **Flussdiagramm** – Prozessabläufe und Entscheidungsbäume
- **Sequenzdiagramm** – Interaktion zwischen Komponenten über die Zeit
- **Klassendiagramm** – Objektorientierte Klassenstrukturen
- **Zustandsdiagramm** – Zustandsübergänge
- **Entity-Relationship-(ER-)Diagramm** – Datenbankbeziehungen
- **Gantt-Diagramm** – Projektzeitpläne und Terminplanung
- **Kreisdiagramm** – Visualisierung proportionaler Daten
- **Git-Graph** – Git-Branching und Commit-Verlauf
- **Mindmap** – Hierarchische Ideenzuordnung

### Beispiel

```
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```

Die vollständige Dokumentation zur Mermaid-Syntax finden Sie unter [mermaid.js.org](https://mermaid.js.org).

## Draw.io (diagrams.net)

Draw.io bietet einen voll ausgestatteten visuellen Diagrammeditor mit Drag-and-drop-Formen, Verbindungen und Stiloptionen.

So fügen Sie ein Draw.io-Diagramm ein:

1. Geben Sie `/` ein und wählen Sie **Draw.io (diagrams.net)**.
2. Der Draw.io-Editor öffnet sich, in dem Sie Ihr Diagramm erstellen können.
3. Klicken Sie auf **Save**, um das Diagramm in Ihre Seite einzubetten.
4. Doppelklicken Sie jederzeit auf das Diagramm, um den Editor erneut zu öffnen und Änderungen vorzunehmen.

### Anwendungsfälle

- Netzwerkarchitekturdiagramme
- Flussdiagramme und Prozesslandkarten
- Wireframes und Mockups
- Organigramme
- UML-Diagramme

## Excalidraw

Excalidraw ist ein Zeichentool im Whiteboard-Stil, das handgezeichnet aussehende Diagramme erzeugt. Es eignet sich ideal für schnelle Skizzen, Brainstorming und informelle Diagramme.

So fügen Sie ein Excalidraw-Diagramm ein:

1. Geben Sie `/` ein und wählen Sie **Excalidraw**.
2. Der Excalidraw-Whiteboard-Editor öffnet sich.
3. Verwenden Sie die Symbolleiste, um Formen, Linien, Text und Freihandskizzen zu zeichnen.
4. Klicken Sie auf **Save**, um die Zeichnung in Ihre Seite einzubetten.
5. Doppelklicken Sie jederzeit auf die Zeichnung, um den Editor erneut zu öffnen und Änderungen vorzunehmen.

### Anwendungsfälle

- Schnelle Skizzen und Brainstorming
- Architektur-Whiteboarding
- Informelle Diagramme und Illustrationen
- Kollaboratives visuelles Denken

## Technische Details

### Speicherung

Alle Diagramme werden als SVG-Dateien im konfigurierten Speichersystem gespeichert. Das bedeutet, dass Diagramme auflösungsunabhängig sind und ohne spezielles Rendering angezeigt werden können. Benutzer können ihre Diagramme jederzeit weiter bearbeiten, indem sie darauf doppelklicken – die ursprünglichen bearbeitbaren Daten bleiben innerhalb der SVG erhalten.

### Integrierte Editoren

Die Editoren für Mermaid, Excalidraw und Draw.io sind alle in Docmost integriert. Für Mermaid oder Excalidraw sind keine externen Dienste erforderlich.

Für Draw.io verwendet Docmost standardmäßig den Standard-Draw.io-Editor über ein iframe. Wenn Sie Self-Hosting betreiben und lieber Ihre eigene Draw.io-Instanz verwenden möchten, können Sie diese mit der folgenden Umgebungsvariable konfigurieren:

```bash
DRAWIO_URL=https://your-drawio-instance.example.com
```

Dies ist nützlich für Air-Gapped-Umgebungen oder Organisationen, die verlangen, dass alle Tools auf ihrer eigenen Infrastruktur laufen.
