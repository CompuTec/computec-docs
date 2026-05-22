---
sidebar_position: 4
---

# Actions in Analytics

**Actions** allow users to perform business operations directly from selected rows in **CompuTec AppEngine Analytics** report.  

When users select one or more rows in a table, **CompuTec AppEngine** automatically displays the **Actions** available for that data. For example, users can release a production order, post a document, or run a custom plugin action without leaving the report.  

**Actions** are available only when they are enabled for both the **Source** and the **Variant**.

:::note[FOR DEVELOPERS]
Plugin developers can create custom **CompuTec AppEngine Actions** that become available automatically in **Source** configuration after the plugin is installed. [Read more](https://learn.computec.one/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-actions)
:::

## How actions work in Analytics

**Actions** in **CompuTec AppEngine Analytics** are configured on two levels:

1. **Source**: defines which actions are available and how report values are mapped to action parameters
2. **Variant**: defines which actions are visible

Users then execute these configured actions directly from the report. This separation allows you to reuse the same action across multiple report variants while controlling how it appears in each one.

For example:

- In a **Production** variant, you can show the **Release Production Order** action.
- In a **Warehouse** variant, you can hide that action and show only warehouse-related actions.
- In a **Manager** variant, you can rename actions to use more business-friendly labels.

## Configure actions in a source

To configure an action in a source:

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

7. Select **action** you want to activate.

    ![Screenshot showing the Actions tab in CompuTec AppEngine Source Manager with a list of available analytics actions. The primary subject is the action row for Quantity and Time Registration, highlighted by a large blue arrow. The wider environment includes the action table with columns for Active, Name, Plugin, and Description, and the surrounding analytics configuration interface. The tone is functional and informational.](media/actions/aa-config-action-in-src-7.png)

8. In the **Additional Information** section, define how the action receives values from the report:

    - (optional) **Object Type**: Defines how the action should behave depending on the object it is applied to.  
    Example: If an action can work with both the **Sales Orders** and **Manufacturing Orders** object types, you can specify the rules for the selected object type.
    - **Required**: If enabled, the action will not be executed when the mapped value is empty.
    - **Source Type**: Choose how the value will be provided:
        - **Constant**: A fixed value defined manually
        - **Field**: A value taken from a column in the report
    - **Value Source**: Select the column from the report that should be mapped to the action parameter.

    ![additional information section in analytics actions](media/actions/aa-config-action-in-src-8.png)

9. Click **Use in Source** to apply the mapping.

    ![alt text](media/actions/aa-config-action-in-src-9.png)

10. Click **Update**.

    ![alt text](media/actions/aa-config-action-in-src-10.png)

11. The action is now activated and available in the report.

## Map action parameters

Actions require some information to know which data should be used when the action is executed, for example, the document's internal number ``DocEntry`` or its unique code ``Code``. These values are called parameters.

For each parameter, you can define where the value should come from.

![alt text](media/actions/aa-config-action-in-src-00.png)

Available **Source Types** include:

- **Constant** value
- **Field** value

### Constant value

Use **Constant** value when the action should always receive the same value.

    ![alt text](media/actions/aa-config-action-in-src-constant.png)

Example:

- ``DocType``: ``17``
- ``Status``: ``Release``
- ``Type``: ``Header``

### Field value

Use **Field** value when the action should receive data from a selected row in the report.

    ![alt text](media/actions/aa-config-action-in-src-field.png)

When the user selects a row and runs the action, the system takes the value from the mapped column and passes it to the action automatically.

### Required parameters

You can mark a parameter as **Required**.

    ![alt text](media/actions/aa-config-action-in-src-required.png)

If a required parameter is empty, the action cannot be executed.

For example, if the report row does not contain a value for a required document number, the action will not run.

## Configure actions in a variant

After an action is added to a source, you can control its visibility in each variant.

For example, you may have different variants such as ``Sales``, ``Warehouse``, or ``Production``. Each variant can have its own permissions and therefore only the relevant actions should be enabled for that specific variant.

By configuring **Action Settings**, you ensure that users see only the actions that are appropriate for their role and report context.

To configure **Action Settings** in a variant:

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

12. The action is now available in the report.

## How actions appear in reports

The visibility of the **Actions** button depends on the actions enabled in the selected variant, the currently selected report rows, and whether all required parameter values are available for those rows.

If a required value is missing, the related action may be hidden or unavailable.

### No visible actions

If no actions are visible, the **Action** button is hidden.

    ![alt text](media/actions/aa-config-action-in-src-ap-1.png)

### Visible actions

If one or more actions are visible, the report displays the **Action** button. Clicking it opens the list of available actions.

    ![alt text](media/actions/aa-config-action-in-src-ap-2.png)

## Execute actions in a report

To execute an action:

1. Open the chosen **Variant**.
2. Select **one or more rows** in the **Table View** of the report.

    ![alt text](media/actions/aa-config-action-in-src-ap-23.png)

3. Click **Actions**.

    ![alt text](media/actions/aa-config-action-in-src-ap-3.png)

4. Choose the **action** you want to run.

The system uses the selected rows and the configured parameter mappings to execute the action.

If no rows are selected, the action cannot be executed.

## Best practices

- Use **Field** value mappings whenever the action depends on report data.
- Use **Constant** value mappings for fixed values that should always be passed.

## Troubleshooting

### Action is not visible

Check the following:

- The action is added to the source
- The action is enabled in the variant
- The user has permission to use the action

### Action is disabled or does not run

Check the following:

- At least one row is selected
- All required parameters are mapped
- Required values are not empty
- The action supports the selected row data

### Wrong data is passed to the action

- Review the parameter mappings and verify that the correct report columns are assigned to the correct action parameters.
