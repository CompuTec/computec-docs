---
sidebar_position: 3
---

# First Installation

This guide describes how to install CompuTec PDC for the first time. CompuTec PDC consists of two parts: the **CompuTec PDC** plugin, which runs in **CompuTec AppEngine**, and the **CompuTec PDC** client, which you install on the devices where operators register production data.

The setup consists of two steps:

1. **Install the CompuTec PDC plugin** – Installs the plugin for an SAP Business One company and activates it on a CompuTec AppEngine instance.
2. **Download and install the CompuTec PDC client** – Installs the client application on a device from the **CompuTec AppEngine Launchpad**.

:::info[note]

To upgrade an existing installation, read the [**Update CompuTec PDC guide**](/docs/pdc/administrator-guide/installation/application-upgrade).

:::

## Before you start

Before you begin, make sure that:

- All hardware and software requirements are met. [Read more](/docs/pdc/administrator-guide/installation/requirements)
- **CompuTec AppEngine** is installed and configured. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation)
- You can log in to the **CompuTec AppEngine Administration Panel**.
- You can log in to the **CompuTec AppEngine Launchpad** with an SAP Business One user.

## Step 1: Install the CompuTec PDC plugin

To install the **CompuTec PDC** plugin, follow these steps:

1. Log in to the **CompuTec AppEngine Administration Panel**.
2. Go to **Plugins** > **Store**.
3. Find **PDC** and click **Get** next to it.

   ![The Store tab in the Plugins page of the CompuTec AppEngine Administration Panel, with the PDC plugin row highlighted](media/first-installation/install-pdc1.png)

4. In **Select Company for installation**, select the company where you want to install CompuTec PDC, and click **Accept**.

   ![The Select Company for installation dialog with the PF Demo (GB) company selected and the Accept button visible](media/first-installation/install-pdc2.png)

5. In **Select AppEngine Instance for installation**, select the CompuTec AppEngine instance on which you want to activate the plugin, and click **Accept**.

   ![The Select AppEngine Instance for installation dialog with the Default instance selected and the Accept button visible](media/first-installation/install-pdc3.png)

6. In the **Installing Plugin PDC on Company** window, make sure **Install on this company** is set to **YES**.
7. Click **Perform Installation**.

    ![The Installing Plugin PDC on Company window showing the plugin, company, and AppEngine details with the Perform Installation button](media/first-installation/install-pdc4.png)

8. Wait until the installation is complete, and then click **Close**.

    ![The Installing Plugin PDC on Company window showing the installation progress](media/first-installation/install-pdc5.png)

Done! The **CompuTec PDC** plugin is installed and activated.

## Step 2: Download and install the CompuTec PDC client

You download the **CompuTec PDC** client from the **CompuTec AppEngine Launchpad**. Perform this step on each device where you want to use CompuTec PDC.

To download and install the **CompuTec PDC** client, follow these steps:

1. Open the **CompuTec AppEngine Launchpad** in your browser.
2. Under **Choose your workspace**, select **Launchpad**.

    ![The CompuTec AppEngine login page with Launchpad selected under Choose your workspace and the Log in with SAP Business One button](media/first-installation/install-pdc6.png)

3. Click **Log in with SAP Business One**.

4. On the **Launchpad**, click the **Production Data Capture (PDC)** tile.

    ![The CompuTec AppEngine Launchpad with the Production Data Capture (PDC) tile highlighted](media/first-installation/install-pdc7.png)

5. In **CompuTec PDC**, click the **Download** tile.
    ![The CompuTec PDC page with the Download tile highlighted next to the Quantity Registration tile](media/first-installation/install-pdc8.png)

6. In **Available Files**, click the `CompuTec.PDC.Setup` installation file with the `.msi` extension to download it.

   ![The Available Files list on the CompuTec PDC Plugin page showing the CompuTec.PDC.Setup MSI file with its download icon highlighted](media/first-installation/install-pdc9.png)

7. Run the downloaded file.

8. In the **Install CompuTec PDC?** window, click **Install**.

   ![The Install CompuTec PDC? window showing the publisher and version, with the Install button highlighted](media/first-installation/install-pdc10.png)

9. Wait until the installation is complete.

   ![The Install CompuTec PDC? window showing the publisher and version, with the Install button highlighted](media/first-installation/install-pdc11.png)

Done! The **CompuTec PDC** client is installed on the device.

## Verify the installation

To verify the installation, check that:

- The **Production Data Capture (PDC)** tile is available on the **CompuTec AppEngine Launchpad**.
- The **CompuTec PDC** client is installed on the device.

## Next steps

After the installation, configure **CompuTec PDC** for your company.

See [**Configure CompuTec PDC**](/docs/pdc/administrator-guide/setting-up-the-application/overview) for the configuration process.
