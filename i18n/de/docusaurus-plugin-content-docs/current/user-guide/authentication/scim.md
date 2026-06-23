---
sidebar_position: 5
tags:
   - Enterprise
---

# SCIM
**Edition:** Enterprise

## Überblick

Docmost unterstützt das Protokoll System for Cross-domain Identity Management (SCIM 2.0), mit dem Sie Benutzer und Gruppen automatisch von Ihrem Identitätsanbieter provisionieren können.

## Hauptfunktionen
- **Benutzerprovisionierung**: Erstellen, Aktualisieren und Deaktivieren von Benutzern von Ihrem Identitätsanbieter aus.
- **Gruppenprovisionierung**: Erstellen von Gruppen und Synchronisieren ihrer Mitglieder.
- **External-ID-Zuordnung**: Identitätsanbieter-IDs werden auf Docmost-Benutzern und -Gruppen gespeichert, um eine stabile Zuordnung zu ermöglichen.
- **Bearer-Token-Authentifizierung**: SCIM-Anfragen werden mit einem Token authentifiziert.

## Voraussetzungen

- Ein Identitätsanbieter, der SCIM 2.0 mit Bearer-Token-Authentifizierung unterstützt (z. B. Okta, Microsoft Entra ID, OneLogin, JumpCloud).
- SSO sollte konfiguriert sein, damit sich provisionierte Benutzer anmelden können.

## Konfiguration

### 1. SCIM aktivieren

1. Gehen Sie zu **Settings** → **Security & SSO**.
2. Scrollen Sie zum Abschnitt **SCIM provisioning**.
3. Schalten Sie **Enable SCIM** ein.

> Solange SCIM aktiviert ist, hat es Vorrang vor der SSO-Gruppensynchronisierung. Die Gruppenmitgliedschaften werden von Ihrem Identitätsanbieter gesteuert.

### 2. Die SCIM-Endpunkt-URL kopieren

Kopieren Sie im Abschnitt **SCIM provisioning** die **SCIM endpoint URL**. Sie hat folgende Form:

```
https://your-domain.com/api/scim/v2
```

Sie fügen diese URL in die SCIM-Konfiguration Ihres Identitätsanbieters ein.

### 3. Ein SCIM-Token erstellen

1. Klicken Sie auf **Create SCIM token**.
2. Geben Sie einen aussagekräftigen Namen ein (z. B. `Entra Production`).
3. Klicken Sie auf **Create**.
4. **Kopieren Sie das Token sofort** – es wird nur einmal angezeigt.

Sie können bis zu **5 Token** pro Arbeitsbereich erstellen. Widerrufen Sie ein bestehendes Token, um Platz für ein neues zu schaffen.

### 4. Ihren Identitätsanbieter konfigurieren

In den SCIM-Provisionierungseinstellungen Ihres Identitätsanbieters:

| Feld | Wert |
|-------|-------|
| **SCIM connector base URL** | `https://your-domain.com/api/scim/v2` |
| **Authentication mode** | HTTP Header / Bearer Token |
| **Authorization header** | `Bearer <your-scim-token>` |
| **Unique identifier field for users** | `userName` (mapped to email) |

Aktivieren Sie die Provisionierungsvorgänge, die Ihr Identitätsanbieter unterstützt:

- Benutzer erstellen
- Benutzerattribute aktualisieren
- Benutzer deaktivieren
- Gruppen und Gruppenmitgliedschaften übertragen

## Unterstützte Ressourcen

### Benutzer

| Vorgang | Endpunkt |
|-----------|----------|
| Benutzer auflisten | `GET /Users` |
| Benutzer abrufen | `GET /Users/:id` |
| Benutzer erstellen | `POST /Users` |
| Benutzer ersetzen | `PUT /Users/:id` |
| Benutzer aktualisieren | `PATCH /Users/:id` |
| Benutzer deaktivieren | `DELETE /Users/:id` |

Unterstützte Benutzerattribute: `userName`, `displayName`, `name.formatted`, `name.givenName`, `name.familyName`, `active`, `emails`, `locale`, `externalId`.

`DELETE /Users/:id` deaktiviert den Benutzer in Docmost; die Daten werden dabei nicht gelöscht.

### Gruppen

| Vorgang | Endpunkt |
|-----------|----------|
| Gruppen auflisten | `GET /Groups` |
| Gruppe abrufen | `GET /Groups/:id` |
| Gruppe erstellen | `POST /Groups` |
| Gruppe ersetzen | `PUT /Groups/:id` |
| Gruppe aktualisieren | `PATCH /Groups/:id` |
| Gruppe löschen | `DELETE /Groups/:id` |

Unterstützte Gruppenattribute: `displayName`, `members`, `externalId`.

Die Standardgruppe **Everyone** kann nicht über SCIM aktualisiert oder gelöscht werden. Erfahren Sie mehr in der [Dokumentation zu Gruppen](/user-guide/groups).

### Discovery

| Endpunkt | Beschreibung |
|----------|-------------|
| `GET /ServiceProviderConfig` | Anbieterfunktionen |
| `GET /ResourceTypes` | Verfügbare Ressourcentypen |
| `GET /Schemas` | Ressourcenschemata |

## Filterung und Paginierung

- **Filteroperator**: Es wird nur `eq` unterstützt.
- **Benutzerfilter**: `userName`, `email`, `id`, `externalId`, `active`.
- **Gruppenfilter**: `displayName`, `id`, `externalId`.
- **Paginierung**: `startIndex` (Standard `1`) und `count` (Standard und Maximum `100`).
- **Sortierung**: `sortBy` unterstützt `userName` / `email` bei Benutzern und `displayName` bei Gruppen, mit `sortOrder` von `ascending` oder `descending`.

## Provisionierungsverhalten

### Benutzererstellung
- Neue Benutzer werden bei der Erstellung der Gruppe **Everyone** hinzugefügt.
- Ein zufälliges Passwort wird generiert. Benutzer melden sich über SSO an.
- Wenn der Arbeitsbereich E-Mail-Domains einschränkt, berücksichtigt SCIM die Positivliste.
- Das Erstellen eines Benutzers mit der E-Mail-Adresse eines zuvor deaktivierten Benutzers reaktiviert dieses Konto.

### Gruppenerstellung
- Über SCIM erstellte Gruppen werden als extern markiert. Ihre Mitglieder werden vom Identitätsanbieter verwaltet.
- Gruppennamen müssen innerhalb des Arbeitsbereichs eindeutig sein.

### Vorrang vor der SSO-Gruppensynchronisierung
Wenn SCIM aktiviert ist, ist es die maßgebliche Quelle für Gruppenmitgliedschaften. Die SSO-basierte Gruppensynchronisierung wird ignoriert, solange SCIM eingeschaltet ist.

## Zu beachtende Punkte

### Deaktivieren von SCIM
Beim Deaktivieren von SCIM nimmt der Endpunkt keine Anfragen mehr an. Bereits provisionierte Benutzer, Gruppen und Mitgliedschaften bleiben unverändert.

### Widerrufen von Token
Das Widerrufen eines Tokens macht es sofort ungültig. Jeder Identitätsanbieter, der das widerrufene Token verwendet, kann die Synchronisierung erst wieder durchführen, wenn ein neues Token ausgestellt wird.

### Audit-Protokollierung
Die Erstellung und der Widerruf von SCIM-Token werden im Audit-Protokoll des Arbeitsbereichs aufgezeichnet.

## Fehlerbehebung

| Problem | Mögliche Ursache | Lösung |
|-------|---------------|----------|
| `401 Invalid SCIM token` | Token ist falsch oder widerrufen | Bearer-Token überprüfen; bei Bedarf ein neues ausstellen |
| `403 SCIM provisioning is not enabled` | Der Schalter ist ausgeschaltet | SCIM unter **Settings → Security & SSO** aktivieren |
| `403 SCIM provisioning requires the Enterprise plan` | Die Lizenz enthält kein SCIM | Arbeitsbereichslizenz upgraden |
| `409 User with this email already exists` | Ein aktiver Benutzer teilt die E-Mail-Adresse | Den bestehenden Benutzer deaktivieren oder eine andere E-Mail-Adresse verwenden |
| `400 The email domain is not approved` | Für den Arbeitsbereich sind Einschränkungen für E-Mail-Domains festgelegt | Die Domain zu **Allowed domains** hinzufügen oder die E-Mail-Adresse des Benutzers ändern |
| Gruppenmitglieder werden nicht synchronisiert | Der Identitätsanbieter überträgt keine Gruppen | Gruppen-Push in Ihrem IdP aktivieren und sicherstellen, dass die Benutzerzuweisungen die Gruppe enthalten |
