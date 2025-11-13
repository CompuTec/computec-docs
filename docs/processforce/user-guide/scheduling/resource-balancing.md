---
sidebar_position: 5
---

# Resource Balancing

Resource Balancing allows the system to automatically select the most optimal resource for a specific task within a Manufacturing Order (MO).  
It improves scheduling efficiency by evaluating parameters such as:

- Operation quantity  
- Resource availability  
- Calendar schedules  
- Operation run times  

Rather than relying on a default resource, the system calculates which resource can complete the work in the shortest possible time.

> This feature applies to resources defined in:

- Production Process
- Manufacturing Order
- [Alternative Resources](./gantt-chart/alternative-resources.md)

:::danger
It is strongly recommended to test this option in a **non-production environment** before enabling it in a live system.
:::

---

## How-to Guide

Resource Balancing allows you to select the most suitable resource for a task in a Manufacturing Order by evaluating multiple factors like operation quantities, related times, resource availability, and resource calendars. Instead of relying on a default resource, the system calculates the optimal resource that can complete the work in the least amount of time.

Below is an **example** that illustrates how the system selects the most efficient resource based on predefined parameters such as run time and availability.

- **Quantity on Manufacturing Order**: 100 pcs
- **Scheduling Direction**: Forward (from date 01/01)
- All machines are available **24/7**

| Resource | Run Rate | Run Time | Available From | Finish Time         |
|----------|----------|----------------|---------------------| ----------|
| M1       | 10 pcs/h | 10 hours   | 10.01 10:00 AM | 10.01 08:00 PM      |
| M2       | 10 pcs/h | 10 hours   | 11.01 05:00 PM | 12.01 03:00 AM      |
| M3       | 5 pcs/h | 20 hours   | 09.01 01:00 AM | **09.01 09:00 PM**  |
| M4       | 5 pcs/h | 20 hours   | 10.01 05:00 AM | 10.01 01:00 AM      |
| M5       | 10 pcs/h | 10 hours   | 10.01 07:00 PM | 11.01 05:00 AM      |

>Note: **The system will choose M3 for this work**

## Prerequisites

### Run Time

Resource Balancing depends on valid **Run Time** values for machine-type resources.  
Make sure all such resources have **Run Time > 0**.

#### 1. In the Production Process

1. Open the Production Process form.  
2. Check that each machine-type resource in the operations list has a **Run Time greater than zero**.

   ![Production Process Runtime](./media/resource-balancing/production-process-runtime.webp)

#### 2. In the Manufacturing Order

1. Open the Manufacturing Order.  
2. Review the operations tab.  
3. Verify that each machine-type resource has a **Run Time greater than zero**.

   ![Manufacturing Order Run Time](./media/resource-balancing/manufacturing-order-runtime.webp)

### General Settings Options

To activate Resource Balancing, navigate to:

:::info Path
    Administration → System Initialization → General Settings → ProcessForce tab → Bill of Materials and Manufacturing Orders
:::

Check the "Use Resource Balancing" check box to use the option.

#### Resource Balancing Blockage

If any machine-type resource has a **Run Time = 0**, the system will block the activation and show a Resource Balancing Blockage form.

- This form lists all problematic resources.  
- Update their Run Time values to continue.

![Resource Balancing Blockage](./media/resource-balancing/resource-balancing-blockage.webp)

## Usage

Once enabled, the system automatically executes Resource Balancing when you:

- Open the [Scheduling Board / Semi-finished Product Scheduling form](./scheduling-board.md#how-to-open-scheduling-board--semi-finished-product-scheduling)
- Change the Planned Quantity or Header Dates in the Manufacturing OrderChanging the **Planned Quantity** or Manufacturing Order header **dates**

The system re-evaluates the best available resource dynamically, ensuring optimized scheduling.

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

| Benefit | Description |
| --- | --- |
| Efficiency | Automatically picks the fastest-available resource. |
| Reduced Manual Planning | No need to manually assign resources per operation. |
| Improved Throughput | Makes full use of available capacity across machines. |
| Real-Time Adjustments | Dynamically reacts to date or quantity changes. |

## When Not to Use

Avoid enabling Resource Balancing if:

- Resources lack proper calendars or run times.
- Scheduling decisions must remain under manual control.
- You are in a production environment without prior testing.

⚠️ Recommendation: Always test in a staging or sandbox environment before applying to live systems.

---
