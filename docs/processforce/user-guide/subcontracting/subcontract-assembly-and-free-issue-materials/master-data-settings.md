---
sidebar_position: 3
---

# Master Data Settings

The following settings are required to perform a subcontracting procedure.

---

## Item Master

### Subcontract Sub-Assembly Parent

- Create an Item Master for the Subcontract Sub-Assembly parent using the same setting for a normally manufactured Item.
- Set the default warehouse, as the warehouse within the company warehouse.

### Service to be Purchased

- Create an Item Master for the service.
- Set the Item as follows:
  - Purchase Item,
  - Preferred Supplier Code,
  - Unit Price or Price List.
![Service to be Purchased](./media/master-data-settings/sub-contract-service-item.png)

- On the Inventory Data tab, set Valuation Method for Standard.
![Service to be Purchased](./media/master-data-settings/sub-contract-service-item-01.png)

## Bill of Material

- Create the Bill of Material for the Sub-Assembly
- Items can be set as "Manual" and "Backflush
- Set the Items to "Backflush" if you do not want to record the confirmed consumption of inventory from the Subcontractor
- Set the Items to "Manual" if you want to confirm the consumption of inventory from the Subcontractor, either by the Production Planner confirming the values provided by the Subcontractor or by the Subcontractor entering the values themselves
- Select Type = "External" to indicate this Bill of Material is made externally
- Within the Items Tab, add the Item for the Service to be Purchased
- The Warehouse for the Item represents the subcontractor warehouse where the inventory is moved to and related inventory transactions performed
![Bill of Material](./media/master-data-settings/bill-of-material.png)

- For this Item, check the column "Subcontracting Item."
![Bill of Material](./media/master-data-settings/bill-of-material-01.png)

## Item Costing

- The Cost of the Subcontracted Sub-Assembly is the total of the Item material costs + the purchase price per unit of the Service to be Purchased
- For the Items which are in inventory, set the costing records as normal
- For the Item for the Service to be Purchased, set the Type to the Price List
- Perform the cost roll-up manually or via the cost roll-up function
- Perform the cost roll-over
