---
sidebar_position: 1
---

# Overview

## Purpose

**WebUp** is a **usability and configuration extension** for the **CompuTec AppEngine (AE) Framework** that enhances the **SAP Business One / ProcessForce Web Client** experience.

It enables **administrators** and **functional consultants** to adapt interface elements, automate user interactions, and define validation logic — directly within the web environment, without modifying system code.

WebUp conforms to the **AppEngine Plugin Interface Model**, as defined in the **CompuTec AE Framework v3.x**.  
This ensures full lifecycle compatibility with other AppEngine-based extensions, including **installation**, **activation**, and **configuration synchronization**.

---

### Objectives

WebUp is designed to:

1. Improve **efficiency and clarity** in the SAP Web Client user experience.  
2. Provide **low-code configuration tools** for consultants and administrators.  
3. Enable **lightweight automation** and **data validation** at the interface level.  
4. Support **incremental extensibility** aligned with other AE-based solutions.  

---

### Functional Scope

WebUp provides configuration-level control over SAP Web Client views, allowing users to:

- Create or modify **customized views** based on standard SAP layouts.  
- Move, hide, or rename **controls, fields, and action buttons** to streamline the interface.  
- Modify **control properties** (e.g., visibility, read-only state, label name).  
- Reposition **UDF controls** from default sections into specific groups or tabs.  
- Define **validations and rules** triggered before or after system actions (*Add*, *Update*, *Close*, *Cancel*).  
- Build **process automations** using JavaScript, executed by user-defined events or Smart Actions.  
- Manage configuration views through AppEngine — **activate**, **rollback**, or **export** them between company databases.  

All WebUp configurations are stored and versioned in the **AE Profile Repository**, ensuring full traceability and rollback safety.  
The tool aligns with **SAP Fiori** interface standards, preserving the native look and feel of the Web Client while extending its flexibility.

---

### Target Audience

- **System Administrators** — managing and maintaining AppEngine extensions and Web Client environments.  
- **Implementation Consultants** — configuring WebUp to meet project-specific usability and process requirements.  
- **Functional Analysts / Key Users** — applying layout and rule changes directly in the Web Client without developer support.  

---

📘 **Implementation Note**  
WebUp is delivered as part of the **CompuTec AppEngine plugin ecosystem**.  
It is available for **preview use (October 2025 – March 2026)** under the **CompuTec WebUp Preview Program**, enabling partners and customers to explore customization and automation capabilities within the **SAP Business One Web Client**.
