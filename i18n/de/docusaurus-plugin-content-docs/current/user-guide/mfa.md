---
sidebar_position: 14
---

# Multi-Faktor-Authentifizierung (MFA)

Die Multi-Faktor-Authentifizierung fügt Ihrem Konto eine zusätzliche Sicherheitsebene hinzu, indem beim Anmelden zusätzlich zu Ihrem Passwort ein Verifizierungscode erforderlich ist.

:::note
MFA ist eine Enterprise-Funktion. Eine aktive Enterprise-Lizenz ist erforderlich.
:::

## Unterstützte Methoden

Docmost unterstützt **Time-based One-Time Password (TOTP)** für die Multi-Faktor-Authentifizierung. TOTP funktioniert mit Authenticator-Apps wie:

- Google Authenticator
- Authy
- Microsoft Authenticator
- 1Password
- Jede TOTP-kompatible App

## MFA einrichten

1. Gehen Sie zu **Einstellungen** > **Profil**.
2. Klicken Sie unter **2-step verification** auf **Add 2FA method**.
3. Scannen Sie den QR-Code mit Ihrer Authenticator-App oder geben Sie den Einrichtungsschlüssel manuell ein.
4. Geben Sie den von Ihrer Authenticator-App generierten Verifizierungscode ein, um die Einrichtung zu bestätigen.

Sobald MFA aktiviert ist, müssen Sie bei jeder Anmeldung einen TOTP-Code aus Ihrer Authenticator-App eingeben.

## MFA deaktivieren

So deaktivieren Sie die Multi-Faktor-Authentifizierung:

1. Gehen Sie zu **Einstellungen** > **Profil**.
2. Entfernen Sie unter **2-step verification** Ihre konfigurierte 2FA-Methode.

:::warning
Das Deaktivieren von MFA verringert die Sicherheit Ihres Kontos. Deaktivieren Sie es nur, wenn Sie einen Grund dafür haben.
:::
