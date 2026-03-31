---
sidebar_position: 4
---

# CompuTec WMS Plugin Release Notes

Below are the release notes for CompuTec WMS Plugin, highlighting new features, improvements, and bug fixes in this release.

## CompuTec WMS 3.2603.2

**Release Date: 31 March 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Fixed | WMS Plugin | Fixed an issue where **Put Away** rules with **Storage Categories** could not be saved due to validation errors. You can now apply rules and assign bins without interruptions. |
| Improved | Client Desktop | Improved error messages for required UDFs – the system now shows clear field descriptions instead of technical codes, making issues easier to understand and fix. |
| Improved | Client | Added quantity summaries (planned vs processed) in key screens, giving you better control and visibility during picking and packing. |
| Improved | Client | Improved handling of **Catch Weight (CW)** items – pallet data now correctly includes package quantities after inventory posting. |
| Improved | Client | Simplified handling of allocated batches across multiple bins – batches are now shown once, reducing duplicates and confusion during picking. |
| Fixed | Client | Fixed incorrect quantity handling for **Catch Weight** items saved as draft, ensuring consistent and accurate data. |
| Fixed | Client | Fixed issues with allocated picking, preventing incorrect line creation during processing. |
| Improved | Server | Non-inventory items from **Sales Orders** are now correctly included in **Delivery** documents, even when using bin-managed warehouses. |
| Fixed | Server | **Storage Category** limits are now respected – system prevents exceeding max bin quantities or handles them correctly. |
| New | Server | Added a possibility to force picking only via scanning, blocking manual selection for more controlled warehouse processes. |
| Fixed | Server | Fixed errors when handling **SUs** with incomplete item data, ensuring smooth processing and visibility. |
| Improved | Client | Added total weight and quantity summary on **Delivery** documents, improving shipment verification. |
| Fixed | Server | Fixed issues with empty serial numbers, ensuring correct visibility and processing in **Delivery** flows. |
| New | Client | Added label printing option directly from **Stock Transfer** screens, speeding up warehouse operations. |
| Improved | Client | Unified naming in **Custom Query Manager** for consistency. |
| Fixed | Client | Fixed incorrect **UoM** conversions in returns – quantities are now consistent across all screens. |
| Fixed | Client | Corrected **CW** quantity handling from **Sales Orders**, ensuring proper picking values. |
| Improved | Server | Improved logic so partially processed **Pick Lists** are no longer closed automatically, giving users more control. |
| Fixed | Client | Fixed issues with serial number handling, ensuring proper line updates and visibility. |
| Fixed | Client, Server | Improved handling of **SAP** connection errors – background processes now stop correctly instead of looping. |
| Fixed | Client | Fixed **UDF** visibility for **Quick SU Transfer**, allowing proper configuration per process. |
| Fixed | Client | Fixed restriction when delivering batch-managed **CW** items, allowing correct quantities to be processed. |
| Fixed | Client Android | Fixed issue where the first warehouse line could not be selected in **Quick Transfer**. |
| Fixed | Client | Fixed issue where picked batches could not be removed for **Catch Weight** items. |
| Improved | Service Manager | New **CompuTec WMS** users can now log in without restarting services, simplifying administration. |
| Fixed | Server | Fixed incorrect negative inventory errors during **SU** processing. |
| Improved | Server | Restored visibility of **SU** codes during bin selection, improving traceability. |
| Fixed | Server | Fixed missing references when using **SU Wizard**, ensuring correct document linkage. |
| Fixed | Client Android | Improved **Android Client** stability, reducing crashes during warehouse operations. |
| Improved | Client | **Add New SU** button now creates a new **SU** instantly, speeding up pallet creation. |
| Fixed | Client Android | Fixed issue where barcode scanning via **RDP** worked only in filters – scanning now works across the app. |
| Fixed | Server | Fixed missing **ItemCode** parameter and query binding errors in bin selection. |
| Fixed | Client | Fixed issue where items disappeared when navigating between steps, ensuring consistent workflow. |
| Fixed | Client | Fixed errors when working with **Catch Weight** items and batch/serial selection. |

## CompuTec WMS Plugin 3.2602.1

**Release Date: 26 February 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |  
| Fixed | Client | Fixed **SU Wizard** so scanning in **Single SU Content** correctly reads item, batch, and quantity in one scan. |  
| Fixed | Client, Server | Barcode scanning now works correctly in **GRPO from Draft** when editing quantity and bin location. |
| Improved | Client | **Stock Transfer** screens are now faster. You can skip unnecessary **Storage Info** steps when no quantity has been picked yet. |
| Fixed | Client | Fixed an issue in **Return from GRPO** where, after choosing not to select all SUs automatically, scanning additional SU or SSCC codes could fail. The second scanned pallet was not properly loaded, and WMS returned an “SU Code” error. Scanning multiple SUs now works correctly. |
| Improved | Server | Added support for displaying **Inventory Transfer Header UDFs** in the **Quick SU Transfer** workflow. Fields configured in **UDF Manager** > **Inventory Transfer – Quick SU** can now be shown in the Remarks screen when saving a **Quick SU Transfer**. This allows users to capture additional information directly on the scanner before the document is saved. |
| Fixed | Server | **Pick & Pack** now correctly allows negative quantities when the **Block negative quantity** option is disabled in company settings. |
| Improved | Server | **Delivery from Sales Order** now handles allocated serial numbers more clearly and keeps users on the correct screen after selection. |
| New | Android Client | Added the ability to attach photos directly from the camera in **Android WMS**. Users can now choose between file upload or camera capture. |  
| Fixed | Server | **Return Requests from Delivery** now allow proper selection and saving of serial numbers, including empty serial scenarios. |  
| Improved | Server | **WMS Settings** can now be installed separately, making configuration access easier in terminal server environments. [Read more](https://learn.computec.one/docs/wms/administrator-guide/installation/wms-server/overview#install-wms-settings-only) |  
| Improved | Client | Long item names no longer block warehouse selection. Text wrapping improves usability on smaller scanner screens. |  
| Fixed | Server | **GRPO** now uses the actual posting date when saving drafts instead of the original draft date. |
| Fixed | Client | Fixed quantity editing errors in **Delivery** documents. |
| Improved | Service Manager | Batch fields in **Quantity** screen can now be reordered using drag-and-drop in **Workflow Settings**. |  
| Improved | Client | Additional fields in **SU Operations** now refresh dynamically after picking quantity. |
| Fixed | Client | Fixed duplicated quantities when creating **Delivery SU** into draft documents. |  
| Fixed | Server | **Stock Transfer** now allows correct selection of empty serial numbers. |
| Fixed | Client | Fixed errors in **SU Quick Transfer** workflow. |  
| New | Server | Added new validation variable ``NoOfUniqueBatches`` (Number of Unique Batches) for **Check Point Validation** in **SU Operations**. |  
| Fixed | Server | **SU Quick Transfer** now shows an error if **Bin Abs Entry** is invalid (``0``), preventing silent failures. |  
| Improved | Android Client | Added translation support when choosing attachment source (file or camera). |
| Fixed | Server | **New Production Receipt** now correctly saves both batch number and quantity during scanning. |
| Fixed | Server | **Stock Transfer from Request** now correctly updates line quantities and keeps bin selections after returning from detail screen. |
| Fixed | Server | Enabled UDFs for **Transfer Request** lines now appear correctly on the **Quantity** screen. |
| New | Server | Added ``@CardCode`` variable for **Delivery** validation in **Check Point Validation**. |
| Fixed | Server | **Delivery** now validates **SU CardCode** properly and blocks scanning SU assigned to another customer. |  
| Fixed | Client | **Best Before Date** is now correctly saved in **GRPO** and **Batch Master Data** (**Windows CE**). |  
| Fixed | Client | **Stock Transfer** batch selection no longer incorrectly shows not enough quantity errors. |  
| Fixed | Client | **Pick Receipt** now calculates quantities correctly when **PF Auto Receipt** is enabled. |  
| Fixed | Server | After saving **Pick Receipt from Production**, bin locations are cleared correctly and document numbers are displayed properly. |
| Fixed | Server | **Delivery ShipToCode** now works correctly with alphanumeric **CardCodes**. |  
| Improved | Client | Added label printing button to **Delivery (WZ)** documents, similar to **GRPO**. |
| Fixed | Android Client | **Back** button in **Stock Transfer** **from Request** now works correctly. |
| Fixed | Android Client | Adding empty serial to SU now opens the quantity screen instead of auto-assigning quantity ``1``. |
| Improved | Client | Serial-managed items with ``Management Method = “On Release Only”`` now follow SAP logic correctly. WMS allows receipt without serial and respects **Automatic Serial Number Creation** settings. |
| New | Server | Added support for picking items with ``Issue Primarily By = Bin Location`` in **Pick Lists**, aligned with SAP behavior. |
| New | Server | Added a parameter in **Custom Configuration** to auto-allocate **Batch/Serial** numbers during **Delivery** when source is **Pick List** and item is issued primarily by **Bin Location** (default: ``enabled``). |  
| New | Server | Added configurable workflow for **Serial Selection** and **Issue Primary** logic based on **Item Master Data** settings. |

## CompuTec WMS Plugin 3.2601.1

**Release Date: 29 January 2026**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improved | Client Android, Client Windows | You can now edit serial numbers during Goods Receipt Purchase Order (GRPO) creation across all WMS clients. Changes are saved correctly, giving users the same flexibility as in SAP. |
| New | Client | Added the ability to move content between existing Storage Units (SU), not only to newly created ones, reducing unnecessary SU creation. |
| Fixed | Client | Fixed delivery processing so scanning a SU no longer triggers a warehouse mismatch error when the ``Hide scanned SU on the list`` option was enabled. |
| Fixed | Android Client | **Stock Transfer** scanning now behaves correctly when scanning batches outside FIFO. **Quantity** screen opens directly, speeding up transfers. |
| New | Server | Added support for returns from **AR Invoice** to **Credit Note**, expanding return processing scenarios in WMS. |
| Fixed | Client | Fixed errors when creating **Delivery** from **Pick List**, improving reliability in outbound processing. |
| Improved | Server | GRPO from **Purchase Order** now allows changing the warehouse for the whole document using the top bar, avoiding item-by-item corrections. |
| Improved | Server | **Stock Transfer** now skips the **Put Away** screen when destination warehouse selection is not required, reducing unnecessary steps. |
| Improved | Server | **Inventory Counting** preview list now supports filtering by warehouse and bin, making large inventories easier to review. |
| Fixed | Client | Fixed incorrect quantities when saving GRPO documents as drafts and reopening them later. |
| Fixed | Server | **WMS Settings** screen no longer crashes when CompuTec AppEngine restarts or refresh is pressed during restart. |
| Fixed | Server | Returns from GRPO with empty serial numbers now work correctly, allowing serial selection and saving without errors. |
| Improved | Server | Added query logging for **WMS 3.0**, making troubleshooting and performance analysis easier for administrators. |  
| Improved | Server | **Delivery Line UDFs** can now be shown directly in the main screen, improving data visibility for users. |
| Improved | Client | **Sales BOM (Bill of Material)** headers are now greyed out, so warehouse users can easily see which items should be picked and which are informational only. |
| Fixed | Android Client | Improved stability when using WMS over VPN, reducing unexpected disconnects. |
| New | Client | Added an option to skip the final confirmation screen in **Quick SU Transfer**, speeding up repetitive transfers. |
| New | Client | **Quick SU Transfer** now supports fixed destination selection and configurable scanning behavior, giving users more control and fewer mistakes. |
| Improved | Server | Document saving performance in WMS 3.0 was significantly improved, reducing save times compared to earlier versions. |
| Fixed | Client | Fixed **SU Info** so warehouse users can scan an SU code to add one Storage Unit into another without errors. |
| Fixed | Client | Validation during SU creation now works correctly when scanning item, barcode, and quantity together. |
| Improved | Client | You can now set and save **Tax Date** on GRPO documents created from drafts, improving accounting accuracy. |
| Fixed | Server | **Stock Transfer** with ``Hide SU`` enabled now correctly accepts SU and SSCC scans. |
| Fixed | Server | When receiving from multiple **Purchase Orders**, WMS now always asks which PO line to use, preventing incorrect allocations. |
| Fixed | Client | Fixed incorrect behavior in **Pick & Pack** where available quantities were miscalculated for multiple identical lines. |
| Fixed | Client | Picking now validates scanned barcodes against the expected item, preventing accidental picking of wrong items. |
| Fixed | Client | Searching by batch number now works correctly in **SU Disassembly** screens. |
| Fixed | Client | Fixed errors when displaying or editing **Delivery** document UDFs. |
| Fixed | Android Client | **Barcode Decoder** rules now work correctly in **Stock Transfer** for existing SU screens. |
| Fixed | Server | Fixed UI issues in **Stock Counting** where checkboxes were overlapping, improving usability. |

## CompuTec WMS Plugin 3.2512.1

**Release Date - 31 December 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | Server | Added the ability to edit Storage Units on Delivery from Pick List that were packed during the Pick and Pack process. |
| Improvement | Client | Added a button in Document Details to change the sorting of the product list across all documents. |
| Improvement | Server | Added "remove batch" button in Delivery. |
| Bug | WMS Plugin | Item Code is missing in the Storage Units grid. |
| Bug | Client | In Pick Receipt batch generation, Revision fields are read-only and not available for editing. |
| Bug | Server | The available quantity displayed in the Pick List is incorrect. |
| Bug | Server | GRPO - Empty Bin Code function and Receiving Bin Locations. Error message: Bin location "0" does not belong to specific warehouse. |
| Bug | Server | GRPO - Selecting Bin Code from Storage Unit details screen does not work. |
| Bug | Server | Batches not assigned in warehouse without bin locations in Delivery from Sales Order. |
| Bug | Client | Batch/serial items managed primarily by bin location do not appear in the Pick List. |
| Bug | Client | Numeric UDF field does not take values. |
| Bug | Server | In Delivery from Sales Order (Sales BOM), closed lines are not copied to the Delivery document. |
| Bug | Server | GRPO - Quantity in SU is doubled. |
| Bug | Server | On the DEV server, updating a Storage Unit is not possible due to the error “Cannot change the Status.” |
| Bug | Server | In Pick Receipt, the Goods Receipt is not created even though the info message says “Goods Receipt/Production receipt no. 0 created.” |
| Bug | Server | In Stock Transfer from Request with SU FIFO, adding a second Storage Unit for the same line does not update the line quantity. |
| Bug | Server | Pick and Pack - Data not saved to UDF. |
| Bug | Server | In Old Stock Counting, the quantity is not saved on the first attempt if the UoM Code is not selected. |
| Bug | Server | Use TLS instead of SSL for secure communication. |

## CompuTec WMS Plugin 3.2511.1

**Release Date - 27 November 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | Client | Interface Design Manager: Add the ability to hide options and include an icon for Container. |
| Improvement | Client Android | Pick List: Add color differentiation for Pick Lists that have been updated. |
| Improvement | Server | Document Details: Display a Preview List on the screen. |
| Improvement | Server | Move Check Point Validation to the end of the validation queue. |
| Improvement | Client | WMS Client Settings: Add options to set Default Warehouse and Bin for SU Operation creation. |
| Bug | Client | Creating GRPO from Draft fails with error: “Cannot add or update document; Specify the UoM code.” |
| Bug | Client, Client Android | Delivery from Sales Order – Allocated serial numbers are marked as 1/1 and incorrectly moved to the bottom of the list. |
| Bug | Client | Delivery from Sales Order - Catch Weight allocation issue after scanning: system creates extra lines and shows incorrect total quantity. |
| Bug | Client | Double-scanning an SU Code incorrectly opens the window assigned to an Existing SU. |
| Bug | Client, Client Android | Unable to deliver orders when SU/Batch quantities exceed the entered delivery quantity. |
| Bug | Server | SU Info: Additional SU fields are not displayed on the first screen in other transactions. |
| Bug | Server | Pick and Pack: UDF linked to a Business Object is displayed as a text field instead of a dropdown list. |
| Bug | Server | Pick List: SU UDFs on the main SU screen do not display values from the associated SU. |
| Bug | Client | Editor control is not enabled on Android 14 devices. |
| Bug | Server | GRPO: Cannot add items when the Bin Code field is empty. |
| Bug | Server | Stock Transfer: Empty serials in SU trigger the error “Cannot add row (...)”. |
| Bug | Server | Pick List and Delivery: Removing an SU causes an “Object reference” error. |
| Bug | Server | SU: System does not allow decreasing quantity and fails to handle updates or additions when key fields are not properly filled. |
| Bug | Server | Stock Transfer: The Hide SU option does not function correctly. |
| Bug | Server | Sales Order from Pick List: Quantity displayed comes from the Sales Order instead of the Pick List. |
| Bug | Client | Delivery Document: All serials appear empty, affecting both Sales Order and Pick List scenarios. |
| Bug | Client | SU Disassembly: System does not allow scanning SU or SSCC codes without prefixes. |
| Bug | Server | Delivery from Pick List: The same batch is displayed from three different locations. |

## CompuTec WMS Plugin 3.2510.1

**Release Date - 29 October 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | WMS Plugin | Added support for including Catch Weight Storage Units in the Storage Info section of SAP Business One. |
| Improvement | Server | Added the option to save Deliveries created from Pick List as Draft documents. |
| Improvement | Server | Added a possibility to edit CardCode on SU Info. |
| Bug | Custom Configuration | Template creation is not functioning correctly in the .net Core version. |
| Bug | WMS Plugin | Unable to Add Items to Storage Categories (SC) |
| Bug | AE Plugins | WMS Plugin installation fails due to incorrect SQL syntax. |
| Bug | Server | Info message “Production receipt 0 was successfully created” appears, but no corresponding document is actually created in SAP. |
| Bug | Server | The default Inventory UoM for Catch Weight items is incorrectly set. |
| Bug | Client | Values from Delivery Line Fields are not correctly transferred to WMS, and custom fields (UDFs) are not included in the synchronization. |
| Bug | Server | Unable to modify data in the Storage Unit (SU) header within the Warehouse Info – SU Info screen. |
| Bug | SAP AddOn | SlpCode is not copied to the Delivery document. |
| Bug | Server | The CardCode field is missing when creating a New Storage Unit (SU) in Stock Transfer. |
| Bug | Client Android | App crashes in Stock Counting caused by EmojiCompat initialization error. |
| Bug | Server | Splitting a line into two (even with the same batch and location) prevents delivery creation and returns the error “Cannot add row (…).” |
| Bug | Server | Receiving a batch from a different bin than selected leaves the batch available in the original bin, and the SU remains visible in SU Info. |
| Bug | Server | Error message occurred in Delivery from Sales Order: "Packed item Active-Item-02 is not part of the delivery (UoM 9, items per unit 1.000000)" |
| Bug | Client | GRPO scanning behavior does not function as expected. |
| Bug | Server | Pick and Pack: Pick list generated from SAP Production Order appears empty in WMS. |
| Bug | Server | WMS Settings fail to notify users that ODBC Driver 17 is required. |
| Bug | Server | Error message occurred in Pick and Pack: "This SU is currently in production stage. Please complete the Production Receipt before proceeding." |
| Bug | Server | Delivery from Pick List: Data entered in UDFs is not saved to database. |
| Bug | Server | GRPO filter field displays all matching values using LIKE instead of showing only the exact entered value. |
| Bug | Server | Delivery fails with error message: “Index was out of range. Must be non-negative and less than the size of the collection.” |
| Bug | Client | Pick Receipt Batch Creation fails due to incorrect or missing MOR Number parameter. |
| Bug | Client | Application freezes when attempting to create a document. |
| Bug | Client Android | The quantity in the quantity field is not fully visible. |
| Bug | Client Android | The Save button is missing on the Storage Unit (SU) screen when creating a Delivery from Pick List. |
| Bug | Server | In WMS Stock Count, when the UoM is displayed as Box, the system incorrectly treats the counted quantity as Pieces. |
| Bug | Client | Removing a Storage Unit (SU) from a Delivery created from Pick List unintentionally modifies data in internal tables. |
| Bug | Client | In Delivery from Pick List, an incorrect window is displayed when selecting an existing Storage Unit (SU). |
| Bug | Server | Data entered in Storage Unit (SU) fields is not saved in Pick and Pack. |
| Bug | Server | Storage Unit (SU) additional fields are not visible in the interface. |
| Bug | Client | The system does not copy all Address Field contents from the Sales Order to the Delivery document. |
| Bug | Client | When releasing for production, the system does not display the window to select the index with the serial number. |
| Bug | Server | Updating the CT License Server address in AppEngine is not reflected in the WMS configuration file. |
| Bug | Client | Error message occurred in GRPO: "Illegal value entered." |
| Bug | Client | Date field values disappear after selecting a Bin. |
| Bug | Server | The ItemName field causes empty output in print layouts during document printing. |
| Bug | Client | Incorrect quantities are displayed and saved in the Delivery from Pick List document. |
| Bug | Client | In GRPO SU Wizard, the Bin Location filter is not functioning correctly. |
| Bug | Client | Error message occurred while updating WMS Settings: "Access to the path'C:\ProgramData\CompuTec\CompuTecWMS\Server\WMSServerConfiguration.json' is denied. Please try again. |
| Bug | Server | Incorrect Storage Unit (SU) quantity calculation. |

## CompuTec WMS Plugin 3.2509.2

**Release Date - 02 September 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | Server | Fixed bug when using pre-allocation on Pick List. |

## CompuTec WMS Plugin 3.2509.1

**Release Date - 02 September 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | Client | Pick and Pack – From Bin: Quantity does not consider allocated quantities. |

## CompuTec WMS Plugin 3.2508.2

**Release Date - 20 August 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | WMS Plugin | Request Details – 'Cancel' button does not work in edit mode. |
| Improvement | Server | Integration of new AppEngine plugin functionality with CompuTec WMS Server. |
| Improvement | Client | GRPO: Possibility to set empty Bin Location field. |
| Bug | Server | Stock Transfer: allow entering serial numbers for items managed with empty serials. |
| Bug | Server | Pick and Pack - Empty Serials: Unable to open Quantity screen. |
| Bug | Server | Pick Order: error when adding an SU: "Input string was not in a correct format." |
| Bug | Client | CompuTec WMS client error after TR translation failure. |
| Bug | Server | Delivery: Catch Weight quantities split by line number from CompuTec WMS window instead of selected batches. |
| Bug | Server | Sales BOM header displayed; error shown when attempting to change item quantity because it is part of a Sales BOM. |
| Bug | Server | Stock Transfer from Pick List: quantities displayed incorrectly. |
| Bug | Client | Pick List Error message occurred: "Pick list exists. Bin location information required." |
| Improvement | Client, Custom Configuration | Delivery: Save as Draft not working when "Use Sales UoM" is enabled. |
| Bug | Server | Fix PowerShell ImportSU and add additional messages |
| Bug | Server | SU: displays quantity per line; quantity cannot exceed the base line quantity. |
| Bug | Server | Warehouse Info: SU Info allows adding an item with quantity exceeding available stock. |
| Bug | Server | SU Disassembly to Storage Unit: initial quantity is not removed from the SU, potentially causing desynchronization between SU and warehouse quantities. |
| Bug | Server | TSL instead of SSL in WMS Settings |
| Bug | Client | Link Storage Unit to document line ID. |
| Bug | Client Android | Pick and Pack/Delivery – new SU data (weight) is not saved on any stage. |
| Bug | Client Android | Stock Counting: Unable to scan QR code with barcoder; error message occurred: "Invalid barcode." |
| Bug | Server | 6460 |

## CompuTec WMS Plugin 3.2508.1

**Release Date - 04 August 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | WMS Plugin | Unable to Add or Storage Categories (SC) after editing. |
| Bug | WMS Plugin | Error encountered when creating new Inventory Counting document |
| Bug | Client | Scanning error occurred in SAP Production Order process |
| Bug | Client | When decreasing quantity in SU during Stock Transfer, the quantity in the SU remains unchanged, while the line quantity is updated. |
| Bug | Service Manager | Permissions issue – users are unable to perform certain actions due to missing or incorrectly assigned authorizations. |
| Improvement | Client Android | Inventory UoM not displayed in Pick Receipt when UoM type is set to Manual. |
| Improvement | Client, Client Android | Added SU (Storage Unit) counter in Delivery to track the number of assigned SUs. |
| Improvement | Client | Stock Transfer functionality successfully tested in Core version |
| Bug | Client | Pick and Pack – System displays error message "Pick list exists and Bin locations information required." |
| Bug | Client Android | (EMCM) Stock Transfer – "To Bin" filtering does not work correctly; error message appears, but bin locations are not filtered until the last character is removed. |
| Bug | Client | Inventory Transfer – negative batch/bin location quantities appear after scanning a batch. WMS merges batches into a single location, causing incorrect quantity display. |
| Bug | Client | Catch Weight – unable to add a new row; system does not accept input or triggers no action. |
| Bug | Client Android | MAUI – Scanning cannot be enabled on the Login screen; swipe-right gesture to activate scanning is not functioning. |
| Bug | Server | (Ortho Solutions) Pick Order – Missing Order by `LineNum` clause in the query for the Document Details screen, causing lines to display in incorrect sequence. |
| Bug | Client | (EMCM) "Hide SU" function does not work on Stock Transfer and Goods Issue screens – SU details remain visible despite the option being enabled. |
| Bug | Server | (CORE) New Stock Counting – Error message occurred: ' ' is not a valid value for property 'U_MultiCounters'. The valid values are: 'Y' - 'Yes', 'N' - 'No' |
| Bug | Client | Download installers are served over an insecure address `http://localhost:31002` instead of using HTTPS |
| Bug | Client | Installer downloaded from the WMS server-hosted page does not include the version number in the file name. |
| Bug | Server | No logs are generated when WMS Settings is opened directly from Start menu. |
| Improvement | Client | Pick and Pack – No retry mechanism in place; operations fail without reattempt after errors or WMS restart, requiring manual intervention. |
| Improvement | WMS Main | Added optional parameter to move completed items to the bottom of the list, enhancing clarity. |
| Bug | Server | Old Stock Counting – Document not locked, allowing simultaneous edits. |
| Bug | Server | Error message occurred: "This SU is already packed into another SU" appears when attempting to reuse an SSCC. |
| Bug | Server | Delivery from Sales Order - "Forbid ordering greater quantities than on Order" function does not work with SU; CompuTec WMS allows over delivery without showing an error message. |
| Bug | Client | When "Use Sales UoM from based document" is enabled, the system displays batch quantity in Sales UoM but incorrectly auto-populates it into the Inventory UoM field. |
| Bug | Client | Best Before Date functionality not working. |
| Bug | Client | When Custom Config > Delivery > Use Sales UoM from based document is enabled, batch quantities are shown in Sales UoM but selecting a batch incorrectly fills Inventory UoM with the Sales UoM quantity. |
| Bug | Client | Incorrect Available Quantity displayed in Catch Weight. |
| Bug | Client | Label print window does not close after clicking "Print Labels" |
| Bug | Client Android | (VIANDES SEFICLO) GRPO - The scanned value goes to the logs after scanning and after pressing the Save button. |
| Bug | Client | Blank error notification shown in Pick List when updating base document: "Pick list exists. Bin locations information required." |
| Improvement | Client | Configure CompuTec WMS Settings to automatically run as Administrator to prevent permission-related issues during configuration and usage. |
| Improvement | Server | Added option in Delivery: "Disable the transaction during save." |
| Improvement | Client Android | Added option in the client to allow manual date entry. |
| Improvement | Server | Enabled customization of queries retrieving `FirstLocation` |
| Bug | Client | Put Away - Object reference not set to an instance of an object. |
| Bug | Client | CompuTec WMS application crashes after closing the decoder window. |
| Bug | Server | Unable to decrease quantity in SU in (CAPS) Stock Transfer. |
| Improvement | Labels Integration, Server | Print Inventory Transfer Batches and Serials before post. |

## CompuTec WMS Plugin 3.2506.2

**Release Date - 13 June 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | Server | In some cases the quantity on the pick list was not picked by scanning. After re-entering the pick list in CompuTec WMS the quantity was picked partially. |

## CompuTec WMS Plugin 3.2506.1

**Release Date - 11 June 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | PFI | Missing translation for the new column label addDefaultLinesLabel in PFI. |
| Bug | Client Android | Users encountered the following error message while attempting to install the application: <br/>"The application can't be installed because it is incompatible with the device (0xC7D24FBC)" |
| Bug | Client Android | In CORE - VIANDES SEFICLO, during GRPO creation, the data entered in Batch UDFs is not being saved or updated. |
| Bug | Server | (INNOV) In GRPO, scanning EAN codes starting with "13" recognizes the item but does not increment the quantity—this issue occurs specifically with UoMs having the "13" prefix, while other prefixes function correctly. |
| Bug | Server | (INNOV) In Pick and Pack, CompuTec WMS is unable to read barcodes. |
| Bug | Server | (INNOV) In Stock Transfer, when scanning a UoM barcode, the correct item and UoM are selected, but the quantity is incorrectly entered into the Quantity field or directly added to the Document Details screen. |
| Bug | Server | (VIANDES SEFICLO) In Delivery, Catch Weight quantities are incorrectly split based on the line number from the CompuTec WMS window rather than the selected batches. |
| Bug | Server | In Inventory Register, for Stock Transfer transactions, the LineNum and LplLine fields are either incorrect or not aligned. |
| Improvement | CompuTec WMS Plugin | Enable matching of Storage Category to the corresponding rule for better accuracy and control |
