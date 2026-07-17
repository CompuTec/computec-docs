---
sidebar_position: 5
---

# Configure a USB Barcode Scanner

Before using a USB barcode scanner with **CompuTec WMS**, you must configure it with the required settings. The following sections provide model-specific configuration instructions.

## Configure Honeywell MS5145 LS USB Scanner

To work correctly with **CompuTec WMS**, the **Honeywell MS5145 LS USB** scanner must be configured to send:

- **Prefix:** `002`
- **Suffix:** `003`

Follow the steps below to configure the scanner.

### Before you start

Make sure you have access to the configuration barcodes for the **Honeywell MS5145 LS USB** scanner.

### Configure the scanner

To configure the scanner, follow these steps:

1. Scan the **Enable Factory Defaults** barcode.

    ![alt text](media/config-scanner/factory-defaults.png)

2. Scan the **Recall Defaults** barcode.

    ![alt text](media/config-scanner/recall-defaults.png)

3. Scan the **Enter/Exit Programming** barcode to enter the programming mode.

    ![alt text](media/config-scanner/enter-programming.png)

4. Scan the **Configurable Prefix #1** barcode.

    ![alt text](media/config-scanner/configurable-prefix.png)

5. Next, scan the following digits in order: ``0`` ``0`` ``2``.

    ![alt text](media/config-scanner/configurable-suffix.png)
    ![alt text](media/config-scanner/configurable-suffix.png)
    ![alt text](media/config-scanner/configurable-suffix2.png)

    This configures the scanner to send the prefix **002**.

6. Scan the **Configurable Suffix #1** barcode.

    ![alt text](media/config-scanner/configurable-suffix30.png)

7. Next, scan the following digits in order: `0` `0` `3`.

    ![alt text](media/config-scanner/configurable-suffix.png)
    ![alt text](media/config-scanner/configurable-suffix.png)
    ![alt text](media/config-scanner/configurable-suffix6.png)

    This configures the scanner to send the suffix **003**.

8. Scan the **Enter/Exit Programming** barcode again to exit programming mode and save the configuration.

    ![alt text](media/config-scanner/enter-programming.png)

### Result

The scanner is now configured to send:

- **Prefix:** `002`
- **Suffix:** `003`

The device is ready to use with **CompuTec WMS**.
