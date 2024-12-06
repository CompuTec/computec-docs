
## CompuTec Early Access Program

The Early Access Program is designed for partners who wish to contribute to pre-release testing of plugins and the CompuTec Framework. To apply for early access, please create a support ticket at `www.support.computec.pl` to obtain an API token for the Early Access Program.

## Prerequisites

Before enabling the Early Access configuration, ensure the following:

- Download and install the latest [AppEngine](https://learn.computec.one/docs/appengine/next/releases/appengine/download)
- Follow the installation steps provided in the [AppEngine Installation Guide](https://learn.computec.one/docs/appengine/next/administrators-guide/installation).
- The installation steps for the WMS server can be found [here](https://learn.computec.one/docs/wms/administrator-guide/installation/overview).

### How to Enable Early Access Plugins in AppEngine Store

In the Administration Panel, navigate to Configuration -> Advanced Configuration. In the Plugin Repository Tab, enable the repository with the address: `https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json`.

Create a file named `CtNugetConfig.config` with the content provided below, replacing APIKEY with your API key. Save this file in the AppEngine Installation Directory at C:\Program Files\CompuTec AppEngine\.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
   
  <packageSources>
    <add key="DevatAzure" value="https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <DevatAzure>
        <add key="Username" value="earlyaccess@computec.pl" />
        <add key="ClearTextPassword" value="APIKEY"/>
      </DevatAzure>
  </packageSourceCredentials>
</configuration>
```

Please ensure you replace `APIKEY` with the actual API key provided for early access.

## Releases

The table below provides links for downloading various components of the CompuTec WMS 3.0 release. These versions are compatible with SAP Business One and ProcessForce, ensuring seamless integration for your warehouse management needs.

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
    <td>3.2412.1-rc-05</td>
    <td rowspan="5">3.2412.1-rc-05</td>
    <td><a href="https://download.computec.one/software/wms/server/releases/CompuTec.WMS.Server_3.2412.1-rc-05.msi">Download</a></td>
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
    <td><a href="https://download.computec.one/software/wms/client/windows/releases/CompuTecWMSClientWindows_3.2412.1-rc-05.msi">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Windows CE</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/ce/releases/CompuTecWMSClientWindowsCE_3.2412.1-rc-05.CAB">Download</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>CompuTec WMS Client Android</td>
    <td>-</td>
    <td><a href="https://download.computec.one/software/wms/client/android/releases/CompuTec.Client.Net-3.2412.1-rc-05.apk">Download</a></td>
    <td>-</td>
  </tr>
</table>
