---
sidebar_position: 4
---

# Brazil localization: Subcontracting Process

The subcontracting process with deliveries in Brazil involves specific workflows designed to comply with Brazilian localization requirements. This guide provides a detailed description of the subcontracting process, including its prerequisites, steps, and supporting documentation.

:::warning
    Note that this workflow, along with its related General Settings option, is exclusive to the Brazilian localization.
:::

n the subcontracting process, when components are sent from a company's stock to a subcontractor, an additional invoice is required for the Return document. This Return document is automatically created from the Inventory Transfer. Below is a step-by-step guide to the process.

---

## Process flow

1. Create a Manufacturing Order (MO) with Inventory Items and Subcontracting Items.
2. Create the first Inventory Transfer (or Inventory Transfer Request) for Inventory Items to Subcontractor defined Warehouse (when sending components to the Subcontractor).
3. Create a Goods Return document for the first Inventory Transfer using a Drop-Ship Warehouse (this is to create this document for Nota Fiscal).
4. Create a second Inventory Transfer (or Inventory Transfer Request) for Inventory Items that have been returned from the Subcontractor (This document is specifically for components not used by the subcontractor and excluded from the Goods Issue in the Manufacturing Order).
5. Create a Goods Receipt PO document for the second Inventory Transfer using a Drop-Ship warehouse (this is to create this document for Nota Fiscal).
6. Create a Purchase Order for the Subcontractor's Non-Inventory Items as defined in the Manufacturing Order.
7. Create an Invoice for the above Purchase Order.
8. Create Good Receipts in Manufacturing Orders. The price on the Goods Receipt document will be calculated from the cost in GI transactions (for Inventory Items) and the cost on the Invoice for Service Items.

Example:

1. **Create a Manufacturing Order (MO) with Inventory Items and Subcontracting Items**.

    Manufacturing Order for a 'Product-A' contains:

    - 2 Inventory Items (a 'Processor Chip' and a 'Memory Card') will be sent to a Subcontractor.
    - 3 Non-Inventory Items supplied by the Subcontractor.

    The Manufacturing Order Type has to be set to External, and a default Subcontractor needs to be selected in the Others tab.
2. **Create the first Inventory Transfer (or Inventory Transfer Request) for Inventory Items to Subcontractor defined Warehouse (when sending components to the Subcontractor)**.
    - In the Manufacturing Order, select 'Transfer to Subcontractor' or 'Transfer Request to Subcontractor' from the context menu.
    - This will open an Inventory Transaction document with all Inventory Items from the MO and their required quantities.
    - Select Subcontractor in the Business Partner field.
    - Select the Subcontractor Warehouse code.
    - Remove lines with Items that will not be transferred to the selected Subcontractor.
    - Press the "Add" button.
    - If any Item is batch-managed (like the 'Memory Card'), you will be prompted to select a Batch number and quantity. In this example, only the 'Memory Card' is managed by Batches.
    - Press the "Update" button to save and return to the Transfer document.
    - Press the "Add" button to save the Transfer document.
3. **Create a Good Return document for the first Inventory Transfer using Drop-Ship Warehouse (this is to create this document for Nota Fiscal)**.

    Users can generate Goods and Return documents in two ways:

    - from the Inventory Transfer document's right-click menu.
        - from the blank Goods Return document, press the 'From Inventory Transfer' button. All items will be copied to Goods Return (including transfer and MO details).
    - from the blank Goods Return document, press the 'From Inventory Transfer' button.
4. **Create a second Inventory Transfer (or Inventory Transfer Request) for Inventory Items that have been returned from the Subcontractor (a separate document for Components not used by the Subcontractor and will not be used for the Goods Issue in Manufacturing Order)**.
    - After the Subcontractor returns items (used or unused), create a second Inventory Transfer document.
    - In the Manufacturing Order, choose 'Transfer from Subcontractor' or 'Transfer Request from Subcontractor' from the context menu.
    - The Inventory Transfer document will open with a list of items that were previously sent to the Subcontractor Warehouse under the same Manufacturing Order.
    - If the item is batch-managed, you will be prompted to select the Batch number and quantity. The available Batches will be limited to those sent to the Subcontractor Warehouse from the same MO.
    - For items not used by the Subcontractor, create a separate Inventory Transfer document that specifies the quantity, batch numbers, and warehouse, if different.
5. **Create a Goods Receipt PO document for the second Inventory Transfer using Drop-Ship warehouse (this is to create this document for Nota Fiscal)**.
    - Similar to the Goods Return, create a Goods Receipt PO document.
    - This completes the process of transferring Inventory Items to and from the Subcontractor.
    - Inventory Transfer documents will have all the necessary information needed for Batch Traceability.
    - All four documents will have reference to their Manufacturing Order.
    - A list of all transfers within the MO can be reviewed in the 'Subcontracting Material Report' by right-clicking on the menu 'Subcontracting' sub-menu.
6. **Create a Purchase Order for the Subcontractor's Non-Inventory Items defined in the Manufacturing Order.**
    - This is for Components and Services provided by the Subcontractor.
    - In the Manufacturing Order, select 'Subcontracting'→'Create Purchase Order for service' or 'Create Purchase Request for service' from the context menu.
    - The Subcontractor is pre-selected from the Manufacturing Order's 'Others' tab, but can be modified if needed.
    - All Service Items and their Planned Quantities are automatically copied to the Purchase Order.
    - The Unit Price is taken from the default Price List in the Item Master Data.
    - You can review a list of all POs created in the Manufacturing Order by accessing the 'Subcontracting Procurement Report' from the 'Subcontracting' sub-menu in the right-click menu.
7. **Create an Invoice for the above Purchase Order**.
    - Open a new 'A/P Invoice' form and select the Subcontractor Code.
    - Click the 'Copy From' button and select 'Purchase Orders.'
    - In the opened window, select a PO document (one or more). Reference to Manufacturing Order will be in the "Customer/Vendor Ref No." column.
    - Costs from the 'A/P Invoice' will calculate the Goods Receipt cost for the Final Product linked to the Manufacturing Order

8. **Create Good Receipts in Manufacturing Orders**
    - Once all Purchase Orders are 'Closed' and Inventory Items are returned to the production Warehouse, create a Goods Receipt for the produced quantity.
    - The price for the Goods Receipt will be calculated based on the cost from Goods Issue transactions (for Inventory Items) and the cost from the Invoice (for Service Items).

---
In conclusion, the subcontracting process in Brazil, as detailed in this guide, provides a structured and efficient approach to managing inventory and non-inventory items, ensuring compliance with local regulations. By following the outlined steps - ranging from creating manufacturing orders to handling transfers, goods returns, purchase orders, and invoicing—businesses can maintain accurate records, streamline workflows, and ensure transparency throughout the subcontracting process. This approach not only facilitates smooth operations but also supports batch traceability and regulatory adherence, ultimately enhancing overall operational efficiency.
