---
sidebar_position: 12
---

# Bin Location List For To Warehouse Doc

## General Information

- **Key in resources** - BinLocationListForWarehouseAndItemBatch
- **Controller/calling method name** - WarehousesController/GetBinLocationListForToWarehouse

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/ Calling Method Name |
| --- | --- | --- |
| **InventoryTransfer** | A Bin for the whole document or a line | InventoryTransfersController/Tobinwhsorbinscan |

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
- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ToWhsCode** - To Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry

## Basic Filtering Parameter

- **T0."BinCode"**
