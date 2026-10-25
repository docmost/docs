---
sidebar_position: 2
tags:
    - business
    - enterprise
---

# KI-Chat einrichten

Mit KI-Chat können Benutzer Gespräche über die Inhalte ihres Arbeitsbereichs führen, Seiten finden und zusammenfassen sowie Seiten erstellen oder bearbeiten. Die Funktion ist in den Editionen Business und Enterprise verfügbar.

Informationen zur täglichen Nutzung finden Sie in der [KI-Chat-Anleitung](/user-guide/ai#ai-chat).

## Anbieter konfigurieren {#configure-a-provider}

Selbst gehostete Instanzen benötigen eine gültige Lizenz und einen konfigurierten KI-Anbieter. KI-Chat verwendet dieselben Anbieterzugangsdaten wie die anderen KI-Funktionen. Unterstützt werden OpenAI, OpenAI-kompatible Anbieter, Google Gemini und Ollama. Siehe [Anbieterkonfiguration](/self-hosting/ai/ai-search#unterstützte-ai-anbieter).

Standardmäßig verwendet KI-Chat `AI_COMPLETION_MODEL`. Setzen Sie `AI_CHAT_MODEL`, wenn Sie für den Chat ein anderes Modell verwenden möchten:

```bash
AI_CHAT_MODEL=your-chat-model
```

Wählen Sie ein Modell, das Tool-Aufrufe unterstützt, damit KI-Chat Seiten suchen, lesen, erstellen und aktualisieren kann. Für Bildanhänge muss das Modell auch Bildeingaben unterstützen. Starten Sie Docmost nach Änderungen an den Umgebungsvariablen neu.

KI-Chat verwendet die semantische Suche, wenn die KI-gestützte Suche aktiviert ist und Embeddings konfiguriert sind. Folgen Sie der Anleitung [AI-Suche einrichten](/self-hosting/ai/ai-search), um Embeddings zu konfigurieren und die Seiten des Arbeitsbereichs zu indexieren. Ohne semantische Suche kann KI-Chat auf die Stichwortsuche zurückgreifen.

## KI-Chat aktivieren {#enable-ai-chat}

1. Melden Sie sich als Arbeitsbereich-Administrator an.
2. Öffnen Sie **Einstellungen** > **KI-Einstellungen**.
3. Aktivieren Sie **KI-Chat**.

Der Eintrag **KI-Chat** erscheint in der oberen Navigation. KI-Chat wird unabhängig von **Generative KI (KI fragen)** und **KI-unterstützte Suche (KI-Antworten)** aktiviert.

## Administratoreinstellungen {#admin-controls}

Administratoren mit Enterprise oder Cloud Business können unterhalb des KI-Chat-Schalters zwei zusätzliche Einstellungen konfigurieren:

| Einstellung | Wirkung |
|-------------|---------|
| **Schreibgeschützter Modus** | KI-Chat kann Inhalte suchen und lesen, aber keine Seiten erstellen oder bearbeiten. Benutzer können weiterhin Inhalte im Chat entwerfen lassen. |
| **Nur Workspace-Wissen** | Weist KI-Chat an, Antworten nur auf Seiten des Arbeitsbereichs und im Chat hochgeladene Dateien zu stützen, ohne externes Wissen hinzuzufügen. |

Beide Einstellungen sind standardmäßig deaktiviert und können unabhängig voneinander aktiviert werden. KI-Chat berücksichtigt die Seiten- und Bereichsberechtigungen jedes Benutzers, auch beim Erstellen oder Bearbeiten von Seiten.
