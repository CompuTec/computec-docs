---
sidebar_position: 26
---

# Pick List Doc

## General Information

- **Key in resources** - PickList
- **Controller/calling method name** - CustomersController/GetPickList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Delivery** | DeliveryController/ScannerPickList |
| **Pick And Pack** | PickAndPackController/ScannerPickList |

## Column Required in a Query

- **AbsEntry**
- **Status**

## Bind/Scanned Field

- **AbsEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **TransactionWMS** - WMS Transaction Id
- **UserId** - User Id from OUSR
- **UserNameSAP** - User name SAP
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Delivery

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."AbsEntry"**
- **T0."PickDate"**
- **T2."CardCode"**
- **T4."CardCode"**
