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

export function getFooterItems(
    docsFooterItems: ReturnType<typeof getDocsFooterItems>
): Preset.ThemeConfig["footer"]["links"] {
    return [
        {
            title: "FIND US ONLINE",
            items: [
                {
                    label: "Visit our website",
                    href: "https://processforce.world",
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
                    to: "/contact",
                },
            ],
        },
    ];
}