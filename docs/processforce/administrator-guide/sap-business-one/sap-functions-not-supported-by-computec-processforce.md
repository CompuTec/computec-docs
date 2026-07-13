---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SAP Functions not Supported by CompuTec ProcessForce

Although **CompuTec ProcessForce** extends the manufacturing capabilities of **SAP Business One**, some standard **SAP Business One** features are not supported.

This article describes the known limitations and recommended alternatives.

## Procurement Confirmation Wizard

The **Procurement Confirmation Wizard** is not supported.

Instead, create **Manufacturing Orders** directly from a **Sales Order** by using the right-click context menu.

This method is fully integrated with the **CompuTec ProcessForce** production planning process.

## Browser Access limitations

Some **CompuTec ProcessForce** features are unavailable when using **SAP Business One Browser Access** because they rely on **ActiveX** technology, which is not supported by the browser client.

The following features are affected:

| Module | Feature | Alternative |
| --- | --- | --- |
| **Stock Management** > **Item Management** | Batch Traceability | Use the **SAP Business One Desktop Client**. |
| **Production** > **Manufacturing Order** | Gantt Chart | Use the **Scheduling Board** or the **SAP Business One Desktop Client**. |
| **Production** > **Bill of Materials** | Operation Relation Map | Use the **SAP Business One Desktop Client**. |
| **Production** > **Manufacturing Order** | Operation Relation Map | Use the **SAP Business One Desktop Client**. |

## Recommendation

For the best experience with **CompuTec ProcessForce**, use the **SAP Business One Desktop Client**, especially when working with features that rely on advanced user interface components.
