---
sidebar_position: 4
tags:
   - Enterprise
---

# LDAP
**Edition:** Enterprise

## Overview

Docmost supports LDAP (Lightweight Directory Access Protocol) authentication, allowing users to sign in using their existing corporate directory credentials.

## Key Features
- **Single Sign-On (SSO)**: Users can authenticate using their LDAP credentials
- **Automatic User Provisioning**: New users are automatically created upon first login (if enabled)
- **Group Sync**: Sync user group memberships from LDAP to Docmost on user login

## Configuration

### Setting Up LDAP Provider

To configure LDAP authentication in your workspace:

1. Navigate to **Workspace Settings** → **Security & SSO**
2. Click on create and Select **LDAP / Active Directory** from the options
3. Configure the following settings:

<p align="center">
<img src="/docs/img/ldap-auth.png" width="800"/>
</p>


#### Basic Configuration

| Field | Description | Example |
|-------|-------------|---------|
| **Display Name** | A friendly name for the LDAP provider | `Company LDAP` |
| **LDAP Server URL** | The URL of your LDAP server | `ldap://ldap.example.com:389` or `ldaps://ldap.example.com:636` |
| **Bind DN** | Distinguished Name of the service account used for searching | `cn=admin,dc=example,dc=com` |
| **Bind Password** | Password for the service account | `••••••••` |
| **Base DN** | Base Distinguished Name where user searches will start | `ou=users,dc=example,dc=com` |
| **User Search Filter** | LDAP filter to find users (uses `{{username}}` as placeholder) | `(mail={{username}})` or `(uid={{username}})` |

##### Additional Options

- **Group Sync**: Enable automatic synchronization of LDAP groups to Docmost groups
- **Allow Signup**: Allow new users to be automatically provisioned on first login
- **Enabled**: Toggle to enable/disable the LDAP provider

## User Authentication Flow

1. User clicks on the LDAP login option on the sign-in page
2. User enters their LDAP username and password
3. Docmost performs the following steps:
    - Binds to LDAP server using configured service account
    - Searches for the user using the configured search filter
    - Validates user credentials by attempting to bind as the user
    - Retrieves user attributes (email, name, groups)
    - Creates or updates the user account in Docmost
    - Syncs group memberships (if enabled)

## Group Synchronization

### How Group Sync Works

When group synchronization is enabled, Docmost automatically manages user group memberships based on their LDAP group associations.

⚠️ **Groups must be pre-created in Docmost**: LDAP group synchronization does NOT create new groups. You must manually create groups in Docmost with names that match your LDAP group names.

### Setting Up Group Sync

1. **Create Groups in Docmost**:
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
   Learn more about Docmost [Groups Documentation](/user-guide/groups).

2. **Enable Group Sync** in the LDAP provider configuration

## Search Filter Examples

The user search filter determines how Docmost finds users in your LDAP directory. Use `{{username}}` as a placeholder for the username entered during login.

## Integration with Multi-Factor Authentication

LDAP authentication fully supports Docmost's MFA feature:

- Users can enable MFA after initial LDAP login
- MFA challenges are presented after successful LDAP authentication
- MFA settings are managed per-user in Docmost, not in LDAP
- A workspace admin can enforce MFA for all users.

## Things to Consider

### Existing Users

When enabling LDAP for a workspace with existing users:

1. Users with matching email addresses will be linked to their LDAP accounts
2. LDAP login will update their profile with LDAP attributes, and sync groups (if group sync is enabled)

### Deactivating LDAP
If you need to disable LDAP:

1. Existing LDAP users retain their Docmost accounts
2. Users will need password resets to regain access
3. Group memberships remain unchanged until manually modified

## Troubleshooting

### Common Issues and Solutions

| Issue | Possible Cause | Solution |
|-------|---------------|----------|
| "LDAP server bind credentials are invalid" | Incorrect bind DN or password | Verify service account credentials |
| "Invalid LDAP username or password" | User credentials incorrect or user not found | Check user search filter and user's LDAP entry |
| Groups not syncing | Groups don't exist in Docmost | Pre-create groups in Docmost with matching names |
| Users can't log in | LDAP provider disabled or misconfigured | Verify provider is enabled and URL is correct |
| TLS connection fails | Certificate validation issues | Check CA certificate configuration |

