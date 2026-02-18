---
sidebar_position: 10
---

# Diagrams

Docmost supports three diagram tools directly in the editor, allowing you to create visual diagrams without leaving your page.

To insert a diagram, type `/` in the editor and select one of the diagram options.

## Mermaid

Mermaid lets you create diagrams using a simple text-based syntax. The diagram is rendered live as you type.

To insert a Mermaid diagram:

1. Type `/` and select **Mermaid diagram**.
2. A code editor block appears where you can write Mermaid syntax.
3. The diagram renders automatically as you type.

### Supported Diagram Types

Mermaid supports a variety of diagram types, including:

- **Flowchart** - Process flows and decision trees
- **Sequence diagram** - Interaction between components over time
- **Class diagram** - Object-oriented class structures
- **State diagram** - State transitions
- **Entity Relationship (ER) diagram** - Database relationships
- **Gantt chart** - Project timelines and scheduling
- **Pie chart** - Proportional data visualization
- **Git graph** - Git branching and commit history
- **Mindmap** - Hierarchical idea mapping

### Example

```
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```

For full Mermaid syntax documentation, visit [mermaid.js.org](https://mermaid.js.org).

## Draw.io (diagrams.net)

Draw.io provides a full-featured visual diagram editor with drag-and-drop shapes, connectors, and styling options.

To insert a Draw.io diagram:

1. Type `/` and select **Draw.io (diagrams.net)**.
2. The Draw.io editor opens where you can create your diagram.
3. Click **Save** to embed the diagram in your page.
4. Double-click the diagram at any time to re-open the editor and make changes.

### Use Cases

- Network architecture diagrams
- Flowcharts and process maps
- Wireframes and mockups
- Organizational charts
- UML diagrams

## Excalidraw

Excalidraw is a whiteboard-style drawing tool that produces hand-drawn looking diagrams. It is ideal for quick sketches, brainstorming, and informal diagrams.

To insert an Excalidraw diagram:

1. Type `/` and select **Excalidraw**.
2. The Excalidraw whiteboard editor opens.
3. Use the toolbar to draw shapes, lines, text, and freehand sketches.
4. Click **Save** to embed the drawing in your page.
5. Double-click the drawing at any time to re-open the editor and make changes.

### Use Cases

- Quick sketches and brainstorming
- Architecture whiteboarding
- Informal diagrams and illustrations
- Collaborative visual thinking

## Technical Details

### Storage

All diagrams are stored as SVG files in the configured storage system. This means diagrams are resolution-independent and can be viewed without any special rendering. Users can continue to edit their diagrams at any time by double-clicking on them — the original editable data is preserved within the SVG.

### Built-in Editors

The Mermaid, Excalidraw, and Draw.io editors are all built into Docmost. No external services are required for Mermaid or Excalidraw.

For Draw.io, Docmost uses the default Draw.io editor via an iframe by default. If you are self-hosting and prefer to use your own Draw.io instance, you can configure it with the following environment variable:

```bash
DRAWIO_URL=https://your-drawio-instance.example.com
```

This is useful for air-gapped environments or organizations that require all tools to run on their own infrastructure.
