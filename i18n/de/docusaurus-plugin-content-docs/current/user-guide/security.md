---
sidebar_position: 2.5
tags:
  - business
  - enterprise
---

# Sicherheit & SSO

Eigentümer und Administratoren des Arbeitsbereichs verwalten Anmelderegeln, öffentliches Teilen, Export und Papierkorb unter **Einstellungen** > **Security & SSO**. Diese Einstellungen sind in den Editionen Business und Enterprise verfügbar. Einstellungen, die die Enterprise-Edition erfordern, sind unten gekennzeichnet.

## Zwei-Faktor-Authentifizierung erzwingen {#enforce-two-factor-authentication}

Aktivieren Sie die Option **Zwei-Faktor-Authentifizierung erzwingen**, um die [Zwei-Faktor-Authentifizierung](/user-guide/mfa) für alle Mitglieder vorzuschreiben. Mitglieder, die sich mit Passwort oder LDAP anmelden und sie noch nicht eingerichtet haben, werden bei der nächsten Anmeldung aufgefordert, sie einzurichten.

Bei Anmeldungen über SAML, OIDC oder Google fragt Docmost keinen Code ab. Nutzen Sie für diese Konten die Multi-Faktor-Authentifizierung Ihres Identitätsanbieters.

## Öffentliches Teilen deaktivieren {#disable-public-sharing}

Aktivieren Sie die Option **Öffentliches Teilen deaktivieren**, damit Mitglieder keine Seiten mehr öffentlich teilen können. Beim Aktivieren werden alle bestehenden öffentlichen Links im Arbeitsbereich gelöscht. Bereichsadministratoren können das öffentliche Teilen auch für einen einzelnen Bereich ausschalten. Siehe [Freigabe](/user-guide/pages#freigabe).

## Export deaktivieren {#disable-export}

Aktivieren Sie die Option **Export deaktivieren**, damit niemand Inhalte exportieren oder drucken kann, auch keine Administratoren. Diese Einstellung erfordert die Enterprise-Edition. Siehe [Export deaktivieren](/user-guide/import-export#export-deaktivieren).

## Aufbewahrungsdauer des Papierkorbs {#trash-retention}

Docmost löscht Seiten endgültig, die länger als die **Aufbewahrungsdauer des Papierkorbs** im Papierkorb liegen, zusammen mit ihren Unterseiten und Anhängen. Standardmäßig sind das 30 Tage.

Um den Wert zu ändern, geben Sie eine Zahl ein, wählen Sie **Tage**, **Monate** oder **Jahre** und klicken Sie auf **Speichern**. Diese Einstellung erfordert die Enterprise-Edition.

## Single Sign-on (SSO) {#single-sign-on-sso}

### Einen SSO-Anbieter hinzufügen {#add-an-sso-provider}

Klicken Sie auf **Create SSO** und wählen Sie **SAML**, **OpenID (OIDC)** oder **LDAP / Active Directory**. Folgen Sie dann der Anleitung für Ihren Anbieter: [SAML](/user-guide/authentication/saml), [OIDC](/user-guide/authentication/oidc) oder [LDAP](/user-guide/authentication/ldap).

Jeder Anbieter in der Liste hat diese Schalter:

| Schalter | Wirkung |
|----------|---------|
| **Aktiviert** | Zeigt den Anbieter als Anmeldeoption auf der Anmeldeseite. |
| **Registrierung erlauben** | Legt ein Konto an, wenn sich jemand zum ersten Mal über den Anbieter anmeldet. Ist der Schalter aus, können sich nur bestehende Mitglieder und eingeladene Personen anmelden. |
| **Gruppensynchronisierung** | Fügt Mitglieder anhand ihrer Gruppen beim Identitätsanbieter zu Docmost-Gruppen hinzu und entfernt sie daraus. |

### SSO erzwingen {#enforce-sso}

Aktivieren Sie die Option **SSO erzwingen**, damit die Anmeldung nur noch über SSO möglich ist. Dafür muss mindestens ein Anbieter aktiviert sein.

Solange die Option aktiv ist, kann sich niemand mit E-Mail und Passwort anmelden, ein Passwort zurücksetzen, die E-Mail-Adresse ändern oder eine Einladung mit Passwort annehmen. Die Anmeldung über LDAP funktioniert weiterhin.

:::warning
SSO erzwingen gilt für alle, auch für Eigentümer des Arbeitsbereichs. Prüfen Sie vor dem Aktivieren, ob Ihr Anbieter funktioniert. Fällt der Anbieter aus, kann sich niemand mit Passwort anmelden.
:::

### Erlaubte E-Mail-Domains {#allowed-email-domains}

Geben Sie die Domains ein, auf die E-Mail-Adressen enden müssen, zum Beispiel `example.com`, und klicken Sie auf **Speichern**. Nur Personen mit diesen Domains können über SSO ein Konto anlegen, eine Einladung annehmen oder über SCIM hinzugefügt werden.

Subdomains brauchen einen eigenen Eintrag. Bestehende Mitglieder sind nicht betroffen. Lassen Sie die Liste leer, um alle Domains zu erlauben.

## SCIM-Bereitstellung {#scim-provisioning}

Schalten Sie **SCIM aktivieren** ein, um Benutzer und Gruppen über Ihren Identitätsanbieter bereitzustellen. Diese Einstellung erfordert die Enterprise-Edition. Siehe [SCIM](/user-guide/authentication/scim).

## Audit-Protokoll {#audit-log}

Änderungen an diesen Einstellungen und an SSO-Anbietern werden im [Audit-Protokoll](/user-guide/audit-logs) festgehalten.
