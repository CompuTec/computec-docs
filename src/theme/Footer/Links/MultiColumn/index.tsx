import React from "react";

import Grid, { Grid2Props } from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import LinkItem from "../../LinkItem";
import { MultiColumnFooterLinks } from "..";

interface ColumnLinkItemProps {
  item: MultiColumnFooterLinks[number]["items"][number];
}

function ColumnLinkItem({ item }: ColumnLinkItemProps) {
  return <LinkItem item={item} />;
}

interface ColumnProps extends Grid2Props {
  column: MultiColumnFooterLinks[number];
}

function Column({ column, ...rest }: ColumnProps) {
  return (
    <Grid key={column.title} {...rest}>
      <Stack direction="column" spacing={0} alignItems="flex-start">
        <Typography variant="subtitle2" fontWeight={600}>
          {column.title}
        </Typography>
        {column.items.map((item) => (
          <ColumnLinkItem key={item.label} item={item} />
        ))}
      </Stack>
    </Grid>
  );
}

interface FooterLinksMultiColumnProps {
  columns: MultiColumnFooterLinks;
}

export default function FooterLinksMultiColumn({
  columns,
}: FooterLinksMultiColumnProps) {
  return (
    <Grid container spacing={5}>
      {columns.map((column) => (
        <Column
          key={column.title}
          column={column}
          size={{ xs: 12, md: 12 / columns.length }}
        />
      ))}
    </Grid>
  );
}
