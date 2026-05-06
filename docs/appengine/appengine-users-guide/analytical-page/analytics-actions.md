---
sidebar_position: 4
---

# Actions in Analytics

**Actions** allow users to perform business operations directly from selected rows in **CompuTec AppEngine Analytics** report.  

It works similarly to options in a right-click menu - when users select one or more rows in a report, **CompuTec AppEngine** automatically displays the **Actions** available for that data. For example, users can release a production order, post a document, or run a custom plugin action without leaving the report.  

**Actions** are available only when they are enabled for both the **Source** and the **Variant**.

:::note[FOR DEVELOPERS]
Plugin developers can create custom **CompuTec AppEngine Actions** that become available automatically in **Source** configuration after the plugin is installed. Read more
:::

## How Actions Work in Analytics

**Actions** in **CompuTec AppEngine Analytics** are configured on two levels:

1. **Source**: defines which Actions are available and how report values are mapped to Action parameters
2. **Variant**: defines which Actions are visible

Users then execute these configured Actions directly from the Report. This separation allows you to reuse the same Action across multiple report Variants while controlling how it appears in each one.

For example:

- In a **Production** variant, you can show the **Release Production Order** action.
- In a **Warehouse** variant, you can hide that action and show only warehouse-related actions.
- In a **Manager** variant, you can rename actions to use more business-friendly labels.

## Configure Actions in a Source

To configure an **Action** in a **Source**:

1. Open **CompuTec AppEngine Launchpad**.

    ![CompuTec AppEngine Launchpad screen showing the analytics workspace selected in the left navigation panel, with header text CompuTec AppEngine and visible menu items for analytics and launchpad in a clean application interface](media/actions/aa-config-action-in-src-1.png)

2. Go to **Analytics**.

    ![Screenshot of the Actions tab in CompuTec AppEngine Source Manager showing fields for configuring an action mapping including Object Type, Required, Source Type, and Value Source](media/actions/aa-config-action-in-src-2.png)

3. Navigate to **Source Manager**.

    ![navigation to source manager](media/actions/aa-config-action-in-src-3.png)

4. Click the **source** you want to edit, for example, **Sales Orders**.

    ![choosing a source](media/actions/aa-config-action-in-src-4.png)

5. Click the **edit icon**.

    ![edit icon click](media/actions/aa-config-action-in-src-5.png)

6. Open the **Actions** tab.

    ![Actions tab selected in CompuTec AppEngine Source Manager with a large blue arrow pointing to the Actions tab. The primary subject is the analytics action list row for Quantity and Time Registration inside a table with headers Active Name Plugin Description. The wider environment is a business analytics configuration screen in CT AppEngine with navigation and report source controls, and the tone is functional and informational.](media/actions/aa-config-action-in-src-6.png)

7. Select **Action** you want to activate.

    ![Screenshot showing the Actions tab in CompuTec AppEngine Source Manager with a list of available analytics actions. The primary subject is the action row for Quantity and Time Registration, highlighted by a large blue arrow. The wider environment includes the action table with columns for Active, Name, Plugin, and Description, and the surrounding analytics configuration interface. The tone is functional and informational.](media/actions/aa-config-action-in-src-7.png)

8. In the **Additional Information** section, define how the **Action** receives values from the report:

    - (optional) **Object Type**: Defines how the Action should behave depending on the object it is applied to.  
    Example: If an **Action** can work with both the **Sales Orders** and **Manufacturing Orders** object types, you can specify the rules for the selected object type.
    - **Required**: If enabled, the Action will not be executed when the mapped value is empty.
    - **Source Type**: Choose how the value will be provided:
        - **Constant**: A fixed value defined manually
        - **Field**: A value taken from a column in the report
    - **Value Source**: Select the column from the report that should be mapped to the Action parameter.

    ![additional information section in analytics actions](media/actions/aa-config-action-in-src-8.png)

9. Click **Use in Source** to apply the mapping.

    ![alt text](media/actions/aa-config-action-in-src-9.png)

10. Click **Update**.

    ![alt text](media/actions/aa-config-action-in-src-10.png)

11. The **Action** is now activated and available in the report.

## Map Action Parameters

**Actions** require some information to know which data should be used when the **Action** is executed, for example, the document's internal number ``DocEntry`` or its unique code ``Code``. These values are called parameters.

For each parameter, you can define where the value should come from.

![alt text](media/actions/aa-config-action-in-src-00.png)

Available **Source Types** include:

- **Constant** value
- **Field** value

### Constant Value

Use **Constant** value when the **Action** should always receive the same value.

    ![alt text](media/actions/aa-config-action-in-src-constant.png)

Example:

- ``DocType``: ``17``
- ``Status``: ``Release``
- ``Type``: ``Header``

### Field Value

Use **Field** Value when the Action should receive data from a selected row in the report.

    ![alt text](media/actions/aa-config-action-in-src-field.png)

When the user selects a row and runs the Action, the system takes the value from the mapped column and passes it to the **Action** automatically.

### Required Parameters

You can mark a parameter as **Required**.

    ![alt text](media/actions/aa-config-action-in-src-required.png)

If a required parameter is empty, the Action cannot be executed.

For example, if the report row does not contain a value for a required document number, the Action will not run.

## Configure Actions in a Variant

After an **Action** is added to a **Source**, you can control its visibility in each **Variant**.

For example, you may have different variants such as ``Sales``, ``Warehouse``, or ``Production``. Each variant can have its own permissions and therefore only the relevant actions should be enabled for that specific variant.

By configuring **Action Settings**, you ensure that users see only the actions that are appropriate for their role and report context.

To configure **Action Settings** in a **Variant**:

1. Open **CompuTec AppEngine Launchpad**.

    ![alt text](media/actions/aa-config-action-in-src-v1.png)

2. Go to **Analytics**.

    ![alt text](media/actions/aa-config-action-in-src-v2.png)

3. Navigate to **Source Manager**.

    ![alt text](media/actions/aa-config-action-in-src-v3.png)

4. Click the **Source** you want to edit.

    ![alt text](media/actions/aa-config-action-in-src-v4.png)

5. Click the **edit icon**.

    ![alt text](media/actions/aa-config-action-in-src-v5.png)

6. Open the **Variants** tab.

    ![alt text](media/actions/aa-config-action-in-src-v6.png)

7. Select the **variant** you want to edit.

    ![alt text](media/actions/aa-config-action-in-src-v7.png)

8. Open **Action Settings**.

    ![alt text](media/actions/aa-config-action-in-src-v8.png)

9. Set **Visibility** to show or hide an **Action** in a specific **Variant**.

    ![alt text](media/actions/aa-config-action-in-src-v9.png)

10. Click **Update** to save changes in the **Variant**.

    ![alt text](media/actions/aa-config-action-in-src-v10.png)

11. Click **Update** to save the **Source** changes.

    ![alt text](media/actions/aa-config-action-in-src-v11.png)

12. The **Action** is now available in the report.

## How Actions Appear in Reports

The visibility of the **Actions** button depends on the **Actions** enabled in the selected **Variant**, the currently selected report rows, and whether all required parameter values are available for those rows.

If a required value is missing, the related **Action** may be hidden or unavailable.

### No Visible Actions

If no **Actions** are visible, the **Action** button is hidden.

    ![alt text](media/actions/aa-config-action-in-src-ap-1.png)

### Visible Actions

If one or more **Actions** are visible, the report displays the **Action** button. Clicking it opens the list of available **Actions**.

    ![alt text](media/actions/aa-config-action-in-src-ap-2.png)

## Execute Actions in a Report

To execute an **Action**:

1. Open the chosen **Variant**.
2. Select **one or more rows** in the **Table View** of the report.

    ![alt text](media/actions/aa-config-action-in-src-ap-23.png)

3. Click **Actions**.

    ![alt text](media/actions/aa-config-action-in-src-ap-3.png)

4. Choose the **Action** you want to run.

The system uses the selected rows and the configured parameter mappings to execute the **Action**.

If no rows are selected, the **Action** cannot be executed.

## Best Practices

- Use **Field** value mappings whenever the **Action** depends on report data.
- Use **Constant** value mappings for fixed values that should always be passed.

## Troubleshooting

### Action is not visible

Check the following:

- The Action is added to the Source
- The Action is enabled in the Variant
- The user has permission to use the Action

### Action is disabled or does not run

Check the following:

- At least one row is selected
- All required parameters are mapped
- Required values are not empty
- The Action supports the selected row data

### Wrong data is passed to the Action

- Review the parameter mappings and verify that the correct report columns are assigned to the correct Action parameters.
