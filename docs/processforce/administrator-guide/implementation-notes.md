---
sidebar_position: 6
---

# Implementation Notes

When customizing CompuTec ProcessForce during implementation, it's important to follow a consistent naming convention for any User-Defined Fields (UDFs) added to ProcessForce objects. This avoids potential naming conflicts in future updates or support scenarios.

---

## ✅ Why Use a Prefix?

Adding a unique **prefix** to the UDF name - typically based on the partner or customer company code ensures:

- Field names are **distinct** from those delivered by CompuTec ProcessForce
- You avoid **conflicts** during future upgrades, support cases, or patches
- The source of customization is **clearly identifiable**

---

## 🛠️ Step-by-Step: Naming UDFs with a Prefix

1. **Choose a Prefix**  
   Use a 2-3 character identifier derived from your company or customer name.  
   Example: `AB` for "AlphaBeta Consulting"

2. **Create Your Field Name**  
   Append the field purpose after the prefix using an underscore (`_`) separator.  
   Example:  

    ```text
    AB_weight
    ```

3. **Resulting Database Field**
    SAP Business One will automatically store it in the database as: U_AB_weight

## Example

Let's say you want to add a custom field for weight to a ProcessForce Bill of Materials (BOM) form:

- Chosen Prefix: AB
- Custom Field Name: weight
- Resulting UDF Name: AB_weight
- Stored in Database as: U_AB_weight

This naming pattern will help future developers, support teams, and upgrade tools recognize and isolate custom content from standard ProcessForce logic.

---

## ✅ Summary

| Step | Action |
| --- | --- |
| 1 | Choose a short, unique prefix (e.g., your company abbreviation) |
| 2 | Add UDFs using Prefix_FieldName format |
| 3 | Verify the UDF appears in the database as U_Prefix_FieldName |
| 4 | Maintain this standard for all future UDFs |

---
