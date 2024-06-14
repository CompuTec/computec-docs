---
sidebar_position: 3
---

# Data Restore

When a user adds, changes, or deletes Item Master Data within SAP Business One, the essential data elements are automatically updated in ProcessForce [Item Details](../item-details/overview.md) (creates a default revision code) and [Item Costing](../costing-material-and-resources/item-costing/overview.md) (creates a cost record for an item, revision, warehouse, [Cost Category](../costing-material-and-resources/configuration.md) objects.

If data has been added to SAP Business One manually or via DTW while ProcessForce is not installed and running, the Restore functions need to be run.

If the Restore function is not running, your SAP Business One and ProcessForce may run slowly as they try to find the Item Details and Cost data.

After installing ProcessForce, the following restore functions need to be run

- Batch Details

- Bill of Materials

![Item Details](./media/data-restore/item-master-data-costing.webp)

---

## Full Restore Functions List

![Restore List](./media/data-restore/restore-list.webp)

## Restore Batch Details

:::info Path
    Help → Support Desk → Restore → Restore Batch Master Data
:::

To simplify batch information, the SAP Batch Details and ProcessForce Batch Master Data form has been consolidated into a single form.

Run the restore function to populate the combined data object.

If you add User-Defined Fields to the SAP Business One Batch Details tables, the same User Defined Fields need to be added to the ProcessForce Batch Master Data tables.

If, for any reason, SAP and ProcessForce Batch Master Data for a specific Batch become inconsistent, using the Restore function will will update the SAP Batch Details with the ProcessForce Batch Master Data.

## Restore Bill of Materials

:::info Path
    Help → Support Desk → Restore → Restore Bill Of Materials
:::

When changing the Item description, for example, by DTW or Powershell, use the restore function to ensure the new Item description appears in the Choose From Lists and the Bill of Materials form.

Bill of Materials synchronization always flows from ProcessForce to SAP B1 data: creating a PF BOM and synchronizing it will create or overwrite the SAP B1 Bill of Materials.

The Restore Bill of Materials function only works if the "Enable Bill of Materials synchronization between ProcessForce and SAP Business One" checkbox is selected in the General Settings form, under the ProcessForce tab, Bill of Materials and Manufacturing Orders section.

Click [here](../system-initialization/general-settings/overview.md) to find out more about General Settings.

Only a Bill of Material variant with Is MRP Default check box checked on the Item Details form will be used for synchronization:

![MRP Default](./media/data-restore/item-details-mrp-default.webp)

Please note that this functionality only updates the description in the Bill of Materials records. It does not synchronize the Production Tree and Bill of Materials. It synchronizes the ItemName from the OITM database table to the U_Description field of the CT_PF_OBOM database table.

## Restore Item Data

:::info Path
    Help → Support Desk → Restore → Restore Item Details

    Help → Support Desk → Restore → Restore Item Costing
:::

The Restore Item Details and Item Costing functions must be run in the following cases:

- ProcessForce is installed on a database that already had some Item Master Data records before the add-on installation

- ProcessForce is already installed, but Item Master Data record (or records) has been recorded when the add-on was not running

### Restore Item Details

For every Item Master Data record created in ProcessForce, an Item Details record is created automatically. If it is not created (e.g., when Item Master Data was created without ProcessForce), the Restore Item Details option will create it for a specific Item Master Data.

### Restore Item Costing

When the Restore Item Costing function is chosen, Item Costing records for every Item Master Data in every Revision and Cost Category will be created.

:::info
    Upon attempts to perform an Item Costing restore, the following system message appears:

    ![System Message](./media/data-restore/item-costing-message.webp)

    Note that by default, option No is marked.
:::

## Restore Resource Costing

:::info Path
    Help → Support Desk → Restore → Restore Resource Costing
:::

Records are created for every Resource in every Cost Category.

## Restore Resource Calendar and Employee Calendar

:::info Path
    Help → Support Desk → Restore → Restore Resource Calendars

    Help → Support Desk → Restore → Restore Employee Calendars
:::

When Resource or Employee Master Data is created in ProcessForce, a Calendar is created automatically. Using the Restore function creates Calendars for those Resource and Employee Master Data for those records that do not have it already (e.g., if Employee Master Data was created without ProcessForce).

## Goods Issue and Goods Receipt Restore

This allows restoring all Goods Issues and Goods Receipts references in Manufacturing Orders documents.

The purpose of this option is to address scenarios where a Goods Issue or Goods Receipt document has been deleted, yet the reference remains in the Manufacturing Order's Document tab. This situation can lead to errors when attempting to update the Manufacturing Order.
