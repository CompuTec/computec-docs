---
sidebar_position: 19
---

# Delivery List Dispatch Control Doc

## General Information

- **Key in resources** - DispatchControlScanDocNumDelivery
- **Controller/calling method name** - DispachControlController/GetDeliveryList

## Calling List and Scanning Information

| Transaction | Controller/Scanning Method Name |
| --- | --- |
| **Dispach Control** | DispachControlController/ScannerDelivery |

## Column Required in a Query

- **DocEntry**

## Bind/Scanned field

- **DocEntry**

## Available Parameters

- **Guid** - Unique number for transaction
- **UserId** - User Id from OUSR
- **UserNameWMS** - User name WMS
- **DeviceId** - Requester device Id address

## Dispatch Control

- **DispatchCardCodes** - Selected card Code in CC

## Basic Filtering Parameters

- **T0."DocEntry"**
- **T0."DocDueDate"**
- **T0."CardCode"**
