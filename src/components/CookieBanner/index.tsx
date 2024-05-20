import React from "react";

import Link from "@docusaurus/Link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import useCookies, { CookiesConsent } from "@site/src/hooks/useCookies";

export default function CookieBanner() {
  const [consent, updateConsent] = useCookies();

  if (consent !== CookiesConsent.NOT_SPECIFIED) return null;

  return (
    <Box sx={{ position: "fixed", bottom: 20, width: "100%", zIndex: 100 }}>
      <Container>
        <Paper elevation={4}>
          <Box
            padding={4}
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Box flexGrow={1}>
              <Typography variant="body2">
                Our website uses cookies to give you a better experience.{" "}
                <Link to="/policy">Learn more</Link>
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" gap={2}>
              <Button
                variant="contained"
                onClick={() => updateConsent(CookiesConsent.ALLOWED)}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                onClick={() => updateConsent(CookiesConsent.DENIED)}
              >
                Reject
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
