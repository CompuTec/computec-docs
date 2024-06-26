---
sidebar_position: 32
---

# SAP Production Order Receipt List Doc

## General Information

- **Key in resources** - SAPProductionOrderReceiptList
- **Controller/calling method name** - SAPProductionOrderController/GetSAPProductionOrderReceiptList

### InventoryTransferRequest

- **Key in resources** - SAPProductionOrderReceiptList
- **Controller/calling method name** - nventoryTransferRequestController/GetProductionOrderList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Inventory Transfer Request MOR** | InventoryTransferRequestController/ScannerMor |
| **SAP Receipt From Production** | SAPProductionReceiptController/ScannerProductionOrder |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **Docentry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### Transfer Request MOR

- **T0."DocNum"**
- **T4."ItemCode"**
- **T4."ItemName"**
