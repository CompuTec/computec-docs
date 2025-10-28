---
sidebar_position: 2
---

# Functional Context

The **WebUp add-on** introduces a configurable enhancement layer for the **SAP Business One Web Client (AE)**.

Its main purpose is to improve **interface efficiency, clarity, and adaptability** while maintaining full compliance with **CompuTec AppEngine (AE)** standards.

WebUp operates entirely within the **browser layer** and does not require **SAP SDK**, **DI-API**, or any **desktop integration components**.

Administrators and key users can define **adaptive interface behaviors**, **parameterized layouts**, and **interactive logic** directly from the web environment — using configuration profiles stored and executed through the **AppEngine context**.

All extensions remain **modular**, **portable**, and **version-controlled** within AE.

---

## Functional Domains and Current Status

The table below provides a consolidated overview of all currently available and planned components of the WebUp extension.  
Each feature represents a distinct configuration domain within the **CompuTec AppEngine (AE)** ecosystem, aligned with the official **Preview Release (October 2025 – March 2026)** roadmap.  

The scope includes:  

- **Phase One** – Layouts, Actions, and Data Bindings  
- **Phase Two** – Advanced Automations, Dialogs, and Multilingual Support

| Component | Primary Function | AE Layer | Current Status | Example Use Case |
|-----------|------------------|----------|----------------|------------------|
| **View Layouts** | Modify and rearrange UI controls; manage visibility and positioning of fields. Context-aware by user role. **Phase One** introduces enhanced property editing (read-only, rename, visibility). | UI + Config Layer (AppEngine → ViewModel API) | ✅ Implemented (base) | Adjust *Sales Quotation* header layout to show key fields first |
| **Interactive Actions** | Event-based automation and validation (e.g., *OnUpdate*, *OnSave*). Enables user-driven logic such as confirmation dialogs or Smart Actions. **Phase One** adds *Smart Action – Code (JavaScript)*; **Phase Two** introduces *Macros*, *Activity*, and *Import/Export*. | Logic Layer (Event & Action Processing) | 🔬 Prototype / In Development | Display confirmation dialog before saving a modified document |
| **Views Management** | Store and version configuration sets; enable activation/rollback between profile versions. Changes tracked within the AE Profile Repository. **Phase One** introduces *Import/Export* between databases; **Phase Two** adds *Copy/Paste configurations*. | Config Layer (Profile Repository) | ✅ Implemented (core) | Create v1.0.3 layout while keeping v1.0.2 active for rollback |
| **Data Integration** | Link UI elements to SAP B1 data models through AE Data API, enabling dynamic, data-driven behavior. **Phase Two** adds *Binding Builder* and *Plugin object integration*. | Data Layer (AE REST API) | 🔬 Prototype / In Development (core) | Dynamically bind “Total” field to *Sales Quotation* model value |
| **Event Bindings** | Register UI-level events (*OnLoad*, *OnChange*, *OnUpdate/BeforeSave*) that trigger client or AppEngine logic. **Phase One** focuses on validation triggers; **Phase Two** expands the event catalog for advanced automation. | Logic Layer (Event & Action Processing) | 🔬 Prototype / In Development | Trigger custom validation when a field value changes |
| **Dynamic Components** | Extend existing layouts with custom panels, buttons, or contextual blocks rendered dynamically through AppEngine configuration. Follows SAPUI5 standards. | UI Layer (Component Host) | 📋 Planned (next release) | Add custom KPI panel to *Sales Order* view |
| **Navigation Links** | Configure contextual navigation paths between AE views or related SAP objects, improving workflow continuity. | Navigation Layer | 📋 Planned | Quick navigation from *Sales Quotation* to related *Business Partner* |
| **Context Panels** | Display contextual data (KPIs, totals, statistics) relevant to the active view. **Phase Two** introduces advanced visual widgets and linked summaries. | Data Layer (AE Query Engine) | 📋 Planned | Show customer credit status in *Sales Quotation* sidebar |
| **Background Tasks** | Schedule local or server-side operations using AE task services. Enables automated routines and system maintenance actions. | Task Layer (AE Scheduler) | 📋 Planned | Automated daily report generation and distribution |
| **Localization Framework** | Manage multilingual captions, labels, and UI text within configuration profiles. **Phase Two** extends full multilanguage support across layouts and actions. | Config Layer (Locale Manager) | 📋 Planned | Support multiple language interfaces within a single deployment |

---

### Status Legend

- **✅ Implemented** – Fully functional and available for production use  
- **🔬 Prototype / In Development** – Core functionality available, ongoing refinement  
- **📋 Planned** – Scheduled for future release, design phase complete  

**Phase One** focuses on layout editing, control property management, and Smart Actions.  
**Phase Two** expands into advanced bindings, macro automations, complex dialogs, and multilingual configuration support.

---

## Key Principles (Updated)

- **Browser-native execution** – WebUp operates fully within the browser, extending the SAP Business One Web Client (AE) without SAP SDK or DI-API dependencies.  
- **AE-integrated architecture** – all operations run within the **CompuTec AppEngine Framework**, which hosts configuration profiles, manages authentication, and logs all interactions through standard AE services.  
- **Configurable UI Layer** – users can inspect, edit, and reposition UI controls directly within supported Web Client views.  
- **Event-driven automation** – on-screen actions such as *OnUpdate* or *BeforeSave* can trigger interactive actions or validations defined in the active profile.  
- **Dynamic data binding** – control values can be linked to live SAP data models (e.g., *Sales Quotation Total*) via the **AE Data API**.  
- **Versioned configuration management** – each profile revision (e.g., 1.0.1 → 1.0.2) is stored, activated, and rolled back through the **AE Config Layer**, ensuring controlled lifecycle management.  
- **Consistent security model** – all requests from the browser extension to AppEngine pass through the authenticated **API Gateway** (`/api/v1/*`), enforcing AuthN/AuthZ policies.  
- **Modular evolution** – WebUp functional domains (Layouts, Actions, Profiles, Data Integration) can be extended independently without breaking existing configurations.  
- **Unified logging and observability** – actions, activations, and errors are tracked through AE’s standard **Logging Service**, ensuring transparent diagnostics and maintainability.
