---
sidebar_position: 2
---

# SAP Functions not Supported by ProcessForce

In this page, you can find SAP functions not supported by ProcessForce, e.g. because of a similar function present in the ProcessForce system.

---

## SAP Procurement Confirmation Wizard

SAP Procurement Confirmation Wizard is not supported and does not create ProcessForce Manufacturing Orders.

ProcessForce Manufacturing Orders can be created directly from Sales Orders (from its context menu).

## Browser Access

As only SAP Business One UI API code can run in Browser Access, we removed functionalities based on ActiveX from ProcessForce when it runs in Browser Access mode:

- Stock Management → Item Management → Batch Traceability
- Production → Manufacturing Order → Scheduling, but only scheduling on the Gantt chart as Scheduling Board is available
- Production → Bill of Materials → Production Process → Operation Relation Map from right-click context menu
- Production → Manufacturing Order → Manufacturing Order → Operation Relation Map from right-click context menu

This is only a Browser Access limitation.

Please use the standard SAP Business One client if you need to use these functionalities.
