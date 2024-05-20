import React from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@docusaurus/Link";

export type FooterSocialItem = {
  icon: React.ComponentType;
  href: string;
};

interface FooterSocialItemProps {
  item: FooterSocialItem;
}

function FooterSocialItem({ item }: FooterSocialItemProps) {
  const { href, icon: Icon } = item;

  return (
    <Link href={href} rel="noopener" target="_blank" style={{ color: "#fff" }}>
      <Icon />
    </Link>
  );
}

interface FooterSocialProps {
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: FooterSocialItem[];
}

export default function FooterSocial(props: FooterSocialProps) {
  const { logo: Logo, items } = props;

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display={{ xs: "none", sm: "flex" }}>
        <Logo width={200} overflow="visible" />
      </Box>

      <Stack direction="row" spacing={2}>
        {items.map((item) => (
          <FooterSocialItem key={item.href} item={item} />
        ))}
      </Stack>
    </Stack>
  );
}
