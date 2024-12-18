import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import docsCards from "./cards";

export default function DocsCards() {
  return (
    <Container>
      <Grid container spacing={3} py={8} alignItems="stretch">
        {docsCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
            <Link
              to={card.link}
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
                  sx={{ height: 130, backgroundPosition: "left" }}
                  image={useBaseUrl(card.image)}
                  title={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
