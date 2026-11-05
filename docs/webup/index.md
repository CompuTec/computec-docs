---
sidebar_position: 1
---

# Introduction to CompuTec WebUp

**Platform:** CompuTec AppEngine Framework for SAP Business One Web Client

## About CompuTec WebUp

**CompuTec WebUp** is a browser-based customization and automation toolkit that lets you shape the SAP Business One Web Client interface. Instead of working with complex customization layers or coding, you can edit the screens, add helpful interactions, and apply business rules directly in your browser.

## Key benefits and features

- **Quick and easy to use**: The intuitive interface makes it easy for consultants and end users to implement changes, saving both time and money.
- **Simplified interface customization**: Easily move existing fields and UDFs (user-defined fields), change field properties, and rename their descriptions, hide fields, tabs, and action buttons to streamline form layouts and remove clutter.
- **Validation and data control**: Implement custom validations and rules to ensure data accuracy and enforce business logic before a document is created or updated. You can also validate documents with read-only SQL queries.
- **Process automations**: Create Smart Actions that run when a user adds, updates, cancels, or closes a document, changes a field, or clicks a button. Smart Actions can show confirmations, open SAP Business One documents, document lists, and CompuTec AppEngine applications, create documents through the Service Layer, and update fields.
- **Reusable values**: Create Parameters once and use them in many controls and Smart Actions, for example to show the document number as the text of a button.
- **Command palette actions**: Add your own actions to the command palette of the SAP Business One Web Client with Dot Actions. Users open the palette with the **.** key (dot or full stop).

:::info[Note]

The **CompuTec WebUp Roadmap** evolves over time. For the latest feature planning and prioritization, see the official [CompuTec WebUp Roadmap](https://trello.com/b/ePvajGq6/computec-webup-roadmap). This document describes general functional capabilities and does not represent confirmed release dates.

:::

## User roles

**CompuTec WebUp** is designed for:

- **System Administrators** managing CompuTec AppEngine extensions and wanting better control over UI changes
- **Implementation Consultants** needing low-code tools to deliver cleaner layouts and improved usability
- **Functional Analysts** / **Key Users** making screen or rule adjustments quickly without developer assistance

CompuTec WebUp lets you make meaningful improvements without needing to dive into development tools.

## How does CompuTec WebUp work

Here is how **CompuTec WebUp** works:

- It's created **exclusively for the SAP Business One Web Client**, and it doesn't work with the SAP Business One Desktop Client.
- It can be deployed **on-premises and cloud-based**, either **private or public cloud** via the **SAP Customer Cloud Center (CCC)**.
- It's built on the **CompuTec AppEngine Framework**, so every change you make follows the same lifecycle, versioning, and security standards used by all CompuTec AppEngine extensions.
- It follows **SAP Fiori guidelines**, maintaining the native SAP Business One Web Client's look and feel while enhancing flexibility.

:::info[Note]

All CompuTec WebUp settings are saved **directly in your company database**.

If a setting is supported by the **SAP Business One Web Client Extensibility Framework**, it is automatically deployed as a standard **SAP Business One Web Client** extension using the **SAP Business One Extension Manager**.

:::

▶ **Watch**: [CompuTec WebUp - First Launch](https://www.youtube.com/watch?v=YO3jdjChS4k&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=1)

## What a customized view contains

A customized view is made of the following elements:

- **Controls** – The fields, tabs, and buttons of the screen. You can hide, move, rename, or add them. [Read more](/docs/webup/components/control-management)
- **Smart Actions** – Reusable logic that you link to View Events (On Add, On Update, On Cancel, On Close) or to events of controls. Smart Actions can have Action Parameters. [Read more](/docs/webup/components/smart-actions)
- **Parameters** – Reusable values that you use in control properties and Smart Actions. [Read more](/docs/webup/components/parameters)
- **Dot Actions** – Your own actions in the command palette of the SAP Business One Web Client. Each Dot Action runs a Smart Action. [Read more](/docs/webup/components/dot-actions)

:::info[note]

Every change is saved as a version of the view. A version is either a **Draft** or **Active**, and only one version of a view is active at a time. You can activate an earlier version again at any time. [Read more](/docs/webup/components/view-management)

:::

## Design principles

**CompuTec WebUp** is built around a few guiding principles that help keep your configurations stable and easy to maintain:

1. **Browser-first design**: CompuTec WebUp runs fully in the browser and extends the SAP Business One Web Client without SDK or local installations.
2. **CompuTec AppEngine-integrated architecture**: All logic, data access, and configuration management run on the CompuTec AppEngine Framework.
3. **Configurable UI layer**: You can inspect, reposition, and edit UI elements inside supported SAP Business One Web Client screens.
4. **Event-driven behavior**: Link Smart Actions to View Events (On Add, On Update, On Cancel, On Close) or to control events, such as pressing a button or changing a field.
5. **Dynamic data connections**: You can link control values to live SAP data models, for example, Sales Quotation Total, using CompuTec AppEngine through Parameters.
6. **Version configuration management**: Every change is versioned, activable, and revertible.
7. **Modular evolution**: Future CompuTec WebUp features (layouts, actions, data integrations) can be added without affecting your existing setups.

:::info[Note]

**CompuTec WebUp** adheres to **SAP Fiori guidelines**, maintaining the native SAP Business One Web Client's look and feel while improving flexibility and usability. Read more about [SAP Fiori guidelines](https://www.sap.com/design-system/fiori-design-web/) and the [SAPUI5 framework](https://www.sap.com/design-system/fiori-design-web/v1-136/discover/get-started/ui5).

:::

## Components of CompuTec WebUp

Here is an overview of the key **CompuTec WebUp** components:

### CompuTec WebUp App (Plugin)

- Installed through the **CompuTec AppEngine Plugin (App) Store**.
- Responsible for executing customization and automation logic and for storing all **CompuTec WebUp** configuration settings.
- Runs on **CompuTec AppEngine 3.0** and acts as the backend foundation for the **CompuTec WebUp** solution.

### CompuTec WebUp Manager

- A browser extension that provides a side-panel user interface. For a description of the panel, see the [Overview](/docs/webup/components/overview).
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

:::info[Note]

- On **SAP Business One Web Client 2602 and later**, CompuTec WebUp extensions use the Web Client's authentication to communicate with CompuTec AppEngine. For these requests, you don't need this extension.
- **CompuTec WebUp Client** is available in the Chrome Web Store and in the Firefox Add-ons store under the CompuTec S.A. publisher. For installation steps, see [Installation and Activation](/docs/webup/installation-and-activation).

:::
