import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";

import { FooterLinkItem as FooterLinkItemType } from "../Links";

interface FooterLinkItemProps {
  item: FooterLinkItemType;
}

export default function FooterLinkItem({ item }: FooterLinkItemProps) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

  if (!href) {
    return (
      <Link className="footer__link-item" to={toUrl} {...props}>
        {label}
      </Link>
    );
  }

  return (
    <Link
      className="footer__link-item"
      href={prependBaseUrlToHref ? normalizedHref : href}
      {...props}
    >
      {label}
      {!isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
