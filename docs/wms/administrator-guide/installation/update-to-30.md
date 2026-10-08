---
sidebar_position: 3
---

# Upgrade from CompuTec WMS 2.0 to CompuTec WMS 3.0

This guide describes how to upgrade **from CompuTec WMS 2.0 to CompuTec WMS 3.0 Plugin**.

## Before you begin

Review the [system requirements](/docs/wms/administrator-guide/installation/requirements) and make sure that:

- **SAP Business One 10.0 FP 2502** or later is installed.
- **SAP Business One Web Client** is installed and configured.
- **CompuTec AppEngine** is installed and configured. [Read more](/docs/appengine/administrators-guide/configuration-and-administration/installation)
- The devices used to access the plugin can reach **SAP Business One Web Client** and **CompuTec AppEngine**.
- You have administrator access to the server where **CompuTec WMS Server** is installed.

If you use **CompuTec ProcessForce**, also check that:

- **CompuTec ProcessForce API** is installed and its version exactly matches the version of CompuTec ProcessForce in the company database. [Read more](/docs/wms/administrator-guide/installation/overview#step-4-install-computec-processforce-api-if-processforce-is-installed)
- Each SAP Business One user has a matching **CompuTec ProcessForce license type**.

:::warning[important]
Schedule the upgrade for a time when users are not performing warehouse transactions. CompuTec WMS will be unavailable while you replace the existing installation.
:::

## Step 1: Back up the existing environment and test the upgrade

We recommend backing up the SAP Business One company database and the existing CompuTec WMS configuration before upgrading.

To verify the upgrade before applying it to production:

1. Create a test copy of the production company database.
2. Set up a test environment with **CompuTec AppEngine 3.0** and the other required components.
3. Install **CompuTec WMS 3.0** in the test environment using the test company database.
4. Test your warehouse workflows, custom settings, and integrations.
5. After confirming that everything works correctly, upgrade the production environment.

## Step 2: Uninstall the previous CompuTec WMS Server

:::warning[important]
Manually uninstall the previous CompuTec WMS Server before installing CompuTec WMS 3.0.
:::

1. Ask all users to stop working in **CompuTec WMS**.
2. On the computer hosting CompuTec WMS Server, open **Control Panel**.
3. Open **Programs and Features**.
4. Select the existing **CompuTec WMS Server** installation.
5. Click **Uninstall**.
6. Follow the uninstallation instructions.

## Step 3: Install the plugins, server, and client

1. In CompuTec AppEngine, install **CompuTec WMS Plugin** and **CompuTec WMS Business Logic Plugin**.
2. Open **CompuTec WMS Plugin** and download the **CompuTec WMS Server** installer.
3. Run the installer and follow the installation instructions.
4. Download the **CompuTec WMS Client** for your device from either:
    - The CompuTec WMS Server address, opened in a browser.
    - The `C:\Program Files\CompuTec\WMS Server\wwwroot\Builds` folder on the server.
5. Install the **CompuTec WMS Client** on the device.

:::note[info]
Follow the [CompuTec WMS 3.0 Installation Guide](/docs/wms/administrator-guide/installation/overview) to install CompuTec WMS 3.0 Plugin and its required components.
:::

When configuring the environment:

- Allow inbound connections on `TCP port 31002` on the computer hosting **CompuTec WMS Server**.
- Make sure that **CompuTec AppEngine** is accessible over `HTTPS`.
- If **CompuTec ProcessForce** is installed, install the **CompuTec ProcessForce API Plugin**. [Read more](/docs/wms/administrator-guide/installation/overview#step-4-install-computec-processforce-api-if-processforce-is-installed)

## Step 4: Sign in to CompuTec WMS

1. Open the CompuTec WMS client.
2. Enter your **Username** and **Password**.
3. Click **Company**.
4. Select the company database.
5. Click **Login**.

The client remembers the selected company database the next time you open it.

To sign in to a different company database:

1. Enter your **Username** and **Password** again.
2. Click **Company**.
3. Select the company database.
4. Click **Login**.

:::note[info]
**CompuTec WMS 3.0 Plugin** uses the active **SAP Business One Web Client** session for authentication and authorization.
:::

## Step 5: Verify warehouse workflows

Before users resume work, test the workflows used in your warehouse.

Check that:

- Users can sign in from their warehouse devices.
- Users can access the expected warehouses and transactions.
- Barcode scanning works on the devices used in your warehouse.
- A representative warehouse transaction can be completed and produces the expected document in SAP Business One.
- Any custom settings or integrations work as expected.

## Troubleshooting

### The CompuTec WMS Client does not open

This can occur if the new **CompuTec WMS Client** was installed before the previous client was uninstalled.

1. Uninstall the **CompuTec WMS Client** from the device.
2. Install the new client again.
3. Open the client and sign in.

### CompuTec WMS cannot connect to CompuTec WMS Server

- Verify that **CompuTec WMS Server** is running.
- Check that **Windows Firewall** allows inbound connections on TCP port `31002`or `TSL port 56001`.

### CompuTec WMS does not work correctly with CompuTec ProcessForce

Check that **CompuTec ProcessForce API** is installed in both required locations:

- In **CompuTec AppEngine**.
- Locally on the computer hosting **CompuTec WMS Server**. Download the installer from **CompuTec AppEngine** and run it on that computer.

The **CompuTec ProcessForce API** version must exactly match the version of **CompuTec ProcessForce** installed in the company database.

:::note[info]
For instructions, see [Install CompuTec ProcessForce API](/docs/wms/administrator-guide/installation/overview#step-4-install-computec-processforce-api-if-processforce-is-installed).
:::

Also verify that the user has a CompuTec ProcessForce license matching their SAP Business One license type.
