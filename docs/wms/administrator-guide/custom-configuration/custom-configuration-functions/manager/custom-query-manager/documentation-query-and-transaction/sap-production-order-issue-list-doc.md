---
sidebar_position: 32
---

# SAP Production Order Issue List Doc

## General Information

- **Key in resources** - SAPProductionOrderIssueList
- **Controller/calling method name** - SAPProductionOrderController/GetSAPProductionOrderIssueList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **SAP Issue For Production** | SAPProductionOrderController/scannerReceipt |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned Field

- **Docentry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

### SAP Issue for Production

- **DocumentSeries** - Document Series
- **WhsCode** - Warehouse Code

## Basic Filtering Parameters

- **T0."DocNum"**
- **T2."ItemCode"**
- **T2."ItemName"**
- **T3."ItemCode"**
- **T3."ItemName"**
