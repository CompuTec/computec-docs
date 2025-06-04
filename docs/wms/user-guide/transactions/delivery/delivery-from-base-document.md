---
sidebar_position: 5
---

# Delivery from Base Document

n SAP Business One, deliveries can be efficiently created by referencing existing base documents. This not only ensures consistency but also helps in streamlining the dispatch process by pulling in relevant data automatically. This guide walks you through the detailed process of creating a delivery document based on various source documents and managing item details effectively.

---

You can add a delivery based on another document.

![Add Delivery](./media/1-delivery-operations.jpg)

---

## Steps to Create a Document

### Choosing a Base Document

You can initiate a delivery based on several types of base documents. This ensures that items, quantities, and customer details are accurately carried over without manual entry.

**a. From Pick List**

- Navigate to the Pick List screen.
- Select the relevant pick list generated from a Sales Order or Production Order.
- Once selected, the system fetches all relevant item details to proceed with delivery.

    ![Pick List](./media/2-pick-list.jpg) ![Pick List](./media/3-pick-list.jpg)

**b. From Sales Order**

- Choose one or more Sales Orders belonging to the same customer.
- This is useful when consolidating multiple orders into a single delivery.
- Ensure that only items available in inventory are confirmed for delivery.

    ![Sales Order](./media/4-sales-order.jpg) ![Order Selection](./media/5-order-selection.jpg)

**From Draft Delivery**

Select the relevant draft, review the items and quantities, and proceed to post the delivery.

    ![Draft Delivery](./media/6-draft-delivery.jpg) ![Draft Selection](./media/7-draft-selection.jpg)

**d. From A/R Reserve Invoice**

- Deliveries can also be created based on A/R Reserve Invoices.
- Select the invoice and proceed with confirming the items and quantities for dispatch.

    ![Reserve Invoice](./media/8-reserve-invoice.jpg) ![Reserve Invoice](./media/9-reserve-invoice.jpg)

### Setting the Quantity of an Already-added Item

Once a base document is selected, the system opens the Document Details screen. Here:

- You can adjust the delivery quantity if it differs from the ordered quantity.
- This step allows for partial deliveries if needed.

    ![Document Details ](./media/10-doc-details.jpg)

### Confirming the Quantity of Batch Managed Item

If the item is batch-managed:

- Navigate to the line item and select the batch numbers.
- Confirm the batch quantity to be delivered from the warehouse bin.

    ![Doc Details](./media/11-doc-details.jpg) ![Line Details](./media/12-line-details.jpg) ![From Bin](./media/13-from-bin.jpg) ![Batches](./media/14-batches.jpg) ![Quantity](./media/15-quantity.jpg) ![Line Details](./media/16-line-details.jpg) ![Doc Details](./media/17-doc-det.jpg)

### Confirming the Quantity of the Item Managed by Serial Numbers

For items managed by serial numbers:

- You need to select individual serial numbers from the available stock.
- This ensures traceability and control over serialized inventory.

    ![Doc Details](./media/18-doc-det.jpg) ![Line Details](./media/19-line-details.jpg) ![From Bin](./media/20-from-bin.jpg) ![Serials](./media/21-serials.jpg) ![Line Details](./media/22-line-details.jpg)

### Adding an Item that is not Listed

In certain cases, you may want to add an item not included in the base document:

    ![Doc Details](./media/23-doc-details.jpg) ![New Item](./media/24-new-item.jpg) ![Doc Details](./media/25-doc-det.jpg) ![Line Details](./media/26-line-details.jpg) ![From Bin](./media/27-from-bin.jpg) ![Batches](./media/28-batches.jpg) ![Quantity](./media/29-quantity.jpg) ![Doc Details](./media/30-doc-det.jpg)

### Adding a Storage Unit

The items and their quantities are successfully added to the document:

    ![Doc Details](./media/31-doc-details.jpg) ![List of SUs](./media/32-list-of-su.jpg) ![Document Details](./media/33-docdet-green.jpg)

### Remarks Screen

The Remarks window will appear. Filling in a reference number field and a remarks field is optional.

    ![Remarks](./media/34-remarks.jpg)

### Delivery is Successfully Saved

Once all items and quantities are verified, save the delivery document.

The system validates the information and confirms a successful save.

    ![Delivery Saved](./media/35-saved.jpg)

### Delivery is Posted in SAP Business One

    ![SAP Delivery](./media/sap-delivery-01.png)

---
