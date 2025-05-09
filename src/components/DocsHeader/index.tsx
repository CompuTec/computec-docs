import clsx from "clsx";

import Translate from "@docusaurus/Translate";

import CompuTecLogoDarkBasic from "@site/static/img/CompuTecLogoDarkBasic.svg";

import styles from "./index.module.css";

export default function DocsHeader() {
  return (
    <header className={clsx("hero hero--dark shadow--lw", styles.hero)}>
      <div className={clsx("container", styles.container)}>
        <CompuTecLogoDarkBasic height={40} />
        <h2 className={clsx("hero__title", styles.heroSubtitle)}>
          <Translate
            description="DocsHeader -> Documentation Center"
            id="docsHeader.documentation_center"
          >
            Documentation Center
          </Translate>
        </h2>
      </div>
    </header>
  );
}
