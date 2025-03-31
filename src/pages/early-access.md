
## CompuTec Early Access Program

The Early Access Program is designed for partners who wish to contribute to pre-release testing of plugins and the CompuTec Framework. To apply for early access, please create a support ticket at [https://support.computec.pl](https://support.computec.pl) to obtain an Access token for the Early Access Program.

## Prerequisites

Before enabling the Early Access configuration, ensure the following:

- Download and install the latest [AppEngine](https://learn.computec.one/docs/appengine/2.0/releases/appengine/download).
- Follow the installation steps provided in the [AppEngine Installation Guide](https://learn.computec.one/docs/appengine/2.0/administrators-guide/installation).
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
