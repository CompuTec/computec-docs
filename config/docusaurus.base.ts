import path from "path";

import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type { NavbarItem } from "@docusaurus/theme-common";
import type * as Preset from "@docusaurus/preset-classic";

import docs from "../docs"
import { getDocsPlugins } from "./plugins";
import { getDocsNavbarItems, getDocsVersionDropdownNavbarItems } from "./navbar-items";
import { getDocsFooterItems, getFooterItems } from "./footer-items";

require("dotenv").config();

const defaultLanguage = "en";
const availableLanguages = ["en", "pl"];

interface ConfigOptions {
  enableI18n?: boolean;
  enableAlgolia?: boolean;
}

const localeDropdown: NavbarItem = {
  type: "localeDropdown",
  position: "right",
};

const algoliaConfig: Preset.ThemeConfig["algolia"] = {
  appId: process.env.ALGOLIA_PROJECT_ID,
  apiKey: process.env.ALGOLIA_PUBLIC_API_TOKEN,
  indexName: process.env.ALGOLIA_INDEX_NAME,
  contextualSearch: true,
};

export default async function createBaseConfigAsync(
  options: ConfigOptions = {}
): Promise<Config> {
  const docsPlugins = getDocsPlugins(docs);
  const docsNavbarItems = getDocsNavbarItems(docs);
  const docsVersionDropdownNavbarItems =
    getDocsVersionDropdownNavbarItems(docs);
  const docsFooterItems = getDocsFooterItems(docs);
  const footerItems = getFooterItems(docsFooterItems)

  return {
    title: "CompuTec Learn",
    tagline:
      "Gain expert-level knowledge about CompuTec solutions for advanced manufacturing and logistics using our documentation and training resources.",
    favicon: "img/favicon.ico",

    url: process.env.PRODUCTION_URL ?? "https://example.com",
    baseUrl: "/",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",

    i18n: {
      defaultLocale: defaultLanguage,
      locales: options.enableI18n ? availableLanguages : [defaultLanguage],
    },

    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-3R37W5WZXR",
        async: true,
      },
    ],

    clientModules: ["./src/modules/gtag.ts"],

    plugins: [...docsPlugins, path.resolve(__dirname, "../plugins/zoom/index.ts")],

    presets: [
      [
        "classic",
        {
          docs: false,
          blog: false,
          pages: {},
          theme: {
            customCss: "./src/css/custom.css",
          },
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      metadata: [
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:image",
          content: new URL(
            "/img/og-image.png",
            process.env.PRODUCTION_URL ?? "https://example.com"
          ).href,
        },
        {
          name: "og:image:secure_url",
          content: new URL(
            "/img/og-image.png",
            process.env.PRODUCTION_URL ?? "https://example.com"
          ).href,
        },
        {
          name: "og:image:width",
          content: "1200",
        },
        {
          name: "og:image:height",
          content: "630",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: new URL(
            "/img/og-image.png",
            process.env.PRODUCTION_URL ?? "https://example.com"
          ).href,
        },
      ],
      navbar: {
        logo: {
          alt: "CompuTec",
          src: "img/CompuTecLogo.svg",
          srcDark: "img/CompuTecLogoDark.svg",
        },
        items: [
          ...docsNavbarItems,
          ...docsVersionDropdownNavbarItems,
          ...(options.enableI18n ? [localeDropdown] : []),
        ],
      },
      footer: {
        style: "dark",
        links: footerItems,
        copyright: `Copyright © ${new Date().getFullYear()} CompuTec S.A.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["regex", "batch", "sql", "powershell", "csharp"],
      },
      algolia: options.enableAlgolia && algoliaConfig,
    } satisfies Preset.ThemeConfig,
  };
}
