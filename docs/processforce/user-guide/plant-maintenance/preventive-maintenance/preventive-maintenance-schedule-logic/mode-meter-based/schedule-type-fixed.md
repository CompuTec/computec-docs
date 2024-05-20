---
sidebar_position: 2
---

# Schedule Type - Fixed

For **Schedule Type = Fixed**, calculations and generating another MO depends on the status of the last MO generated. If the status of the previous generated MO is: Finished, Closed, or Cancelled, then MO is generated. The remaining statuses of the last generated MO block the generation of the new MO and the Due by Meter Value calculation. As a result, only one MO with a status different than Finished, Closed, or Cancelled (One active MO) can be generated from the PM Schedule.

This is the type of schedule in which MOs are generated at fixed intervals of the Meter Value (Total Usage of MI for the Effective Meter). The determination of the new Due by Meter Value for the next MO(n+1) is determined at the time the MO(n) is generated and refers to the Due by Meter Value set for MO(n).
Calculation of the new required meter value for MO generation:

```text
        Due by Meter Value(n+1) = Due by Meter Value(n) + Meter Interval
```

So, if Due by Meter Value(n) = 2000, Meter Interval = 1000, then the next Due by Meter Value(n+1) will have a value of 3000.
Calculation of the new meter trigger value for MO generation:

```text
Current Triggered Value(n+1) = Due by Meter Value(n+1) – Expedite by Meter Units
```

So, if you want to have a MO generated in advance of 300 units of the measured value, you should set Expedite by Meter Units = 300. Then Current Triggered Value(n+1) = 3000 – 300 = 2700, and when Current Meter Value >= 2700 new MO will be generated.
