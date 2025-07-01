---
sidebar_position: 2
tags:
   - Enterprise
---

# SAML

**Edition:** Enterprise

Docmost supports authentication via the Security Assertion Markup Language (SAML 2.0), allowing integration with identity providers (IdPs) that support the SAML protocol.
<p align="center">
<img src="/docs/img/saml-auth.png" width="350"/>
</p>

### How to configure SAML 2.0

1. **Navigate to Security Settings**
   - Go to **Settings** → **Security & SSO** in your Docmost dashboard.

2. **Create a New SSO Integration**
   - Click on the **"Create SSO"** button.
   - Select **"SAML"** from the dropdown menu. This opens a configuration popup.

3. **Configure Your SAML Integration**
   - Provide a descriptive **Display Name** for this integration (e.g., "Company SAML SSO").

4. **Configure Your Identity Provider (IdP)**
   - From Docmost, copy the following fields into your IdP’s configuration:
      - **Entity ID:** Docmost’s unique identifier provided in the configuration popup.
      - **Callback URL (ACS):** Assertion Consumer Service URL provided by Docmost.

   Ensure these URLs are correctly configured in your Identity Provider settings.

5. **Enter Your Identity Provider (IdP) Details in Docmost**
   - **IDP Login URL:** Paste the login URL from your IdP, which users will be redirected to for authentication.
   - **IDP Certificate:** Paste your IdP’s public X.509 certificate text.

6. **Additional Configuration Options**
   - To automatically provision users on first login, enable the **"Allow Signup"** option.
   - Activate this integration immediately by toggling **"Enabled"**.

7. **Save Your Configuration**
   - Click **"Save"** to finalize your settings.

Once successfully configured, your SAML 2.0 provider will appear on Docmost's login page, allowing users to authenticate via your configured Identity Provider.