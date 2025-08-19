# New Stock Counting Plugin Installation

Here, you can find information about the New Stock Counting plugin installation.

---

## CompuTec WMS Server setting

Please ensure the CompuTec AppEngine server name address is set in the [CompuTec WMS Server settings](../../../administrator-guide/installation/wms-server/overview.md).

## CompuTec AppEngine

Turn on CompuTec AppEngine on a database with CompuTec ProcessForce:

![General Settings](./media/general-settings.webp)

Type in the address and click Save:

![AE](./media/general-settings-ae.webp)

Log in to the CompuTec AppEngine Administration panel using the following address: `http://localhost:54000/webcontent/uaa/webapp/Index.html`.

![AE](./media/app-engine-administration-panel.webp)

## Plugin Installation

Go to the Plugins tab and then click the Install Plugin button:

![Plugin](./media/plugins-install.webp)

Choose the file:

:::warning

You have to upgrade the plugin upon upgrading CompuTec WMS.

:::

![Package](./media/plugin-package.webp)

Go to the plugin after the installation:

![WMS Plugin](./media/computec-wms-plugin.webp)

Activate the plugin in the Companies section:

![Plugin](./media/plugin-activation.webp)

## Background Processing

Go to the Background Processing, the Configuration tab:

![Background processing](./media/background-processing.webp)

You can use the filter to find the required jobs:

![Plugin filter](./media/plugin-filter.webp)

Mark all three of them and click the highlighted icon:

![Tasks](./media/tasks.webp)

Mark all three of them and click the highlighted icon:

![Choose Jobs](./media/jobs-choosing.webp)

### Jobs available in the CompuTec WMS plugin in CompuTec AppEngine

Each of them has to be activated to work correctly.

#### SyncStockCountingWithSAPOnDemand

This job sends information from the CompuTec client to SAP Business One (the Save icon in CompuTec WMS).

![On-Demand](./media/sync-sap-on-demand.webp)

#### SyncStockCountingWithSAPRecurring

This job automatically sends data from CompuTec WMS to SAP Business One after 30 minutes.

![Recurring](./media/sync-sap-recurring.webp)

#### WMSUpdateSUAfterInventoryPosting

This job is responsible for creating Storage Units and their edition during Inventory Posting.

![WMS Update](./media/wms-update-su.webp)

### The Result

The CompuTec AppEngine plugin is required to use the New Stock Counting either with SAP Business One or CompuTec ProcessForce.

If the plugin is unavailable, there will be information about it in CompuTec WMS.

![Not Enabled](./media/plugin-not-enabled.webp)

---
