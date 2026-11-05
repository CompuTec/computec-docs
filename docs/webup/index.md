---
sidebar_position: 1
---

# Introduction to CompuTec WebUp

**Version:** 1.0  
**Platform:** CompuTec AppEngine Framework for SAP Business One Web Client

## About CompuTec WebUp

**CompuTec WebUp** is a browser-based customization and automation toolkit that lets you shape the SAP Business One Web Client interface. Instead of working with complex customization layers or coding, you can edit the screens, add helpful interactions, and apply business rules directly in your browser.

## Key benefits and features

- **Quick and easy to use**: The intuitive interface makes it easy for consultants and end users to implement changes, saving both time and money.
- **Simplified interface customization**: Easily move existing fields and UDFs (user-defined fields), change field properties, and rename their descriptions, hide fields, tabs, and action buttons to streamline form layouts and remove clutter.
- **Validation and data control**: Implement custom validations and rules to ensure data accuracy and enforce business logic before a document is created or updated.
- **Validation and data control**: Implement custom validations and rules to ensure data accuracy and enforce business logic before a document is created or updated. You can also validate documents with read-only SQL queries.
- **Process automations**: Create Smart Actions that run when a form or data loads, when a user changes a field, or when a user clicks a button. Smart Actions can show confirmations, open SAP Business One documents, document lists, and CompuTec AppEngine applications, create documents through the Service Layer, and update fields.
- **Reusable values**: Create Parameters once and use them in many controls and Smart Actions, for example to show the document number as the text of a button.
- **Command palette actions**: Add your own actions to the `.` (dot or full stop key) command palette of the SAP Business One Web Client with Dot Actions.

## User roles

**CompuTec WebUp** is designed for:

- **System Administrators** managing CompuTec AppEngine extensions and wanting better control over UI changes
- **Implementation Consultants** needing low-code tools to deliver cleaner layouts and improved usability
- **Functional Analysts** / **Key Users** making screen or rule adjustments quickly without developer assistance

CompuTec WebUp lets you make meaningful improvements without needing to dive into development tools.

## How does CompuTec WebUp work

Here is how **CompuTec WebUp** works:

- It’s created **exclusively for the SAP Business One Web Client**, and it doesn’t work with the SAP Business One Desktop Client.  
- It can be deployed **on-premises and cloud-based**, either **private or public cloud** via the **SAP Customer Cloud Center (CCC)**.
- It’s built on the **CompuTec AppEngine Framework**, so every change you make follows the same lifecycle, versioning, and security standards used by all CompuTec AppEngine extensions.  
- It follows **SAP Fiori guidelines**, maintaining the native SAP Business One Web Client’s look and feel while enhancing flexibility.

:::info[Note]

All CompuTec WebUp settings are saved **directly in your company database**.

If a setting is supported by the **SAP Business One Web Client Extensibility Framework**, it is automatically deployed as a standard **SAP Business One Web Client** extension using the **SAP Business One Extension Manager**.
:::

▶ **Watch**: [CompuTec WebUp - First Launch](https://www.youtube.com/watch?v=YO3jdjChS4k&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=1)

## Components of CompuTec WebUp

Here is an overview of the key **CompuTec WebUp** components:

### CompuTec WebUp App (Plugin)

- Installed through the **CompuTec AppEngine Plugin (App) Store**.
- Responsible for executing customization and automation logic and for storing all **CompuTec WebUp** configuration settings.
- Runs on **CompuTec AppEngine 3.0** and acts as the backend foundation for the **CompuTec WebUp** solution.

### CompuTec WebUp Manager

- A browser extension that provides a side-panel user interface.
- Allows administrators and consultants to create, edit, and test configuration settings and to preview changes before deployment.
- Includes a [built-in **Help Mode**](https://www.youtube.com/watch?v=DBv20ifpcCY) that provides direct access to **SAP Business One** documentation. When enabled, contextual help links are displayed next to supported controls, properties, and **SAP Business One** objects.
- Where possible, it uses the **SAP Business One Web Client Extensibility Framework** for supported configuration options.

:::info[Note]

**CompuTec WebUp Manager** is available in the Chrome Web Store under the CompuTec S.A. publisher. It is not available for Mozilla Firefox. For installation steps, see [Installation and Activation](/docs/webup/installation-and-activation).

:::

### CompuTec WebUp Client

- A browser extension that extends the **SAP Business One Web Client** beyond the limitations of the standard extensibility framework.
- At present, operates mainly in the background as an additional authenticator for **CompuTec AppEngine**.
- In future releases, it'll be used more broadly to enable advanced customization and extension scenarios.
- Like the **CompuTec WebUp Manager**, currently installed manually using the browser’s **Developer Mode**.

:::info[Note]

- On **SAP Business One Web Client 2602 and later**, CompuTec WebUp extensions use the Web Client's authentication to communicate with CompuTec AppEngine. For these requests, you don't need this extension.
- CompuTec WebUp Client is available in the Chrome Web Store and in the Firefox Add-ons store under the CompuTec S.A. publisher.

:::
