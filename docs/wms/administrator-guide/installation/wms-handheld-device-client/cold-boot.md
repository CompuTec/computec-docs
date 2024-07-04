---
sidebar_position: 2
---

# Cold Boot

If the mobile device stops responding to input, it should be restarted. A warm boot restarts the device by closing all running programs.

A cold boot is required to run the device if the warm boot cannot be performed. The cold reboot restarts the mobile computer but erases all stored records and entries from RAM. Additionally, it returns the device to its factory default settings.

:::caution
    The following instruction is based on Motorola MC31XX Series Mobile Computer devices. Note the details, e.g., location paths and libraries (on Motorola - Symbol), which may vary depending on the used device.
:::

---

To avoid erasing CompuTec WMS and its configuration from the device on cold boot (intentional or, e.g., caused by a power outage), the following steps have to be performed:

1. Download <!--[the file pack](./media/ColdBoot.rar)-->.
2. Unpack it.
3. Place the files in the "\application\" location on the device.
4. Swap the "CompuTecWMSClientWindowsCE_93.CAB" file to a CompuTec WMS installer that you are using (e.g., "CompuTecWMSClientWindowsCE_10.0_2.10.8.1.CAB"). You can download the installers from [here](../../../releases/download.md).
5. Change the installer name to "CompuTecWMSClientWindowsCE_93.CAB".

If installation of .NET Compact Framework is required for a specific device, the following steps have to be performed:
<details>
    <summary>Click here to find out more</summary>
    <div>
:::info
    .NET Compact Framework availability depends on a device specification, e.g., devices with Windows CE 5.0 system must manually install .NET Compact Framework. Devices with CE 7.0 have the functionality installed by default.
:::
    </div>
    </details>

1. Download .NET Compact Framework from here.
2. Place it in the `\application\` location on the device.
3. Add the following line to `wms.CPY` file:
        ```text
        \application\NETCFv35.wce.armv4  > \windows\NETCFv35.wce.armv4
        ```

4. Add the following lines to the `wms.reg` file:
        ```text
        [HKEY_CURRENT_USER\Software\Symbol\Startup\Programs\Prog12]
        "Name"="\windows\wceload.exe"
        "Command"="\Windows\NETCFv35.wce.armv4"
        "Continue"=dword:0
        "ColdBootOnly"=dword:1
        ```

To keep CompuTec WMS configuration available after a cold boot, perform the following steps:

1. After configuring CompuTec WMS, copy the app.config file from the `\Program Files\CompuTec WMS 1.0.0` location to the `\application\` location.

2. Add the following line to wms.CPY file:
        ```text
        \application\app.config > \Program Files\CompuTec WMS 1.0.0\app.config
        ```
