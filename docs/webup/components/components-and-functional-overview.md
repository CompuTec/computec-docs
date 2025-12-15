---
sidebar_position: 1
---

# Overview

Here is an overview of the key **CompuTec WebUp** functions, along with examples of how they can be used in your daily work:

- **View Management**: Manage your configuration sets with full version control. You can add new views, activate them, or roll back to an older view at any time. Every time you edit a current view, its new version is automatically created and saved. Example: When you click Edit next to version 1.0.2, a new version 1.0.3 is created, while 1.0.2 remains active as a backup. [Read more](https://learn.computec.one/docs/webup/components/view-management)

- **Control Management**: Edit and reorganize UI controls in supported SAP Web Client screens. Adjust visibility, position, groupings, and labels to make the interface easier to use. Example: Reorder the Sales Quotation header, so the most important fields appear first. [Read more](https://learn.computec.one/docs/webup/components/control-management)

- **View Actions**: Create event-based automations and validations that run before or after user actions, such as On Update, On Save. Example: Show a confirmation message before a user saves changes to a document. [Read more](https://learn.computec.one/docs/webup/components/view-actions)

:::note[info]
**CompuTec WebUp Roadmap** evolves over time. For the latest feature planning and prioritization, refer to our official [CompuTec WebUp Roadmap](https://trello.com/b/ePvajGq6/computec-webup-roadmap).  
This document describes general functional capabilities and does not represent confirmed release dates.
:::

## Functional context

CompuTec WebUp is built around a few guiding principles that help keep your configurations stable and easy to maintain:

1. **Browser-first design**: Computec WebUp runs fully in the browser and extends the SAP Business One Web Client without SDK or local installations.
2. **CompuTec AppEngine-integrated architecture**: All logic, data access, and configuration management run on the CompuTec AppEngine Framework.
3. **Configurable UI layer**: You can inspect, reposition, and edit UI elements inside supported SAP Business One Web Client screens.
4. **Event-driven behavior**: You can define what happens during on-screen actions such as OnUpdate, OnAdd, or BeforeSave.
5. **Dynamic data connections**: You can link control values to live SAP data models, for example, Sales Quotation Total, using CompuTec AppEngine.  
6. **Version configuration management**: Every change is versioned, activatable, and revertible.
7. **Modular evolution**: Future CompuTec WebUp features (layouts, actions, data integrations) can be added without affecting your existing setups.

:::note[info]
CompuTec WebUp adheres to **SAP Fiori guidelines**, maintaining the native SAP Business One Web Client’s look and feel while improving flexibility and usability.
:::
