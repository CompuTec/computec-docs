---
sidebar_position: 2
---

# CompuTec ProcessForce Plugins

CompuTec ProcessForce Plugins enhance the capabilities of SAP Business One by enabling seamless integration and advanced manufacturing functionalities. This guide walks you through the installation process, prerequisites and key steps required to deploy plugins successfully.

Follow these steps to install the CompuTec ProcessForce plugins properly.

## Before you start

- Ensure you meet all CompuTec ProcessForce [System Requirements](../../system-requirements.md).
- It is **recommended** to install the [CompuTec License Server](./license-server) before proceeding.
- Restart the SAP Business One client **before installing** the CompuTec ProcessForce Plugin.

## Step 1: Download CompuTec ProcessForce Plugins

1. Log in to CompuTec AppEngine **Administration Panel**.
2. Navigate to **Plugins**.

    ![screen of plugins section in appengine plugin store](./media/extension/01-pf-installation-store.png)

3. Go to the **Store** tab.

    ![screen showing where to find store tab in the plugins section](./media/extension/02-pf-installation-store-plugins.png)

4. Locate the following two **CompuTec ProcessForce plugins**:

- **CompuTec.ProcessForce.API**
- **CompuTec.ProcessForce.Plugin**

5. Install them by following the [**CompuTec AppEngine Plugin Installation Guide**](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/plugins/overview).

:::caution[Important]

- The CompuTec **ProcessForce API** is **required** for the CompuTec ProcessForce Plugin to work.
- When you install **CompuTec.ProcessForce.Plugin**, the API plugin is added automatically.
- If you use CompuTec ProcessForce with the **SAP Business One Desktop Client**, or want to upgrade from **CompuTec ProcessForce 2.0 to 3.0**, you must also install `CompuTec ProcessForce UI`.

:::

## Step 2: Install the plugins

After downloading all plugins, log in to your SAP Business One client. Upon login, the system will prompt you to install `CompuTec.ProcessForce.Gantt` on your local machine.

Follow these steps to install CompuTec ProcessForce Gantt:

1. Click **Install** to begin the installation.

    ![Installation Prompt](./media/extension/installation-prompt.png)

:::info[note]
If a permission error message appears:

1. Close SAP Business One.

2. Right-click the SAP Business One shortcut.

3. Select **Run as administrator**.

4. Start SAP Business One again and repeat the installation

   ![Error Message](./media/extension/error-message.png)

:::

## Step 3: Assigning the License

:::info
This step is **only required for new installations**, not for upgrades.
:::

Refer to the [**License Import and Assignment**](../../licensing/license-import-and-assignment.md) guide for step-by-step instructions.

---

## Reference: Required Configurations & Warnings

These configurations and precautions are critical to ensure a smooth installation or upgrade process, preventing conflicts with SAP Business One settings and avoiding data integrity issues.

### General Settings Check

:::danger
Before beginning the installation, **uncheck** the following in:

**General Settings → Hide Functions**:

![Checkboxes](./media/extension/general-settings-unchecked.webp)

- Serial Numbers and Batches
- Production
- Units of Measure

:::

### Stored Procedures for Upgrade

:::danger
Before upgrading the CompuTec ProcessForce Extension, ensure that the following SAP Business One stored procedures are in their **default state** with **no custom queries**:

- `SP_TransactionNotification`
- `SP_PostTransactionNotice`

:::

### Important Database Creation Warning

:::danger
**Do not** use **Copy Express** or the options **Copy User-Defined Fields and Tables / Copy User-Defined Objects** in the **Create New Company** wizard to copy CompuTec ProcessForce objects.

<details>
<summary>Why this matters</summary>
Using these methods results in improper assignment of `EditType` fields in CompuTec ProcessForce structures - leaving them as `NULL`. This is due to a bug in SAP Business One that affects DateTime fields when new databases are created using copy methods.
</details>

✅ **To prevent this issue**:

- Create a **new database**
- Install CompuTec ProcessForce
- Transfer the required data using **CompuTec ProcessForce Integration (PFI)** tool (instead of PowerShell scripts).

:::

---

## Why These Steps Matter

The CompuTec ProcessForce plugin deeply integrates with SAP Business One’s production and costing modules. Because of this, proper configuration and installation are essential. Skipping prerequisite checks, using copy methods, or failing to assign licenses correctly can lead to malfunctioning UIs, corrupted metadata, or incorrect system behavior.

The following distinctions are important:

- **CompuTec ProcessForce API Plugin**: Enables backend integration and external communications.
- **CompuTec ProcessForce Plugin**: Core functional layer enabling CompuTec ProcessForce logic.
- **CompuTec ProcessForce UI Plugin**: Desktop interface for interaction within SAP Business One.

---

## How to Prepare and Restore Data

:::caution
Before restoring data, verify if the **Manage Item Cost per Warehouse** setting is used.

Changing this setting **after** restoration will require **removal and re-restoration** of all Item Costing details.
:::

If you are installing CompuTec ProcessForce on a database that already has **existing data** (such as item master records), you need to run the **data restoration procedures**:

![Restore](./media/extension/restore.webp)

- Restore Item Details
- Restore Item Costing
- Restore Resource Costing
- Restore Employee Calendars
- Restore Batch Details

➡️ Learn more about: [Data Restore](../../../user-guide/system-initialization/data-restore.md).

---
