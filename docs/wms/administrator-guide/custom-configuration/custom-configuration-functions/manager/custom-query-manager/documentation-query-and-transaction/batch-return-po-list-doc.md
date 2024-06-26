---
sidebar_position: 6
---

# Batch Return PO List Doc

## General Information

- **Key in resources** - ReturnPOBatchListForWhsAndItemSAP/ReturnPOBatchListForWhsAndItemPF
- **Controller/calling method name** - BatchNumbersController/GetReturnPOBatchListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/ Calling Method Name |
| --- | --- |
| Return PO | ReturnPOController/ScannnerBatchList |
| Return PO | ReturnPOController/ScannnerBatchInfo |

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

## Return PO

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Basic Filtering Parameters

- **T0."DistNumber"**
