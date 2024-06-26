---
sidebar_position: 21
---

# Draft List Doc

## General Information

- **Key in resources** - DraftList
- **Controller/calling method name** - DraftsController/GetDraftList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Goods Receipt PO** | No method |
| **Delivery** | No method |
| **Goods Receipt** | No method |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Goods Receipt PO, Delivery, Goods Receipt

- **DocumentSeries** - Document Series
- **SemaphorEnabled** - If Semaphor enabled value 'true' else false
- **BaseDocumentType** - SAP Object Type

## Basic Filtering Parameters

- **T0."DocEntry"**
- **T0."DocDueDate"**
- **T0."CardCode"**
