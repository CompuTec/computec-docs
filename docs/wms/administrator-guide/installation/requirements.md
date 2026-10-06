---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# System Requirements

**CompuTec WMS 3.0 Plugin** is a certified extension built on the **CompuTec AppEngine framework**. It follows the same rules and configuration standards as all CompuTec AppEngine plugins.

This section describes the minimum system requirements needed for CompuTec WMS 3.0 Plugin to run correctly.

## Software requirements

### SAP Business One

    - **Minimum supported version:** 10.0 FP 2502 (or higher)
    - **SAP Business One Web Client**: Must be installed and properly configured.

### CompuTec ProcessForce License Requirements

When using CompuTec ProcessForce, the SAP Business One user must have a CompuTec ProcessForce license matching their SAP Business One license (e.g., Limited Logistics or Indirect Access for both SAP Business One and CompuTec ProcessForce).

### Unique Serial Numbers in SAP Business One General Settings

To prevent duplicate serial numbers, set the **Serial Number** option in **Unique Serial Numbers** under I**nventory** tab in **SAP Business One General Settings**.

    ![General Settings](./media/general-settings.png)

### CompuTec AppEngine

    - Download and install the **official release package** from the [**Download**](/docs/appengine/releases/appengine/download) section of our guide. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation)

## Hardware requirements

    :::warning[important]
    For detailed **server and client hardware requirements**, refer to the official [**CompuTec AppEngine documentation**](/docs/appengine/administrators-guide/requirements).
    :::

## Network and security requirements

### Local connectivity

    - CompuTec WMS 3.0 Plugin communicates with the CompuTec AppEngine service over **HTTPS**.

### Outbound access

    - Both the **SAP Business One Web Client endpoint** and **CompuTec AppEngine** must be reachable from the client environment.

### Security

    - Authorization is seamless. After signing in to the SAP Business One Web Client, CompuTec WMS 3.0 Plugin uses the same active session for authentication and authorization.

:::note[info]
For detailed information on **CompuTec AppEngine** installation and configuration, read the official [CompuTec AppEngine Installation Guide](/docs/appengine/administrators-guide/configuration-and-administration/installation).
:::

:::warning
    The CompuTec WMS Server should not be installed on an RDP server or any server that hosts other applications accessing the SAP Business One DI API.

    Since the DI API is single-threaded, simultaneous access by multiple applications can lead to instability. For instance, the SAP Business One desktop client is one such application that uses the DI API. Therefore, it is strongly recommended to avoid installing the CompuTec WMS Server on the same machine as the SAP Business One desktop client.
:::

### Firewall Configuration

Create an inbound rule in Windows Firewall for the required port to ensure CompuTec WMS Server functionality.

<details>
<summary>To get more information, see below.</summary>
<div>
    1. Open: Control Panel > Windows Defender Firewall:

        ![Firewall](./media/control-panel.png)

    2. Click Advanced settings:

        ![Firewall - settings](./media/advanced-settings.png)
    3. Select Inbound Rules and choose New Rule... in the "Actions" window - this runs New Inbound Rule Wizard:

        ![Inbound rule](./media/inbound-rule.png)
    4. Choose "Port" as the rule type:

        ![Port](./media/port.png)
    5. Choose "TCP" protocol and specify "31002" as the local port:

        ![TCP](./media/protocol-port.png)
    6. Choose the "Allow the connection" action:

        ![Allow the connection](./media/action-allow-connection.png)
    7. Choose all profiles:

        ![All Profiles](./media/profiles.png)
    8. Specify the rule name and click "Finish":

        ![CompuTec License Server](./media/computec-wms.png)
</div>
</details>

## Anti-malware Software

Some anti-malware software may block the installation. In such cases, add an exception in the anti-malware software settings.

## Data Restore

If your database now has CompuTec ProcessForce but was previously used without it, make sure to run the Item Details restoration. Without this step, documents involving items without assigned Item Details may fail to create. See more information on [Item Details Restore](./sap-business-one-settings/item-details-restore.md) to find out more.

## Supported Database Servers

CompuTec WMS supports all database versions compatible with the currently supported version of SAP Business One by SAP, which is used together with CompuTec WMS. So, these databases are supported:

- SAP HANA 2.0
- Microsoft SQL Server 2022
- Microsoft SQL Server 2019
- Microsoft SQL Server 2017
- Microsoft SQL Server 2016

## CompuTec ProcessForce API

If CompuTec ProcessForce is installed, CompuTec WMS requires CompuTec ProcessForce API to work correctly. CompuTec ProcessForce API has to be in the exact version as CompuTec ProcessForce installed on the database. [Read more](/docs/wms/administrator-guide/installation/overview)

## Upgrade

:::warning[important]
Before installing CompuTec WMS 3.0, manually uninstall the previous CompuTec WMS Server from Programs and Features.
:::

### Transferring Custom Configurations and Server Settings

When upgrading to version 3.0 from any previous version, you need to manually transfer the Custom Config and Server Settings. To do this, follow the below steps:

1. Locate your previous settings in the default directory:

    ```text
    `C:\Program Files\CompuTec\CompuTec WMS Server\WMSSettings_Old`
    ```

2. Go to the respective sub-folders and run old Settings and Custom Config:

    ![Custom Config](./media/cc-run.webp)

3. Manually transfer the data from the old settings to the corresponding fields in the current installation.

    ![Settings](./media/wms-settings.webp)

    :::note
    There is a "License Server" field in the old settings, and on the new form, there is an "SAP Business One SLD Server" field (these values can be different in some cases).
    :::

4. Repeat these steps for "Custom Config" options to ensure all settings are correctly transferred.

    ![Custom Change](./media/custom-change.webp)
