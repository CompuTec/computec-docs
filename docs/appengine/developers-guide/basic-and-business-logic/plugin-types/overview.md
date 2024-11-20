---
sidebar_position: 12
---

# Overview

This document provides an in-depth understanding of various plugin types and their characteristics, including their classification, acceptable identifiers, associated core references, and base classes. These plugin types serve as key components in extending and customizing system functionality for diverse applications.

---

Below is a detailed table explaining the attributes of each plugin type.

| Plugin Type Description | `ApplicationTypes` Enum Value | Acceptable String Representations | Core References       | PluginInfo Base Class |
|-------------------------|-------------------------------|-----------------------------------|-----------------------|------------------------|
| Business Logic          | BusinessLogic                 | "BusinessLogic", "DiAPI", "Di"    | CompuTec.Core2        | PluginInfo             |
| SAP User Interface      | SapUserInterface              | "SapUserInterface", "SapUI", "UI" | CompuTec.Core2.UI     | SapUiPluginInfo        |
| App Engine Plugin       | AppEnginePlugin               | "AePlugin", "plugin", "AEComponent", "AppEnginePlugin" | CompuTec.Core2.AE | AEPlugin               |
| Standalone              | Standalone                    | "Standalone", "exe", "app"        |                       |                        |
| Other                   | Other                         | "Other"                           |                       |                        |

---
The table above classifies the available plugin types and their usage context within the system. By categorizing plugins into specific types, this framework ensures better organization, easier integration, and enhanced scalability of solutions. Each plugin type is defined by its purpose, implementation details, and compatibility, allowing developers to choose the most suitable type for their requirements. For further questions or customization, feel free to reach out!
