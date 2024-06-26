---
sidebar_position: 29
---

# Purchase Order List Doc

## General Information

- **Key in resources** - PurchaseOrderList
- **Controller/calling method name** - CustomersController/GetPurchaseOrderList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Goods Receipt PO** | GoodsReceiptPOController/ScannerPurchaseOrder |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address
- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."DocNum"**
- **T0.DocDueDate"**
- **T0."CardCode"**
- **T0."ItemCode"**
