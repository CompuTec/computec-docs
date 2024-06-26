---
sidebar_position: 24
---

# Inventory Transfer Request List Doc

## General Information

- **Key in resources** - InventoryTransferRequestList
- **Controller/calling method name** - InventoryTransfersController/GetListTransferRequests

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **InventoryTransfer** | InventoryRequestScan |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned field

- **DocEntry**

## Available Parameters

### InventoryTransfer

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adress
- **SemaphorEnabled** - If Semaphor enabled value 'true' else false
- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

### InventoryTransfer

- **T0."Filler"**
- **T0."ToWhsCode"**
- **T0."DocEntry"**
- **T0."DocNum"**
