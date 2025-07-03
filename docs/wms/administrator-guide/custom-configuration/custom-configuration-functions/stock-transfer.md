---
sidebar_position: 3
---

# Stock Transfer

The Stock Transfer module within SAP Business One offers comprehensive options for managing Inventory Transfer and stock movement between warehouses. This overview walks through key configuration options, changes, and customization capabilities, helping ensure seamless and efficient inventory handling.

---

![Stock Transfer](./media/stock-transfer/stock-transfer.png)

1. **Show Project selection** – Displays the Project Selection form before the Remarks form, aiding in document creation and ensuring the accurate project is selected.

    ![Document Details](./media/stock-transfer/show-project-selection.png)

2. **Default Project** – If a default project is chosen, it can be automatically selected by clicking the right arrow on the Project Selection form, streamlining the process..

    ![Default Project](./media/stock-transfer/default-project-stock-transfer.png)

3. **Scan DocNum on the Base Document selection window** – This option allows scanning by document number (DocNum) instead of entry number (DocEntry), making it easier to retrieve documents based on familiar identifiers.

4. **Enable dismiss Inventory Transfer Request before closing document** – Provides an option to dismiss an active document, accessible from the Remarks window.

    ![Remarks Window](./media/stock-transfer/gr-remarks.png) ![Remarks Window](./media/stock-transfer/gr-remarks-01.png)

5. **Canceling document releases Transfer Request document** – Upon cancellation, closes the Inventory Transfer Request document if the “Dismiss” option is set to “Yes,” preventing further processing in CompuTec WMS and reflecting a “Closed” status in SAP Business One.

6. **Block adding Items to base documents** – Prevents the addition of extra items not specified in the base document, ensuring inventory transfers remain consistent with the original request.

    ![Base Document](./media/stock-transfer/doc-details.png) ![Base Document](./media/stock-transfer/doc-details-01.png)

7. **Skip destination Warehouse and Bin Location selection** – Uses the default destination specified in the base document, bypassing the manual selection of warehouse or bin locations.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Before marked**

    ![Before Marked](./media/stock-transfer/before-marked.png) ![Before Marked](./media/stock-transfer/before-marked-01.png) ![Before Marked](./media/stock-transfer/before-marked-02.png) ![Before Marked](./media/stock-transfer/before-marked-03.png)

    **After marked**

    ![After Marked](./media/stock-transfer/stock-transfer-quantity.png) ![After Marked](./media/stock-transfer/before-marked-01.png) ![After Marked](./media/stock-transfer/before-marked-03.png)
    </div>
    </details>

8. **Force manual quantity confirmation** – This option requires manual confirmation of quantities, rather than relying on barcode scanning, to avoid errors in quantity assignment.

9. **Forbid picking more than is on Transfer Request** – It is not possible to assign a greater quantity of an item to a document than what's specified in the base document.

10. **Show Cost Dimensions** – Enabling this checkbox adds a Cost Dimensions button on the Quantity form for users who need to assign additional cost dimensions.

11. **Skip SAP Allocation Quantity, Skip CompuTec ProcessForce Allocation Quantity** – Disables batch and serial number allocations in SAP Business One if custom allocations are required.

12. **Use Sales UoM** – Click [here](../../../user-guide/managing-uom-in-computec-wms.md) to find out more on Managimg UoM in CompuTec WMS.

13. **Ask to continue scanning when multiple items are over-picked** – When checked: it prompts a message when an item’s quantity exceeds its required amount across multiple lines, allowing users to manage quantity allocation.

14. **Disable auto "From Bin" assigment (when intentory exists in single bin) while adding item by scanning** - Disables automatic assignment of items from a single bin location when the item exists in an alternative bin location.

15. **Automatically populate the Quantity field with the value from the base document** - When the Quantity screen is opened, the quantity field is automatically populated with the quantity from the base document.

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
The Stock Transfer module in SAP Business One, combined with CompuTec WMS, provides robust tools for effective Warehouse and Inventory Management. The module’s enhanced configuration options, from project selection and document scanning to customized sorting and filters, ensure flexibility and streamlined processes.
