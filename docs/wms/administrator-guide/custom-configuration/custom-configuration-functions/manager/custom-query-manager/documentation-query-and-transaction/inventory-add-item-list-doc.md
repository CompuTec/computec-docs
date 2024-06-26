---
sidebar_position: 23
---

# Inventory Add Item List Doc

## General Information

- **Key in resources** - AddNewInventoryItemList
- **Controller/calling method name** - ItemsController/GetListInventoryItems

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/Scanning Method Name |
| --- | --- | --- |
| **InventoryTransfer** | Validation method moved to <br/>**ControllerTools.InventoryTransfer.Manager.AddNewItem** | InventoryTransfersController/ScannerAddNewItem |
| **GoodsIssue** | Validation method GoodsIssueController/addnewitem | None - it is required to add it |
| **Inventory Transfer Request** | Validation method moved to <br/>**ControllerTools.InventoryTransferRequest.Manager.AddNewItem** | InventoryTransfersRequestController/ScannerAddNewItem |
| Goods Receipt | Validation method moved to <br/>**ControllerTools.GoodsReceipt.Manager.AddNewItem** | GoodsReceiptController/ScannerAddNewItem |

## Column Required in a Query

- **ItemCode**

## Bind/Scanned field

- **ItemCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## InventoryTransfer

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **BaseDocEntry** - Base Document DocEntry

## GoodsIssue, Request Transfer

**DocumentSeries** - Document Series
**WhsCode** - Warehouse Code

## Goods Receipt

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."ItemCode"**
- **T0."ItemName"**
