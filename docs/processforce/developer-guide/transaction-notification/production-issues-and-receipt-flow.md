---
sidebar_position: 1
---

# Production Issue and Receipt Flow

In manufacturing, accurate tracking of inventory movements is essential for smooth and efficient production. In **SAP Business One**, **Transaction Notification** is used to enforce business rules during key processes such as **Production Goods Issue** and **Production Goods Receipt**.

This document explains how these processes work and how transaction notifications support control and validation during production operations.

## Transaction Notification

To use **Transaction Notification** effectively for **Production Goods Issue** and **Production Goods Receipt**, you first need a clear understanding of how these processes work:

### Production Goods Issue

    - Adding **Goods Issue** with field ``U_FromProduction`` set to ``Y``
    - Creating additional **Journal Entries** if it is needed
    - Updating **Manufacturing Order**
    - Updating **Pick Order** document

### Production Goods Receipt

    - Creating **Operation Time Recording** for **Resource Time** that is set to ``Backflush``
    - **Goods Issue** for **Backflush Items**
    - Creating **Additional Journal Entry**
    - **Goods Receipt** for **Scraps** and **Co-products**
    - **Goods Receipt** for **Final Goods**
    - **Manufacturing Order** document update
    - **Pick Receipt** document update
    - Create **Additional Batch Details Object**

### Goods Issue Adjustment (Issue Method: Manual)

    - Creating **Goods Issue** adjustment: new **Goods Receipt** document with field ``U_FromPoduction`` set to ``Y``
    - Creating **Additional Journal Entry** (**Settlement cost by type**) adjustment if it's needed: new **Journal Entry** document
    - Updating **Manufacturing Order**

### Goods Receipt Adjustment (Issue Method: Manual)

    - Creating **Goods Receipt** adjustment: new **Goods Issue** document with field ``U_FromProduction`` set to ``Y``
    - Creating **Supplementary Journal Entry** if it is needed
    - Creating **Additional Journal Entry** (**Settlement cost by type**) adjustment if it is needed: new **Journal Entry** document
    - Updating **Manufacturing Order**

### Goods Receipt (finished product)

    - Creating **Goods Receipt** adjustment (Finished product and **Issue Method**: ``Backflush``): new **Goods Issue** document with field ``U_FromProduction`` set to ``Y``
    - Creating **Additional Journal Entry** (**Settlement cost by type**) adjustment if it is needed: new **Journal Entry** document
    - Creating **Goods Receipt** adjustment (**Issue Method**: ``Backflush``): new **Goods Issue** document with field ``U_FromProduction`` set to ``Y``
    - Creating **Supplementary Journal Entry** if it is needed
    - Creating **Additional Journal Entry** (**Settlement cost by type**) adjustment if it is needed: new **Journal Entry** document
    - Updating **Manufacturing Order**

Every action fire ``SBO_SP_TransactionNotification``, so look out for your **Goods Issue** and **Receipt Validation**.

:::info[note]
    To manage **Production Goods Receipt** or **Issue** in **Transaction Notification**, use the`` ManufacturingOrder`` or ``PickReceipt`` object code.
:::
