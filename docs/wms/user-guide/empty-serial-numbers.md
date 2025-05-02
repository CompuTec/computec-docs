---
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Empty Serial Numbers

Here, you can find a description of managing Empty Serial Numbers Items through CompuTec WMS.

---

## Item Master Data Configuration

![Item Master Data](./media/item-master-data.webp)

## Transactions Supported in CompuTec WMS

- GRPO
- Delivery
- Pick and Pack
- Stock Transfer (Transfer Request)
- Stock Counting (planned to be supported).

### GRPO from Purchase Order

![Order Selection](./media/GRPO-1.webp)

![Document Details](./media/GRPO-2.webp)

![Storage Info](./media/GRPO-3.webp)

![Automatic Creation](./media/GRPO-4.webp)

![Storage Info](./media/GRPO-5.webp)

![Document Details](./media/GRPO-6.webp)

![Remarks](./media/GRPO-7.webp)

#### Result in SAP Business One

![Goods Receipt PO](./media/GRPO-SAP.webp)

![Serial Number](./media/GRPO-SAP-2.webp)

### Stock Transfer / From Transfer Request

![Source Warehouse](./media/stock-transfer-1.webp)

![From Bin](./media/stock-transfer-2.webp)

![Serials](./media/stock-transfer-3.webp)

![Serials](./media/stock-transfer-4.webp)

![Empty Serials Wizard](./media/stock-transfer-5.webp)

![Serials](./media/stock-transfer-6.webp)

![Document Details](./media/stock-transfer-7.webp)

![Destination Warehouse](./media/stock-transfer-8.webp)

#### All to one Bin Location

![To Bin](./media/stock-transfer-to-one-bin-1.webp)

![Put Away Items](./media/stock-transfer-to-one-bin-2.webp)

#### To Different Bin Locations

![Destination Warehouse](./media/stock-transfer-to-different-bins-1.webp)

![To Bin](./media/stock-transfer-to-different-bins-2.webp)

![Put Away Items](./media/stock-transfer-to-different-bins-3.webp)

![Serials](./media/stock-transfer-to-different-bins-4.webp)

![To Bin](./media/stock-transfer-to-different-bins-5.webp)

![Put Away Items](./media/stock-transfer-to-different-bins-6.webp)

![Serials](./media/stock-transfer-to-different-bins-7.webp)

![To Bin](./media/stock-transfer-to-different-bins-8.webp)

![Put Away Items](./media/stock-transfer-to-different-bins-9.webp)

![Remarks](./media/stock-transfer-to-different-bins-10.webp)

### Delivery from Sales Order

![Order Selection](./media/delivery-from-sales-order-1.webp)

![Order Selection](./media/delivery-from-sales-order-2.webp)

![Storage Info](./media/delivery-from-sales-order-3.webp)

![From Bin](./media/delivery-from-sales-order-4.webp)

![Serials](./media/delivery-from-sales-order-5.webp)

<!-- ![Empty Serials Wizard](./media/delivery-from-sales-order-6.webp) -->

#### Empty

<!-- ![Storage Info](./media/delivery-from-sales-order-empty.webp) -->

#### Named

<!-- ![Empty Serials Wizard](./media/delivery-from-sales-order-named-1.webp) -->

<!-- ![Serials](./media/delivery-from-sales-order-named-2.webp) -->

<!-- ![Serials](./media/delivery-from-sales-order-named-3.webp) -->

<!-- ![Empty Serials Wizard](./media.delivery-from-sales-order-named-4.webp) -->

<!-- ![Serials](./media/delivery-from-sales-order-named-5.webp) -->

![Storage Info](./media/delivery-from-sales-order-named-6.webp)

![Document details](./media/delivery-from-sales-order-named-7.webp)

![Remarks](./media/delivery-from-sales-order-named-8.webp)

#### In SAP Business One

![Serial Number](./media/delivery-from-sales-order-named-9.webp)

## Pick and Pack

(In this transaction, it is not possible to choose Serial Numbers; it is only possible to choose it.)

Warehouses without Bin Locations are supported.

Preallocation when choosing the following option:

![Option](./media/option.webp)

Or Bin Locations when this option is turned on:

![Bin Location](./media/bin-location-1.webp)

![Bin Location](./media/bin-location-2.webp)

![Pick Lists](./media/bin-location-3.webp)

- With preallocation:

    ![Storage Info](./media/with-preallocation-1.webp)

    ![Quantity](./media/with-preallocation-2.webp)

    ![Document Details](./media/with-preallocation-3.webp)
- Without preallocation

    ![Storage Info](./media/without-preallocation-1.webp)

    ![From Bin](./media/without-preallocation-2.webp)

Let's choose, e.g., one named (empty Serial Numbers, and the one on the list must always be chosen separately, meaning you cannot pick one already called and one empty and proceed).

![Serials](./media/without-preallocation-3.webp)

Let's choose the next three from the same location (different Bins):

![Storage Info](./media/without-preallocation-4.webp)

![Serials](./media/without-preallocation-5.webp)

![Empty Serials Wizard](./media/without-preallocation-6.webp)

![Serials](./media/without-preallocation-7.webp)

![Storage Info](./media/without-preallocation-8.webp)

![Empty Serials Wizard](./media/without-preallocation-9.webp)

![Storage Info](./media/without-preallocation-10.webp)

![Document Details](./media/without-preallocation-11.webp)

In the next step, it is possible to go to Delivery from the Pick List and create a Delivery document:

![Document](./media/delivery-from-pick-list-1.webp)

![Document Details](./media/delivery-from-pick-list-2.webp)

![Storage Info](./media/delivery-from-pick-list-3.webp)

![Empty Serials Wizard](./media/delivery-from-pick-list-4.webp)

![Storage Info](./media/delivery-from-pick-list-5.webp)

![Serials](./media/delivery-from-pick-list-6.webp)

![Storage Info](./media/delivery-from-pick-list-7.webp)

![Serials](./media/delivery-from-pick-list-8.webp)

![Empty Serials Wizard](./media/delivery-from-pick-list-9.webp)

![Serials](./media/delivery-from-pick-list-10.webp)

![Storage Info](./media/delivery-from-pick-list-11.webp)

![Document Details](./media/delivery-from-pick-list-12.webp)

![Remarks](./media/delivery-from-pick-list-13.webp)

The result Delivery in SAP Business One:

![Serial Number Transaction Report](./media/result-delivery-in-sapb1.webp)

---
