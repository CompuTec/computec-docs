---
sidebar_position: 2
---

# Installation and Configuration

The **CompuTec Plant Maintenance Mobile (MI 360)** plugin extends **CompuTec ProcessForce** with automatic creation of Preventive Maintenance Orders and a mobile app for maintenance work. You install it from the **CompuTec AppEngine Administration Panel**, in the same way as every other CompuTec AppEngine plugin.

The installation has three phases:

1. Download the plugin to the CompuTec AppEngine repository.
2. Install it for a company.
3. Activate it on a CompuTec AppEngine instance.

The installation wizard performs all three phases in one procedure.

:::info[Note]

Only one version of the plugin can be active on a single CompuTec AppEngine instance at a time.

:::

## Before you start

Before you begin, make sure that:

- [**CompuTec AppEngine**](/docs/appengine/administrators-guide/configuration-and-administration/installation) is installed and activated, with at least one active instance and an activated company.
- [**CompuTec ProcessForce**](/docs/processforce/administrator-guide/installation/first-installation/extension) and the [**CompuTec License Server**](/docs/processforce/administrator-guide/licensing/license-server/computec-license-server-installation) are installed and configured. The **CompuTec ProcessForce** plugin is installed and enabled in your company database. **CompuTec MI 360** doesn't work without it.
- You have access to the **CompuTec AppEngine Administration Panel**.
- Custom code in the `SP_TransactionNotification` and `SP_PostTransactionNotice` stored procedures is disabled. After the installation is complete, you can enable your custom code again.

:::warning[Important]

The installation restarts **CompuTec AppEngine**. Plan the installation for a time when no users depend on **CompuTec AppEngine**.

:::

## Install the plugin

To install the **CompuTec Plant Maintenance Mobile (MI 360)** plugin, follow the steps in [**Install a plugin**](/docs/appengine/plugins-user-guide/install-plugin). When you follow the guide, use these plugin-specific values:

- Plugin to find in **Plugins** > **Store**: **MI360**
- **Plugin type filter**: **AppEngine Plugin**
- **Company**: the SAP Business One company in which you use **CompuTec ProcessForce**.
- **CompuTec AppEngine instance**: the instance that serves this company.

:::note[Info]

**CompuTec AppEngine** installs Business Logic plugins automatically when another plugin requires them. You don't need to install them manually.

:::

:::note[Info]

If you need a version other than the latest, use **Find different version** in the store. The [**Install a plugin**](/docs/appengine/plugins-user-guide/install-plugin) guide describes this option.

:::

## Verify the installation

To verify that the plugin is installed, check that:

- The plugin appears on the **Plugins** > **Downloaded** tab.
- The plugin is assigned to the selected company and active on the selected instance.
- The **CompuTec MI 360** functionality is available.

## Update the plugin

To install a newer version of the plugin, follow the steps in [**Update a plugin**](/docs/appengine/plugins-user-guide/update-plugin).

## Installing the MI360 Mobile App

MI360 can be installed as an application in your mobile devices.

1. On your Android device, open a mobile browser.
2. Enter the following URL: `https://<AppEngineHost>:<Port>/launchpad`
3. Select **Launchpad** and log in with your credentials.
4. Choose **Install App** to add **MI360** to your device home screen.

    ![Mobile App](./media/mobile-app.png)

## Background Jobs

MI360 integrates with **CompuTec AppEngine background jobs** to automate the creation of **Preventive Maintenance Orders**. These jobs ensure that maintenance schedules are generated automatically based on time or meter readings.

Enable the background jobs that create Preventive Maintenance Orders automatically:

| Job Name | Description |
| --- | --- |
| Preventive Maintenance Creator - Meter Based | After a meter reading (updating the **CT_PF_MeterRead** object) and updating the **Maintenance Order (CT_PF_MainOrder)**, this job checks data in **PMSchedule** and, when required, automatically creates new Maintenance Orders based on preventive maintenance configurations. The job ensures that all preventive Maintenance Order requirements are evaluated and, once conditions are met, generates the corresponding orders. Without running this job, automatic creation of Maintenance Orders does not occur. |
| Preventive Maintenance Creator - Time Based | This job runs every ten minutes to check data in **PMSchedule** and, when all preventive Maintenance Order configuration requirements are met, automatically creates new **Maintenance Orders**. Without running this job, the automatic creation of Maintenance Orders does not function. |

:::info[note]

You can find detailed information on managing background jobs in the following documentation:

- [CompuTec AppEngine 2.0 Background Jobs Guide](/docs/appengine/2.0/administrators-guide/configuration-and-administration/overview)
- [CompuTec AppEngine 3.0 Background Processing Guide](/docs/appengine/administrators-guide/configuration-and-administration/background-processing)

:::
