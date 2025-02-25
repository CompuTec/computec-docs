---
sidebar_position: 4
---

# Schedule Type Fixed(Duplicate)

For **Schedule Type = Fixed (Duplicate)**, the calculation is similar to that for **Schedule Type = Fixed**, where MOs are generated at fixed time intervals. However, the key difference is that for Fixed (Duplicate), MOs are created regardless of the status of the previous MO. This means multiple active MOs can exist simultaneously, even if the previous MOs are not in a "Finished," "Closed," or "Cancelled" (Many active MOs) status.

A new MO is generated whenever the following condition is met:

```text
            Current Date >= Current Triggered Date(n)
```

When a new MO is generated, the following calculations are performed, as in Fixed scheduling:

```text
            Due Date(n+1) = Due Date(n) + Perform Every
            Current Triggered Date(n+1) = Due Date(n+1) – Expedite
```

That is, for a schedule configured as Fixed (Duplicate), if the MOs are set to be generated every Friday, a new MO will be created each Friday, regardless of the status of the previously generated MOs. This ensures that MOs are consistently generated on schedule, even if earlier MOs are still active or incomplete.

---
