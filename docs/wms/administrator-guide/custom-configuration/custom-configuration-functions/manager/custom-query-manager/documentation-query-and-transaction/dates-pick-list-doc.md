---
sidebar_position: 18
---

# Dates Pick List Doc

## General Information

- **Key in resources** - DatesPickList
- **Controller/calling method name** - CustomersController/GetDatesPickList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Delivery** | No scanning method |

## Column Required in a Query

- **PickDate**

## Bind/Scanned Field

- **PickDate**

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
- **CardCode** - Card Code

## Basic Filtering Parameters

- **T0."PickDate"**
