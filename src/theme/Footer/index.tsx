import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import ComputecLogo from "../../../static/img/CompuTecLogoDark.svg";

import FooterLayout from "./Layout";
import FooterNewsletter from "./Newsletter";
import FooterSocial from "./Social";
import FooterLinks from "./Links";
import FooterCopyright from "./Copyright";

const socials = [
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/1188002/",
  },
  {
    icon: XIcon,
    href: "https://twitter.com/ProcessForce",
  },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/channel/UC-pd-rJVTCemfKp2WgyKajQ",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/processforce/",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/CompuTec-SA-140494809329269",
  },
];

export default function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) return null;

  const { copyright, links } = footer;

  return (
    <FooterLayout>
      {/* <FooterNewsletter /> */}
      <FooterSocial logo={ComputecLogo} items={socials} />
      <FooterLinks links={links} />
      <FooterCopyright copyright={copyright} />
    </FooterLayout>
  );
}
