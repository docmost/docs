import DocCardList from '@theme/DocCardList';

# Integrationen

Fügen Sie Links zu externen Tools als Karten oder Inline-Erwähnungen in Docmost-Seiten ein. Mitglieder verbinden ihre eigenen Konten, um Vorschauen zu sehen. Öffentliche GitHub-Repositorys lassen sich auch ohne verbundenes Konto als Vorschau anzeigen.

Das Teilen einer Docmost-Seite gewährt anderen keinen Zugriff auf die verlinkten Inhalte.

<DocCardList />

## Installieren und verbinden {#install-and-connect}

Registrieren Sie zunächst die OAuth-App und konfigurieren Sie den Docmost-Server anhand der jeweiligen Anleitung oben. Starten Sie Docmost nach Konfigurationsänderungen neu. Alle Integrationseinstellungen finden Sie in der [Referenz der Umgebungsvariablen](/self-hosting/environment-variables#integrations).

1. **Arbeitsbereich-Administrator:** Öffnen Sie **Einstellungen** > **Integrationen**, wählen Sie beim Anbieter **Installieren** und autorisieren Sie den Zugriff. Dadurch wird die Integration für den Arbeitsbereich installiert und Ihr Konto verbunden.
2. **Mitglieder:** Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie beim Anbieter **Verbinden** und melden Sie sich an.

Sie können Ihr Konto auch über die Schaltfläche **Verbinden** in einer Vorschau verbinden. Bewegen Sie den Mauszeiger über eine Erwähnung, um die Schaltfläche zu sehen. Unter **Verbindungen** erscheinen nur installierte Integrationen.

## Karten und Erwähnungen {#cards-and-mentions}

Fügen Sie eine unterstützte URL in einen Absatz ein. Wählen Sie unter **Einfügen als** die Option **Karte**, **Erwähnung** oder **URL**. Um die Darstellung später zu ändern, wählen Sie die Karte oder Erwähnung aus und verwenden Sie **Anzeigen als**. SharePoint- und OneDrive-Dateien lassen sich außerdem [einbetten](/self-hosting/integrations/microsoft-365#add-files-to-a-page).

| Leser | Darstellung |
|-------|-------------|
| Konto verbunden, mit Zugriff | Vollständige Vorschau |
| Konto nicht verbunden | Eine Beschriftung aus der URL und eine Schaltfläche zum Verbinden; öffentliche GitHub-Repositorys zeigen eine vollständige Vorschau |
| Konto verbunden, ohne Zugriff, oder anonymer Besucher | Eine Beschriftung aus der URL |

Vorschauen werden bis zu fünf Minuten zwischengespeichert, auch nach einer Berechtigungsänderung. Warten Sie fünf Minuten und laden Sie die Seite dann neu, um aktualisierte Informationen zu sehen.

## Verbindung trennen oder Integration deinstallieren {#disconnect-or-uninstall}

Um Ihr Konto zu trennen, öffnen Sie **Einstellungen** > **Konto** > **Verbindungen** und wählen Sie beim Anbieter **Trennen**. Die Verbindungen anderer Mitglieder bleiben bestehen.

Um einen Anbieter aus dem Arbeitsbereich zu entfernen, öffnet ein Administrator **Einstellungen** > **Integrationen** und wählt **Deinstallieren**. Dadurch werden die Verbindungen aller Mitglieder entfernt und keine Vorschauen mehr geladen. Vorhandene Links bleiben auf den Seiten erhalten.

## Fehlerbehebung {#troubleshooting}

| Problem | Lösung |
|---------|--------|
| Der Anbieter fehlt unter **Verbindungen** | Bitten Sie einen Arbeitsbereich-Administrator, ihn unter **Einstellungen** > **Integrationen** zu installieren. |
| Eine eingefügte URL bleibt ein normaler Link oder **Karte** ist nicht verfügbar | Prüfen Sie, ob der Anbieter installiert ist und die URL unterstützt. Fügen Sie den Link in einen leeren Absatz ein, ohne Text auszuwählen. |
| **Installieren** schlägt mit `Missing environment variable` fehl | Setzen Sie die in der Anbieteranleitung aufgeführten Zugangsdaten und starten Sie Docmost neu. |
| **OAuth-Verbindung fehlgeschlagen. Bitte versuche es erneut.** | Starten Sie **Installieren** oder **Verbinden** erneut im selben Browser. Prüfen Sie bei wiederholten Fehlern Client-ID, Client-Secret, erforderliche Berechtigungen und Callback-URL anhand der Anbieteranleitung und Ihres `APP_URL`-Werts. Suchen Sie im Serverprotokoll nach `OAuth callback`, `OAuth completion` oder `Token exchange failed`, um den Fehler des Anbieters zu sehen. |
| In einer Vorschau fehlen Informationen | Öffnen Sie den Link mit dem verbundenen Konto und prüfen Sie den Zugriff. Warten Sie nach der Korrektur fünf Minuten, bevor Sie die Seite neu laden. Suchen Sie bei anderen Vorschaufehlern im Serverprotokoll nach `Unfurl failed`. |
| **Verbindung abgelaufen** | Wählen Sie unter **Verbindungen** die Option **Erneut verbinden**. |
