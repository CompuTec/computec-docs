---
sidebar_position: 4
---

# Brazil localization: Subcontracting Process

Here, you can find a description of the subcontracting process with deliveries used in Brazil.

:::warning
    This workflow (along with the related General Settings option) can only be used in the Brazilian localization.
:::

If a Component has been sent from company stock to the Subcontractor, an additional invoice needs to be created for the Return document. This Return document is created automatically from Inventory Transfer.

---

Process flow:

1. Create a Manufacturing Order (MO) with Inventory Items and Subcontracting Items.
2. Create the first Inventory Transfer (or Inventory Transfer Request) for Inventory Items to Subcontractor defined Warehouse (when sending components to the Subcontractor).
3. Create a Goods Return document for the first Inventory Transfer using a Drop-Ship Warehouse (this is to create this document for Nota Fiscal).
4. Create a second Inventory Transfer (or Inventory Transfer Request) for Inventory Items that have been returned from the Subcontractor (a separate document for Components not used by the Subcontractor and will not be used for the Goods Issue in Manufacturing Order).
5. Create a Goods Receipt PO document for the second Inventory Transfer using a Drop-Ship warehouse (this is to create this document for Nota Fiscal).
6. Create a Purchase Order for the Subcontractor's Non-Inventory Items defined in the Manufacturing Order.
7. Create an Invoice for the above Purchase Order.
8. Create Good Receipts in Manufacturing Orders. The price on the Goods Receipt document will be calculated from the cost in GI transactions (for Inventory Items) and the cost on the Invoice for Service Items.

Example:

1. Create a Manufacturing Order (MO) with Inventory Items and Subcontracting Items.

    Manufacturing Order for a 'Product-A' contains:

    - 2 Inventory Items (a 'Processor Chip' and a 'Memory Card') will be sent to a Subcontractor.
    - 3 Non-Inventory Items supplied by the Subcontractor.

    The Manufacturing Order Type has to be set to External, and a default Subcontractor needs to be selected in the Others tab.
2. Create the first Inventory Transfer (or Inventory Transfer Request) for Inventory Items to Subcontractor defined Warehouse (when sending components to the Subcontractor).
    - In Manufacturing Order, select 'Transfer to Subcontractor' or 'Transfer Request to Subcontractor' from the context menu.
    - The Inventory Transaction document will open with a list of all Inventory Items visible in the MO and with the total required quantity.
    - Select Subcontractor in the Business Partner field.
    - Select the Subcontractor Warehouse code.
    - Remove lines with Items that will not be transferred to the selected Subcontractor.
    - Press the Add button.
    - If Batches manage an Item, a user will be prompted to select a Batch number and quantity. In this example, only the 'Memory Card' is managed by Batches.
    - Press the Update button to save and return to the Transfer document.
    - Press the Add button to save the Transfer document.
3. Create a Good Return document for the first Inventory Transfer using Drop-Ship Warehouse (this is to create this document for Nota Fiscal).

    Users can generate Goods and Return documents in 2 ways:

    - from the Inventory Transfer document from right-click menu.
        - from the blank Goods Return document, press the 'From Inventory Transfer' button. All items will be copied to Goods Return (including transfer and MO details).
    - from the blank Goods Return document, press the 'From Inventory Transfer' button.
4. Create a second Inventory Transfer (or Inventory Transfer Request) for Inventory Items that have been returned from the Subcontractor (a separate document for Components not used by the Subcontractor and will not be used for the Goods Issue in Manufacturing Order).
    - When the Subcontractor returns Items (used or unused), a user will create a second Inventory Transfer document.
    - In MO from, select Transfer from Subcontractor or Transfer Request from Subcontractor in the context menu.
    - In the opened Inventory Transfer document, there will be a list of items previously transferred to the Subcontractor Warehouse from the same Manufacturing Order.
    - A user will be asked to select the Batch number and quantity for Items managed by Batches. The list of available Batches will be narrowed down to only those previously sent to the Subcontractor Warehouse from the same MO.
    - If some of the Items have not been used by the Subcontractor, a user will create a separate Inventory Transfer document with quantity, batch numbers, and warehouse if different.
5. Create a Goods Receipt PO document for the second Inventory Transfer using Drop-Ship warehouse (this is to create this document for Nota Fiscal).
    - Creating Goods Receipt PO is similar to the previously created Goods Return document.
    - That concludes the Flow Process of Inventory Items transferred to the Subcontractor and back.
    - Inventory Transfer documents will have all the necessary information needed for Batch Traceability.
    - All four documents will have reference to their Manufacturing Order.
    - A list of all transfers within the MO can be reviewed in the 'Subcontracting Material Report' by right-clicking on the menu 'Subcontracting' sub-menu.
6. Create a Purchase Order for the Subcontractor's Non-Inventory Items defined in the Manufacturing Order.
    - This is for Components and Services provided by the Subcontractor.
    - In Manufacturing Order, select 'Subcontracting'→'Create Purchase Order for service' or 'Create Purchase Request for service' from the context menu.
    - Subcontractor selected in the Others tab is set by default but can be changed if necessary.
    - All Service Items with Planned Quantity are copied to the Purchase Order.
    - The Unit Price is taken from the default Price List selected in Item Master Data.
    - A list of all POs created in MO can be reviewed in 'Subcontracting Procurement Report' from the right-click menu 'Subcontracting' sub-menu.
7. Create an Invoice for the above Purchase Order.
    - Open a new 'A/P Invoice' form and select Subcontractor Code.
    - Click the 'Copy From' button and select 'Purchase Orders.'
    - In the opened window, select a PO document (one or more). Reference to Manufacturing Order will be in the "Customer/Vendor Ref No." column.
    - Costs defined in 'A/P Invoice' will be used to calculate the GR cost of the Final Product linked to the Manufacturing Order number visible on the right side.

8. Create Good Receipts in Manufacturing Orders. The price on the Goods Receipt document will be calculated from the cost in GI transactions (for Inventory Items) and the cost on the Invoice for Service Items.

    When all created Purchase Orders are 'Closed' and the required Inventory Items have been transferred back to the production Warehouse, a user can create a Goods Receipt for produced quantity.
