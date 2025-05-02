---
sidebar_position: 2
---

# Cold Boot

A cold boot is necessary when a mobile device becomes unresponsive to input and a warm boot (a restart without fully powering off) is not possible.  This guide outlines how to preserve CompuTec WMS settings and ensure that they are not erased during a cold boot, even in scenarios such as unintentional power outages. A cold boot restarts the mobile device but clears all data stored in RAM, returning the device to its factory default settings.

:::note
    The following instructions are specific to Motorola MC31XX Series Mobile Computer devices. Please note that details such as location paths and libraries (on Motorola - Symbol) may vary depending on the device in use.
:::

---

To prevent the loss of CompuTec WMS and its configuration during a cold boot (whether intentional or due to events like a power outage), follow these steps:

1. Download the necessary [file pack](https://connect.computec.pl/download/attachments/139691704/ColdBoot.rar?version=1&modificationDate=1607340510133&api=v2) for your device.
2. Unpack the files and place them in the \application directory on the mobile device.
3. Swap the existing "CompuTecWMSClientWindowsCE_93.CAB" file with the CompuTec WMS installer version you are using (e.g., "CompuTecWMSClientWindowsCE_10.0_2.10.8.1.CAB"). You can download the installers from [here](https://learn.computec.one/docs/wms/releases/download).
4. Ensure that the installer is renamed to "CompuTecWMSClientWindowsCE_93.CAB" for compatibility.

If the installation of the .NET Compact Framework is necessary for a particular device, follow these steps:

:::info
    The availability of the .NET Compact Framework depends on the device specifications. For example, devices running Windows CE 5.0 require manual installation of the framework, while devices with CE 7.0 have it pre-installed by default.
:::

1. Download .NET Compact Framework from [here](https://connect.computec.pl/display/WMS100EN/WMS+Handheld+Device+Client).
2. Place it in the "\application\" directory on the device.
3. Add the following line to "wms.CPY" file and "wms.reg" file:
    - wms.CPY file:

        ```text
        \application\NETCFv35.wce.armv4  > \windows\NETCFv35.wce.armv4
        ```

    - wms.reg file:

        ```csharp
        [HKEY_CURRENT_USER\Software\Symbol\Startup\Programs\Prog12]
        "Name"="\windows\wceload.exe"
        "Command"="\Windows\NETCFv35.wce.armv4"
        "Continue"=dword:0
        "ColdBootOnly"=dword:1
        ```

To keep CompuTec WMS configuration available after a cold boot, perform the following steps:

1. After configuring CompuTec WMS, copy the app.config file from the "\Program Files\CompuTec WMS 1.0.0" directory to the "\application\ " directory.

2. Add the following line to the wms.CPY file:

        ```text
        \application\app.config > \Program Files\CompuTec WMS 1.0.0\app.config
        ```

This ensures that even after a cold boot, the WMS configuration will be preserved and automatically reapplied, preventing the loss of critical settings and data.

---
