---
sidebar_position: 2
---

# Workflow Step Settings

There are seven transactions to choose from. Choose one from the drop-down list and click Load.

1. Delivery.

    Three options are available:
      - Bin selection → Batch selection
      - Batch selection → Bin selection
      - Batch with Bin location

2. Goods Receipt PO

  ![GRPO](./media/workflow-step-settings/grpo.png)

  New SU workflow – two workflows are available for this transaction.
  Bin selection → SU creation (choosing localization first, then SU creation): SU creation will be then possible only on this on localization.
  
  It is possible to add a custom field that will be displayed for Items managed by Batches or Serial Numbers:

    ![GRPO](./media/workflow-step-settings/grpo-11.png)
    ![GRPO](./media/workflow-step-settings/grpo-12.png)

3. Goods Receipt

  For Goods Receipt transaction, it is possible to add a custom field that will be displayed for Items managed by Batches or Serial Numbers. The fields can be set as required, and it will be impossible to go to the next step without filling them out.

    ![GRPO](./media/workflow-step-settings/grpo-14.png) ![GRPO](./media/workflow-step-settings/grpo-15.png)

4. Inventory Transfer
    There are three possible workflows for this transaction:
    1. Bin selection → Batch selection
    2. Batch selection → Bin selection
    3. Batch with Bin location (Batch number for a specific location)

    ![Stock Transfer](./media/workflow-step-settings/stock-transfer.png)
    
    **Examples**:

      1. Bin selection → Batch selection
  
        ![Bin Batch](./media/workflow-step-settings/bin-batch.png)

      2. Batch selection → Bin selection
  
        ![Batch Bin](./media/workflow-step-settings/batch-bin.png)

5.Goods Issue

    There are three possible workflows for this transaction:
    1. Bin selection → Batch selection
    2. Batch selection → Bin selection
    3. Batch with Bin location (Batch number in a specific Bin location)
  
    ![Goods Issue](./media/workflow-step-settings/goods-issue.png)

6.PF Pick Order

 There are three possible workflows for this transaction:
      1. Bin selection → Batch selection
      2. Batch selection → Bin selection
      3. Batch with Bin location (Batch number in a specific Bin location)

      ![PFPO](./media/workflow-step-settings/pfpo.png)

- PF Pick Receipt
For Goods Receipt transactions, it is possible to add a custom field that will be displayed for Items managed by Batches or Serial Numbers. The fields can be set as required, and it will not be possible to go to the next step without filling them out.
