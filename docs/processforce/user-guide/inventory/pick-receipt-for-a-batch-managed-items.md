---
sidebar_position: 5
---

# Pick Receipt for Batch Managed Items

Managing batch-controlled inventory is crucial for industries requiring traceability and precision in stock management. In this guide, we will demonstrate how to perform a Pick Receipt for items managed by batches in a manufacturing environment. This ensures accurate tracking of inventory and enhances operational efficiency.

---

## Prerequisites

### Item Master Data

To proceed, ensure that the item is managed by batches.
To access Item Master Data, navigate to:

:::info Path
    Inventory → Item Master Data
:::

![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/item-master-data.webp)

### Item Details

Define a batch template (e.g., with date and counter) to automate batch number creation.
To access Item Details, navigate to:

:::info Path
    Inventory → Item Details
:::

![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/item-details.webp)

## Scenario no. 1

- Create a Pick Receipt using the context menu option on a Manufacturing Order:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/receipt-from-production.webp)

- Set the picked quantity, click "update", and choose Production Goods Receipt from the context menu. A batch number is generated automatically and can be verified in the Batch Number Transaction Report.

    ![Production Goods Receipt](./media/pick-receipt-for-a-batch-managed-items/production-goods-receipt.webp)

- Open the created Goods Receipt from Manufacturing Order under the Documents tab:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/open-goods-receipt.webp)

- View the Batch Number Transaction Report to verify the generated batch number based on the Batch Template for the picked quantity.(5 in this example):

    ![Pick Receipt for a Batch Managed Items - Report](./media/pick-receipt-for-a-batch-managed-items/open-batch-number-transactions-report.webp)

---

## Scenario no. 2

- Create a Pick Receipt using the context menu option on a Manufacturing Order:

    ![Pick Receipt for a Batch Managed Items (on a Manufacturing Order)](./media/pick-receipt-for-a-batch-managed-items/receipt-from-production.webp)

- Set the Quantity to 6. Pressing "Ctrl+Tab" in Picked Quantity field leads to Pick Receipt Batches - setup form (you can also reach the option by choosing Batch/Serial Numbers from a row's context menu – right-click on a first column):

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/ctrl-tab.webp)

- Here, we can either check generated Batch number or allocate receipt goods into different batches:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/pick-receipt-batches-quantity-divided.webp)

- Generate a Production Goods Receipt using the Pick Receipt context menu option.

    ![Pick Receipt for a Batch Managed Itemst](./media/pick-receipt-for-a-batch-managed-items/scenario2-prodn-goods-gr.webp)

- Open the created Goods Receipt from the Manufacturing Order under the Documents tab.

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/scenario2-goodsreceipt.webp)

- Select the Batch Number Transactions Report from the Goods Receipt context menu to verify the batch allocations.

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/batch-number-transactions-report.webp)

    As shown above, the batches allocated in the Pick Receipt Batches setup were successfully recorded in the Production Goods Receipt.

---
