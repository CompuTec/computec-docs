---
sidebar_position: 3
---
import LicenseServerReleases from "../license-server-releases.json";

# Download

## CompuTec ProcessForce Plugins

CompuTec ProcessForce extends the capabilities of SAP Business One for advanced manufacturing through a set of dedicated plugins. These plugins are designed to work seamlessly together, providing flexibility, scalability and performance across different business scenarios.

---

## Main Plugins

### CompuTec AppEngine Plugin

    - The core engine that runs background services, scheduled tasks, and automated processes in CompuTec ProcessForce.
    - Handles calculations, data synchronization and other system-level operations.
    - Directly available for download from the **AppEngine Store**. ➡️ Learn how to [install Plugins](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/plugins/overview)

### CompuTec ProcessForce API

    - Provides a structured interface for integrating external systems and applications with CompuTec ProcessForce.
    - Enables smooth data exchange and automation between SAP Business One and third-party solutions.
    - Useful for custom integrations and connecting with other enterprise systems.

### CompuTec ProcessForce UI Plugin

    - Delivers the front-end user experience within SAP Business One.
    - Manages forms, screens and interaction workflows tailored to manufacturing users.
    - Ensures a consistent, user-friendly interface for day-to-day operations.

---

## CompuTec License Service

Here, you can download CompuTec License Server for CompuTec ProcessForce.

::caution
    CompuTec License Server can be installed in Windows environment only.
:::

:::danger
    - Remove previous version of CompuTec ProcessForce License Server (1.0.0.0) and SAP COM License Bridge in case you used them (with CompuTec ProcessForce 8.81 / 8.82 / 9.0 PL05 - PL08 HotFix) before installing the new version.
    - Remove previous version of CompuTec ProcessForce, and CompuTec ProcessForce API if it's lower than version 10.
:::

:::info
    You can find a guide on how to set up CompuTec License Server here: [License Server Installation Guide](../administrator-guide/licensing/license-server/computec-license-server-installation.md).
:::

<table>
  <tr>
    <th>CompuTec License Server Version</th>
    <th>Minimal Related ProcessForce Version</th>
    <th>Installer</th>
  </tr>
  <tr>
    <td>{LicenseServerReleases[0].build}</td>
    <td>{LicenseServerReleases[0].minimal_pf_version}</td>
    <td><a href={LicenseServerReleases[0].download_url}>Download</a></td>
  </tr>
</table>

<details>
<summary>Previous Releases</summary>
  <table>
    <tr>
      <th>CompuTec License Server Version</th>
      <th>Minimal Related ProcessForce Version</th>
      <th>Installer</th>
    </tr>
    {LicenseServerReleases.slice(1).map((data) => (
      <tr>
        <td>{data.build}</td>
        <td>{data.minimal_pf_version}</td>
        <td><a href={data.download_url}>Download</a></td>
      </tr>
    ))}
  </table>
</details>

---
