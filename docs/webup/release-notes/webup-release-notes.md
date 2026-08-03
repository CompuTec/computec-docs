---
sidebar_position: 1
---

# CompuTec WebUp Release Notes

## CompuTec WebUp 1.2608.1

**Release Date: 3 August 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Smart Actions | Fixed an issue where the **Smart Action** script editor was locked in read-only mode for draft views. Scripts can now be created and edited normally when adding or modifying **Smart Actions**. |

## CompuTec WebUp 1.2607.1

**Release Date: 24 July 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | View Actions | Fixed an issue where **Save & Preview** could display an outdated version of a view. Changes to **View Actions** and **View Events** are now applied immediately on the first preview. |

## CompuTec WebUp 1.2606.1

**Release Date: 22 June 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | CompuTec WebUp Manager | Added support for **Sales Opportunity** documents in **CompuTec WebUp Manager**. Opening the **CompuTec WebUp Manager** side panel on a **Sales Opportunity** now correctly displays the view designer instead of the ``Unsupported View`` or ``Layout Error`` message, allowing users to design and manage layouts for this document type. |

## CompuTec WebUp 1.2604.1

**Release Date: 1 April 2026**

| Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Smart Actions | Fixed an issue where **Smart Actions** were not always visible, ensuring your configured actions now appear reliably and work as expected. |

## CompuTec WebUp 1.2603.2

**Release Date: 31 March 2026**

| Type | Component | Release Note |
| --- | --- | --- |
| New | Smart Actions | Introduced [**Smart Actions**](https://learn.computec.one/docs/webup/components/smart-actions), extending the concept of **View Actions** by making your logic reusable, flexible, and applicable across multiple areas of the **SAP Business One Web Client**. [Read more](https://learn.computec.one/docs/webup/components/smart-actions) |
| New | Control Management | Added **+ New Control** option, so you can now add your own controls instead of only editing existing ones, giving you full flexibility in UI design. |
| New | Control Management | Added support for two new controls: [**MultiComboBox**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/a8cd89ab240b4496b5b5b9bcdcb66731.html) and [**MultiInput**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/63c7fb6ed1f04dd8b2f4625cede634ec.html), enabling more advanced user input scenarios. |
| Improved | CSP | Improved **Content Security Policy (CSP)** handling for **SAP Business One Web Client** environments. |
| Improved | Control Management | **Validation** is now triggered correctly when switching from **Basic** to **Dynamic** expressions, preventing invalid or empty values. |
| Improved | COntrol Management | Added help descriptions for all control properties, including guidance and links to SAP documentation – making configuration easier and faster. |
| Improved | Control Management | Selecting a control in the UI now automatically highlights it in the **Controls** list, making it easier to identify and edit. |
| Improved | View Actions | Introduced new script editor for **View Actions**, improving readability and editing experience for scripts. [Read more](https://microsoft.github.io/monaco-editor/) |
| Improved | UI | Improved handling of loading states and layout rendering, reducing visual glitches during navigation and preview. |
| Fixed | Control Management | Fixed issues with **DataContext** errors when editing controls multiple times, improving stability during configuration. |
| Fixed | UI | Fixed issue where **Save** remained disabled after correcting an invalid expression – you can now save changes without problems. |
