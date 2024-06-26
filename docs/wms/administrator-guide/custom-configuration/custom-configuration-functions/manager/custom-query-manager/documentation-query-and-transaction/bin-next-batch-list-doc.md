---
sidebar_position: 15
---

# Bin Next Batch List Doc

## General Information

- **Key in resources** - BatchListForWhsAndItemSAP/BatchListForWhsAndItemPF
- **Controller/calling method name** - BatchNumbersController/GetBatchListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **InventoryTransfer** | InventoryTransfersController/ScanFromBatchSelectSetQty |
| **GoodsIssue** | GoodsIssueController/batchScan |
| **Delivery** | DeliveryController/ScannerBatchInfo <br/>DeliveryController/batchScan |
| **PickAndPack** | DeliveryController/ScannerBatchInfo <br/>PickAndPAckController/ScanBatchInfo |
| **PF Pick Order** | PickOrderController/BatchScanner |

## Column Required in a Query

- **AbsEntry**
- **BinCode**
- **OnHandQty**
- **Loc**

## Bind/Scanned Field

- **DistNumber**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OURS
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adresss

## Inventory Transfer

- **DocumentSeries** - Document Series
- **WhsCode**- Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## GoodsIssue

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Delivery

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **PickAbsEntry** - Pick List Doc Entry"
- **PickLineNum** - Pick List Line Num
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Pick and Pack

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **PickAbsEntry** - Pick List Doc Entry"
- **PickLineNum** - Pick List Line Num
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## PF Pick Order

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **PFPickOrderDocEntry** - Pick Order Doc Entry
- **PFPickOrderLineNum** - Pick Order Line Num
- **MorDocEntry** - Manufacture Order Doc Entry
- **MorLineNum** - Manufacture Order Line Num
- **ItemCode** - Item Code
- **BinAbsEntry** - AbsEntry from OBIN
- **WMSSettingQueueByBatch** - Query Batch order by queue from WMS Settings
- **StatusBatchForTransaction** - Query Status batch for transaction from Custom Config

## Basic Filtering Parameters

- **T0."DistNumber"**
