---
sidebar_position: 5
---

# Resource Balancing

Resource Balancing allows you to automatically select the most optimal resource for a specific task within a Manufacturing Order, improving efficiency by considering factors like operation quantity, resource availability, and calendar schedules.

> This feature is applicable to resources defined in the **Production Process**, **Manufacturing Order**, or [Alternative Resources](./gantt-chart/alternative-resources.md).

:::danger
It is strongly recommended to test this option in a non-production environment before enabling it in a live system.
:::

---

## Description

Resource Balancing allows you to select the most suitable resource for a task in a Manufacturing Order by evaluating multiple factors like operation quantities, related times, resource availability, and resource calendars. Instead of relying on a default resource, the system calculates the optimal resource that can complete the work in the least amount of time.

Below is an **example** that illustrates how the system selects the most efficient resource based on predefined parameters such as run time and availability.

**Quantity on Manufacturing Order**: 100

**Bill of Materials' Resources on Operation**:

- M1 10pcs/h
- M2 10 pcs/h
- M3 5 pcs/h
- M4 5 pcs/h
- M5 10 pcs /h

**Scheduling Direction**: Forward (from date 01/01)

(all machines are available 24/7)

| Resource | Run Time | Available From | Finish Time         |
|----------|----------|----------------|---------------------|
| M1       | 10 hours   | 10.01 10:00 AM | 10.01 08:00 PM      |
| M2       | 10 hours   | 11.01 05:00 PM | 12.01 03:00 AM      |
| M3       | 20 hours   | 09.01 01:00 AM | **09.01 09:00 PM**  |
| M4       | 20 hours   | 10.01 05:00 AM | 10.01 01:00 AM      |
| M5       | 10 hours   | 10.01 07:00 PM | 11.01 05:00 AM      |

>Note: **The system will choose M3 for this work**

## Prerequisites

### Run Time

Ensure that all machine-type resources used in the Production Process and Manufacturing Orders have a **Run Time greater than 0**.

- This setting can be configured either in the **Production Process** or the **Manufacturing Order**.

1. Production Process

    ![Production Process Runtime](./media/resource-balancing/production-process-runtime.webp)

2. Manufacturing Order

    ![Manufacturing Order Run Time](./media/resource-balancing/manufacturing-order-runtime.webp)

### General Settings Options

To activate Resource Balancing, navigate to:

:::info Path
    Administration → System Initialization → General Settings → ProcessForce tab → Bill of Materials and Manufacturing Orders
:::

Check the "Use Resource Balancing" check box to use the option.

#### Resource Balancing Blockage

If any Machine-type Resource has a Run Time set to zero in any Production Process configuration, you’ll receive a **Resource Balancing Blockage** form when trying to enable the option.

- This form displays the list of blocked resources.
- Update their Run Time to proceed with activation.

![Resource Balancing Blockage](./media/resource-balancing/resource-balancing-blockage.webp)

## Usage

Once enabled, **Resource Balancing** is automatically executed during:

- Opening the [Scheduling Board / Semi-finished Product Scheduling form](./scheduling-board.md#how-to-open-scheduling-board--semi-finished-product-scheduling)
- Changing the **Planned Quantity** or Manufacturing Order header **dates**

The system dynamically re-evaluates and assigns the best resource based on the updated data.

---

## Log files

You can activate a log feature to track all actions related to Resource Balancing, which includes detailed data on every scheduling and rescheduling action.

:::danger
Enabling detailed logs may impact system performance.
:::

To activate the option, perform the following steps:

1. Navigate to: C:\Program Files\sap\SAP Business One\AddOns\CT\ProcessForce.
2. Open the ProcessForce.exe.config file with a text editor.
3. Change the value from "false" to "true" in the following line:

        ```config
        <add key="SchedulingBalancingEnabled" value="false" />
        ```

   After enabling the feature, log files will be saved in the default directory:
   `C:\ProgramData\CompuTec\ProcessForce\ResourceBalancing`.

   A separate file is saved for changes made for each Operation.

---

## Why Use Resource Balancing?

- **Efficiency**: Automatically picks the fastest-available resource.
- **Reduced Manual Planning**: No need to manually assign resources per operation.
- **Improved Throughput**: Makes full use of available capacity across machines.
- **Real-Time Adjustments**: Dynamically reacts to date or quantity changes.

## When Not to Use

- If resources don’t have proper calendars or defined run times.
- If scheduling decisions must be manually controlled due to external constraints.

:::danger
Always test in a staging environment before enabling in production.
:::

---
