---
sidebar_position: 1
---

# Overview

This section provides an overview of the **WebUp extension components** and their respective roles within the **AppEngine (AE)** environment.

Each component operates as part of the **WebUp configuration domain** and is managed through dedicated **AppEngine Views**.  
The following subsections outline the practical functionality scope available in the current release.

All components and functions are accessible directly from the **WebUp side panel** in the **SAP Business One Web Client**.  
Each feature can be launched via the **WebUp toolbar icon**, operating within supported **SAP extensibility views**.

---

## Component Summary

| Component | Primary Function | AE Layer | Current Status | Example Use Case |
|------------|------------------|-----------|----------------|------------------|
| **Layout Profiles** | Modify and rearrange UI controls; manage visibility and positioning of fields. | **UI + Config** | **Implemented** | Adjust *Sales Quotation* header layout to display key fields first. |
| **Interactive Actions** | Event-based automation and validation logic (e.g., *On Update*, *On Save*). | **Logic Layer (Event & Action Processing)** | **In Development** | Display a confirmation dialog before saving a modified document. |
| **Profile Management** | Store and version configuration sets; enable activation and rollback. | **Config** | **Implemented** | Create version *1.0.3* of a layout while keeping *1.0.2* active for rollback. |

---

> **Note:**  
> WebUp components are progressively integrated into the **AppEngine Config and Logic Layers**, allowing seamless interaction between UI customization, automation, and version-controlled deployment.
