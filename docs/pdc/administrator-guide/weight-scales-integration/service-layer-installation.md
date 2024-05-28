---
sidebar_position: 2
---

# Service Layer (CT AppEngine) Installation

This document provides a step-by-step guide on how to install the CompuTec Service Layer client.

---

## Prerequisities

- Configure your firewall to make the 8080 port available
- .Net Framework 4.7 is required

## Installation

1. To install the Computec Service Layer client download and run its installation file – you can find it here<!-- TODO: Link -->.
2. Check the checkbox after reading the message about installation preparation:

    ![Setup 1](./media/service-layer-installation/setup-1.webp)
3. Click the Install button to start the installation. A default installation path is "C:\Program Files\CompuTec\CompuTec Service Layer\".

    ![Setup 2](./media/service-layer-installation/setup-2.webp)
4. Click the Close button after reading the message to finish installation:

    ![Setup 3](./media/service-layer-installation/setup-3.webp)
5. When the installation is complete, go to the system services and find CompuTec.ServiceLayer service. If it is enabled then turn it off.

    ![Services](./media/service-layer-installation/services.webp)
6. Go to the CompuTec Service Layer installation folder and paste the Plugins directory that you can find here<!-- TODO: Link -->:

    ![Plugins](./media/service-layer-installation/plugins.webp)
7. Turn CompuTec.ServiceLayer service on.
8. Service is ready to run. You can start it by clicking the shortcut created in the Windows program list.
9. Next, go to the [CompuTec Gateway Service Installation](./gateway-service-installation.md) section.
