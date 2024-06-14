---
sidebar_position: 5
---

# Pick Receipt for a Batch Managed Items

In this example we will show how to perform Pick Receipt for Items Managed by Batches.

---

## Prerequisites

### Item Master Data

The item is managed by Batches.

<details>
    <summary>Check how to set it up</summary>
    <div>
        <p>Path: Inventory > Item Master Data</p>
        ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/item-master-data.png)
    </div>
</details>

### Item Details

For this example we will set up a Batch Template that contains date and counter.

<details>
    <summary>Check how to set it up</summary>
    <div>
        <p>Path: Inventory > Item Details</p>
        ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/item-details.png)
    </div>
</details>

## Scenario no. 1

- Create a Pick Receipt by using context menu option on a Manufacturing Order:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/receipt-from-production.png)

- Set Picked Quantity, click update and choose Production Goods Receipt from a context menu. Batch number is generated automatically and it is possible to check it in Batch Number Transaction Report (check the following steps):

    ![Production Goods Receipt](./media/pick-receipt-for-a-batch-managed-items/production-goods-receipt.png)

- Open the created Goods Receipt from Manufacturing Order, Documents tab:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/open-goods-receipt.png)

- On Batch Number Transaction Report (opened from Goods Receipt context menu) you can see that a batch number has been generated (based on the Batch Template) for the picked quantity (5 in this example):

    ![Pick Receipt for a Batch Managed Items - Report](./media/pick-receipt-for-a-batch-managed-items/open-batch-number-transactions-report.png)

## Scenario no. 2

- Create a Pick Receipt by using context menu option on a Manufacturing Order:

    ![Pick Receipt for a Batch Managed Items (on a Manufacturing Order)](./media/pick-receipt-for-a-batch-managed-items/receipt-from-production-01.png)

- Quantity is set up to 6. Pressing Ctrl+Tab in Picked Quantity field leads to Pick Receipt Batches - setup form (you can also reach the option by choosing Batch/Serial Numbers from a row's context menu – right-click on a first column):

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/ctrl-tab.png)

- Here, we can check generated Batch number or divide receipt goods into different batches:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/pick-receipt-batches-quantity-divided.png)

- Create Production Goods Receipt by using Pick Receipt context menu option:

    ![Pick Receipt for a Batch Managed Itemst](./media/pick-receipt-for-a-batch-managed-items/scenario2-productiongoodsreceipt.png)

- Open created Goods Receipt from Manufacturing Order, Documents tab:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/scenario2-goodsreceipt.png)

- Choose Batch Number Transactions Report from Goods Receipt context menu:

    ![Pick Receipt for a Batch Managed Items](./media/pick-receipt-for-a-batch-managed-items/batch-number-transactions-report-two-batches.png)

    As we can see, the Batches created on Pick Receipt Batches - setup were created for Production Goods Receipt.
