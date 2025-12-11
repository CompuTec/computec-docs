---
sidebar_position: 2
---

# CompuTec Early Access Program

The **CompuTec Early Access Program** allows partners to participate in pre-release (release candidate) testing of CompuTec plugins and the CompuTec Framework. This program is designed for organizations that want early visibility into upcoming features and are willing to provide feedback before general release.

To request access, submit a support ticket at [https://support.computec.pl](https://support.computec.pl). After your request is approved, you will receive an **Early Access token** (API key) required to enable the Early Access repository.

## Prerequisites

Before you configure Early Access on your system, make sure the following requirements are met:

1. **Download and install the latest CompuTec AppEngine**:  
Follow the steps outlined in the [CompuTec AppEngine Installation Guide](http://localhost:3000/docs/appengine/administrators-guide/configuration-and-administration/installation).

2. **Install the CompuTec WMS server, if required for your environment**:  
Installation instructions are available in the [CompuTec WMS documentation](https://learn.computec.one/docs/wms/administrator-guide/installation/overview/).

## Enabling Early Access plugins in the CompuTec AppEngine Store

Follow the steps below to enable access to Early Access plugins.

### Step 1: Enable the Early Access Repository

1. Open the CompuTec AppEngine **Administration Panel**.
2. Go to **Configuration** > **Advanced Configuration**.
3. Select the **Plugin Repository** tab.
4. Enable the repository using the following URL: [https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json](https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json)

### Step 2: Create the configuration file

1. Create a configuration file named **CtNugetConfig.config** with the following content, making sure to replace `APIKEY` with your API key:

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

2. Save the created file in **CompuTec AppEngine Installation Directory** at `C:\Program Files\CompuTec\AppEngine`.
