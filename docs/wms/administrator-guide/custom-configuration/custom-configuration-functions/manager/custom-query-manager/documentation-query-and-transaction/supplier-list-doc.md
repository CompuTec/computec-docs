---
sidebar_position: 34
---

# Supplier List Doc

## General Information

- **Key in resources** - SupplierList
- **Controller/calling method name** - CustomersController/GetSupplierList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Goods Receipt PO** | CustomersController/ScannerSupplier |
| **Return PO** | CustomersController/ScannerSupplier|

## Column Required in a Query

- **CardCode**

## Bind/Scanned Field

- **CardCode**

## Available Parameters

### Goods Receipt PO

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address
- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."CardCode"**
- **T0."CardName"**
