---
sidebar_position: 3
---

# OIDC
**Edition:** Enterprise

Docmost supports authentication through OpenID Connect (OIDC), allowing integration with any identity provider that supports the OIDC standard.

<p align="center">
<img src="/docs/img/oidc-auth.png" width="350"/>
</p>

### How to configure OpenID Connect (OIDC):

1. **Navigate to Security Settings**
    - Go to **Settings** → **Security & SSO** in your Docmost dashboard.

2. **Create a New SSO Integration**
    - Click on the **"Create SSO"** button.
    - Select **"OpenID (OIDC)"** from the dropdown menu. This opens a configuration popup.

3. **Configure Your OIDC Integration**
    - Enter a descriptive **Display Name** for this integration (e.g., "Company SSO").
    - Copy the provided **Callback URL**. You’ll need to add this URL to your OIDC provider’s allowed redirect URIs.

4. **Enter Your OIDC Provider Details**
    - **Issuer URL:** Provide the Issuer URL from your OIDC provider.
    - **Client ID:** Paste the Client ID obtained from your OIDC provider.
    - **Client Secret:** Paste the Client Secret obtained from your OIDC provider.

5. **Additional Configuration Options**
    - To automatically provision users upon their first login, enable the **"Allow Signup"** toggle.
    - To activate this integration immediately, enable the **"Enabled"** toggle.

6. **Save Your Configuration**
    - Click **"Save"** to apply your settings.

After successful configuration, your OIDC provider will appear as an available login method on the Docmost login page. Users can now authenticate through your configured OIDC integration.
