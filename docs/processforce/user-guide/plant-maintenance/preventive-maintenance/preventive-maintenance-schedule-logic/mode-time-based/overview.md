---
sidebar_position: 1
---

# Overview

The basic condition for generating a new Maintenance Order (OR) in this mode is:

```text
            Current Date >= Current Triggered Date = Due Date
```

If this condition is met, the new MO must be generated no later than the specified Due Date. Users can specify an Expedite value to determine if the MO will be generated in advance.

## Key Details

- **Expedite Adjustment**: The Current Triggered Date (n) is calculated as:

    ```text
                Current Triggered Date (n)= Due Date (n) - Expedite
    ```

    This allows the user to define how early the MO (in "Work Request" status) should be generated relative to the Due Date.

- **Due Date** - deadline by which the MO must be created.

Once an MO is generated, the next Due Date is calculated based on the specified interval (Perform Every). The method of calculating Due Dates and the rules for MO generation depend on the selected Schedule Type, which can be one of the following: Fixed, Variable, Fixed(Duplicate).

---
