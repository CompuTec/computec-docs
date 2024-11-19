import type { Config } from "@docusaurus/types";

import createBaseConfigAsync from "./config/docusaurus.base";

export default async function createMultiPreviewConfigAsync(): Promise<Config> {
  return createBaseConfigAsync();
}
