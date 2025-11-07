---
sidebar_position: 1
---

# Overview

This mode involves the scheduler referring to the Meter Value, which represents the total usage value updated with each reading for the Effective Meter defined for the Maintenance Item (MI).

A new Maintenance Order (MO) will be generated if the following condition is met:

```text
            Current Meter Value >= Current Triggered Value
```

This means that when the latest meter reading is equal to or greater than the counter value required for generating the MO (the Current Triggered Value), a new MO will be created.

The Current Triggered Value (n) is calculated as:

```text
Current Triggered Value(n)= Due by Meter Value(n) – Expedite by Meter Units
```

This allows the user to define how much in advance the MO will be generated, based on the required meter value for the MO (n). The Expedite by Meter Units specifies how early the MO (in "Work Request" status) should be triggered in relation to the required value of the counter (Due by Meter Value) for the MO(n) run.

Once an MO is generated, the next required meter value (Due by Meter Value (n+1)) for the next MO run is calculated based on the Meter Interval. The rules for calculating the Due by Meter Value and generating the MO depend on the chosen Schedule Type: Fixed, Variable, Fixed(Duplicate).

---
