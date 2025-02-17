---
sidebar_position: 4
---

# Configuration Batch and Quality Control Status

Managing batch and quality control status is crucial in SAP to ensure accurate tracking and compliance across various receipt documents. The configuration allows businesses to define default Batch and Quality Control (QC) statuses during the receipt process, improving efficiency and consistency. While batch statuses impact inventory and operations, QC statuses provide additional insights for informational purposes.

---

## SAP Receipt Documents

The batch and QC status settings affect the following document types:

- Goods Receipt PO
- Goods Receipt
- Inventory Counting
- A/R Invoice
- A/R Credit Memo
- Reverse Invoice

A default Batch and Quality Status can be defined for the batch during the Receipt process.

The Quality Control status provides additional details to record the quality status of the batch, and is used for information purposes.

---

:::info
    Default batch statuses are applied only when a batch is system-generated. These settings do not affect manually created batches.  
:::

![General Settings](./media/configuration-batch-and-quality-control-status/general-settings-batch.webp)

The predefined batch and quality control statuses are visible in the Batches Setup and the Batch Number Transaction Report:

![QC Status](./media/configuration-batch-and-quality-control-status/qc-status.webp)

Upon opening the Batch Number Transaction Report, both the batch and QC statuses are displayed.

The yellow arrow in the report allows navigation to the Batch Master Data form, where the Batch Status is shown in the header, and the Quality Control Status appears in the new Quality Control tab.

![Batch status](./media/configuration-batch-and-quality-control-status/batch-status.webp)

## ProcessForce Receipt Documents

The following receipt documents are supported:

- Pick Receipt

As per the above, the same rules apply.

![Batch and Quality status](./media/configuration-batch-and-quality-control-status/batch-quality-status.webp)

---
