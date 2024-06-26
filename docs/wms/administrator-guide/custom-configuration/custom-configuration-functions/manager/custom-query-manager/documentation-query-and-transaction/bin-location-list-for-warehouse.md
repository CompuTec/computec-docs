---
sidebar_position: 13
---

# Bin Location List For Warehouse

## General Information

- **Key in resources** - BinLocationListForWarehouse
- **Controller/calling method name** - WarehousesController/GetBinLocationListForWarehouse

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/ Calling Method Name |
| --- | --- | --- |
| **Goods Receipt PO** | Picking new quantity/quantity creator | GoodsReceiptPOController/ScannerNewSubLine |
| Goods Receipt PO | Bin list for picked quantitym| GoodsReceiptPOController/ScannerNewSubLine |
| Return | | WarehousesController/ScannerBinCode |
| Pick Receipt | | WarehousesController/ScannerBinCode |
| Goods Receipt | Picking new quantity/quantity creator | GoodsReceiptController/ScannerNewSubLine |
| Goods Receipt | Bin list for picked quantity | GoodsReceiptController/ScannerNewSubLine |
| SAP Receipt From Production | Picking new quantity/quantity creator | SAPProductionReceiptController/ScannerNewSubLine |
| SAP Receipt From Production | Bin list for picked quantity | SAPProductionReceiptController/ScannerNewSubLine |

## Column Required in a Query

- **AbsEntry**
- **BinCode**
- **OnHandQty**

## Bind/Scanned Field

- **AbsEntry**

### Goods Receipt PO,Goods Receipt , Sap Production Receipt

- **BinCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OURS
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adresss

### Goods Receipt PO, Return

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **BaseDocEntry** - Base Document DocEntry
- **BaseDocLineNum** - Base Document Line Num

### Pick Receipt

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **PFPickOrderDocEntry** - Pick Order Doc Entry
- **PFPickOrderLineNum** - Pick Order Line Num
- **MorDocEntry** - Manufacture Order Doc Entry
- **MorLineNum** - Manufacture Order Line Num

### Goods Receipt

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **ItemCode** - Item Code
- **DocEntry** - Receipt For Production Doc Entry

## Basic Filtering Parameter

- **T0."BinCode"**
