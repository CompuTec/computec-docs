import React from "react";

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { useLayoutDoc } from "@docusaurus/plugin-content-docs/client";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type DocCardProps = React.PropsWithChildren<{
  title: string;
  description: string | React.ReactElement;
  image: string;
  pluginId: string;
}>;

export default function DocCard(props: DocCardProps) {
  const { path } = useLayoutDoc("index", props.pluginId);

  return (
    <Grid key={props.title} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
      <Link
        to={path}
        style={{
          display: "flex",
          color: "inherit",
          textDecoration: "none",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: -1,
            border: "1px solid transparent",
            borderRadius: 2,
            transition: "all 0.1s ease-in-out",
            "&:hover": {
              cursor: "pointer",
              borderColor: "rgb(96, 103, 112)",
              transition: "all 0.3s ease-in-out",
            },
          }}
        ></Box>
        <Card sx={{ borderRadius: 2, width: "100%" }}>
          <CardMedia
            sx={{ height: 110 }}
            image={useBaseUrl(props.image)}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
