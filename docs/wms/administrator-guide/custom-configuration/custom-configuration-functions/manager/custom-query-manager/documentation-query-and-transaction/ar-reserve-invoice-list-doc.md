---
sidebar_position: 3
---

# A/R Reserve Invoice List Doc

## General Information

- **Key in resources** - ARReserveInvoiceList
- **Controller/calling method name** - CustomersController/GetARReserveInvoiceList

## Calling List and Scanning Information

| Transaction | Additional Info | Controller/Scanning Method Name |
| --- | --- | --- |
| Delivery | | DeliveryController/ScannerARReserveInvoice |

## Column Required in a Query

**DocEntry**

## Bind/Scanned Field

**DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Delivery

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."DocNum"**
- **T0."DocDueDate"**
- **T0."CardCode"**
- **T1."ItemCode"**
