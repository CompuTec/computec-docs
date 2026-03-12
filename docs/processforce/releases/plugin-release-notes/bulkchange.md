---
sidebar_position: 15
---

# CompuTec Mass Change Plugin

Below are the release notes for CompuTec Mass Change (Bulk Change) Plugin, highlighting new features, improvements, and bug fixes in this release.

## CompuTec BulkChange 3.2603.1

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
