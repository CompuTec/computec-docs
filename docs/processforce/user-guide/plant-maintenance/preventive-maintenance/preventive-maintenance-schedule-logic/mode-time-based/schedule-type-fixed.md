---
sidebar_position: 2
---

# Schedule Type Fixed

This is the type of schedule in which MOs are generated at fixed time intervals. The setting of a new Due Date for the next MO (n+1) is determined when a new MO is generated and refers to the Due Date set in the previous MO pass (n).

For **Schedule Type = Fixed**, calculations and generating another MO depend on the status of the last MO generated. If the status of the previously generated MO from the schedule is: Finished, Closed, or Cancelled, then MO is generated. The existence of MO generated from the schedule with a status different from those listed blocked, you generate a new MO and calculation of Due Date. As a result, only one MO with a status other than Finished, Closed, or Cancelled (One active MO) can be generated from the PM Schedule.

This is the type of schedule in which MOs are generated at fixed time intervals. The setting of a new Due Date for the next MO(n+1) is determined at the time the MO(n) is generated and refers to the Due Date set for MO(n).
Calculations of the new Due Date:

```text
            Due Date (n+1) = Due Date (n)  + Perform Every
```

That is, if the last Due Date(n) = 02.11.2020 (Monday), Every = 7 (week), then the next Due Date(n+1) will fall on the following Monday, 09.11.2020.
Calculation of the MO generation (trigger) date:

```text
            Current Triggered Date (n+1)= Due Date (n+1) – Expedite
```

If the user wants to have the MO generated in advance, e.g., on Friday, it should set Expedite = 3. Then 09.11.2020 – 3 = 06.11.2020, and when Current Date is >= 06.11.2020, MO will be generated.
