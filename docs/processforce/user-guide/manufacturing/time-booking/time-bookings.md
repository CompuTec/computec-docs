---
sidebar_position: 2
---

# Time Bookings

Time Bookings in SAP Business One enable users to record, manage, and analyze the time and cost of resources engaged in manufacturing processes. This function supports accurate production cost tracking, operational efficiency monitoring, and compliance with scheduling and resource utilization goals.

Key Benefits

- Monitors actual versus planned time and cost.
- Enables granular tracking of work by resource or team.
- Supports corrections and adjustments through integrated reports.
- Ensures accurate financial and production reporting.

Time Bookings can be created independently or directly from a Manufacturing Order.

To access Time Booking function, navigate to:

:::info Path
    Production → Time Bookings → Time Bookings
:::

---

## Creating Time Booking

To create a new Time Booking, follow these steps:

1. In the Time Bookings form, click the selection circle in the Resource Code or Resource Name field.
2. A Data Selection window appears, listing all resources assigned to Manufacturing Orders with statuses: **Scheduled**, **Released**, or **Finished**.
3. Select the desired records by clicking the first column in the respective rows.

    ![Creating Time Bookings](./media/time-bookings/time-booking-list-of-resources.webp)

4. Set the **document dates** in the header and fill in the **Time Booking details** in the table.
5. The system automatically calculates time and cost values.  
    - You may manually adjust **cost** values.  
    - Manual cost edits do **not** affect the time fields.
6. Click "Add" to finalize the Time Booking entry.

    ![Time Bookings](./media/time-bookings/time-booking-added.webp)

### Creating from a Manufacturing Order

You can also access Time Booking from the **context menu** of a Manufacturing Order:

- **Header Level:** Copies all related resources and their times into the new Time Booking.
- **Resource Line Level:** Copies only the selected resource’s time entry.

    ![Manufacturing Order Recording Time](./media/time-bookings/manufacturing-order-recording-time-timebookings.webp)

## Working with Multiple Resources

When multiple resources of the same type (for example, two identical machines) are used for an operation, define the number of resources in the **No. of Resources** column.

| Scenario | Description | Example |
|-----------|--------------|----------|
| **Single Resource** | Run time remains unchanged. | Run Time = 10 hours → 1 Resource → Planned Run Time = 10 hours |
| **Multiple Resources** | Run time is divided by the number of resources. | Run Time = 10 hours → 2 Resources → Planned Run Time = 5 hours |

During **cost calculation**, the system aggregates total work time:  
If 2 resources each work 5 hours, total cost is calculated for **10 resource-hours**.

![Time Bookings](./media/time-bookings/time-bookings-no-of-resources.webp)

## The Use Resource Calendar Checkbox

The *Use Resource Calendar* Option

When the **Use Resource Calendar** checkbox is enabled, time is calculated based on the resource’s predefined working schedule defined in the [Resource Calendar](../../scheduling/resource-calendar.md).

| Mode | Description |
|------|--------------|
| **Disabled (Default)** | Time is calculated from *Start/End Date* and *Time* fields, excluding non-working hours, holidays, and exceptions. |
| **Enabled** | Time is calculated based on the Resource Calendar settings for precise alignment with actual working hours. |


## Time Recording Report

All recorded time entries, including any modifications, can be reviewed in the [Time Recording Report](time-corrections.md#time-recording-report).  
This report provides a consolidated view of production time data for audit and validation purposes.

---
