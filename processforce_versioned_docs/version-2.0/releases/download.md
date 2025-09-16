---
sidebar_position: 3
---

import Releases from "../releases.json";
import ApiReleases from "../api-releases.json";
import LicenseServerReleases from "../license-server-releases.json";

# Download

## CompuTec ProcessForce Extension

Here you can download all CompuTec ProcessForce versions for SAP Business One 10.0.

:::note
    Read more about the system requirements, first installation, and the upgrade of CompuTec ProcessForce extension.
:::

:::note CompuTec ProcessForce and SAP Business One compatibility
    It is possible to use any SAP Business One 10.0 version with any CompuTec ProcessForce 10.0 version.

    We always recommend using the latest available version.

    If you decide to use any previous versions of SAP Business One, please avoid FP2105 HF1 and FP2108, as there is a DI API bug that does not allow synchronization of CompuTec ProcessForce Manufacturing Orders to SAP Business One Production Orders: [3098465 - Error While Updating Production Orders Using the Data Interface (DI API)](https://launchpad.support.sap.com/#/notes/3098465)

    It was fixed by SAP in FP2108 HF1.
:::

### Latest Release

<table>
  <tr>
    <th>Extension Version</th>
    <th>Supported CompuTec<br />License Server Version</th>
    <th>Build</th>
    <th>Release Date</th>
    <th>Installer for<br />Lightweight Deployment</th>
  </tr>
  <tr>
    <td>{Releases[0].release_name}</td>
    <td>{Releases[0].supported_license_server_version}</td>
    <td>{Releases[0].build}</td>
    <td style={{ whiteSpace: "nowrap" }}>{Releases[0].release_date}</td>
    <td><a href={Releases[0].download_url}>Download</a></td>
  </tr>
</table>

<details>
  <summary>Previous Releases</summary>
  <table>
    <tr>
      <th>Extension Version</th>
      <th>Supported CompuTec<br />License Server Version</th>
      <th>Build</th>
      <th>Release Date</th>
      <th>Installer for<br />Lightweight Deployment</th>
    </tr>
    {Releases.slice(1).map((data) => (
      <tr>
        <td>{data.release_name}</td>
        <td>{data.supported_license_server_version}</td>
        <td>{data.build}</td>
        <td style={{ whiteSpace: "nowrap" }}>{data.release_date}</td>
        <td><a href={data.download_url}>Download</a></td>
      </tr>
    ))}
  </table>
</details>

## CompuTec ProcessForce API

Here you can download CompuTec ProcessForce API installers.

:::note
    CompuTec ProcessForce API is not installed automatically with CompuTec ProcessForce 10.0. CompuTec ProcessForce extension doesn't need it installed as it uses the API .dll directly from its folder.

    If you use CompuTec PDC 2.x or lower, CompuTec WMS Server, CompuTec AppEngine or you wrote an external application which consumes it – you have to install it manually in these cases.

    CompuTec PDC 3.x and higher is based on CompuTec AppEngine and doesn't require local CompuTec ProcessForce API installation any more.

    Please also note that if you use CompuTec ProcessForce API on the same machine where ProcessForce extension is used, you need to first upgrade CompuTec ProcessForce API to the same version as the new ProcessForce extension before you start its upgrade. Otherwise, the upgrade will fail.
:::

### Latest Release

<table>
  <tr>
    <th>CompuTec ProcessForce API Version</th>
    <th>Build</th>
    <th>Version number in<br />Windows Apps and<br />Features list</th>
    <th>Installer</th>
  </tr>
  <tr>
    <td>{ApiReleases[0].release_name}</td>
    <td>{ApiReleases[0].build}</td>
    <td>{ApiReleases[0].version_number}</td>
    <td><a href={ApiReleases[0].download_url}>Download</a></td>
  </tr>
</table>

<details>
<summary>Previous Releases</summary>
  <table>
    <tr>
      <th>CompuTec ProcessForce API Version</th>
      <th>Build</th>
      <th>Version number in<br />Windows Apps and<br />Features list</th>
      <th>Installer</th>
    </tr>
    {ApiReleases.slice(1).map((data) => (
      <tr>
        <td>{data.release_name}</td>
        <td>{data.build}</td>
        <td>{data.version_number}</td>
        <td><a href={data.download_url}>Download</a></td>
      </tr>
    ))}
  </table>
</details>

## CompuTec License Service

Here you can download CompuTec License Server for CompuTec ProcessForce.

:::caution
    CompuTec License Server can be installed in Windows environment only.
:::

:::danger
    Remove previous version of CompuTec ProcessForce License Server (1.0.0.0) and SAP COM License Bridge in case you used them (with CompuTec ProcessForce 8.81 / 8.82 / 9.0 PL05 - PL08 HotFix) before installing the new version.

    Remove previous version of CompuTec ProcessForce, and CompuTec ProcessForce API if it's lower than version 10.
:::

:::info
    You can find a guide on how to set up CompuTec License Server here: [License Server Installation Guide](../administrator-guide/licensing/license-server/computec-license-server-installation.md).
:::

### Latest Release

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
