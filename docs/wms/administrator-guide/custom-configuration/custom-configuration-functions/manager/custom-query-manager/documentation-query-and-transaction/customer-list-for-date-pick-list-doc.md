---
sidebar_position: 17
---

# Customer List For Date Pick List Doc

## General Information

- **Key in resources** - CustomerListForDatePickList
- **Controller/calling method name** - CustomersController/GetCustomerListForDatePickList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Delivery** | CustomersController/ScannerCustomerDatePickList |
| **Pick And Pack** | CustomersController/ScannerCustomerDatePickList |

## Column Required in a Query

- **CardCode**

## Bind/Scanned Field

- **CardCode**

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
- **PickDateString** - Card Code

## Basic Filtering Parameters

- **T2."CardCode"**
- **T4."CardCode"**
