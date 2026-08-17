---
sidebar_position: 3
---

# CompuTec PDC 4.0 Plugin Release Notes

Here you can find the release notes for CompuTec PDC 4.0 Plugin, highlighting new features, improvements, and bug fixes.

:::note[info]
You are currently viewing documentation for **CompuTec PDC 4.0**.

You can find all [download links](/docs/appengine/2.0/releases/plugins/pdc/download) and [release notes](/docs/appengine/2.0/releases/plugins/pdc/release-notes) for the **CompuTec PDC 3.0** versions in **CompuTec AppEngine 2.0** documentation.

However, we strongly recommend using **CompuTec PDC 4.0 Plugin** together with **CompuTec AppEngine 3.0** to benefit from the latest features, performance improvements, and ongoing support.
:::

## CompuTec PDC 4.2607.2

**Release Date: 23 July 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Goods Issue | Fixed an issue where the bin location and warehouse quantity were not displayed immediately for the resource's default bin-managed warehouse. The correct values are now shown without having to reselect the warehouse. |
| Fixed | Issue to Production | Fixed an SQL syntax error that could occur when opening the **Item Substitutes** window during **Issue to Production**. The substitute items list now opens correctly, and item descriptions are retrieved only when a custom **Item Description Function** is configured. |

## CompuTec PDC 4.2607.1

**Release Date: 10 July 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | Quality Control | You can now update both the **Quality Control Document Status** and **QC Test Status** directly from **CompuTec PDC**, eliminating the need to switch to another application. |
| Improved | Issue to Production | **Issue to Production** now displays the issued quantity for each batch, making it easier to verify issued materials during production. |
| Improved | Downtimes | When ending a downtime, the previously selected downtime reason is now filled in automatically, reducing manual data entry. |
| Fixed | Goods Issue, Goods Receipt | Fixed an error that could occur during **Goods Issue** and **Goods Receipt** when both an **Item Description Function** and an **Issue/Receipt Function** were configured. |
| Fixed | Quality Control | Fixed an issue that prevented saving **QC Test Properties** when reference codes were used, allowing **Quality Control** documents to be updated successfully. |
| Fixed | Instructions | Fixed an issue where **Instructions** or **Technical Instructions** with no content could cause **CompuTec PDC** to close unexpectedly when opened. |
| Fixed | Downtimes | Fixed the downtime timer so it now updates correctly during screen refreshes. |
| Fixed | Instructions | Fixed the display of special characters, including accented characters used in languages such as French, in production instructions. |

## CompuTec PDC 4.2605.2

**Release Date: 14 May 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Improved | PDC | Added weight capture control support in **Manufacturing Order Confirmation**. |
| Improved | PDC | Added tooltips and text wrapping for **Operation and Quantity Registration** column headers, improving readability of longer labels. |
| Improved | PDC | Corrected **Manufacturing Order Confirmation** header information and added **SAP navigation links** for **Manufacturing Order** and **Item Code** fields. |
| Improved | PDC | Added validation to prevent opening **Manufacturing Confirmation** for operations configured with ``Backflush`` issue type. |
| Fixed | PDC | Fixed an issue where **Manufacturing Confirmation** could become unresponsive after validation errors. |
| Fixed | Management Board, PDC | Fixed an issue where managers could not see quantities registered by employees in task details. |
| Fixed | PDC | Fixed intermittent issues with run time registration when using the **date picker**. |
| Fixed | PDC | Fixed **ScannerTarget** handling for collection filters in **Quantity Registration** reports. |

## CompuTec PDC 4.2605.1

**Release Date: 7 May 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | PDC | Fixed an issue where **QC tests** created for manufacturing operations were not visible in **CompuTec PDC** tasks. Users can now access operation QC documents correctly during production reporting. |
| Fixed | PDC | Fixed an issue where closed tasks that were not started remained visible on the screen. Tasks are now removed correctly after closing, without requiring users to log out and back in. |
| Fixed | Barcodes | Improved barcode handling in **Quick Issue**. Scanning item and batch barcodes now correctly selects the related batch information automatically. |
| Fixed | Downtimes | Fixed downtime task handling in **CompuTec PDC**. Additional downtime reasons are now saved correctly, and closed downtime tasks are removed from the screen immediately. |

## CompuTec PDC 4.2603.1

**Release Date: 5 March 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Added | PDC | Introduced **Quantity and Time Registration**, a new web-based module of CompuTec PDC Plugin. Users can now register time and produced quantities directly against **Operation–Resources**. While booking time, it is also possible to post related inventory transactions, making reporting faster and more integrated. |
| Improved | AE Analytics, PDC | The **Production Data Capture (PDC)** plugin is now available directly in the **SAP UI menu**, making it easier for users to access CompuTec PDC functionalities from within SAP. |
| Improved | PDC | The **Revision from MO** is now displayed next to the **Item Code** in **Issue to Production** and **Receipt from Production**, helping users identify the correct item revision during the transactions. |
| Fixed | PDC | Fixed an issue where **Add Tile Barcode** did not work correctly when scanning barcodes. |
| Fixed | PDC | Fixed an issue where clicking the **Save (disk) icon** while editing **DownTime** appeared to revert changes. Edits are now saved and displayed correctly. |
| Fixed | Login | Fixed an issue where users could encounter an ``Object reference not set to an instance of an object`` error during CompuTec PDC login. |
| Fixed | AE Analytics | Fixed an issue where posting returns during **Manufacturing Confirmation** could result in the error ``Transaction End No Lock Applied``. |

## CompuTec PDC 4.2510.1

**Release Date: 29 October 2025**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | PDC | Fixed a time synchronization issue that could occur after prolonged use. The application now remains synchronized without requiring a restart. |
| Fixed | Confirmation Panel | Fixed an issue where **Confirmation Panel** customizations were not applied correctly. |

## CompuTec PDC 4.2509.1

**Release Date: 03 September 2025**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Improved | Downtimes | The **End Time** of a downtime is now automatically set to the time when the downtime is completed. |
| Fixed | Quick Time Registration | Fixed an issue that prevented editing dates in **Quick Time Registration**. |
| Fixed | PDC | Fixed an issue where PDC could become unresponsive after displaying a pop-up window, causing the application to freeze. |
| Fixed | User Interface | Fixed an issue where drop-down lists did not work correctly when no custom values were configured. |
| Fixed | Item Substitutes | Fixed an issue where substitute item validity dates were not considered during production. |

## CompuTec PDC 4.2506.1

**Release Date - 9 June 2025**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | User-Defined Fields | Added support for displaying **User-Defined Fields (UDFs)** in item selection and **Issue/Receipt** screens. **[Read more](/docs/pdc/administrator-guide/setting-up-the-application/pdc-settings/display-udfs/)** |
| Improved | Issue & Receipt | Items are now sorted according to their sequence during **Issue to Production** and **Receipt from Production**. |
| Improved | Pick and Pack | Added an **Auto Select All** button to the **Issue** and **Receipt** screens to simplify item selection. |
| Improved | Authentication | Improved the refresh token mechanism to provide a more reliable automatic sign-in experience. |
| Fixed | Tasks | Fixed an issue where duplicate date and time picker controls were displayed. |
| Fixed | Goods Receipt | Fixed an error that could occur during **Quick Receipt**, preventing the document from being created. |
| Fixed | Barcode Simulator | Added support for the **Barcode Simulator** in the .NET Core version of PDC. |
| Fixed | Session Management | Fixed an issue that could display the **"Problem with token SESSION"** error when working with Bills of Materials or Manufacturing Orders. |
| Fixed | Tasks | Fixed an issue that prevented images from loading or displaying correctly. |
| Fixed | Manufacturing Orders | Fixed an issue that could cause the **"Sequence contains no matching element"** error when loading the Manufacturing Order list. |
| Fixed | Barcode Scanning | Scanning a batch barcode now automatically fills the item, batch, and bin location fields, supports quantity entry, and validates locked batches. |
