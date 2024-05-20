---
sidebar_position: 2
---

# Precisa

Here, you can find information on the configuration of Precisa devices to work with CompuTec PDC: tested devices, device configuration, Gateway configuration, etc.

## Tested devices

Configuration and work with CompuTec PDC have been tested and confirmed on the following Precisa models:

- Precisa XB320M
- Precisa BK1200D
- Precisa XB120A

## Device configuration

### Print Format

- Date and Time ON
- Balance-ID ON
- Product-ID ON
- Gross and Tare ON
- Units ON
- Operator-ID OFF
- Line Feed OFF

### Set Interface

- BaudRate 9600
- Parity 8-NO-1Stop
- Handshake NO
- PC Direct Mode OFF

### Set Date And Time

- Date \[DD.MM.YY\]

## Configuration in CompuTec Gateway Manager

- Scale name – for example, “Precisa XB320M”
- Localization – for example “MG11”
- Barcode – for example “123456”
- Tolerance – format NUMBER\[UoM\] for example 0.001g
- Range From – format NUMBER\[UoM\] for example 0.2g
- Range To – format NUMBER\[UoM\] for example 300g
- Session Life Time (s) – left default 900
- Port – the same as the device
- Parity – the same as the device
- BaudRate – the same as the device
- Handshake – the same as the device
- Data bits – the same as the device
- Stop bits – the same as the device

### Regular expression

```regex
Date\s*(?<DATE>[0-9]{1,2}.[0-9]{1,2}.[0-9]{4})\s*Time\s*(?<TIME>[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}).*Serialno\s*:\s*(?<SerialNO>\d*).*N\s*:\s*[a-zA-Z]*\s*(?<minus>[-+]*)\s*[a-zA-Z]*\s*(?<NetWeight>[0-9.]*)\s*(?<Uom>(?![GT])[a-zA-Z]{1,2}).*G\s*:\s*[a-zA-Z]*\s*[-+]*\s*[a-zA-Z]*\s*(?<GrossWeight>[0-9.]*).*T\s*:\s*[a-zA-Z]*\s*[-+]*\s*[a-zA-Z]*\s*(?<Tare>[0-9.]*)
```
