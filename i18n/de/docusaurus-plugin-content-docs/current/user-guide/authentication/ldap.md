---
sidebar_position: 4
tags:
   - Enterprise
---

# LDAP
**Edition:** Enterprise

## Überblick

Docmost unterstützt die LDAP-Authentifizierung (Lightweight Directory Access Protocol), sodass sich Benutzer mit ihren bestehenden Anmeldedaten aus dem Unternehmensverzeichnis anmelden können.

## Hauptfunktionen
- **Single Sign-On (SSO)**: Benutzer können sich mit ihren LDAP-Anmeldedaten authentifizieren
- **Automatische Benutzerprovisionierung**: Neue Benutzer werden bei der ersten Anmeldung automatisch erstellt (sofern aktiviert)
- **Gruppensynchronisierung**: Synchronisierung der Gruppenmitgliedschaften von LDAP nach Docmost bei der Benutzeranmeldung

## Konfiguration

### Einrichten des LDAP-Anbieters

So konfigurieren Sie die LDAP-Authentifizierung in Ihrem Arbeitsbereich:

1. Navigieren Sie zu **Workspace Settings** → **Security & SSO**
2. Klicken Sie auf „Erstellen“ und wählen Sie **LDAP / Active Directory** aus den Optionen
3. Konfigurieren Sie die folgenden Einstellungen:

<p align="center">
<img src="/docs/img/ldap-auth.png" width="800"/>
</p>


#### Grundkonfiguration

| Feld | Beschreibung | Beispiel |
|-------|-------------|---------|
| **Display Name** | Ein aussagekräftiger Name für den LDAP-Anbieter | `Company LDAP` |
| **LDAP Server URL** | Die URL Ihres LDAP-Servers | `ldap://ldap.example.com:389` oder `ldaps://ldap.example.com:636` |
| **Bind DN** | Distinguished Name des für die Suche verwendeten Dienstkontos | `cn=admin,dc=example,dc=com` |
| **Bind Password** | Passwort für das Dienstkonto | `••••••••` |
| **Base DN** | Base Distinguished Name, bei dem die Benutzersuchen beginnen | `ou=users,dc=example,dc=com` |
| **User Search Filter** | LDAP-Filter zum Finden von Benutzern (verwendet `{{username}}` als Platzhalter) | `(mail={{username}})` oder `(uid={{username}})` |

##### Zusätzliche Optionen

- **Group Sync**: Aktiviert die automatische Synchronisierung von LDAP-Gruppen mit Docmost-Gruppen
- **Allow Signup**: Erlaubt die automatische Provisionierung neuer Benutzer bei der ersten Anmeldung
- **Enabled**: Schaltet den LDAP-Anbieter ein/aus

## Ablauf der Benutzerauthentifizierung

1. Der Benutzer klickt auf der Anmeldeseite auf die LDAP-Anmeldeoption
2. Der Benutzer gibt seinen LDAP-Benutzernamen und sein Passwort ein
3. Docmost führt die folgenden Schritte aus:
    - Bindet sich mit dem konfigurierten Dienstkonto an den LDAP-Server
    - Sucht den Benutzer mithilfe des konfigurierten Suchfilters
    - Validiert die Benutzeranmeldedaten, indem versucht wird, sich als der Benutzer zu binden
    - Ruft die Benutzerattribute ab (E-Mail, Name, Gruppen)
    - Erstellt oder aktualisiert das Benutzerkonto in Docmost
    - Synchronisiert die Gruppenmitgliedschaften (sofern aktiviert)

## Gruppensynchronisierung

### Wie die Gruppensynchronisierung funktioniert

Wenn die Gruppensynchronisierung aktiviert ist, verwaltet Docmost die Gruppenmitgliedschaften der Benutzer automatisch auf Basis ihrer LDAP-Gruppenzugehörigkeiten.

⚠️ **Gruppen müssen in Docmost vorab erstellt werden**: Die LDAP-Gruppensynchronisierung erstellt KEINE neuen Gruppen. Sie müssen Gruppen in Docmost manuell mit Namen erstellen, die Ihren LDAP-Gruppennamen entsprechen.

### Einrichten der Gruppensynchronisierung

1. **Erstellen Sie Gruppen in Docmost**:
   ```
   Example LDAP Groups:
   - CN=Engineering,OU=Groups,DC=example,DC=com
   - CN=Marketing,OU=Groups,DC=example,DC=com
   - CN=HR-Team,OU=Groups,DC=example,DC=com
   
   Create corresponding Docmost groups:
   - Engineering
   - Marketing  
   - HR-Team
   ```
   Erfahren Sie mehr in der Docmost-[Dokumentation zu Gruppen](/user-guide/groups).

2. **Aktivieren Sie die Gruppensynchronisierung** in der Konfiguration des LDAP-Anbieters

## Beispiele für Suchfilter

Der Benutzersuchfilter bestimmt, wie Docmost Benutzer in Ihrem LDAP-Verzeichnis findet. Verwenden Sie `{{username}}` als Platzhalter für den bei der Anmeldung eingegebenen Benutzernamen.

## Integration mit der Multi-Faktor-Authentifizierung

Die LDAP-Authentifizierung unterstützt die MFA-Funktion von Docmost vollständig:

- Benutzer können MFA nach der ersten LDAP-Anmeldung aktivieren
- MFA-Abfragen werden nach erfolgreicher LDAP-Authentifizierung angezeigt
- MFA-Einstellungen werden pro Benutzer in Docmost verwaltet, nicht in LDAP
- Ein Arbeitsbereich-Administrator kann MFA für alle Benutzer erzwingen.

## Zu beachtende Punkte

### Bestehende Benutzer

Beim Aktivieren von LDAP für einen Arbeitsbereich mit bestehenden Benutzern:

1. Benutzer mit übereinstimmenden E-Mail-Adressen werden mit ihren LDAP-Konten verknüpft
2. Die LDAP-Anmeldung aktualisiert ihr Profil mit LDAP-Attributen und synchronisiert Gruppen (sofern die Gruppensynchronisierung aktiviert ist)

### Deaktivieren von LDAP
Wenn Sie LDAP deaktivieren müssen:

1. Bestehende LDAP-Benutzer behalten ihre Docmost-Konten
2. Benutzer benötigen Passwort-Resets, um wieder Zugriff zu erhalten
3. Gruppenmitgliedschaften bleiben unverändert, bis sie manuell geändert werden

## Fehlerbehebung

### Häufige Probleme und Lösungen

| Problem | Mögliche Ursache | Lösung |
|-------|---------------|----------|
| „LDAP server bind credentials are invalid“ | Falscher Bind-DN oder falsches Passwort | Anmeldedaten des Dienstkontos überprüfen |
| „Invalid LDAP username or password“ | Benutzeranmeldedaten falsch oder Benutzer nicht gefunden | Benutzersuchfilter und LDAP-Eintrag des Benutzers überprüfen |
| Gruppen werden nicht synchronisiert | Gruppen existieren nicht in Docmost | Gruppen in Docmost mit passenden Namen vorab erstellen |
| Benutzer können sich nicht anmelden | LDAP-Anbieter deaktiviert oder falsch konfiguriert | Überprüfen, ob der Anbieter aktiviert und die URL korrekt ist |
| TLS-Verbindung schlägt fehl | Probleme bei der Zertifikatsvalidierung | CA-Zertifikatskonfiguration überprüfen |
