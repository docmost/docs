import DocCardList from '@theme/DocCardList';

# Integrations

Paste links from external tools as cards or inline mentions in Docmost pages. Members connect their own accounts to view previews. Public GitHub repositories can be previewed without connecting.

Sharing a Docmost page does not give readers access to the linked resource.

<DocCardList />

## Install and connect

First, follow the provider guide above to register its OAuth app and configure the Docmost server. Restart Docmost after changing the configuration. See the [environment variable reference](/self-hosting/environment-variables#integrations) for all integration settings.

1. **Workspace admin:** open **Settings** > **Integrations**, choose **Install** beside the provider, and authorize access. This installs the integration for the workspace and connects your account.
2. **Members:** open **Settings** > **Account** > **Connections**, choose **Connect** beside the provider, and sign in.

You can also connect from a preview's **Connect** button. Hover over a mention to see it. Only installed integrations appear on the **Connections** page.

## Cards and mentions

Paste a supported URL into a paragraph. In **Paste as**, choose **Card**, **Mention**, or **URL**. To change it later, select the card or mention and use **Display as**.

| Reader | What appears |
|--------|--------------|
| Connected, with access | A full preview |
| Not connected | A label based on the URL and a connect button; public GitHub repositories show a full preview |
| Connected without access, or anonymous | A label based on the URL |

Previews are cached for up to five minutes, including after a permission change. Wait five minutes before reloading to see updated information.

## Disconnect or uninstall

To disconnect your account, open **Settings** > **Account** > **Connections** and choose **Disconnect** beside the provider. Other members keep their connections.

To remove a provider from the workspace, an admin opens **Settings** > **Integrations** and chooses **Uninstall**. This removes all members' connections and stops loading previews. Existing links remain in pages.

## Troubleshooting

| Problem | What to do |
|---------|------------|
| The provider is missing from **Connections** | Ask a workspace admin to install it in **Settings** > **Integrations**. |
| A pasted URL stays a normal link, or **Card** is unavailable | Check that the provider is installed and supports the URL. Paste into an empty paragraph without selecting text. |
| **Install** fails with `Missing environment variable` | Set the credentials listed in the provider's setup guide and restart Docmost. |
| **OAuth connection failed. Please try again.** | Try **Install** or **Connect** again in the same browser. If it keeps failing, check the client ID, secret, required scopes, and callback URL against the provider guide and your `APP_URL`. Look for `OAuth callback`, `OAuth completion`, or `Token exchange failed` in the server log for the provider's error. |
| A preview is missing information | Open the link with the connected account to check access. After fixing access, wait five minutes before reloading. For other preview errors, look for `Unfurl failed` in the server log. |
| **Connection expired** | Choose **Reconnect** on the **Connections** page. |
