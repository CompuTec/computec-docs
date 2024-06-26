---
sidebar_position: 13
---

# Bin Location Return for Warehouse and Item Batch Doc

## General Information

- **Key in resources** - ReturnBinLocationListForWarehouseAndItemBatch
- **Controller/calling method name** - WarehousesController/GetReturnPOBinLocationListForWhsItem

## Calling List and Scanning Information

|Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Return PO** | WarehousesController/ScannerBinCode |

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
- **DeviceId** - Requester device Id adresss

### Return PO

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line
- **DistNumber** - Batch Number

## Basic Filtering Parameter

- **T0."BinCode"**
