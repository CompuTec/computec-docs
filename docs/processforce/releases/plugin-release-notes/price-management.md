---
sidebar_position: 15
---

# CompuTec Price Management Plugin

Below are the release notes for CompuTec Price Management Plugin, highlighting new features, improvements, and bug fixes in this release.

## CompuTec Price Management 3.2610.1

**Release Date: 20 October 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | Price Updates | You can now **update prices using the SAP Business One Service Layer** as an alternative to the existing update methods. A document receives the **Done** status only when all positions are processed successfully. Positions that cannot be matched are marked as failed, and Service Layer or database errors are displayed as translated messages. |
| Fixed | Price Management Documents | You can now **use the Edit Again option to reprocess documents completed with errors**, without uploading the source file again. The option returns the document to **To Complete** status and is available to all users, including when using direct database mode. |
| Fixed | Background Processing | **Price Management documents interrupted by an AppEngine restart no longer remain stuck in Processing status**. Processing can resume or finish with the appropriate **Done** or **Done with Errors** status. Documents previously marked as Done despite containing failed positions are also corrected. |
| Fixed | Price Updates | **Background price updates now continue processing without unexpectedly stalling**, improving reliability when updating price lists. The **Update Price List** screen also displays processing progress correctly. |
| Fixed | DI API Integration | **Background price updates now handle DI API server faults correctly**, preventing the entire update job from failing when the DI API server returns an error. |
| Fixed | Direct Database Updates | **Price Management now records document and position statuses correctly when using direct database mode**. The result of each position update is also saved in the `U_UpdateStatus` field, making it easier to identify successful and failed updates. |

## CompuTec Price Management 3.2605.2

**Release Date: 8 May 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Price Management | Fixed price export issues. Exported files now include complete data sets, currency symbols, and all rows beyond the previous 500-row limitation. |
| Fixed | Price Management | Fixed an issue where deleting large **CompuTec Price Management** documents could fail. Document deletion now works correctly for large datasets. |
| Improved | Price Management | Restored the processing progress bar, allowing users to monitor document processing status during long-running operations. |
