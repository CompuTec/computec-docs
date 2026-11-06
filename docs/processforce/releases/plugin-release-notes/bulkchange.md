---
sidebar_position: 15
---

# CompuTec Mass Change (BulkChange) Plugin

Below are the release notes for CompuTec Mass Change (Bulk Change) Plugin, highlighting new features, improvements, and bug fixes in this release.

## CompuTec Mass Change (BulkChange) Plugin 3.2611.1

**Release Date: 5 November 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | BOM to Manufacturing Order Updates | **Updating Manufacturing Orders after Bill of Materials changes is now more reliable.** Update jobs no longer remain stuck in `Processing` because of conflicting or overlapping executions. Conflicting updates are retried automatically, and a new **MORUpdateRecoveryJob** can restart updates that remain in `Start Update` or `Processing` beyond the configured timeout (120 minutes by default). **To enable automatic recovery, assign MORUpdateRecoveryJob to the company.** The recovery job runs every 10 minutes by default. |
| Fixed | Manufacturing Order Updates | Applying Bill of Materials changes to Manufacturing Orders no longer fails with the `Exception has been thrown by the target of an invocation` error, including when an item is replaced on a Manufacturing Order line. |
| Fixed | Operation Bindings | **Item replacements now preserve operation bindings and their settings.** This also fixes the handling of imported operation bindings without an item code and ensures that binding quantities and operation input/output values are updated correctly when an item code changes in a Bill of Materials. |
| Fixed | Bulk Change Scenarios | Creating a new Bulk Change scenario no longer leaves the screen loading indefinitely. If an error occurs, the application now displays the error message. |
| Fixed | Item Selection | Item and revision selection lists now open correctly when filtering in the **What** section of the **Items** tab or in the item replacement dialog. |

## CompuTec Mass Change (BulkChange) Plugin 3.2603.1

**Release Date: 11 March 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Fixed | BulkChange | Fixed an issue where saving an edited **Bulk Change scenario** could trigger an error. Scenarios can now be edited and saved without errors. |
| Fixed | BulkChange | Fixed an issue where the **BOMToMORUpdateJob** background job was not triggered after changes were made in the **Bill of Materials (BOM)**. Manufacturing Orders are now updated correctly after BOM changes. |
| Fixed | BulkChange | Fixed an issue where the **BOMToMORUpdateJob** could incorrectly return ``Manufacturing Order not found`` even though the Manufacturing Order existed. The job now correctly detects and updates the related Manufacturing Orders. |

## CompuTec BulkChange 3.2509.1

**Release Date - 19 September 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | BulkChange | Bulk Change  - error message occurs: "Field value too long in field U_IsDefault; maximum is 1." |

## CompuTec BulkChange 3.2508.1

**Release Date - 04 August 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | PFI | Missing Translation of addDefaultLinesLabel in PFI |
| Bug | BulkChange | Error "Exception: Nullable object must have a value." occurs during scenario creation. |
