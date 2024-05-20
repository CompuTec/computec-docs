---
sidebar_position: 4
---

# Schedule Type Fixed(Duplicate)

For **Schedule Type = Fixed(Duplicate)**, the calculation is identical to that for Schedule Type = Fixed. This is the type of schedule in which MOs are generated at fixed time intervals. The difference with Fixed is that the MO is generated regardless of the status of the last MO. That is, as a result, from the PM Schedule can generate multiple MO with a group other than Finished, Closed, or Cancelled (Many active MOs). The consequence of this is to generate a MO each time the condition is met:

```text
            Current Date >= Current Triggered Date(n)
```

At the same time as generating another MO, calculations are carried out for Fixed:

```text
            Due Date(n+1) = Due Date(n) + Perform Every
            Current Triggered Date(n+1) = Due Date(n+1) – Expedite
```

That is, for the data from the example for Schedule Type = Fixed, MO will be generated every Friday regardless of what statuses the previously developed MO had.
