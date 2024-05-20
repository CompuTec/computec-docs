---
sidebar_position: 2
---

# From Pick Order

The Pick Order transaction allows generating a ProcessForce Production issue from a Pick Order. (An example Pick Order used in this guide is posted below).

:::note
    Some forms' order and availability during a document's creation may vary depending on individual settings. Click here to find out more.
:::

1. To create a Production Issue from a Pick Order, click Pick Order in the main menu.

    ![Issue to Production](./media/FromPickOrder3.webp)
2. The Opened Pick Orders window will appear.

    Choose a desired Pick Order by clicking its row. Only opened or started Pick Orders are displayed.

    ![Opened Pick Orders](./media/OpenedPickOrders3.webp)

    :::caution
        You can use the Filter field to search the records by typing in at least a part of a name or a document number.

        It is also possible to search by document date. In this case, a date without separators has to be typed in the filter field, e.g., 20190107 instead of 2019-01-07.
    :::

3. The Items to Pick order form will appear with Manufacturing Orders connected to the chosen Pick Order.

    Click an Item row or scan a barcode with an Item prefix to choose it from the list and set its quantity.

    ![Items to pick order](./media/ItemsToPickOrder3.webp)

    ![Quantity](./media/PickOrder-Quantity3.webp)

    Click the '+' button to add Manufacturing Orders not connected to the chosen Pick Order.

    ![Items to pick order](./media/AddItemToPickOrder3.webp)

    You can also add a Manufacturing Order by scanning a barcode with a document number prefix. Only Manufacturing Orders with the status Open can be added.

    Click a required row or scan a barcode with a document number prefix to add a Manufacturing Order to the Items to Pick List.

    ![Manufacturing Order](./media/MO3.webp)

    Click the Storage Unit icon to add a Storage Unit to a current document. You can add a Storage Unit by scanning a barcode with an SU prefix. Only SUs with Items from the related Pick Order and the same Warehouse as on the Items rows can be added.

    ![Items to pick order](./media/PickOrder-AddSU3.webp)

    Click the required Storage Unit row to add it to the document. You can add it by scanning a barcode with a storage unit prefix.

    ![Storage Unit](./media/PickOrder-SU3.webp)

    ![Storage Unit](./media/SUDetails3.webp)

    Scanning a barcode without a prefix in the Items to pick list, which resulted in checking it for storage unit information.

    ![Items to pick order](./media/SUAdded3.webp)
4. Choosing a Storage Unit or a Batch in the FIFO method is possible. You can skip this step by clicking the 'Right Arrow' icon.

    You can hide this form by using the option.

    ![Options](./media/FIFO3.webp)

    ![Storage Unit](./media/FIFO-SU3.webp)

    ![Storage Unir details](./media/SUInfo3.webp)
5. If an Item is managed by Bin Locations, the From Bin form will appear.

    Click a desired Bin row to choose it. You can also scan a barcode (with prefixes or not).

    ![From Bin](./media/FromBIN3.webp)
6. If Batches manages an Item, the Batch form will appear.

    Click the desired Batch row. A batch can be chosen by scanning a barcode with a prefix.

    ![Batches](./media/Batches3.webp)
7. The Quantity form will appear.

    The field is automatically filled in with the required quantity. Type in the desired amount or set it by clicking the plus and minus buttons.

    Quantity can be set by scanning a barcode with a quantity prefix. Click the right arrow after selecting an amount.

    ![Quantity](./media/Quantity13.webp)
8. In the Items to pick form, click the 'Right Arrow' button after setting the required quantities for each Item.

    ![Items to pick order](./media/Done3.webp)
9. Remarks form will appear.

    Issue document numbering series can be chosen from the drop-down lists. This value can be preset in ProcessForce form Document Numbering: Main Menu > Administration > System Initialization> Document Numbering. If the series is not picked, the default ones will be selected.

    Remarks can be added.

    <!-- ![Remarks](./media/Remarks01.webp) -->

10. Click the Save icon after setting all the details.

    ![Remarks](./media/Remarks3.webp)
11. A system message about a document creation will be displayed.

    Click 'OK' to finish the creation of a document.

    ![Created](./media/Created3.webp)
12. Goods Issue has been created and recorded and can be viewed in SAP Business One.
