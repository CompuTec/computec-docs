---
sidebar_position: 30
---

# Sales Add Item List Doc

## General Information

- **Key in resources** - AddNewSalesItemList
- **Controller/calling method name** - ItemsController/GetListSalesItems

## Calling List and Scanning Information

| Transaction | Additional Information | Controller/Scanning Method Name |
| --- | --- | --- |
| **Return** | Validation method moved to <br/>**ControllerTools.Return.Manager.AddNewItem** | ReturnController/ScannerAddNewItem |
| **Delivery** | | DeliveryController/ScannerAddNewItem |

## Column Required in a Query

- **ItemCode**

## Bind/Scanned Field

- **ItemCode**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### Return

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **BaseDocEntry** - Base Document DocEntry
- **CardCode** - Card Code

### Delivery

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code
- **BaseDocEntry** - Base Document DocEntry
- **PickAbsEntry** - Pick List Doc Entry
- **CardCode** - Card Code

## Basic Filtering Parameters

- **T0."ItemCode"**
- **T0."ItemName"**
