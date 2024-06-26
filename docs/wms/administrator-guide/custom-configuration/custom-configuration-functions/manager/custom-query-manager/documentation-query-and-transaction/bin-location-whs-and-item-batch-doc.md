---
sidebar_position: 7
---

# Bin Location for Warehouse and Item Batch Doc

## General Information

- **Key in resources** - BinLocationListForWarehouseAndItemBatch
- **Controller/calling method name** - WarehousesController/GetBinLocationListForWhsItem

## Calling List and Scanning Information

| Transaction | Controller/ Calling Method Name |
| --- | --- |
| **InventoryTransfer** | WarehousesController/ScannerBinCode |
| **GoodsIssue** | WarehousesController/ScannerBinCode |
| **Delivery** | WarehousesController/ScannerBinCode |
| **Pick And Pack** | WarehousesController/ScannerBinCode |
| **PF Pick Order** | WarehousesController/ScannerBinCode |

## Column Required in a Query

- **AbsEntry**
- **BinCode**
- **OnHandQty**

## Bind/Scanned Field

- **AbsEntry**

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
- **DistNumber** - Batch Number

## Goods Issue

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **DistNumber** - Batch Number

## Pick And Pack

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **PickAbsEntry** - Pick List Doc Entry"
- **PickLineNum** - Pick List Line Num
- **DistNumber** - Batch Number

## PF Pick Order

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **PFPickOrderDocEntry** - Pick Order Doc Entry
- **PFPickOrderLineNum** - Pick Order Line Num
- **MorDocEntry** - Manufacture Order Doc Entry
- **MorLineNum** - Manufacture Order Line Num
- **ItemCode** - Item Code
- **DistNumber** - Batch Number

## Basic Filtering Parameter

- **T0."BinCode"**
