import React from "react";

import DocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";
import { Props } from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";

import {
  useActivePlugin,
  useDocsData,
} from "@docusaurus/plugin-content-docs/client";

export default function DocsVersionDropdownNavbarItemWrapper(props: Props) {
  const docsData = useDocsData(props.docsPluginId);
  const activePlugin = useActivePlugin();

  if (props.docsPluginId !== activePlugin?.pluginId) return null;
  if (docsData.versions.length <= 1) return null;

  return <DocsVersionDropdownNavbarItem {...props} />;
}
