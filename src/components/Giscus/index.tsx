import { useColorMode } from "@docusaurus/theme-common";

import Giscus from "@giscus/react";

import styles from "./index.module.css";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <section className={styles.container}>
      <Giscus
        repo="CompuTec/discuss-docs"
        repoId="R_kgDOK7pBmg"
        category="General"
        categoryId="DIC_kwDOK7pBms4Cb3ll"
        mapping="pathname"
        strict="0"
        reactionsEnabled="0"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
