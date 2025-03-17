---
sidebar_position: 2
---

# SAP Functions not Supported by ProcessForce

ProcessForce is designed to enhance SAP Business One with advanced manufacturing capabilities. However, certain SAP functions are not supported within ProcessForce, often because similar functionalities are already available in the system. Below is a list of SAP functions that are either not integrated with ProcessForce or have alternative solutions within the platform.

---

## SAP Procurement Confirmation Wizard

The SAP Procurement Confirmation Wizard is not supported in ProcessForce, meaning it does not generate ProcessForce Manufacturing Orders. Instead, Manufacturing Orders can be created directly from Sales Orders via the context menu, providing a streamlined workflow.

## Browser Access

Since SAP Business One UI API code is the only supported method for Browser Access, functionalities that rely on ActiveX have been removed from ProcessForce when running in this mode:

- Stock Management → Item Management → Batch Traceability
- Production → Manufacturing Order → Scheduling, but only scheduling on the Gantt chart as Scheduling Board is available
- Production → Bill of Materials → Production Process → Operation Relation Map from right-click context menu
- Production → Manufacturing Order → Manufacturing Order → Operation Relation Map from right-click context menu

These limitations apply only to Browser Access mode. If you need these functionalities, please use the standard SAP Business One client.

---
