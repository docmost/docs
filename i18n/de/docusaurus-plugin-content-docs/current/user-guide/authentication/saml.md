---
sidebar_position: 2
tags:
   - Enterprise
---

# SAML

**Edition:** Enterprise

Docmost unterstützt die Authentifizierung über die Security Assertion Markup Language (SAML 2.0) und ermöglicht so die Integration mit Identitätsanbietern (IdPs), die das SAML-Protokoll unterstützen.
<p align="center">
<img src="/docs/img/saml-auth.png" width="350"/>
</p>

### So konfigurieren Sie SAML 2.0

1. **Navigieren Sie zu den Sicherheitseinstellungen**
   - Gehen Sie in Ihrem Docmost-Dashboard zu **Settings** → **Security & SSO**.

2. **Erstellen Sie eine neue SSO-Integration**
   - Klicken Sie auf die Schaltfläche **"Create SSO"**.
   - Wählen Sie **"SAML"** aus dem Dropdown-Menü. Dadurch wird ein Konfigurations-Popup geöffnet.

3. **Konfigurieren Sie Ihre SAML-Integration**
   - Geben Sie einen aussagekräftigen **Display Name** für diese Integration an (z. B. „Company SAML SSO“).

4. **Konfigurieren Sie Ihren Identitätsanbieter (IdP)**
   - Kopieren Sie aus Docmost die folgenden Felder in die Konfiguration Ihres IdP:
      - **Entity ID:** Der eindeutige Bezeichner von Docmost, der im Konfigurations-Popup bereitgestellt wird.
      - **Callback URL (ACS):** Die von Docmost bereitgestellte Assertion-Consumer-Service-URL.

   Stellen Sie sicher, dass diese URLs in den Einstellungen Ihres Identitätsanbieters korrekt konfiguriert sind.

5. **Geben Sie die Details Ihres Identitätsanbieters (IdP) in Docmost ein**
   - **IDP Login URL:** Fügen Sie die Login-URL Ihres IdP ein, zu der Benutzer zur Authentifizierung weitergeleitet werden.
   - **IDP Certificate:** Fügen Sie den Text des öffentlichen X.509-Zertifikats Ihres IdP ein.

6. **Zusätzliche Konfigurationsoptionen**
   - Um Benutzer bei der ersten Anmeldung automatisch zu provisionieren, aktivieren Sie die Option **"Allow Signup"**.
   - Aktivieren Sie diese Integration sofort, indem Sie **"Enabled"** umschalten.

7. **Speichern Sie Ihre Konfiguration**
   - Klicken Sie auf **"Save"**, um Ihre Einstellungen abzuschließen.

Nach erfolgreicher Konfiguration erscheint Ihr SAML-2.0-Anbieter auf der Anmeldeseite von Docmost, sodass sich Benutzer über Ihren konfigurierten Identitätsanbieter authentifizieren können.

## AD FS und Windows Integrated Authentication

Standardmäßig fordert Docmost einen `PasswordProtectedTransport`-Authentifizierungskontext an, was AD FS dazu zwingt, sein Formular-Login anzuzeigen. Damit AD FS für Intranet-Clients die Windows Integrated Authentication (Kerberos) verwenden kann, setzen Sie auf dem Server [`SAML_DISABLE_REQUESTED_AUTHN_CONTEXT=true`](/self-hosting/environment-variables#saml).

## Gruppensynchronisierung

### Wie die Gruppensynchronisierung funktioniert

Wenn die Gruppensynchronisierung aktiviert ist, verwaltet Docmost die Gruppenmitgliedschaften der Benutzer automatisch auf Basis der Gruppen-Claims, die bei jeder Anmeldung von Ihrem SAML-Anbieter empfangen werden.

Docmost liest Gruppen aus einem der folgenden SAML-Attribute:

- `groups` / `Groups`
- `memberOf` / `memberof`
- `roles` / `Roles`
- `http://schemas.xmlsoap.org/claims/Group`
- `http://schemas.microsoft.com/ws/2008/06/identity/claims/groups`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role`
- `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`

Gruppenwerte können ein Attribut mit mehreren Werten oder eine einzelne durch Kommas oder Semikolons getrennte Zeichenfolge sein.

⚠️ **Gruppen müssen in Docmost vorab erstellt werden**: Die SAML-Gruppensynchronisierung erstellt KEINE neuen Gruppen. Sie müssen Gruppen in Docmost manuell mit Namen erstellen, die den von Ihrem IdP gesendeten Werten entsprechen. Die Zuordnung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung.

### Einrichten der Gruppensynchronisierung

1. **Konfigurieren Sie Ihren Identitätsanbieter** so, dass er Gruppen-Claims in der SAML-Assertion unter einem der oben aufgeführten Attributnamen freigibt. Die Werte müssen die Gruppennamen sein, keine undurchsichtigen IDs.

2. **Erstellen Sie Gruppen in Docmost**:
   ```
   Example SAML group claim values:
   - Engineering
   - Marketing
   - HR-Team

   Create corresponding Docmost groups:
   - Engineering
   - Marketing
   - HR-Team
   ```
   Erfahren Sie mehr in der Docmost-[Dokumentation zu Gruppen](/user-guide/groups).

3. **Aktivieren Sie die Gruppensynchronisierung** in der Konfiguration des SAML-Anbieters.