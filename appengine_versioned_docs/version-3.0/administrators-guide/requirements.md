---
sidebar_position: 1
---

# Requirements

:::note
    CompuTec AppEngine requires **.NET** Framework to work correctly. The version of the .NET Framework supported by AppEngine is **8.0**.

<details>
<summary>Click to see how to check .NET Framework version</summary>
<div>
    1. Type in the following command in Command Prompt from Windows applications:
    ```dotnet --version```

        And click enter

    2. The result will show the .NET Framework version
    ![Result](./media/requirements/result-01.png)

    We recommend that you install the latest version of .NET Framework – you can do it using the dedicated tool Windows Update or manually downloading the required files from the Microsoft site.

    | Version | Download |
    | --- | --- |
    | Microsoft .NET Framework 8.7 (Web Installer) | [**Link**](https://dotnet.microsoft.com/en-us/download) |
</div>
</details>
:::

:::note
    CompuTec AppEngine does not require a SAP Business One application client.
:::

## Steps Required to Perform before CompuTec AppEngine Installation

1. Install SAP Business One DI API 64-bit on the client machine.
2. Ensure that the following are installed (included with SAP Business One Client):
    - Microsoft ODBC Driver 17 for SQL Server
    - Microsoft SQL Server Native Client 11.0

## Working with SAP B1 on the HANA Database

It is required to run hdbsetup.exe installation for proper work of CompuTec AppEngine (without this, databases are not available from the application Settings level).

The file is available in the b1_shf\SAP_HANA_CLIENT_x64 folder on a machine where SAP Business One is installed:

![Setup](./media/requirements/setup.png)
