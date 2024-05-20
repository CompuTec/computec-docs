import React from "react";

import Paginator from "@theme-original/DocItem/Paginator";
import { Props } from "@theme/DocPaginator";

import Giscus from "@site/src/components/Giscus";

export default function PaginatorWrapper(props: Props) {
  return (
    <>
      <Paginator {...props} />
      <Giscus />
    </>
  );
}
