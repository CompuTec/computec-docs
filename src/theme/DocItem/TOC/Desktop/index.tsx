import React from "react";

import Desktop from "@theme-original/DocItem/TOC/Desktop";

import Translate from "@docusaurus/Translate";

export default function DesktopWrapper(props) {
  return (
    <>
      <p>
        <Translate description="TOC -> On this page" id="toc.on_this_page">
          On this page
        </Translate>
      </p>
      <Desktop {...props} />
    </>
  );
}
