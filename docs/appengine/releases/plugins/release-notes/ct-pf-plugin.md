---
sidebar_position: 1
---

# CompuTec ProcessForce Plugin

Below are the release notes for CompuTec ProcessForce Plugin, highlighting new features, improvements, and bug fixes in this release.

---

## CompuTec.ProcessForce 3.2506.2

**Release Date - 11 June 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Cost Accounting | Users encountered the error message: "An error occurred while the form was initializing: {0}." when attempting to open the Cost Roll-Up form. |

## CompuTec.ProcessForce 3.2506.1

**Release Date - 9 June 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | MRP 2.5 | MRP Relations Map not functioning correctly - Code (Guid) in OMRC and MRC1 tables is incorrectly replaced by DataContext |
| Bug | API, CompuTec AppEngine | Missing API call "api/ProcessForce/CreateAdjustment" for rolling back Goods Issue; SAP also fails with "Object reference not set to an instance of an object" error. |
| Bug | Bin Locations | Pick Receipt fails with error "Bin allocation is not completed for Item Code: '4155046212544AA' and Row Number: '1'". |
| Bug | Manufacturing Order | Time taken to load the list of items in Manufacturing Order - add mode is more |
| Improvement | Performance, Production Costing | Improved performance of CT_PF_CostingDataForItemProc by optimizing query execution and reducing load time |
| Bug | Production Costing | Update Costing returns error when Last Purchase Price or Last Evaluated Price are selected. <br/>Query:SELECT "Price" FROM "ITM1" WHERE "ItemCode" = N'Item01-ma' AND "PriceList" = N'PP'   Conversion failed when converting the nvarchar value 'PP' to data type smallint. <br/>Query:SELECT "Price" FROM "ITM1" WHERE "ItemCode" = N'Item01-ma' AND "PriceList" = N'EP'   Conversion failed when converting the nvarchar value 'EP' to data type smallint. |
| Bug | MRP | Error while running MRP 2.5: "Nullable object must have a value..." |
| Bug | Common functions | Selection combo in UDF was not working; users were unable to select any values |
| Bug | Common functions | Encountered issues when using the "Support" user to perform operations in ProcessForce |
| Bug | Manufacturing Order | [POLCOM] PFI import failed with error "Cannot update. Empty formula in Items." when item formulas were missing or not initialized |
| Bug | PFI | Missing translation for the new column label addDefaultLinesLabel in PFI. |
| Bug | CompuTec AppEngine WebClient | Issue occurs in CompuTec PDC when OIDC is disabled |
| Bug | CompuTec AppEngine Core | Delete option next to server is not functional |
| Bug | MRP | Due Date Filter in Order Recommendation is not functioning; Error Message: "this. DueDateForm.setHours is not a function." |
| Bug | CompuTec AppEngine Core | Issues with plugin upgrade in CompuTec AppEngine - no error is displayed in the UI despite failure |
| Bug | WebAPI | Incorrect error message during API calls – receiving 500 response with "Object reference not set to an instance of an object." |
| Bug | CompuTec AppEngine Core | Incorrect order of deactivating and deleting plugins for MRP |
| Bug | CompuTec AppEngine WebClient | SAP OIDC missing under "Required CSP Entries for WebClient" |
| Bug | CompuTec AppEngine Installer | SAP OIDC was not listed under the "Required CSP Entries for WebClient" |
| Bug | CompuTec AppEngine Installer | Setup fails when external address is not accessible from the CompuTec AppEngine server itself |
| Improvement | CompuTec WMS Plugin | Enable matching of Storage Category to the corresponding rule for better accuracy and control |

## CompuTec.ProcessForce 3.2505.3

**Release Date - 26 May 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Installer | Missing Field "U_Message" in Installer for MOWizard Bottleneck |

## CompuTec.ProcessForce 3.2505.2

**Release Date - 23 May 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Common functions | Error message occurred: “It is not possible to delete rows in update mode” on SO Update |
| Bug | MRP 2.5 | Issue with Demand Quantity calculation for Finished Goods (FG) with Lead Time |
| Bug | Bill of Materials | Incorrect Operation Start after overlay in Advanced Operation Relationships |
| Bug | MRP 2.5 | Issues Identified in Standard and Custom Lead Time Logic |

## CompuTec.ProcessForce 3.2505.1

**Release Date - 19 May 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | PFI | Missing Translation of addDefaultLinesLabel in PFI |
| Bug | Synchronization | Users encounter the error message "Cannot release lock for key UI_Token, current key is" during operations. Additionally, many MOs (Manufacturing Orders) show a status of "Error" without any accompanying error message, despite successful synchronization |
| Improvement | PFI | Provide possibility to explicitly mention "Withdefaults" in PFI |
| Bug | MRP 2.5 | Forecast Changes require CompuTec AppEngine Restart to reflect Updates |
| Bug | Bill of Materials | BOM Component UoM (BOM1.Uom) Not Updated After Base Item (OITM) UoM Change |
| Bug | MRP 2.5 | When using Forecast version 2.5, the system occasionally encounters a critical error which causes SAP to become unresponsive/inactive |
| Bug | CompuTec PDC | When performing an Issue for Production transaction, users are encountering a Bin Allocation error |
| Bug | MRP 2.5 |  issues reported with the calculation of cumulative lead times |
| Bug | CompuTec AppEngine Administration Panel, CompuTec AppEngine Installer | Empty Administrator Panel in CompuTec.AppEngine 3.2505.1-rc-01 |
| Bug | Cost Accounting | Error message occurred when executing a rollup operation: "Object reference not set to an instance of an object." |
| Bug | Scheduling | "+" and "−" Buttons not working in Divide Function – Resource Planning Panel |
| Bug | Scheduling | Started MORs are not visible on the Gantt chart and are incorrectly treated as unscheduled |
| Bug | Scheduling | Schedule Manager does not relay error or warning messages generated during the scheduling process. |
| Bug | Items | Not possible to set the "Engineering" status as default, and Manufacturing Orders (MO) cannot be created when this status is assigned. |
| Bug | Manufacturing Order | Manufacturing DocNum and DocEntry in the Sales Order contents tab is incorrect |
| Bug | Production Costing | Restore Costing procedure is not executed after changes done to warehouse ot routing |
| Bug | Synchronization | Warning message occurred: "Error: Cannot release lock for key UI_Token, current key is" during MO creation |
| Bug | Production Costing | Fields in Item Costing 000 are enabled for editing when opened from Item Master Data |
| Bug | Cost Accounting | Running Cost Rollup throws the error: "not enough values: U_Remarks: line 54 col 1 (at pos 1719)" |
| Bug | Scheduling |  In the Scheduling Board, orders originating from Sales Orders occurred problem |
| Bug | Manufacturing Order | Rescheduling a Manufacturing Order (MO) throws the error: "Exception of type 'CompuTec.ProcessForce.API.Scheduling.CannotRescheduleManufacturingOrderNotCorrectStatusesException' was thrown" |
| Improvement | Manufacturing Order | Enhance the Sync MOR Error Message by including the Manufacturing Order (MO) Reference |
| Bug | API | In the BOM – Add process, the system lacks proper validation for: <li>WhsCode: Lines are imported even when the warehouse code does not exist in the OWHS table.</li> <li>IssueMethod: Lines are imported even if the IssueMethod value is invalid or not among defined members.</li> |
| Improvement | Manufacturing Order, Scheduling | Add Type: Internal or External MOR as a filter option in the Selection Criteria |
| Bug | Production Costing | Routing line is not displayed in the Static Costed BOM when Cost Category CC000 has a different routing recorded in the ITC7 table |
| Bug | Pick and Pack | Incorrect Quantity on Second Line: After changing the quantity, the second line always displays -1 <br/>Error message should be displayed on object reference error |
| Story | Bill of Materials | Implement a time-based service in CompuTec AppEngine Background Service for the Bill of Material Syncer |
| Improvement | Bill of Materials | Display 'U_Price' field from '@CT_PF_BOM1' table under form settings in BOM form |
| Bug | Scheduling | The Manufacturing Order status is changed back to "Scheduled" ignoring the changes done in Manufacturing Order form earlier |
| Bug | Bill of Materials | Automatically unbind operation bindings when deleting an operation or routing to prevent ratio mismatch errors such as: "The ratio in all rows corresponding to component with name Bottle-01 (type: Item and line: 1) is not equal to 1. Please correct this." |
| Bug | Scheduling | Unable to select document series in the Scheduling Board |
| Bug | PM - Maintenance Order | Maintenance Orders remain editable even after being marked as closed |
| Improvement | Planning | Scheduling - implement Bulk insert |
| Bug | Production Costing |  Costed MOR header details do not display when the company has enabled the option "Permit More than One Document Type per Series." |
| Bug | Production Costing | CompuTec AppEngine Roll-up job fails to start the roll-over task when all warehouses are selected in the parameters |
| Bug | Items, Manufacturing Order | Updating item details for item results in error: Cannot set revision 'xx' as Active there are Components in the BillOfMaterial that are obsolete 'xx' <br/>The error message does not specify the actual problematic item revision |
| Bug | Items, Manufacturing Order | Restoring item details fails with error in logs: Could not find stored procedure 'call' related to "CT_PF_ItemDetailsRestoreHeaderFromHistory" procedure call |
| Bug | Quality Control | Auto-assign the Quality Control Protocol when new Item Code is Created based on Item Group |
| Bug | Production Costing | Item Costing details becomes disabled after using green arrows to switch between costing entries |
| Bug | Production Costing | Setup default values in CompuTec AppEngine Rollup jobs to be the same as in Roll-up selection criteria form |
| Improvement | Manufacturing Order | Automatically generate pick receipt or pick order immediately after the user clicks the "Add" button to streamline the workflow |
| Improvement | Pick and Pack | Enable creation of pick receipts exclusively for the selected co-product |
| Improvement | Manufacturing Order | Block the creation of empty pick orders |
| Bug | PM - Maintenance Order | Some Values doesn't exist in Translation Portal |
| Bug | Translator | The Portuguese translation is incorrect in Translator |
| Bug | API | Installation fails with the error "InstallException: Installing Procedure named CT_LogMorSynchronizationError failed" |
| Bug | Quality Control | ItemName is not copied to the duplicated test protocol during add mode |
| Improvement | Synchronization | Add a window displaying the list of Manufacturing Orders (MORs) to be synchronized during the Restore → Synchronize Manufacturing Orders process |
| Bug | CompuTec AppEngine | Forecast import through PFI fails with the error "Revision for row 1 is not assigned." due to missing or invalid revision assignment during validation |
| Improvement | UI | Add MO DocNum as a visible column in the 'Available to Promise' form for all listed entries to improve traceability and reference |
