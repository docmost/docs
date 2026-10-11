import DocCardList from '@theme/DocCardList';

# Integrations

Integrations turn links to external tools into cards or inline mentions in Docmost pages. Previews use each reader's own connected account. Sharing a Docmost page does not give readers access to the linked resource.

<DocCardList />

## Install and connect

For self-hosted instances, the server operator must [configure the provider](/self-hosting/integrations) first.

1. **Workspace admin:** open **Settings** > **Integrations** and choose **Install** beside the provider. Sign in and authorize access. Install once per workspace. This also connects your own account.
2. **Each member:** open **Settings** > **Account** > **Connections**, choose **Connect**, and authorize their own account.

Members can also connect from a preview using **Connect to GitHub to preview**, for example. On a mention, this button appears when you hover over it. Only installed integrations appear on the **Connections** page.

## Cards and mentions

Paste a supported URL into a paragraph. In **Paste as**, choose **Card**, **Mention**, or **URL**. To change it later, select the card or mention and use **Display as**. If **Card** is unavailable, move the link to a paragraph that can hold a card.

| Reader | What appears |
|--------|--------------|
| Connected, with access | The provider's preview |
| Not connected | Information from the URL and a connect button |
| Connected, without access | Information from the URL, without fetched details |
| Anonymous visitor | Information from the URL, without fetched details |

Previews can use details cached for five minutes, including after a permission change. Reload the page after that time to fetch updated details.

## Disconnect or uninstall

To disconnect your account, open **Settings** > **Account** > **Connections**, choose **Disconnect**, and confirm with **Disconnect**. Other members keep their connections. To connect again, choose **Connect**. If the page shows **Connection expired**, choose **Reconnect**.

To remove a provider from the workspace, an admin opens **Settings** > **Integrations**, chooses **Uninstall**, and confirms with **Uninstall**. This removes all members' connections and stops fetching previews. Existing links remain in pages.

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| A pasted URL stays a normal link | The provider is not installed, the URL is unsupported, or you pasted outside a paragraph | Install the provider, check its supported links, then paste into a paragraph without selecting text. |
| **OAuth connection failed. Please try again.** | Authorization was cancelled, expired, or failed | Start **Install** or **Connect** again in the same browser. If it keeps failing, ask the workspace admin to check the provider setup. On self-hosted instances, use the [server setup guides](/self-hosting/integrations). |
| A preview has no fetched details | Access was denied, the resource is missing, or the provider request failed | Open the link with the connected account to check access. After fixing the cause, wait at least a minute before reloading; missing resources can stay cached for five minutes. |
