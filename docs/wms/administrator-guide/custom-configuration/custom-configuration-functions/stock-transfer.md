---
sidebar_position: 3
---

# Stock Transfer

The Stock Transfer module within SAP Business One offers comprehensive options for managing Inventory Transfer and stock movement between warehouses. This overview walks through key configuration options, changes, and customization capabilities, helping ensure seamless and efficient inventory handling.

---

![Stock Transfer](./media/stock-transfer/screenshot-01.png)

## Configuration Options

Below are the available settings and behaviors you can enable or disable in the Stock Transfer process:

1. **Show Project selection**: Displays the Project Selection form before the Remarks form, ensuring the correct project is linked during document creation.  

    ![Document Details](./media/stock-transfer/show-project-selection.png)

2. **Default Project**: If a default project is set, it can be automatically applied by clicking the right arrow in the Project Selection form, speeding up document processing.  

    ![Default Project](./media/stock-transfer/default-project-stock-transfer.png)

3. **Move only indexes by default**: This option allows you to move indexes from Storage Unit to another location.

    - Move only indexes by default

        ![Move only indexes by default](./media/stock-transfer/screenshot-3.png)

    - Move only indexes by default X

        ![Move only indexes by default](./media/stock-transfer/screenshot-4.png)

4. **Scan DocNum on the Base Document selection window**: Enables scanning by **document number (DocNum)** instead of **entry number (DocEntry)**, simplifying document retrieval.

5. **Enable dismiss Inventory Transfer Request before closing document**: Provides an option to dismiss an active document, accessible from the Remarks window.

    ![Remarks Window](./media/stock-transfer/gr-remarks.png) ![Remarks Window](./media/stock-transfer/gr-remarks-01.png)

6. **Canceling document releases Transfer Request document**: When cancellation occurs, the related Inventory Transfer Request document is also closed (if *Dismiss* is set to **Yes**). This prevents further processing in CompuTec WMS and updates the status to **Closed** in SAP Business One.

7. **Block adding Items to base documents**:  Prevents adding items not listed in the base document, ensuring transfers remain aligned with original requests.

    ![Base Document](./media/stock-transfer/doc-details.png) ![Base Document](./media/stock-transfer/doc-details-01.png)

8. **Skip destination Warehouse and Bin Location selection**: Automatically uses the destination warehouse/bin defined in the base document, bypassing manual entry.  
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Before marked**

    ![Before Marked](./media/stock-transfer/before-marked.png) ![Before Marked](./media/stock-transfer/before-marked-01.png) ![Before Marked](./media/stock-transfer/before-marked-02.png) ![Before Marked](./media/stock-transfer/before-marked-03.png)

    **After marked**

    ![After Marked](./media/stock-transfer/stock-transfer-quantity.png) ![After Marked](./media/stock-transfer/before-marked-01.png) ![After Marked](./media/stock-transfer/before-marked-03.png)
    </div>
    </details>

9. **Force manual quantity confirmation**: Requires users to confirm quantities manually instead of relying only on barcode scans, reducing errors in allocation.

10. **Forbid picking more than is on Transfer Request**: Prevents assigning a higher quantity than what is specified in the base Transfer Request.

11. **Show Cost Dimensions**: Adds a **Cost Dimensions** button to the Quantity form for users who need to assign extra cost dimensions.

12. **Skip SAP Allocation Quantity, Skip CompuTec ProcessForce Allocation Quantity**: Disables batch and serial allocations in SAP Business One and CompuTec ProcessForce if custom allocations are required.

13. **Use Sales UoM**: For details, see [Manging UoM in CompuTec WMS](../../../user-guide/managing-uom-in-computec-wms.md).

14. **Ask to continue scanning when multiple items are over-picked**: If an item’s picked quantity exceeds requirements across multiple lines, the system prompts users to confirm whether to continue scanning.

15. **Disable auto "From Bin" assignment (when inventory exists in single bin) while adding item by scanning**: Stops automatic bin assignment when stock exists in a single bin, allowing users to choose manually.

16. **Automatically populate the Quantity field with the value from the base document**: When opening the Quantity screen, the value from the base document is prefilled automatically.

17. **Quick SU Transfer - Select SU only by scanning**: Allows SU transfer only by scanning.

    ![SU Trasnfer](./media/stock-transfer/screenshot-5.png)

18. **Quick SU Transfer - Skip remarks**: Skips the **Remarks** window during Storage Unit transfer and automatically returns to the first **Stock Transfer** > **List of SUs** screen after saving. This allows users to immediately scan and transfer another SU without additional confirmation steps.

    ![SU Trasnfer- Skip remarks- before and after screen](./media/stock-transfer/screenshot-7a.png)

19. **Move fully picked lines to the bottom of the list**:  Lines that have been fully picked are automatically moved to the bottom of the list, keeping focus on pending lines.  

    - Move fully picked lines to the bottom of the list:

        ![Move fully picked lines to the bottom of the list](./media/stock-transfer/screenshot-6.png)

    - Move fully picked lines to the bottom of the list X

        ![Move fully picked lines to the bottom of the list X](./media/stock-transfer/screenshot-7.png)

20. **Quick SU Tool Tip Fill strategy (scanning)**: Defines how the system automatically fills the **Source** and **Destination** warehouse and bin fields when scanning a **Storage Unit (SU)** during **Stock Transfer**.

    ![Quick SU Tool Tip Fill strategy (scanning) options](./media/stock-transfer/screenshot-21.png)

    Available values:
    - **Set to Source**: Always updates the **Source** warehouse and bin fields.
    - **Set to Destination**: Always updates the **Destination** warehouse and bin fields.
    - **Set to First Empty then Source**: If either **Source** or **Destination** is empty, the system fills the empty one. If both are filled, the system updates the **Source** fields.
    - **Set to First Empty then Destination**: If either **Source** or **Destination** is empty, the system fills the empty one. If both are filled, the system updates the **Destination** fields.  

    ![Quick SU Tool Tip Fill strategy (scanning) options](./media/stock-transfer/screenshot-323.png)

## Changes

In the updated Stock Transfer tab, some previous features have been removed or adjusted to streamline processes. Here’s a look at these adjustments and custom query options available for advanced users.

The following options have been removed:

- Inventory Transfer Requests sorting order
- Filter Inventory Transfer Request for bin
- Extra fields in Inventory Transfer Request query

    ![Inventory Transfer](./media/stock-transfer/inventory-transfer.png)

It is possible to realize Inventory Transfer Requests sorting order function by creating a specific SQL query in Custom Query Manager. Choose the option and then, choose a required transaction:

    ![Inventory Transfer](./media/stock-transfer/custom-query-manager.png)
    
The displayed records order can by modified by modifying the default line: `ORDER BY T0."DocEntry"`

    ![Document Entry](./media/stock-transfer/doc-entry.png)

We have four options for changes, similar to the previous version. On the left side, the selection options from the old view are listed, and on the right side, the corresponding commands we can use now are provided.

1. creationdate ascending - "DocDate" ASC
2. creationdate descending - "DocDate" DESC
3. duodate ascending - "DocDuoDate" ASC
4. duodate descending - "DocDuoDate" DESC

We can also create custom filters by searching for and entering the relevant column name, which can be obtained through SQL Manager.

    ![Create Own Filters](./media/stock-transfer/create-own-filters.png)

Here is an example where documents can be sorted by document number, from highest to lowest, using the "DocNum" column.

    ![Document Number](./media/stock-transfer/doc-no-desc.png)

The Changes look like this:

1. without making any changes (fig.1)

    ![Inventory Transfer](./media/stock-transfer/inventory-transfer-ascending.png)

2. sorting by document number (fig.2)

    ![Inventory Transfer](./media/stock-transfer/inventory-transfer-descending.png)

Here is an example for the "Extra field in Inventory Transfer Request query" checkbox. We open SQL Manager and locate the table from which to retrieve the data.

    ![Inventory Transfer](./media/stock-transfer/inventory-transfer-05.png)

Next, go to Custom Config, select the Manager tab, and choose the transaction (in this case, "Stock Transfer").

    ![Inventory Transfer](./media/stock-transfer/stock-transfer-custom-config.png)

The SQL Manager provides access to eight fields for customization within Inventory Transfer Request queries. The default query includes six fields, with two extra fields, "Field7" and "Field8", available from the "OWTQ" table.

    ![Fields](./media/stock-transfer/fields.png)

Fields marked according to the field layout in the Custom Query:

    ![Inventory Transfer](./media/stock-transfer/stock-transfer-01.webp)

---
