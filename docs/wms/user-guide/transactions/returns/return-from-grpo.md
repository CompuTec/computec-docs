---
sidebar_position: 2
---

# Return from GRPO

Goods Return Document can be generated from Goods Receipt PO document posted in SAP Business One System or CompuTec WMS, and user can generate new Goods Return without base document. (An example Goods Receipt PO Document in this guide is posted below).

Custom Configuration for Return GRPO: `14) Return GRPO`

## Opening Return From Delivery in the application

To start the creation of the SAP Business One Goods Return Document, press the Return from PO in the Returns sub-menu or other menu container.

![Return](./media/Return.webp)

![Return from PO](./media/ReturnFromPO3.webp)

## Optional: Base Document Selection

The user can use the already posted Goods Receipt PO as a base document or create Goods Return from scratch. To copy positions from existing documents, the User must select "GRPO Based Return"; to create a blank Goods Return Document, the user must choose the "New Goods Return" button.

![Goods Return Options](./media/Return-GRPOBas3.webp)

Choose **the Goods Receipt PO** document from the list of already posted ones. After selection, the application copies the indexes from the base document and moves to the items list.

![Goods Receipt PO Selection](./media/GRPO-Selection3.webp)

## Workflows in CompuTec WMS Items list

### Overview

Goods Return Items list example.

![Description](./media/Description3.webp)

## Use Case 1: Returning to Vendor all items from the Good Receipt PO

All items from selected GRPO documents are loaded after document selection in CompuTec WMS:

![Document Details](./media/DocumentDetails-allgray3.webp)

After choosing Flour (batch-managed Item), the user is moved to the storage info screen. Batch numbers are imported from the Good Receipt PO Document.

On the next screen, users must choose Batch, which will be returned and confirm the quantity.

![Storage Info](./media/StorageInfo3.webp)

![Edit Quantity](./media/EditQuantity3.webp)

![Green](./media/Return_DocDet_onegreen3.webp)

When we select Item managed by Serial Numbers, the Storage Info screen opens, and we see Serial Numbers imported from the Good Receipt PO Document.

Users must choose Serial Numbers, which will be returned, and confirm quantity.

![Storage Info](./media/Return_StorInfo_Serial3.webp)

![Edit Quantity](./media/Ret_Quan_Ser3.webp)

Now we see on the list that one of 3 Items managed by Serial Numbers is selected. We have to repeat the same step with the other items Serial Numbers manages.

![Storage Info](./media/SerialItems3.webp)

You can also add an Item not listed on the Document Details screen. To do that, click the '+' button that leads you to the Item Selection screen.

![DocDet_TwoGreen.webp](./media/DocDet_TwoGreen3.webp)

Select a Warehouse.

![Warehouse](./media/Warehouse3.webp)

The Item list with quantities appropriate for that Warehouse will appear.

![New Item](./media/NewItem3.webp)

After selecting an Item, its Batch/Serial, and quantity, the new Item is added to the list and can be returned.

![Document details](./media/DocDet_added3.webp)

After selecting an Item managed by none, only the quantity screen appears, where we must enter all quantities. Now we see that all Items and their quantities are selected, and we can click the right arrow to go to remarks.

![Document Details](./media/DocDet_allgreen3.webp)

Here, we can enter Remarks, change the document series, or set UDFs. Then, we press the Save icon to save this Return from GRPO.

![Remarks](./media/Remarks3.webp)

## Use Case 2: Returning to Vendor only one Item from Goods Receipt PO

In this scenario, the user will return all Items copied from the Good Receipt PO shown below.

All Items from selected GRPO documents are loaded after document selection in CompuTec WMS.

![Document Details](./media/DocumentDetails-allgray3.webp)

After choosing Flour (batch-managed Item), the user is moved to the Storage Info window. Batch numbers are imported from the Good Receipt PO Document.

On the following screen, the user has to choose Batch, which will be returned, and confirm the quantity.

![Storage Info](./media/StorageInfo3.webp)

![Edit Quantity](./media/EditQuantity3.webp)

After adding a selected Batch and quantity, the first row became green. You can also add an Item not listed on the document.

![Document Details](./media/DocDet_onegreen3.webp)

![Warehouse](./media/Warehouse3.webp)

The Item list with quantities from this Warehouse will appear.

![New Item](./media/NewItem3.webp)

After selecting the Item, its batch/Serial Numbers, and quantity, the new Item is added to the list and can be returned.

![DocDet_next.webp](./media/DocDet_next3.webp)

Only the first Item is selected with the whole quantity, and one is added additionally, so only these two Items are marked green on the list, and only these quantities will be returned.

![Remarks](./media/Remarks3.webp)

## Use Case 3: Returning Items without Goods Receipt PO as a source document

It is possible to return Items without a base GRPO document. To do this, choose the New Goods Return option from the menu.

![Goods Return Operations](./media/NewGoodsReturn3.webp)

Next, choose the Warehouse from which the return will be performed.

![Warehouse](./media/Warehouses3.webp)

Next, choose the Supplier to whom the Items will be returned.

![Supplier](./media/SupplierSelection3.webp)

This leads to the Document details form. Click '+' to add Items.

![Document Details](./media/DocumentDetails_Empty3.webp)

The item selection window is then opened. On each row, there is a quantity of a specific Item in the Warehouse and a unit of Measurement.

![New Item](./media/AddNewItem3.webp)

Choose the Item you want to return. Quantity and Batch / Serial Numbers form opens then.

Non-managed Item:

![Quantity](./media/Quantity_None3.webp)

Batch-managed Item:

![Storage Info](./media/Quantity_Batch3.webp)

Serial Numbers managed Item:

![Storage Info](./media/Quantity_Serial3.webp)

This leads to Document details. Items and quantities. Click the right arrow to move to the Remarks window.

![Document Details](./media/DocDet3.webp)

You can put remarks, add UDFs, move to the previous screen, or save the document.

![Remarks](./media/Remarks3.webp)
