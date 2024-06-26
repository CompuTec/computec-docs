---
sidebar_position: 22
---

# Goods Receipt PO List Doc

## General Information

- **Key in resources** - GRPOList
- **Controller/calling method name** - DraftsController/GetDraftList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Return** | ReturnPOController/ScannerGRPO |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Return PO

- **DocumentSeries** - Document Series

## Basic Filtering Parameters

- **T0."DocEntry"**
- **T0."DocDueDate"**
- **T0."CardCode"**
