---
sidebar_position: 2
---

# Troubleshooting

## Problem: `DataLayerConnectionNotEstablischedException` error in WMS Server Logs (HANA Environments)

This error indicates that the CompuTec WMS Server is unable to establish a stable connection to the SAP HANA database. In many cases, the issue is caused by conflicting or outdated `Sap.Data.Hana.v4.5.dll` assemblies on the Windows server.

## Solution

Here's how to resolve this problem:

### Step 1: Verify the HDBADONET Environment Variable

1. Open the **Environment Variables** on your computer.
2. Locate the variable named `HDBADONET`.

    ![a screen showing the opened environment variables](./media/01-wms-troubleshooting-env-variables.png)

3. Note the directory path defined in this variable.

### Step 2: Check the DLL file version in the HDBADONET directory

1. Navigate to the folder identified in the `HDBADONET` variable.
2. Open the **v4.5** subfolder.
3. Locate the **Sap.Data.Hana.v4.5.dll** file.

    ![a screen showing how to find the Sap.Data.Hana.v4.5.dll file](./media/02-wms-troubleshooting-file.png)

4. Hoover over the file to check its version.

    ![a screen showing how to check the file version](./media/03-wms-troubleshooting-file-version.png)

    :::info[note]
    The version should be similar to 2.20.22.0 (your actual version may vary depending on the HANA client installed).
    :::

### Step 3: Check the Global Assembly Cache (GAC) for conflicting versions

1. Go to: `C:\Windows\Microsoft.NET\assembly\GAC_MSIL\Sap.Data.Hana.v4.5\`

    ![a screen showing how to check the file version in microsoft folder](./media/04-wms-troubleshooting-ms.png)

2. Check whether multiple subfolders exist, each containing different versions of `Sap.Data.Hana.v4.5.dll` file.
3. If you find versions that don't match the version in the `HDBADONET` directory, remove the mismatched folders. **Only keep the version that matches the installed HANA client DLL file**.
4. Done!

## Problem: Storage Unit Allocation Issues

Incorrect use of **Storage Units**, for example, transfer **Items** that belong to a **Storage Unit** in **SAP Business One**, may result in quantity discrepancies or incorrect **Bin Location** assignments.  

These issues often appear as system errors, such as:

- Error 1470000336: `Bin location 'X' does not belong to specified warehouse 'Y'.`
- Error 10001153: `Insufficient quantity for item "X" with batch 'Y' in warehouse.`
- Error: `Bin location 'X' does not belong to specified warehouse 'Y'.`

## Solution

:::info[note]
For **full diagnostic queries and repair instructions**, refer to the dedicated article: [Storage Unit Allocation Issues](https://learn.computec.one/docs/wms/faq/storage-unit-allocation-issues).
:::
