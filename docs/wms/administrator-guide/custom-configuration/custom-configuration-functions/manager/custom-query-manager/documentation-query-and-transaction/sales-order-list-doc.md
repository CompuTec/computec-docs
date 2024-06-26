---
sidebar_position: 31
---

# Sales Order List Doc

## General Information

- **Key in resources** - SalesOrderList
- **Controller/calling method name** - CustomersController/GetSalesOrderList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Delivery** | DeliveryController/ScannerSalesOrder |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **Docentry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### Delivery

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."DocNum"**
- **T0."DocDueDate"**
- **T0."CardCode"**
- **T1."ItemCode"**
