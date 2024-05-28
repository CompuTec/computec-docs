---
sidebar_position: 7
---

# Weighting Device Drivers

Here, you can find information on weighting device drivers: the ones available by default, and tips on creating your own.

## Currently Supported Devices

Precisa:

- XB320M
- 480S/BK1200D
- XB120A

Mettler Toledo:

- ICS429

Avery Weigh-Tronix

- ZM510

The devices are available to choose from the CompuTec Gateway Manager:

![Gateway devices](./media/weighting-device-drivers/gateway-devices.webp)

'CT Test Weight Scale' is a test driver that generates random weighting data for test purposes.

## Custom Driver Creation and Usage

It is possible to create your driver for a device not listed in the available devices list from the previous point.

:::note
    If a required device is not on the list in the previous paragraph and you are unwilling or unable to create a driver, the CompuTec team can do it for you for a fee. To order such a service, please create a support ticket at [CompuTec Support](https://support.computec.pl).
:::

### A Driver Creation

The following example is created using Microsoft Visual Studio.

1. Create a project:

    ![Driver](./media/weighting-device-drivers/new-driver-project.webp)
2. Add dependencies to the provided libraries:

    - Computec.WeightScale.dll<!-- TODO: Link -->
    - CompuTec.ProcessForce.WeightScaleBase.dll<!-- TODO: Link -->
3. Prepare a class of the drive:

    ![Class preparation](./media/weighting-device-drivers/class-preparation.webp)
4. Implement the methods and update them in accordance with the device requirements:

    ![Method implementation](./media/weighting-device-drivers/method-implementation.webp)

You can check the class in the example driver (CT Test Weight Scale). You can download it from here<!-- TODO: Link -->.

### Usage

Once the driver is created, place it in the following directory (this is the default installation directory):

![Driver directory](./media/weighting-device-drivers/driver-directory.webp)

Now, the driver should be available in the list in CompuTec Gateway Manager (please check the top screenshot on this page).
