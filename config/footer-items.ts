import path from "node:path";

import type * as Preset from "@docusaurus/preset-classic";
import { DocConfig } from "../docs";

export function getDocFooterItem(
    doc: DocConfig
): Preset.ThemeConfig["footer"]["links"][0] {
    return {
        label: `CompuTec ${doc.label}`,
        to: path.join("docs", doc.pluginId),
    };
}

export function getDocsFooterItems(
    docs: DocConfig[]
): Preset.ThemeConfig["footer"]["links"] {
    return docs.map(getDocFooterItem);
}

// Links to www.computec.one, per site locale. Docusaurus sets
// DOCUSAURUS_CURRENT_LOCALE before it loads the config for each locale.
const companySiteLinks = {
    en: {
        website: "https://www.computec.one",
        contact: "https://www.computec.one/about/contact",
    },
    pl: {
        website: "https://www.computec.one/pl",
        contact: "https://www.computec.one/pl/o-nas/kontakt",
    },
};

function getCompanySiteLinks() {
    const locale = process.env.DOCUSAURUS_CURRENT_LOCALE;
    return locale === "pl" ? companySiteLinks.pl : companySiteLinks.en;
}

export function getFooterItems(
    docsFooterItems: ReturnType<typeof getDocsFooterItems>
): Preset.ThemeConfig["footer"]["links"] {
    const companySite = getCompanySiteLinks();
    return [
        {
            title: "FIND US ONLINE",
            items: [
                {
                    label: "Visit our website",
                    href: companySite.website,
                },
                {
                    label: "Roadmap",
                    href: "https://trello.com/b/fNecAXeP/computec-roadmap",
                },
            ],
        },
        {
            title: "OUR PRODUCTS",
            items: docsFooterItems,
        },
        {
            title: "GET ASSISTANCE",
            items: [
                {
                    label: "Support",
                    href: "https://support.computec.pl",
                },
                {
                    label: "Privacy & Cookie Policy",
                    to: "/policy",
                },
                {
                    label: "Contact",
                    href: companySite.contact,
                },
            ],
        },
    ];
}