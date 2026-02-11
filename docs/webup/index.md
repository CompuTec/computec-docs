---
sidebar_position: 1
---

# Introduction to CompuTec WebUp

**Version:** 1.0  
**Platform:** CompuTec AppEngine (AE) Framework for SAP Business One Web Client

:::info[note]
**CompuTec WebUp** is part of the **CompuTec AppEngine** ecosystem.  

It is offered in preview **from October 2025 to March 2026** under the **CompuTec WebUp Preview Program**, allowing you to explore its customization and automation capabilities within the SAP Business One Web Client.
:::

## About CompuTec WebUp

**CompuTec WebUp** is a browser-based customisation and automation toolkit that lets you shape the SAP Business One Web Client interface. Instead of working with complex customization layers or coding, you can edit the screens, add helpful interactions, and apply business rules directly in your browser.

## Key benefits and features

- **Quick and easy to use**: The intuitive interface makes it easy for consultants and end users to implement changes, saving both time and money.
- **Simplified interface customization**: Easily move existing fields and UDFs (user-defined fields), change field properties, and rename their descriptions, hide fields, tabs, and action buttons to streamline form layouts and remove clutter.
- **Validation and data control**: Implement custom validations and rules to ensure data accuracy and enforce business logic before a document is created or updated.
- **Build process automations**: Create powerful JavaScript-based automations to trigger actions based on specific view events, such as creating documents via the Service Layer, or updating fields.

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

▶ **Watch**: [CompuTec WebUp - First Launch](https://www.youtube.com/watch?v=YO3jdjChS4k&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=1)

## Components of CompuTec WebUp

Here is an overview of the key CompuTec WebUp components:

### CompuTec WebUp App (Plugin)

- Installed through the CompuTec AppEngine Plugin (App) Store.
- Responsible for executing customization and automation logic and for storing all CompuTec WebUp configuration settings.
- Runs on CompuTec AppEngine 3.0 and acts as the backend foundation for the CompuTec WebUp solution.

### CompuTec WebUp Manager

- A browser extension that provides a side-panel user interface.
- Allows administrators and consultants to create, edit, and test configuration settings and to preview changes before deployment.
- Currently installed manually using the browser’s Developer Mode.
- Where possible, it uses the SAP Business One Web Client Extensibility Framework for supported configuration options.

### CompuTec WebUp Client

- A browser extension that extends the SAP Business One Web Client beyond the limitations of the standard extensibility framework.
- At present, operates mainly in the background as an additional authenticator for CompuTec AppEngine.
- In future releases, it'll be used more broadly to enable advanced customization and extension scenarios.
- Like the Manager, currently installed manually using the browser’s Developer Mode.

:::info[Note]
All CompuTec WebUp settings are saved **directly in your company database**.

If a setting is supported by the **SAP Business One Web Client Extensibility Framework**, it is automatically deployed as a standard SAP Business One Web Client extension using the **SAP Business One Extension Manager**.
:::
