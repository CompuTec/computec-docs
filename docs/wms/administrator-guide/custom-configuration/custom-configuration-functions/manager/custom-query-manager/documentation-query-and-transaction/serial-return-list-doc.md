---
sidebar_position: 33
---

# Serial Return List Doc

## General Information

- **Key in resources** - ReturnSerialListForWhsAndItem
- **Controller/calling method name** - SerialNumbersController/GetReturnSerialListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Return** | ReturnController/ScannnerSerialList |
| **Return** | ReturnController/ScannnerSerialInfo |

## Column Required in a Query

- **DistNumber**
- **AbsEntry**
- **OnHandQty**

## Bind/Scanned Field

- **DistNumber**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### Return

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **CardCode** - Card Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinAbsEntry** - AbsEntry from OBIN

## Basic Filtering Parameters

- **T0."DistNumber"**
