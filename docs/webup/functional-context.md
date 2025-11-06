---
sidebar_position: 2
---

# Functional Context

:::info
The **WebUp roadmap** evolves continuously.  
For the latest feature planning and prioritization, refer to the official Trello board:  
👉 [CompuTec WebUp Roadmap](https://trello.com/b/ePvajGq6/computec-webup-roadmap)  
This document provides a general functional overview and does not represent confirmed release dates.
:::

The **WebUp add-on** introduces a configurable enhancement layer for the **SAP Business One Web Client (AE)**.

Its main purpose is to improve **interface efficiency, clarity, and adaptability** while maintaining full compliance with **CompuTec AppEngine (AE)** standards.

WebUp operates entirely within the **browser layer** and does not require **SAP SDK**, **DI-API**, or any **desktop integration components**.

Administrators and key users can define **adaptive interface behaviors**, **parameterized layouts**, and **interactive logic** directly from the web environment — using configuration profiles stored and executed through the **AppEngine context**.

All extensions remain **modular**, **portable**, and **version-controlled** within AE.

---

## Functional Domains and Current Status

The table below provides an overview of all currently available and planned components of the WebUp extension.  
Each feature represents a distinct configuration domain within the **CompuTec AppEngine (AE)** ecosystem.

> **Note:**  
> The current development follows a *defined launch scope* and a continuously evolving backlog structure.  
> There are two categorized development streams:  
> - **Planned backlog** – approved and prioritized features scheduled for future releases.  
> - **Unplanned backlog** – conceptual or exploratory items pending evaluation.

---

| Component | Primary Function | AE Layer | Current Status | Example Use Case |
|-----------|------------------|----------|----------------|------------------|
| **View Layouts** | Modify and rearrange UI controls; manage visibility and positioning of fields. Context-aware by user role. | UI + Config Layer (AppEngine → ViewModel API) | ✅ Implemented | Adjust *Sales Quotation* header layout to show key fields first |
| **Interactive Actions** | Event-based automation and validation (e.g., *OnUpdate*, *OnAdd*, *OnCancel*, *OnClose*). Enables user-driven logic such as confirmation dialogs, conditional validations, and Smart Actions. | Logic Layer (Event & Action Processing) | ✅ Implemented | Display confirmation dialog before saving a modified document |
| **Views Management** | Store and version configuration sets; enable activation/rollback between profile versions. Changes tracked within the AE Profile Repository. | Config Layer (Profile Repository) | ✅ Implemented | Create v1.0.3 layout while keeping v1.0.2 active for rollback |
| **Data Integration** | Link UI elements to SAP B1 data models through AE Data API, enabling dynamic, data-driven behavior. | Data Layer (AE REST API) | 🔬 Prototype / In Development | Dynamically bind “Total” field to *Sales Quotation* model value |
| **Event Bindings** | Register UI-level events (*OnLoad*, *OnChange*, *OnUpdate/BeforeSave*) that trigger client or AppEngine logic. | Logic Layer (Event & Action Processing) | 🔬 Prototype / In Development | Trigger custom validation when a field value changes |
| **Dynamic Components** | Extend existing layouts with custom panels, buttons, or contextual blocks rendered dynamically through AppEngine configuration. Follows SAPUI5 standards. | UI Layer (Component Host) | 📋 Planned (backlog) | Add custom KPI panel to *Sales Order* view |
| **Navigation Links** | Configure contextual navigation paths between AE views or related SAP objects, improving workflow continuity. | Navigation Layer | 📋 Planned | Quick navigation from *Sales Quotation* to related *Business Partner* |
| **Context Panels** | Display contextual data (KPIs, totals, statistics) relevant to the active view. | Data Layer (AE Query Engine) | 📋 Planned | Show customer credit status in *Sales Quotation* sidebar |
| **Background Tasks** | Schedule local or server-side operations using AE task services. Enables automated routines and system maintenance actions. | Task Layer (AE Scheduler) | 📋 Planned | Automated daily report generation and distribution |
| **Localization Framework** | Manage multilingual captions, labels, and UI text within configuration profiles. | Config Layer (Locale Manager) | 📋 Planned | Support multiple language interfaces within a single deployment |

---

### Status Legend

- **✅ Implemented** – Fully functional and available for production use  
- **🔬 Prototype / In Development** – Core functionality available, ongoing refinement  
- **📋 Planned** – Scheduled for future release, part of backlog roadmap  

---

## Key Principles

- **Browser-native execution** – WebUp operates fully within the browser, extending the SAP Business One Web Client (AE) without SAP SDK or DI-API dependencies.  
- **AE-integrated architecture** – all operations run within the **CompuTec AppEngine Framework**, which hosts configuration profiles, manages authentication, and logs all interactions through standard AE services.  
- **Configurable UI Layer** – users can inspect, edit, and reposition UI controls directly within supported Web Client views.  
- **Event-driven automation** – on-screen actions such as *OnUpdate* or *BeforeSave* can trigger interactive actions or validations defined in the active profile.  
- **Dynamic data binding** – control values can be linked to live SAP data models (e.g., *Sales Quotation Total*) via the **AE Data API**.  
- **Versioned configuration management** – each profile revision is stored, activated, and rolled back through the **AE Config Layer**, ensuring controlled lifecycle management.  
- **Consistent security model** – all requests from the browser extension to AppEngine pass through the authenticated **API Gateway** (`/api/v1/*`), enforcing AuthN/AuthZ policies.  
- **Modular evolution** – WebUp functional domains (Layouts, Actions, Profiles, Data Integration) can be extended independently without breaking existing configurations.  
- **Unified logging and observability** – actions, activations, and errors are tracked through AE’s standard **Logging Service**, ensuring transparent diagnostics and maintainability.
