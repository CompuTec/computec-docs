import React from "react";

export const LOCAL_STORAGE_KEY = "cookies-consent";

export enum CookiesConsent {
  UNKNOWN,
  NOT_SPECIFIED,
  ALLOWED,
  DENIED,
}

export default function useCookies() {
  const [consent, setConsent] = React.useState<CookiesConsent>(
    CookiesConsent.UNKNOWN
  );

  React.useEffect(() => {
    const consent = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (consent === "allowed") setConsent(CookiesConsent.ALLOWED);
    else if (consent === "denied") setConsent(CookiesConsent.DENIED);
    else setConsent(CookiesConsent.NOT_SPECIFIED);
  }, []);

  const updateConsent = (value: CookiesConsent) => {
    setConsent(value);
    if (value === CookiesConsent.ALLOWED)
      localStorage.setItem(LOCAL_STORAGE_KEY, "allowed");
    else if (value === CookiesConsent.DENIED)
      localStorage.setItem(LOCAL_STORAGE_KEY, "denied");
  };

  return [consent, updateConsent] as const;
}
