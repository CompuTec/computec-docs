---
sidebar_position: 3
---

# Schedule Type - Variable

For **Schedule Type = Variable**, the calculation and generation of the next MO depend on the same statuses of the last MO generated as for the Fixed type. The difference is how Due by Meter Value is calculated, which is calculated using the youngest reading of the current meter value relative to the date of setting the MO status to one of three: Finished, Closed, or Cancelled. As a result, only one MO with a status other than Finished, Closed, or Cancelled (One active MO) can be generated from the PMSchedule.

This is the type of schedule in which MO values are generated in variable intervals of the Meter Value (Total Usage of MI for the Effective Meter). The determination of the new Due by Meter Value for the next MO(n+1) is determined at the end of the MO(n) with the status: Finished, Closed, Cancelled, and refers to the youngest meter value reading.
Calculation of the required value for MO:

```text
Due by Meter Value(n+1) = Meter Value on MO's Status Date + Meter Interval
```

That is if the MO generated for Due by Meter Value = 3000 is set to one of the statuses: Finished, Closed, Cancelled, e.g., 11.11.2020, and the youngest reading of the current meter value at this point will be 3400, then Due by Meter Value(n+1) = 3400 + 1000 = 4400.
Calculation of the trigger value for MO generation:

```text
Current Triggered Date(n+1) = Due by Meter Value(n+1) – Expedite by Meter Units
```

If the user wants to have generated MO in advance 300 units of the measured value, then it should set Expedite by Meter Units = 300. Then 4400 – 300 = 4100, and when the next reading of the Current Meter Value >= 4100 is generated MO.
