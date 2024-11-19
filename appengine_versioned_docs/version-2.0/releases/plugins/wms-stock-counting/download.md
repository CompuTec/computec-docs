---
sidebar_position: 1
---

import Releases from "../../../wms-releases.json";

# Download

## CompuTec WMS Compatibility Tools
Once the GRPO document is created, the batch status is set according to the option selected in:
Item Details > Default Batch Status for SAP Receipt Documents.

[Download](https://download.computec.one/software/appengine/plugins/wms/releases/CompuTec_WMS_CompatibilityTools_2.10.2.92.zip)

## WMS Stock Counting

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
  </tr>
  {Releases.map((data) => (
    <tr>
      <td>{data.version}</td>
      <td>{data.build}</td>
      <td>{data.release_date}</td>
      <td><a href={data.download_url}>Download</a></td>
      <td>{data.minimal_ae_version}</td>
    </tr>
  ))}
</table>
