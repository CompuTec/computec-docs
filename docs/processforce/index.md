---
sidebar_position: 1
---

# Introduction to CompuTec ProcessForce 3.0

**CompuTec ProcessForce 3.0** is a manufacturing execution and management solution for **SAP Business One**. It extends standard **SAP Business One** functionality with advanced tools for production planning, manufacturing execution, quality control, costing, traceability, plant maintenance, and product lifecycle management.

This guide introduces the main areas of **CompuTec ProcessForce** and helps you get started after installation.

:::warning[important]
Currently, you can access **CompuTec ProcessForce 3.0** only from **SAP Business One Desktop Client**. It is not available in **SAP Business One Web Client**.
:::

## Before you start

Before you can use **CompuTec ProcessForce 3.0**, you must complete the installation and licensing process.

Follow these guides:

- [System Requirements](./administrator-guide/system-requirements.md)
- [Install CompuTec License Server](./administrator-guide/installation/first-installation/license-server.md)
- [Install CompuTec ProcessForce Plugins](./administrator-guide/installation/first-installation/extension.md)
- [Import and Assign Licenses](./administrator-guide/licensing/license-import-and-assignment.md)

:::info[note]
Use the [**Upgrade CompuTec ProcessForce**](./administrator-guide/installation/update-to-ct-pf-30.md) guide only if you already have **CompuTec ProcessForce 2.0** installed and want to update to **CompuTec ProcessForce 3.0**. For new installations, follow the installation guides instead.
:::

After completing the installation, log in to **SAP Business One** and verify that the **CompuTec ProcessForce** menus are available.

## Access CompuTec ProcessForce 3.0

After installation, **CompuTec ProcessForce** functions are integrated directly into the **SAP Business One** menu structure.

![CompuTec ProcessForce menu structure integrated into SAP Business One, showing main functional modules including Administration, Financials, CRM, Opportunities, Sales, Purchasing, Business Partners, Banking, Inventory, Production, Costing, Quality Control, Complaints, Plant Maintenance, MRP, Service, Human Resources, Reports, and Excel Report and Interactive Analysis options](media/index/intro/pf-intro1.png)

You can access most **CompuTec ProcessForce** features from the **SAP Business One** menu:

- **Administration**
- **Inventory**
- **Production**
- **Costing**
- **Quality Control**
- **Plant Maintenance**

## Main CompuTec ProcessForce features

### General Settings

Configure global **CompuTec ProcessForce** settings, default values, and manufacturing parameters.

Use this module to define system-wide settings such as default values, production parameters, planning options, costing settings, and validation rules that affect other CompuTec ProcessForce modules.

To access **General Settings**, navigate to: **Modules** > **Administration** > **System Initialization** > **General Settings** > **ProcessForce**.

![CompuTec ProcessForce general settings window inside SAP Business One with the ProcessForce General tab selected, showing options for SAP Standard Modules and SAP Sales Order Controls including enable standard functionality of SAP Business One's Production menu, enable the standard functionality of the Resources menu, hide ProcessForce related controls on the Sales Order form, disable update of MOR references on Sales Order lines, and forbid changing Sales Order line data if a Manufacturing Order is already assigned](media/index/intro/pf-intro2.png)

:::note[info]
For detailed configuration instructions, read the [**General Settings**](./user-guide/system-initialization/general-settings/overview.md) guide.
:::

### Item Details

Manage manufacturing-specific information that extends the standard SAP Business One item master data.

Use this module to maintain revisions, classifications, specifications, attachments, product texts, and other information required throughout the product lifecycle.

To access **Item Details**, navigate to: **Modules** > **Inventory** > **Item Details**.

![SAP Business One Item Details window showing Item Code Active-Item-01, Item Name Active-Item-01, UoM KG, Yield 100.00. Two checkboxes on the right labeled Allow Residual Qty and Ignore Yield. Main pane displays the Revisions tab with a table whose first row shows Revision Code code00, Revision Name default, Status Active, and the Default checkbox checked. Table column headers visible include Revision Code, Revision Name, Status, Valid From, Valid To, Default, Default for MRP, Default for Company, Material, Sync Planning, Remarks. Bottom left shows OK and Cancel buttons. The screen is a form inside the SAP Business One application window with a neutral, instructional tone.](media/index/intro/pf-intro3.png)

:::note[info]
For detailed configuration instructions, read the [Item Details](./user-guide/item-details/overview.md) guide.
:::

### Ingredients

Manage ingredient declarations and nutritional information for products.

This module helps food, beverage, chemical, and life sciences companies create ingredient lists, allergen declarations, nutritional panels, and other data required for product labeling and regulatory compliance.

To access **Ingredients**, navigate to **Modules** > **Inventory** > **Ingredients**.

![CompuTec ProcessForce menu integrated into SAP Business One with a large blue arrow pointing from the left-hand Inventory > Ingredients menu to an open Ingredient Master Data window; the Ingredient Master Data form title reads Ingredient Master Data and shows fields Code 120, Description Vitamin B12, Category 01 and tabs Allergens, Classification/Certificates, Specifications; the surrounding UI includes a vertical module list such as Administration, Financials, CRM, Inventory, Production, Costing, Quality Control and Plant Maintenance in a professional instructional software interface](media/index/intro/pf-intro4.png)

:::note[info]
For detailed configuration instructions, read the [Ingredients](./user-guide/ingredient-declarations/overview.md) guide.
:::

### Batch Control

Manage additional information for batch-managed materials and products.

Use this module to maintain batch-specific attributes, quality information, production details, and other data required for traceability and compliance.

To access **Batches**, navigate to: **Modules** > **Inventory** > **Item Management** > **Batches**.

![SAP Business One interface showing the CompuTec ProcessForce menu navigation to Batch Management and the Batch Management Selection Criteria dialog with fields for Operation Update, Item No. From Active-Item-01, Group All, Properties/Ignore tabs, and checked posting options for Goods Receipt PO, Goods Return Request, Goods Return, A/P Invoices, and A/P Credit Memos in a neutral instructional software screen](media/index/intro/pf-intro5.png)

:::note[info]
For detailed configuration instructions, read the [Batch Control](./user-guide/inventory/batch-control/overview.md) guide.
:::

### Batch Traceability

Track materials and finished goods throughout the production and distribution process.

Use this module to identify where a raw material was used, which finished products were produced from it, and where those products were distributed. This information is especially useful during audits, investigations, and product recalls.

![Batch traceability node diagram showing four connected batch records arranged top left, top right, center, and bottom. Top left node labeled Active-Item-01 lists Description Active-Item-01, Revision, Quantity -5.556 KG, UoM KG, Type Buy, Manufacturing Date 30.12.99, Expiry Date 30.12.99, Batch 2012-04-18-4. Top right node labeled ByProduct-01 lists Description ByProduct-01, Quantity 1.2 KG, UoM KG, Type Make, Manufacturing Date 18.04.12, Expiry Date 30.12.99, Batch 2012-04-18-10. Center node labeled Product-A lists Description Product-A, Revision Product-A, Quantity 20 EA, UoM EA, Type Make, Manufacturing Date 18.04.12, Expiry Date 30.12.99, Batch 2012-04-18-8. Bottom node labeled Scrap-01 lists Description Scrap-01, Revision, Quantity 1.02 KG, UoM KG, Type Make, Manufacturing Date 18.04.12, Expiry Date 30.12.99, Batch 2012-04-18-9. Blue directional arrows run from Active-Item-01 to ByProduct-01, Product-A, and Scrap-01 indicating material flow. Displayed within a Batch Traceability visualization window inside the SAP Business One application, on a white canvas with application menus visible around it. Tone is neutral and informational.](media/index/intro/pf-intro66.png)

To access **Batch Traceability**, navigate to: **Modules** > **Inventory** > **Item Management** > **Batches** > **Batch Traceability**.

![Batch Traceability selection criteria dialog in SAP Business One showing title Batch Traceability - Selection Criteria, fields Item Code with value Active-Item-01 and empty Batch, and OK and Cancel buttons within a broader SAP Business One menu and window environment](media/index/intro/pf-intro6.png)

:::note[info]
For detailed configuration instructions, read the [Batch Traceability](./user-guide/inventory/batch-control/batch-traceability.md) guide.
:::

### Bill of Materials (BOM)

Define what is required to manufacture a product.

Bills of Materials (BOMs) specify the raw materials, semi-finished products, packaging components, and quantities required to produce a finished item.

To access **Bill of Materials**, navigate to: **Modules** > **Production** > **Bill of Materials**.

![Bill of Materials window in SAP Business One showing CompuTec ProcessForce BOM details for Product-A with fields Item Code Product-A, Description Product-A, Revision default, Quantity 1.000, Total 1.000, Factor 1.000, Yield 100.00, Warehouse 01; the table lists line items Bottle-01, Label-01, Top-01, Recipe-01 with quantities 1.000, scrap percentages 0.00 or 10.00, yields 100.00, and UoM values EA and KG in a neutral software interface](media/index/intro/pf-intro7.png)

:::note[info]
For detailed configuration instructions, read the [Bill of Materials](./user-guide/formulations-and-bill-of-materials/bill-of-materials/overview.md) guide.
:::

### Routings

Define how a product is manufactured.

A routing describes the sequence of operations, resources, work centers, and production steps required to produce an item. It forms the basis for scheduling, capacity planning, and production execution.

To access **Routings**, navigate to: **Modules** > **Production** > **Routings** > **Routing**.

![CompuTec ProcessForce Routing window in SAP Business One showing Routing Code 01 and Routing Name Integrated Process with Active checkbox checked and an Operations table listing sequence 10, operation code 01, and operation name Mix & Pack in a neutral instructional software interface](media/index/intro/pf-intro8.png)

:::note[info]
For detailed configuration instructions, read the [Routings](./user-guide/routings/overview.md) guide.
:::

### Manufacturing Order

Manage the complete production process from planning to completion.

Use Manufacturing Orders to issue materials, record production activities, report quantities, track progress, and receive finished goods into inventory.

To access **Manufacturing Order**, navigate to: **Modules** > **Production** > **Manufacturing Order** > **Manufacturing Order**.

![CompuTec ProcessForce Manufacturing Order window inside SAP Business One showing a manufacturing order for Product-A with fields for Item Code Product-A, Revision default, Warehouse 01, Planned Quantity 1.000, Actual Quantity 0.000, Recommended Start Date 19.06.26 12:25 and a lower grid listing bill of materials lines such as Bottle-01, Label-01, Top-01, Active-Item-Active-Item-01 and Non-Active items in a standard business software interface](media/index/intro/pf-intro9.png)

:::note[info]
For detailed configuration instructions, read the [Manufacturing Order](./user-guide/manufacturing/manufacturing-order/overview.md) guide.
:::

### Scheduling

Plan and optimize production activities across available resources.

Use this module to schedule manufacturing orders, balance workloads, identify capacity conflicts, and adjust production plans using an interactive scheduling board.

To access **Scheduling**, navigate to: **Modules** > **Production** > **Manufacturing Order** > **Scheduling**.

![CompuTec ProcessForce Scheduling window in SAP Business One displaying a Manufacturing Orders table with columns for Show in Gantt, Status, Document Number, ItemCode, Description, Revision, Quantity, ActualQuantity, InventoryUoM, RequiredDate, Priority, SchedulingMethod, Warehouse, and Factor. Three rows show started and released manufacturing orders with product details including Product-B and Product-A, quantities ranging from 1.00 to 27.78, scheduled dates in May and October 2021, backward and forward scheduling methods, and priority level 1. The interface uses a professional blue-gray color scheme typical of enterprise business software.](media/index/intro/pf-intro10.png)

:::note[info]
For detailed configuration instructions, read the [Scheduling](./user-guide/scheduling/overview.md) guide.
:::

### Item Costing

Calculate and analyze the cost of manufactured products.

Use this module to estimate production costs, evaluate material and resource consumption, compare planned and actual costs, and support financial analysis.

To access **Item Costing**, navigate to: **Modules** > **Costing** > **Item Costing**.

![CompuTec ProcessForce Item Costing window inside SAP Business One showing Item Code Active-Item-01, Item Name Active-Item-01, Revision Code code00, Cost Category Code 000, Valuation Method Standard, MRP Type Buy, Item Type Item, and UoM KG with a table listing warehouse 01 Automatic type, item cost 0.00, fixed overhead 1.00, fixed overhead percent 1.00, and fixed overhead cost 0.00 in a neutral instructional software environment](media/index/intro/pf-intro11.png)

:::note[info]
For detailed configuration instructions, read the [Item Costing](./user-guide/costing-material-and-resources/item-costing/overview.md) guide.
:::

### Plant Maintenance

Manage maintenance activities for machines, equipment, and production assets.

Use this module to schedule preventive maintenance, record repairs, track maintenance history, and reduce unplanned downtime.

To access **Plant Maintenance**, navigate to: **Modules** > **Plant Maintenance**.

![CompuTec ProcessForce Plant Maintenance screen in SAP Business One showing the Plant Maintenance menu selected and a Maintainable Item form with fields MI Code, MI Name, MI Type Location, MI Status Awaiting purchase, assigned objects section with Resource Code and Resource Name, item details, apparatus type, equipment card, and fixed asset fields in a neutral instructional business application interface](media/index/intro/pf-intro12.png)

:::note[info]
For detailed configuration instructions, read the [Plant Maintenance](../processforce/user-guide/plant-maintenance/overview.md) guide.
:::

### Quality Control

Manage quality inspections throughout the manufacturing process.

Use this module to create test plans, perform inspections, record results, track non-conformances, and ensure products meet internal and regulatory quality requirements. It supports test templates, inspectors, resources, materials, testing frequencies, defect tracking, instructions, and attachments.

**Quality Control** tests can be triggered from business processes such as **Goods Receipt POs**, **Manufacturing Orders**, **Complaints**, or **SAP Business One Business Alerts**.

To access **Quality Control**, navigate to: **Modules** > **Quality Control**.

![CompuTec ProcessForce Quality Control Test screen inside SAP Business One showing a test protocol form with fields for Test Protocol No 02, Description Standard, Item Code Product-A, Item Name Product-A, Revision Code code00, QC Warehouse Code 01, and status Started. A lower grid displays test properties including sequence 10 with Test Property Code 01 Metal Test and sequence 20 with Test Property Code 02 Particle Size. The wider environment is a SAP Business One application window with menu navigation on the left and module details on the right, presented in a neutral instructional tone.text](media/index/intro/pf-intro13.png)

:::note[info]
For detailed configuration instructions, read the [Quality Control](./user-guide/quality-control/overview.md) guide.
:::

### Complaint Management

Manage customer, supplier, and internal complaints from initial registration through resolution.

Use this module to investigate issues, identify root causes, assign corrective actions, and monitor the effectiveness of resolutions.

To access **Complaints**, navigate to: **Modules** > **Complaints** > **Complaint**.

![CompuTec ProcessForce Complaint entry screen inside SAP Business One showing a supplier complaint for Hanks Deliveries with header fields Series Supplier 2, Complaint Type Customer, Business Partner Code 00002, Started Date 19.06.26, and Status Started; Item Details section lists Item Code Active-Item-01, Item Name Active-Item-01, Transaction Type Purchasing: Goods Receipt PO; Batch detail shows batch 2026-05-04-5; Complaint Details table lists reason codes 01 Covered in Oil, 04 Covered in Paint, 02 Broken](media/index/intro/pf-intro14.png)

:::note[info]
For detailed configuration instructions, read the [Complaint](./user-guide/complaint-management/complaint.md) guide.
:::

## Next Steps

After becoming familiar with the **CompuTec ProcessForce 3.0** key features:

- Configure [**General Settings**](./user-guide/system-initialization/general-settings/overview.md).
- Set up [**Item Details**](./user-guide/item-details/overview.md), [**Bill of Materials**](./user-guide/formulations-and-bill-of-materials/bill-of-materials/overview.md), and [**Routings**](./user-guide/routings/overview.md).
- Configure [**Manufacturing Orders**](./user-guide/manufacturing/manufacturing-order/overview.md) and [**Scheduling**](./user-guide/scheduling/overview.md).

:::note[info]

If you need any help, contact [CompuTec Support](https://support.computec.pl).

:::
