---
sidebar_position: 2
---

# Goods Receipt

![Goods Receipt](./media/custom-configuration-goods-receipt.webp)

**After picking an Item, auto return to** – the option allows you to choose to which window the application goes after picking an Item.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Main Document Workflow**

    ![Quantity](./media/goods-receipt/quantity-03.png) ![Document Details](./media/goods-receipt/document-details-03.png)

    **Item Details WorkFlow**
    
    ![Quantity](./media/goods-receipt/quantity-04.png) ![Storage Info](./media/goods-receipt/storage-info.png)
    </div>
    </details>

**Show Project selection** – choosing this option results in displaying the Project Selection form before the Remarks form when creating a document (to which it is required to add receiving Items).
    <details>
    <summary>Click here to expand</summary>
    <div>
    ![Document Details](./media/goods-receipt/document-details-04.png) ![Project Selection](./media/goods-receipt/project-selection-02.png)
    </div>
    </details>

**Default Project** – if a default project is chosen, clicking the right arrow icon on the Project selection form is possible. A default project set up here will be chosen automatically.
     <details>
    <summary>Click here to expand</summary>
    <div>
    ![Default Project](./media/goods-receipt/default-project.png)
    </div>
    </details>

**Enable saving to drafts** – allows saving documents as document drafts.

    <details>
    <summary>Click here to expand</summary>
    <div>

    By default, this option is turned off. In this case, the Remarks windows look like this:
        ![Draft](./media/goods-receipt/remarks.png)

    
    When the option is turned on, a new option is added (highlighted in the screenshot below):
        ![Draft](./media/goods-receipt/remarks-04.png)
    </div>
    </details>

**Enable saving documents when drafts ON** – allows deciding on the Remarks form whether to save a transaction as a document or a document draft.

    <details>
    <summary>Click here to expand</summary>
    <div>
        When the option is checked, two function buttons are available:
        ![Draft](./media/goods-receipt/draft.png)
    </div>
    </details>

**Force manual quantity confirmation** – with this option checked, it is required to manually confirm previously set up quantity (scanning a barcode does not confirm it automatically)

**Enable adding Items from multiple Warehouses** – if the option is checked, adding Items from different Warehouses is possible, and the Warehouse window will be displayed during the transaction.

    <details>
    <summary>Click here to expand</summary>
    <div>
    ![Document Details](./media/goods-receipt/document-details-02.png) ![Warehouse](./media/goods-receipt/warehouse-02.png)
    </div>
    </details>

**Enable adding Items with empty Bin Code field** – it allows to add Items without Bin Code to a Warehouse with Bin Locations. An Item with an empty Bin Code will be assigned to the first available bin if enabled.

    <details>
    <summary>Click here to expand</summary>
    <div>
        ![Warehouse](./media/goods-receipt/warehouse-01.png) ![Supplier Selection](./media/goods-receipt/supplier-selection.png) ![Document Details](./media/goods-receipt/document-details-01.png) ![New Item](./media/goods-receipt/new-item.png) ![Quantity](./media/goods-receipt/quantity-02.png)
    </div>
    </details>

**Show Cost Dimensions** – checking this checkbox adds a button (next to the Back button) on the Quantity form that leads to the Cost Dimensions form.

**Keep selected Bin Location after adding an item** – after picking an Item, the Bin Location field will not be cleared (keeping the same Bin Location).
