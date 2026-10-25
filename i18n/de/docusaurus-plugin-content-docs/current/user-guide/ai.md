---
sidebar_position: 12
tags:
  - business
  - enterprise
---

# AI

Docmost bietet KI-Funktionen zum Schreiben, Bearbeiten und Durchsuchen der Inhalte Ihres Arbeitsbereichs: **KI fragen (Ask AI)** im Editor, **KI-Antworten (AI Answers)** in der Suche und **KI-Chat** für Gespräche über Ihren Arbeitsbereich. Selbst gehostete Instanzen können OpenAI, OpenAI-kompatible Anbieter, Google Gemini oder lokale Modelle über Ollama verwenden.

:::note
KI-Funktionen sind in den Editionen Business und Enterprise verfügbar. Selbst gehostete Instanzen benötigen eine gültige Lizenz und einen konfigurierten KI-Anbieter. Siehe [AI-Suche einrichten](/self-hosting/ai/ai-search) und [KI-Chat einrichten](/self-hosting/ai/ai-chat).
:::

## AI-Einstellungen (Admin)

Arbeitsbereich-Administratoren können KI-Funktionen unter **Einstellungen** > **KI-Einstellungen** aktivieren oder deaktivieren:

- **KI-unterstützte Suche (KI-Antworten)** — Verwendet Vektor-Embeddings für die semantische Suche in den Inhalten des Arbeitsbereichs. Benutzer können im Suchdialog Fragen in natürlicher Sprache stellen und erhalten KI-generierte Antworten auf Grundlage der Seiten des Arbeitsbereichs.
- **Generative KI (KI fragen)** — Aktiviert die KI-gestützte Inhaltserstellung im Editor. Benutzer können Texte direkt im Editor erstellen, verbessern, übersetzen und umformen.
- **KI-Chat** — Ermöglicht Gespräche mit der KI, um Informationen zu finden, Folgefragen zu stellen und Seiten zu erstellen oder zu bearbeiten.

Jede Funktion kann unabhängig ein- oder ausgeschaltet werden. Der Schalter für die KI-gestützte Suche wird nur auf selbst gehosteten Instanzen angezeigt. Zusätzliche [KI-Chat-Einstellungen](/self-hosting/ai/ai-chat#admin-controls) sind mit Enterprise und Cloud Business verfügbar.

## KI-Chat {#ai-chat}

Mit KI-Chat können Sie Fragen zu Ihrem Arbeitsbereich stellen und das Gespräch mit Folgefragen fortsetzen. KI-Chat kann Seiten finden und zusammenfassen, Fragen zu ihren Inhalten beantworten und Seiten für Sie erstellen oder aktualisieren.

### Chat starten {#start-a-chat}

1. Klicken Sie in der oberen Navigation auf **KI-Chat**.
2. Geben Sie eine Frage ein, zum Beispiel „Wie läuft unser Onboarding ab?“
3. Drücken Sie die Eingabetaste oder klicken Sie auf die Schaltfläche zum Senden.
4. Stellen Sie Folgefragen im selben Chat. Mit Umschalt + Eingabetaste fügen Sie einen Zeilenumbruch ein.

Wenn Sie KI-Chat beim Anzeigen einer Seite öffnen, erscheint er in einem Seitenbereich. Die aktuelle Seite wird als Kontext für das neue Gespräch hinzugefügt. Sie können die Seite vor dem Senden aus dem Eingabefeld entfernen. Verwenden Sie die Schnellaktionen **Diese Seite zusammenfassen**, **Diese Seite übersetzen** oder **Für Erkenntnisse analysieren**. Mit **Ganze Seite öffnen** setzen Sie das Gespräch in der vollständigen Chat-Ansicht fort.

### Seiten und Dateien hinzufügen {#add-pages-and-files}

Geben Sie `@` ein und wählen Sie eine Seite aus, um sie in Ihre Frage einzubeziehen. Alternativ können Sie **+** > **Eine Seite einfügen** verwenden.

Um Fragen zu einer Datei zu stellen, wählen Sie **+** > **Dateien hinzufügen**. Sie können bis zu fünf Dateien pro Nachricht anhängen: PDF, Word (`.docx`), Text, CSV, Markdown und Bilder (`.png`, `.jpg`, `.jpeg`, `.webp`). Das konfigurierte Modell muss Bildeingaben unterstützen, um Bilder auswerten zu können.

### Seiten erstellen und bearbeiten {#create-and-edit-pages}

Bitten Sie KI-Chat, eine Seite in einem bestimmten Bereich zu erstellen oder eine vorhandene Seite zu aktualisieren. Zum Beispiel:

- „Erstelle im Bereich Personal eine Seite mit dem Titel Onboarding-Checkliste auf Grundlage dieser Notizen.“
- „Füge am Ende dieser Seite eine Zusammenfassung hinzu.“ Erwähnen Sie die Seite mit `@`, um sie anzugeben.

KI-Chat kann nur Seiten lesen, auf die Sie Zugriff haben, und nur dort Seiten erstellen oder bearbeiten, wo Sie die nötigen Berechtigungen haben. Wenn ein Administrator die Option **Schreibgeschützter Modus** aktiviert, kann KI-Chat Inhalte im Chat entwerfen, aber keine Änderungen an Seiten speichern.

### Chatverlauf {#chat-history}

Gespräche werden in Ihrem Konto gespeichert. In der vollständigen Chat-Ansicht können Sie über die Seitenleiste frühere Chats öffnen oder durchsuchen. Über das Menü eines Chats können Sie ihn umbenennen oder löschen. Klicken Sie auf **Neuer Chat**, um ein neues Gespräch zu starten. Im Seitenbereich öffnen Sie den Verlauf durch einen Klick auf den Chattitel.

## Ask AI (Editor)

Wenn Generative AI aktiviert ist, erscheint in der Editor-Symbolleiste eine Schaltfläche **Ask AI**, sobald Sie Text auswählen. Sie können auch eine benutzerdefinierte Eingabeaufforderung in das Eingabefeld **Ask AI...** eingeben, um der AI bestimmte Anweisungen zu geben.

### Verfügbare Aktionen

| Aktion | Beschreibung |
|--------|-------------|
| **Improve writing** | Den ausgewählten Text verfeinern und verbessern |
| **Fix spelling & grammar** | Rechtschreib- und Grammatikfehler korrigieren |
| **Make longer** | Den ausgewählten Text mit mehr Details erweitern |
| **Make shorter** | Den ausgewählten Text kürzen |
| **Continue writing** | Zusätzlichen Inhalt ab dem Ende des Textes generieren |
| **Explain** | Eine Erklärung des ausgewählten Textes bereitstellen |
| **Summarize** | Eine Zusammenfassung des ausgewählten Textes erstellen |

### Ton ändern

Den ausgewählten Text in einem anderen Ton umschreiben:

- Professionell
- Locker
- Freundlich

### Übersetzen

Den ausgewählten Text in eine der unterstützten Sprachen übersetzen:

Englisch, Spanisch, Deutsch, Französisch, Niederländisch, Portugiesisch, Italienisch, Japanisch, Koreanisch, Schwedisch, Chinesisch (vereinfacht).

## AI Answers (Suche)

Wenn die AI-gestützte Suche aktiviert ist, erscheint im Suchdialog ein Schalter **AI Answers**. Mit eingeschalteten AI Answers können Sie Fragen in natürlicher Sprache zu den Inhalten Ihres Arbeitsbereichs stellen und erhalten AI-generierte Antworten basierend auf Ihren Seiten.

So verwenden Sie AI Answers:

1. Öffnen Sie den Suchdialog (`Ctrl/Cmd + K`).
2. Schalten Sie **AI Answers** ein.
3. Geben Sie Ihre Frage in das Suchfeld ein.
4. Klicken Sie auf die Schaltfläche **Ask** oder drücken Sie die Eingabetaste.
5. Die AI gibt eine Antwort basierend auf den Inhalten in Ihrem Arbeitsbereich zurück.

AI Answers durchsucht nur Inhalte, auf die Sie Zugriff haben. Die Ergebnisse beschränken sich auf die Bereiche und Seiten, die für Ihr Konto sichtbar sind.
