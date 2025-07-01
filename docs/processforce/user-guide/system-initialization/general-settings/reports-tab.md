---
sidebar_position: 11
---

# Reports tab

This guide helps you configure reporting criteria for supplier performance and inventory shortages in CompuTec ProcessForce. These settings impact how supplier evaluation and shortage calculations are generated in various reports.

![Reports tab](./media/shortage-tab/pf-reports.webp)

The Reports tab consists of two sections:

- **Supplier Score Card**: Used to evaluate supplier performance based on quality, delivery accuracy, and timing.
- **Shortage Report**: Used to analyze material shortages by comparing demand and supply.

---

To access Reports tab, navigate to:

:::info Path
Administration → System Initialization → General Settings → ProcessForce tab → Reports
:::

---

## Supplier Score Card

The Supplier Score Card provides a structured and measurable way to evaluate supplier performance across key metrics such as quality, delivery accuracy, and timeliness. Using a weighted scorecard system, it helps identify strengths and areas for improvement, supporting better procurement decisions.

:::info caution
    - The delivery and quantity calculations on the Supplier Score Card are based on the relationship between Purchase Order and Goods Receipt PO documents. It is crucial that a specific Purchase Order and corresponding Goods Receipt PO are linked correctly for the function to work properly. This can be achieved by creating a Goods Receipt Purchase Order using the "Copy To" option from a Purchase Order, or by linking the Purchase Order using the "Copy From" option in the Goods Receipt PO.
    - Please note that dates are compared between the individual lines of the documents, not the document header dates.
:::

![SSC](./media/shortage-tab/reports-ssc.webp)

To access Supplier Score Card, navigate to:

:::info Path
Administration → System Initialization → General Settings → ProcessForce tab → Reports Supplier Score Card
:::

### Supplier Score Card Options

The Supplier Score Card consists of three main categories with individual parameters. Each field allows a numeric value (percentage) to represent its influence in overall supplier evaluation.

#### 1. Quality

    - **No. of Complaints**: Weight given to the number of complaints received against a supplier. Useful for tracking customer or internal dissatisfaction.
    - **No. of Failed QC Tests**: Evaluates how often supplier products fail quality control. A higher value increases the impact of failed quality checks on overall evaluation.

#### 2. Delivery at Time

    - **No. of Returns**: Frequency of goods returned to the supplier due to defects, damage, or incorrect items.
    - **No. of Time**: Reflects timely deliveries. A higher weight means your business places high value on punctuality.
    - **No. Early**: Assigns weight to early deliveries, which may be positive or negative depending on your operational tolerance for premature arrivals.
    - **No. Late**: Measures late deliveries. Typically given high weight if delays disrupt production or order fulfillment.

#### 3. Delivery Quality

    - **No. Equal to Quantity**:Weights the accuracy of deliveries matching the ordered quantity exactly.
    - **No. Under Quantity**: Penalizes suppliers for delivering less than ordered, which can lead to shortages or delays.
    - **No. Over Quantity**: Measures the impact of suppliers delivering more than ordered - may affect inventory balance and invoicing.

>Note: **Totals** is The sum of all individual metric weights. Must be equal to **100.00**.

### Supplier Score Card from Business Partner

You can also access the form for a specific Business Partner from the Business Partner form header context menu (available only when the BP type is set to Supplier for this Business Partner).

:::info Path
Business Partners → Supplier Score Card
:::

#### 1. Header

  In this section, you can define additional settings for a specific Supplier related to delivery and quantity.

    - No of Days Early and No of Days Late define a period before and after the order date in which delivery is still acceptable.

        **Example**

          - The order date is 01.07.2025
          - No of Days Early: 1
          - No of Days Late: 2
          - Every delivery before 14.11.2016 will be deemed as early, and every delivery after 18.11.2016 will be considered late.
    - Quantity Over % and Quantity Under % define a range of quantity of delivery that is still acceptable.

        **Example**

          - The ordered quantity is 108
          - Quantity Over %: 10
          - Quantity Under %: 5
          - Every delivery less than 103 will be deemed too small, and delivery more than 119 will be considered too big.

#### 2. Summary

    ![BP - SSC](./media/shortage-tab/bp-ssc.webp)

      - **Weighted Values**: These are preset in the General Settings and are based on key quality indicators such as the number of complaints, failed quality control checks, product returns, and similar metrics.
      - **Months to Date**: Represents the total number of transactions recorded from the start of the current month up to today. For instance, if today is October 15, it includes transactions from October 1 to 15.
      - **Previous Month**: Refers to the weighted values calculated for the entire preceding month.
      - **Years to Date**: Denotes the accumulated weighted values from January 1 through the current date of the ongoing year.
      - **Previous Year**: Captures the total weighted values for the full previous calendar year, from January to December.

#### 3. Details

    ![Supplier Score Card Details](./media/shortage-tab/bp-ssc-details.webp)

    On this tab, the values from the Summary tab are broken down into specific weighted scorecard positions. The values in the Details tab are displayed solely based on specific settings and transactions, e.g., QC Tests, Returns, etc.

    **Details tab Calculation**

    Note Grade = Amount / Total and Weighted Score = Weight x Grade

    |        Quality         |                        No of weighted                        |                                              Weighted Value                                              |
    | :--------------------: | :----------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
    |   No. of Complaints    |      A = Total Number of Complaints (for this supplier)      | ( A / Total number of Complaints (for all suppliers) ) x No of Complaints (value from General Settings)  |
    | No. of Failed QC Tests | B = Number of Failed Tests (QC Test has the status = Failed) | ( B / Total number of QC Tests (Passed + Failed) ) x No of Failed QC Tests (value from General Settings) |
    |     No. of Returns     |                    C = Number of Returns                     |               ( C / Total number of GRPO's ) x No of Returns (value from General setting)                |

    | Deliveries  |                                                         No of                                                         |                             Weighted Value                             |
    | :---------: | :-------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------: |
    | No. On Time |              D = Total number of GRPOs where the GRPO Posting Date is = to Purchase Order Delivery Date               | ( D / Total number of GRPO ) x No on Time (value from General setting) |
    |  No. Early  | E = Total number of GRPOs where the GRPO Posting Date - No of Days Early Value is < than Purchase Order Delivery Date |  ( E / Total number of GRPO ) x No Early (value from General setting)  |
    |  No. Late   | F = Total number of GRPOs where the GRPO Posting Date + No of Days Late Value is → than Purchase Order Delivery Date  |  ( F / Total number of GRPO ) x No Late (value from General setting)   |

    | Quantity  |                                              No of                                              |                            Weighted Value                             |
    | :-------: | :---------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
    | No. Equal |       G = a Total number of GRPOs where the Purchase Order and GRPO quantity are the same       | ( G / Total number of GRPO ) x No Equal (value from General Settings) |
    | No. Over  | H = Total number of GRPO where the quantity is → the Purchase Order quantity + Quantity Over %  | ( H / Total number of GRPO ) x No Over (value from General Settings)  |
    | No. Under | I = Total number of GRPO where the quantity is < the Purchase Order quantity - Quantity Under % | ( I / Total number of GRPO ) x No Under (value from General Settings) |

#### 4. Notes

    You can add any relevant comments or observations related to the scorecard.

    ![Notes](./media/shortage-tab/bp-ssc-notes.webp)

#### 5. Attachment

    Here you can add, display or delete files connected to the Score Card.

    ![Attachments](./media/shortage-tab/bp-ssc-attachments.webp)

---

## Shortage Report

The **Shortage Report** in CompuTec ProcessForce provides a detailed analysis of missing materials required for open manufacturing orders or planned production. It compares the demand for items (based on BOMs, MO reservations, or batch requirements) with current stock levels, incoming supplies and defined safety parameters.

To access Shortage Report, navigate to:

:::info Path
Administration → System Initialization → General Settings → ProcessForce tab → Reports tab → Shortage Report
:::

![Shortage tab](./media/shortage-tab/reports-shortage-report.webp)
.

### Shortage Report Options

By adjusting settings in the **Shortage Report tab**, you control what counts as "available" stock, what lead times are considered and how dynamic the system should be when calculating shortages.

#### 1. General Settings

These checkboxes define how the shortage logic behaves at a system level:

1. **Only Items with Shortage Tracking**: Includes only those items that are flagged for shortage tracking in the Item Master Data.

2. **Include Obsolete Supply/Demand Documents**: If checked, the system will include outdated or closed documents - like canceled purchase orders or completed sales - in the calculation.

3. **Shortages Considered Separately for Each Warehouse**: When enabled, the system calculates shortages per warehouse independently, rather than aggregating stock across all locations. This is ideal for companies managing multiple warehouses with local fulfillment needs.

#### 2. Included Documents

These checkboxes determine which types of documents are considered when calculating supply and demand balances:

1. **Purchase Requests**: Includes open internal requests for purchasing materials, even if they are not yet approved or converted into purchase orders.

2. **Purchase Quotations**: Adds vendor quotations as potential future supply, though they are non-binding and not yet firm commitments.

3. **Purchase Orders**: Considers all open and confirmed purchase orders as incoming supply. This is a standard setting for accurate shortage calculation.

4. **Blanket Purchase Agreements**: Factors in long-term supplier agreements, which may not have specific order quantities assigned yet but represent committed supply over time.

5. **Sales Quotations**: Includes unconfirmed sales quotations as potential demand. Helpful for forecasting but may overestimate actual needs if not managed carefully.

6. **Sales Orders**: Adds all active sales orders to the demand calculation.

7. **Blanket Sales Agreements**: Includes recurring or long-term sales commitments which may not yet have specific delivery dates or quantities but represent ongoing demand.

8. **Manufacturing Orders**: Considers open production orders. These create demand for raw materials and components and also represent future supply for finished goods.

9. **Stock Transfer Requests**: Includes planned movements of stock between warehouses.

10. **Reserve Invoices**: Includes sales that are already invoiced but not yet delivered, ensuring committed demand is reflected in the shortage report.

---

➡️ Learn more on how to configure the [Shortage Report](../../scheduling/gantt-chart/material-shortage.md#configuration-1).
