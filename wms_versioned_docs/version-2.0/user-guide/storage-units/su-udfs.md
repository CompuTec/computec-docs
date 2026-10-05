---
sidebar_position: 8
---

# SU UDFs

Everywhere where it is possible to create a new SU, there is an option to go to SU Header UDFs (to check or update values).

---

The option is available to set in Custom Configuration:

|  Transaction WMS |     UDF Manager option     |
|:----------------:|:--------------------------:|
| Goods Receipt PO | Goods Receipt PO SU Header |
| Delivery         | Delivery SU Header         |
| SU Wizard        | SU Wizard SU Header        |
| SU Creation      | SU Creation SU Header      |
| New SU           | New SU Header              |
| SU Pick And Pack | SU Pick And Pack SU Header |

On all of the above transactions, except SU Creation, the SU UDF button should be visible from the SU Header window.
On SU Creation, the UDF button is visible from the SU Content window.

Example:

Goods Receipt PO

- Select Warehouse
- Select Supplier
- Add SU -> New SU
- Add batch item Active-Item-01 with quantity 10, generate batch
- Enter SU Header
- Press the UDF icon
- Fill in previously added UDF
- Save SU to document
- Press next and Save the transaction.

---
