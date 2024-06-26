---
sidebar_position: 28
---

# Pick Receipt List Doc

## General Information

- **Key in resources** - PFPickOrderList
- **Controller/calling method name** - PickOrderController/GetOpenPickOrderList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Pick Order** | PickOrderController/ScannerPickOrder |
| **Pick Receipt** | PickReceiptController/scannerPickOpen |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### PF Pick Order , PF Pick Receipt

- **DocumentSeries** - Document Series

## Basic Filtering Parameters

- **T0."DocNum"**
- **T0."U_Date"**
- **T2."U_Description"**
