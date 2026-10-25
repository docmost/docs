---
sidebar_position: 1
---

# GitHub

Zeigen Sie Vorschauen von Repositorys, Pull Requests, Issues, Commits, Dateien und Repository-Listen an.

## Einrichtung {#set-up}

1. [Registrieren Sie eine GitHub-OAuth-App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) auf GitHub.com oder Ihrer GitHub-Enterprise-Server-Instanz.
2. Tragen Sie Ihre Docmost-Adresse als Homepage-URL und die folgende Adresse als Autorisierungs-Callback-URL ein:

   ```text
   https://docmost.example.com/api/integrations/oauth/github/callback
   ```

   Ersetzen Sie `https://docmost.example.com` durch Ihre Docmost-URL (`APP_URL`).

3. Kopieren Sie die Client-ID und erstellen Sie ein Client-Secret. Setzen Sie diese Werte auf dem Docmost-Server:

   ```shell
   INTEGRATION_GITHUB_CLIENT_ID=<client-id>
   INTEGRATION_GITHUB_CLIENT_SECRET=<client-secret>
   # Nur für GitHub Enterprise Server:
   INTEGRATION_GITHUB_URL=https://github.example.com
   ```

   Mit `INTEGRATION_GITHUB_URL` wird GitHub.com durch Ihre Enterprise-Server-Instanz ersetzt.

4. Setzen Sie `APP_URL` auf Ihre Docmost-Basisadresse ohne Pfad und starten Sie Docmost neu.
5. [Installieren Sie GitHub in Ihrem Arbeitsbereich](/self-hosting/integrations#install-and-connect).

Docmost fordert die Berechtigungen `repo` und `read:user` an. Der GitHub-[`repo`-Scope](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps) umfasst Schreibzugriff, obwohl Docmost Daten für Vorschauen nur liest.

Docmost verwendet die Zugangsdaten der App, um öffentliche Repositorys ohne verbundenes Mitgliedskonto als Vorschau anzuzeigen. Diese Zugangsdaten können nur öffentliche Daten lesen. Bei GitHub Enterprise Server im privaten Modus ist für jede Vorschau ein verbundenes Konto erforderlich.

## Konto verbinden {#connect-your-account}

Öffnen Sie **Einstellungen** > **Konto** > **Verbindungen**, wählen Sie bei **GitHub** die Option **Verbinden** und melden Sie sich an.

Wenn in der Vorschau eines privaten Repositorys Informationen fehlen, prüfen Sie, ob Ihr GitHub-Konto Zugriff hat und Ihre Organisation die OAuth-App zulässt.

## Unterstützte Links {#supported-links}

| Link | Beispiel |
|------|----------|
| Repository | `https://github.com/example-org/docs` |
| Pull Request | `https://github.com/example-org/docs/pull/42` |
| Issue | `https://github.com/example-org/docs/issues/12` |
| Commit | `https://github.com/example-org/docs/commit/a1b2c3d` |
| Commit in einem Pull Request | `https://github.com/example-org/docs/pull/42/commits/a1b2c3d` |
| Datei, optional mit Zeilenbereich | `https://github.com/example-org/docs/blob/main/README.md#L10-L20` |
| Liste der Pull Requests, Issues oder Releases | `https://github.com/example-org/docs/pulls`, `https://github.com/example-org/docs/issues`, `https://github.com/example-org/docs/releases` |

## Fehlerbehebung {#troubleshooting}

| Problem | Lösung |
|---------|--------|
| Öffentliche Repositorys zeigen eine Schaltfläche zum Verbinden | Suchen Sie im Serverprotokoll nach `Public unfurl failed`. Möglicherweise sind die App-Zugangsdaten falsch oder GitHub begrenzt die Anfragerate. |
| Enterprise-Server-Links bleiben normale Links | Prüfen Sie `INTEGRATION_GITHUB_URL` und starten Sie Docmost neu. Eine ungültige URL erzeugt eine Warnung im Protokoll und führt zum Rückfall auf GitHub.com. |
