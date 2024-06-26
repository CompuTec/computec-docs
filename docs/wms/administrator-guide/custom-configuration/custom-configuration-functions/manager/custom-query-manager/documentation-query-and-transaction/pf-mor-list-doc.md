---
sidebar_position: 25
---

# PF MOR List Doc

## General Information

- **Key in resources** - PFMorList
- **Controller/calling method name** - PickOrderController/GetOpenPickOrderList

### InventoryTransferRequest

- **Key in resources** - PFMorList
- **Controller/calling method name** - InventoryTransferRequestController/GetProductionOrderList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Pick Order** | PickOrderController/ScanAddNewMor |
| **Pick Receipt** | PickReceiptController/ScannerAddNewMor |
| **Inventory Transfer Request MOR** | InventoryTransferRequestController/ScannerMor |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **DocEntry**

## Available Parameters

### InventoryTransfer

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id adress

### PF Pick Order , PF Pick Receipt, Transafer Request MOR

- **DocumentSeries** - Document Series

## Basic Filtering Parameters

- **T0."DocNum"**
- **T0."U_Description"**
