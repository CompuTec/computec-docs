---
sidebar_position: 4
---

# Goods Receipt Purchase Order Settings

## New Goods Receipt

1. **Show Warehouse Selection and no default Warehouse or Bin Location chosen**– it is required to choose a Warehouse on document creation or adding Items

    <details>
    <summary>Click here to expand</summary>
    <div>
    We start by selecting the warehouse, though this step can be skipped initially. However, the warehouse information will be required when adding the index. The forms are opened in the following order to create a new GRPO document:

    ![Warehouse](./media/goods-receipt-po-settings/warehouse.png) ![Supplier Selection](./media/goods-receipt-po-settings/supplier-selection.png) ![Document Details](./media/goods-receipt-po-settings/document-details.png) ![Warehouse](./media/goods-receipt-po-settings/warehouse-01.png) ![New Item](./media/goods-receipt-po-settings/new-item.png) ![Quantity](./media/goods-receipt-po-settings/quantity.png) ![Document Details](./media/goods-receipt-po-settings/document-details-01.png) ![Remarks](./media/goods-receipt-po-settings/remarks.png)
    </div>
    </details>

2. **Show Warehouse Selection, default Warehouse and Bin Location are chosen** – if Warehouse selection step is skipped, user is not asked about it on adding Items (a default will be added).

    <details>
    <summary>Click to check the effect on the workflow</summary>
    <div>
    ![Supplier Selection](./media/goods-receipt-po-settings/supplier-selection-01.png) ![Warehouse](./media/goods-receipt-po-settings/warehouse-02.png)![Document Details](./media/goods-receipt-po-settings/document-details-02.png) ![New Item](./media/goods-receipt-po-settings/new-item-01.png) ![Quantity](./media/goods-receipt-po-settings/quantity-01.png) ![Document Details](./media/goods-receipt-po-settings/document-details-03.png) ![Remarks](./media/goods-receipt-po-settings/remarks-01.png)
    </div>
    </details>

3. **Do not show Warehouse Selection and no default Warehouse or Bin Location chosen** – no Warehouse selection on creation of a document, but on adding an Item.

    <details>
    <summary>Click to check the effect on the workflow</summary>
    <div>
    ![Supplier Selection](./media/goods-receipt-po-settings/supplier-selection-02.png) ![Document Details](./media/goods-receipt-po-settings/document-details-04.png) ![Warehouse](./media/goods-receipt-po-settings/warehouse-03.png) ![New Item](./media/goods-receipt-po-settings/new-item-02.png) ![Quantity](./media/goods-receipt-po-settings/quantity-02.png) ![Document Details](./media/goods-receipt-po-settings/document-details-05.png) ![Remarks](./media/goods-receipt-po-settings/remarks-02.png)
    </div>
    </details>

4. **Do not Show Warehouse Selection and default Warehouse or Bin Location are chosen** – user is not asked to choose a Warehouse at all. When the checkbox is unchecked but user put Warehouse or Bin code, the transaction should be a little bit shorter, but if user skips Warehouse selection, the Item lists is empty.

    <details>
    <summary>Click to check the effect on the workflow</summary>
    <div>
    ![Supplier Selection](./media/goods-receipt-po-settings/supplier-selection-03.png) ![Document Details](./media/goods-receipt-po-settings/document-details-06.png) ![New Item](./media/goods-receipt-po-settings/new-item-03.png) ![Quantity](./media/goods-receipt-po-settings/quantity-03.png) ![Document Details](./media/goods-receipt-po-settings/document-details-07.png) ![Remarks](./media/goods-receipt-po-settings/remarks-03.png)
    </div>
    </details>

## From Purchase Order

In case of creating a Goods Receipt PO from Purchase Order, choosing or putting Warehouse code does not affect document creation (a Warehouse code has already been defined in a related Purchase Order).

    1. **Default Warehouse checked or unchecked**:
        <details>
        <summary>Click here to expand</summary>
        <div>
        ![Order Selection](./media/goods-receipt-po-settings/order-selection.png) ![Document Details](./media/goods-receipt-po-settings/document-details-08.png) ![Warehouse](./media/goods-receipt-po-settings/warehouse-04.png) ![New Item](./media/goods-receipt-po-settings/new-item-04.png) ![Quantity](./media/goods-receipt-po-settings/quantity-04.png) ![Document Details](./media/goods-receipt-po-settings/document-details-09.png) ![Remarks](./media/goods-receipt-po-settings/remarks-04.png)
        </div>
        </details>

    2. **Default Warehouse code chosen** – user chooses only from Purchase Orders for the chosen Warehouse:

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![Order Selection](./media/goods-receipt-po-settings/order-selection-01.png) ![Document Details](./media/goods-receipt-po-settings/document-details-10.png) ![Quantity](./media/goods-receipt-po-settings/quantity-05.png) ![Document Details](./media/goods-receipt-po-settings/document-details-11.png) ![Remarks](./media/goods-receipt-po-settings/remarks-05.png)
        </div>
        </details>

## From A\P Reserve Invoice

In case of creating a Goods Receipt PO from A/P Reserve Invoice, choosing or putting Warehouse code does not affect document creation (a Warehouse code has already been defined in a related A/P Reserve Invoice).

    1. **Default Warehouse checked or unchecked** – It is required to choose a Warehouse first on adding a new Item.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![Reserve Invoice](./media/goods-receipt-po-settings/reserve-invoice.png) ![Document Details](./media/goods-receipt-po-settings/document-details-12.png) ![Warehouse](./media/goods-receipt-po-settings/warehouse-05.png) ![New Item](./media/goods-receipt-po-settings/new-item-05.png) ![Quantity](./media/goods-receipt-po-settings/quantity-06.png) ![Document Details](./media/goods-receipt-po-settings/document-details-13.png) ![Remarks](./media/goods-receipt-po-settings/remarks-06.png)
        </div>
        </details>

    2. Warehouse code put in – only documents for chosen Warehouse are available to choose.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![Reserve Invoice](./media/goods-receipt-po-settings/reserve-invoice-01.png) ![Document Details](./media/goods-receipt-po-settings/document-details-14.png) ![New Item](./media/goods-receipt-po-settings/new-item-06.png) ![Quantity](./media/goods-receipt-po-settings/quantity-07.png) ![Document Details](./media/goods-receipt-po-settings/document-details-15.png) ![Remarks](./media/goods-receipt-po-settings/remarks-07.png)
        </div>
        </details>

## From Draft Goods Receipt PO

In case of creating a Goods Receipt PO from a Draft document, choosing or putting Warehouse code does not affect document creation (a Warehouse code has already been defined in a related Draft document). The new index is accepted into the index store from the first line.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![Draft Selection](./media/goods-receipt-po-settings/draft-selection.png) ![Document Details](./media/goods-receipt-po-settings/document-details-16.png) ![New Item](./media/goods-receipt-po-settings/new-item-07.png) ![Quantity](./media/goods-receipt-po-settings/quantity-08.png) ![Document Details](./media/goods-receipt-po-settings/document-details-17.png) ![Remarks](./media/goods-receipt-po-settings/remarks-08.png)
        </div>
        </details>

If 'Enable adding Items from different Warehouses' is checked in Custom Configuration, then the application asks for a Warehouse every time – even after unchecking the checkbox and putting in a default Warehouse.

    ![Enable Adding Items](./media/goods-receipt-po-settings/enable-adding-items.png)
