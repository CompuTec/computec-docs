---
sidebar_position: 5
---

# Batch Return List Doc

## General Information

- **Key in resources** - ReturnBatchListForWhsAndItem
- **Controller/calling method name** - BatchNumbersController/GetReturnBatchListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/ Calling Method Name |
| --- | --- |
| Return | ReturnController/ScannnerBatchList |

## Column Required in a Query

- **DistNumber**
- **AbsEntry**
- **OnHandQty**

## Bind/Scanned Field

- **DistNumber**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OURS
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Return

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings

## Basic Filtering Parameters

- **T0."DistNumber"**
