---
sidebar_position: 12
tags:
  - enterprise
---

# AI

Docmost enthält AI-gestützte Funktionen, die Ihnen beim Schreiben, Bearbeiten und Durchsuchen der Inhalte Ihres Arbeitsbereichs helfen. AI-Funktionen sind in zwei Bereichen verfügbar: im Editor (Ask AI) und in der Suche (AI Answers). Da Docmost selbst gehostet wird, können Sie wählen, ob Sie cloudbasierte AI-Modelle (OpenAI, Google Gemini) oder lokale LLMs (über Ollama) verwenden möchten — so behalten Sie die volle Kontrolle über Ihre Daten.

:::note
AI ist eine Enterprise-Funktion. Eine aktive Enterprise-Lizenz ist erforderlich. AI-Funktionen erfordern außerdem, dass ein AI-Anbieter von einem Arbeitsbereich-Administrator konfiguriert wird. Informationen zur Anbieterkonfiguration finden Sie im Leitfaden [AI Search Setup](/self-hosting/ai/ai-search).
:::

## AI-Einstellungen (Admin)

Arbeitsbereich-Administratoren können AI-Funktionen unter **Einstellungen** > **AI settings** aktivieren oder deaktivieren. Es gibt zwei unabhängige Schalter:

- **AI-powered search (AI Answers)** — Verwendet Vektor-Embeddings, um semantische Suchfunktionen über die Inhalte Ihres Arbeitsbereichs hinweg bereitzustellen. Wenn aktiviert, können Benutzer im Suchdialog Fragen in natürlicher Sprache stellen und erhalten AI-generierte Antworten basierend auf den Seiten des Arbeitsbereichs.
- **Generative AI (Ask AI)** — Aktiviert AI-gestützte Inhaltserstellung im Editor. Wenn aktiviert, können Benutzer Text direkt im Editor generieren, verbessern, übersetzen und transformieren.

Jede Funktion kann unabhängig ein- oder ausgeschaltet werden.

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
