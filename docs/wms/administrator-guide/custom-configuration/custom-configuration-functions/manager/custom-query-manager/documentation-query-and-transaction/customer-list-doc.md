---
sidebar_position: 16
---

# Customer List Doc

## General Information

- **Key in resources** - CustomerList
- **Controller/calling method name** - CustomersController/GetCustomerList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Return** | **CustomersController/ScannerCustomer** |
| **Delivery** | **CustomersController/ScannerCustomer** |

## Column Required in a Query

- **CardCode**

## Bind/Scanned Field

- **CardCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OURS
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adresss

## Return, Delivery

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."CardCode"**
- **T0."CardName"**
