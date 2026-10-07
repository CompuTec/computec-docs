---
sidebar_position: 1
---

# Install CompuTec WMS 3.0

This guide explains how to set up **CompuTec WMS 3.0**, including plugin installation, server and client configuration, licensing, and user access.

:::info[note]
Please note that **CompuTec WMS 2.0** will be supported only **until the end of 2026**. After this time, WMS 2.0 will no longer receive regular support or maintenance updates.

We recommend planning your upgrade to **CompuTec WMS 3.0**.
:::

CompuTec WMS 3.0 uses **CompuTec AppEngine** for its plugin-based components.

## Before you start

Before you start, make sure:

- You have reviewed the [CompuTec WMS requirements](/docs/wms/administrator-guide/installation/requirements)
- **CompuTec AppEngine** is installed and configured. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation)
- You have access to the **CompuTec AppEngine Administration Panel**.
- At least one **CompuTec AppEngine instance** is configured and active.
- You have the required **SAP Business One and system administrator permissions**.

If you use **CompuTec ProcessForce**, additional components may be required. See the relevant installation instructions before continuing.

## Step 1: Install the CompuTec WMS 3.0 Plugin

To install and activate a CompuTec AppEngine WMS 3.0 plugin, follow these steps:

1. Log in to **CompuTec AppEngine Administration Panel**.

    ![log into computec appengine administration panel](media/plugin-installation/plugin-install1.png)

2. Go to **Plugins**.

    ![go to plugins section](media/plugin-installation/plugin-install2.png)

3. Navigate to **Store**.

    ![go to store section](media/plugin-installation/plugin-install3.png)

4. Install and activate `WMS.Plugin` in CompuTec AppEngine. The required `WMS.BusinessLogic` plugin is installed automatically as a dependency.

5. Click **Get...** next to the plugin name on the list to install the latest plugin version.

    ![search field in the plugin store](media/plugin-installation/plugin-install7.png)

6. Click **Get & Install**.

    ![click get & install next to a chosen plugin version](media/plugin-installation/plugin-install12.png)

7. Select **Company** for installation and click **Accept**.

    ![select company and click accept to install the plugin](media/plugin-installation/plugin-install13.png)

8. Select **CompuTec AppEngine Instance** for installation and click **Accept**.

    ![select instance and click accept to install the plugin](media/plugin-installation/plugin-install14.png)

9. Review the installation details and click **Perform Installation**.

    ![click perform installation to start installation](media/plugin-installation/plugin-install15.png)

10. Click **OK** to confirm the plugin installation.

    ![click ok](media/plugin-installation/plugin-install16.png)

11. You can now track the installation progress. Once the installation is complete, click **Close**.

    ![click close after the installation is finished](media/plugin-installation/plugin-install17.png)

12. Click **Yes** to restart the **CompuTec AppEngine**.

    ![click yes to restart appengine](media/plugin-installation/plugin-install18.png)

13. Once the restart is complete, click **OK**.

    ![after restart of appengine, click ok](media/plugin-installation/plugin-install19.png)

14. The CompuTec WMS 3.0 Plugin is now installed. Continue with the setup steps below.

    After successful installation:

    - the plugin appears in the **Downloaded** tab
    - it is assigned to the selected **Company**
    - it is active on the selected **CompuTec AppEngine Instance**
    - the plugin is available in the **CompuTec AppEngine Launchpad**

    ![you can find your plugin in computec appengine launchpad after installation](media/plugin-installation/plugin-install20.png)

## Step 2: Activate the WMS background processing job

After installing and activating the CompuTec WMS 3.0 Plugin, activate the required **WMS background processing job** in CompuTec AppEngine.

1. Go to **CompuTec AppEngine Administration Panel** > **Background Processing**.

    ![alt text](media/overview/wms-backgr-jobs1.png)

2. Filter Jobs by **Plugin Name** containing `wms`, and click **Go** to apply filters.

    ![alt text](media/overview/wms-backgr-jobs2.png)

3. Mark all the WMS plugins in the list and click **Action** > **Activate**.

    ![alt text](media/overview/wms-backgr-jobs3.png)

4. Select a company and click **Accept**.

    ![alt text](media/overview/wms-backgr-jobs4.png)

5. Now all WMS Background Processing jobs are active.

    ![alt text](media/overview/wms-backgr-jobs5.png)

:::info[Note]
This step applies to **CompuTec WMS 3.0** only.
:::

## Step 3: Download and install CompuTec WMS Server

To download and install **CompuTec WMS Server**, follow these steps:

1. Open the installed **CompuTec WMS plugin** in CompuTec AppEngine.

    ![alt text](media/plugin-installation/wms-serv-instal1.png)

2. Locate the link to the **CompuTec WMS Server installer**.

    ![alt text](media/plugin-installation/wms-serv-instal2.png)

3. Download the installer.

4. Install **CompuTec WMS Server** using the installer downloaded from the CompuTec WMS plugin.

    After installation, configure the server connection and the SAP Business One companies that will use CompuTec WMS.

    :::note[info]
    For detailed instructions, see [WMS Server Installation and Configuration Guide](/docs/wms/administrator-guide/installation/wms-server/overview).
    :::

## Step 4: Install CompuTec ProcessForce API, if ProcessForce is installed

If **CompuTec ProcessForce** is installed in the SAP Business One environment, you must also install the **CompuTec ProcessForce API Plugin**.

CompuTec WMS detects that ProcessForce is installed and requires the **ProcessForce API** to communicate with it correctly.

1. Go to **CompuTec Administration Panel** > **Plugins** > **Store**.

2. Install the **CompuTec ProcessForce API** following the same plugin installation process used for the CompuTec WMS 3.0 Plugin.

    ![alt text](media/overview/pfapi-install1.png)

3. Go to CompuTec.API Plugin **Description**, and click the link to download CompuTec ProcessForce API for WMS.

    ![alt text](media/pfapiwms.png)

4. Follow the installation steps.

    ![alt text](media/pfapiwms2.png)

:::info[Note]
If CompuTec ProcessForce is not installed in your environment, you can skip this step.
:::

## Step 5: Configure CompuTec WMS licensing

Configure the required **CompuTec WMS licenses** and assign them according to your environment.

:::note[info]
For detailed instructions, see [WMS Licensing](/docs/wms/administrator-guide/installation/wms-licensing).
:::

## Step 6: Install CompuTec WMS Client

Download and install **CompuTec WMS Client** on the devices that will be used for warehouse operations.

:::note[info]
For detailed instructions, see [Download CompuTec WMS Client](/docs/wms/administrator-guide/installation/wms-client/computec-wms-client-download).
:::

## Step 7: Configure CompuTec WMS Client

Connect the **WMS Client** to the **WMS Server** and configure the required client settings.

:::note[info]
For detailed instructions, see [Configure CompuTec WMS Client](/docs/wms/administrator-guide/installation/wms-client/configuration).
:::

## Validations

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

## Additional Configuration

Depending on your environment and warehouse processes, additional configuration may be required, such as:

- CompuTec Gateway Service for weight scales and label printing
- RDP scanner configuration
- SAP Business One settings
- Barcode configuration
- Company-specific WMS settings

For company-specific application settings, see [Custom Configuration](/docs/wms/administrator-guide/custom-configuration/overview).

## Important Changes in CompuTec WMS 3.0

:::info[Upgrading from WMS 2.0?]
If you have previously installed or administered **CompuTec WMS 2.0**, review these changes before configuring WMS 3.0. They describe differences in the installation and configuration process that may affect an existing WMS environment.
:::

If you are **upgrading from CompuTec WMS 2.0 to 3.0**, be aware of several changes to the installation and configuration process:

- **CompuTec WMS 3.0** uses **CompuTec AppEngine** for plugin installation and management.
- Only databases configured in **CompuTec AppEngine** are available to **CompuTec WMS Server**.

    ![Data Config](./media/overview/data-config.png)

    ![Database Name](./media/overview/database-name.png)

- WMS plugin components and their dependencies are managed through **CompuTec AppEngine**.
- WMS background processing jobs must be activated in **CompuTec AppEngine**.
- The WMS Server installer is available from the installed WMS Plugin in the **CompuTec AppEngine Administration Panel**.
- In **CompuTec WMS Client**, database selection requires entering a username and password first.

    ![Database](./media/overview/database.png)

- In **CompuTec WMS Server**, after selecting **CompuTec WMS Server** in the **CompuTec Service Manager**, provide a username and password.

    ![WMS Server](./media/overview/service-manager.webp)

- Installation of **CompuTec WMS** objects has now been moved to **CompuTec AppEngine** under **CompuTec WMS.BusinessLogic**.

## Quick start

Follow these steps to set up CompuTec WMS 3.0 and prepare it for use.

### Install the components

1. Install **CompuTec License Server**.
2. Install and activate `WMS.Plugin` and `WMS.BusinessLogic` in CompuTec AppEngine.
3. Install **CompuTec WMS Server**.

### Request and import a license

1. Open **CompuTec Service Manager**.
2. Select **CompuTec License Server** from the **Service** list.
3. Click **PDC/WMS Licensing**.

   ![PDC/WMS Licensing in CompuTec Service Manager](media/overview/wms-qs1.png)

4. On the **Import** tab, click **Copy to Clipboard** to copy the terminal license key.

   ![Copying the terminal license key](media/overview/wms-qs2.png)

5. Create a license request in the [CompuTec Support Portal](https://support.computec.pl/). Include the following information:

   - Full server name.
   - Terminal license key.
   - Required number of terminal licenses.
   - Intended use, such as customer use or partner testing.

6. After you receive the license file, return to the **Import** tab.
7. Click **Browse** and select the license file.

    ![clicking browse next to the license file location field](media/overview/wms-qs23.png)

8. Click **Import**.

### Add and activate users

1. Open the **WMS Users** tab.
2. Click **Add**.

   ![Adding users on the WMS Users tab](media/overview/wms-qs3.png)

3. Enter the CompuTec WMS user credentials and the associated SAP Business One user credentials.
4. Select **Is Active** for the user.
5. Click **Update**.
6. Repeat these steps for each user.

### Configure license assignment

1. Open the **License Management** tab.
2. Select **Assign available licenses for newly added terminal accounts automatically**.

   Available licenses will be assigned automatically to new terminals.

   ![Automatic terminal license assignment](media/overview/wms-qs4.png)

3. Open the **Plugins** tab.
4. Select **Used** for the CompuTec WMS Server entry.
5. Click **Update**.

   ![Assigning a license to CompuTec WMS Server](media/overview/wms-qs6.png)

:::note
The **CompuTec WMS Server** entry may appear only after the first attempt to log in to **CompuTec WMS Client**. If the entry is missing, attempt to log in, then return to the **Plugins** tab to assign the server license.
:::

### Enable users for a company

1. Run **WMS Settings** as an administrator.
2. Right-click the company and select **Users Settings**.
3. Select **Enable** for each user who needs access to the company.
4. Select a **Language** for each enabled user.

   ![Enabling users and selecting their interface language](media/overview/wms-qs7.png)

5. Click **Save** in the **User Settings** window.

### Log in

1. Open **CompuTec WMS Client**.
2. Log in with the **CompuTec WMS user credentials**.
