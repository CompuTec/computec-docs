---
sidebar_position: 3
---

# Pick Receipt

Managing the receipt of produced items from manufacturing into stock is a critical process in inventory control. The Pick Receipt function streamlines this activity by offering multiple options for handling production receipts, ensuring accuracy and efficiency.

---

## Key Features

The Pick Receipt function is used to manage the activity of receiving produced items from manufacturing into stock and contains multiple options:

- Receipt from Production,
- CoProduct,
- Scrap,
- Create Receipt for all Items.

![Receipt](./media/pick-receipt/receipt.webp)

## Creation of Pick Receipt

Pick Receipts can be created in multiple ways, offering flexibility to accommodate different manufacturing workflows:

- **Automatic Creation**: Generated directly from a Manufacturing Order.
- **Manual Creation**: Single or multiple Manufacturing Orders can be copied into a Pick Receipt.
- **Using an Existing Pick Receipt**: Multiple Manufacturing Orders can be included in a single Pick Receipt.

When creating a Pick Receipt, key details such as Items, Planned Quantity, Destination Warehouse, and Receipt Price (based on the costing method) are copied from the Manufacturing Order. If the Distribution Rule and Project are defined at the Manufacturing Order header level, they are also copied. Otherwise, they can be manually added.

For further details on completing the Pick Receipt to Production Goods Receipt cycle, visit [Pick Receipt Bin Locations and Allocations](../inventory/pick-receipt-bin-locations-and-allocations.md).

You can check how to create Pick Receipt for and Production Goods Receipt for Items managed by Batches [here](../inventory/pick-receipt-for-a-batch-managed-items.md).

To view video content related to this topic, click [here](https://www.youtube.com/playlist?list=PLtT6kgaz5Ync9BW5iceuweMlSu9E2D7Y2).

## Multiple Manufacturing Orders on Pick Receipt Warning

Currently, a Pick Receipt can include up to five Manufacturing Orders. While it is possible to extend this number slightly by modifying CompuTec ProcessForce translations (e.g., changing Based on **Manufacturing Order** to **Based on MOR**), it is not recommended to include more than five Manufacturing Orders due to:

- **System Locking**: Large transactions may temporarily lock the production system, affecting other users.
- **Execution Time**: Processing a high volume of Manufacturing Order lines increases execution time significantly due to SAP DI API speed limitations.

### Suggestion

To optimize performance and prevent system delays, it is recommended to process Goods Receipts individually for each Manufacturing Order. This ensures efficient transaction handling and prevents system bottlenecks.

---
