---
sidebar_position: 3
---

# Goods Issue

The Goods Issue document in SAP Business One records the internal movement of items or materials out of a warehouse. It’s typically used when goods are consumed internally, issued for production, or sent for other non-sales purposes.

Goods Issue documents the company's internal issue of Items or materials.

:::info
    The order and availability of forms during document creation may vary depending on your system's settings. Click [here](../../administrator-guide/custom-configuration/overview.md) to find out more about custom configuration.
:::

---

## Step-by-Step Process to Create a Goods Issue Document

1. From the main menu, select Goods Issue to begin the process.

    ![Main Menu](./media/goods-issue/1-goods-issue.jpg)

2. You’ll now be prompted to choose the Source Warehouse.

        - If a [default warehouse](../starting.md#documents-tab) is already set in your system, this step may be skipped.
        - You can also scan a warehouse code (with or without a prefix) to make a selection.

            ![Warehouse](./media/goods-issue/2-whs.jpg)

3. Click the menu icon, then the plus icon (+) to begin adding items.

    ![Document Details](./media/goods-issue/3-doc-details.jpg)

    You can:

        - Scan an Item or Storage Unit (SU) code, with or without a prefix.
        - Manually select items from the list shown.

    <details>
    <summary>Click here to expand</summary>
    <div>
    Scanning an Item code of an Item that is not on the list adds the Item to the list.
    Scanning a code without a prefix leads to interpreting it as an Item code and works as described above.

    If a code without a prefix is scanned and an Item with this code is not found, the application attempts to validate the code as an SU code.

    ![Barcode](./media/barcode.png)

    You can scan an Item or SU code in this form, with or without a prefix. Scanning an Item code of an Item that is on the list leads to the quantity.

    ![Quantity](./media/goods-issue/4-quantity.jpg)
    </div>
    </details>

4. The list of available Items will be displayed. Click a desired Item to add it to the document.

    ![List of Items](./media/goods-issue/5-list-of-items.jpg) ![List of Items](./media/goods-issue/6-doc-det.jpg)

5. Then, click on the item row to set its details.

    ![Highlight](./media/goods-issue/7-doc-det.jpg)

6. If the Item is managed by serial numbers, a form for choosing it will be displayed.

    ![Serials](./media/goods-issue/11-serials.jpg) ![Doc Details](./media/goods-issue/12-doc-det.jpg)

7. If the Item is managed by Batches, a form for choosing it will be displayed. Click a desired batch from the list.

    ![Batch](./media/goods-issue/13-batches.jpg) ![Quantity](./media/goods-issue/14-quantity.jpg)

8. A form for setting quantity will be displayed. Type in a desired value or set it using the plus and minus buttons and click the "Save" icon.

    ![Quantity](./media/goods-issue/15-quantity.jpg)

9. Click "More" and then the Storage Unit icon to add a Storage Unit.

    ![Add](./media/goods-issue/16-doc-det.jpg)

10. There are two available scanning options:

        1. Scan the SU Code or SSCC directly in the Document Details window.

            ![Scan SU](./media/goods-issue/1-scan-doc-det.jpg) ![Scan SU](./media/goods-issue/2-doc-det.jpg)
        
        2. Scan within the SU List window, with two behaviors:

            a. **Select All**: functions the same as scanning in the Document Details window.

                ![Scan SU](./media/goods-issue/1-scan-simulator.jpg) ![SU Details](./media/goods-issue/2-su-details.jpg) ![Quantity](./media/goods-issue/3-quantity.jpg) ![SU Details](./media/goods-issue/4-su-det.jpg) ![Doc Details](./media/goods-issue/5-doc-det.jpg)

            b. **Individual Selection**: allows quantities to be taken separately from each SU unit.

                ![List of SU](./media/goods-issue/1-list-of-su.jpg) ![SU Details](./media/goods-issue/2-su-det.jpg) ![Doc Details](./media/goods-issue/3-doc-det.jpg)

11. Click the "Forward" icon after setting all the details.

    ![Ready](./media/goods-issue/21-doc-details.jpg)

12. Set the series (if it is preset and required), add Remarks (if needed), and click the "Save" icon.

    ![Remarks](./media/goods-issue/22-remarks.jpg)

13. A confirmation message with the document number will appear.

    ![Final message](./media/goods-issue/23-info-msg.jpg)

14. The Goods Issue document is now saved and available in the SAP Business One system.

    ![Goods Issue](./media/goods-issue/24-goods-issue.jpg)

---
