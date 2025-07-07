---
sidebar_position: 3
---

# Batch Template, Serial Template Definition

You can configure the default format of the batch number generator to create batch and serial numbers during the receipt of Purchase and Production Orders. This setup enhances traceability and simplifies the batch and serial management process. The number-generating template can include essential details such as date, time, item number, or prefix.

:::note Path
    Administration → Setup → Inventory → Batch Template Definition
:::

Here, you can configure the format of the serial number generator for creating serial numbers.

:::note Path
    Administration → Setup → Inventory → Serial Template Definition
:::

---

## Batch/Serial Template Allocation

The Batch Template form is used to define the Batch number for products that are Batch traceable. The formula is based on TSQL statements, providing a flexible Batch Number creation.

![Batch Diagram](./media/batch-serial-template-definition/batch-diagram.webp)

Batch templates (as well as Serial templates) can be set on three different levels:

- [general](#general-level) for all Batch-traced Items
- [for Item Group](#item-group-level)
- [for a specific Item](#item-level)

If a Template is not specified for a specific level, a Template from a level above is used.

### General level

:::note
    Administration → System Initialization → General Settings → ProcessForce tab → Inventory tab → Batch and Serial
:::

![General Settings Template](./media/batch-serial-template-definition/general-settings-templates.webp)

You can determine when a Batch number is created based on the status of the Manufacturing Order. To do this, check the "Batch Number Generated at MOR" checkbox and select one of the available options. Depending on the chosen status, the Batch will be generated either when the Manufacturing Order is created with the specified status or upon a status change.

:::caution
    Please remember that when the Batch Number generated at the MOR option is checked, it is impossible to use Classification options on a [Batch Template](#defining-batch-template).
:::

## Item Group level

:::info path
    Administration → Setup → Inventory → Item Groups → ProcessForce tab
:::

- When checkboxes are unchecked, it is possible to set a Batch or Serial template for an Item Group.
- When checkboxes are checked, General Settings Batch or Serial template is used.

![Item Groups](./media/batch-serial-template-definition/item-groups.webp)

## Item Level

:::info
    Inventory → Item Details → Batch Details tab
:::

- If checkboxes are unchecked, a batch or serial template can be set for an item.
- Item Group Settings Batch or Serial template is used when checkboxes are checked.

![Item Group Inherit](./media/batch-serial-template-definition/item-details-batches-inherit.webp)

## Defining Batch Template

:::info Path
    Administration → Setup → Inventory → Batch Template Definition
:::

It is possible to define a Batch Template as a distribution number or a Batch Template assigned for suppliers. To do that, pick the desired category: Dist Number (for distribution Batches) or Suppl Batch (for Supplier Batches) tab.

![Batch Tempate](./media/batch-serial-template-definition/batch-template.webp)

It is possible to define a Serial Number Template as a distribution number, a number for manufacturing items, or a Lot Number. To do that, pick the desired category (Dist Number, Manufacturing, or Lot Number tab).

:::info Path
    Administration → Setup → Inventory → Serial Template Definition
:::

![Serial Template](./media/batch-serial-template-definition/serial-template.webp)

When adding a new Batch/Serial template, the date and counter fields have the following default values:

- Date = yyyy-MM-dd i.e. year-month-day
- Time = hh:mm:ss, i.e., hours:minutes:seconds
- Counter = 1. This is the starting value of the counter; it will increase starting with this value
- Maximum batch number = 32 characters, as per SAP Business One.

:::caution
    Please remember that the Formula field is planned for 255 signs. More extended formulas will not work correctly. You can use your database procedures and scalar-valued functions.
:::

![Batch Graph 2](./media/batch-serial-template-definition/batch-graf-2.webp)

<details>
    <summary>How to reach Batch Number Transation Report from Goods Receipt PO</summary>
    <div>
        ![Batch Number Transactions Report](./media/batch-serial-template-definition/batch-number-transactions-report.webp)
    </div>
</details>

### Example 1: Date and Counter

- Select the date function
- To string another element of data enter '+' sign for MS SQL version and '||' for HANA version
- To enter text or other symbols, enter the value between ‘ and ', e.g. '-'
- Select the counter function
- Click the Validate Formula button to check the Batch template syntax
- Click the Add button.

![Batch Template: Counter, Date](./media/batch-serial-template-definition/batch-template-date-counter.webp)

### Example 2: Date and Time

- Select the date function
- To string another element of data enter '+' sign for MS SQL version and '||' for HANA version
- Select the counter function
- Add the hours and minutes notions to the date. To do this, add the : separator, hh = hours, the : separator, and mm = minutes after the date format
- Click the Validate Formula button to check the Batch template syntax
- Press OK.

![Batch Template Date Time](./media/batch-serial-template-definition/batch-template-date-time.png)

### Example 3: Adding a prefix

- To enter text or other symbols as a prefix to the batch number, use `[value]`, in this example, `PF` to get the PF prefix
- To string another element of data enter the + sign for MS SQL version and || for HANA version
- Select the date function
- To string another element of data enter '+' sign for MS SQL version and '||' for HANA version
- Select the counter function
- Click the Validate Formula button to check the Batch template syntax
- Click the Add button.

![Prefix](./media/batch-serial-template-definition/batch-template-prefix.webp)

### Example 4: Embedding Item number

- To add the two first letters of the Item number:
  - enter left,
  - followed by (
  - select the item code function
  - followed by a ,
  - followed by the number of item code digits
  - followed by )
- To string another element of data enter the + sign for MS SQL version and || for HANA version
- Select the date function
- To string another element of data enter the + sign for MS SQL version and || for HANA version
- Select the counter function
- Click the Validate Formula button to check the Batch template syntax
- Click the Add button.

![Item Number](./media/batch-serial-template-definition/batch-template-item-number.webp)

### Example 5: Incremental Batch Number starting with five zeros, and a maximum length of 6

- Select the date function
- To string another element of data enter the + sign for MS SQL version and || for HANA version
- To add an increasing number starting with five leading zeros
  - enter right,
  - followed by (
  - enter five zeros
  - followed by a ,
  - followed by the length of the total batch number
  - followed by )
- To string another element of data, enter + sign
- Select the counter function
- Click the Validate Formula button to check the Batch template syntax
- Click the Add button.

![Counter Template](./media/batch-serial-template-definition/batch-template-template.webp)

To see related video content click [here](https://www.youtube.com/playlist?list=PLtT6kgaz5YnfAO8B4ux_lXkmQyHmPCuR-).

### Example 6: Using a specific value from a document in the Batch generation template

You can use others than specified in the Batch Template form fields to be incorporated in a Batch template. In this example, a Warehouse value is used. Batch template generation is unsuitable, but we can set User-Defined Values for the Classification field to incorporate a Warehouse value into a Batch name.

1. Create a new query in Query Generator (Tools → Queries → Query Generator), and type in $[PDN1,WhsCode] (the name of the warehouse field) in the Select field.

    ![Query Generator](./media/batch-serial-template-definition/query-generator.webp)

    **To check a field name**:

    1. navigate to Upper Menu → View → System Information and check the option (or click Ctrl + Shift + I):

    2. point the field with a cursor – the name of the field will be displayed in System Messages Log:

        ![Result](./media/batch-serial-template-definition/field-name-check.webp)

    3. Choose the name and Query Category and click Save:

        ![Save](./media/batch-serial-template-definition/save-query.webp)

2. Click the Classification field on Goods Receipt PO and go to Tools → Customization Tools → User-Defined Values - Setup:

    ![User Defined Values Setup](./media/batch-serial-template-definition/user-defined-values-setup.png)

    Choose the previously created query, set other values, and click Update.

3. From now on Classification field will be set on the Whse value on every change on the Whse field. Now, if you use Classification in Batch Template, a value for a warehouse will be incorporated in the template.

   In the same way, you can set values from a different field in the classification field and use them in a batch template.

### Example 7: Current date + shelf interval

The following formula allows for generating a Batch name with the current date + shelf lifetime added.

#### SAP HANA Studio – test

To use the query for a specific Item, use the following data:

    ```sql
    SELECT cast(ADD_DAYS(TO_DATE(CURRENT_DATE), (SELECT TO_INTEGER (RTRIM (T0."U_ShelfTime", 'd'))
    FROM "@CT_PF_OIDT" T0 WHERE T0."U_ItemCode" = 'your item code')) as NVARCHAR(36)) FROM DUMMY
    ```

#### Batch Template formula

The full query result has to be converted/cast as text:

    ```sql
    cast(ADD_DAYS(TO_DATE(CURRENT_DATE), (SELECT TO_INTEGER (RTRIM (T0."U_ShelfTime", 'd')) FROM "@CT_PF_OIDT" T0 WHERE T0."U_ItemCode" = %ItemCode%)) as NVARCHAR(36))
    ```

The result of the formula has to be a text value (NVARCHAR type, 36 characters; it is performed using the 'cast' command).

## Defining Serial Template

Serial Template defining process looks the same as the Batch Template defining process shown in the examples above.

### Generate serial numbers using custom procedure

#### <u>Requirements</u>

**Fields (order and types are important)**:

@NumberOfSerials int, @Counter int, @Date nvarchar(30), @Classification nvarchar(10), @ItemCode nvarchar(50), @MORNumber nvarchar(10), @PickNumber nvarchar(10)

**Procedure must generate 3 columns**

"SerialNumber" nvarchar(36) , "LotNumber" nvarchar(36), "ManufacturingSerialNumber" nvarchar(36)

![Serial Template](./media/batch-serial-template-definition/serial-template.png)

---
