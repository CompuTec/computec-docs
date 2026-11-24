---

sidebar_position: 2

---

# Installation and Configuration

The **CompuTec Planning & Bottleneck Scheduling (MO Wizard)** plugin extends **CompuTec ProcessForce** with the option to create Manufacturing Orders from selected Sales Order lines, including products with multi-level bills of materials. You install it from the **CompuTec AppEngine Administration Panel**, in the same way as every other CompuTec AppEngine plugin.

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
- [**CompuTec ProcessForce**](/docs/processforce/administrator-guide/installation/first-installation/extension) and the [**CompuTec License Server**](/docs/processforce/administrator-guide/licensing/license-server/computec-license-server-installation) are installed and configured.
- The following plugins are installed for the company in **CompuTec AppEngine**. For the steps, read [**Install a plugin**](/docs/appengine/plugins-user-guide/install-plugin).
  - **CompuTec.ProcessForce.Plugin**
  - **CompuTec.ProcessForce.UI**
- You have access to the **CompuTec AppEngine Administration Panel**.
- Custom code in the `SP_TransactionNotification` and `SP_PostTransactionNotice` stored procedures is disabled. After the installation is complete, you can enable your custom code again.

:::note[Info]

**CompuTec AppEngine** installs the required Business Logic plugins and the **CompuTec.ProcessForce.API** plugin automatically together with the plugin. You don't need to install them manually.

:::

:::warning[Important]

The installation restarts **CompuTec AppEngine**. Plan the installation for a time when no users depend on **CompuTec AppEngine**.

:::

## Install the plugin

To install the **CompuTec Planning & Bottleneck Scheduling (MO Wizard)** plugin, follow the steps in [**Install a plugin**](/docs/appengine/plugins-user-guide/install-plugin). When you follow the guide, use these plugin-specific values:

- Plugin to find in **Plugins** > **Store**: **MOWizard**
- **Plugin type filter**: **AppEngine Plugin**
- **Company**: the SAP Business One company in which you use **CompuTec ProcessForce**.
- **CompuTec AppEngine instance**: the instance that serves this company.

:::note[Info]

**CompuTec AppEngine** installs Business Logic plugins automatically when another plugin requires them. You don't need to install them manually.

If you need a version other than the latest, use **Find different version** in the store. The [**Install a plugin**](/docs/appengine/plugins-user-guide/install-plugin) guide describes this option.

:::

## Verify the installation

To verify that the plugin is installed, check that:

- The plugin appears on the **Plugins** > **Downloaded** tab.
- The plugin is assigned to the selected company and active on the selected instance.
- **MOWizard** is available in the **CompuTec AppEngine Launchpad** and in **SAP Business One** under **Production** > **MOWizard**.

## Update the plugin

To install a newer version of the plugin, follow the steps in [**Update a plugin**](/docs/appengine/plugins-user-guide/update-plugin).

## Next steps

Learn how to create Manufacturing Orders from Sales Order lines.

See [**Planning & Bottleneck Scheduling (MO Wizard)**](/docs/processforce/processforce-plugins/mo-wizard/overview#usage) for usage instructions.
