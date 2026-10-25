---
sidebar_position: 5
tags:
  - Enterprise
---

# SCIM
Docmost supports the System for Cross-domain Identity Management (SCIM 2.0) protocol, allowing you to automatically provision users and groups from your identity provider.

## Key Features
- **User provisioning**: Create, update, and deactivate users from your identity provider.
- **Group provisioning**: Create groups and synchronize their members.
- **External ID mapping**: Identity provider IDs are stored on Docmost users and groups for stable matching.
- **Bearer token authentication**: SCIM requests are authenticated with a token.

## Prerequisites

- An identity provider that supports SCIM 2.0 with bearer-token authentication (e.g., Okta, Microsoft Entra ID, OneLogin, JumpCloud).
- SSO should be configured so provisioned users can sign in.

## Configuration

### 1. Enable SCIM

1. Go to **Settings** → **Security & SSO**.
2. Scroll to the **SCIM provisioning** section.
3. Toggle **Enable SCIM** on.

> While SCIM is enabled, it takes precedence over SSO group sync. Group memberships are controlled by your identity provider.

### 2. Copy the SCIM endpoint URL

In the **SCIM provisioning** section, copy the **SCIM endpoint URL**. It has the form:

```
https://your-domain.com/api/scim/v2
```

You will paste this URL into your identity provider's SCIM configuration.

### 3. Create a SCIM token

1. Click **Create SCIM token**.
2. Enter a descriptive name (e.g., `Entra Production`).
3. Click **Create**.
4. **Copy the token immediately** — it is only shown once.

You can create up to **5 tokens** per workspace. Revoke an existing token to make room for a new one.

### 4. Configure your identity provider

In your identity provider's SCIM provisioning settings:

| Field | Value |
|-------|-------|
| **SCIM connector base URL** | `https://your-domain.com/api/scim/v2` |
| **Authentication mode** | HTTP Header / Bearer Token |
| **Authorization header** | `Bearer <your-scim-token>` |
| **Unique identifier field for users** | `userName` (mapped to email) |

Enable the provisioning operations your identity provider supports:

- Create users
- Update user attributes
- Deactivate users
- Push groups and group memberships

## Supported Resources

### Users

| Operation | Endpoint |
|-----------|----------|
| List users | `GET /Users` |
| Get user | `GET /Users/:id` |
| Create user | `POST /Users` |
| Replace user | `PUT /Users/:id` |
| Update user | `PATCH /Users/:id` |
| Deactivate user | `DELETE /Users/:id` |

Supported user attributes: `userName`, `displayName`, `name.formatted`, `name.givenName`, `name.familyName`, `active`, `emails`, `locale`, `externalId`.

`DELETE /Users/:id` deactivates the user in Docmost; it does not erase their data.

### Groups

| Operation | Endpoint |
|-----------|----------|
| List groups | `GET /Groups` |
| Get group | `GET /Groups/:id` |
| Create group | `POST /Groups` |
| Replace group | `PUT /Groups/:id` |
| Update group | `PATCH /Groups/:id` |
| Delete group | `DELETE /Groups/:id` |

Supported group attributes: `displayName`, `members`, `externalId`.

The default **Everyone** group cannot be updated or deleted via SCIM. Learn more in the [Groups Documentation](/user-guide/groups).

### Discovery

| Endpoint | Description |
|----------|-------------|
| `GET /ServiceProviderConfig` | Provider capabilities |
| `GET /ResourceTypes` | Available resource types |
| `GET /Schemas` | Resource schemas |

## Filtering and Pagination

- **Filter operator**: only `eq` is supported.
- **User filters**: `userName`, `email`, `id`, `externalId`, `active`.
- **Group filters**: `displayName`, `id`, `externalId`.
- **Pagination**: `startIndex` (default `1`) and `count` (default and maximum `100`).
- **Sorting**: `sortBy` supports `userName` / `email` on users and `displayName` on groups, with `sortOrder` of `ascending` or `descending`.

## Provisioning Behavior

### User creation
- New users are added to the **Everyone** group on creation.
- A random password is generated. Users sign in through SSO.
- If the workspace restricts email domains, SCIM respects the allowlist.
- Creating a user with the email of a previously deactivated user reactivates that account.

### Group creation
- Groups created via SCIM are marked as external. Their members are managed by the identity provider.
- Group names must be unique within the workspace.

### Precedence over SSO group sync
When SCIM is enabled, it is the source of truth for group memberships. SSO-based group synchronization is ignored while SCIM is on.

## Things to Consider

### Disabling SCIM
Disabling SCIM stops the endpoint from accepting requests. Users, groups, and memberships that were already provisioned remain unchanged.

### Revoking tokens
Revoking a token invalidates it immediately. Any identity provider using the revoked token will fail to sync until a new token is issued.

### Audit logging
SCIM token creation and revocation are recorded in the workspace [audit log](/user-guide/audit-logs).

## Troubleshooting

| Issue | Possible Cause | Solution |
|-------|---------------|----------|
| `401 Invalid SCIM token` | Token is incorrect or revoked | Verify the bearer token; issue a new one if needed |
| `403 SCIM provisioning is not enabled` | Toggle is off | Enable SCIM in **Settings → Security & SSO** |
| `403 SCIM provisioning requires the Enterprise plan` | License does not include SCIM | Upgrade the workspace license |
| `409 User with this email already exists` | An active user shares the email | Deactivate the existing user or use a different email |
| `400 The email domain is not approved` | Email domain restrictions are set on the workspace | Add the domain to **Allowed domains** or change the user's email |
| Group members not syncing | Identity provider is not pushing groups | Enable group push in your IdP and confirm user assignments include the group |
