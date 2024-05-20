import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function FooterLayout({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={1} sx={{ paddingY: 3 }} className="footer--dark">
        <Container>
          <Stack
            direction="column"
            divider={
              <Divider
                orientation="horizontal"
                flexItem
                sx={{ bgcolor: "#222" }}
              />
            }
            spacing={3}
            useFlexGap
          >
            {children}
          </Stack>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
