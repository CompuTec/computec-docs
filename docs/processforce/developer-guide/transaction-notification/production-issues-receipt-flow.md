---
sidebar_position: 1
---

# Production Issue and Receipt Flow

In manufacturing, tracking and managing inventory movements accurately is crucial for efficient production processes. SAP Business One leverages Transaction Notification to ensure that every Production Goods Issue and Production Goods Receipt follows predefined business rules. This document outlines the key processes involved and how transaction notifications interact with these operations.

---

## Transaction Notification

To effectively use Transaction Notification for Production Goods Issue/Receipt, it's important to understand the underlying processes. This page provides a detailed overview of the actions involved.

1) **Production Goods Issue**

    - Adding Goods issue with Field U_FromProduction set to "Y"
    - Creating additional Journal Entries if it is needed
    - Updating Manufacturing Order (adding new Entries in Documents Tab [@CT_PF_MOR5])
    - Updating Pick Order Document

2) **Production Goods Receipt**

    - Creating Operation Time Recording for Resource time that is set to Backflush
    - Goods Issue for Backflush Items
    - Creating Additional Journal Entry
    - Goods Receipt for Scraps and Co-products
    - Goods Receipt for Final Goods
    - Manufacturing Order Document Update
    - Pick Receipt Document Update
    - Create Additional Batch Details Object

3) **Goods Issue Adjustment (Issue Method: Manual)**

    - Creating Goods Issue adjustment – new Goods Receipt document with field U_FromPoduction set to "Y"
    - Creating Additional Journal Entry (Settlement cost by type) adjustment if it's needed - new Journal Entry document
    - Updating Manufacturing Order (adding new entries in Documents tab [@CT_PF_MOR5])

4) **Goods Receipt Adjustment (Issue Method: Manual)**

    - Creating Goods Receipt adjustment: new Goods Issue document with field U_FromProduction set to "Y"
    - Creating Supplementary Journal Entry if it is needed.
    - Creating Additional Journal Entry (Settlement cost by type) adjustment if it is needed – new Journal Entry document
    - Updating Manufacturing Order (adding new entries in Documents tab [@CT_PF_MOR5])

5) **Goods Receipt (finished product)**

    - Creating Goods Receipt adjustment (Finished product and Issue Method: Backflush): new Goods Issue document with field U_FromProduction set to "Y"
    - Creating Additional Journal Entry (Settlement cost by type) adjustment if it is needed: new Journal Entry document
    - Creating Goods Receipt adjustment (Issue Method: Backflush): new Goods Issue document with field U_FromProduction set to "Y"
    - Creating Supplementary Journal Entry if it is needed
    - Creating Additional Journal Entry (Settlement cost by type) adjustment if it is needed: new Journal Entry document
    - Updating Manufacturing Order (adding new entries in Documents tab [@CT_PF_MOR5])

Every action fire SBO_SP_TransactionNotification, so look out for your Goods Issue and Receipt Validation.

:::tip
    To manage Production Goods Receipt or Issue in Transaction Notification, use the ManufacturingOrder or PickReceipt object code.
:::

---
