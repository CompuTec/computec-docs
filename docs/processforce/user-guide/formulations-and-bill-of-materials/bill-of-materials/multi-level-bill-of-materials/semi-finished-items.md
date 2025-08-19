---
sidebar_position: 2
---

# Semi-finished Items

A semi-finished item is a component within a Bill of Materials (BOM) that has its own BOM but is also part of a finished product's BOM. These items require separate Manufacturing Orders (MOs) when the final product is produced. However, they can also be manufactured independently and stored as inventory for future use.

In the example below:

- Product 1.2 is a semi-finished item with its own BOM, consisting of Product 1.2.1 and Product 1.2.2.
- Since it is part of Product 1's BOM, an additional MO is required for Product 1.2 when producing the final product.
- Alternatively, Product 1.2 can be manufactured separately and stored as an independent item.

![Multi-level](./media/multi-level.webp)

Semi-finished item Manufacturing Orders (linked to final product MOs) can be efficiently managed using the[Semi-finished Product Scheduling Board](../../../scheduling/scheduling-board.md) in CompuTec ProcessForce.

---
