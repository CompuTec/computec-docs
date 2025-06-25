---
sidebar_position: 1
---

# Overview

CompuTec WMS is a robust Warehouse Management System designed to streamline warehouse operations and ensure seamless integration with SAP Business One. This guide outlines the step-by-step process for installing, configuring and validating the core components of the WMS solution. The instructions provided here are crucial for ensuring optimal performance and compatibility of WMS with your business processes.

---

## Step-by-Step Installation and Configuration

### Download WMS.BusinessLogic and WMS.Plugin

Obtain the latest versions of WMS.BusinessLogic and WMS.Plugin.

    ![Store](./media/overview/store.png)

    ![Plugins Name](./media/overview/plugin-01.png)

    ![Get plugin](./media/overview/get-plugin.png)

    ![Other versions](./media/overview/other-versions.png)

### Activate WMS.BusinessLogic and WMS.Plugin

    ![Activate Plugins](./media/overview/activate-plugins.png)

### Activate WMS.Plugin Job

    ![Activate WMS Plugin](./media/overview/activate-wms-plugin.png)

### Download the WMS Server Installer

Download the installer for the WMS Server application

    ![Plugin](./media/overview/plugin.png)

    ![WMS Plugin](./media/overview/wms-plugin.png)

### Install CompuTec.ProcessForce.API *

Install CompuTec.ProcessForce.API for customers utilizing ProcessForce. This step is essential for ensuring compatibility with the ProcessForce solution.
:::info
    Please uninstall the previous version of the ProcessForce API first.
:::
   ![CT PF API](./media/overview/ct-pf-api.png)

### Install WMS Server

Execute the installation process for the WMS Server.
Learn how to install the WMS Client [here](../../administrator-guide/installation/wms-client/computec-wms-client-download.md)

### Configuration

**a. CompuTec Service Manager**

    - Import the license file

        ![Import license](./media/overview/import-license.png)
    
    -  Optionally, configure new users to automatically obtain licenses upon connection

        ![Configure New Users](./media/overview/license-mngt.png)
    
    - Set up WMS users and provide credentials for access

**b. WMS Server**

    - Enter the address of the CompuTec AppEngine server, and provide the username and password for the SAP Business One system.

        ![WMS Settings](./media/overview/wms-settings.png)
    
    - Refresh the settings

        ![Refresh Settings](./media/overview/select-refresh.png)

        ![Refresh Company List](./media/overview/refresh-co-list.png)
    
    - Save the configuration

        ![Save config](./media/overview/save-config.png)
    
    - Assign users to the appropriate database and configure the language of the WMS interface

        ![User Settings](./media/overview/user-settings.png)
    
    - Enter custom configuration

        ![Custom config](./media/overview/custom-config.png)

**c. Configuration Client WMS**

    - Enter the WMS Server address and save the configuration

        ![WMS Server](./media/overview/wms-server.png)
    
    - Select the database by first entering your username and password

        ![Select Database](./media/overview/select-database.png)
    
    - Login with your credentials
    
        ![WMS Login](./media/overview/wms-login.png) ![WMS Menu](./media/overview/wms-menu.png)

### Important Changes

**a. WMS Client**

- Database selection requires entering a username and password first.

    ![Database](./media/overview/database.png)

**b. WMS Server**

- After selecting WMS Server in the CompuTec Service Manager, provide a username and password.

    ![WMS Server](./media/overview/service-manager.webp)

- Only databases configured in CompuTec AppEngine will be visible.

    ![Data Config](./media/overview/data-config.png)

    ![Database Name](./media/overview/database-name.png)

- Installation of WMS objects has now been moved to CompuTec AppEngine under WMS.BusinessLogic.

    ![WMS Business Logic](./media/overview/wms-business-logic-01.png)

### Validations

    To ensure a seamless and error-free experience with CompuTec WMS, verify the following during installation and configuration:

- Log in with your username and password to authenticate credentials before selecting a database.

    ![Login](./media/overview/login.png)

- Verify CompuTec AppEngine connection by checking the connectivity to the CompuTec AppEngine server and confirm the accuracy of the data entered in the WMS Server configuration.

    ![Connection](./media/overview/connection.png)

- Ensure that the ProcessForce API is updated to the latest version for compatibility.

    ![ProcessForce API](./media/overview/pf-api-version.png)

- Verify that the installed WMS version is compatible or update it directly via CompuTec AppEngine.

    ![WMS Version](./media/overview/install-wms.png)

- If WMS.BusinessLogic is not linked to the selected database, assign it and ensure the correct CompuTec AppEngine instance is chosen.

    ![WMS Business Logic](./media/overview/wms-business-logic.png)

---
