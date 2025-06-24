---
sidebar_position: 2
---

import Releases10 from "../releases-10.json";
import Releases93 from "../releases-93.json";

# Download

:::danger
    Please be sure to check and fulfill [the requirements](../administrator-guide/installation/requirements.md) before installing CompuTec PDC.
:::

## CompuTec License Server

:::info
    You can find a guide on how to license CompuTec PDC [here](../administrator-guide/pdc-licensing/overview.md).
:::

## CompuTec ProcessForce API

:::info
    **CompuTec ProcessForce API** is being installed automatically since **CompuTec ProcessForce 9.10** – you do not have to install it manually if **SAP Business One** and **CompuTec ProcessForce** is already installed on the machine.

    If this is a machine without SAP Business One installed, then you need to install **SAP Business One DI API**, and **CompuTec ProcessForce API** in the same 32-bit or 64-bit version as **CompuTec PDC**.
:::

## CompuTec PDC

:::info
    You can find a guide on how to install CompuTec PDC application [here](../administrator-guide/installation/first-installation.md).
:::

:::danger
    Due to the major change in the new version of the application (1.2.2.1 version), please reload terminal licenses. You can do that by clicking Reset Terminals button in License Terminal window in **CompuTec License Server** application. Reassign terminal licenses after that.
:::

## Releases

:::danger
    As of the following releases: **3.10.6.1** (related ProcessForce version: 10.0 Release 6 (R6)), **3.93.15.1** (related ProcessForce version: 9.3 PL14 Release 2 (R2)) **CompuTec PDC is released as an CompuTec AppEngine plugin only**.

    Browse new versions [here](/docs/appengine/2.0/releases/plugins/pdc/download).
:::

### For 10.0

These versions require CompuTec License Server in 5.10.1.1 version.

<table>
  <tr>
    <th>Version</th>
    <th>Download</th>
    <th>Database / ProcessForce API related version</th>
    <th>Release date</th>
  </tr>
  {Releases10.map((data) => (
    <tr>
      <td>{data.build}</td>
      <td><a href={data.installer_url}>Installer</a><br /><a href={data.plugin_url}>AppEngine Plugin</a></td>
      <td>{data.related_version}</td>
      <td>{data.release_date}</td>
    </tr>
  ))}
</table>

\* - until next CompuTec PDC release

### For 9.3

<table>
  <tr>
    <th>Version</th>
    <th>Download</th>
    <th>Database / ProcessForce API related version</th>
    <th>Release date</th>
  </tr>
  {Releases93.map((data) => (
    <tr>
      <td>{data.build}</td>
      <td><a href={data.installer_url}>Installer</a><br /><a href={data.plugin_url}>AppEngine Plugin</a></td>
      <td>{data.related_version}</td>
      <td>{data.release_date}</td>
    </tr>
  ))}
</table>

\* - until next CompuTec PDC release

## CompuTec Gateway Manager

To download the latest version of CompuTec Gateway Manager, click [here](https://learn.computec.one/docs/labels/releases/download/#computec-gateway-manager).

---
