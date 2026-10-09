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
        <Admonition type="info">
          <p>You are currently viewing documentation for <b>CompuTec AppEngine 3.0 (.NET 8)</b>.</p>
          <p>If you are working with older environments, you may need the documentation for <b>CompuTec AppEngine 2.0</b> based on .NET Framework: <a href="https://learn.computec.one/docs/appengine/2.0/">https://learn.computec.one/docs/appengine/2.0/</a>.</p>
          <p>Please note that <b>CompuTec AppEngine 2.0</b> will be supported only <b>until December 31, 2026</b>. After this date, the product will no longer receive regular support or maintenance updates. <a href="https://learn.computec.one/docs/processforce/administrator-guide/installation/update-to-ct-pf-30">Read more</a></p>
          <p>As <b>CompuTec AppEngine 3.0</b> introduces a new architecture, all CompuTec components must be updated together to ensure full compatibility.</p>
          <p>Please review the <b>CompuTec AppEngine 3.0</b> documentation before starting your installation or upgrade process.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "appengine" && activeDocContext.activeVersion?.label === "2.0" && (
        <Admonition type="warning">
          <p>You are currently viewing documentation for <b>CompuTec AppEngine 2.0 (.NET Framework)</b>, which will be supported only <b>until December 31, 2026</b>. After this date, the product will no longer receive regular support or maintenance updates. <a href="https://learn.computec.one/docs/processforce/2.0/administrator-guide/installation/update-to-ct-pf-30">Read more</a></p>
          <p>We recommend upgrading to <b>CompuTec AppEngine 3.0</b> built on .NET 8, which provides better performance and a modern, centralized installation process for CompuTec ProcessForce and other CompuTec solutions.</p>
          <p>Please note that <b>CompuTec AppEngine 3.0</b> has a different architecture, and all CompuTec components need to be updated together to ensure full compatibility.</p>
          <p>Please review the <a href="https://learn.computec.one/docs/appengine">CompuTec AppEngine 3.0 documentation</a> before starting your installation or upgrade process.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "processforce" && activeDocContext.activeVersion?.label === "3.0" && (
        <Admonition type="info">
          <p>You are currently viewing documentation for <b>CompuTec ProcessForce 3.0</b>, which is a plugin installed and managed through <b>CompuTec AppEngine 3.0</b>, built on <b>.NET 8</b>. If you are working with older environments, you may need the documentation for <b>CompuTec ProcessForce 2.0</b>: <a href="https://learn.computec.one/docs/processforce/2.0/">https://learn.computec.one/docs/processforce/2.0/</a>.</p>
          <p>Please note that <b>CompuTec ProcessForce 2.0</b> will be supported only <b>until December 31, 2026</b>. After this date, the product will no longer receive regular support or maintenance updates. <a href="https://learn.computec.one/docs/processforce/administrator-guide/installation/update-to-ct-pf-30">Read more</a></p>
          <p><b>CompuTec AppEngine 3.0</b> introduces a new architecture, and all CompuTec components, including the <b>CompuTec ProcessForce 3.0 plugin</b>, must be updated together to ensure full compatibility.</p>
          <p><b>Before starting your installation or upgrade process</b>, we strongly recommend reviewing the <a href="https://learn.computec.one/docs/appengine/">CompuTec AppEngine 3.0</a> and <a href="https://learn.computec.one/docs/processforce/">CompuTec ProcessForce 3.0</a> documentation.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "processforce" && activeDocContext.activeVersion?.label === "2.0" && (
        <Admonition type="warning">
          <p>You are currently viewing documentation for <b>CompuTec ProcessForce 2.0</b>, which will be supported only <b>until December 31, 2026</b>. After this date, the product will no longer receive regular support or maintenance updates.</p>
          <p>We recommend <a href="https://learn.computec.one/docs/processforce/2.0/administrator-guide/installation/update-to-ct-pf-30">upgrading to <b>CompuTec ProcessForce 3.0</b></a>, which is a plugin installed and managed through <b>CompuTec AppEngine 3.0</b>, built on <b>.NET 8</b>.</p>
          <p>However, please note that <b>CompuTec AppEngine 3.0</b> has a different architecture, and all CompuTec components, including the <b>CompuTec ProcessForce 3.0 plugin</b>, need to be updated together to ensure full compatibility.</p>
          <p><b>Before starting your installation or upgrade process</b>, we strongly recommend reviewing the <a href="https://learn.computec.one/docs/appengine">CompuTec AppEngine 3.0</a> and <a href="https://learn.computec.one/docs/processforce/">CompuTec ProcessForce 3.0</a> documentation.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "wms" && activeDocContext.activeVersion?.label === "3.0" && (
        <Admonition type="info">
          <p>You are viewing documentation for <b>CompuTec WMS 3.0</b>, which runs on <b>CompuTec AppEngine 3.0 (.NET 8)</b>.</p>
          <p>If you use <b>CompuTec WMS 2.0</b>, see the <a href="https://learn.computec.one/docs/wms/2.0/">CompuTec WMS 2.0 documentation</a>.</p>
          <p>When upgrading to <b>CompuTec WMS 3.0</b>, update all required CompuTec components together to ensure compatibility.</p>
          <p>Before installing or upgrading, review the <a href="/docs/wms/administrator-guide/installation/overview">CompuTec WMS Installation Guide</a> and the system requirements.</p>
        </Admonition>
      )}
      {activePlugin.pluginId === "wms" && activeDocContext.activeVersion?.label === "2.0" && (
        <Admonition type="warning">
          <p>You are viewing documentation for <b>CompuTec WMS 2.0</b>, which is supported until <b>December 31, 2026</b>. After this date, it will no longer receive regular support or maintenance updates.</p>
          <p>We recommend <a href="https://learn.computec.one/docs/wms/administrator-guide/installation/update-to-30">upgrading to <b>CompuTec WMS 3.0</b></a>, which runs on <b>CompuTec AppEngine 3.0 (.NET 8)</b>.</p>
          <p>When upgrading, update all required CompuTec components together to ensure compatibility. <a href="https://learn.computec.one/docs/wms/">Read more</a></p>
        </Admonition>
      )}
      <Content {...props} />
    </>
  );
}
