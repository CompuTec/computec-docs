---
sidebar_position: 2
---

# Batch Size Costing

Batch Size Costing is a key component in the production order process that enables manufacturers to allocate production costs more accurately. In this guide, we will walk you through the calculation of Batch Size Costing, including examples to illustrate how it works in practice.

---

## Background

The production order process includes activities with fixed times, such as Setup, Queue, and Stock, as well as fixed periods for Run Time.

The value within the batch size field on the Bill of Material form is divided into all the costs associated with Setup, Stock Time, and Queue Time, and when Run Time is configured as Fixed seconds/minutes/hours.

Below is a working example:

## Master Data Setup

- BOM batch size = 1000
- Setup Hourly Rate = 10, Fixed Overhead = 10, and Variable Overhead = 10
- Run Time Hourly Rate = 10, Fixed Overhead = 10, and Variable Overhead = 10
- The costs used in cost roll-up for the Item will be:

  - Setup = 2 hours: Hourly rate = 2 x 60 x 10/1000, Fixed Overhead = 2 x 60 x 10/1000 and Variable Overhead = 2 x 60 x 10/1000
  - Setup = 30 minutes: Hourly rate = 30/60 x 10/1000, Fixed Overhead = 30/60 x 10/1000 and Variable Overhead = 30/60 x 10/1000

## Run Time

When Run Time is set as fixed seconds, minutes, or hours, the resource's Hourly Rate, Fixed Overhead, and Variable Overhead values are divided by the Batch Size specified in the Bill of Material.

## Cycles and Run Time

**Key Considerations**:

- If the Cycle field is enabled on the resource, the Run Time is typically defined as a fixed duration (seconds/minutes/hours).
In this case, the time cost will be calculated by dividing the resource's Hourly Rate, Fixed Overhead, and Variable Overhead values by the cycle capacity.

## Example

- On the resource record, the cycle field is checked
- Cycle Capacity = 500
- Run Time = 2 hours (fixed hours)
- Batch Size = 1000

**Cost Breakdown**:

- Setup = 2 hours: Hourly rate = 2 x 60 x 10/1000, Fixed Overhead = 2 x 60 x 10/1000 and Variable Overhead = 2 x 60 x 10/1000
- Run Time = 2 hours: Hourly rate = 2 x 60 x 10/500, Fixed Overhead = 2 x 60 x 10/500 and Variable Overhead = 2 x 60 x 10/500

Stock and Queue Time are treated the same as Run Time when the time is configured as Fixed (seconds/minutes/hours).

---
Implementing batch size costing allows manufacturers to distribute costs accurately across production volumes, leading to more precise pricing strategies and enhanced operational efficiency.
