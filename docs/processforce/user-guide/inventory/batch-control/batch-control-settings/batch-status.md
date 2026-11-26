---
sidebar_position: 3
---

# Batch Status

Batch records are displayed in different colors, so you can see the condition of a batch at a glance. The color shows whether the batch has expired, is close to its expiry date, or is locked or not accessible. In **CompuTec ProcessForce**, you see these colors in the **Pick Order** window.

:::note[Info]

For information about how CompuTec ProcessForce derives the status of a batch from QC tests and QC test pools, read [**Batch Status Resolution**](./batch-status-resolution.md).

:::

## Batch record colors

In the **Pick Order** window, the color of a batch record depends on the expiry date and the status of the batch:

| Color | Meaning |
| --- | --- |
| Red | The expiry date has passed. |
| Blue | The warning expiry date has passed. |
| Black | Neither the expiry date nor the warning expiry date has been reached. |
| Grey | The batch status is **Locked** or **Not Accessible**. You can see the batch, but you cannot pick it. |

CompuTec ProcessForce displays grey batch records only when the configuration is set to **DISPLAY**. For more information, read [**Manual and Backflush Issue Type Configuration**](./manual-and-backflush-issue-type-configuration.md). 

![The Available Batches list in the Pick Order window with batch records in red, blue, black, and grey](./media/batch-status/available-batches.webp)

## SAP Business One documents

The color rules for red, blue, and black batch records also apply in the following SAP Business One documents:

- Delivery
- Goods Return
- Inventory Transfer
- Goods Issue

The rule for grey batch records does not apply in these documents.
