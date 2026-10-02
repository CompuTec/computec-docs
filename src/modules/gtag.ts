import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import { LOCAL_STORAGE_KEY as COOKIES_KEY } from "../hooks/useCookies";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const MEASUREMENT_ID = "G-K8LGYW3WB4";

function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
}

export function grantConsent() {
  if (!ExecutionEnvironment.canUseDOM) return;

  gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
}

if (ExecutionEnvironment.canUseDOM) {
  window.dataLayer = window.dataLayer || [];

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });

  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID);

  if (window.localStorage.getItem(COOKIES_KEY) === "allowed") grantConsent();
}
