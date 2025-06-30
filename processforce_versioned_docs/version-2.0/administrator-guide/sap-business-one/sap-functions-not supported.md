---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# SAP Functions not Supported by CompuTec ProcessForce

CompuTec ProcessForce extends SAP Business One with deep manufacturing capabilities. However, some native SAP Business One functions are not supported within CompuTec ProcessForce, either due to technical limitations or because alternative solutions are already provided within the platform.

This page explains the known limitations and offers alternatives where applicable.

---

## 1. Procurement Confirmation Wizard

The **SAP Procurement Confirmation Wizard** is not supported in CompuTec ProcessForce.

### Why?

CompuTec ProcessForce provides its own mechanism for managing manufacturing workflows. Instead of using the Procurement Confirmation Wizard, users can **generate Manufacturing Orders directly from Sales Orders** using the right-click context menu.

> ✅ This method simplifies the process and integrates tightly with CompuTec ProcessForce's manufacturing logic.

---

## 2. Browser Access Limitations

When using SAP Business One via **Browser Access**, certain CompuTec ProcessForce features are unavailable.

### Why?

The Browser Access client supports only the **SAP Business One UI API**. Features built with **ActiveX technology** are not compatible and have been disabled in this mode.

### Affected Features

| Module | Function | Status in Browser Access |
|--------|----------|--------------------------|
| Stock Management → Item Management | Batch Traceability | ❌ Not supported |
| Production → Manufacturing Order | Gantt Chart Scheduling | ❌ Not supported (use Scheduling Board instead) |
| Production → Bill of Materials | Operation Relation Map (context menu) | ❌ Not supported |
| Production → Manufacturing Order | Operation Relation Map (context menu) | ❌ Not supported |

> 🔁 These functions remain **fully supported in the standard SAP Business One desktop client**.

---

## Summary

| SAP Function | Supported in CompuTec ProcessForce? | Alternative/Recommendation |
|--------------|----------------------------|-----------------------------|
| Procurement Confirmation Wizard | ❌ Not supported | Use context menu to create MOs from SOs |
| ActiveX-based features (e.g., Batch Traceability) | ❌ In Browser Access only | Use SAP Business One Desktop Client |
| Gantt Chart Scheduling in Browser Access | ❌ Not supported | Use the Scheduling Board |

For the most complete CompuTec ProcessForce experience, we recommend using the **SAP Business One Windows client**, especially for features that depend on advanced UI elements.

---
