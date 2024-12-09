---
sidebar_position: 5
---

# Pick and Pack

This guide highlights the key features and updates in the Pick and Pack workflow from version 2.10.21.4 to 2.10.22.1, showcasing changes in configuration options, new settings, and how to customize the workflow for your needs.

---

## Old Pick and Pack

For version **2.10.21.4**, the custom configuration for Pick and Pack would appear as shown in the screenshot below:

![Pick and Pack](./media/cc-pick-and-pack.webp)

**Pick and Pack Workflow** - You can select the sequence in which data is entered. Available options include: Default Workflow, Customer-Date Workflow, and Date-Customer Workflow.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Default Workflow**

        ![Default Workflow](./media/pick-and-pack/default-workflow-pick-pack.png)

    **Customer-Date Workflow**

        ![Customer Date Workflow](./media/pick-and-pack/customer-date-workflow.png)

    **Date-Customer WorkFlow**

        ![Date-Customer WorkFlow](./media/pick-and-pack/date-customer-workflow.png)
    </div>
    </details>

**Update all picked content on transaction completion** – All selections made during the transaction are saved when the transaction is saved; the data selected during the transaction is not retained until the save button is clicked at the end.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Before marked**

        ![Before Marked](./media/pick-and-pack/before-marked.png)

    **After marked**
    
        ![After Marked](./media/pick-and-pack/after-marked.png)
    </div>
    </details>

**Enable adding Item Details when Warehouse has Bin Locations** – This option enables the addition of item details during a warehouse receipt when bin locations are defined, and quantities have not been allocated.

**Pick Items only with scanning** – This setting restricts item picking to barcode scanning only, preventing manual item selection.

**Force Manual quantity confirmation** – When enabled, this option requires manual confirmation of the quantity, even when a barcode is scanned (automated confirmation is disabled).

**Enable over-picking to base open document quantity** – By enabling this option, you can set a picking quantity higher than that specified in the related base document. If unchecked, it prevents over-picking.

## New Pick and Pack

Starting from version **2.10.22.1**, the custom configuration for Pick and Pack will appear as shown in the screenshot below:

    ![Pick and Pack](./media/pick-and-pack/cc-pick-and-pack.png)

**Pick and Pack Workflow** - You can select the sequence in which data is entered. Available options include: Default Workflow, Customer-Date Workflow, and Date-Customer Workflow.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Default Workflow**

        ![Default Workflow](./media/pick-and-pack/default-workflow-pick-pack.png)

    **Customer-Date Workflow**

        ![Customer Date Workflow](./media/pick-and-pack/customer-date-workflow.png)

    **Date-Customer WorkFlow**

        ![Date-Customer WorkFlow](./media/pick-and-pack/date-customer-workflow.png)
    </div>
    </details>

**After scanning item, auto return to: Storage Info, Quantity and Document Details** - This option allows you to change the window to which the application will return to after setting and confirming the quantity for an Item.

    <details>
    <summary>Click here to expand</summary>
    <div>
    **Storage Info**

        ![Storage Info](./media/pick-and-pack/storage-info-pick-and-pack.png)

    **Quantity**

        ![Quantity](./media/pick-and-pack/quantity-pick-and-pack.png)

    **Document Details**

        ![Document Details](./media/pick-and-pack/doc-details-pick-and-pack.png)
    </div>
    </details>

**Hide SU** - This option hides all settings related to creating or adding a Storage Unit (SU).

**Pick Items only with scanning** – This option restricts item picking to barcode scanning, preventing manual item selection.

**Force Manual quantity confirmation** – When enabled, this option requires manual confirmation of the quantity set, even if a barcode is scanned (automatic confirmation is disabled).

## Changes

Old view of Pick and Pack tab:

    ![Pick and Pack](./media/pick-and-pack/pick-and-pack.png)

the additional field in Pick and Pack query option has been removed.

You can access this functionality by creating a custom SQL query in the Custom Query Manager under the Pick and Pack option.

    ![Pick and Pack](./media/pick-and-pack/pick-and-pack-01.png)

This example shows the Customer List for the Date Pick List:

    ![Pick and Pack](./media/pick-and-pack/date-pick-list.png)

In this example, four fields are available, with two of them configured by default.

    ![Fields](./media/pick-and-pack/fields.png)

---
The Pick and Pack feature has evolved to provide greater control over the picking and packing process. The updates in version 2.10.22.1 offer more flexibility, allowing users to streamline their workflows, customize data entry sequences, and enhance the scanning process. By leveraging the new configurations and SQL query options, users can tailor the system to their specific needs, improving efficiency and reducing manual errors. Whether you're transitioning from an older version or implementing these features for the first time, the Pick and Pack updates are designed to optimize your warehouse operations.
