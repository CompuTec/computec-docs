import type { NavbarItem } from "@docusaurus/theme-common";
import type { DocConfig } from "../docs";

export function getDocNavbarItem(doc: DocConfig): NavbarItem {
    return {
        type: "doc",
        docId: "index",
        docsPluginId: doc.pluginId,
        label: doc.label,
    };
}

export function getDocsNavbarItems(docs: DocConfig[]): NavbarItem[] {
    return docs.map(getDocNavbarItem);
}

export function getDocVersionDropdownNavbarItem(doc: DocConfig): NavbarItem {
    return {
        type: "docsVersionDropdown",
        position: "right",
        docsPluginId: doc.pluginId,
    };
}

export function getDocsVersionDropdownNavbarItems(docs: DocConfig[]): NavbarItem[] {
    return docs.map(getDocVersionDropdownNavbarItem);
}