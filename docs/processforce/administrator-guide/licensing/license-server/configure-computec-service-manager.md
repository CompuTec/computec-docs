---
sidebar_position: 3
---

# Configure CompuTec Service Manager

**CompuTec Service Manager** is part of the **CompuTec License Server** suite. It provides a central location for managing CompuTec services and licensing components.

Using **CompuTec Service Manager**, you can:

- Start, stop, and restart CompuTec services.
- Configure service settings.
- Manage terminal licenses and licensing components for CompuTec solutions.
- Review and update **License Server** settings.
- Access service logs and diagnostic information.

## Before you start

Before you begin, make sure that:

- CompuTec **License Server** is installed.
- You have ``administrator`` permissions on the Windows server.

:::note[info]

For installation instructions, see the [**CompuTec License Server Installation**](computec-license-server-installation.md) guide.
:::

## Use CompuTec Service Manager

1. Open the **Windows Start menu**.
2. Locate and launch **CompuTec Service Manager**.

   ![alt text](media/lic-serv-config/lic-serv-config1.png)

3. After the application starts, the CT icon appears in the Windows notification area.

4. Click the **CT icon** to open the **CompuTec Service Manager** window.

   ![alt text](media/lic-serv-config/lic-serv-config2.png)

5. The main **Service Manager** window displays all available CompuTec services.

   ![alt text](media/lic-serv-config/lic-serv-config3.png)

   From here, you can:

   - **Start** a service.
   - **Stop** a service.
   - **Refresh** a service.
   - Open service-specific **Settings**.
   - Manage licenses for **CompuTec PDC** (**Plant Data Capture**) and **CompuTec WMS** (**Warehouse Management System**).

6. To access service settings:

   - Select the service from the list.

      ![alt text](media/lic-serv-config/lic-serv-config4.png)

   - Click **Settings**.

      ![alt text](media/lic-serv-config/lic-serv-config4-1.png)

7. You can use these options when troubleshooting services, applying configuration changes, or restarting services after updates.

   ![alt text](media/lic-serv-config/lic-serv-config5.png)

   In the **Server Settings** tab, you can:
   - View or update **Server Name**: The name of the **CompuTec License Server**.
   - View or update **Port Number**: The communication port used by the **CompuTec License Server**. The default value is recommended unless your environment requires a different port.
   - Test the server connection: Click **Test** next to the port number.

      ![alt text](media/lic-serv-config/lic-serv-config6.png)

   - Configure additional parameters:  
      - **Logging Level**: Controls the amount of information written to log files.
      - **Log Location**: Displays the location where log files are stored.

## Result

After completing these steps, you can:

- Access and manage CompuTec services from a single location.
- Start, stop, and restart CompuTec services.
- Manage licensing for **CompuTec PDC** and **CompuTec WMS**.
- Review and update **CompuTec License Server** settings.
- Configure logging options for troubleshooting and diagnostics.
