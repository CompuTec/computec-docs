---
sidebar_position: 1
---

# Overview

A Gantt chart is a kind of bar chart that presents a project schedule. In ProcessForce Gantt chart is used to present and modify the production process.

Here you can find information about the options available from the Gantt chart level.

:::info
    Please remember that on the Gantt chart, it is only possible to schedule forward, not backward (forward and backward scheduling is possible in other places in ProcessForce, e.g., on Manufacturing Order).
:::

:::caution
    The Gantt Chart option can be used only when the Direct Data Access mode is enabled.
:::

:::caution
    Please note that it is required for a user to have Gantt Authorizations assigned to use this option.
    <details>
    <summary>Click here to find out more</summary>
    <div>
    ![Gantt Chart Authorization](./media/overview/gantt-chart-authorization.webp)
     </div>
</details>

:::

## Header

![Scheduling Header](./media/overview/scheduling-header.webp)

**Go to Today** – shows the current date and time.

**Days/Weeks/Months drop-down list** – a choice made here changes the scale of view, e.g., choosing Days results in displaying a day stretched across the chart.
<details>
    <summary>Click here to expand</summary>
    <div>
    This option allows you to change the view ratio. There are three templates:

    **Template 1:**
    | Date - Beginning of the week | 21.03.22 | | | | | | | 28.03.22 | | | | | | |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Day Names | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday | Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
    
    ![Template 01](./media/overview/template-01.png)

    **Template 2:**
    | Date - Beginning of the week | 21.03.22 | | | | | | | 28.03.22 | | | | | | |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Day Number | 21 | 22| 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 1 | 2 | 3 |

    ![Template 02](./media/overview/template-02.png)
    
    **Template 3:**
    | Date - Each Day | 21.03.22 | | | | | | | | | | | | | | | | | | | | | | | | 22.03.22 | | | | | | | | | | | | | | | | | | | | | | | | 
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | Hours | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |

    ![Template 03](./media/overview/template-03.png)

    The above templates can be switched based on the user's user adjustment in the Day/Week/Month option or manually by extending or cutting the scroll bar.

    **By Day/Week/Month Option**:
    ![Day Week and Month](./media/overview/day-week-month.png)

    **By Manually**:
    ![Manually](./media/overview/manually.png)
    </div>
</details>

You can set a default value for every Gantt chart opening in [General Settings](/docs/processforce/user-guide/system-initialzation/general-settings/general-tab/).

**Refresh** – updates the view.

**Show tool Tip checkbox** – shows Task details; tick the checkbox and click on any Operation on the chart.
<details>
    <summary>Click here to expand</summary>
    <div>
    ![Gantt Tool Tip Checkbox](./media/overview/gantt-tool-tip.png)
    </div>
</details>

**Show Interruptions** – shows breaks in production based on [Resource Calendar](/docs/processforce/user-guide/scheduling/resource-calendar/).
<details>
    <summary>Click here to expand</summary>
    <div>
    ![Show Interruptions](./media/overview/show-interruptions.jpg)
    </div>
</details>

**Historical resources** – show historical data.

**Show Resource Chart** – shows the use of Resources or a Resource Group over a selected period. Click [here](/docs/processforce/user-guide/scheduling/gantt-chart/show-resources-chart/) to find out more.
<details>
    <summary>Click here to expand</summary>
    <div>
    ![Show Resource Chart](./media/overview/Sort.jpg)
    </div>
</details>

**Undo/Redo** – moves to previous/next step.

**Reschedule on the drop** – automatically reschedules on a drag & drop action without clicking the Update button.

**Sort** – sets a queue for Manufacturing Orders based on defined parameters (this is Resource Planning Board tab related option. Click [here](/docs/processforce/user-guide/scheduling/gantt-chart/resource-planning-board/) to find out more).
<details>
    <summary>Click here to expand</summary>
    <div>
    ![Sort](./media/overview/Sort.jpg)
    </div>
</details>

**Hide Duration** – it hides duration on Manufacturing Order rows in Resource Planning Board.
<details>
    <summary>Click here to find out more</summary>
    <div>
    ![Hide Duration](./media/overview/hide-duration.png)
    </div>
</details>

**Shortages, Production Equipment, Materials** – Material Shortages report related options. Click [here](/docs/processforce/user-guide/scheduling/gantt-chart/material-shortage/) to find out more.

## Tabs

### Manufacturing Orders

Displays a view of the realization of Manufacturing Orders in time.

![Manufacturing Order tab](./media/overview/manufacturing-order-tab.webp)

It is possible to expand Manufacturing Orders to check all their Operations and to expand Operations to check all their Resources.

### Resources

Presents a view of the execution of Manufacturing Orders broken down into resources.

![Gantt chart Resources](./media/overview/gantt-chart-resources.webp)

**Slider** – on the top of a Gantt chart, there is a bar representing a specific period with activities displayed. The slider is the highlighted part of the bar. Moving it over the bar (by left-clicking and dragging it) displays different parts of a Gantt chart in a main tab:

![Slider](./media/overview/slider.webp)

You can expand or shrink the slider by clicking, holding, and moving its left or right edge. This will affect the range of the Gantt chart part displayed in the main tab.

**Columns filtering** – click one of the icons next to each of the column headers to filter rows in this column:

![Filter Columns](./media/overview/filter-columns.webp)

**Find related Manufacturing Order** – right-click on a Resource row, choose Show on Chart, and then the required Manufacturing Order number. Now the chart will move to the beginning of the pointed Manufacturing Order.

![Find Manufacturing Order](./media/overview/find-manufacturing-order.webp)

**Colors of a Taskbar**:

- grey – Queue Time,
- yellow – Setup Time,
- blue – Run Time,
- green – Stock Time.

**Red exclamation mark** – red exclamation mark means that the marked Manufacturing Order will not be completed on the Required Date.

**Resource context menu** – right-click on a Taskbar to get more options:

![Resource Context Menu](./media/overview/resource-context-menu-2.webp)

- Reschedule – allows rescheduling the Task to another Resource. Rescheduling requires an adequately configured Production Process. Define the Resource and its Alternative. Click here to check how to do this.

- Divide – you can set to use more Resources to complete a Task.

    Choosing the option leads to a new form. Right-click on a Resource row and click Add Resource:

    ![Divide](./media/overview/divide-add-resource.webp)

    Use sliders to set the quantity for each of the Resources:

    ![Divide Sliders](./media/overview/divide-sliders.webp)

    :::caution
        Please remember that the remaining quantity must be 0 (all sliders on the far right position) to proceed with the division.
    :::

- Extend work – this option allows adding to a Task additional Run Time based on the Exceptions tab in the [Resource Calendar](/docs/processforce/user-guide/scheduling/resource-calendar/) form, e.g., if a Resource is set to be available every Monday to Friday, 7:00 AM - 4:00 PM and based on this Task performed on the Resource finishes on Monday 9:00 AM, it is possible to extend work on Friday to finish the Task (with related Resource Calendar exception set for the Friday, 4:00 PM - 6:00 PM)

- Freeze – blocks this Task scheduling (on a Resource assigned to a specific Manufacturing Order). When you use Freeze for a Task, its time constraints stay the same, even when the whole Manufacturing Order is rescheduled to some other time.

<details>
<summary>R6: Freeze a Resource from a Manufacturing order level</summary>
<div>
:::info
Since ProcessForce 10.0 R6 version, it is possible to freeze a specific Resource from the Manufacturing Order level
:::

:::info Path
Production → Manufacturing Order → Manufacturing Order
:::

![Manufacturing Order](./media/overview/manufacturing-order-freeze.png)
</div>
</details>

- Lock – works the same way as the Freeze option but affects a whole Manufacturing Order, all related Tasks (instead of just one Task)

### Resource Planning Board

Click [here](/docs/processforce/user-guide/scheduling/gantt-chart/resource-planning-board/) to find out more.
