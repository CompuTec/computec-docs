---
sidebar_position: 2
---

# Batch Size Costing

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

When a Run Time is configured to be Fixed seconds/minutes/hours, the Hourly Rate, Fixed and Variable Overhead values for the resource are divided by the Batch Size on the bill of material.

## Cycles and Run Time

If the cycle field on the resource is checked, the Run Time will usually be defined as Fixed seconds/minutes/hours.
If this is the case, then the time cost will be the Hourly Rate, Fixed and Variable Overhead values for the resource divided by the cycle capacity.

## Example

- On the resource record, the cycle field is checked
- The cycle capacity = 500
- Run Time = 2 hours @ fixed hours
- Batch Size = 1000
- Setup = 2 hours: Hourly rate = 2 x 60 x 10/1000, Fixed Overhead = 2 x 60 x 10/1000 and Variable Overhead = 2 x 60 x 10/1000
- Run Time = 2 hours: Hourly rate = 2 x 60 x 10/500, Fixed Overhead = 2 x 60 x 10/500 and Variable Overhead = 2 x 60 x 10/500

Stock and Queue Time are treated the same as Run Time when the time is configured as Fixed seconds/minutes/hours.
