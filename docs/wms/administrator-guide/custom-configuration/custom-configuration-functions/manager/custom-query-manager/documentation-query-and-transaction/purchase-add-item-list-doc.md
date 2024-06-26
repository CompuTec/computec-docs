---
sidebar_position: 28
---

# Purchase Add Item List Doc

## General Information

- **Key in resources** - AddNewPurchaseItemList
- **Controller/calling method name** - ItemsController/GetListPurchaseItems

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/Scanning Method Name |
| --- | --- | --- |
| **Goods Receipt PO** | Validation method moved to <br/>**ControllerTools.GoodsReceiptPO.Manager.AddNewItem** | GoodsReceiptPOController/ScannerAddNewItem |
| **ReturnPO** | Validation method moved to <br/>**ControllerTools.ReturnPO.Manager.AddNewItem** | ReturnPOController/ScannerAddNewItem |

## Column Required in a Query

- **ItemCode**

## Bind/Scanned Field

- **ItemCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### Goods Receipt PO, Return PO

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **BaseDocEntry** - Base Document DocEntry

## Basic Filtering Parameters

- **T0."ItemCode"**
- **T0.ItemName"**
