---
sidebar_position: 7
tags:
  - enterprise
---

# Microsoft 365

Preview SharePoint and OneDrive links, and embed SharePoint and OneDrive files in pages.

## Set up

### Register the app

1. [Register an app in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) in the directory that holds your SharePoint sites. For use within one Entra directory, **Single tenant only** is recommended.
2. Add a [Web redirect URI](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-redirect-uri):

   ```text
   https://docmost.example.com/api/integrations/oauth/microsoft_365/callback
   ```

   Replace `https://docmost.example.com` with your Docmost URL (`APP_URL`).

3. Copy the **Application (client) ID** and **Directory (tenant) ID**. [Create a client secret](https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials) and copy its **Value**.
4. In the app's API permissions, add the **Microsoft Graph** delegated permissions `User.Read`, `User.ReadBasic.All`, and `Sites.ReadWrite.All`. Docmost also requests `openid`, `profile`, `email`, and `offline_access`. Grant admin consent if your directory blocks user consent.

Microsoft Graph requires a write permission to open sharing links, although Docmost only reads files and never changes them.

### Configure Docmost

```shell
INTEGRATION_MICROSOFT_CLIENT_ID=<client-id>
INTEGRATION_MICROSOFT_CLIENT_SECRET=<client-secret-value>
INTEGRATION_MICROSOFT_TENANT_ID=<tenant-id>
```

Set `APP_URL` to your Docmost base address, without a path, and restart Docmost. A single-tenant app requires `INTEGRATION_MICROSOFT_TENANT_ID`. Leaving it unset uses Microsoft's `organizations` endpoint, which needs a multi-tenant app.

When a workspace admin installs Microsoft 365, Docmost saves the directory they signed in to. Members always connect to that directory, even if `INTEGRATION_MICROSOFT_TENANT_ID` changes later.

Then [install Microsoft 365 in your workspace](/self-hosting/integrations#install-and-connect).

### Use one app with Azure DevOps

[Azure DevOps](/self-hosting/integrations/azure-devops) reads the same variables, so one app registration can serve both. Add both redirect URIs and both sets of permissions to it.

If your Azure DevOps organization and your SharePoint sites are in different directories, make the app multi-tenant and leave `INTEGRATION_MICROSOFT_TENANT_ID` unset. Install Microsoft 365 while signed in to the directory that holds your SharePoint sites.

## Connect your account

Open **Settings** > **Account** > **Connections**, choose **Connect** beside **Microsoft 365**, and sign in with your work or school account. Personal Microsoft accounts are not supported.

## Add files to a page

Type `/` and choose **SharePoint file** to open the file picker. Find files under **My OneDrive**, **Search**, or **Sites**. Select one or more files, choose **Embed** or **Mention**, and select **Insert**. Several embedded files share one block, with arrows to move between them.

To embed a file from a link, paste the link into a paragraph and choose **Embed** in **Paste as**. To embed an existing file card, select it and choose **Embed**. Only files can be embedded. Folders, lists, document libraries, and sites appear as cards or mentions.

While editing, hover over an embed and choose **Mention** to turn it into mentions, or **Delete** to remove it. Drag a corner or the bottom edge to resize it. Each preview also has **Edit in SharePoint**, **Open parent folder**, **Open in SharePoint**, and **Full screen**.

## What readers see

Each reader sees an embedded file through their own Microsoft 365 account. Sharing a Docmost page does not share the files.

| Reader | What the embed shows |
|--------|----------------------|
| Connected, with access to the file | A live preview |
| Not connected | A **Connect to Microsoft 365 to preview** button |
| Connected, without access | **You do not have access to this file in SharePoint** |
| Not signed in to Docmost, such as on a shared page | **Sign in to Microsoft 365 to preview** |

Every embed shows the file name and an **Open in SharePoint** link. Cards and mentions follow the [same rules as other integrations](/self-hosting/integrations#cards-and-mentions).

## Supported links

| Link | Example |
|------|---------|
| File sharing link | `https://example.sharepoint.com/:w:/s/Marketing/EZabc123` |
| Folder sharing link | `https://example.sharepoint.com/:f:/s/Marketing/Ek1abc` |
| File path | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Plan.docx` |
| Office file opened in the browser | `https://example.sharepoint.com/sites/Marketing/_layouts/15/Doc.aspx?sourcedoc=%7B<id>%7D&file=Plan.docx` |
| Document library | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Forms/AllItems.aspx` |
| Folder or file opened in a library | `https://example.sharepoint.com/sites/Marketing/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FMarketing%2FShared%20Documents%2FReports` |
| List | `https://example.sharepoint.com/sites/Marketing/Lists/Issues/AllItems.aspx` |
| Site | `https://example.sharepoint.com/sites/Marketing` |
| OneDrive file | `https://example-my.sharepoint.com/:x:/g/personal/jane_example_com/EY9abc` |

Team sites under `/teams/` work like sites under `/sites/`. Personal OneDrive, SharePoint Server, and SharePoint pages such as `SitePages/Home.aspx` are not supported.

## Renew the client secret

Before the Microsoft Entra client secret expires, create a new client secret in the same Entra app registration. Set `INTEGRATION_MICROSOFT_CLIENT_SECRET` to its **Value** and restart Docmost. Leave Docmost's `APP_SECRET` unchanged. If Azure DevOps uses the same app, the new secret applies to both.

## Troubleshooting

| Problem | What to do |
|---------|------------|
| `AADSTS50194`: single-tenant app using a shared authority | Set `INTEGRATION_MICROSOFT_TENANT_ID` to your directory ID and restart. |
| `AADSTS50011`: redirect URI mismatch | Match the Web redirect URI to the callback above and check `APP_URL`. |
| `AADSTS65001` or admin approval required | Ask the Entra admin to grant consent for the configured permissions, then connect again. |
| Members sign in to the wrong directory | Docmost keeps the directory saved at install. Check `INTEGRATION_MICROSOFT_TENANT_ID`, then uninstall Microsoft 365 in **Settings** > **Integrations** and install it again. |
| **Ask a workspace admin to install the Microsoft 365 integration first** | A workspace admin must [install Microsoft 365](/self-hosting/integrations#install-and-connect) before members can add files. |
| **Only files can be embedded** | Show folders, lists, document libraries, and sites as a card or mention instead. |
| **Preview not available** | Microsoft 365 returned no preview for this file. Choose **Open in SharePoint**. |
| **This file was moved or deleted** | Add the file again from its new location. |
| **You do not have access to this file in SharePoint** | Ask the file's owner to share it with your Microsoft account. Reload the page after a minute. |
| **Could not load this file** | Reload the page. If it keeps failing, look for `Microsoft Graph API error` in the server log. |
| `Token refresh failed for microsoft_365` with `invalid_client` | [Renew the client secret](#renew-the-client-secret). Existing connections can resume if their refresh tokens remain valid. |
| **Connection expired** with `invalid_grant` or `interaction_required` | Choose **Reconnect**. If it repeats, ask the Entra admin to check sign-in and conditional access policies. |

Microsoft documents its [sign-in error codes](https://learn.microsoft.com/en-us/entra/identity-platform/reference-error-codes).
