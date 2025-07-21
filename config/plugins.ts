import path from "node:path";

import type { PluginConfig } from "@docusaurus/types";
import type { DocConfig } from "../docs";

export function getDocPlugin(doc: DocConfig): PluginConfig {
    const versions = doc.version ?? (doc.currentVersion ? {
        current: {
            label: doc.currentVersion,
            badge: true,
        },
    } : undefined);

    return [
        "@docusaurus/plugin-content-docs",
        {
            id: doc.pluginId,
            routeBasePath: path.posix.join("/docs", doc.pluginId),
			path: path.join("docs", doc.pluginId),
			editUrl: "https://github.com/CompuTec/computec-docs/edit/main/",
            versions,
			includeCurrentVersion: doc.includeCurrentVersion,
			lastVersion: doc.lastVersion,
        },
    ];

}

export function getDocsPlugins(docs: DocConfig[]): PluginConfig[] {
    return docs.map(getDocPlugin);
}
