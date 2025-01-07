---
sidebar_position: 2
---

# Schedule Type - Fixed

For **Schedule Type = Fixed**, the generation of a new Maintenance Order (MO) depends on the status of the last generated MO. If the status of the previous MO is Finished, Closed, or Cancelled, a new MO will be generated. However, if the status of the last MO is any other status, it will block the generation of a new MO and prevent the calculation of the Due by Meter Value. As a result, only one active MO can exist at any time, with a status other than Finished, Closed, or Cancelled.

This schedule type generates MOs at fixed intervals based on the Meter Value (the total usage for the Effective Meter). The new Due by Meter Value for the next MO (n+1) is determined when the MO (n) is generated and refers to the Due by Meter Value set for MO (n).

The new required meter value for the next MO is calculated as follows:

```text
        Due by Meter Value(n+1) = Due by Meter Value(n) + Meter Interval
```

**Example**

If Due by Meter Value (n) = 2000 and Meter Interval = 1000, then the next Due by Meter Value (n+1) will be 3000.

The Current Triggered Value for the next MO is calculated by:

```text
Current Triggered Value(n+1) = Due by Meter Value(n+1) – Expedite by Meter Units
```

**Example**

If the user wants the MO to be generated in advance by 300 units, they would set Expedite by Meter Units = 300.
        - The new Current Triggered Value (n+1) would be 3000 - 300 = 2700.
        - When the Current Meter Value reaches >= 2700, the new MO will be generated.
