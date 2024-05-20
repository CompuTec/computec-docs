---
sidebar_position: 8
---

# Costing tab

This tab allows setting details of costing, e.g., costing evaluation type for different kinds of Items.

---

:::info Path
    Administration > System Initialization > General Settings > ProcessForce tab > Costing tab
:::

![Costing Tab](./media/costing-tab/costing-tab.webp)

**Post resource confirmation** – check this box if you wish to have financial postings for resources (Machines and Labor). Once a financial journal has been posted, this field is grayed out and cannot be unchecked.

**Post variance on Manufacturing Order closure** – check this field to calculate WIP variances when a manufacturing order status is changed to Closed.

**Enable Resource Costing editing for the 000 cost category** – if this box is checked, resource cost details can be changed in the 000 cost category. Note that in this case, changes in Resource Cost will not automatically affect Item Cost after performing Rollover. It has to be done manually. **It is not recommended to use this option as it may cause inconsistencies in Item Costing**.

**Use Multistructure Fixed and Variable Cost** – if it is checked, multi-structure fixed and variable costs can be set during the costing process. Click here to find out more.

**Receipt Evaluation Type** – there are three options to determine where the system gets the value of the Goods Receipt:

- **Dynamic** – this is used for Moving Average and FIFO
- **Item Costing** – this is used in Standard Costing, where the value comes from the Item Code field within the Item Master Data form, Inventory Data tab. This can also be used for Moving Average, where the value is based on the Estimated Moving Average (using the Item Costing Form)
- **Costing** – Cost is taken from Item Costing from the moment of Manufacturing Order creation (further changes of costs do not affect Cost). This method also allows for a cost to be calculated based on a Formatted Search or Transaction Notification.
- **CoProducts and Scrap based items can be evaluated based on**:
  - **Item Costing** – this is used in Standard Costing, where the value comes from the Item Code field within the Item Master Data form, Inventory Data tab. This can also be used for Moving Average, where the value is based on the Estimated Moving Average (using the Item Costing Form)
  - **Costing** – Cost is obtained from Item Costing from the moment of creation of the Manufacturing Order (later changes of costs do not affect Cost). This method also allows for a cost to be calculated based on a Formatted Search or Transaction Notification.
- **Issue Info Price List**
- **Enable dynamic Costing calculation engine** – checking this checkbox enables alternative costing functions. Click here to find out more
- **Save cost roll-up calculation results and Item Costing restored data in CSV files** – the setting determines whether the data calculated during the new Cost Roll-up process is saved to CSV files (for some analysis or testing purposes) or not. If the option is checked, CSV files are saved to C:\ProgramData. The information is saved in the following name format:
  - `CT_PF_OITC_YYYYMMDD_HHmmss_ProcessId.csv`
  - `CT_PF_ITC1_YYYYMMDD_HHmmss_ProcessId.csv`
  - `CT_PF_ITC2_YYYYMMDD_HHmmss_ProcessId.csv`
  - `CT_PF_ITC3_YYYYMMDD_HHmmss_ProcessId.csv`
  - `CT_PF_ITC5_YYYYMMDD_HHmmss_ProcessId.csv`

**Save data in LOG tables during the Item Costing restoration process**

**Refresh Planned Costs in Manufacturing Order when a status change to**

**Default type of Costing determination**

**Default price list of Costing**
