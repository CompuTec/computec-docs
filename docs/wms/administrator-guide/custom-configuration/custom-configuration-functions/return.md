---
sidebar_position: 13
---

# Return

**After picking an Item, auto return to** – defines to which form the application leads after confirming picking quantity for a document line; current Item details form and current document details from option are available.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Main Document Workflow**
        ![Main Document Workflow](./media/return/main-document-workflow-01.PNG)
    **Item Details Workflow**
        ![Item Details Workflow](./media/return/item-details-workflow-01.PNG)
    </div>
    </details>

**Default Bin Location for Return document items** – if the option is checked, then the Bin Location list is not displayed during a line details setting, and a default Bin Location is chosen. If the option is unchecked, choosing a Bin Location from a list is possible. Three options are available for default: Default Bin for Item, Warehouse receiving Bin Location, and Source Bin from Delivery document.

**Enable saving to drafts** – allows saving documents as document drafts.
    <details>
    <summary>Click here to expand</summary>
    <div>
    By default, the option is switched off, and the Remarks window looks like this:
        ![Draft](./media/return/draft-02.png)
    When the option is switched on, the Remarks window looks like this:
        ![Draft](./media/return/draft-03.png)
    </div>
    </details>

**Enable saving documents when drafts ON** – allows deciding on the Remarks form whether to save a transaction as a document or a document draft.
    <details>
    <summary>Click here to expand</summary>
    <div>
    When the option is checked, two options are available in the Remarks field:
        ![Draft](./media/return/draft-01.png)
    </div>
    </details>
**Scan DocNum on Delivery select window** – allows scanning by document number (by content, if the checkbox is unchecked)

**Force manual quantity confirmation** – after scanning required prefixes (Warehouse, Vendor, Item, Quantity, Batch number), the application forces manual confirmation of quantity (instead of confirmation after scanning a barcode with quantity)

**Enable adding Items from different Warehouses** – self-explanatory.

**Return Items only from the base document** – unchecking this option allows you to create a Return document by completing a list of any Items (not only based on a Delivery document).

**Return Items only from the base document for drafts** – works the same way as the option above but for document drafts.

**New Return: Customer-Warehouse workflow** – after checking this option on New Return, first you have to choose Customer, which leads to Warehouse form (instead of default Warehouse-Customer workflow). With this setting, scanning a Serial number or a Batch number on the Warehouse selection window will use the "Fast Scan," i.e., select warehouse, item, and serial/batch with the quantity provided in the scanned barcode and add it to the document.

**Show Cost Dimensions** – checking this checkbox adds a button (next to the Back button) on the Quantity form that leads to the Cost Dimensions form.

**Display Delivered Batches** – display all Batches or only Batches of a related Business Partner.
    <details>
    <summary>Click here to expand</summary>
    <div>
    Reflects the related SAP Business One option:
    ![Return Batches](./media/return/return-batches-01.png)
    </div>
    </details>
