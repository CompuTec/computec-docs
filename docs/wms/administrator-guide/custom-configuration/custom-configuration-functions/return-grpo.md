---
sidebar_position: 14
---

# Return GRPO

![Return GRPO](./media/cc-return-grpo.webp)

**After picking, auto return to:** – defines to which form the application leads after confirming picking quantity for a document line.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Main Document Workflow**
        ![Main Document Workflow](./media/return-grpo/main-document-workflow.PNG)
        **Item Details WorkFlow**
        ![Item Details Workflow](./media/return-grpo/item-details-workflow.PNG)
    </div>
    </details>

**Enable saving to drafts** – allows saving documents as document drafts.
    <details>
    <summary>Click here to expand</summary>
    <div>
    By default, the option is switched off, and the Remarks window looks like this:
        ![Remarks Window](./media/return-grpo/remarks-window-01.png)
    When the option is switched on, the Remarks window looks like this:
        ![Remarks Window](./media/return-grpo/remarks-window-02.png)
    </div>
    </details>

**Enable saving documents when drafts ON** – allows deciding on the Remarks form whether to save a transaction as a document or a document draft.
    <details>
    <summary>Click here to expand</summary>
    <div>
    When the option is checked, two options are available in the Remarks field:
        ![Save Documents](./media/return-grpo/save-documents.png)
    </div>
    </details>

**Scan DocNum on Goods Receipt PO select window** – checking this option allows you to scan a document by DocNum instead of DocEntry.

**Force manual quantity confirmation** – after scanning required prefixes (Warehouse, Vendor, Item, Quantity, Batch number), the application forces manual confirmation of quantity (instead of confirmation after scanning a barcode with quantity)

**Enable adding Items from different Warehouses** – self-explanatory

**Return Items only from the base document** – unchecking this checkbox allows creating a Return document based on any Items added to the list. Checking this option causes the Item list to be populated only by Items from the base document.
    <details>
    <summary>Click here too expand</summary>
    <div>
    ![Returns Operations](./media/return-grpo/returns-operations.png) ![Goods Return Operations](./media/return-grpo/goods-return-operations.png) ![Goods Receipt](./media/return-grpo/goods-receipt.png) ![Document Details](./media/return-grpo/document-details-03.png)
    </div>
    </details>

**Return Items only from the base document for drafts** – works the same way as the option above but for document drafts.

**New Return PO: Supplier-Warehouse workflow** – checking this option affects the workflow in how the Supplier form is displayed first. Choosing a Supplier leads to the Warehouse form. With this setting, scanning a Serial number or a Batch number on the Warehouse selection window will use the "Fast Scan," i.e., select warehouse, item, and serial/batch with the quantity provided in the scanned barcode and add it to the document.

**Show Cost Dimensions** – checking this checkbox adds a button (next to the Back button) on the Quantity form that leads to the Cost Dimensions form.

**Display Delivered Batches** – display all Batches or only Batches of a related Business Partner.
    <details>
    <summary>Click here to expand</summary>
    <div>
    Reflects the related SAP Business One option:
        ![Display Delivered Batches](./media/return-grpo/return-batches.png)
    </div>
    </details>

**Freight cost options**:

- Partial Freight
- Full freight for first Delivery only
- Always charge full freight - total freight cost from Sales Order to Delivery, even in partial delivery.
