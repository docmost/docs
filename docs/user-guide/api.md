---
sidebar_position: 13
tags:
  - enterprise
---

# API

Docmost provides a REST API that allows you to programmatically interact with your workspace. You can create, read, update, and delete pages, spaces, and other resources. For the full API reference, see the [API documentation](https://docmost.com/api-docs).

:::note
The API is an enterprise feature. An active enterprise license is required.
:::

## API Keys

Each user can create personal API keys to authenticate with the API. API keys are scoped to the user who created them and inherit that user's permissions.

### Creating an API Key

1. Go to **Settings** > **API keys** (under Account).
2. Click **Create API Key**.
3. Enter a descriptive **Name** for the key.
4. Choose an **Expiration** period:
   - 30 days
   - 60 days
   - 90 days
   - 365 days
   - Custom
   - No expiration
5. Click **Create**.

The API key is displayed once after creation. Copy it and store it securely — it cannot be viewed again.

### Managing Your Keys

Your API keys are listed under **Settings** > **API keys** with the following details:

- **Name** — The descriptive name you assigned to the key.
- **Last used** — When the key was last used to make an API request.
- **Expires** — The expiry date, or "Never" if the key has no expiration.
- **Created** — When the key was created.

Click the **...** menu on any key to:

- **Rename** — Change the key's name.
- **Revoke** — Permanently revoke the key. This action cannot be undone.

## API Management (Admin)

Workspace admins can view and manage API keys for all users in the workspace.

1. Go to **Settings** > **API management** (under Workspace).

This page displays all API keys across the workspace, including the **User** who owns each key. Admins can create, rename, and revoke keys on behalf of any user.

