import clsx from "clsx";

import CompuTecLogoDarkBasic from "@site/static/img/CompuTecLogoDarkBasic.svg";

import styles from "./index.module.css";

export default function DocsHeader() {
  return (
    <header className={clsx("hero hero--dark shadow--lw", styles.hero)}>
      <div className={clsx("container", styles.container)}>
        <CompuTecLogoDarkBasic height={40} />
        <h2 className={clsx("hero__title", styles.heroSubtitle)}>
          Documentation Center
        </h2>
      </div>
    </header>
  );
}
