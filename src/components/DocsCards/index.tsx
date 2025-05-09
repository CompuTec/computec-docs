import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import DocCard from "./DocsCard";

import docsCards from "./cards";

export default function DocsCards() {
  return (
    <Container>
      <Grid container spacing={3} py={8} alignItems="stretch">
        {docsCards.map((card) => (
          <DocCard {...card} key={card.pluginId} />
        ))}
      </Grid>
    </Container>
  );
}
