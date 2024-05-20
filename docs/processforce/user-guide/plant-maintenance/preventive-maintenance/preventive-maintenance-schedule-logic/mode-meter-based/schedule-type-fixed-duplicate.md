---
sidebar_position: 4
---

# Schedule Type - Fixed (Duplicate)

The calculation for **Schedule Type = Fixed (Duplicate)** is identical to fixed. The difference with Fixed is that MO(n+1) is generated no matter the status of the last MO(n). As a result, from the PM Schedule can generate many MO with a status other than Finished, Closed, and Cancelled (Many active MOs). The consequence of this is to generate a MO each time the condition is met:

```text
            Current Meter Value >= Current Triggered Value.
```

Regardless of what status the last MO generated, at the same time as generating another MO, calculations are carried out as for Fixed:

```text
Due by Meter Value(n+1) = Due by Meter Value(n) + Meter Interval
Current Triggered Value(n+1) = Due by Meter Value (n+1) – Expedite by Meter Units
```

For subsequent meter readings, the same example, for Schedule Type = Fixed, MO will be generated each time the total multiple of 1000 is equalized or exceeded, regardless of what statuses the previously generated MO had.
