---
sidebar_position: 2
---

import Releases from "../../../pdc-releases.json";

# Download

:::caution
    In order to use this plugin, you have to install the CompuTec ProcessForce plugin first.
:::

<table>
  <tr>
    <th>Version</th>
    <th>Build</th>
    <th>Release Date</th>
    <th>Package</th>
    <th>Minimal AppEngine Version</th>
    <th>Minimal related ProcessForce version</th>
  </tr>
  {Releases.map((data) => (
    <tr>
      <td>{data.version}</td>
      <td>{data.build}</td>
      <td>{data.release_date}</td>
      {data.download_url ? <td><a href={data.download_url}>Download</a></td> : <td>-</td>}
      <td>{data.minimal_ae_version}</td>
      <td>{data.requirements[0]}</td>
    </tr>
  ))}
</table>
