import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import type {Props} from '@theme/Heading';

import styles from './styles.module.css';

export default function Heading({as: As, id, ...props}: Props): JSX.Element {
  const brokenLinks = useBrokenLinks();
  const {
    navbar: {hideOnScroll},
  } = useThemeConfig();
  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} />;
  }

  brokenLinks.collectAnchor(id);

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}. Click to copy.',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    },
  );

  return (
    <As
      {...props}
      className={clsx(
        'anchor',
        hideOnScroll
          ? styles.anchorWithHideOnScrollNavbar
          : styles.anchorWithStickyNavbar,
        props.className,
      )}
      id={id}>
      {props.children}
      <Link
        className="hash-link"
        to={`#${id}`}
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.location.hash = id;
            navigator.clipboard.writeText(window.location.href).catch((err) => {});
          }
        }}
        aria-label={anchorTitle}
        title={anchorTitle}>
        &#8203;
      </Link>
    </As>
  );
}
