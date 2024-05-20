---
sidebar_position: 3
---

# Items Tab

:::note Path
    Production → Bill of Materials → Bill of Material → Items Tab
:::

This form allows the user to perform the following:

- Enter the components that are used in producing the parent product.
- Record the warehouse where the inventory is held. If the Item is backflushed, this is the warehouse where inventory deductions occur.
- Define a Factor and description. The Factor is used as a variable to change the quantity.
- Enter the Quantity of the Item in relation to the parent product.
- Add a Scrap % which affects the Item quantity.
- The Result is a calculated value of the Item and parent quantity relationship based on the defined [Formula](../formula.md).
- Use the default Formula (as defined on the General Settings/ProcessForce Tab) or change the expression format to calculate the item quantity (result). See [Formula](../formula.md) for additional information.
  ![Items Tab](./media/bom-items/bill-of-materials-item-tab.webp)
- UoM is the unit of measure for the item, and the default value is defined within the Item Master Data/Inventory Tab (see image below).
- Type is a display-only field that defines the supply and demand method, i.e., make or buy. These values are defined within the Item Master Data/Planning Data Tab (see image below).
- Select the Issue Type for issuing and consuming inventory. The valid values are Manual or Backflush. The default value is defined within the Item Master Data/General Tab (see image below).
- For each line item, Project codes may be added.
