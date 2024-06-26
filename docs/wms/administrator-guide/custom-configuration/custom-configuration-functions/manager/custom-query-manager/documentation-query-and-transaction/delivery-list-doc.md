---
sidebar_position: 20
---

# Delivery List Doc

## General Information

- **Key in resources** - DeliveryList
- **Controller/calling method name** - CustomerController/GetDeliveryList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| Return | ReturnController/ScannerDelivery |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Return

- **DocumentSeries** - Document Series

## Basic Filtering Parameters

- **T0."DocEntry"**
- **T0."DocDueDate"**
- **T0."CardCode"**
