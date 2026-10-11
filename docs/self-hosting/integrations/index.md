import DocCardList from '@theme/DocCardList';

# Integrations

Register a provider app and configure its credentials on the Docmost server before a workspace admin installs the integration. Choose a provider for its callback URL, permissions, and environment variables.

<DocCardList />

## After setup

Restart Docmost after changing the server configuration. A workspace admin then [installs the integration](/user-guide/integrations#install-and-connect), and each member connects their own account.

The [user guides](/user-guide/integrations) cover supported links, cards and mentions, account connections, and access. See [integration environment variables](../environment-variables.md#integrations) for the configuration reference.

## Troubleshooting

For authorization failures, check the server log for `OAuth callback`, `OAuth completion`, or `Token exchange failed`. For preview failures after connecting, look for `Unfurl failed`. The provider guides above cover configuration errors.
