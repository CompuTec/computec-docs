---
sidebar_position: 2
---

# Multi-barcodes

CompuTec WMS supports multi-block barcodes, allowing multiple types of data to be scanned with a single code. For example, one barcode can capture information such as an Item, its Batch, and Quantity. To ensure proper functionality, it is important to maintain consistency in the use of prefixes within a single code, following the same standard for all prefixes.

The barcodes used as examples on this page were generated using [this tool](https://www.free-barcode-generator.net/ean-128/).

---

## Usage of Multi-block Barcodes Scanning on Different Transactions

### **Adding a new Item**: Goods Receipt PO

We are receiving an Item with its Batch and quantity (and, optionally, with additional information by using [Custom Configuration](../custom-configuration/overview.md) -> Workflow Step Settings or [UDF Manager](../custom-configuration/custom-configuration-functions/manager/udf-manager.md)).

To learn more, watch the video: [Manually installing an Object in SAP Business One](https://www.youtube.com/watch?v=-1PYy9W3P3M)

These are the minimum of the information that has to be contained in a barcode for the Item to be added to the list with one scanning (e.g. on Document Details) without additional opening its row and updating information:

**Example 1: Item, quantity, Batch (with related GS1 prefixes)**

- (91)Product-A
- (37)20
- (10)2020-01-01-001

![Barcode](./media/barcode-01.webp)

A barcode can contain additional information from User-Defined Fields, e.g. Expiry Date:

**Example 2: Item, Quantity, Batch, Expiry Date:**

- (91)Product-B
- (37)20
- (10)2020-01-01-002
- (17)200501

![Barcode](./media/barcode-02.webp)

### **Finding an Item**: Stock Transfer/Transfer Request/Pick and Pack

To correctly identify an Item and its localization, a related barcode has to contain at least the following prefixes:

**Example 1: Item, Quantity, Batch**

This allows adding an Item to the list with one scanning without additional opening its row and updating information

- (91)Product-A
- (37)20
- (10)2020-01-01-001

![Barcode](./media/barcode-02.webp)

**Example 2: Batch and Quantity**

It is also possible to scan it on the Warehouse selection form if a unique Batch is present only in one localization and this option is enabled: Custom Configuration -> Scanning: general -> Identify/open items by batch/serial scanning)

- (10)2019-12-02-002
- (37)10

![Barcode](./media/barcode-04.webp)

### **Item issue**: Pick Order, Goods Issue, Delivery

**Example 1: Item, Quantity, Batch**

- (91)Active-Item-01
- (10)2012-04-18-4
- (95)5555600

![Barcode](./media/barcode-05.webp)

**Example 2: Batch and Quantity**

You can also scan the barcode on the Warehouse selection form if the unique Batch is available in only one location and the following option is enabled: (Custom Configuration -> Scanning: General -> Identify/Open Items by Batch/Serial Scanning).

- (10)2019-12-02-002
- (37)10

![Barcode](./media/barcode-06.webp)
