---
sidebar_position: 33
---

# Serial List Doc

## General Information

- **Key in resources** - SerialListForWhsAndItem
- **Controller/calling method name** - SerialNumbersController/GetSerialListForWhsAndItem

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **InventoryTransfer** | No scanning method, need to be updated |
| **GoodsIssue** | No scanning method, need to be updated |
| **Delivery** | No scanning method, need to be updated |
| **Pick and Pack** | No scanning method, need to be updated |
| **PFPickOrder** | No scanning method, need to be updated |

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

### Inventory Transfer

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **BinAbsEntry** - AbsEntry from OBIN

### GoodsIssue

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BinAbsEntry** - AbsEntry from OBIN

### Delivery

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num
- **PickAbsEntry** - Pick List Doc Entry"
- **PickLineNum** - Pick List Line Num
- **BinAbsEntry** - AbsEntry from OBIN

## Pick And Pack

- **DocumentSeries** - Document Series
- **CardCode** - Card Code
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **PickAbsEntry** - Pick List Doc Entry"
- **PickLineNum** - Pick List Line Num
- **BinAbsEntry** - AbsEntry from OBIN

### PF Pick Order

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **PFPickOrderDocEntry** - Pick Order Doc Entry
- **PFPickOrderLineNum** - Pick Order Line Num
- **MorDocEntry** - Manufacture Order Doc Entry
- **MorLineNum** - Manufacture Order Line Num
- **ItemCode** - Item Code
- **BinAbsEntry** - AbsEntry from OBIN

## Basic Filtering Parameters

- **T0."DistNumber"**
