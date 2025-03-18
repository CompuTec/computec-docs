---
sidebar_position: 4
---

# CompuTec Gateway Manager

The CompuTec Gateway Manager is essential for managing weighing device connections within the CompuTec PDC environment. This guide provides step-by-step instructions on configuring the WeightScale Manager, adding new devices, and setting up communication protocols.

---

## Prerequisites

Before configuring the Gateway Manager, ensure the following requirements are met:

- Configure your firewall to make the 8080 port available
- Net Framework 4.7 is required

## Installation

1. The application is installed automatically during CompuTec Gateway Service installation.
2. Go to the WeightScale configuration manager installation folder and run the file WeightScaleConfigurationManager.

   It is located in an installation folder, which is by default in the following location: C:\Program Files (x86)\CompuTec\CompuTec Weight Service\.

   ![Installation folder](./media/computec-gateway-manager/installation-folder.webp)
3. Click "Add" to register a new weighting device with a unique identifier.

    ![Add new scale](./media/computec-gateway-manager/add-new.webp)
4. Available Scales tab includes the following settings:

    - **Id**: a unique identifier of the scale (automatically generated)
    - **Scale name**: the name of the weighting device (e.g. manufacturer)
    - **Localization**: location of the device (check a [related PDC Settings option](../setting-up-the-application/pdc-settings/overview.md#assigning-pdc-settings-templates))
    - **Barcode**: a barcode or a serial number of the device
    - **Tolerance**: weight tolerance
    - **Range From**: weighing range (start)
    - **Range To**: weighing range (end)
    - **Session Life Time**: inactive session time (seconds)

        ![Scales columns](./media/computec-gateway-manager/scales-columns.webp)
5. Once you click the scales identifier, the setup window opens in the Parameters tab.

    ![Scale parameters](./media/computec-gateway-manager/scale-parameters.webp)
6. Expand the driver tab to select an available device. There are two possibilities to connect the weight scale:

    1. TCP/IP: enter the IP address and port of the scale (the default port number is 4305).

        ![Scale IP](./media/computec-gateway-manager/scale-ip.webp)
    2. RS232: you can change COM port, parity, baud rate, handshake, data bits, stop bits, and regular expression.

        ![Scale RS232](./media/computec-gateway-manager/scale-rs232.webp)
7. Save the configuration and run a printer test. Ensure you enter the Web Address, which should be the IP address or machine name of the server where the Service Layer is installed. The default port is 8080, but you can modify it if necessary.

    <details>
        <summary>Click here to check how to change the port</summary>
        <div>
            The port can be changed by editing a file located in CompuTec Service Layer installation folder. The default path: C:\Program Files\CompuTec\CompuTec Service Layer\CompuTec.ServiceLayer.Host.WindowsService.exe

            ![Port config](./media/computec-gateway-manager/port-config.webp)
        </div>
    </details>

    :::warning
        The address and port in the [corresponding CompuTec PDC Setting](../setting-up-the-application/overview.md#ct-labels-settings) must be identical to those entered here.
    :::

    ![Manager](./media/computec-gateway-manager/manager-1.webp)

    ![Manager](./media/computec-gateway-manager/manager-2.webp)

---
