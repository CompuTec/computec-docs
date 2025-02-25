---
sidebar_position: 3
---

# Schedule Type - Variable

For **Schedule Type = Variable**, the calculation and generation of the next Maintenance Order (MO) depend on the same conditions as for the Fixed schedule type regarding the status of the last generated MO. The key difference lies in how the Due by Meter Value is calculated, which is based on the most recent reading of the current meter value at the time the MO status is set to Finished, Closed, or Cancelled. This ensures that only one active MO with a status other than Finished, Closed, or Cancelled can be generated from the PM Schedule.

In this schedule type, MOs are generated at variable intervals based on the Meter Value (total usage for the Effective Meter). The new Due by Meter Value for the next MO (n+1) is determined when the MO (n) reaches one of the statuses (Finished, Closed, Cancelled), and the most recent meter reading at that time is used for calculation.

The new required meter value for the next MO is calculated as follows:

```text
Due by Meter Value(n+1) = Meter Value on MO's Status Date + Meter Interval
```

**Example**

If the MO is generated with a Due by Meter Value of 3000 and is set to one of the statuses (Finished, Closed, or Cancelled) on 11.11.2020, and the most recent meter reading at that point is 3400, then:
    Due by Meter Value (n+1) = 3400 + 1000 = 4400.

The trigger value for generating the MO is calculated by:

```text
Current Triggered Date(n+1) = Due by Meter Value(n+1) – Expedite by Meter Units
```

**Example**

If the user wants the MO to be generated 300 units in advance, they should set Expedite by Meter Units = 300.
    - The new Current Triggered Value (n+1) will be 4400 - 300 = 4100.
    - When the Current Meter Value reaches >= 4100, the new MO will be generated.

---
