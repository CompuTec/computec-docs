---
sidebar_position: 3
---

# Configuration of Scales for CompuTec WMS Client for Handheld Devices

This guide provides step-by-step instructions for configuring scales for CompuTec WMS (Warehouse Management System) client on handheld devices. Following these instructions ensures a smooth setup and proper integration of the scales with the CompuTec WMS system, enabling accurate data capture and streamlined warehouse operations.

---

## Steps for Configuration

1. Turn on Microsoft Message Queue Server (MSMQ) in the same environment as Gateway Manager, To ensure seamless communication between the handheld devices and the Gateway Manager.

    1. Open "Windows Features".

        ![Windows Features](./media/msmq.webp)
2. Install the [MSMQ package](https://download.computec.one/software/wms/tools/msmq.arm.cab) on the handheld devices with CompuTec WMS:

    1. Connect the handheld scanner to the PC.
    2. Copy the MSMQ package to the application location along with the CompuTec WMS application.
    3. Install the package on the handheld device.
3. For detailed guidance on integrating Weight Scales with the handheld devices, refer to the relevant [documentation](/docs/pdc/administrator-guide/weight-scales-integration/overview).
4. For detailed guidance on integrating CompuTec WMS with the handheld devices, refer to the relevant [documentation](../../administrator-guide/installation/computec-gateway-service/computec-gateway-service-installation.md).

---
