---
sidebar_position: 1
---

# Adding a New Task

A new task can be added to the CompuTec PDC application in three ways:

- by adding a task to the operator through [Management Board](./management-board.md).
- by choosing desired values from the drop-down lists.
- by scanning a barcode assigned to a specific value.

## Adding a New Task by Choosing Desired Values from Drop-down Lists

1. To add a new task, click the "task adding" icon in the main form:

    ![Adding Task](./media/adding-new-task/adding-task.webp)
2. At the top of the form, you can select tasks either by Resource or by Manufacturing Order. If a specific resource is configured for a device in the [settings](../administrator-guide/setting-up-the-application/overview.md), only the By Resource option will be available, displaying operations assigned to that resource without a search field. The following view illustrates the By Resource selection. To see the workflow for the By Manufacturing Order option, refer to point 4. You can set the default search method in the [settings](../administrator-guide/setting-up-the-application/overview.md).

    ![By Resource](./media/adding-new-task/by-resource.png)
3. Choose Resource from the Resource Code drop-down list. All the tasks related to the specific resource will be displayed on the list. You can filter Resources by choosing a particular Resource Group first.

    ![By Resource](./media/adding-new-task/by-resource.webp)

    Task on the list can have one of the following statuses:

    ![In Progress Icon](./media/adding-new-task/in-progress-icon.webp) - in progress

    ![Assigned Icon](./media/adding-new-task/assigned-icon.webp) - assigned. A specified task is already assigned to a specific employee (check the "Assign to" column for details)

    ![Not Assigned Icon](./media/adding-new-task/not-assigned-icon.webp) - task not assigned to any of the employee

    ![Saved Icon](./media/adding-new-task/saved-icon.webp) - saved, not closed. You can determine in [the general settings](../administrator-guide/setting-up-the-application/overview.md#processforce-settings) if tasks with this status will be available from the list.

    Click the required row and click the + icon or the 'Start Run' icon (Clicking the icon in the Start Run column automatically adds Tasks to the main panel with the status Run) to add the task:

    ![Start Run](./media/adding-new-task/pdc-start-run.webp)
4. You can create a Task by using the By Manufacturing Order option:

    ![By Manufacturing Order](./media/adding-new-task/by-manufacturing-order.webp)

    Choose Manufacturing Order from drop-down lists. If Manufacturing Orders are connected to Sales Order, you can choose them first. It will filter the Manufacturing Orders drop-down list to orders related to a specified Sales Order.
5. Choosing Manufacturing Order filters Operation drop-down list to Operations connected to specified Manufacturing Order.
6. Choosing Operation, filters Resource connected to specified Operation.
7. Click the + icon to add the task to the main menu.
8. If the selected resource is currently in use, an alert will be displayed. You can choose to use the resource anyway by clicking "Yes," which will stop the work on the resource from another document. Resources that are currently in downtime are marked accordingly on the list and are not available for selection.
9. The main form appears with the new task tile.

    ![Added Task](./media/adding-new-task/added-task.webp)
10. A task tile displays information about the picked Operation and Resource.

    ![Task Details](./media/adding-new-task/pdc-task-details.webp)

    1. Manufacturing Order number.
    2. Operation code, sequence number, and operation name.
    3. Resource code and resource name.
    4. Planned quantity.
    5. Run time start date and period. In the second row (next to the run time icon), a period is displayed.
    6. Setup start date and time. In the second row (next to the set-up time icon), a period is displayed.

        :::warning
            The color of the setup date and time, and the run date and time, may be different:

            - black – planned date and period,
            - green – time type is running currently,
            - blue – time type recorded in CompuTec PDC application (changes the record in a database after clicking the confirmation icon on the confirmation tab).
        :::
    7. Item code and item description.
    8. This icon communicates an operation status:

        ![Set up Icon](./media/adding-new-task/setup-icon.webp) - set up time,

        ![Run time Icon](./media/adding-new-task/runtime-icon.webp) - run time,

        ![Downtime Icon](./media/adding-new-task/downtime-icon.webp) - downtime,

        ![Pause Icon](./media/adding-new-task/pause-icon.webp) - the task is paused.

        Clicking it leads to a task panel where you can set details of a specific task.
11. Click the status icon to set periods for specific tasks. For more information, click [here](./task-activities/overview.md).
