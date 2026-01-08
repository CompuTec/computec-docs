---
sidebar_position: 3
---

# Scenario Management View

The Scenario Management View is a centralized interface designed to manage, track, and execute scenarios related to bulk changes on Bills of Materials (BOMs). This view offers functionality to create new scenarios, work on existing ones, and filter scenarios based on their status.

![Bulk Changes on Bills of Materials Scenario Management View](./media/bulk-changes-of-bom/1.png.jpg)

---

## Scenario statuses

Scenario statuses track the lifecycle of bulk changes to Bills of Materials (BOMs). They indicate a scenario's phase, from creation and preparation to execution and completion, helping users monitor progress and manage changes effectively. Here’s an overview of the key scenario statuses:

1. **New**:
    - The scenario is in edition mode.
    - After editing a previously created scenario, it always gets the New status.

2. **Processing**:
        -  A temporary status applied during scenario processing (e.g., status transitions like New → Prepared).
        - The system communicates the beginning and end of this status through related messages.

            ![Bulk Changes on Bills of Materials Scenario Management View](./media/bulk-changes-of-bom/2.jpg)

3. **Prepared**:
        - Indicates the scenario is ready for execution.
        - Users can review the proposed bulk changes in the Proposed Changes tab under scenario details.

            ![Bulk Changes on Bills of Materials Scenario Management View](./media/bulk-changes-of-bom/3.jpg)

4. **Executed**:
        - Signifies the scenario has been fully executed.
        - Detailed results of the execution (e.g., success or failure of individual changes) can be accessed in the Proposed Changes tab.

            ![Bulk Changes on Bills of Materials Scenario Management View](./media/bulk-changes-of-bom/4.jpg)

---
This structured workflow ensures traceability, visibility, and control over BOM updates, facilitating a more efficient management process.
