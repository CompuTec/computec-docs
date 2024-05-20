import React from "react";

import Desktop from "@theme-original/DocSidebar/Desktop";

import { Resizable } from "re-resizable";

export default function DesktopWrapper(props) {
  const [width, setWidth] = React.useState(300);

  return (
    <Resizable
      size={{ width, height: "100%" }}
      minWidth={300}
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      onResizeStart={(event) => event.preventDefault()}
      onResize={(_event, _dir, _ref, delta) => {
        document.documentElement.style.setProperty(
          "--doc-sidebar-width",
          `${width + delta.width}px`
        );
      }}
      onResizeStop={(_event, _dir, _ref, delta) => {
        setWidth(width + delta.width);
      }}
    >
      <Desktop {...props} />
    </Resizable>
  );
}
