---
sidebar_position: 1
---

# Install CompuTec KSeF Plugin

The **CompuTec KSeF** plugin runs in **CompuTec AppEngine** and must be installed and activated for each **SAP Business One** company that will use the KSeF integration.

You install the plugin from the **Plugins** page in the **CompuTec AppEngine Administration Panel**.

The setup consists of three steps:

1. **Download the CompuTec KSeF Plugin** – Adds the required plugin version to the CompuTec AppEngine repository.
2. **Install the CompuTec KSeF Plugin for a company** – Assigns the plugin to the selected SAP Business One company and applies any required database changes.
3. **Activate the CompuTec KSeF Plugin on a CompuTec AppEngine instance** – Assigns the plugin to an instance and makes the KSeF functionality available at runtime.

:::info[Note]
Only one version of the **CompuTec KSeF Plugin** can be active on a single **CompuTec AppEngine** instance at a time.
:::

## Before you start

Before you start, make sure that:

- **CompuTec AppEngine** is installed and activated. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation)
- You have access to the **CompuTec Administration Panel**.
- At least one **CompuTec AppEngine** instance is configured and active. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation#step-5-activate-a-company-in-computec-appengine).
- Disable any custom code in the ``SP_TransactionNotification`` and ``SP_PostTransactionNotice`` stored procedures before installing the plugins. After the installation is completed successfully, you can re-enable your custom code.

## Install and activate CompuTec KSeF

To install and activate **CompuTec KSeF** follow these steps:

1. Log in to **CompuTec AppEngine Administration Panel**.

    ![alt text](media/plugin-install1.png)

2. Go to **Plugins**.

    ![alt text](media/ksef-plugin-inst1.png)

3. Navigate to **Store**.

    ![alt text](media/ksef-plugin-inst2.png)

4. Find the **CompuTec.KSeF** plugin, and click **Get...** next to the plugin name on the list to install the latest plugin version.

    ![alt text](media/ksef-plugin-inst3.png)

    :::note[info]
    (optional) To install a different version of the plugin:

    - Click the plugin name or the arrow next to the version number and click **Find different version**.
    - You will see the plugin details with all the available versions. [Read more](/docs/appengine/plugins-user-guide/overview#plugin-versions)
    - Find the version you want to install and click **Get**.
    :::

5. Click **Get & Install**.

    ![alt text](media/ksef-plugin-inst4.png)

6. Click **+ Assign to AppEngine**.

    ![alt text](media/ksef-plugin-inst5.png)

7. Select **Company** for installation and click **Accept**.

    ![alt text](media/ksef-plugin-inst6.png)

8. Select **CompuTec AppEngine Instance** for installation and click **Accept**.

    ![alt text](media/ksef-plugin-inst7.png)

9. Review the installation details and click **Perform Installation**.

    ![alt text](media/ksef-plugin-inst8.png)

10. Click **OK** to confirm the plugin installation.

    ![alt text](media/ksef-plugin-inst9.png)

11. You can now track the installation progress. Once the installation is complete, click **Close**.

    ![alt text](media/ksef-plugin-inst11.png)

12. Click **Yes** to restart the **CompuTec AppEngine**.

    ![alt text](media/ksef-plugin-inst12.png)

13. Once the restart is complete, click **OK**.

14. Done! The plugin is now installed and ready to use.

    ![alt text](media/ksef-plugin-inst14.png)

:::info[Note]

You do not need to manage dependencies for the **CompuTec KSeF** plugin manually. During installation, **CompuTec AppEngine** automatically:

- Installs any required plugins and components.
- Selects compatible versions.
- Adds any missing dependencies.

No additional dependency configuration is required.
:::

## After installation

After you successfully install and activate the **CompuTec KSeF** plugin:

- The plugin appears on the **Downloaded** tab.
- The plugin is assigned to the selected **SAP Business One** company.
- The plugin is active on the selected **CompuTec AppEngine** instance.
- **CompuTec KSeF** is available from the **CompuTec AppEngine Launchpad**.

:::info[Note]

For information about new **CompuTec KSeF** features, improvements, fixes, and other changes, see the [CompuTec KSeF Release Notes](/docs/ksef/releases/release-notes).

:::
