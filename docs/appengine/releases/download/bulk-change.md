---
sidebar_position: 4
---

import Releases from "../../bulk-change-releases.json";

# CompuTec Bulk Change Plugin

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
    <th>This version works with</th>
  </tr>
  {Releases.map((data) => (
    <tr>
      <td>{data.version}</td>
      <td>{data.build}</td>
      <td>{data.release_date}</td>
      <td><a href={data.download_url}>Download</a></td>
      <td>{data.minimal_ae_version}</td>
      <td>
        <ul>
            {data.requirements.map((requirement) => (
                <li>{requirement}</li>
            ))}
        </ul>
      </td>
    </tr>
  ))}
</table>
