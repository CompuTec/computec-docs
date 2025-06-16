---
sidebar_position: 4
---

# CompuTec WMS Plugin

Below are the release notes for CompuTec WMS Plugin, highlighting new features, improvements, and bug fixes in this release.

---

## CompuTec WMS Plugin 3.2506.1

**Release Date - 11 June 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | PFI | Missing translation for the new column label addDefaultLinesLabel in PFI. |
| Bug | Client Android | Users encountered the following error message while attempting to install the application: <br/>"The application can't be installed because it is incompatible with the device (0xC7D24FBC)" |
| Bug | Client Android | In CORE - VIANDES SEFICLO, during GRPO creation, the data entered in Batch UDFs is not being saved or updated. |
| Bug | Server | (INNOV) In GRPO, scanning EAN codes starting with "13" recognizes the item but does not increment the quantity—this issue occurs specifically with UoMs having the "13" prefix, while other prefixes function correctly. |
| Bug | Server | (INNOV) In Pick and Pack, WMS is unable to read barcodes. |
| Bug | Server | (INNOV) In Stock Transfer, when scanning a UoM barcode, the correct item and UoM are selected, but the quantity is incorrectly entered into the Quantity field or directly added to the Document Details screen. |
| Bug | Server | (VIANDES SEFICLO) In Delivery, Catch Weight quantities are incorrectly split based on the line number from the WMS window rather than the selected batches. |
| Bug | Server | In Inventory Register, for Stock Transfer transactions, the LineNum and LplLine fields are either incorrect or not aligned. |
| Improvement | WMS Plugin | Enable matching of Storage Category to the corresponding rule for better accuracy and control |

## CompuTec WMS Plugin 3.2506.2

**Release Date - 13 June 2025**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Bug | Server|  In some cases the quantity on the pick list was not picked by scanning. After re-entering the pick list in WMS the quantity was picked partially. |
