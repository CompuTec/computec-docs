---
sidebar_position: 7
---

# Batch With Bin List Doc

## General Information

- **Key in resources** - BatchWithBinListForWhsAndItemSAP/BatchWithBinListForWhsAndItemPF
- **Controller/calling method name** - BatchNumbersController/GetBatchWithBinListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/ Calling Method Name |
| --- | --- |
| InventoryTransfer | BatchNumbersController/ScannerBatchWithBin |
| GoodsIssue | BatchNumbersController/ScannerBatchWithBin |
| Pick Order | BatchNumbersController/ScannerBatchWithBin |

## Column Required in a Query

- **DistNumber**
- **AbsEntry**
- **OnHandQty**
- **Loc**

## Bind/Scanned Field

- **DistNumber**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OURS
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Inventory Transfer

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinEnabled** - Warehouse has bin location
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Goods Issue

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BinEnabled** - Warehouse has bin location
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Pick Order

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **PFPickOrderDocEntry** - Pick Order Doc Entry
- **PFPickOrderLineNum** - Pick Order Line Num
- **MorDocEntry** - Manufacture Order Doc Entry
- **MorLineNum** - Manufacture Order Line Num
- **ItemCode** - Item Code
- **BinEnabled** - Warehouse has bin location
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Basic Filtering Parameters

- **T0."DistNumber"**
- **T0."Loc"**
