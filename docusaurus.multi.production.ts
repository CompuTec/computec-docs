import type { Config } from "@docusaurus/types";

import createBaseConfigAsync from "./config/docusaurus.base";

export default async function createMultiProductionConfigAsync(): Promise<Config> {
  return createBaseConfigAsync({
    production: true,
    enableI18n: true,
    enableAlgolia: true,
  });
}
