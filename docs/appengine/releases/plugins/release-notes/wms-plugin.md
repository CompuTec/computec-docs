---
sidebar_position: 4
---

# CompuTec WMS Plugin

Below are the release notes for CompuTec WMS Plugin, highlighting new features, improvements, and bug fixes in this release.

---

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
| Bug | Client |  Inventory Transfer – negative batch/bin location quantities appear after scanning a batch. WMS merges batches into a single location, causing incorrect quantity display. |
| Bug | Client | Catch Weight – unable to add a new row; system does not accept input or triggers no action. |
| Bug | Client Android | MAUI – Scanning cannot be enabled on the Login screen; swipe-right gesture to activate scanning is not functioning. |
| Bug | Server | (Ortho Solutions) Pick Order – Missing Order by `LineNum` clause in the query for the Document Details screen, causing lines to display in incorrect sequence. |
| Bug | Client | (EMCM) "Hide SU" function does not work on Stock Transfer and Goods Issue screens – SU details remain visible despite the option being enabled. |
| Bug | Server | (CORE) New Stock Counting – Error message occurred: ' ' is not a valid value for property 'U_MultiCounters'. The valid values are: 'Y' - 'Yes', 'N' - 'No' |
| Bug | Client | Download installers are served over an insecure address `http://localhost:31002` instead of using HTTPS |
| Bug | Client | Installer downloaded from the WMS server-hosted page does not include the version number in the file name. |
| Bug | Server | No logs are generated when WMS Settings is opened directly from Start menu. |
| Improvement | Client | Pick and Pack – No retry mechanism in place; operations fail without reattempt after errors or WMS restart, requiring manual intervention. |
| Improvement | WMS Main | Added optional parameter to move completed items to the bottom of the list, enhancing clarity.|
| Bug | Server | Old Stock Counting – Document not locked, allowing simultaneous edits. |
| Bug | Server | Error message occurred: "This SU is already packed into another SU" appears when attempting to reuse an SSCC. |
| Bug | Server | Delivery from Sales Order - "Forbid ordering greater quantities than on Order" function does not work with SU; CompuTec WMS allows over delivery without showing an error message. |
| Bug | Client |  When "Use Sales UoM from based document" is enabled, the system displays batch quantity in Sales UoM but incorrectly auto-populates it into the Inventory UoM field. |
| Bug | Client | Best Before Date functionality not working. |
| Bug | Client | When Custom Config > Delivery > Use Sales UoM from based document is enabled, batch quantities are shown in Sales UoM but selecting a batch incorrectly fills Inventory UoM with the Sales UoM quantity. |
| Bug | Client | Incorrect Available Quantity displayed in Catch Weight. |
| Bug | Client |  Label print window does not close after clicking "Print Labels" |
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
| Bug | Server|  In some cases the quantity on the pick list was not picked by scanning. After re-entering the pick list in CompuTec WMS the quantity was picked partially. |

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
