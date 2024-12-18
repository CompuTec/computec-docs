import React from "react";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily: `"Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  },
});

export default function MuiThemeProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="light"
      colorSchemeStorageKey="theme"
      modeStorageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
