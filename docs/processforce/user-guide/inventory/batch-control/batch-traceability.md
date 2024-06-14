---
sidebar_position: 9
---

# Batch Traceability

ProcessForce Batch traceability function allows one to trace Item Batches throughout all their life in a company: from production (or purchase), being a part of a production process of another item, to delivery to a client. Instant access to Batch records is handy, e.g., in complaint management or recall process.

---

:::info Path
    Inventory → Item Management → Batches → Batch Traceability
:::

## Access

You can reach ProcessForce Batch Traceability by:

- Modules Menu (check the path above)
- Transaction tab on the Complaint form, right-click on a Batch.
  ![Complaint -> Batch Traceability](./media/batch-traceability/complaint-batch-traceability.webp)

Click [here](../../complaint-management/complaint.md) to find out more about the Complaint function.

- Batch Master Data form the context menu.
  ![Batch Master Data -> Batch Traceability](./media/batch-traceability/batch-master-data-batch-traceability.webp)

Click [here](../../inventory/batch-control/batch-master-data/) to find out more about Batch Master Data.

## Opening Batch Trace Visualization Form

After opening the Batch Traceability function, Batch Traceability. Selection Criteria will open.

Choose Item Code from a list:

![Selection Criteria 1](./media/batch-traceability/selection-criteria-1.webp)

Choose a Batch from a list. Only Batches of chosen Item will be displayed:

![Selection Criteria 2](./media/batch-traceability/selection-criteria-2.webp)

Click the OK button to confirm the choice. A batch Trace Visualization form will be displayed.

## Batch Trace Visualization

ProcessForce Batch Traceability function is operated from the Batch Trace Visualization form:

![Trace Visualization](./media/batch-traceability/trace-visualization.webp)

On this chart, specific Batches are represented by boxes with their details. Boxes can be moved by drag-and-drop.

You can zoom in or out of the view using a mouse roll or a scroll bar.

Data included on Batch boxes:

- Batch status icon:
  - arrow – released,
  - x – not accessible,
  - exclamation mark – locked.
- Description
- Quantity – if it is negative, it indicates the quantity that was used in a production process,
- UoM – Unit of Measurement,
- Type – indicates if an item was produced or purchased,
- Manufacturing Date – if the Item was produced (not purchased),
- Expiry Date,
- Batch – Batch name.

## Transactions

Right-click on a specific box to see all activities and transactions connected to the Batch:

![Transactions Details](./media/batch-traceability/transactions-details.webp)

Click the yellow arrow in a specific document row to get more information about it.

## Going Forward

In Batch Trace Visualization form shows what a specific Item was made of. It is looking back on every batch used in a production process to the point of a chosen Item.

You can also choose a Batch and go forward to see where the Items from a specific Batch were used. To do that, hold Control and right-click a desired Batch.

![Forward 1](./media/batch-traceability/forward-1.webp)

![Forward 2](./media/batch-traceability/forward-2.webp)
