---
sidebar_position: 3
---

# Schedule Type Variable

For **Schedule Type = Variable** calculation and generating the next MO depends on the same statuses of the last generated MO(n) as for Schedule Type = Fixed. That is, as a result, only one MO with a status other than Finished, Closed, or Cancelled (One active MO) can be generated from the PM Schedule. The difference occurs in how Due Date is calculated, which is calculated based on the MO status Setting Date into one of three statuses: Finished, Closed, or Cancelled.

This is the type of schedule in which MOs are generated in variable time intervals. The setting of a new Due Date for the next MO(n+1) is determined at the end of the MO(n) with the status Finished, Closed, Cancelled and refers to that moment in time.
Calculation of the new Due Date:

```text
            Due Date(n+1) = MO's Status Date + Perform Every
```

That is, if for the PM schedule with Perform Every = 7, generated MO will be set to one of the statuses: Finished, Closed, Cancelled, e.g., 03.11.2020, then Due Date(n+1) = 03.11.2020 + 7 = 10.11.2020.
Calculation of the MO generation date:

```text
            Current Triggered Date = Due Date (n+1) – Expedite
```

If the user wants to have generated MO 3 days in advance, then it should set Expedite = 3. Then 10.11.2020 – 3 = 07.11.2020, and when the Current Date is >= 07.11.2020, MO will be generated.
