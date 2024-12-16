---
sidebar_position: 1
---

# Overview

This guide provides instructions for installing the CompuTec WMS Handheld Device Client and details on system environment requirements.

---

## Requirements

:::info
    Before installing the CompuTec WMS Handheld Device Client, you must first have the CompuTec WMS server installed. Click [here](../../wms-server/overview.md) for more information on server installation.
:::

### .NET Compact Framework

The WMS client requires a specific version of the .NET Compact Framework depending on the operating system installed on your device:

    - **For Window CE** - Download the appropriate .NET Compact Framework for your version of Windows CE from [here](https://download.computec.one/software/wms/tools/NETCFv35.wce.armv4.cab)
    - **For Windows Mobile / Handheld Compact** - Download the corresponding .NET Compact Framework [here](https://download.computec.one/software/wms/tools/NETCFv35.wm.armv4i.cab).

### Device Libraries

Different device brands require specific libraries to support barcode scanning functionality. The following libraries are required for the corresponding devices:

    - **Intermec with Windows CE 5 and Windows Mobile 5** - Download the library [here](https://download.computec.one/software/wms/tools/Intermec_WindowsCE_Mobile_5.cab).
    - **Intermec with Windows CE 6 and Windows Mobile 6** - Download the library [here](https://download.computec.one/software/wms/tools/Intermec_WindowsCE_Mobile_6.cab).
    - **Symbol Devices** - Download the library [here](https://download.computec.one/software/wms/tools/Symbol.all.arm.cab)

### DataWedge

:::note
If you are using Motorola or Symbol devices, the DataWedge service must be turned off for the WMS application to function correctly. Ensure that the service is disabled before running the application.
:::

## Installation

Follow these steps to install the CompuTec WMS Client on your handheld device:

1. Download the CompuTec WMS Client for Windows CE file from the link provided [here](https://learn.computec.one/docs/wms/releases/download) and transfer it to the mobile device or directly from the device (click [here](https://learn.computec.one/docs/wms/administrator-guide/installation/computec-wms-client-download) to learn more about CompuTec WMS Client Download). Open the folder where the file was saved on the device and run the installation file.

2. Select your desired installation folder and click "OK".

3. The "Installing CompuTec WMS" window will appear with a progress bar. Wait for the installation process to complete.

4. Once the installation is complete, the installation window will close. Navigate to the Programs menu and select the CompuTec WMS icon to launch the application.

## Cold Boot

Click [here](./cold-boot.md) to learn how to keep the application and its configuration in case of a cold boot.

---
By following the above instructions, you will be able to successfully install the CompuTec WMS Handheld Device Client on your Windows CE or Windows Mobile device. Ensure that you meet all system requirements and have the necessary libraries installed for smooth operation.

If you encounter any issues during installation or setup, contact technical support for assistance.
