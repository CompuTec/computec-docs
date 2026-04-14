---
sidebar_position: 1
---

# CompuTec WebUp Release Notes

## CompuTec WebUp 1.2604.1

**Release Date: 1 April 2026**

| Type | Release Note |
| --- | --- |
| Fixed | Fixed an issue where **Smart Actions** were not always visible, ensuring your configured actions now appear reliably and work as expected. |

## CompuTec WebUp 1.2603.2

**Release Date: 31 March 2026**

| Type | Release Note |
| --- | --- |
| New | Introduced [**Smart Actions**](https://learn.computec.one/docs/webup/components/smart-actions), extending the concept of **View Actions** by making your logic reusable, flexible, and applicable across multiple areas of the **SAP Business One Web Client**. [Read more](https://learn.computec.one/docs/webup/components/smart-actions) |
| New | Added **+ New Control** option, so you can now add your own controls instead of only editing existing ones, giving you full flexibility in UI design. |
| New | Added support for two new controls: [**MultiComboBox**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/a8cd89ab240b4496b5b5b9bcdcb66731.html) and [**MultiInput**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/63c7fb6ed1f04dd8b2f4625cede634ec.html), enabling more advanced user input scenarios. |
| Improved | Improved **Content Security Policy (CSP)** handling during installation and updates, ensuring more stable and secure deployments. |
| Improved | **Validation** is now triggered correctly when switching from **Basic** to **Dynamic** expressions, preventing invalid or empty values. |
| Improved | Added help descriptions for all control properties, including guidance and links to SAP documentation – making configuration easier and faster. |
| Improved | Selecting a control in the UI now automatically highlights it in the **Controls** list, making it easier to identify and edit. |
| Improved | Introduced new script editor for **View Actions**, improving readability and editing experience for scripts. |
| Improved | Improved handling of loading states and layout rendering, reducing visual glitches during navigation and preview. |
| Fixed | Fixed issues with **DataContext** errors when editing controls multiple times, improving stability during configuration. |
| Fixed | Fixed issue where **Save** remained disabled after correcting an invalid expression – you can now save changes without problems. |
