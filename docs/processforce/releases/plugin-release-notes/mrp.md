---
sidebar_position: 12
---

# CompuTec MRP

Below are the release notes for CompuTec MRP Plugin, highlighting new features, improvements, and bug fixes in this release.

## CompuTec MRP 3.2601.1

**Release Date: 29 January 2026**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| New | MRP | You can now group **Order Recommendations**. Grouping help reduce document volume and manual work. Here's how it works: <ol><li>Go to **CompuTec MRP** > **Order Recommendations** > **Recommendation Details**.</li><li>Select multiple recommendations using the checkbox next to each order.</li><li>Click **Create**.</li><li>Choose one of the following options:<ul><li>**Create Documents** – creates one document per order (same behavior as before).</li><li>**Create Grouping Documents** – groups multiple orders into fewer documents automatically.</li></ul></li></ol> When you choose **Create Grouping Documents**, the system groups orders automatically based on the document type: <ul><li> **Purchase Order**, **Purchase Quotation**, **Purchase Request** are grouped by **Vendor Name**</li><li>**Manufacturing Order** is grouped by **Item Name** and **Revision Name**</li><li>**Inventory Transfer Request** is grouped by **Target Warehouse**</li></ul> Only the document types that match your selection are shown, keeping the screen clean and easy to use. |
| New | MRP | You can now consolidate recommendations before creating documents. It gives you cleaner recommendation lists and better quantity control. Here's how it works: <ol><li>Go to **CompuTec MRP** > **Order Recommendations** > **Recommendation Details**.</li><li>Select multiple recommendations using the checkbox next to each order. The selected orders need to have the same values in the following fields:<ul><li>**Order Type**</li><li>**Item Code**</li><li>**Revision Code**</li><li>**Due Date**</li><li>**To Warehouse**</li></ul></li><li>Click **Consolidation** > **Consolidate Recommendations**.</li><li>The system automatically sums all quantities and shows one consolidated recommendation.</li></ol> You can always see which recommendations were included, and click **Undo Consolidation** to go back to the original list. |
| Fixed | MRP | Fixed an error that could prevent **Recommendation Details** from opening, ensuring uninterrupted planning work. |
| Fixed | MRP, ProcessForce | MRP scenarios now run without system errors, making planning runs more stable and reliable. |

## CompuTec MRP 3.2512.2

**Release Date: 3 December 2025**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Fixed | MRP | Fixed an issue where decimal places were not applied correctly in MRP calculations despite the configured decimal precision settings. Decimal values are now displayed and calculated according to the defined parameter. |

## CompuTec MRP 3.2510.1

**Release Date: 29 October 2025**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Bug | MRP | Issues with Order Recommendation |

## CompuTec MRP 3.2508.2

**Release Date: 04 August 2025**

| Issue Type | Components | Release Note |
| --- | --- | --- |
| Bug | .netCore , MRP | MRP – Item Selection: Setting Internal Lead Time to 0 (zero) is not working as expected. |
