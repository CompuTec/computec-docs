---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation Overview

This guide provides an overview of the installation process for **CompuTec WMS 2.0** and **CompuTec WMS 3.0**.

The first steps depend on the version you are installing. Select your version below and follow the corresponding instructions.

## Choose your WMS version

<Tabs>
  <TabItem value="2.0" label="CompuTec WMS 2.0" default>

For **CompuTec WMS 2.0**, download the required **WMS Server** and **WMS Client** installation packages from [**Downloads**](/docs/wms/releases/download).

After downloading the installation packages, continue directly with [Install WMS Server](#install-wms-server).

## Before you start

Before installing CompuTec WMS:

- Review the [CompuTec WMS requirements](/docs/wms/administrator-guide/installation/requirements).

If you use **CompuTec ProcessForce**, additional components may be required. See the relevant installation instructions before continuing.

### Install and configure CompuTec WMS Server

Execute the installation process for the CompuTec WMS Server. [Read more](/docs/wms/administrator-guide/installation/wms-server/overview)

### Install and configure CompuTec WMS Client

Learn how to install the CompuTec WMS Client [here](../../administrator-guide/installation/wms-client/computec-wms-client-download.md)

**c. Configuration Client WMS**

1. Enter the WMS Server address and save the configuration

        ![WMS Server](./media/overview/wms-server.png)
2. Select the database by first entering your username and password

        ![Select Database](./media/overview/select-database.png)
3. Login with your credentials

        ![WMS Login](./media/overview/wms-login.png) ![WMS Menu](./media/overview/wms-menu.png)

### Important Changes

**a. CompuTec WMS Client**

1. Database selection requires entering a username and password first.

    ![Database](./media/overview/database.png)

**b. CompuTec WMS Server**

1. After selecting CompuTec WMS Server in the CompuTec Service Manager, provide a username and password.

    ![WMS Server](./media/overview/service-manager.webp)

2. Only databases configured in CompuTec AppEngine will be visible.

    ![Data Config](./media/overview/data-config.png)

    ![Database Name](./media/overview/database-name.png)

3. Installation of CompuTec WMS objects has now been moved to CompuTec AppEngine under CompuTec WMS.BusinessLogic.

    ![WMS Business Logic](./media/overview/wms-business-logic-01.png)

### Validations

    To ensure a seamless and error-free experience with CompuTec WMS, verify the following during installation and configuration:

1. Log in with your username and password to authenticate credentials before selecting a database.

    ![Login](./media/overview/login.png)

2. Verify CompuTec AppEngine connection by checking the connectivity to the CompuTec AppEngine server and confirm the accuracy of the data entered in the CompuTec WMS Server configuration.

    ![Connection](./media/overview/connection.png)

3. Ensure that the CompuTec ProcessForce API is updated to the latest version for compatibility.

    ![ProcessForce API](./media/overview/pf-api-version.png)

4. Verify that the installed CompuTec WMS version is compatible or update it directly via CompuTec AppEngine.

    ![WMS Version](./media/overview/install-wms.png)

5. If WMS.BusinessLogic is not linked to the selected database, assign it and ensure the correct CompuTec AppEngine instance is chosen.

    ![WMS Business Logic](./media/overview/wms-business-logic.png)

  </TabItem>

  <TabItem value="3.0" label="CompuTec WMS 3.0 Plugin" default>

For **CompuTec WMS 3.0**, install the **CompuTec WMS 3.0 Plugin** in CompuTec AppEngine first. The plugin provides access to the WMS Server installer required for the next stage of the installation.

Complete the following steps before continuing with the WMS Server installation.

## Before you start

Before installing CompuTec WMS:

- Review the [CompuTec WMS requirements](/docs/wms/administrator-guide/installation/requirements).
- Make sure **CompuTec AppEngine** is installed and configured.
- Make sure you have access to the **CompuTec AppEngine Administration Panel**.
- Make sure at least one CompuTec AppEngine instance is configured and active.
- Make sure you have the required SAP Business One and system administrator permissions.

If you use **CompuTec ProcessForce**, additional components may be required. See the relevant installation instructions before continuing.

## Installation process

Install and configure CompuTec WMS in the following order.

### Step 1: Install the CompuTec WMS plugin

To install and activate a CompuTec AppEngine WMS 3.0 plugin, follow these steps:

1. Log in to **CompuTec AppEngine Administration Panel**.

    ![log into computec appengine administration panel](media/plugin-installation/plugin-install1.png)

2. Go to **Plugins**.

    ![go to plugins section](media/plugin-installation/plugin-install2.png)

3. Navigate to **Store**.

    ![go to store section](media/plugin-installation/plugin-install3.png)

4. Find the plugin you want to install:

    - Use the **Search** field

        ![search field in the plugin store](media/plugin-installation/plugin-install4.png)

    - or filter by plugin type : **AppEngine Plugins**, **Business Logic**, or **SAP User Interface** plugins

        ![filter by plugin type in the plugin store](media/plugin-installation/plugin-install5.png)

    :::info[note]
    **Business Logic** plugins are typically installed automatically as dependencies when required by another plugin. You do not need to select or install them manually.
    :::

5. Click **Get...** next to the plugin name on the list to install the latest plugin version.

    ![search field in the plugin store](media/plugin-installation/plugin-install7.png)

6. (optional) To install a different version of the plugin:

    - Click the plugin name or the arrow next to the version number and click **Find different version**.

        ![click find different version to see a list of different plugin versions](media/plugin-installation/plugin-install8.png)

    - You will see the plugin details with all the available versions. [Read more](/docs/appengine/plugins-user-guide/overview#plugin-versions)

        ![a list of different plugin versions](media/plugin-installation/plugin-install9.png)

    - Find the version you want to install and click **Get**.

        ![click get next to a chosen plugin version](media/plugin-installation/plugin-install11.png)

7. Click **Get & Install** next to the chosen plugin version.

    ![click get & install next to a chosen plugin version](media/plugin-installation/plugin-install12.png)

8. Select **Company** for installation and click **Accept**.

    ![select company and click accept to install the plugin](media/plugin-installation/plugin-install13.png)

9. Select **CompuTec AppEngine Instance** for installation and click **Accept**.

    ![select instance and click accept to install the plugin](media/plugin-installation/plugin-install14.png)

10. Review the installation details and click **Perform Installation**.

    ![click perform installation to start installation](media/plugin-installation/plugin-install15.png)

11. Click **OK** to confirm the plugin installation.

    ![click ok](media/plugin-installation/plugin-install16.png)

12. You can now track the installation progress. Once the installation is complete, click **Close**.

    ![click close after the installation is finished](media/plugin-installation/plugin-install17.png)

13. Click **Yes** to restart the **CompuTec AppEngine**.

    ![click yes to restart appengine](media/plugin-installation/plugin-install18.png)

14. Once the restart is complete, click **OK**.

    ![after restart of appengine, click ok](media/plugin-installation/plugin-install19.png)

15. Done! The CompuTec WMS 3.0 plugin is now installed and ready to use.

:::info[Note]

You don’t need to manage dependencies manually. During the installation, the system automatically:

- installs all required plugins
- ensures compatible versions are used
- includes any missing components

This allows you to continue with the setup without additional configuration steps.
:::

#### After installation

After successful installation:

- the plugin appears in the **Downloaded** tab
- it is assigned to the selected **Company**
- it is active on the selected **CompuTec AppEngine Instance**
- the plugin is available in the **CompuTec AppEngine Launchpad**

    ![you can find your plugin in computec appengine launchpad after installation](media/plugin-installation/plugin-install20.png)

### Step 2: Download the CompuTec WMS Server installer

After the CompuTec WMS 3.0 plugin is installed:

1. Open the installed **CompuTec WMS plugin** in CompuTec AppEngine.

    ![alt text](media/plugin-installation/wms-serv-instal1.png)

2. Locate the link to the **CompuTec WMS Server installer**.

    ![alt text](media/plugin-installation/wms-serv-instal2.png)

3. Download the installer.

You will use this package to install CompuTec WMS Server in the next step.

### Step 3: Install and configure CompuTec WMS Server

Install **CompuTec WMS Server** using the installer downloaded from the CompuTec WMS plugin.

After installation, configure the server connection and the SAP Business One companies that will use CompuTec WMS.

:::note[info]
For detailed instructions, see [WMS Server Installation Guide](/docs/wms/administrator-guide/installation/wms-server/overview).
:::

### Step 4: Configure CompuTec WMS licensing

Configure the required CompuTec WMS licenses and assign them according to your environment.

For detailed instructions, see [WMS Licensing](/docs/wms/administrator-guide/installation/wms-licensing).

### Step 5: Install and configure CompuTec WMS Client

Install **CompuTec WMS Client** on the devices that will be used for warehouse operations.

Connect the client to the WMS Server and configure the required application settings.

For detailed instructions, see [WMS Client](/docs/wms/administrator-guide/installation/wms-client/computec-wms-client-download).

### Step 6: Configure additional components

Depending on your environment and warehouse processes, you may also need to configure additional components, including:

- **CompuTec Gateway Service** for weight scales and label printing
- **RDP scanner configuration**
- **SAP Business One settings**
- **CompuTec ProcessForce integration**

These components are not required in every environment. Configure only the components relevant to your implementation.

  </TabItem>
</Tabs>

---

### Activate WMS.BusinessLogic and WMS.Plugin

    ![Activate Plugins](./media/overview/activate-plugins.png)

### Activate WMS.Plugin Job

    ![Activate WMS Plugin](./media/overview/activate-wms-plugin.png)

### Install CompuTec.ProcessForce.API *

Install CompuTec.ProcessForce.API for customers utilizing CompuTec ProcessForce. This step is essential for ensuring compatibility with the CompuTec ProcessForce solution.
:::info
    Please uninstall the previous version of the CompuTec ProcessForce API first.
:::
   ![CT PF API](./media/overview/ct-pf-api.png)



---
