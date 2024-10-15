---
sidebar_position: 1
---

# Starting CompuTec WMS Client

CompuTec WMS Client offers various startup options, including server configuration, logging level, and user interface settings, to customize and optimize warehouse management workflows.

## Starting CompuTec WMS Settings

1. To run the desktop version of the CompuTec WMS Client, an installation and configuration of the CompuTec WMS Server is required. For further information, click [here](../administrator-guide/installation/wms-server/overview.md).
2. To start the CompuTec WMS Client desktop version, choose it from a program list or run the CompuTec.Client.Desktop.exe file in the CompuTec WMS Client installation folder.
3. CompuTec WMS splash screen overview
    When running the application for the first time, select the Settings button to set up server addresses.

    ![WMS Main Screen](./media/starting/wms-main-screen.png)

## Options Overview

### Configuration of WMS client-server Connection

The server address has to be the same as the address where the CompuTec WMS Server is installed.
The port number has to be the same as defined in the server settings (you can check it here).
Check the Scale checkbox if CompuTec WMS is planned to be used with a scale.

    ![WMS Client Server Connection](./media/starting/wms-client-server.png)

### Info icon

You can check the following information by clicking the 'i' icon:

    ![Info Details](./media/starting/info-details.png)

- Server Name
- Company Name
- Database Name
- Server Version
- Client Version (tap twice to [overwrite]( https://learn.computec.one/docs/wms/administrator-guide/computec-wms-android-version/#overwriting-a-client-version))
- Terminal ID

### Other Options

Other options include:

- *Enable Telemetry(not configured on server)*: Activate the feature to collect performance and usage data.
- *Large Menu Icons*: Increase icon size in the menu, with a layout change to two columns instead of three.
- *Auto-Focus on Quantity Field*: On the Quantity screen, the cursor will automatically move to the - Quantity field, simplifying the entry process.
- *Disable Formatting on Quantity Field*: Remove decimal places and separators from the Quantity field for a cleaner input.

    ![other Option](./media/starting/other-options.png)

{/*
Show buttons focus – highlight the buttons focused on

Use global settings –

Full screen – full-screen version of the main menu form

Full screen for login panel – full screen mode for the login panel (even if the screenshot mode is set for the application, the log-in panel has a fixed size, which may lead to the display of an unconventionally small log-in panel on some devices)
*/}

## Documents tab

Checking a specific checkbox displays the Warehouse Selection form of a particular transaction. If you want to use only one default warehouse, uncheck a checkbox for a required transaction and type in a required warehouse. Click [here](../administrator-guide/client-settings-warehouses/overview.md) to find out more.

![Document Tab](./media/starting/documents-tab.png)

## Saving Settings and logging in

Click Save or Cancel on the General tab to save or discard changes. It leads back to the log in form.

:::warning
Note that opening the Settings form and clicking Save (even without changing anything) is required to perform after the first installation of the application. This action creates the necessary configuration file to work with the application.
:::

1. After saving, the log-in window appears.

    ![Login](./media/starting/wms-login.png)
2. Type in a terminal username and password or log in by scanning the Employee Badge.
3. Click [here](../administrator-guide/installation/wms-licensing.md) to find out how to create a terminal user. Click a green icon or press Enter. If a terminal user has a barcode assigned, scanning the code logs in the user.

    ![WMS Users](./media/starting/wms-users.png)
4. In WMS Settings, right-click on the database and select User Settings. Then, check the box next to the user(s) who will have access to this database.

    ![User Settings](./media/starting/user-settings.png)

5. The main menu window appears.
The desktop version of CompuTec WMS Client is ready to work with.
