---
sidebar_position: 1
---

# Requirements

The CompuTec AppEngine is a robust solution designed to enhance your SAP Business One environment. To ensure a smooth installation and optimal performance, it is critical to meet specific system requirements and prerequisites. This guide provides an overview of the necessary components and preparatory steps before installing CompuTec AppEngine version 3.0.

:::note
    CompuTec AppEngine requires **.NET** to work correctly. The version of the .NET supported by CompuTec AppEngine is **8.0.4 or higher**.
:::

## Prerequisites

:::info Warning
If you are upgrading from **CompuTec AppEngine 2.0** to **CompuTec AppEngine 3.0**, ensure that you first uninstall AppEngine 2.0 and unassign the CompuTec ProcessForce extension from the Extension Manager for the company before continuing with the upgrade.
:::

### AppEngine Application Machine

| Resource/Application | Minimal Version | Note |
| --- | --- | --- |
| Memory (RAM) | 2GB | You may need to adjust the RAM based on the number of plugins and background processes running. For production environments, we recommend a minimum of **8GB**. |
| Disc Space | 1GB | - |
| ASP.NET Core Runtime | 8.0.4 | - |
| HANA Server Version | SAP HANA Enterprise Edition 2.0 SPS 05, Revision 059.09 (minimum supported version: 2.17.22). | For SAP Business One version for HANA |
| SQL Server Version | SQL Server 2012 | For SAP Business One |
| Operating System | Windows x64 | - |
| SAP Business One Version | SAP Business One 10.0 FP 2408 | We recommend installing latest version. |
| SAP Business One DI API | According to SAP Business One version x64 | - |
| CompuTec License Server | Recent version recommended | - |

### SAP Business One - Users Machines

- **.NET Runtime** - the minimum required version is 8.0.4.

<details>
<summary>Click to see how to check .NET version</summary>
<div>
    1. Type in the following command in Command Prompt from Windows applications:
    ```dotnet --version```,
        and click enter.

    2. The result will show the .NET version:

        ![Result](./media/requirements/result-01.png)

    We recommend that you install the latest version of .NET – you can do it using the dedicated tool Windows Update or manually downloading the required files from the Microsoft site: [Microsoft .NET 8.7 (Web Installer)](https://dotnet.microsoft.com/en-us/download).
</div>
</details>

:::note
    CompuTec AppEngine does not require a SAP Business One application client.
:::

:::caution
Before installing CompuTec AppEngine, ensure that the SAP Business One DI API 64-bit is installed on the client machine.
:::

## Working with SAP Business One on the HANA Database

- For proper database functionality, it is essential to run the hdbsetup.exe installation. This step ensures that databases are accessible within the application settings.

- Locate the required file in the b1_shf\SAP_HANA_CLIENT_x64 folder on the machine where SAP Business One is installed.

    ![Setup](./media/requirements/setup.png)

---
By following the outlined prerequisites and verifying system configurations, you can unlock the full potential of CompuTec AppEngine to enhance your operational workflows. For further assistance, consult our technical support.
