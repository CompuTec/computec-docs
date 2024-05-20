import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import { LOCAL_STORAGE_KEY as COOKIES_KEY } from "../hooks/useCookies";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
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
  gtag("config", "G-3R37W5WZXR");

  if (window.localStorage.getItem(COOKIES_KEY) === "allowed") {
    gtag("consent", "update", {
      ad_storage: "allowed",
      ad_user_data: "allowed",
      ad_personalization: "allowed",
      analytics_storage: "allowed",
    });
  }
}
