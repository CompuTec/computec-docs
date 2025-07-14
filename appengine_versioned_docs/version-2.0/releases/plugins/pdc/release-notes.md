---
sidebar_position: 1
toc_max_heading_level: 2
---

# Release Notes

:::info
    Installer is ready to download from [here](../../plugins/pdc/download.md).
:::

## CompuTec PDC 3.10.26.1

**Release Date – 21 May 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Configuration | SQL password is visible in the user configuration file |
| Bug | CompuTec PDC | A bin allocation error occurs during issue to production |
| Bug | CompuTec PDC | Scanning by batch does not auto-fill the Item Code, Batch Number, or Bin Location. <br/>System does not validate locked batches |
| Bug | CompuTec PDC | In Quick Receipt, the system incorrectly handles the number of batches |
| Bug | CompuTec Labels | Duplicate label print requests are generated in CompuTec Labels after a Pick Receipt is created in CompuTec PDC |
| Improvement | Pick and Pack | Add an "Auto Select All" button at the top of the CompuTec PDC Receipt/Issue window |

## CompuTec PDC 3.10.25.3

**Release Date – 10 April 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | CompuTec PDC | SAP username and password is displayed under message log. |
| Bug | CompuTec PDC | Issues with pick order with serial managed items. <br/>An error message occurred: "Value cannot be null. Parameter name: source" |
| Bug | Tasks | Duplicate labor tasks could be created for a single team leader. |

## CompuTec PDC 3.10.25.1

**Release Date – 04 March 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Story | CompuTec PDC | Spanish Language Support in CompuTec PDC Settings |
| Bug | CompuTec PDC | No message displayed when selecting a locked batch using a barcode scanner. |
| Bug | CompuTec PDC | Incorrect quantity notation in CompuTec PDC. |
| Improvement | CompuTec PDC | PDC experiencing performance issues. |
| Bug | CompuTec PDC | Error "Sequence contains no matching element" encountered in MO list. |

## CompuTec PDC 3.10.24.2 (Hotfix)

**Release Date - 05 December 2024**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | CompuTec PDC | Error message occurred: "Problem with token SESSION" while attempting to preview the Bill of Materials (BOM) or Manufacturing Orders (MO). |

## CompuTec PDC 3.10.24.1

**Release Date - 25 November 2024**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | CompuTec PDC | Item revision is missing in the input and output properties. |
| Bug | CompuTec PDC | An error message, "Start may not be called on a task that was already started," was being displayed during the Bill of Materials (BOM) or Manufacturing Order (MO) preview. While the preview continued to open successfully, the error caused unnecessary confusion for users. |
| Bug | CompuTec PDC | An error occurred, "Object reference not set to an instance of an object," while attempting to preview Bill of Materials (BOM) or Manufacturing Orders (MO). |
| Improvement | Configuration | The log file location has been updated to ProgramData\CompuTec\PDC3\Logs for PDC 3 and C:\ProgramData\CompuTec\PDC\Logs for CompuTec PDC 4 |
| Bug | CompuTec PDC | Form Settings Update for Batch Selection in Issue to Production. |
| Bug | CompuTec PDC | After performing a Quick Receipt in the CompuTec PDC system, CompuTec PDC crashes unexpectedly. |
| Bug | CompuTec PDC | The list of Sales Orders (SO) is empty, when CompuTec PDC is enabled for a specific resource. |
| Bug | CompuTec PDC | An error, "Operator '==' cannot be applied to operands of type 'int' and 'string'," was encountered when processing QC records. |
| Improvement | Configuration | CompuTec PDC Core was copying settings from the existing CompuTec PDC, which led to the system considering itself as an update from CompuTec PDC 3 |

## CompuTec PDC 3.10.23.1

**Release Date - 27 August 2024**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | CompuTec PDC | Unable to open attachments on CompuTec PDC |
| Bug | CompuTec PDC | The update to the Planned Quantity isn't reflected in CompuTec PDC Task. |

## CompuTec PDC 3.10.22.1

**Release date - 29 May 2024**

| Issue Type | Component/s | Release Note |  Linked issue/s\*\* |
| --- | --- | --- | --- |
| Bug | Downtimes | CompuTec PDC crashes on quick receipt | - |
| Bug | CompuTec PDC | Issues with auto selection of bin location on pick receipt | SPDC - 854 |
| Bug | CompuTec PDC | Spelling mistake in "Bin Loacation" | SPDC - 869 |
| Bug | CompuTec PDC | Post time booking error - At Least one row must be filled. | SPDC - 868 |
| Improvement | CompuTec PDC | "Select all" and "Unselect all" option is available under close task | SPDC - 868 |
| Bug | CompuTec PDC | Warehouse quantity is incorrect in pick receipt | SPDC - 872 |
| Bug | CompuTec PDC | MO crystal report is not opening in PDC | SPDC - 861 |
| Bug | CompuTec PDC | Scaling issue in quantity time registration screen in PDC | SPDC - 774 |
| Improvement | Management Board | Allow user to view all the MOs in management board | SPDC - 851 |
| Bug | CompuTec PDC | Object reference not set to an instance of an object" error on selecting substitute | SPDC - 852 |
| Bug | CompuTec PDC | Able to add times when operation is onhold/finished | SPDC - 842 |
| Bug | CompuTec PDC | Able to start runtime even though there is advanced relation | - |
| Bug | Downtimes | Adding downtime doesnt automatically end the existing runtime | - |
| Bug | CompuTec PDC | Date format in quick time registration does not follow the general settings | - |

## CompuTec PDC 3.10.21.1

**Release date - 11 December 2023**

| Issue Type  | Component/s | Release Note                                                                                                         | Linked issue/s\*\* |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Improvement | General     | A warning message is displayed upon attempts pt to start another Task on a Resource that already has a started Task. | –                  |
| Bug         | Downtime    | An 'Object reference not set to an instance of an object error occurs upon recording a Downtime in specific cases.   | SPROC-15212        |

---

## CompuTec PDC 3.10.20.1

**Release Date - 18 October 2023**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Barcodes | Scanning a MODocEntry + RscLineNum barcode adds a new Task (or opens a Task – when it is already added). | - |
| Improvement | CompuTec Labels | New Crystal Reports mechanism. Please check the related [SAP website](https://help.sap.com/docs/SAP_BUSINESS_ONE_VERSION_FOR_SAP_HANA/686100cb1bc34346b2bc6642685bab43/b1bbebd32ff940c786c76315a8dfa270.html). | SPDC-748|
| Improvement | CompuTec PDC | Pick Receipt, number of Batches set to more than one: a lack of warning message about the "Batch generated when Manufacturing Order is" is selected and hence cannot create multiple Batches. | - |
| Improvement | Tasks | - More space for user-specific buttons that were added in CompuTec PDC. <br/>- Additional space in the tile for custom fields. <br/>- Highlighting of the CompuTec PDC buttons when additional information is available, for example, a drawing or instructions. | - |
| Bug | Barcodes | Scanning a 22-sign barcode causes a crash of the application. | - |
| Bug | CompuTec PDC | A Task in Time Booking that is closed and then reopened by correction is still displayed as closed in the application. | - |
| Bug | CompuTec PDC | Crystal Runtime: the application crashes upon clicking on Goods Receipt or Goods Issue. <br/>The error message: <br/><blockquote>EXCEPTION OCCURRED:System.Windows.Markup.XamlParseException</blockquote> | - |
| Bug | CompuTec PDC | In some cases, double display of Quality Tests in the Select Quality Control test drop-down list. | - |
| Bug | CompuTec PDC | Incorrect system message upon creating Pick Receipt / Pick Order for a Finished Manufacturing Order: "Cannot receipt from production. Manufacturing Order no. [...] is closed." | - |
| Bug | CompuTec PDC | It is possible to add a Pick Receipt to a Finished Manufacturing Orders. | SPDC-641, <br/>SPDC-729, <br/>SPDC-679 |
| Bug | CompuTec PDC | Management Board, filters: unselected Resources are not available after re-logging. | SPDC-733 |
| Bug | CompuTec PDC | Pick Receipt: an error occurs upon creating a task for a Manufacturing Order with a Resource that has "Receipt Whs Code" in the "Resource" form with the Bin location <br/>the error message: <br/><blockquote>You cannot allocate bin locations.</blockquote> | - |
| Bug | CompuTec PDC | Scrap Quantity is doubled when shown in the  Quantity Registration screen. | SPDC-774 |
| Bug | CompuTec PDC | The Bin Location management is not supported in Pick Receipt / Pick Order. | SPDC-641, <br/>SPDC-542, <br/>SPDC-679, <br/>SPDC-729 |
| Bug | CompuTec PDC | When Team Sync is enabled, the system creates a single line for a machine on a Time Booking and only books time for the Team Leader. | - |

---

## CompuTec PDC 3.10.19.1

**Release Date - 26 May 2023**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | CompuTec PDC | It is now possible to Issue/Receipt from multiple warehouses from the Resource Tile level. | SPDC-641 |
| Improvement | CompuTec PDC | Pick Issue: now, adding Bind Materials to Pick Issue is optional. | - |
| Bug | CompuTec PDC | Downtime Reasons are duplicated in SAP Business One when registered from CompuTec PDC in specific cases. | SPDC-740 |
| Bug | CompuTec PDC | Inactive Resources are still visible in CompuTec PDC. | SPDC-735 |
| Bug | CompuTec PDC | Management Board, filters: un-selected Resources are not available after re-logging. | SPDC-733 |
| Bug | CompuTec PDC | Receipt From Production: clicking the Generate icon causes an error in specific cases. | – |
| Bug | CompuTec PDC | Receipt from production: no Generate button for lines. | SPDC-739 |
| Bug | Tasks | The quantity mentioned in the Quick Issue screen is not copied to the issue line and Batch. | - |

---

## CompuTec PDC 3.10.18.1

**Release Date - 21 March 2023**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Barcodes | Scanning a MODocEntry + RscLineNum barcode adds a new Task (or opens a Task - when it is already added) | – |
| Improvement | CompuTec PDC | Goods Issue and Goods Receipt: UoM code and Exp. Date fields added | SPDC-709 |
| Improvement | CompuTec PDC | CompuTec PDC Settings: a possibility to define the time after dialog windows are closed automatically. | – |
| Improvement | CompuTec PDC | Pick Order and Pick Receipt: Select all and Unselect all options added | SPDC-710 |
| Improvement | CompuTec PDC | Pick Receipt: the Generate Batches option added - it is possible to define a number of Batches | SPDC-622 |
| Bug | CompuTec PDC | An error occurs upon adding a Task for a Resource, recording time, adding Downtime, clicking the Pass to another resource option, and clicking the Thumbs up icon. Error message: End Date wrong. | – |
| Bug | CompuTec PDC | Pick Order: if an Item is bound to an Operation, it is not selected for all the Resources. | SPDC-710 |
| Bug | CompuTec PDC | The Manufacturing Order and Bill of Materials Crystal previews do not work | SPDC-635 |

---

## CompuTec PDC 3.10.17.1

**Release Date - 31 January 2023**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | CompuTec PDC | Change of generating Terminal ID regarding working of CompuTec PDC/WMS on the terminal server or not. | - |
| Improvement | Barcodes | Possibility to set custom prefix, suffix, and group separator in the barcode mechanism. | – |
| Improvement | CompuTec PDC | Improvements related to managing Batches and time types in Quick Time Booking: <br/>- Batch number column, <br/>- filtering records by Batch number, <br/>- automatic expand option, <br/>- option to display only lines with any values in Times. | - |
| Improvement | Tasks | A possibility for a Team Leaders to create their own Labor Task. | SPDC-699 |
| Bug | CompuTec PDC | Issue to Production: no Batches listed in some cases. | CT-5289 |
| Bug | CompuTec PDC | Issue to Production: Warehouse Quantity incorrectly displayed as 0 is some cases. | SPDC-707 |
| Bug | CompuTec PDC | Not able to download CompuTec PDC installer from CompuTec AppEngine. | – |
| Bug | CompuTec PDC | QC Test Properties details are not updated properly in SAP Business One, e.g. the Pass/Failed column value is not updated. | SPDC-689 |
| Bug | CompuTec PDC | The Automatically use left quantity as picked option does not work. | – |
| Bug | CompuTec PDC | Tool Properties are not displayed in CompuTec PDC. | SPDC-695 |

---

## CompuTec PDC 3.10.16.1

**Release Date - 28 September 2022**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Configuration | Chinese language version added. | - |
| Improvement | Configuration | Support for SSL/TLS connection between CompuTec PDC and CompuTec AppEngine added. | - |
| Improvement | Pick Receipt, UDFs | Now UDFs in Pick Receipt for all Items are editable (not only for Batch or Serial managed Items). | – |
| Improvement | Management Board | Possibility to save Management Board filter settings added. | SPDC-245 |
| Improvement | Other | The Customization options are now available for Confirmation Panel. | - |
| Improvement | Pick and Pack | Issue to Production – Substitutes: <li>It is now possible to add more than one line of the same Item (to change them to Substitutes).</li><li>An Item Type (Primary/Substitute) column added in the Substitute choosing form.</li><li>A multi-select option for adding Substitutes added.</li><li>Naming inconsistency – now it is Item Substitutes in all the places (not Alternative Items).</li> | SPDC-403 |
| Improvement | Tasks | Goods Receipt / Quick Receipt – Batches: a warning about receipting to an existing batch added. | SPDC-334 |
| Improvement | Time Booking | Quick Work Registration: a column for the duration (in hours) added. | SPDC-669 |
| Bug | Other | Customization – PDCView: values with data types other than a string (e.g. datetime, double values) are not displayed. | SPDC-613 |
| Bug | Pick and Pack | Cannot create Pick Receipts in specific cases. Error message: Cannot perform runtime binding on a null reference. | SPDC-334 |
| Bug | Tasks | Select Task – By Resource: Labor-type Resources are not available when searching by Code or Group. | – |

---

## CompuTec PDC 3.10.15.1

**Release Date - 14 July 2022**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Bug | Barcodes | When a user clicks some of the UI elements, sometimes the application loses keyboard focus which causes problems with recognizing barcode characters. <br/>Error message: <br/><blockquote>Barcode toParse can not be empty</blockquote> | - |
| Bug | CompuTec PDC | Quality Control form issues: <li>It is not possible to update columns Current Value and Tested Reference on the parent line when the Enable multiple test results parameter in General Settings > PF > QC is checked.</li><li>The Pass/Fail column is not populated by the system when a user enters Current Value or Tested Reference</li><li>Clicking Update does not accept the correct CompuTec PDC user name and password</li><li>The Tested Reference column: not all of the related references are listed in the drop-down list.</li><li>Test Properties (loaded from SAP Business One) in CompuTec PDC is set to PASS (without the Current Value column filled in) even though in SAP Business One they are set to To Be Determined</li><li>The Test Results (Pass/Fail) determined in CompuTec PDC are not copied to SAP Business One, even though the Tested Values are</li><li>There is no system message about a result upon clicking the Update button, which may lead to setting the same line more than once.</li> | SPDC-624 |
| Bug | CompuTec PDC | Quick Work Registration: if there is more than one same Operation with Resource in a Manufacturing Order, only one Operation is displayed | SPDC-621 |
| Bug | Pick and Pack | Issue for Production: once a Substitute Item is added, it is not possible to add the original Item | - |

---

## CompuTec PDC 3.10.14.1

**Release Date - 12 May 2022**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| General | - | From now on, the CompuTec PDC plugin will be released in version related to ProcessForce 10.0 only (support for the 9.30 version will no longer be provided). | - |
| Improvement | Configuration | The Dutch language version improved. | SPDC-520 |
| Improvement | Configuration, Tasks | It is now possible to filter Task by many Resources. | – |
| Bug | Barcodes | Scanning a 30-sign barcode to activate a Task does not work. | – |
| Bug | Weighing Process | Incorrect message about overweight before starting weighting in some cases. | SPROC-13285 |
| Bug | Other | Select Task, By Resource: <br/>not all Manufacturing Orders are displayed in the Resource section due to performance issues. | - |

---

## CompuTec PDC 3.93.22.1 (3.10.13.1)

**Release Date - 28 February 2022**

| Issue Type | Component | Release Note| Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Configuration | The Dutch language version is now available | SPDC-520 |
| Bug | Management Board | Planned Qty and Reported Quantity in the Management Board do not match values in the related Task form. | SPDC-578 |
| Bug | General | The application crashes upon attempts to assign a Task (in the Task form), running the Task and closing it. The issue is caused by Transaction Notification. | - |
| Bug | General | The application crashes upon attempts to Run an added Task in specific cases. Error message: CompuTec AppEngine Request Exception: `http://localhost:54000/api/PDC/PDCTile/RemoveTimeTempEntryLine` - Code - 500, Object with specified Key was not found in database Key | – |

---

## CompuTec PDC 3.93.21.1 (3.10.12.1)

**Release Date - 14 December 2021**

| Issue Type | Component | Release Note| Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Management Board | Item Code available when assigning Tasks in Management Board | – |
| Bug | Configuration | CompuTec PDC Settings: all of the Resource are available to use in CompuTec PDC despite the fact of narrowing it down to one by Resource Code setting | – |
| Bug | General | Cannot create any Time Booking after logging in using a barcode (without connection to CompuTec AppEngine) | – |

---

## CompuTec PDC 3.93.20.3 (3.10.11.3)

**Release Date - 17 November 2021**

| Issue Type | Component | Release Note| Linked issue |
| --- | --- | --- | --- |
| Bug | Barcodes | Cannot scan barcodes on remote desktops in specific cases | – |

## CompuTec PDC 3.93.20.2 (3.10.11.2)

**Release Date - 4 November 2021**

| Issue Type | Component | Release Note| Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Barcodes | Possibility to start/pause all Tasks added to one Resource at once | – |
| Improvement | Pick and Pack | An error message added upon an attempt to create a Goods Issue related to a Manufacturing Order where at least one raw material is out of stock. | SPDC-515 |
| Bug | Other | Cannot open Manufacturing Order and Bill of Materials previews in specific cases | – |
| Bug | SAP | Production Receipt: Deleting a final good Storage Unit results in displaying of a system message about successful adding of a document but the Storage Unit is still present on the list | – |
| Bug | Weighing Process | Weight captured from a scale is not accepted due to a mismatch in decimal places between a weight document and SAP Business One settings | SPDC-503 |

---

## CompuTec PDC 3.93.19.1 (3.10.10.1)

**Release Date - 7 July 2021**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Install | A new setting: Get date and time. When the checkbox is checked, the date and time for CompuTec PDC transactions are taken from the related SAP Business One installation. When it is unchecked, the time is taken from the related operating system. | – |
| Improvement | Configuration | Japanese language version introduced | – |
| Improvement | Tasks | Teams: Employees have a line with Run Time added on a Task when Team Leader adds a Team to a Task | – |
| Bug | Tasks | I/O Bind Properties not supported | – |
| Bug | Configuration | The application crashes upon CompuTec AppEngine reconnection (based on the session expiration setting) | – |
| Bug | SAP | Time is booked for a Machine-type Resource instead of a Labor-type Resource when the Time Booking is performed by a Team Leader in specific cases | – |
| Bug | Tasks, Time Booking | Time is booked for a Machine-type Resource instead of a Labor-type Resource in specific cases | - |

---

## CompuTec PDC 3.93.18.1 (3.10.9.1)

**Release Date - 11 May 2021**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Barcodes, Weighing Process | Weight Wizard: the following barcodes sequences are now available from a Batch level: (91)item_code(99)item_sequence(10)batch_code or (91)item_code(10)batch_code | – |
| Improvement | Pick and Pack | A new column in the Issue to Production → Alternative Items: Warehouse Quantity | - |
| Improvement | Pick and Pack | An error message displayed when errors occur during generation of Receipt from Production is now more specific (previously: One or more errors occurred) | – |
| Improvement | Time Booking | It is now possible to display the amount of time spent on a task upon starting/stopping Run Time | – |
| Bug | Configuration | Cannot log in by using a barcode scanning for specific devices (tested and fixed for Zebra Symbol DS4308) | SPROC-11514 |
| Bug | Configuration | Customization view's fields are not added to the application in some cases | – |
| Bug | Pick and Pack | A Batch Status upon Receipt from Production made in CompuTec PDC is not updated in SAP Business One | SPDC-449 |
| Bug | Pick and Pack  | The accounting columns are not filled in in ProcessForce upon Pick Receipt / Pick Order creation in CompuTec PDC | SPDC-462 |
| Bug | SAP | Manufacturing Order Layout does not work | – |
| Bug | Tasks, Time Booking | A Labour code is not filled for a Team Time Booking | – |

---

## CompuTec PDC 3.93.17.1 (3.10.8.1)

**Release Date - 19 March 2021**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Tasks | Add Task by Resource form: a possibility to multiselect  of Tasks | – |
| Improvement | Weighing Process | New settings: Range from mode, Confirm each weighting, Is precision Weight Enabled for Weighting. Click [here](https://learn.computec.one/docs/pdc/administrator-guide/setting-up-the-application/overview#processforce-settings) to find out more | – |
| Bug | Configuration | Can not open Crystal Report - no connection to SYSTEM | - |
| Bug | Pick and Pack | It is not possible to issue two or more Items with the same Item Code | – |
| Bug | Pick and Pack, Weighing Process | ProcessForce Batches Status and logic supported in CompuTec PDC | SPDC-446 |
| Bug | SAP | Cannot create a Pick List | – |
| Bug | SAP | Cannot display details on Pick Lists | – |
| Bug | Tasks | Time Booking for multiple users option starts Time Booking for a one user only | SPDC-459 |

---

## CompuTec PDC 3.93.16.1 (3.10.7.1)

**Release Date - 27 January 2021**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Install | Changes in the Settings form based on a new way of connecting to CompuTec AppEngine | – |
| Bug | Barcodes | Log in to CompuTec PDC by using a barcode does not work | – |
| Bug | Install | incorrect display of the elements on About CompuTec PDC form (lack of some of the information) | – |
| Bug | Install | No compatibility of the CompuTec PDC plugin with older CompuTec AppEngine version (1.93.7.131) | – |
| Bug | Pick and Pack | Incorrect Items displayed as Substitute Items in CompuTec PDC | SPDC-442 |
| Bug | Pick and Pack | An error occurs upon attempts to perform Issue to production in specific cases | – |
| Bug | Tasks | Issue to Production: an error occurs upon attempts to perform an Issue when one of the field in 'Selected Quantity' column is set to 0 and 'Auto Select' option chosen | - |

---

## CompuTec PDC 3.93.15.1 (3.10.6.1)

**Release Date - 15 December 2020**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Tasks, Time Booking | It is now possible to register time for a Resources of Subcontracting type | – |
| Improvement | Tasks | Now when a Resource is in Downtime status, it is visible in the adding a Task panel with a note 'Is in downtime' (but not available to choose) | – |
| Bug | Pick and Pack | Issue to production: copying Classification field value (if it is filled in ProcessForce) | – |
| Bug | Pick and Pack | Receipt from production: cannot add a document when setting a serial number manually | – |
| Bug | Tasks | Add task by Manufacturing Order: a Manufacturing Order  is not displayed if an Item description is not defined | – |
| Bug | Tasks | Adding a Task by a Resource: it is possible to start Run Time for a Resource in Downtime | – |
| Bug | Tasks | No information in user interface about blockage caused by Transact Notification | – |
| Bug | Time Booking | It is possible to create a Time Booking document for backflush resources | SPROC-11020 |

---

## CompuTec PDC 3.93.14.1 (3.10.3.0)

**Release Date - 17 November 2020**

| Issue Type | Component/s | Release Note | Linked issue/s\*\* |
| --- | --- | --- | --- |
| Improvement | Configuration | Quick Receipt: the Attribute table extended, default focus on quantity textbox | SPDC-410 |
| Improvement | Pick and Pack | New Pick and Pack related settings: Receipt Mode, Issue Mode | SPDC-425 |
| Improvement | Pick and Pack | Now it is possible to use weight scales option also on Receipt from Production | – |
| Improvement | Tasks | Quick Receipt: the Batch field is automatically filled if the related Manufacturing Order has a Batch set in its header | SPDC-409 |
| Bug | Time Booking | Pass to other Resource option: a lack of validation whether the destination Resource is being already used | – |
| Bug | Barcodes | Incorrect reading of 22 characters barcodes caused by recognizing it as a multi-block code. <br/>Error message: Wrong barcode | SPDC-419 |
| Bug | Configuration | CompuTec PDC Plugin connection to a database problem in specific cases | – |
| Bug | Management Board | Select Task, By Resource: <br/>Start Date is not displayed in some cases | SPDC-412 |

---

## CompuTec PDC 3.93.13.1 (3.10.2.0), 2.93.13.1 (2.10.2.0)

**Release Date - 17 September 2020**

| Issue Type | Component/s | Release Note | Fix Version/s | Linked issue/s\*\* |
| --- | --- | --- | --- | --- |
| Bug | CompuTec Labels | The Company DB, User and Employee fields are missing from a label triggered from CompuTec PDC. | 3.93.13.1 (3.10.2.0) | SPDC-401 |
| Bug | Other | Time remaining to automatic log out (due to inactivity) is not displayed on mobile devices. | 3.93.13.1 (3.10.2.0) | SPDC-402 |
| Bug | CompuTec Labels | Label Print error upon performing Pick Receipt in CompuTec PDC. | 3.93.13.1 <br/>(3.10.2.0) | SPDC-397 |
| Bug | Other | Auto log out option: some actions are not registered on touchscreen devices which leads to auto log out regardless of activity. | 3.93.13.1 (3.10.2.0), <br/>2.93.13.1 (2.10.2.0) | SPDC-393 |
| Improvement | Pick and Pack | Weight Wizard: choosing Items by sequence number added. | 3.93.13.1 (3.10.2.0), <br/>2.93.13.1 (2.10.2.0) | SPDC-343 |
| Bug | Configuration | An error occurs upon changing Windows Language Preferences and running CompuTec PDC Plug-in application (the error also occurs when CompuTec AppEngine is installed on server other than CompuTec PDC and the servers have different Language Preferences set). <br/>Error message: <blockquote>Not Connected Current version of CompuTec PDC is to low</blockquote> | 3.93.13.1 (3.10.2.0) | SPDC-389 |
| Bug | Tasks | Application settings: turning on Single Resource option causes an error upon adding a Task and clicking By Resource tab. Also, all Resources are available anyway. | 3.93.13.1 (3.10.2.0) | SPDC-390 |
| Bug | SAP | Cannot record Down Time without choosing a Technician. | 3.93.13.1 (3.10.2.0) | SKEAD-2513 |
| Bug | Tasks | Task Panel: clicking one of the lines (Set up, Run, Down Time) not always opens a related Confirmation Panel on the line. | 3.93.13.1 (3.10.2.0) | |
| Improvement | Other | Bottom log line improvements: <li>Seconds added to be able to trace when we are fast clicking and we have new messages in the log</li><li>Colors indicating message type (blue for info, yellow for warning, red for error)</li><li>Background color change dynamically to white after 1s or 500ms</li> | 3.93.13.1 (3.10.2.0) | SPDC-240 |
| Improvement | Configuration | Confirmation Panel, new field: Total Quantity (total of Setup and Run Quantity) | 3.93.13.1 (3.10.2.0), <br/>2.93.13.1 (2.10.2.0) | - |

---

## CompuTec PDC 3.93.12.1 (3.10.1.0), 2.93.12.1 (2.10.1.0)

**Release Date - 2 July 2020**

| Issue Type | Component | Release Note| Fix Version/s | Linked issue/s\*\* |
| --- | --- | --- | --- | --- |
| Bug | Pick and Pack | Weight Wizard do not fill in some of the fields, which leads to inability to create related Pick Order | 3.93.12.1 (3.10.1.0) | SPDC-381 |
| Story | Configuration | Cannot open Weight Wizard in some cases | 3.93.12.1 (3.10.1.0) | SPDC-374 |
| Bug | Configuration | Cannot save Customization changes in AppEnging plug-in version | 3.93.12.1 (3.10.1.0) | SPDC-373 |
| Bug | Configuration, Tasks | Resources with specific characters in its name, e.g. '/', '(', not supported | 3.93.12.1 (3.10.1.0) | - |
| Improvement | Pick and Pack | Items managed by Serial Numbers are now supported in Pick Receipt and Pick Order | 3.93.12.1 (3.10.1.0) | - |
| Improvement | Management Board | Management Board: performance improvements in CompuTec AppEngine plug-in version (previously opening of the Board took a long time and took longer with every next opening) | 3.93.12.1 (3.10.1.0) | - |
| Bug | Pick and Pack | Cannot create Goods Receipt for Items that is not managed either by Serial Numbers, or Batches | 2.93.12.1 (2.10.1.0), <br/>3.93.12.1 (3.10.1.0) | - |
| Bug | Configuration | CompuTec PDC Settings: all of the Resource are available to use in CompuTec PDC despite the fact of narrowing it down to one by Resource Code setting | 2.93.12.1 (2.10.1.0), <br/>3.93.12.1 (3.10.1.0) | SPDC-278 |
| Improvement | Pick and Pack | New block barcode prefix supported: Sequence + Operation (for identifying an Operation if there the operation is present on a Manufacturing Order more than once) | 2.93.12.1 (2.10.1.0), <br/>3.93.12.1 (3.10.1.0) | - |
| Bug | Other | Weight Wizard: when the same Item is present more than one time in a Manufacturing Order, the document line cannot be identified properly (identifying only by Item Code). Now each line is identified by Sequence and Item Code | 2.93.12.1 (2.10.1.0), <br/>3.93.12.1 (3.10.1.0) | SPDC-343 |
| Improvement | Other | Weight Wizard: more information on an Item when choosing it in the first step. There were: Item Code, Quantity; there is now: Sequence, Item Code, Item Description, Quantity | 2.93.12.1 (2.10.1.0), <br/>3.93.11.1 | SPDC-341 |
| Improvement | Tasks | Downtime 2.0. Click [here](https://learn.computec.one/docs/pdc/user-guide/task-activities/downtime) to find out more | 2.93.12.1 (2.10.1.0), <br/>3.93.12.1 (3.10.1.0) | - |
| Improvement | Time Booking | New main panel (and barcode) option: closing all of the Tasks present on the panel | 3.93.12.1 (3.10.1.0) | - |
| Improvement | Configuration | CompuTec AppEngine version: Confirmation Panel, new field: Total Quantity (total of Setup and Run Quantity) | 3.93.12.1 (3.10.1.0) | - |

---

## CompuTec PDC 3.93.11.1

**Release Date - 23 April 2020**

    - CompuTec AppEngine version for CompuTec ProcessForce 9.3 PL11 Release1 (R1)

---
