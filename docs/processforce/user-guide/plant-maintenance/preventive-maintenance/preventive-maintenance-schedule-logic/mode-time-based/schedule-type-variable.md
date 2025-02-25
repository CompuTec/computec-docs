---
sidebar_position: 3
---

# Schedule Type Variable

For **Schedule Type = Variable**, the calculation and generation of the next MO depend on the same conditions as for Schedule Type = Fixed regarding the status of the last generated MO (n). Specifically, only one active MO can be generated from the PM Schedule, with a status other than Finished, Closed, or Cancelled. The key difference lies in how the Due Date is determined. For Schedule Type = Variable, the Due Date for the next MO is calculated based on the status setting date of the previous MO, which must be either Finished, Closed, or Cancelled.

This is the type of schedule in which MOs are generated in variable time intervals. The setting of a new Due Date for the next MO(n+1) is determined at the end of the MO(n) with the status Finished, Closed, Cancelled and refers to that moment in time.

The Due Date for the next MO (n+1) is calculated as:

```text
            Due Date(n+1) = MO's Status Date + Perform Every
```

That is, If the PM schedule has Perform Every = 7 days, generated MO will be set to one of the statuses: Finished, Closed, Cancelled, e.g., 03.11.2020, then: Due Date(n+1) = 03.11.2020 + 7 = 10.11.2020.

The date when the MO is generated is determined by the following calculation:

```text
            Current Triggered Date = Due Date (n+1) – Expedite
```

**Example**

If the user wants the MO to be generated 3 days in advance, they should set Expedite = 3.
    - Trigger Date = 10.11.2020 - 3 = 07.11.2020.
    - When the Current Date is >= 07.11.2020, the MO will be generated.

---
