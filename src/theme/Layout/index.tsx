import React from "react";

import Layout from "@theme-original/Layout";
import { Props } from "@theme/Layout";

import MuiThemeProvider from "./MuiThemeProvider";
import CookieBanner from "@site/src/components/CookieBanner";

export default function LayoutWrapper({ children, ...props }: Props) {
  return (
    <Layout {...props}>
      <MuiThemeProvider>
        {children}
        <CookieBanner />
      </MuiThemeProvider>
    </Layout>
  );
}
