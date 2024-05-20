---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import Releases10 from "../releases-10.json";

# Download

Here you can download all required CompuTec WMS files.

:::note
    Before installation please be sure that you:

    - Checked and fulfilled [the prerequirements](../administrator-guide/installation/prerequisites.md) before installing CompuTec WMS Server.
    - You know the [upgrade instructions](../administrator-guide/upgrade.md).
:::

:::warning WMS CompuTec Server restart
    It is required to restart CompuTec Server WMS service at least once in 24 hours in order to make it work properly. Click [here](../administrator-guide/installation/wms-server/overview.md#computec-wms-server-automatic-restart) to find out how to set it up using Windows Task Scheduler.
:::

## Current Releases

Released on 30.04.2024.

:::warning
    Due to changes in the licensing mechanism in the 2.10.19 R3/2.9.19 R3 version, it is required to reassign terminal licenses to terminals after the upgrade.
:::

:::warning
    From version 2.10.22.1, the new WMS desktop client requires installation Microsoft Windows Desktop Runtime (v8.0.0).
    [https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.0-windows-x64-installer?cid=getdotnetcore](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.0-windows-x64-installer?cid=getdotnetcore)
:::

Click [here](/docs/appengine/releases/download/wms) to get AppEngine plugin for Stock Counting.

If you use the ProcessForce 9.3 PL14 R10 / 10.0 R14 or later, you have to install CompuTec License Server in 5.11.0.1 or later version and CompuTec WMS in the latest version.

### Version compatible with SAP Business One 10.0 and ProcessForce 10.0

<table>
  <tr>
    <th>Component</th>
    <th>Version</th>
    <th>Build</th>
    <th>Installer</th>
    <th>The version works with (minimal):</th>
  </tr>
  <tr>
    <td>CompuTec WMS Server</td>
    <td>2.10.22 R2 64-bit version</td>
    <td rowspan="5">2.10.22.2</td>
    <td><a href="https://download.computec.one/software/wms/server/releases/CompuTec_WMS_Server_2.10.22.2_x64.exe">Download</a></td>
    <td>
      <ul>
        <li>
          <p>For CompuTec WMS to work with SAP Business One and ProcessForce:</p>
          <ul>
            <li>SAP Business One 10.0</li>
            <li>ProcessForce from 10.0 R1 to 10.0 R15 HF1</li>
            <li>ProcessForce API in related version</li>
          </ul>
        </li>
        <li>
          <p>For CompuTec WMS to work with SAP Business One (without ProcessForce):</p>
          <ul>
            <li>SAP Business One 10.0</li>
          </ul>
        </li>
      </ul>
      <p>This version requires CompuTec License Server in 5.10.2.9 or later version.</p>
    </td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows Desktop</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_2.10.22.2.msi">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows Desktop (legacy)</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_Legacy_2.10.22.2.msi">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows CE</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/ce/releases/CompuTec_WMS_Client_2.10.22.2.cab">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Android</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/android/releases/CompuTec_WMS_Client_2.10.22.2.apk">Download</a></td>
    <td>-</td>
  </tr>
</table>

### Version compatible with SAP Business One 9.30 and ProcessForce 9.30

<table>
  <tr>
    <th>Component</th>
    <th>Version</th>
    <th>Build</th>
    <th>Installer</th>
    <th>The version works with (minimal):</th>
  </tr>
  <tr>
    <td rowspan="2">CompuTec WMS Server</td>
    <td>2.9.22 R2 32-bit version</td>
    <td rowspan="5">2.9.22.2</td>
    <td><a href="https://download.computec.one/software/wms/server/releases/CompuTec_WMS_Server_2.9.22.2_x86.exe">Download</a></td>
    <td>
      <ul>
        <li>
          <p>For CompuTec WMS to work with SAP Business One and ProcessForce:</p>
          <ul>
            <li>SAP Business One 9.3</li>
            <li>ProcessForce 9.3 PL12 R1 (x86) to 9.3 PL14 R10 (x86)</li>
            <li>ProcessForce API in related version</li>
          </ul>
        </li>
        <li>
          <p>For CompuTec WMS to work with SAP Business One (without ProcessForce):</p>
          <ul>
            <li>SAP Business One 9.3</li>
          </ul>
        </li>
      </ul>
      <p>This version requires CompuTec License Server in 5.10.2.9 or later version.</p>
    </td>
  </tr>
  <tr>
    <td>2.9.22 R2 64-bit version</td>
    <td><a href="https://download.computec.one/software/wms/server/releases/CompuTec_WMS_Server_2.9.22.2_x64.exe">Download</a></td>
    <td>
      <ul>
        <li>
          <p>For CompuTec WMS to work with SAP Business One and ProcessForce:</p>
          <ul>
            <li>SAP Business One 9.3</li>
            <li>ProcessForce 9.3 PL12 R1 (x64) to 9.3 PL14 R10 (x64)</li>
            <li>ProcessForce API in related version</li>
          </ul>
        </li>
        <li>
          <p>For CompuTec WMS to work with SAP Business One (without ProcessForce):</p>
          <ul>
            <li>SAP Business One 9.3</li>
          </ul>
        </li>
      </ul>
      <p>This version requires CompuTec License Server in 5.10.2.9 or later version.</p>
    </td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_2.9.22.2.msi">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows CE</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/ce/releases/CompuTec_WMS_Client_2.9.22.2.cab">Download</a></td>
    <td>-</td>
  </tr>
</table>

## Previous Releases

<Tabs>
  <TabItem value="10" label="Version 10.0" default>
    {Releases10.map((data) => (
      <details>
        <summary>{data.version}</summary>
        <div>
          <p>Release date: {data.release_date}</p>
          <table>
            <tr>
              <th>Component</th>
              <th>Version</th>
              <th>Build</th>
              <th>Installer</th>
              <th>The version works with (minimal):</th>
            </tr>
            <tr>
              <td>CompuTec WMS Server</td>
              <td>{data.version} 64-bit version</td>
              <td rowspan="5">{data.build}</td>
              <td><a href={`https://download.computec.one/software/wms/server/releases/CompuTec_WMS_Server_${data.build}_x64.exe`}>Download</a></td>
              <td>
                <ul>
                  <li>
                    <p>For CompuTec WMS to work with SAP Business One and ProcessForce:</p>
                    <ul>
                      <li>SAP Business One 10.0</li>
                      <li>ProcessForce from {data.pf_from} {data.pf_to ? `to ${data.pf_to}` : "or newer"}</li>
                      <li>ProcessForce API in related version</li>
                    </ul>
                  </li>
                  <li>
                    <p>For CompuTec WMS to work with SAP Business One (without ProcessForce):</p>
                    <ul>
                      <li>SAP Business One 10.0</li>
                    </ul>
                  </li>
                </ul>
                <p>This version requires CompuTec License Server in {data.license_server} or later version.</p>
              </td>
            </tr>
            {data.has_new_desktop ? (
              <>
                <tr>
                  <td>CompuTec WMS Client Windows Desktop (new)</td>
                  <td>-</td>
                  <td><a href={`https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_${data.build}.msi`}>Download</a></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CompuTec WMS Client Windows Desktop (old)</td>
                  <td>-</td>
                  <td><a href={`https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_Legacy_${data.build}.msi`}>Download</a></td>
                  <td>-</td>
                </tr>
              </>
            ) : (
              <tr>
                <td>CompuTec WMS Client Windows Desktop</td>
                <td>-</td>
                <td><a href={`https://download.computec.one/software/wms/client/windows/releases/CompuTec_WMS_Client_${data.build}.msi`}>Download</a></td>
                <td>-</td>
              </tr>
            )}
            <tr>
              <td>CompuTec WMS Client Windows CE</td>
              <td>-</td>
              <td><a href={`https://download.computec.one/software/wms/client/ce/releases/CompuTec_WMS_Client_${data.build}.cab`}>Download</a></td>
              <td>-</td>
            </tr>
            {data.has_android && (
              <tr>
                <td>CompuTec WMS Client Android</td>
                <td>-</td>
                <td><a href={`https://download.computec.one/software/wms/client/android/releases/CompuTec_WMS_Client_${data.build}.apk`}>Download</a></td>
                <td>-</td>
              </tr>
            )}
          </table>
        </div>
      </details>
    ))}
  </TabItem>
  <TabItem value="93" label="Version 9.3">
  </TabItem>
</Tabs>

## CompuTec Gateway Service

1.2.0.20 version: [Download](https://download.computec.one/software/gateway/releases/CompuTec_Gateway_1.2.0.20.msi)

(Click [here](../administrator-guide/computec-gateway-service/computec-gateway-service-installation.md) to find out more)
