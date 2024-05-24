---
sidebar_position: 2
---

# Quality Control Configuration

Here you can check the general settings required for the Quality Test: Document Series Number, Resources, and Items information.

---

## General Settings

Click [here](../../user-guide/system-initialization/general-settings/qc-tab.md) to find out more.

## Document Series Number

The [Quality Control Test](./quality-control-test/overview.md) form and [NCMR Transaction](./ncmr-non-conforming-materials-report.md) and [Quality Control Pool](./test-protocols/quality-control-tests-pool.md) forms use the SAP Business One Document Numbering functions.

![Settings](./media/quality-control-configuration/quality-control-numbering.webp)

## Resources

Within the Test Protocol and Quality Control Test forms, the user can define the resources used to conduct and complete the testing activity. For example, X-ray machines, microscopes, tooling, etc.

These forms filter the Item Master Data based on the following criteria:

- The Purchase Item and Fixed Assets fields are checked.
- A specific Item Group is created.
- Select the Item Group within the QC Resource Group, ProcessForce tab, within General Settings.

![General Settings QC Groups](./media/quality-control-configuration/general-settings-qc-groups.webp)

![Item Master Data Item Group](./media/quality-control-configuration/item-master-data-item-group.webp)

## Items

Within the Test Protocol and Quality Control Test forms, the user can define the items used to conduct and complete the testing activity. For example, safety glasses, gloves, and special chemicals only relate to the Quality Control process and department.

These forms filter the Item Master Data based on the following criteria:

- The Inventory, Sales, and Purchase Item fields are checked.
- A specific Item Group is created.
- Select the Item Group within the QC Item Group, ProcessForce tab, within General Settings.

![Item Master QC Item](./media/quality-control-configuration/item-master-qc-item.webp)
