---
sidebar_position: 1
---

# Introduction to CompuTec WMS 3.0

**CompuTec WMS 3.0** is a warehouse management solution for **SAP Business One**. It supports warehouse operations performed on mobile devices, including Android-based devices and barcode scanners.

CompuTec WMS allows warehouse users to process transactions directly from the warehouse floor. The data is transferred to SAP Business One, helping keep warehouse and inventory information up to date.

CompuTec WMS 3.0 is based on the **CompuTec AppEngine Framework**.

## How CompuTec WMS Works

Warehouse users work with the **CompuTec WMS Client**, which provides access to warehouse processes through a tile-based interface.

Each tile represents a specific process or function, such as:

- Goods Receipt
- Pick List
- Stock Transfer
- Stock Counting
- Packing

Users can scan items, enter the required information, and complete the selected process directly on their mobile device.

Depending on the process, CompuTec WMS can handle information such as:

- Items and quantities
- Batch and serial numbers
- Warehouses and storage bins
- Handling units
- Dates and remarks
- User and transaction information

## Main Features

CompuTec WMS provides functionality for managing common warehouse processes in SAP Business One.

| **Feature** | **Description** |
| --- | --- |
| **Warehouse Transactions** | Receive, issue, transfer, and return goods. |
| **Barcode Scanning** | Scan items and other warehouse information using supported mobile devices. |
| **Batch and Serial Number Management** | Process and track items managed by batch or serial numbers. |
| **Storage Bin Management** | Manage inventory stored in warehouse bins. |
| **Handling Units** | Group and manage items using handling units. |
| **Stock Counting** | Perform inventory counting directly from the WMS Client. |
| **Packing** | Support packing processes as part of warehouse operations. |
| **Catch Weight** | Manage items for which the actual weight can vary between individual units. |
| **CompuTec ProcessForce Integration** | Support warehouse processes related to CompuTec ProcessForce manufacturing operations. |
| **Configuration and Customization** | Adjust WMS behavior to meet specific warehouse requirements. |

## CompuTec WMS 3.0 Components

CompuTec WMS 3.0 uses several components that work together:

- **CompuTec WMS Plugin** – installed and managed in CompuTec AppEngine.
- **CompuTec WMS Server** – provides the server-side services required by WMS.
- **CompuTec WMS Client** – the application used to perform warehouse operations on supported devices.
- **CompuTec AppEngine** – provides the framework used to install and manage WMS plugin components.

If **CompuTec ProcessForce** is installed in your SAP Business One environment, the **CompuTec ProcessForce API** is also required.

## Next Steps

Before installing CompuTec WMS 3.0, review the system requirements and installation process:

- [**Requirements**](/docs/wms/administrator-guide/installation/requirements)
- [**Installation Overview**](/docs/wms/administrator-guide/installation/overview)

:::warning[important]
If you are upgrading from **CompuTec WMS 2.0**, review the WMS 3.0 installation instructions before starting the upgrade. The installation and component management process differs between WMS 2.0 and WMS 3.0.
:::
