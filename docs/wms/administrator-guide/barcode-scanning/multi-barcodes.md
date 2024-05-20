---
sidebar_position: 2
---

# Multi-barcodes

CompuTec WMS supports multi-block barcodes. This means that it is possible to scan more than one type of data with one code, e.g. scanning one code for an Item, its Batch and quantity. Just keep multi-block code consistent in the matter of used prefixes (using prefixes of one of the standards in one code).

The barcodes used as examples on this page were generated using [this tool](https://www.free-barcode-generator.net/ean-128/).

---

## Usage of multi-block barcodes scanning on different transactions

### Adding a new Item

#### Goods Receipt PO

#### Document Details, Item lists

We are receiving an Item with its Batch and quantity (and, optionally, with additional information by using Custom Configuration -> Workflow Step Settings or UDF Manager).

VIDEO

These are the minimum of the information that has to be contained in a barcode for the Item to be added to the list with one scanning (e.g. on Document Details) without additional opening its row and updating information:

Item, quantity, Batch (with related GS1 prefixes).

Example

(91)Product-A

(37)20

(10)2020-01-01-001

![Barcode](./media/barcode-01.webp)

A barcode can contain additional information from User-Defined Fields, e.g. Expiry Date:

Example
Item, quantity, Batch, Expiry Date:

(91)Product-B

(37)20

(10)2020-01-01-002

(17)200501

![Barcode](./media/barcode-02.webp)

### Finding an Item

#### Stock Transfer/Transfer Request/Pick and Pack

To correctly identify an Item and its localization, a related barcode has to contain at least the following prefixes:

- Item, quantity, Batch – this allows adding an Item to the list with one scanning without additional opening its row and updating information

    Example

    (91)Product-A

    (37)20

    (10)2020-01-01-001

    ![Barcode](./media/barcode-02.webp)
- Batch and quantity (it is also possible to scan it on the Warehouse selection form if a unique Batch is present only in one localization and this option is enabled: Custom Configuration -> Scanning: general -> Identify/open items by batch/serial scanning)

    Example

    (10)2019-12-02-002

    (37)10

    ![Barcode](./media/barcode-04.webp)

### Item issue

#### Internal (Pick Order, Goods Issue), external (Delivery)

- Item, quantity, Batch

    Example

    (91)Active-Item-01

    (10)2012-04-18-4

    (95)5555600

    ![Barcode](./media/barcode-05.webp)
- Batch and quantity (it is also possible to scan it on the Warehouse selection form if a unique Batch is present only in one localization and this option is enabled: Custom Configuration -> Scanning: general -> Identify/open items by batch/serial scanning)

    Example

    (10)2019-12-02-002

    (37)10

    ![Barcode](./media/barcode-06.webp)
