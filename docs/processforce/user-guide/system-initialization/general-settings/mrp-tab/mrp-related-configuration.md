---
sidebar_position: 2
toc_max_heading_level: 2
---

# MRP Related Configuration

SAP Business One provides robust Material Requirements Planning (MRP) functionality to streamline manufacturing and supply chain processes. Proper configuration ensures seamless synchronization between CompuTec ProcessForce and SAP Business One, allowing businesses to optimize inventory management, production planning, and order fulfillment.

This guide displays options relevant to SAP Business One's MRP functionality.

---

## Configuration

### Configuration Fields

To ensure accurate MRP execution in SAP Business One, consider the following configuration steps:

- Verify that synchronization between the CompuTec ProcessForce Bill of Material (BOM) and Manufacturing Orders with SAP Business One is enabled.
- If the synchronization checkbox is left unchecked, BOMs created in CompuTec ProcessForce will not sync with SAP Business One.

    ![General BOM settings](./media/mrp-related-configuration/general-bom.webp)
- To trigger synchronization, make any change to the CompuTec ProcessForce BOM and click Update. This action will automatically push the data to SAP Business One.
- Even if your manufacturing process does not involve coproducts, it's still advisable to review the Coproducts configuration section.
- Enabling synchronization ensures that supply and demand data from ProcessForce Manufacturing Orders is reflected in SAP Business One, including:
    Item Master Data → Inventory Tab: Committed and Ordered fields

        - Forecasts
        - MRP Wizard
        - Order Recommendations
        - Available to Promise (ATP)
        - BOM Relationship Maps

## Documents Series

Make sure the SAP Production Order and the CompuTec ProcessForce Manufacturing Order use the same starting and ending document number range to enable proper synchronization.

    ![Doc Series](./media/mrp-related-configuration/doc-series.webp)

### Example

The screenshot below illustrates an example of Manufacturing Order - Production Order series synchronization:

- 2017PF series (Manufacturing Order series) is synchronized with 2017SAP series (Production Order series).

![Example](./media/mrp-related-configuration/example.webp)

{/*

## Multiple Manufacturing Order - Production Order Series Synchronization

:::info
    Values are required **only** when the company operates with branches. 
:::

The option is available from:

- General Settings form:

    ![General settings form](./media/mrp-related-configuration/mor-por-sync.webp)

:::info Path
    Main Menu: Administration → System Initialization → Configuration of Series Synchronization
:::

Upon accessing this option, the following form will be displayed:

![Series configuration](./media/mrp-related-configuration/series-configuration-mor-por.webp)

Within this form, you can assign predefined Production Order document series to corresponding Manufacturing Order document series.

For instructions on creating a document series, click [here](../../document-numbering.md).

*/}

## Transactions

- When entering a Manufacturing Order, please ensure that you use the correct document series.
- To reduce the error of entering the wrong value, assign the document series to the user.

![Manufacturing Order Setup](./media/mrp-related-configuration/series-manufacturing-order.webp)

## Coproducts

For businesses that manufacture Coproducts, completing this configuration is essential for ProcessForce to integrate with SAP Business One MRP functions.

SAP Business One does not inherently support Coproducts within its Bill of Material (BOM) functionality. To address this, during the synchronization of the Bill of Manufacturing and Manufacturing Order, a dummy BOM is created. In this setup:

- The Coproduct serves as the parent item.
- The Default Component, as defined in this configuration, is set as the component item.

Refer to the next section for detailed instructions on configuring the Default Component.

## Default Component

A Default Component should be configured with the following settings:

- Item Master Data Header: ensure that Sales Item, Inventory Item, Purchase Item, and Fixed Asset Item are all "unchecked".

    ![Header](./media/mrp-related-configuration/header.webp)

- Item Master Data → General Tab – Serial and Batch numbers, manage by item set to "None".

    ![Managed By](./media/mrp-related-configuration/managed-by.webp)

- Item Master Data → Production Data tab – Phantom item is "unchecked".

    ![Phantom](./media/mrp-related-configuration/phantom.webp)

- Item Master Data → Inventory Data tab: configure the Valuation Method as Standard, set Item Cost to 1, and designate a default warehouse.

    ![Valuation method](./media/mrp-related-configuration/stock-data.webp)

To mark a warehouse as the default, select the first column of its row and click the Set Default Whse button:

![Default warehouse](./media/mrp-related-configuration/default-warehouse.webp)

### Settings

An Item to be chosen as a Default Final Component,  ensure the following configurations:

- Inventory Item option checked.
- Sales, Purchase, and Fixed Asset options are disabled.
- The item must not be managed by Serial or Batch numbers.
- A default Warehouse is assigned.
- The Valuation Method is set to Standard.

:::note
    Please go to the [Coproducts section](#coproducts) to check where to set up the aforementioned settings
:::

## 10.0 R3: Multiple Branches Management of Default Component and Default Final Component

Starting from this version, SAP Business One allows configuring the Default Component and Default Final Component separately for different company branches.

To enable this option, follow these steps:

1. In the SAP Business One Branches - Setup, ensure each branch has a designated default warehouse.
2. Create a separate Default Component for each branch.
3. Within each branch's Default Component, assign the relevant branch warehouses, ensuring at least one is set as default in the Item Master Data.
4. In ProcessForce Branches: Components Configuration (accessible via General Settings > ProcessForce tab > MRP tab > Components Configuration for Branches), set a default warehouse. Carefully assign the appropriate warehouse to each branch.

The same process applies to the Default Final Component. It is crucial to first define a Default Component for a specific branch before configuring the Default Final Component.

![Multiple branches](./media/mrp-related-configuration/multiple-branches.webp)

## Key MRP Settings

### Split Purchase Documents between Vendors

![Split purchase](./media/mrp-related-configuration/mrp-split-purchase.webp)

- Choosing this option enables automatic distribution of purchases among preferred vendors.
- Checking the checkbox results in accessing the following form from Item Master Data form, Planning Data tab:

    ![Preferred vendors](./media/mrp-related-configuration/preferred.webp)

- On this form, you can assign a preferred vendor and specify a percentage. If percentages are set for vendors, the quantity in a purchase document for the specific item will be distributed proportionally.
- Additionally, please refer to the table at the bottom of this page.

### Minimum and Maximum Manufacturing Order Planned Quantity

- You can configure minimum and maximum order quantity in Item Master Data, Planning Data tab:

    ![Min/Max order qty](./media/mrp-related-configuration/item-master-data-min-max.webp)

The table below displays the preferred vendors along with the minimum and maximum quantities (click to enlarge).

    ![Results](./media/mrp-related-configuration/results.webp)

---
