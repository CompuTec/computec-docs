import React from "react";

import Typography from "@mui/material/Typography";

interface FooterCopyrightProps {
  copyright: string;
}

export default function FooterCopyright({ copyright }: FooterCopyrightProps) {
  return (
    <Typography variant="body2" align="center">
      {copyright}
    </Typography>
  );
}
