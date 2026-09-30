import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import posthog from "posthog-js";
import { recordFirstTouch } from "./first-touch";

// Same PostHog project as docmost.com and the customer portal
const POSTHOG_KEY = "phc_wux6EEkOXlmDRPbp7Shll9HTwGnyPV6rXBpfdlxKgcU";
const POSTHOG_HOST = "https://lab.docmost.com";

if (ExecutionEnvironment.canUseDOM) {
  recordFirstTouch();
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2025-05-24",
    disable_session_recording: true,
  });
}
