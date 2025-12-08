---
sidebar_position: 1
---

# Release Notes

## CompuTec AppEngine 3.2511.1

**Release Date - 26 November 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Infrastructure | AppEngine supports SAP HANA version SPS 08 (Service Pack Stack 08) as of this release. |
| Bug | AE Core | The PFI menu is not visible when logging in again with a different user. |
| Bug | AE Administration | CompuTec AppEngine prompts to download the .rc version even when the official version is already installed. |
| Bug | WebUpClient | Deactivate Action exhibits unexpected or inconsistent behavior. |
| Bug | WebUpManager | In CompuTec WebUp, the view version always remains at 1.0.0.10 and does not update. |
| Bug | AE Core | In Core, the Fake Schema Provider does not work for autoincrement objects, preventing proper testing. |
| Bug | Manufacturing Order | TransNotification fails to block items in Revision Engineering, preventing the creation of Manufacturing Orders |
| Bug | Manufacturing Order | Decimal quantities are not recognized correctly. |
| Bug | Manufacturing Order | The DocNum is incorrect on multi-level Manufacturing Orders created from the Scheduling Board. |
| Bug | Manufacturing Order | In Goods Receipt, an “Object reference” error occurs when there are set restrictions for Bin Location. |
| Bug | AE Architecture | The header is not frozen, making it difficult to identify the meaning of each column. |
| Bug | .netCore , AE Architecture | Swagger displays incorrect information when multiple objects or endpoints have the same name. |
| Bug | MRP | Documents are not created from the grouping document. |
| Bug | AE UAA | On the Login Page, when OIDC is disabled, the username and password input fields are not visible. |
| Bug | WebUpClient | Switching to Preview Mode triggers the error: “Initialization of WebUp Client timed out. Please make sure it is installed in the browser.” |
| Bug | WebUpManager | UDFs are missing when the corresponding field in parameters.DataModel is empty. |
| Bug | WebUp | “Uncaught (in promise) Error: Failed to fetch Variables.” |
| Bug | AE Plugins | Updating “DaysBeforeExpiry” triggers the error: “The JSON value could not be converted to System.Int32. Path: $.BatchStatusChangeSettings.DaysBeforeExpiry `LineNumber: 0` BytePositionInLine: 122.” |
| Bug | AE Core | The Version class does not correctly handle revision numbers and suffixes. |
| Bug | AE OData | Key and No fields are being selected even when they are not included in the select parameter. |

## CompuTec AppEngine 3.2510.1

**Release Date - 29 October 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Improvement | WebUp | WebUp AE Plugin - Saving Modifications in WebUp Manager |
| Improvement | WebUp | Introduced WebClient Control Page with Actions |
| Improvement | AE WebClient | Improved Dialog Handling in SAP Web Client Extension Generator |
| Improvement | WebUp | Improved handling AppEngine Frame Definitions in WebUp Manager |
| Improvement | AE UAA | Company name is missing in the login screen |
| Improvement | AE Core | Enabled logs and traces to be filtered and displayed based on custom instance names in Grafana |
| Improvement | WebUp, WebUpClient, WebUpManager | Added warning message when the Manager extension is used without the corresponding Client extension installed |
| Improvement | WebUp | Added transactions for deleting WebupViews |
| Improvement | .netCore | CompuTec Start Add-on default start mode is set to Automatic in SAP Extension Manager when activating a Company |
| Bug | WebUpManager | Unable to create a View due to issues with enforcing unique name validation |
| Bug | WebUpManager | Unable to save changes when editing a View (e.g., Description) |
| Bug | Common Functions | Show History - unable to open old instances in .NET Core |
| Bug | Common Functions | Crystal Reports are not available for ProcessForce forms - the report icon is disabled |
| Bug | Inventory | WEB API fails to process Pick Receipt Transaction correctly |
| Bug | Installer | Error occurs when installing tables that contain links to other tables being installed within the same process |
| Bug | Bill of Materials | BOM update fails with message "Cannot change document revision code00 for item 2252-0263-001000 is obsolete." |
| Bug | .netCore | Error occurred while installing authorizations |
| Bug | Common Functions | Error occurred during CompuTec ProcessForce Installation |
| Bug | Core | Issue when trying to save autoincrement object with string that contains "'" |
| Bug | AE WebClient | Hidden plugins are not being hidden in AE WebClient |
| Bug | AE Configuration | Validation table horizontal scrollbar is not visible |
| Bug | WMS Plugin | Unable to Add Items to Storage Categories (SC) |
| Bug | WebUp, WebUpManager | Delete WebUp view doesnt work |
| Bug | AE Configuration | After running AppEngine, when a database update occurs, the system redirects in a continuous loop to index.html |
| Bug | PFI | Error “The node count limit of '100' has been exceeded.” occurs during load in PFI |
| Bug | BT360 | Selection and data is not refreshed in BT360 |
| Bug | AE UAA | Username and password data are not retained, causing login failure |
| Bug | AE UAA | Language change does not work |
| Bug | WebUpManager | Activation does not  work on PurchaseOrder |
| Bug | WebUpManager | On first login to AppEngine from WebUp Manager, `IS_WEB_UP_ACTIVE` check fails |
| Bug | AE Plugins | Error message occurred: “The JSON value could not be converted to CompuTec.ProcessForce.API.Enumerators.BatchStatus” occurs when updating batch status through Batch Status Changer |
| Bug | AE Administration Panel | Login screen freezes when a 404 error is received, preventing user interaction or retry |
| Bug | WebUpClient | Disabled action is applied on preview mode |
| Bug | WebUp | Both "Add" and "Update" events are triggered when updating a document instead of only the "Update" event. |
| Bug | WebUp | Error message occurred: Fix TypeError: this._connect is not a function and “Extension context invalidated” |
| Bug | Inventory | Inventory Data Mismatch for Certain Items |

## CompuTec AppEngine 3.2509.2

**Release Date - 24 September 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | API | Error on new BOM creation: "Item Code VP340M1AluSan and Revision Code 4561 for sequence 0 not found in FinalGood tab." |
| Bug | Bill of Materials | Error during BOM synchronization: "Invalid column name: BOM0.U_PFDBVersion: line 7 col 4 (at pos 124) | CompuTec.Core2.DI.Database.SQLQueryException." |

## CompuTec AppEngine 3.2509.1

**Release Date - 22 September 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Improvement | WebAPI |Display proper error message when logging in through Web Methods. |
| Improvement | UI | Pick Receipt / Pick Order - UDF linked to table is not displayed as a combo box. |
| Improvement | AE Common Library | Add options to MessageHelper exception method. |
| Improvement | AE Core | Display "CompanyId" under Companies' details. |
| Bug | MRP | Create Documents – grouped documents (new logic) not working. |
| Bug | PFI | AppEngine PFI Template lacks necessary context for deletion. |
| Bug | Core | Login does not work after session expiration. |
| Bug | AE Core | Remove requirement for UDFItems property in UDO Models. |
| Bug | AE Analytics | Update Data Source not working. |
| Bug | Manufacturing Order | Pick Order and Pick Receipt view from MO not working correctly. |
| Bug | .netCore, Manufacturing Order | System throws error in Orderless Production. |
| Bug | AppEngine | Patching BOM routing operation relations and input/output gives an error. |
| Bug | AE Core | Dialog always displays Cozy density class. |
| Bug | MO360 | Analytics view is not saved in MO360. |
| Bug | BT360 | MOR does not appear in Batch Overview. |
| Bug | AE Configuration | Open Data Reader error: "There is already an open DataReader associated with this connection which must be closed first." |
| Bug | AE Plugins | Unable to download plugins pack. |
| Bug | AE WebClient | Authentication for opening AE plugin from web client does not work on version 2505. |
| Bug | MCP | MCP server does not properly execute the patch and POST request with the WithDefault attribute. |
| Bug | AE Core | Issue with token validation and system reconnection. |



## CompuTec AppEngine 3.2508.1

**Release Date - 04 August 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Improvement | AE Core | Changed severity of the error from Fatal to Error: Cached collection disabled.|
| Improvement | MOWizard | Enabled support for Form Settings and Column Freeze in Adjustment and Scheduling |
| Bug | .netCore | Generated enum doesn't have EnumType Annotation in Core. |
| Improvement | .netCore , AE Architecture | Added ability to define database setup configurations for the CompuTec AppEngine Plugin type |
| Improvement | AE Core, AE DevelopmentMode | Defined a schema for plugin manifests |
| Bug | AE Core | Post on Autoincrement  object doesn't return @@identity |
| Bug | .netCore , AE Plugins | Issue occurred while activating the company and installing plugins. |
| Bug | .netCore | AE service fails to start after installing a lower version of PF UI and API. |
| Bug | Performance | PATCH call to Item details takes longer to throw an error message. |
| Bug | .netCore, Bill of Materials | System allows successful BOM update even when Routing '0001' does not exist in the routing object. |
| Bug | Core | Adding an int? (nullable integer) field to an AutoIncrementObject fails. |
| Bug | Resources | Bin location disappears from the receipt warehouse after refresh and is incorrectly reassigned to the issue warehouse. |
| Bug | Core |  Bulk update operation fails with error: "unique constraint violation for table" |
| Bug | AE Core | Installed plugins has a list of all the plugins installed over a period of time. |
| Improvement | AE WebClient | Added `webClientExtension` support to the plugin. |
| Bug | AE Plugins | Plugin Version tab displays duplicate entries. |
| Bug | AE Configuration, AE Plugins | Border selection in Plugins Store is not working correctly. |
| Improvement | AE Configuration | Admin Configuration Menu – After selecting a section, the system now automatically selects and displays the default subsection. |
| Bug | .netCore | Login error message is incorrect — displays "Incorrect Username or Password" |
| Bug | MOWizard | Date filters are not functioning in Scheduling. |
| Bug | PriceManagement | Price Management Plugin does not display all missing currencies. |
| Bug | Installer | CompuTec ProcessForce.Gantt installation fails due to improper handling of newline characters in the error message. |
| Bug | .netCore | Unable to synchronize Manufacturing Order that has not been added; `DocEntry=`. DocEntry is missing or undefined. |
| Bug | Manufacturing Order| When opening a Manufacturing Order (MOR) and selecting a BOM, the system throws an error:`CompuTec.Core2.UI.Notify.StatusBarMessageNotificationService. Calculating a Formula for U_ItemYield() failed with error: The input string '#ERR: Name' was not in a correct format`.... |
| Bug | Manufacturing Order | MOR - Transfer Components action fails with "No matching records found" error. |
| Improvement | Synchronization | Sales Order (SO) details are not synced with the Work Order (WO); the SO field remains empty in the generated Production Order. |
| Bug | Resources | Bin location disappears from the receipt warehouse after refresh and incorrectly appears in the issue warehouse. |

## CompuTec AppEngine 3.2506.1

**Release Date - 9 June 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Common Functions | Issues encountered when using the "Support" user to perform actions in CompuTec ProcessForce |
| Bug | Manufacturing Order | [POLCOM] Error "Cannot update. Empty formula in Items." occurs during PFI import |
| Bug | Common Functions | Selection combo in UDF is not working. User is not able to select any values |
| Bug | WebAPI | Issues with item details PATCH call - missing or unclear error message |
| Bug | CompuTec AppEngine WebClient | Issue occurs in CompuTec PDC when OIDC is disabled |
| Bug | CompuTec AppEngine Core | Delete option next to server is not functional |
| Bug | CompuTec AppEngine Core | Issues with plugin upgrade in CompuTec AppEngine - no error is displayed in the UI despite failure |
| Bug | WebAPI | Incorrect error message during API calls – receiving 500 response with "Object reference not set to an instance of an object." |
| Bug | CompuTec AppEngine Core | Incorrect order of deactivating and deleting plugins for MRP |
| Bug | CompuTec AppEngine WebClient | SAP OIDC entry is missing under "Required CSP Entries for WebClient" |
| Bug | CompuTec AppEngine Installer | Setup fails when external address is not accessible from the CompuTec AppEngine server itself |
| Bug | MRP | Due Date Filter in Order Recommendation is not functioning; Error Message: "this. DueDateForm.setHours is not a function." |
| Improvement | CompuTec WMS Plugin | Enable matching of Storage Category to the corresponding rule for better accuracy and control |

## CompuTec AppEngine 3.2505.1

**Release Date - 19 May 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | PFI | Missing Translation of addDefaultLinesLabel in PFI |
| Bug | Administration Panel | Latest Build not visible in Download Tab |
| Bug | MRP | Multiple Revisions in Order Recommendation |
| Bug | Administration Panel, CompuTec AppEngine Installer |  Administrator Panel was appearing empty in version CompuTec.AppEngine.3.2505.1-rc-01 |
| Improvement | .netCore | Enable OData key segmentation support |
| Bug | CompuTec AppEngine Administration Panel | The “Assign to AE” option for the UI plugin has been disabled |
| Bug | CompuTec AppEngine Common library | Revisions on the Items list are not visually distinguished: SC |
| Bug | CompuTec AppEngine Administration Panel | Unable to remove company in CompuTec AppEngine |
| Bug | CompuTec AppEngine DevelopmentMode | CompuTec AppEngine fails to start if the plugin manifest is missing required fields |
| Bug | CompuTec AppEngine Core | In SAP 2502 HF1 Cloud, no entries are visible in transaction USR3 |
| Improvement| .netCore | Compute.Start service is now set to start automatically upon Company Activation |
