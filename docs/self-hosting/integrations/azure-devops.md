---
sidebar_position: 6
tags:
  - enterprise
---

# Azure DevOps

Configure a Microsoft Entra app for Azure DevOps previews in Docmost.

## Set up

### Register the app

1. [Register an app in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) in the directory connected to your Azure DevOps organization. For use within one Entra directory, **Single tenant only** is recommended.
2. Add a [Web redirect URI](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri):

   ```text
   <APP_URL>/api/integrations/oauth/azure_devops/callback
   ```

3. Copy the **Application (client) ID** and **Directory (tenant) ID**. [Create a client secret](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials) and copy its **Value**.
4. In the app's API permissions, add **Azure DevOps** delegated permissions `vso.work` and `vso.code`, both read permissions. Grant admin consent if your directory blocks user consent. See [Microsoft's Azure DevOps setup guidance](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/entra-oauth?view=azure-devops).

### Configure Docmost

```shell
INTEGRATION_MICROSOFT_CLIENT_ID=<client-id>
INTEGRATION_MICROSOFT_CLIENT_SECRET=<client-secret-value>
INTEGRATION_MICROSOFT_TENANT_ID=<tenant-id>
```

Set `APP_URL` to your Docmost base address, without a path, and restart Docmost. The tenant ID must be the directory ID connected to the Azure DevOps organization. A single-tenant app requires this variable; leaving it unset uses Microsoft's `organizations` endpoint.

## Microsoft Entra client secret renewal

Before the Microsoft Entra client secret expires, create a new client secret in the same Entra app registration. Set `INTEGRATION_MICROSOFT_CLIENT_SECRET` to its **Value** and restart Docmost. Leave Docmost's `APP_SECRET` unchanged.

## Install in a workspace

After setup, a workspace admin can [install Azure DevOps](/user-guide/integrations#install-and-connect). Members then [connect their own accounts](/user-guide/integrations/azure-devops#connect-your-account).

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Install** fails with `Missing environment variable` | App credentials are missing | Set the Microsoft client ID and secret variables above, then restart. |
| **OAuth connection failed. Please try again.** | The Microsoft Entra client secret, callback, or authorization may be wrong | Check the server log for `OAuth callback for azure_devops returned no code` or `Token exchange failed for azure_devops`. Use the Microsoft error to identify the cause. |
| Microsoft reports `AADSTS50194` | A single-tenant app is using a shared authority | Set `INTEGRATION_MICROSOFT_TENANT_ID` to the connected directory ID and restart. |
| Microsoft reports `AADSTS50011` | Redirect URI mismatch | Match the Web redirect URI to the callback above and check `APP_URL`. |
| Microsoft reports `AADSTS65001` or requests admin approval | Consent is missing or blocked | Ask the Entra admin to grant consent for the configured permissions, then connect again. |
| Microsoft reports `AADSTS650052`, saying the directory lacks a service principal for Azure DevOps | No Azure DevOps organization has been connected to that directory | In Azure DevOps **Organization settings** > **Microsoft Entra ID**, [connect the organization to the directory](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops). Use that directory's tenant ID. |
| **Connected**, but cards have no details; Azure DevOps returns a bare 401 | The account is personal, belongs to the wrong directory, or is not a user in the organization | Sign in with the work account that belongs to the connected directory and organization. A resource 401 does not expire the Docmost connection. Access refusals appear only in debug logs. |
| Cards stop loading; the log says `Token refresh failed for azure_devops` with `invalid_client` | The Microsoft Entra client secret is wrong or expired | Set `INTEGRATION_MICROSOFT_CLIENT_SECRET` to the new Entra client secret's **Value** and restart Docmost. Existing connections can resume if their refresh tokens remain valid. |
| **Connection expired**; the refresh log shows `invalid_grant` or `interaction_required` | Microsoft requires fresh authorization | Choose **Reconnect**. Ask the Entra admin to check sign-in and conditional access policies if it repeats. |
| The server warns that `INTEGRATION_MICROSOFT_TENANT_ID is not a tenant id or domain` | The value has an invalid format | Set the directory ID without quotes or a URL, then restart. |

Microsoft documents its [sign-in error codes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes).
