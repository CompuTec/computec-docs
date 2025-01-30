---
sidebar_position: 5
---

# Recommended Start/End Date

In manufacturing planning, accurately defining order timelines is crucial to ensure smooth operations and resource management. The Recommended Start Date and Recommended End Date fields help users set expected completion timelines for manufacturing orders. These fields provide flexibility in scheduling without impacting Material Requirements Planning (MRP) calculations.

![Recommended Start and End](./media/recommended-start-end-date/recommented-start-end.webp)

These two fields allow the user to enter the expected order completion dates. They allow you to record expectations as of the time frame of the order.

1. **Recommended Start Date**: allows you to specify a start date other than the Required Date.
2. **Recommended End Date**: is calculated based on Recommended Start Date and Lead Time.

These dates play an essential role in scheduling when recalculating lead times:

- **Forward Scheduling**: the Start Date is used to determine when production can begin based on resource availability.
- **Backward Scheduling**: the End Date is used to ensure that the order is completed just in time for the required delivery.

These dates do not impact MRP calculations.

The **Recommended Start-End Date/Time** feature allows users to determine the start or end date of a Manufacturing Order based on the chosen scheduling method.

- In **Forward Scheduling**, the system sets the planning start date as today or as soon as an available resource is ready. Users can define a Recommended Start Date to indicate the earliest possible start time for the order.
- In **Backward Scheduling**, the system calculates the latest possible end date to ensure the order is completed on time. Users can set a Recommended End Date accordingly.
