---
sidebar_position: 3
---

# MRP 2.5 Wizard

To access the MRP 2.5 Wizard, navigate from the SAP B1 menu or directly log in to AppEngine.

![MRP Wizard](./media/wizard/mrp-wizard-01.webp)

If you log in directly to AppEngine, the following tiles will be visible.

:::caution
    The yellow arrows do not function when logged in directly to AppEngine.
:::

![MRP Wizard](./media/wizard/mrp-wizard-02.webp)

Once you select MRP 2.5, three options are available.

  ![MRP Wizard](./media/wizard/mrp-wizard-03.webp)

After selecting MRP 2.5 Wizard, the MRP Scenarios list will appear. From this list, you can:

- Filter scenarios by status: Not Ran, Processing, Completed, Failure.
- Sort Scenarios.
- Search scenarios (by Name and Description).
- Add scenario.
- Select a scenario to work with.

  ![MRP Wizard](./media/wizard/mrp-wizard-04.webp)

## Scenario's Data Settings

### Planning Horizon Tab

![MRP Wizard](./media/wizard/mrp-wizard-05.webp)

- **Scenario Name**: required.
- **Description**: provide a brief description of the scenario.
- **Start Date**: required, must be equal to or later than today.
- **End Date**: Required, must be equal to or later than the start date.
- **Data in Period of**: choose from Days, Weeks, Months, or Hours. Quantities are summarized according to the selected period in the Results tab.
- **Planning Horizon Length**: this is determined based on the selected period.
- **Consider Holidays**: Select this checkbox to have MRP account for holidays and weekends defined in the Holiday Dates Window. This automatically adjusts demand and supply based on these dates, extending the lead time where necessary.
- **Ignore Cumulative Lead Time**: if selected, Cumulative Lead Time (CLT) will not be considered in calculations.
- **Internal Lead Time**: adds Internal Lead Time (ILT) to documents or recommendations. For more details, refer to the Item’s Planning Data (Internal Lead Time and Scope).

**Display Properties**

- **Sort By**: Choose how to sort the MRP report. Options include:

  - Assembly Sequence: Sorts the results from the highest level to the lowest level of the production Bill of Materials.
  - Item Number: Sorts the results by the item number.
  - Item Description: Sorts the results by the item description.
  - Item Group: Sorts the results by the item group.

- **Display Items with No Requirements**:  items without actual requirements after the MRP run are displayed in the tab Results. If you do not select this checkbox, MRP items without requirements or with incoming orders balancing the requirements are not displayed.

- **Display Selected Items Only**: only the items selected in the Item Selection tab will be shown in the Results tab. This setting can be modified in the Results tab.

- **Future Recommendation Summary**: the Results tab will display a column summarizing future recommendations. This setting can also be changed in the Results tab.

**Advanced Settings, Processing Method**:

- **Asynchronous**: processes multiple BOM trees simultaneously, making the process faster. This is the recommended option.
- **Synchronous**: Bill of Materials trees are processed one after another.

## Item Selection Tab

The Item Selection tab allows you to add items to the scenario and edit their planning parameters. Any changes made to the parameters will not affect the master data; they are only applicable to the current scenario. To edit a parameter, select the checkbox next to its value.

  ![MRP Wizard](./media/wizard/mrp-wizard-06.webp)

**Options**:

- **All Items**: includes all items that have the Planning Method set to MRP for the MRP run. When this option is selected, the application does not display items from the table below.
- **Selected Items**: choose this option to select specific items for the MRP run. Click Add Items to open the Items List – Selection Criteria window. You can filter items by item number, group, and properties. If necessary, select the Expanded Selection Criteria checkbox to filter items further by the Preferred Vendor and UDFs defined in the Item Master Data window.

  ![MRP Wizard](./media/wizard/mrp-wizard-07.webp)

- **Include Revision**: if selected, MRP will consider the item's revisions. Planning data for revisions will be taken from the Item Details. If not selected, the planning data will be read from the Item Master Data.
- **Remove Selected Items**: removes all selected items from the scenario.
- **Remove All Items**: removes all items from the scenario.
- **Active/Deactivate All**: activates or deactivates all items displayed in the table.

  **Notes:**
    1. If you add an item and later deactivate it in an MRP run, it will still appear in the table the next time the scenario is run. To include the deactivated item in the next MRP run, simply activate it. However, if you remove the item from the MRP run, it will not appear in the list the next time the scenario is executed. You must add the item again to include it.
    2. Planning parameters for individual items can be edited by selecting the checkbox next to the respective parameter. The edited values are valid only for the current scenario.
    3. To plan primary demands for coproducts and scraps, the procurement method must be set to "Make" (without BOM), and the items must be listed and active in the item list. The system will propose MOR recommendations for the produced items to cover the demands for coproducts and scraps. If multiple BOMs exist for coproducts or scraps, the most efficient BOM will be selected.

- **Default Vendor** - click [here](/docs/processforce/user-guide/mrp/mrp-2-5/vendors-lead-times/) to find out more.
- **Custom Vendor Lead Time**: click [here](/docs/processforce/user-guide/mrp/mrp-2-5/vendors-lead-times/) to find out more.
- **Custom Vendor Internal Lead Time**: click [here](/docs/processforce/user-guide/mrp/mrp-2-5/vendors-lead-times/) to find out more.
- **Vendor Selection Strategy**: the Default Vendor strategy is currently implemented. When preparing a recommendation, all planned quantities are assigned to the default vendor. Additionally, lead time rules are applied based on the default vendor selected in the Preferred Vendors list (Item Master Data > Purchasing Data tab).

## Inventory Data tab

This tab is designated to add a warehouse to the scenario. For added warehouses, you can define the following:

- Run By policies,
- Inventory level policies,
- using of batches and serial numbers parameters,
- Using of Inventory Transfer Request.

![MRP Wizard](./media/wizard/mrp-wizard-07.webp)

**Run by Company**: Consolidate existing inventory, demand, and supply into default warehouse only.
To run the MRP calculations on the company level, select this option. MRP calculates demands and supplies jointly for all the selected warehouses. To do so, the application sums up all the selected warehouses' initial inventory quantities, needs, and supplies. Then, it consolidates all the quantities into the default warehouse for requirements calculation.

**Run by Warehouse**: Include existing inventory, demand, and supply separately for each warehouse.
To run the MRP calculations on the warehouse level, select this option. MRP calculates requirements separately for each warehouse.
Your definition here may affect MRP calculations for inventory level and demands raised by inventory level requirements.

**Include Existing Inventory**: To consider the existing inventory quantities of this warehouse in MRP calculation, select this checkbox.

<u>**Include Demand**</u>: Select the checkbox to consider all sources of demand from this warehouse, including requirements from the inventory level in the MRP calculation.

**Note:**

- Supplies with negative quantities are regarded as demands. For example, a purchase order is typically a source of supply. However, if the purchase order has a line with a negative quantity, then this line is included as a demand.
- If you deselect the checkbox, the MRP does not consider inventory level requirements for this warehouse, regardless of your inventory level definition in MRP Wizard.

<u>**Include Supply**</u>: To consider all sources of supply in the MRP calculation, select the checkbox.

**Note**: Demands with negative quantities are regarded as supplies. For example, a sales order is typically a source of demand. However, if the sales order has a line with a negative quantity, then this line is included as supply.

**Location**: Shows the location of the warehouse.

**Recommendations**:

- **Inventory Transfer Request**: Works like in SAP B1. A recommendation for a transfer request will be proposed if physical (initial) inventory levels allow for that.
- **Inventory Transfer Request from the planned stock**: Additionally, the option above recommendations will be proposed from the planned stock created from planned supplies (documents and recommendations) that increase the scheduled level of inventory.

**Inventory Level**: Works like in SAP B1. Proper levels have to be defined in the Item Master Data/Inventory tab. The recommendation will be proposed to secure the declared inventory level.

**Recalculate Stock by Batch Expiry Date**: The stock is recalculated (will be reduced by the Batch quantity) on the Expiry Date.

**Expiration Date/From/To**: The initial stock is limited to the sum of batches or serial numbers with expiration dates from the declared time range.

**Statuses/Released/Not Accessible/Locked**: The initial stock is limited to batches with selected statuses. If all statuses are selected or unselected, the result will be the same; all statuses are included in the sum.

## Document Data tab

![MRP Wizard](./media/wizard/mrp-wizard-08.webp)

**Time Range**

**Within Planning Horizon**

Only sources of Supply and Demands within the Start Date and End Date range (as defined in MRP Wizard, Tab Planning Horizon) are considered in MRP calculations and displayed with recommendations.
Quantity for Supply and Demand documents before the current date are combined and displayed in the column Past Due Date column.

**Include Historical Data**

All Demands and Supplies before the Start Date are considered in MRP calculations. Quantity for Supply/Demand documents before the Start Date are combined and displayed in the column History.
The History column in the MRP result is visible only after you have selected the Include Historical Data option in this Tab.

Select corresponding checkboxes for the document type to include document sources in the MRP calculation.

**Purchase Requests**

When you select the checkbox in the MRP Results, MRP displays open purchase requests as supplies.

**Purchase Quotations**

When you select the checkbox in the MRP Results, MRP displays open purchase quotations as supplies.

**Purchase Orders**

When you select the checkbox in the MRP Results, MRP displays open purchase orders as supplies.

**Blanket Purchase Agreements**

When you select the checkbox in the MRP Results, MRP displays blanket purchase agreements with the status of Approved as supplies. The blanket agreements with a vendor code are considered blanket purchase agreements.

Note: MRP considers only the blanket agreements of type Specific.

**Sales Quotations**

When you select the checkbox in the MRP Results, MRP displays open sales quotations as demands.

**Sales Orders**

When you select the checkbox in the MRP Results, MRP displays open sales orders as demands.

**Blanket Sales Agreements**

When you select the checkbox in the MRP Results, MRP displays blanket sales agreements with the status of Approved as demands. The blanket agreements with a customer code are considered blanket sales agreements.

Note: MRP considers only the blanket agreements of type Specific.

**Manufacturing Orders**

In the MRP Results, the application displays the parent items as demands and the child items as supplies for production orders.

**Inventory Transfer Requests**

For the issuing warehouse, MRP displays the requested quantities as demands.

For the receiving warehouse, MRP displays the requested quantities as supplies.

Note: The MRP cannot recommend inventory transfer requests for scenarios where you choose to run by company. The MRP considers all the demands and supplies jointly for the whole company as one warehouse, and it does not make sense to transfer inventory within one warehouse.

**Reserve Invoices**

When you select this checkbox, the application considers open reserve invoices and open correction invoices for reserve invoices in the MRP calculation.

- For A/R reserve invoices and correction invoices, the application displays them as demands.
- For A/P reserve invoices and correction invoices, the application displays them as supplies.

**Restrict Documents**

When for a particular kind of document in the right panel documents are added, and all or some of them have checked the Selected checkbox and the Restrict Documents checkbox is selected in the left panel, then only these selected documents will be considered in the MRP scenario run.

**Distribution Settings**

Recommendations are extracted per marker combination down in the production tree - one offer per combination. Project from demand (Sales Order, Manufacturing Order) is propagated for all recommendations according to the BOM structure. The project defined in BOM (header or lines) is overwritten. This logic is used for demand documents selected in the Document Data tab.

## Forecast & Recommendations tab

![MRP Wizard](./media/wizard/mrp-wizard-09.webp)

**Select Documents - Forecast**

**Add Forecast** - Add forecasts to the scenario.

**Remove Selected Forecasts** - Remove selected forecasts from the scenario.

**Remove All Forecasts** - Remove all forecasts from the scenario.

**Activate/Deactivate Selected**

If you do not want to consider forecast data in MRP calculations, leave all Selected checkboxes blank.

If you want to consider forecast data in MRP calculations:

- To consider data of only one forecast in the MRP calculation, select the checkbox for one forecast.
- To consider data of multiple forecasts in the MRP calculation, select the checkbox for more than one Forecast.

**Sales Orders Options**

If you have defined sales orders in the MRP calculation, the forecasted amount, minus the amount consumed by sales orders, is regarded as demand.

**Consume Forecast**

To configure the default forecast consumption settings for open sales orders, you can do this there: General Settings/Inventory/Planning. Subtracts the sales order from the Forecast quantity. The checkbox defines the default value for the sales order lines. It cannot be changed in the scenario.

**Consumption Method**

Default settings are read from General Settings/Inventory/Planning. Choose how forecast consumption is performed:

- Backward-Forward
- Forward-Backward

**Days Backward**

Enter the number of days to search back for a forecast to consume.

**Days Forward**

Enter the number of days to search forward for a forecast to consume.

**Recommendations**

Defines the document types recommended after the MRP wizard calculates the results. Purchase documents and production orders are mandatory recommended document types.
You can define whether to recommend inventory transfer requests when you are running the MRP by warehouse (please see Tab Inventory Data).

**Purchase**

**Note**: This checkbox is read-only and, by default, selected.
Items with the Procurement Method of Buy are recommended with purchase documents. You can choose between Purchase Request and Purchase Order.

In Tab Inventory Data, if you have selected Run by Warehouse, you have the following warehouse options:

- To generate purchase orders to the default warehouse of the item, select **Generate to Default Warehouse**.
- To generate purchase orders to the warehouse that demands inventory supplies, select **Generate to Warehouse with the Demand**.

**Production Orders**

**Note**: This checkbox is read-only and, by default, selected.
Items with the Procurement Method of Make are recommended with production orders. The application recommends the production orders to the warehouse as defined in Component Warehouse: From Bill of Materials Line, From Parent Item Document Line (Planning data for Item/Revision).

**Note**: After the Run of the scenario, consumption of forecast is possible to check in the tab Consumed Forecast and in Pegging Information in the tab Results.

## MRP's outcome – Tabs: Results, Consumed Forecasts and Recommendation

To receive the MRP scenario's outcome, select the button Run. The outcome is presented in tab Results and Recommendation. If there are messages regarding the outcome, you can see the icon with an exclamation mark on the right of the button Run.

![MRP Wizard](./media/wizard/mrp-wizard-10.webp)

### Results tab

The main elements of this Tab are described in the screenshot below.

![MRP Wizard](./media/wizard/mrp-wizard-11.webp)

**Column History** – Demand/Supply before the scenario start date. Visible if the option Include Historical Data is selected in Tab Documents Data.

**Column Past Due Date** – Demand/Supply between scenario Start Date and Current Date. Visible if Start Date < Current Date.

**Expand all** – expand all rows for all Items.

**Collapse all** – collapse all rows for all Items.

**Warehouses without any recommendations** - if there are no planned actions for the warehouse, it is possible to hide him - the button has to be unchecked.

**Future recommendations** are recommendations beyond the horizon but are considered because action is needed (supply document release is required in the current scenario horizon) to provide supply for demand in the future. This is due to considering lead times, for example, Cumulative Lead Time beyond the horizon end.

**Note**:

1. To see the initial stock quantity, please place the cursor on the cell Stock in the column Past Due Date. The quantity will be displayed in the floating tooltip.
2. Future recommendations' bars on the Gantt are marked with color.
  ![MRP Wizard](./media/wizard/mrp-wizard-12.webp)
3. Initial stock information. Please select the cell in the column Past Due Date and row Stock.
  ![MRP Wizard](./media/wizard/mrp-wizard-13.webp)

  **Initial Quantity** - base quantity for MRP calculation.

  **Excluded Quantity** - excluded quantity according to Batches' parameters (Expiration Date, Batch Status) or Serial Numbers' parameters (Expiration Date).

**Pegging information** is available when you select supply, demand, or recommendation bar on Gantt.

![MRP Wizard](./media/wizard/mrp-wizard-14.webp)

**Due Date** – the date for which the quantity is required.

**Document Date** – Posting date for supply/demand documents. Creating dates for MORs. For recommendation, it is the date when the document should be released.

### Consumed Forecasts tab

This tab presents

![MRP Wizard](./media/wizard/mrp-wizard-15.webp)

You can call Consumed Forecast information from Pegging Information.

![MRP Wizard](./media/wizard/mrp-wizard-16.webp)

### Recommendations tab

The main elements of this Tab are described in the screenshot below.

![MRP Wizard](./media/wizard/mrp-wizard-17.webp)

**Display selected Items only** - if you select this icon, you will see recommendation only for Items selected in Tab Item Selection.

**Display future recommendation** - if you select this icon, you will see recommendation beyond the horizon. Future requests are marked by a checkbox in the column Future Recommendation.

**Display Inventory Transfer Requests from Planned Stock** - if checked, Inventory Transfer Requests, which are based on planned supplies (documents and recommendations), will be displayed. This kind of Inventory Transfer Request is marked with the "info" icon in the column Order Type. Otherwise, only inventory transfer requests based on physical stock (initial stock) are displayed. This corresponds to the option Inventory Transfer Request from the planned stock in the tab Inventory Data.

**Save Recommendation** – you should use this button to save recommendations and work on them in Order Recommendation.

**Display Relation Map** – if you select this icon, a new window, Document Details with relation map will be opened.

**Document Details**

In this window, relations between source documents, recommendations, and outcome documents are displayed starting from a given recommendation. Types of documents are marked with colors, the meaning of which is described in the legend.

![MRP Wizard](./media/wizard/mrp-wizard-18.webp)

![MRP Wizard](./media/wizard/mrp-wizard-19.webp)
