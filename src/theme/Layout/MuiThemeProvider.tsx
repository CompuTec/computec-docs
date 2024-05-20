import React from "react";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const theme = extendTheme({
  typography: {
    fontFamily: `"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  },
});

export default function MuiThemeProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <CssVarsProvider
      theme={theme}
      attribute="data-theme"
      colorSchemeStorageKey="theme"
      modeStorageKey="theme"
    >
      {children}
    </CssVarsProvider>
  );
}
