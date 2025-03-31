---
sidebar_position: 2
---

# HTTPS Configuration

Securing communication between applications is crucial, especially when dealing with sensitive data. CompuTec Labels supports HTTPS communication to ensure secure data transfer. This guide outlines the steps to configure HTTPS by importing a valid SSL certificate and updating the necessary configuration settings.

---

## Overview

To enable HTTPS for CompuTec Labels, you need to:

1. Import a valid SSL certificate into the Local Machine store.
2. Configure the certificate properties in the CompuTec Labels configuration file

## Certificate

The first step in enabling HTTPS is importing an SSL certificate into the Local Machine store on the Windows server running the CompuTec Labels service.

1. Open the Local Machine certificate console by running the command:certlm.msc
2. Navigate to Personal → Certificates and import the certificate:

    ![Certificate](./media/https-configuration/certificate-local-computer.webp)

3. After importing, copy its Thumbprint property from the certificate Details tab, as it must be entered into the configuration file:

    ![Certificate](./media/https-configuration/certificate-thumbprint.webp)

## Configuration

1. CompuTec Labels port and certificate thumbprint are defined in the configuration file located at `C:\Program Files\CompuTec\CompuTec LabelPrinting\CompuTec.LabelPrinting.WinService.exe.config`.
2. Open the file using a text editor with Administrator privileges (e.g., Notepad run as Administrator). If necessary, copy the file to a different location, edit it, and then move it back.
3. In the `<configuration> → <appsettings>` section define two keys:

    - **portSSL** with the port on which the HTTPS endpoint will run,
    - **portSSLCertThumbprint** with the thumbprint copied from the certificate.

Here is an example of the configuration:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    ...
    <add key="portSSL" value="55001" />
    <add key="portSSLCertThumbprint" value="f6cf615805e88de83b77fcb6ac6acb569ee13f88" />
    ...
  </appSettings>
  <startup>
  ...
  
```

Save the changes and restart the CompuTec Labels Service for the new settings to take effect.

## How to check if the configuration works

If configured correctly, the browser should return a JSON response listing the licensed printers.

`https://<your_server>:<your_port_from_the_configuration_file>/API/LabelPrint/GetLicensedPrinters`

---
