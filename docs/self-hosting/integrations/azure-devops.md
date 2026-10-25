---
sidebar_position: 6
tags:
  - enterprise
---

# Azure DevOps

Preview Azure DevOps work items and pull requests.

## Set up

### Register the app

1. [Register an app in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) in the directory connected to your Azure DevOps organization. For use within one Entra directory, **Single tenant only** is recommended.
2. Add a [Web redirect URI](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri):

   ```text
   https://docmost.example.com/api/integrations/oauth/azure_devops/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Copy the **Application (client) ID** and **Directory (tenant) ID**. [Create a client secret](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials) and copy its **Value**.
4. In the app's API permissions, add **Azure DevOps** delegated permissions `vso.work` and `vso.code`, both read permissions. Grant admin consent if your directory blocks user consent. See [Microsoft's Azure DevOps setup guidance](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/entra-oauth?view=azure-devops).

### Configure Docmost

```shell
INTEGRATION_MICROSOFT_CLIENT_ID=<client-id>
INTEGRATION_MICROSOFT_CLIENT_SECRET=<client-secret-value>
INTEGRATION_MICROSOFT_TENANT_ID=<tenant-id>
```

Set `APP_URL` to your Docmost base address, without a path, and restart Docmost. The tenant ID must be the directory ID connected to the Azure DevOps organization. A single-tenant app requires this variable; leaving it unset uses Microsoft's `organizations` endpoint.

Then [install Azure DevOps in your workspace](/self-hosting/integrations#install-and-connect).

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Azure DevOps**, and sign in with your work account. The account must belong to the organization's Microsoft Entra directory and be a user in the Azure DevOps organization.

## Supported links

| Link | Example |
|------|---------|
| Work item | `https://dev.azure.com/<org>/<project>/_workitems/edit/5` |
| Pull request | `https://dev.azure.com/<org>/<project>/_git/<repo>/pullrequest/42` |
| Board with an open work item | `https://dev.azure.com/<org>/<project>/_boards/board/t/<team>/<board>?workitem=5` |
| Backlog with an open work item | `https://dev.azure.com/<org>/<project>/_backlogs/backlog/<team>?workitem=5` |
| Sprint with an open work item | `https://dev.azure.com/<org>/<project>/_sprints/taskboard/<team>?workitem=5` |
| Legacy host | `https://<org>.visualstudio.com/DefaultCollection/<project>/_workitems/edit/5` |

## Renew the client secret

Before the Microsoft Entra client secret expires, create a new client secret in the same Entra app registration. Set `INTEGRATION_MICROSOFT_CLIENT_SECRET` to its **Value** and restart Docmost. Leave Docmost's `APP_SECRET` unchanged.

## Troubleshooting

| Problem | What to do |
|---------|------------|
| `AADSTS50194`: single-tenant app using a shared authority | Set `INTEGRATION_MICROSOFT_TENANT_ID` to the organization's directory ID and restart. |
| `AADSTS50011`: redirect URI mismatch | Match the Web redirect URI to the callback above and check `APP_URL`. |
| `AADSTS65001` or admin approval required | Ask the Entra admin to grant consent for the configured permissions, then connect again. |
| `AADSTS650052`: directory lacks an Azure DevOps service principal | In Azure DevOps **Organization settings** > **Microsoft Entra ID**, [connect the organization to the directory](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/connect-organization-to-azure-ad?view=azure-devops). Use that directory's tenant ID. |
| Connected, but previews fail with HTTP 401 | Check that the member uses a work account in the correct directory and has access to the Azure DevOps organization. |
| `Token refresh failed for azure_devops` with `invalid_client` | [Renew the client secret](#renew-the-client-secret). Existing connections can resume if their refresh tokens remain valid. |
| **Connection expired** with `invalid_grant` or `interaction_required` | Choose **Reconnect**. If it repeats, ask the Entra admin to check sign-in and conditional access policies. |
| `INTEGRATION_MICROSOFT_TENANT_ID is not a tenant id or domain` | Set the tenant ID to the directory ID without quotes or a URL, then restart. |

Microsoft documents its [sign-in error codes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes).
