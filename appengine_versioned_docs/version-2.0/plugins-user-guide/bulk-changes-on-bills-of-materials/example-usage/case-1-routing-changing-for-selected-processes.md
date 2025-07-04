---
sidebar_position: 2
---

# Case 1 – Routing Changing for Selected Processes

This guide outlines a step-by-step approach to making routing changes for selected processes using the Bulk Changes functionality in SAP Business One/ProcessForce or CompuTec AppEngine.

---

## Requirement

When a routing is changed, it must be possible to replace it in the production process. We can change the following things:

- Operations
- Resources for operations
- Times
After changing the Routing there should be a possibility to choose whether we change it in every process or only in selected ones.

| Step | Action | Obilgatory |  |
| --- | --- | --- | --- |
| 1 | In Business One/ProcessForce prepare modified Routing's template (define new Code by adding e.g. Revision ID) with changes in: Operations, Resources, times, etc. It is recommended to put some additional information in Remarks (the scope of changes). | Yes | ![Routing changing for selected processes](./media/routings.png) |
| 2 | Open Bulk Changes from CompuTec AppEngine or directly from Business One/ProcessForce, create new scenario and Select Change Scope = Routings | Yes | [Scenario Creation](https://www.youtube.com/watch?v=bT3bN-AoVSY) |
| 3 | In Selected BOMs tab select BOMs (processes) for which the routing have to be changed | Yes | [Bill of Material Seelection](https://www.youtube.com/watch?v=ZdTlC4Nwt3I) |
| 4 | In Routings tab filter and select routing which has to be replaced. Choose mode Replace and select routing (prepared in step 1) as a Replacement. At the end you can unselect some processes. The change will not affect them. | Yes | [Routing Replacement](https://www.youtube.com/watch?v=cvlO5G3b2Wo) |
| 5 | Add Scenario | Yes | - |
| 6 | Start process of bulk changes preparation | Yes | [Prepare Scenario](https://www.youtube.com/watch?v=zJwsojIAK0g) |
| 7 | Check if the changes are correct in Proposed Changes tab | Yes | [Proposed Changes](https://www.youtube.com/watch?v=jbAZyGROrU4) |
| 8 | Execute the scenario | Yes | [Execute the Scenario](https://youtube.com/watch?v=Cbh1toH8Eu4) |
| 9 | Check results of bulk changes in Proposed Changes tab and in Business One/ProcessForce | Recommended | [Check Results](https://www.youtube.com/watch?v=wukesmAoxEY) |

---
