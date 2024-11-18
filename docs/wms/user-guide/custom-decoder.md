---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Custom Decoder

Custom decoders in CompuTec WMS allow you to define unique data scanning rules and recognize barcode information within specific workflows, streamlining data processing and accuracy in Warehouse Management System transactions. The steps and configuration options detailed here guide users through setting up and testing custom decoders in CompuTec WMS, highlighting the potential for customized, efficient scanning operations.

---

## Requirements

To implement custom decoders, ensure the following setup is complete:
    - CompuTec WMS Server installed
    - CompuTec WMS objects installed in the database
    - MAUI WMS client installed (Barcoder Setup configuration from the MAUI on Windows level only)
    - The latest scanner simulator (for testing)
    - Correct configuration in the Scanner tab:
        (Prefix, Suffix, Scanner Group Separator)

    ![WMS](./media/wms-log-in.webp)

    ![Scanner](./media/wms-scanner.webp)

The settings in the scanner simulator and the Scanner tab have to be the same:

![Scanner](./media/wms-scanner-symulator.webp)

## Usage

Choose the option in the main menu:

![Barcode](./media/wms-barcode-setup.webp)

### Decoder Definition

![Decoder](./media/wms-barcode-setup-main.webp)

Here, you can view a list of pre-defined custom decoders.

Each decoder includes the following details:

#### Columns

- **Code** – Unique decoder ID.
- **Name** – Decoder name.
- **Enabled** – Status of the decoder (enabled/disabled).

#### Buttons

- **Edit** – Modify an existing decoder.
- **Test** – Test the configuration.
- **Delete** – Delete the chosen decoder
- **Create new** – Add a new decoder
- **Close** – Exit/close the window.

### Decoder Selection Rules

Define which decoders are assigned to specific WMS transactions or forms. You can refresh the list by clicking the filter button.

![Decoder Selection Rules](./media/wms-decoder-rules-main.webp)

- **WMS Transaction** – Filter the table to show results for either all transactions or a specific one.
- **WMS Form Id** – Filter the list by a specific Form ID.
- **Edit** – Edit a decoder assignment.
- **Delete** – Delete a decoder assignment.
- **Create new** – Create a decoder assignment.
- **Close** – Exit/close the window.

### Decoder Definitions

Define how the decoder processes data, including rules and variables.

    ![Code Definition](./media/wms-decoder-definitions.webp)

- **Decoder Code** – Auto-generated Decoder's ID.
- **Decoder Name** – Name of the decoder.
- **Enabled** – Toggle decoder on/off.
- **Variables Definition** – Define variables for decoder rules.
- **Test** – Test decoder functionality.

The table provides a detailed list of rules for a specific decoder:

- **Name** – The name of the rule.
- **Type** – The rule's type.
- **Enabled** – Enables or disables the rule.
- **Edit** – Allows modification of the rule.
- **Delete** – Deletes the rule.
- **New Rule** – Creates a new rule (requires selecting a rule type from a drop-down menu).
- **Add/Update** – Saves or updates the decoder.
- **Back** – Returns to the previous window.

### Variables Definition

![Input Variables](./media/wms-variables-definition.webp)

This section allows you to define variables for use in the decoder's rules.

**Types of variables**:

- **Input Variables** – Serve as input parameters for rules. By default, the BARCODE input variable captures the entire text read from a barcode.
- **Internal Variables** – Temporary variables that function as both input and output parameters. Use a BusinessObject value by prefixing the variable name with '#'.
- **Output Variables** – Act as output parameters for rules.
- **Use GS1 Decoder** – Enable this option to automatically decode GS1 prefixes and pass the data to CompuTec WMS when working with GS1 barcodes. If disabled, each data element must be manually defined.

#### Columns [01]

- **Name** – Name of the variable. It has to be unique.
- **GS1 Code** – A GS1 segment selected from a predefined list, processed during the decoder's input and output stages.
- **Pass to output** – Determines whether the variable is passed to CompuTec WMS.
- **Description** – A brief description of the temporary variable.

#### Buttons

- **New** – Create a new variable.
- **Delete** – Remove an existing variable.
- **Save** – Save all defined variables.
- **Back** – Return to the previous window.

### Rules

Create and manage rules to define how data is processed.

1. **SQL Rules** – this rule allows proceeding SQL queries

    ![Edit Rules](./media/wms-decoder-sql-rule.webp)

    This rule assigns the result of an SQL query to output variables. Input and internal variable values can be used as parameters, with input variable names starting with @. The column names in the query result must match the output variable names, and the query should return a single row.

    - **Name** – Name of the rule.
    - **Enabled**– Enable or disable the rule.
    - **Stop processing more rules on failure** – Prevent further rules from executing if this rule fails.
    - **Query** – Enter the SQL Query here.
    - **New** – Add an input or output variable by selecting from a drop-down list.
    - **Copy** – Copy the variable name to the clipboard.
    - **Delete** – Delete the variable.
    - **Test Query** – Test the SQL query by entering input variable values in the Test Value field.
    - **Save** – Save the rule.
    - **Back** – Return to the previous window.

2. **Regexp** – This rule allows you to get data using regular expressions.

    ![Edit Rule](./media/wms-decoder-edit-rule.webp)

    This rule uses regular expressions to extract data from a barcode or variables. Named groups in the expression must match the output variable names.

    - **Name** – The rule's name.
    - **Enabled** – Enable or disable the rule.
    - **Stop processing more rules on failure** – No more rules will be processed upon failure of a rule.
    - **Pattern** – Field for entering the regular expression.
    - **New** – Add a new output variable by selecting from a drop-down menu.
    - **Copy** – Copy the name of a variable to the clipboard.
    - **Delete** – Delete the variable.
    - **Save** – Save the rule.
    - **Back** - Return to the previous window.

3. **Replace** – This rule allows you to replace a portion of text.

    With this rule, you can modify specific code text or variables.

    ![Edit Rule](./media/wms-decoder-edit-rule-replace.webp)

    - **Name** – The rule's name.
    - **Enabled** – Enable or disable the rule.
    - **Old Value** – A searched value.
    - **New Value** – A new value.
    - **Save** – Save the rule.
    - **Back** – Return to the previous window.

### **Testing Decoder**

    Use the test option to validate decoder behavior with sample barcode values.

    ![Barcode definitions](./media/wms-decoder-testing.webp)

    - **Decoder Code** – The unique ID of the decoder.
    - **Decoder Name** – The name of the decoder.
    - **Enabled** – Enable or disable the decoder.
    - **Barcode** – A field to enter the barcode.
    - **GS** – Click to insert a GS1 separator at the specified location in the Barcode field. The separator must be defined in the CompuTec WMS options (Scanner tab).
    - **Test** – Test the decoder's functionality with a specific barcode. Clicking will display the output variable values sent to CompuTec WMS.
    - **Back** – Return to the previous window.

**Assigning rule to spot/screen in CompuTec WMS**

![Edit Assignment](./media/wms-decoder-rule-assigning.webp)

You can assign a specific decoder to a chosen transaction or screen in CompuTec WMS.

- **Decoder** – Select te decoder to assign.
- **WMS Transaction** – Choose the relevant CompuTec WMS transaction.
- **WMS Form Id** – Enter the screen ID for the CompuTec WMS form.
- **Optional condition** – If assigning multiple decoders to the same screen, you can define an SQL query with conditions to determine which decoder to use.
- **Save** – Save the assignment.
- **Back** – Return to the previous window.

**Current Form Details** – Provides additional information for a specific screen in CompuTec WMS.

:::note
    This option is only available in the new CompuTec WMS Windows client.
:::

Press and hold the left CTRL key while logging into CompuTec WMS to access this screen. The screen will become available once you click the highlighted icon:

    ![CompuTec WMS Client](./media/wms-decoder-current-document-details.webp)

    ![Current Form Details](./media/wms-decoder-icon.webp)

Here, you get access to the following information:

1. **The Info tab**:

    - **Transaction** – the name of a transaction.
    - **FormId** – a screen name.
    - **Supported scanning segments** – data that CompuTec WMS reads from barcodes and uses in this screen.
2. **The Business Object tab** – here, you can preview variable values available in a specific CompuTec WMS screen.

3. **The Decoder tab** – here is information on a specific decoder.

    ![WMS Decoder](./media/wms-decoder-tab.webp)

    - **Current Decoder Code** – The ID of the decoder assigned to this screen.
    - **Current Decoder Name** – The name of a decoder assigned to this screen.
    - **Assign decoder transaction** – Assign a decoder to a specific transaction.
    - **Assign decoder screen** – Assign a decoder to the current transaction and screen.
    - **Enter Barcode** – a field where barcode can be entered.
    - **GS** – Click to insert a GS1 separator at the selected position in the Barcode field. The separator must be defined in the CompuTec WMS options under the Scanner tab.
    - **Test barcode** – Test the decoder’s functionality with a specific barcode. Clicking this will display the output variable values sent to CompuTec WMS.
    - **Back** – Return to the previous window.

## Examples

### Example 1

The scanned code consists of the following URL address: `https://address.com/ItemCode/BatchNumber/dd-mm-yyyy`.

    We want to extract and pass the following information to CompuTec WMS from this address: Item Code, Batch Number, and Expiry Date, with the date converted to the YYMMDD format.

    1. Create a new decoder.
    2. Create the following variables:

        1. Internal variables:

            1. Day.
            2. Month.
            3. Year
        2. Output variables:

            1. BatchNumber (GS1 Code 10, pass to output: enabled).
            2. ItemCode (GS1 Code 91, pass to output: enabled).
            3. ExpireDate (GS1 Code 17, pass to output: enabled).
    3. Create the following rules:

        1. Regexp type rule (rule name 1)

            1. Set the input variables to BARCODE.
            2. Set the following output variables: BatchNumber, ItemCode, Day, Month, Year.
            3. Set the following for the regular expressions:
                ```ruby
                ^https?:\/\/.*?\/(?\<ItemCode>[^\/]+)\/(?\<BatchNumber>[^\/]+)\/(?\<Day>\d{2})-(?\<Month>\d{2})-(?\<Year>\d{4})$.
                ```

        2. An SQL-type rule (rule name 2).

            1. Set the following input variables: Day, Month, Year.
            2. Set the following output variables: ExpireDate.
            3. For the SQL query, set:
                                ```sql
                                SELECT Right('@Year',2) || '@Month' || '@Day' as "ExpireDate" FROM DUMMY
                                ```

    4. Save rules and decoder.
    5. Test.

        ![Test](./media/wms-decoder-testing-2.webp)

### Example 2

The scanned code includes the 3202 prefix, which is not natively supported in CompuTec WMS. We want this data to be recognized as a quantity, with the last two digits representing the decimal places.

    1. Create a decoder.
    2. Create the following variables (check the USE GS1 Decoder option)

        1. Input variables:

            InputQuantity (GS1 Code 3202).
        2. Output variables:

            Quantity (GS1 Code Quantity, pass to output: enabled)
    3. Create the following rules:

        1. An SQL-type rule (rule name 1)

            1. Set input variables to InputQuantity.
            2. Set output variables to Quantity.
            3. Set the following SQL query:

                        ```sql
                        SELECT CASE WHEN LENGTH('@InputQuantity') > 0 THEN LEFT('@InputQuantity',4) || '.' || RIGHT('@InputQuantity', 2) ELSE '' END AS "Quantity" FROM DUMMY
                        ```

    4. Save the rules and decoder.
    5. Test the decoder to ensure it functions as expected.

    ![Barcode Definition](./media/wms-decoder-testing-3.webp)

### Example 3

You can display messages in WMS by creating custom queries. In the output, select ErrorMessage from the available options.

![Error Message](./media/error-message.png)

Here’s an example of a query you can use:

```sql
SELECT
 CASE WHEN '@ItemCode' = 'N1' THEN '' ELSE 'bad item [test error msg]' END AS "ErrorMsg"
,'@ItemCode' AS "ItemCodeOut"
FROM DUMMY
```

Watch the demonstration video [here](https://www.youtube.com/watch?v=8JUxu5RUcvA). This video shows how to configure and display messages in the CompuTec WMS client using Barcoder Setup.

You can also use your own query and rules. Below are some examples:

**Example A**

![Example](./media/example-01.jpg)

**Example B**

![Example](./media/example-02.jpg)

---
CompuTec WMS’s custom decoder functionality enhances data flexibility and accuracy by allowing tailored data processing through barcode rules. With options for defining variables, creating complex rules, and testing configurations, users can adapt WMS workflows to specific operational needs, optimizing scanning and transaction processing.
