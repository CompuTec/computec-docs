import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';

import {
  useActiveDocContext,
  useActivePlugin,
} from '@docusaurus/plugin-content-docs/client';

import Admonition from '@theme/Admonition';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  const activePlugin = useActivePlugin();
  const activeDocContext = useActiveDocContext(activePlugin.pluginId);

  return (
    <>
      {activePlugin.pluginId === "appengine" && activeDocContext.activeVersion?.label === "3.0" && (
        <Admonition type="warning">
          <p>You are viewing documentation for <b>CompuTec AppEngine 3.0 (.NET 8)</b>.</p>
          <p>If you are working with older environments, you may be looking for <b>CompuTec AppEngine 2.0</b> based on .NET Framework, which is still supported: <a href="https://learn.computec.one/docs/appengine/2.0/">https://learn.computec.one/docs/appengine/2.0/</a></p>
          <p>As <b>CompuTec AppEngine 3.0</b> introduces a new architecture, all CompuTec components must be updated together.</p>
          <p>Please familiarize yourself with the <b>CompuTec AppEngine 3.0</b> documentation before installing it.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "appengine" && activeDocContext.activeVersion?.label === "2.0" && (
        <Admonition type="warning">
          <p>You are viewing documentation for <b>CompuTec AppEngine 2.0 (.NET Framework)</b>, which is still supported.</p>
          <p>We recommend upgrading to <b>CompuTec AppEngine 3.0</b> built on .NET 8, which provides better performance and a modern, centralized installation process for CompuTec ProcessForce and other CompuTec solutions.</p>
          <p>However, please note that <b>CompuTec AppEngine 3.0</b> has a different architecture, and all CompuTec components need to be updated together.</p>
          <p>Please familiarize yourself with the <a href="https://learn.computec.one/docs/appengine">CompuTec AppEngine 3.0 documentation</a> before installing.</p>
        </Admonition>
      )}
      <Content {...props} />
    </>
  );
}
