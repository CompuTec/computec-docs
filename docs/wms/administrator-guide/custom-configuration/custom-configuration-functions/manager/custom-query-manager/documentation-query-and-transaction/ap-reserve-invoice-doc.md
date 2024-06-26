---
sidebar_position: 2
---

# A/P Reserve Invoice Doc

## General Information

- **Key in resources** - PurchaseOrderList
- **Controller/calling method name** - CustomersController/GetAPReserveInvoiceList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| Goods Receipt PO | GoodsReceiptPOController/ScannerAPReserveInvoice |

## Column Required in a Query

**DocEntry**

## Bind/Scanned Field

**DocEntry**

## Available Parameters

### Goods Receipt PO

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adress
- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- T0."DocNum"
- T0."DocDueDate"
- T0."CardCode"
- T1."ItemCode"
