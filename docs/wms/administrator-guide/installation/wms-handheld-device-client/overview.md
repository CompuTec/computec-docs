---
sidebar_position: 1
---

# Overview

This document provides a step-by-step guide on installing the WMS Handheld Device Client and includes information on system environment requirements.

---

## Requirements

:::danger
    To run the CompuTec WMS handheld device client, you must first install the CompuTec WMS server. Click [here](../wms-server/overview.md) for further information.
:::

### .NET Compact Framework

WMS requires a .NET Compact Framework version respective to an operating system installed on a device to work correctly:

### Device Libraries

Libraries for a specific brand of a device:

### DataWedge

DataWedge service has to be turned off on Motorola and Symbol devices for the application to work correctly.

![DataWedge](./media/data-wedge.webp)

## Installation

1. Download the CompuTec WMS Client Windows CE file from [here](../../../releases/download.md) and transfer it to the mobile device or download it directly (click [here](../computec-wms-client-download.md) to learn more). Open the destination folder on the device and run the file.

    ![Choose File](./media/choose-file.webp)
2. Choose a desired installation folder and click OK.

    ![Path](./media/path.webp)
3. The "Installing CompuTec WMS" form with a progress bar will be displayed.

    ![Progress Bar](./media/progress-bar.webp)
4. The installation is complete when the installation form is gone. Go to the Programs menu and choose the CompuTec WMS icon to start the application.

    ![Data Wedge](./media/data-wedge-wms.webp)

## Cold Boot

Click [here](./cold-boot.md) to learn how to keep the application and its configuration in case of a cold boot.
