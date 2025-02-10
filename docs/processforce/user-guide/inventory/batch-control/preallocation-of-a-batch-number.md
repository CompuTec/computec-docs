---
sidebar_position: 2
---

# Preallocation of a Batch Number

In manufacturing and inventory management, batch number preallocation ensures accurate tracking and efficient production processes. This feature allows batch numbers to be assigned either at the creation of a manufacturing order or when its status changes, improving traceability and control over production.

---

## Configuration

- This is a general setting; therefore,  meaning all batch-traced items in production will follow this rule.
- Create a batch template using the [Batch Template Definition](../../item-details/batch-serial-template-definition.md).
- Enable the Batch Number generated at the MOR checkbox and select an option: If a status-based option is selected, the batch number will be generated upon a status change or when creating a Manufacturing Order (MO) with that status.

![Configuration](./media/preallocation-of-a-batch-number/configuration.webp)

:::caution
    When the Batch Number generated at the MOR option is enabled, the Classification and MOR Number options in a Batch Template cannot be used.
:::

## Manufacturing Order

Once the batch number is allocated, it can be viewed under the Others tab.

:::note
    If you search for the batch number within the additional batch details, no record will appear, as the record has not updated the Additional Batch Details object.
:::

![Batch Number](./media/preallocation-of-a-batch-number/batch-number.webp)

## Receipt from Production

The batch number assigned to the manufacturing order will be used in the production transaction receipt.

![Pick Receipt Batches - Setup](./media/preallocation-of-a-batch-number/pick-receipt-batches-setup.webp)

When multiple receipts are performed for the same production order, the same batch number will be reused, ensuring consistency.

---
Batch number preallocation helps streamline manufacturing operations by ensuring accurate batch assignment and traceability. Proper configuration of this setting reduces errors, enhances inventory control, and improves production efficiency.
