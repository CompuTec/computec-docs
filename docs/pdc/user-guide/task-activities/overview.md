---
sidebar_position: 1
---

# Overview

## Functionality Available within the Task Panel

Clicking a status icon on a task tile in the main form leads to the task panel, where you can find and set details about work periods.

![Task Tile](./media/task-activities/task-tile.webp)

### Setup Time Tile

This tile represents set-up time – a period needed to prepare a Resource before starting production. Planned, actual, and booked set-up duration is displayed. Click the icon on the tile to set the start and end times of the set-up time.

### Run Time Tile

This tile represents run time – a work period on a specific Resource. Click the icon on the tile to set the start and end times of the run time. Planned, actual, and booked run duration is displayed. The reported quantity is also shown.

### Downtime Tile

This tile represents downtime – a period of a break in work brought on by accident, e.g., a power cut. Click the icon on the tile to set the start and end time of the downtime. Click [here](./downtime.md) to find out more.

### Input/Output Properties

You can check if any Items are set as Input or Output for a specific Operation.

<details>
<summary>Click here to expand</summary>
<div>
Defining Input/Output Items:
:::info Path
Production → Bill of Materials → Production Process → Operation Bind tab → Bind Operations
:::
![Production Process](./media/task-activities/pdc-input-output.webp)
</div>
</details>

![Operation Bind](./media/task-activities/pdc-operation-bind.webp)

### Operation Properties

![Operation](./media/task-activities/main-operation-from.webp)

Operation properties and related data are displayed here. These properties can be defined in SAP Business One with ProcessForce (they cannot be defined from the CompuTec PDC level) and assigned to an operation or to an operation on a specific manufacturing order.

#### Defining Operation Properties

:::info Path
    Administration → Setup → Production → Operation Properties
:::

![Operation Property](./media/task-activities/operation-property.webp)

#### Operation Property Assigning

:::info Path
    Production → Routings → Operations → Properties tab
:::

![Operation Property assigning](./media/task-activities/operation-property-assigning.webp)

#### Properties for Operation

:::info Path
    Production → Manufacturing Order → Manufacturing Orders → Operations tab → Operations tab → [Operation context menu]
:::

![Properties for Operation](./media/task-activities/properties-for-operation.webp)

Using form settings, you can define which columns (and in what order) are displayed here. Click [here](../../administrator-guide/setting-up-the-application/overview.md) to find out more.

Specific Operation Property can have a particular value assigned to it in Manufacturing Order. This value can be numeric (e.,g. more than 10, equal to 10) or word (e.,g. for color: yellow, green, red). In the example below, there is value *advanced* for property *Gluing type*:

![Operation Properties Values](./media/task-activities/operation-properties-values.webp)

On the property form in CompuTec PDC, you have the values assigned in SAP B1 displayed:

![Operation Properties Form](./media/task-activities/operation-property-form.webp)

Those are predefined planned values. You can confirm that these are correct on production (by checking the Checked checkbox and clicking the Save icon). You can also change the values if real properties differ from planned ones:

![Planned and Current Values](./media/task-activities/planned-and-current-values.webp)

In the example above, current v, values differ from planned: Employee decided to use simple Gluing type instead of a planned advanced one.

To record the set value, click the Save icon at the bottom of the Operation Properties form.

Operation properties values recorded from CompuTec PDC level for specific Manufacturing Order Operation can be viewed in SAP B1:

:::info Path
    Production → Manufacturing Order → Manufacturing Orders → Operations tab → Operations tab → [Operation context menu]
:::

![Recorded Values for Operation](./media/task-activities/recorded-values-for-operation.webp)

In the screenshot below, we can see the recorded value from the example above example:

![Recorded Values](./media/task-activities/recorded-values.webp)

### Resource Properties

![Resource Property](./media/task-activities/resource-property-pdc.webp)

Resource Properties and data connected to them are displayed here. Resource Properties can be defined in SAP B1 with ProcessForce (cannot be defined from CompuTec PDC level) and assigned to Resource or specifically to Resource on specific Manufacturing Order.

#### Defining Resource Property

:::info Path
    Administration → Setup → Production → Resource Properties
:::

![Resource Property](./media/task-activities/resource-property.webp)

#### Resource Property Assigning

:::info Path
    Production → Routings → Resources
:::

![Resource Property assigning](./media/task-activities/resource-property-assigning.webp)

#### List of Resource Properties

:::info Path
    Production → Manufacturing Order → Manufacturing Orders → Operation tab → Resource Properties tab
:::

![List of Resource Properties](./media/task-activities/list-of-resource-properties.webp)

You can define which columns (and in what order) are displayed here using form settings. Click [here](../../administrator-guide/setting-up-the-application/overview.md) to find out more.

Specific Resource Property can have particular values assigned to it on a Manufacturing Order. This value can be numeric (e.,g. more than 10, equal to 10) or word (e.g., for pressure: high, low). In the example below, the value High is set up for property Pressure:

![Resource Property Manufacturing Order](./media/task-activities/resource-property-manufacturing-order.webp)

On the Resource Property form in CompuTec PDC, you have the values assigned in SAP B1 displayed:

![Resource Property in PDC](./media/task-activities/resource-property-in-pdc.webp)

Those are predefined planned values. You can confirm that these are correct on production (by checking the Checked checkbox and clicking the Save icon). You can also change the values if real properties differ from planned ones:

![Planned Current Values](./media/task-activities/planned-current-values.webp)

Note that the above example values differ from the planned: The employee used Low pressure instead of High.

To record the set value click the Save icon at the bottom of the Resource Properties form.

Resource properties values recorded from CompuTec PDC level for specific Manufacturing Order Resources can be viewed in SAP Business One:

:::info Path
    Production → Manufacturing Order → Manufacturing Orders → Operations tab → Operations tab → [Resource context menu] → Properties > Recorded Values for Resource
:::

![Recorded Values for Resource](./media/task-activities/recorded-values-for-resource.webp)

In the screenshot below, we can see the recorded value from our example:

![Resource PDC Recorded Value](./media/task-activities/resource-pdc-recorded-value.webp)

### Item Details

Item Details are displayed here.

Current values can be recorded against original values (in a similar way as in Operation Properties or Resource Properties).

You can set the order of the records by desired value (e.g., Property Name).

![Item Details](./media/task-activities/pdc-item-details.webp)

### Tools

Tools Properties are displayed here. If the specified Resource is connected to a Tool and the Tool has Properties defined, you can check it and confirm it (in the same way as Resource Properties).

You can set the order of the records by desired value (e. g. Tool Name).

![Tools](./media/task-activities/pdc-tools.webp)

### Bill of Materials Preview

Displays default printing layout set up for a specific SAP Business One user (logged in to CompuTec PDC). If the user has no default printing layout defined, nothing is displayed after choosing this option.

<details>
    <summary>Click here to check how to assign a default printing layout</summary>
    <div>
        1. Go to SAP B1 → Administration → Setup → General → Report and Layout Manager. In the form choose the List tab and go to Add-On Layouts > ProcessForce and choose Bill of Materials:

            ![BOM](./media/task-activities/bom.webp)
        2. Now, on the Layouts tab, a list of all layouts assigned to the Bill of Materials is listed. You can import new layouts or edit the current ones. To find out more about working with the Crystal Reports software in SAP Business One, check [the related SAP Business One documentation entry](https://help.sap.com/docs/SAP_BUSINESS_ONE/68a2e87fb29941b5bf959a184d9c6727/99dc3f80935640a38b30a37dc688d6e8.html?version=9.3&locale=en-US).
        3. Open Bill of Materials (1), click Layout Designer icon (2), choose a required layout (3) and click Set as Default and click OK:

            ![BOM Layout](./media/task-activities/bom-layout.webp)
        4. Now, a Bill of Materials preview generated for a specific BOM, based on a default layout, is available from the PDC level > Task Tile > Bill of Materials preview icon.
        5. It is required to input database credentials to see the BOM preview. To avoid doing it each time, you can input the credentials in the application settings.
    </div>
</details>

### Bill of Materials Instructions

Here, you can find instructions stored in the Bill of Materials → Instruction tab.

:::info Path
    Production → Bill of Materials → Bill of Materials
:::

![BOM Instruction](./media/task-activities/bom-instructions.webp)

### Manufacturing Order Preview

Displays default printing layout set up for a specific SAP Business One user (logged in to CompuTec PDC). If the user has no default printing layout defined, nothing is displayed after choosing this option.

<details>
    <summary>Click here to check how to assign a default printing layout</summary>
    <div>
        1. Go to SAP B1 → Administration → Setup → General → Report and Layout Manager. In the form choose the List tab and go to Add-On Layouts → ProcessForce and choose Manufacturing Order:

            ![Printing Layouts](./media/task-activities/printing-layouts.webp)
        2. Now, on the Layouts tab, all layouts assigned to Manufacturing Order are listed. You can import new layouts or edit the current ones. To find out more about working with the Crystal Reports software in SAP Business One, check t[he related SAP Business One documentation entry](https://help.sap.com/viewer/68a2e87fb29941b5bf959a184d9c6727/9.3/en-US/99dc3f80935640a38b30a37dc688d6e8.html).
        3. Open Manufacturing Order (1), click the Layout Designer icon (2), choose a required layout (3) and click Set as Default and click OK:

            ![Default Manufacturing Order](./media/task-activities/default-manufacturing-order.webp)
        4. Now, a Manufacturing Order preview generated for a specific MOR, based on a default layout, is available from the PDC level → Task Tile → Manufacturing Order preview icon.
        5. It is required to input database credentials to see the MOR preview. To avoid doing it each time, you can input the credentials in the [application settings](../../administrator-guide/setting-up-the-application/overview.md).
    </div>
</details>

### Attachments

You can see, browse and open Attachments connected to a current Manufacturing Order.

![Attachments](./media/task-activities/attachments.webp)

### Production Issue

:::caution
    This option is active when a specific Resource has a default issue Warehouse (or Warehouse and location if option Enable Bin Locations is checked) defined. (On an attempt to use the option without this setup, a system message on the lack of the settings will be displayed).
:::

#### How to Enable Bin Locations

:::info Path
    SAP B1 → Administration → Setup → Inventory → Warehouses → General tab
:::

![Bin Locations](./media/task-activities/bin-locations.webp)

#### How to Define Warehouse and Location for Resource

:::info Path
    SAP B1 → Production → Routings → Resources → Details tab
:::

![Resource Default Issue](./media/task-activities/resource-default-issue.webp)

Use this option to issue Items to production.

![Issue to Production](./media/task-activities/issue-to-production.webp)

Items needed for production can be chosen from the list. After selecting an Item, a list of all its components will be displayed. You can select all of the said components. If all needed components are available in a warehouse, click the thumbs-up icon.

Materials issued to production are automatically subtracted from a warehouse. There is no need to confirm it from CompuTec WMS or SAP B1 level.

### Production Receipt

:::caution
    This option is active when a specific resource has default receipt Warehouse (or Warehouse and location if option Enable Bin Locations is checked) defined. (On an attempt to use the option without this set up, a system message on the lack of the settings will be displayed).
:::

#### How to Enable Bin Locations

:::info Path
    SAP B1 → Administration → Setup → Inventory → Warehouses → General tab
:::

![Bin Locations](./media/task-activities/bin-locations.webp)

#### How to Define Warehouse and Location for Resource

:::info Path
    SAP B1 → Production → Routings → Resources → Details tab
:::

![Resource Default Receipt](./media/task-activities/resource-default-receipt.webp)

To perform production receipt, choose produced Item from the list. Click the following icon to generate a batch number: ![Batch Number Icon](./media/task-activities/batch-number-icon.webp)

Click the thumb-up icon to confirm and perform it again in the panel on the right. A message In Progress. Issue from Production will be displayed.

Receipt from production has to be confirmed from SAP Business One level by going to Production → Inventory Transactions → Pick Receipts. Pick the required document, click the right mouse button, and choose Receipt from production.

Check also the [Quick Receipt](../customization/optional-functions/quick-receipt.md) option.

### Team Log in

![Assign Task](./media/task-activities/assign-task.webp)

A team leader can choose Employees that are to be assigned to the task. There is no limit for Employees to be assigned to one task.

:::caution
    Please note that an Employee must have [Labour](../../administrator-guide/setting-up-the-application/overview.md) assigned to be able to be chosen from the list.
:::

Click checkboxes next to required Employees and click an arrow left icon to assign them to a Task.

Next to each of the Employees, there is an icon indicating if an Employee is currently assigned to any Task (a man icon) or not (the sleep icon). Click the icon to display a list of Tasks to which an Employee is assigned.

The option also supports Teams (a standard SAP Business One option that can be set up in Human Resources > Employee Master Data > Membership tab). Each Team is represented by a header containing a Team name (1 and 2 in the example screenshot above). You can display or hide a list of members (up/down icon next to a Team name). A Header also contains a percentage value: it is a percentage of people in the team without any Task assigned.

Click the OK icon after choosing all required Employees (by moving them to the Assigned section).

After the team leader selects employees and confirms the choice, the task will be set to "Run" status for every assigned employee.

When a team leader finishes work, it is concluded for every assigned employee. Additionally, the team leader sets up the produced quantity on a resource upon completing the work.

One Time Booking document is created for a resource and the specified employees, instead of creating a separate Time Booking for each employee.

Click [here](/docs/processforce/user-guide/manufacturing/time-booking/teams) to find out more about related ProcessForce options.

Each employee can finish work independently, such as to change resources or leave the workstation. Finishing work by one employee does not finish it for others. An employee does not declare quantity when finishing work.

### Activity

This is a standard SAP Business One functionality. You can set up an activity (e.g. Conversation, Note) and activity type (e.g. General, Internal) in [ProcessForce General Settings](../../administrator-guide/setting-up-the-application/overview.md#processforce-settings). When choosing the Activity option from the CompuTec PDC level, an Activity with predefined settings is created. This way, an activity is connected to a specific Manufacturing Order, Operation, Resource (depends on from which Task tile it is created), and Employee (logged in to CompuTec PDC).

### Technical Instruction

Here, you can find instructions stored in Manufacturing Order → Operations → Instruction tab.

:::info Path
    Production → Manufacturing Order → Manufacturing Order
:::

![Manufacturing Order Instructions](./media/task-activities/manufacturing-order-instructions.webp)

### Additional Options

Some of the available options are not present on a Task Tile by default. You can reach them by using the [Customization option](../customization/overview.md).

## Example

In this section, you can find a step-by-step guide on setting work time on a task based on a specific example.

### Adding a New Task

To get information on this, click [here](../adding-new-task.md).

### Click a Status Icon on a Task Tile to Open a Task Panel of a Specific Task

![Example New Task](./media/task-activities/example-new-task.webp)

### Setting set-up time

1. click the set-up icon on the set-up time tile. You can predefine whether clicking starts counting time from a current moment or leads to setting up the start date and time manually panel (the Show Date Picker option).
2. the set-up time starts to count. It will be communicated by the set-up time and period turning green, the period changing in real-time, and by the set-up icon on the set-up tile blue highlight.

    ![Example Setting Up Time](./media/task-activities/example-setting-up-time.webp)
3. click the setup icon again to end the setup time. This can be done after logging out and logging back in. This action will stop the time counting, indicated by the setup time and period turning blue.

    ![Example Set Up Time Stop](./media/task-activities/example-set-up-time-stop.webp)

    :::caution
        Clicking the status icon on a task tile displays (or hide if it is displayed) a log of actions performed on a current task in the CompuTec PDC application. You can delete an activity by clicking the X icon next to it.
    :::

    ![Example Set Up Time Entry](./media/task-activities/example-set-up-time-entry.webp)

### Setting Run Time

Run time must be set in the same way as setup time – only using the run time tile.

Set-up time ends automatically after starting a run time.

If the Confirmation button is clicked before setting the end of run time, a communication will be displayed:

![Example Message](./media/task-activities/example-message.webp)

Click the "Yes" button to set the end of the run time, leading to the Confirmation Panel, or the "No" button to cancel the action.

### Setting Downtime

Click [here](./downtime.md) to find out more.

### Confirmation of Time Periods in a Task

:::warning
    All changes in periods are set in the CompuTec PDC application. Changes are posted in a chosen database only after posting a document from the Confirmation panel.
:::

1. After setting all the periods, click the "complete" icon: ![Complete Icon](./media/task-activities/complete-icon.webp)

    The Confirmation Panel will appear:

    ![Confirmation Panel](./media/task-activities/confirmation-panel.webp)

        You can register quantities for setup time (if needed; this option is available only when setup time has been registered) and for run time (number of items produced during work time). If the Damaged Quantity field is filled, the Reason Code and Remarks for rework fields will be displayed and available for entry:

    ![Wrong Quantity](./media/task-activities/wrong-quantity.webp)
2. After setting up quantities you can decide to keep the task open after registering work (no check boxes checked); to close the task; or to pass it to another employee (the Select Employee field will be displayed in this case).

    ![Final Option](./media/task-activities/final-options.webp)

    **Close Task** – checking this option causes the following:

    - a task with this option checked is removed from the list of tasks to do – and receives a Closed status on a Gantt chart
    - in the Manufacturing Order, on the Operation tab, the Resource line is grayed out and the value in the Resource column Active is set to "N"
    - a Resource for an Operation with the Close Task option enabled is not available for selection for a new task on CompuTec PDC.

    When all resources in an operation have their Active status set to "N," the operation receives a Finished status.

    To unblock a resource for operation within the scope of a manufacturing order, add a Timebooking correction document and ensure the Close Task option is unchecked.

    **Pass to other** – this option adds the task to a specified employee. After accepting the task, it is passed to the chosen employee. It has to be started manually from the chosen employee level.

    **Pass to other Resource** – this option allows you to transfer a task to another resource when registering a time booking or downtime. Upon selecting this option, a drop-down list of alternative resources defined for the current resource will appear. You can only switch the task to an alternative resource with the same machine type as the current resource. Click [here](/docs/processforce/user-guide/scheduling/gantt-chart/alternative-resources) to learn more about defining alternative resources in ProcessForce.

    To be able to pass a Task to another Resource it is required to check Is enabled Move to Other Resource in [Employee Master Data](../../administrator-guide/setting-up-the-application/overview.md#setting-up-the-pdc-application).

    Click the confirmation icon to register work.
3. Number of Resources – in this field, you can specify the number of resources of the same type for which work is to be recorded. For example, if you have a resource called "Oven," you can define how many units of this equipment were used, such as 5 ovens. By default, the value is set to 1. If a higher value is entered, the recorded duration represents the cumulative effort of each piece of equipment.

#### Example

We recorded 48h, and 25s of work and set up the Number of Resources to 5. The effort is multiplied by 5 (work was performed on 5 pieces of equipment simultaneously) which results in 240h, 2m, 5s of accumulated work duration.

![Time Bookings Multiple Resources](./media/task-activities/time-bookings-multiple-resources.webp)

:::info Path
    Please mind that the Number of Resources field value is set up to 1 by default, regardless of the Number of Resources field value of a corresponding Resource record in ProcessForce.
:::

### Recording Quantity without Closing a Task

You can use the plus icon to record quantity without closing a Task: ![Record Quantity Icon](./media/task-activities/record-quantity-icon.webp)

This opens a panel similar to the Confirmation Panel, where you can enter the required quantities. Entering these quantities updates the Reported Quantity on the Task Panel. The task remains open and active afterward.
