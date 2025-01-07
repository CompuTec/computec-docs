---
sidebar_position: 2
---

# Schedule Type Fixed

The Fixed schedule type generates Maintenance Orders (MOs) at fixed time intervals. The Due Date for the next MO (n+1) is calculated when the current MO (n) is generated and is based on the Due Date of the previous MO pass (n).

---

For **Schedule Type = Fixed**, the generation of a new MO depends on the status of the last MO generated from the schedule.
    - If the status of the previous MO is Finished, Closed, or Cancelled, a new MO will be generated.
    - If there is an existing MO with a status other than the ones listed (e.g., active or pending), a new MO will not be generated. This ensures that only one active MO exists at any time for the schedule.

This schedule type generates MOs at fixed time intervals. The Due Date for the next MO (n+1) is set when the current MO (n) is generated and is based on the Due Date of the previous MO (n).

When a new MO is generated, the Due Date for the next MO is calculated as follows:

```text
            Due Date (n+1) = Due Date (n)  + Perform Every
```

**Example**

If the last Due Date (n) is 02.11.2020 (Monday) and the interval (Perform Every) is 7 days, the next Due Date (n+1) will be 09.11.2020 (Monday).

To determine when an MO will be generated, the trigger date is calculated as:

```text
            Current Triggered Date (n+1)= Due Date (n+1) – Expedite
```

**Example**:

If the next Due Date (n+1) is 09.11.2020, and the user wants the MO to be generated 3 days in advance, they should set Expedite = 3.
    - Trigger Date = 09.11.2020 - 3 = 06.11.2020 (Friday).
    - When the Current Date is >= 06.11.2020, the MO will be generated.
