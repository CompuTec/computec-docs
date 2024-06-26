---
sidebar_position: 35
---

# Warehouse List Documentation

## General Information

- **Key in resources** - WarehouseList
- **Controller/calling method name** - WarehousesController/GetWarehouses

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/Scanning Method Name |
| --- | --- | --- |
| **InventoryTransfer** | Source Warehouse | InventoryTransfersController/whsscanner2 |
| **InventoryTransfer** | Destination Warehouse | InventoryTransfersController/towhsscanner |
| **InventoryTransfer** | Adding an Item to a list | No scanning method |
| **InventoryTransfer** | Destination Warehouse for a line | InventoryTransfersController/Tobinwhsorbinscan |
| **GoodsIssue** | Source Warehouse | WarehousesController/ScannerWhsCode |
| **Goods Receipt PO** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |
| **Goods Receipt PO** | Adding an Item to a list | WarehousesController/ScannerWhsCode |
| **Return** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |
| **Return** | Adding an Item to a list | WarehousesController/ScannerWhsCode |
| **Return PO** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |
| **Return PO** | Adding an Item to a list | WarehousesController/ScannerWhsCode |
| **Delivery** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |
| **Inventory Transfer Request** | Source Warehouse | WarehousesController/ScannerWhsCode |
| **Inventory Transfer Request** | Destination Warehouse | InventoryTransfersRequestController/ScannerWhsCode |
| **Inventory Transfer Request** | Source Warehouse for a line | InventoryTransfersRequestController/ScannerWhsCode |
| **Inventory Transfer Request** | Destination Warehouse for a line | InventoryTransfersRequestController/ScannerWhsCode |
| **Inventory Transfer Request from MOR** | Source Warehouse | InventoryTransfersRequestController/ScannerWhsCode |
| **Inventory Transfer Request from MOR** | Source Warehouse for a line | InventoryTransfersRequestController/ScannerWhsCode |
| **Goods Receipt** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |
| **Goods Receipt** | Adding an Item to a list | WarehousesController/ScannerWhsCode |
| **Sap Issue for Production** | Source Warehouse for a document | WarehousesController/ScannerWhsCode |

## Column Required in a Query

- **WhsCode**

## Bind/Scanned Field

- **WhsCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address
- **DocumentSeries** - Document Series

## Basic Filtering Parameters

- **WhsCode**
- **WhsCode**
