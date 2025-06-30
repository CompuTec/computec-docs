---
sidebar_position: 4
---

# Schedule Type - Fixed (Duplicate)

The calculation for **Schedule Type = Fixed (Duplicate)** is identical to fixed. However, the key difference is that a new MO (n+1) is generated regardless of the status of the previous MO (n). This means that multiple MOs with a status other than Finished, Closed, or Cancelled (Many active MOs). As a result, a new MO is generated each time the following condition is met:

```text
            Current Meter Value >= Current Triggered Value.
```

Regardless of the status of the last generated MO, when the condition is met, a new MO is generated, and the calculations proceed as follows:

```text
Due by Meter Value(n+1) = Due by Meter Value(n) + Meter Interval
Current Triggered Value(n+1) = Due by Meter Value (n+1) – Expedite by Meter Units
```

For subsequent meter readings, the same example, MO generation occurs each time the Meter Value surpasses a specified interval (e.g., when the total usage reaches a multiple of 1000), regardless of the status of the previously generated MOs.

---
