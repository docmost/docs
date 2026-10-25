---
sidebar_position: 14.5
tags:
  - enterprise
---

# Audit Logs

Audit logs record security and administrative activity in your workspace, including sign-ins, membership changes, permissions, sharing, and integration settings. Audit logs and SIEM streaming are available in the Enterprise edition and can be managed by workspace owners.

## View audit logs

1. Open **Settings** > **Audit logs & SIEM**.
2. Select the **Audit logs** tab.
3. Use **Filter by event** to find a particular type of activity.

Expand an entry to see its recorded changes and metadata, when available.

## Retention

Audit logs are retained for **365 days** by default. To change this, click the **Audit settings** gear icon on the Audit logs tab, enter a **Retention** period in days, months, or years, and click **Save**. The minimum is **30 days**. Older entries are removed automatically.

## SIEM

Stream audit events to your security information and event management (SIEM) system. Each workspace supports up to **two destinations**. Streaming starts with events recorded after a destination is created.

### Add a destination

1. Open **Settings** > **Audit logs & SIEM** and select **SIEM**.
2. Click **Add destination**, choose a **Preset**, and enter a name.
3. Enter the connection details for your receiver:

   | Preset | Connection details |
   |--------|--------------------|
   | **Splunk HEC** | Enter the HEC URL, such as `https://splunk.example.com:8088`, and a HEC token. You can specify an index under **Show advanced options**; otherwise, the token's default index is used. |
   | **Datadog** | Select your Datadog site and enter an API key. Service and tags can be set under **Show advanced options**. |
   | **Generic HTTP** | Enter the endpoint URL and, if required, a token. Under **Show advanced options**, choose a JSON array or NDJSON body and configure the authentication header. The default header is `Authorization: Bearer <token>`. |

4. Click **Test connection** and check that the test event arrives at your receiver.
5. Once the test succeeds, click **Create**.

Changes to connection details require another successful test before saving.

For receivers on a private network, configure [ALLOWED_PRIVATE_NETWORKS](/self-hosting/environment-variables#outbound-requests-to-private-networks) on the Docmost server and restart it before testing the connection.
