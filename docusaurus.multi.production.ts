import type { Config } from "@docusaurus/types";

import createBaseConfigAsync from "./config/docusaurus.base";

export default async function createMultiProductionConfigAsync(): Promise<Config> {
  return createBaseConfigAsync(false, {
    // enableI18n: true,
    enableAlgolia: true,
  });
}
