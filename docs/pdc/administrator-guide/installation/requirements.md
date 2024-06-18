---
sidebar_position: 1
---

# Requirements

This document provides information on a system environment that CompuTec PDC requires to work properly.

:::note
    CompuTec PDC requires .NET Framework to work correctly. **The minimum version of the .NET Framework** supported by CompuTec PDC **is 4.7.1**.

    <details>
        <summary>Click to see how to check .NET Framework version</summary>
        <div>
            1. Type in the following command in Command Prompt from Windows applications and click enter:

                ```bat
                reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\full" /v version
                ```

                ![Prompt](./media/requirements/net-version-prompt.webp)
            2. The result will show the .NET Framework version:

                ![Result](./media/requirements/net-version-result.webp)     
        </div>
    </details>

    We recommend installing the latest version of .NET Framework – you can do it using the dedicated tool Windows Update or manually downloading the required files from the Microsoft site.

    | Microsoft .NET Framework 4.7 (Web Installer) | [Link](https://support.microsoft.com/en-au/topic/the-net-framework-4-7-web-installer-for-windows-54cca588-519d-5e78-ea54-2ce5bd84a2ab) |
    | --- | --- |
    | Microsoft .NET Framework 4.7 (Web Installer) | [Link](https://support.microsoft.com/en-us/topic/the-net-framework-4-7-offline-installer-for-windows-f32bcb33-5f94-57ce-6120-62c9526a91f2) | 
:::

:::info
CompuTec PDC requires SAP Business One installation on a minimal version required by a specific CompuTec PDC version. You can check this on the Download page in the column Database / ProcessForce API related version.

You have to install the same version of SAP Business One DI API, SAP Crystal Reports runtime engine, CompuTec ProcessForce API, and CompuTec PDC, either 32-bit or 64-bit. 64-bit version is recommended.

CompuTec PDC does not require SAP Business One client.
:::

## Steps required to perform before installation of CompuTec PDC

1. Install [AppEngine](/docs/appengine/administrators-guide/requirements), the [CompuTec ProcessForce plugin](/docs/appengine/releases/plugins/processforce/download), and the [CompuTec PDC plugin](../../releases/download.md) in corresponding versions.

2. Install SAP Crystal Reports runtime engine for .NET Framework 32-bit or 64-bit. You can install it from SAP Business One installation package -> `Client\CRRuntime or Client.x64\CRRuntime`. It is required if the user wants to open Crystal Reports directly from the application.

3. Install CompuTec ProcessForce API 32-bit or 64-bit. You can find it [here](/docs/processforce/releases/download#computec-processforce-api)

## 2.10.20.1: Crystal Reports

From this version, CompuTec PDC supports the new Crystal Reports mechanism. You can find more information [here](https://help.sap.com/docs/SAP_BUSINESS_ONE_VERSION_FOR_SAP_HANA/686100cb1bc34346b2bc6642685bab43/b1bbebd32ff940c786c76315a8dfa270.html).

Since this version, you need to perform the following preparation to support Crystal Reports:

- Installed SAP APIGateway Service in SLD configuration:

  ![SLD configuration](./media/requirements/sld-configuration.webp)
- define an address in [CompuTec PDC Settings](../setting-up-the-application/overview.md#ct-labels-settings).

  ![SAP B1 API Gateway](./media/requirements/pdc-settings.webp)

## CompuTec Labels

If you use CompuTec Labels along with CompuTec PDC, there is a need to have a connection between the CompuTec PDC terminal and a server where CompuTec Labels are installed.
