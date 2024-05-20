---
sidebar_position: 1
---

# Overview

The basic condition for generating a new MO in this mode is:

```text
            Current Date >= Current Triggered Date = Due Date
```

If the condition is met, the new MO must be generated no later than the Due Date. The user can determine if MO will be generated in advance by entering Expedite
Where:

```text
            Current Triggered Date (n)= Due Date (n) - Expedite
```

That is, the user can define how early (Expedite) will be generated the MO (in the status of Work Request) about the required term (Due Date).
If the order is generated, the next Due Date for MO is calculated based on the interval (Perform Every). The method of Due Date calculation and rules of MO generation depends on the Schedule Type: Fixed, Variable, Fixed(Duplicate).
