---
sidebar_position: 2.5
tags:
  - business
  - enterprise
---

# Security & SSO

Workspace owners and admins manage sign-in rules, public sharing, export and trash settings in **Settings** > **Security & SSO**. These settings are available in the Business and Enterprise editions. Settings that need the Enterprise edition are marked below.

## Enforce two-factor authentication

Turn on **Enforce two-factor authentication** to require [two-factor authentication](/user-guide/mfa) for all members. Members who sign in with a password or LDAP and haven't set it up are asked to set it up the next time they sign in.

Sign-ins through SAML, OIDC or Google don't ask for a Docmost code. Use your identity provider's multi-factor authentication for those accounts.

## Disable public sharing

Turn on **Disable public sharing** to stop members from sharing pages publicly. Turning it on deletes all existing public links in the workspace. Space admins can also turn off public sharing for a single space. See [Sharing](/user-guide/pages#sharing).

## Disable export

Turn on **Disable export** to stop everyone, admins included, from exporting or printing content. This setting needs the Enterprise edition. See [Disabling export](/user-guide/import-export#disabling-export).

## Trash retention

Docmost permanently deletes pages that have been in the trash longer than the **Trash retention** period, along with their subpages and attachments. The default is 30 days.

To change it, enter a number, choose **days**, **months** or **years**, and click **Save**. This setting needs the Enterprise edition.

## Single sign-on (SSO)

### Add an SSO provider

Click **Create SSO** and choose **SAML**, **OpenID (OIDC)** or **LDAP / Active Directory**. Then follow the guide for your provider: [SAML](/user-guide/authentication/saml), [OIDC](/user-guide/authentication/oidc) or [LDAP](/user-guide/authentication/ldap).

Each provider in the list has these switches:

| Switch | What it does |
|--------|--------------|
| **Enabled** | Shows the provider as a sign-in option on the login page. |
| **Allow signup** | Creates an account for people who sign in through the provider for the first time. When it's off, only existing members and invited people can sign in. |
| **Group sync** | Adds and removes members from Docmost groups based on their groups in the identity provider. |

### Enforce SSO

Turn on **Enforce SSO** to make SSO the only way to sign in. You need at least one enabled provider first.

While it's on, nobody can sign in with an email and password, reset a password, change their email address, or accept an invitation with a password. LDAP sign-in keeps working.

:::warning
Enforce SSO applies to everyone, workspace owners included. Check that your provider works before you turn it on. If the provider stops working, nobody can sign in with a password.
:::

### Allowed email domains

Enter the domains people must have in their email address, such as `example.com`, and click **Save**. Only people with these domains can create an account through SSO, accept an invitation, or be added through SCIM.

Subdomains need their own entry. Existing members aren't affected. Leave the list empty to allow any domain.

## SCIM provisioning

Turn on **Enable SCIM** to provision users and groups from your identity provider. This setting needs the Enterprise edition. See [SCIM](/user-guide/authentication/scim).

## Audit log

Changes to these settings and to SSO providers are recorded in the [audit log](/user-guide/audit-logs).
