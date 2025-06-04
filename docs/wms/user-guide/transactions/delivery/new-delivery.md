---
sidebar_position: 6
---

# New Delivery

This guide explains how to create a new Delivery Document in the system. A delivery document is used to record the dispatch of goods to a customer and is often based on a Sales Order or Pick List. Depending on your system’s configuration, some steps or screens may vary.

:::info
Some forms' order and availability during document creation may vary depending on individual settings.
:::

---

1. Press the Delivery in the main menu to create a delivery document.

    ![Delivery](./media/1-delivery.jpg) ![Delivery](./media/2-delivery-operations.jpg)

    :::info
        It is possible to [set up a default Warehouse](../../starting.md#documents-tab). In this case, the Warehouse Selection screen is skipped, and the Warehouse set as default is chosen automatically.
    :::

2. The Customer Selection window appears. Click a row to choose a customer and move to the next screen.

    ![Customer Selection](./media/3-cust-selection.jpg)

    The Document Details screen appears.

    ![Document Details](./media/4-doc-details.jpg)

3. After selecting the customer, the Document Details screen opens. Here, you can add items to the delivery using multiple methods.

    <details>
    <summary>A. Add new Item from the Item's list.</summary>
    <div>
    Select an item from the list and input its quantity.

    ![New Item List](./media/5-new-item.jpg) ![Doc Details](./media/6-doc-det.jpg) ![Line Details](./media/7-line-detail.jpg) ![Quantity](./media/8-quantity.jpg)

    Scan the item’s barcode to be taken directly to the quantity screen. Example shown for non-managed item A00001.

    ![Barcode](./media/barcode.png)

    Scanning the barcode leads directly to the quantity screen.

    ![Quantity Screen](./media/9-quantity.jpg)
    </div>
    </details>

    <details>
    <summary>B. Add a new item in new SU</summary>
    <div>
    Use this option to create a new SU and add an item into it.

    ![Add SU](./media/10-su-options.jpg) ![New SU](./media/10a-new-su.jpg) ![Doc Details](./media/10b-doc-det.jpg)
    </div>
    </details>

    <details>
    <summary>C. Add a new item in existing SU</summary>
    <div>
    Use this option to place an item into an already existing SU.

    ![List of SU](./media/11-list-of-su.jpg) ![Doc Det](./media/12-doc-det.jpg) ![SU Details](./media/12a-su-det.jpg) ![SU Details](./media/12b-su-det.jpg) ![Batches](./media/12c-batches.jpg) ![Quantity](./media/12d-quantity.jpg) ![SU Details](./media/12e-su-det.jpg)
    </div>
    </details>

4. In the Remarks screen, you can:

    - Add comments
    - Change the document series
    - Enter supplier reference numbers
    - Include UDF (User Defined Fields), if required

        ![Remarks](./media/13-remarks-screen.jpg)

5. Message info about the created delivery no appears.

    ![Created Delivery](./media/14-delivery-created.jpg)

6. The Delivery document is posted in SAP Business One.

    ![SAP Delivery](./media/15-sap-delivery.jpg)

---
