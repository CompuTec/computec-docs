---
sidebar_position: 3
---

# CompuTec PDC 4.0 Plugin Release Notes

Here you can find the release notes for CompuTec PDC 4.0 Plugin, highlighting new features, improvements, and bug fixes.

:::note[info]
You can find all [download links](https://learn.computec.one/docs/appengine/2.0/releases/plugins/pdc/download) and [release notes](https://learn.computec.one/docs/appengine/2.0/releases/plugins/pdc/release-notes) for the latest available CompuTec PDC 3.0 versions in CompuTec PDC 2.0 documentation.  
However, we strongly recommend using CompuTec PDC 4.0 Plugin together with CompuTec AppEngine 3.0 to benefit from the latest features, performance improvements, and ongoing support.
:::

## CompuTec PDC 4.2510.1

**Release Date - 29 October 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | PDC | Time synchronization issue occurs and is resolved only after restarting PDC (version 4.2506.1). |
| Bug | PDC | Confirmation Panel customization is not functioning. |

## CompuTec PDC 4.2509.1

**Release Date - 03 September 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Improvement | Downtimes | End time should be equal to the time when downtime was added. |
| Bug | PDC | Unable to edit dates in Quick Time Registration. |
| Bug | PDC | PDC freezes on pop-up screen, preventing user action and ultimately causing the application to crash. |
| Bug | PDC | Dropdown not functioning correctly when no custom values are defined. |
| Bug | PDC | Substitutes validity is not considered in PDC. |

## CompuTec PDC 4.2506.1

**Release Date - 9 June 2025**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | Tasks | Issue with duplicated date-time picker components appearing in the UI |
| Bug | CompuTec PDC | Quick receipt process failed with error "Nullable object must have a value" |
| Bug | Barcodes | Barcode Simulator is not available in .netCore |
| Bug | CompuTec PDC | Error "Problem with token SESSION" occurred during Bill of Materials/Manufacturing Order |
| Bug | Tasks | CompuTec PDC failed to load or display pictures correctly due to image handling issues |
| Improvement | CompuTec PDC | Sort Items based on sequence during issue and receipt processes |
| Bug | CompuTec PDC | Error "Sequence contains no matching element" when loading MO list |
| Bug | CompuTec PDC | Scanning by batch did not auto-fill item code, batch number, bin location, or allow quantity entry; also added validation for locked batches. |
| Improvement | Pick and Pack | Added "Auto Select All" button at the top of the CompuTec PDC Receipt/Issue window |
| Improvement | CompuTec WMS Plugin | Refresh token mechanism to support seamless re-login |
