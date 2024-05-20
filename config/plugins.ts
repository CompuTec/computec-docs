import path from "node:path";

import type { PluginConfig } from "@docusaurus/types";
import type { DocConfig } from "../docs";

export function getDocPlugin(doc: DocConfig): PluginConfig {
    return [
        "@docusaurus/plugin-content-docs",
        {
            id: doc.pluginId,
            routeBasePath: path.join("/docs", doc.pluginId),
            path: path.join("docs", doc.pluginId),
            versions: {
                current: {
                    label: doc.currentVersion,
                    badge: true,
                },
            },
        },
    ];

}

export function getDocsPlugins(docs: DocConfig[]): PluginConfig[] {
    return docs.map(getDocPlugin);
}
