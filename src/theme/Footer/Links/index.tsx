import React from "react";

import { isMultiColumnFooterLinks } from "@docusaurus/theme-common";

import FooterLinksMultiColumn from "./MultiColumn";

export type FooterLinkItem = {
  label?: string;
  to?: string;
  href?: string;
  html?: string;
  prependBaseUrlToHref?: string;
} & { [key: string]: unknown };

export type MultiColumnFooterLinks = {
  title: string | null;
  items: FooterLinkItem[];
}[];

export type SimpleFooterLink = FooterLinkItem[];

interface FooterLinksProps {
  links: MultiColumnFooterLinks | SimpleFooterLink;
}

export default function FooterLinks({ links }: FooterLinksProps) {
  if (isMultiColumnFooterLinks(links))
    return <FooterLinksMultiColumn columns={links} />;
  return null; // Not supported
}
