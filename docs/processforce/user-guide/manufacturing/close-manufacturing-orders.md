---
sidebar_position: 5
---

# Close Manufacturing Orders

Efficiently closing manufacturing orders is a key step in managing production workflows within SAP Business One. This process finalizes production activities, updates inventory and costing records, and ensures accurate financial reporting.  

This guide explains how to close manufacturing orders, filter them using selection criteria, and understand how the system handles costing variances upon closure.

---

## Prerequisites

Before closing manufacturing orders, ensure that:

- All required production activities are completed and confirmed.
- Material issues and receipts are posted.
- Quality checks (if applicable) are completed.
- You have appropriate authorization to close manufacturing orders.

---

## Steps to Close Manufacturing Orders

**1. Navigate to the Close Manufacturing Orders Screen**

    To Close Manufacturing Orders, navigate to:

        :::info Path
            Production → Manufacturing Order → Close Manufacturing Order
        :::

    This function provides an overview of open manufacturing orders that are ready to be closed.

        ![Close Manufacturing Orders](./media/close-manufacturing-orders/close-manufacturing-orders.webp)

**2. Apply Selection Criteria**

    Use the available filters to narrow down which manufacturing orders should be displayed.  
Filtering options align with standard SAP Business One selection criteria, allowing users to easily locate relevant orders based on status, date, item, or other parameters.

**3. Select Manufacturing Orders to Close**

    - In the results grid, tick the **Close** checkbox next to each order you want to finalize.  
    - To close all listed orders at once, select the header checkbox above the Close column.  

        ![Select Orders to Close](./media/close-manufacturing-orders/close-manufacturing-orders-close.webp)

        Once confirmed, the selected manufacturing orders will be marked as closed.

**4. Automatic Posting of Variances (If Applicable)**

    If your company uses Standard Costing or Moving Average Costing, SAP Business One can automatically calculate and post Work in Progress (WIP) variances at the time of closure.

    This behavior depends on the configuration under:

    Administration → System Initialization → General Settings → ProcessForce Tab → Costing Tab → Post Variance on Manufacturing Order Closure

    When enabled, the system posts variance entries automatically upon order closure, ensuring accurate cost reconciliation.

**5. Review the Close Date**

    After closure:

    - The **Close Date** field is automatically populated with the current date.
    - This helps track when each order was finalized for audit and reporting purposes.

    You can view the Close Date directly on the Manufacturing Order document:

    ![Close date](./media/close-manufacturing-orders/closed-date.webp)

## Filtering option

The function also includes filtering options to help users narrow down the manufacturing orders that need to be closed. These filtering options align with the standard SAP Business One filtering criteria, enabling users to easily identify and manage relevant orders.

---
