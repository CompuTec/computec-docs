---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Release Notes

## CompuTec Labels Printing Manager

Below are the release notes for CompuTec Labels Printing Manager, highlighting new features, improvements, and bug fixes in this release.

### CompuTec Labels Printing Manager 4.8.3

**Release Date – 14 May 2025**

| Issue Type | Component/s |Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Improvement | Printing Manager Application | - | The following object has been added to print serial label through WMS application: CT_WMS_SERIALINFOSAP. |
| Improvement | Printing Manager Application | SLABE-522 | Label printing for catch weight operations is now supported through the WMS. |
| Bug | Printing Manager Application | SLABE-1014 | It is now possible to conditionally set the NumberofCopies value in Mapping Table to zero. |
| Bug | Printing Manager Application | - | Output File Name wasn't supporting network path. |
| Bug | Printing Manager Application | - | The report rule could not be transferred using the Copy to Company function. |

### CompuTec Labels Printing Manager 4.8.2

**Release Date – 24 March 2025**

| Issue Type | Component/s |Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Bug | Printing Manager Application | SLABE-987 | The document attached via the report rule does not appear in the SAP UI in certain instances. |
| Bug | Printing Manager Application | SVILL-52 |Default query of Goods Receipt object isn't correct. |
| Bug | Printing Manager Application | - | A button has been added on Setup Wizard to auto-fill 
 credential. |
| Improvement | Printing Manager Application | - | Saving button in Printer Properties has been replaced. |
| Improvement | Printing Manager Application | SLABE-992 | Dash char ![dash](./media/dash.png) in database name causes error exception. |

### CompuTec Labels Printing Manager 4.8.1

**Release Date – 26 February 2025**

| Issue Type | Component/s |Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Improvement | Printing Service | SLABE-898 | Occasional misordering of request processing may occur. |
| Improvement | Printing Service | SLABE-984 | The printing service seldom encounters the following error message: HRESULT: 0x8007045A. |

### CompuTec Labels Printing Manager 4.8.0

**Release Date – 21 February 2025**

| Issue Type | Component/s |Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Bug | Printing Manager Application | SLABE-979 | Card Type filter parameter is not considered by the application while picking Reports to print. |
| Bug | Printing Manager Application | - | The application does not account for the printer statically defined in the object query. |
| Bug | Printing Service | - |Goods Receipt created based on Pick Receipt doesn't create request in the application |
| Bug | Printing Service | SLABE-972 |CT Labels report printing doesn't support using query parameters in the custom rule. |

## CompuTec Labels SAP Addon

Below are the release notes for CompuTec Labels SAP Addon, highlighting new features, improvements, and bug fixes in this release.

### CompuTec Labels SAP Addon 2.10.300

**Release Date – 21 February 2025**

| Issue Type | Reference Support | Release Note |
| --- | --- | --- |
| Improvement | - | New option has been added in the printer list in the Printer Preview window of CT Labels Add-on. It is now possible to send request to printers which are set in the query. |

## CompuTec Gateway

Below are the release notes for CompuTec Gateway, highlighting new features, improvements, and bug fixes in this release.

### CompuTec Gateway Manager 1.2.1 HF1

**Release Date – 10 April 2025**

| Issue Type | Component/s | Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Bug | Gateway | SRIVL-149 | Export path of report file wasn't correct in Gateway machine. |

### CompuTec Gateway Manager 1.2.1

**Release Date – 11 March 2025**

| Issue Type | Component/s | Reference Support Ticket | Release Note |
| --- | --- | --- | --- |
| Improvement | Gateway | - | New versioning (semver) system has been applied. |
| Improvement | Gateway | - | Gateway Manager executable file name has been updated. |
