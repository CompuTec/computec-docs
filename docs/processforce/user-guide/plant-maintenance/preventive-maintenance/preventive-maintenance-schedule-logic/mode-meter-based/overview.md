---
sidebar_position: 1
---

# Overview

This is a mode in which the scheduler refers to Meter Value, which is the Total Usage value that is updated with each reading for the Effective Meter defined for MI.
The basic condition for generating a new MO in this mode is:

```text
            Current Meter Value >= Current Triggered Value
```

If this condition is met, i.e., that the latest meter reading is equal to or greater than the counter value for generating MO (Current Triggered Value), a new MO is generated.
Calculation of value for MO generation:

```text
Current Triggered Value(n)= Due by Meter Value(n) – Expedite by Meter Units
```

That is, the user can define in advance (Expedite by Meter Units) will be generated MO (with status Work Request) in relation to the required value of the counter (Due by Meter Value) for the MO(n) run.

If MO is generated, then the next required meter value (Due by Meter Value(n+1)) is calculated for the MO run based on the value set for Meter Interval. The Due by Meter Value calculation and MO generation rules depend on Schedule Type: Fixed, Variable, Fixed(Duplicate).
