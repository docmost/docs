---
sidebar_position: 3
tags:
   - Enterprise
---

# OIDC
**Edition:** Enterprise

Docmost unterstützt die Authentifizierung über OpenID Connect (OIDC) und ermöglicht so die Integration mit jedem Identitätsanbieter, der den OIDC-Standard unterstützt.

<p align="center">
<img src="/docs/img/oidc-auth.png" width="350"/>
</p>

### So konfigurieren Sie OpenID Connect (OIDC):

1. **Navigieren Sie zu den Sicherheitseinstellungen**
    - Gehen Sie in Ihrem Docmost-Dashboard zu **Settings** → **Security & SSO**.

2. **Erstellen Sie eine neue SSO-Integration**
    - Klicken Sie auf die Schaltfläche **"Create SSO"**.
    - Wählen Sie **"OpenID (OIDC)"** aus dem Dropdown-Menü. Dadurch wird ein Konfigurations-Popup geöffnet.

3. **Konfigurieren Sie Ihre OIDC-Integration**
    - Geben Sie einen aussagekräftigen **Display Name** für diese Integration ein (z. B. „Company SSO“).
    - Kopieren Sie die bereitgestellte **Callback URL**. Sie müssen diese URL zu den zulässigen Redirect-URIs Ihres OIDC-Anbieters hinzufügen.

4. **Geben Sie die Details Ihres OIDC-Anbieters ein**
    - **Issuer URL:** Geben Sie die Issuer-URL Ihres OIDC-Anbieters an.
    - **Client ID:** Fügen Sie die von Ihrem OIDC-Anbieter erhaltene Client-ID ein.
    - **Client Secret:** Fügen Sie das von Ihrem OIDC-Anbieter erhaltene Client-Secret ein.

5. **Zusätzliche Konfigurationsoptionen**
    - Um Benutzer bei ihrer ersten Anmeldung automatisch zu provisionieren, aktivieren Sie den Schalter **"Allow Signup"**.
    - Um diese Integration sofort zu aktivieren, aktivieren Sie den Schalter **"Enabled"**.

6. **Speichern Sie Ihre Konfiguration**
    - Klicken Sie auf **"Save"**, um Ihre Einstellungen anzuwenden.

Nach erfolgreicher Konfiguration erscheint Ihr OIDC-Anbieter als verfügbare Anmeldemethode auf der Anmeldeseite von Docmost. Benutzer können sich nun über Ihre konfigurierte OIDC-Integration authentifizieren.

## Gruppensynchronisierung

### Wie die Gruppensynchronisierung funktioniert

Wenn die Gruppensynchronisierung aktiviert ist, verwaltet Docmost die Gruppenmitgliedschaften der Benutzer automatisch auf Basis der Gruppen-Claims, die bei jeder Anmeldung von Ihrem OIDC-Anbieter zurückgegeben werden.

Docmost liest Gruppen aus dem `groups`- oder `roles`-Claim in der userinfo-Antwort. Der Claim kann ein Array von Zeichenfolgen oder eine einzelne durch Kommas oder Semikolons getrennte Zeichenfolge sein.

⚠️ **Gruppen müssen in Docmost vorab erstellt werden**: Die OIDC-Gruppensynchronisierung erstellt KEINE neuen Gruppen. Sie müssen Gruppen in Docmost manuell mit Namen erstellen, die den von Ihrem IdP zurückgegebenen Werten entsprechen. Die Zuordnung erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung.

### Einrichten der Gruppensynchronisierung

1. **Konfigurieren Sie Ihren OIDC-Anbieter** so, dass er einen `groups`- (oder `roles`-)Claim in der userinfo-Antwort oder im ID-Token enthält. Die meisten Anbieter (Okta, Keycloak, Auth0, Microsoft Entra ID) erfordern das Hinzufügen eines expliziten Scopes oder Claim-Mappings.

2. **Erstellen Sie Gruppen in Docmost**:
   ```
   Example OIDC groups claim:
   {
     "groups": ["Engineering", "Marketing", "HR-Team"]
   }

   Create corresponding Docmost groups:
   - Engineering
   - Marketing
   - HR-Team
   ```
   Erfahren Sie mehr in der Docmost-[Dokumentation zu Gruppen](/user-guide/groups).

3. **Aktivieren Sie die Gruppensynchronisierung** in der Konfiguration des OIDC-Anbieters.
