---
sidebar_position: 4
---

# Manifest

Configuring and integrating plugins into an application ecosystem requires detailed specifications to ensure compatibility and smooth functionality. This guide explains how to create a JSON manifest for the `PluginDescription` entity, which outlines the essential characteristics, dependencies, and validation rules of a plugin. By following this structure, developers can ensure their plugins are accurately defined, validated, and integrated into the application.

The configuration file for a plugin must be named manifest.json and includes key attributes that describe the plugin's functionality, versioning, and dependencies.

## PluginDescription JSON Structure

The JSON manifest for a plugin provides all necessary information about the plugin's identity, its type, and its dependencies. Below is an example structure of the manifest.json file:

    ```json
    {
    "PluginCode": "Core.Example01.AE",
    "PluginName": "Example Plugin",
    "Icon": "sap-icon://activate",
    "Assembly": "ConsoleApp.AE.dll",
    "Company": "Your Company Name",
    "PluginVersion": "1.0.5",
    "Remarks": "Example Plugin Remarks that will be displayed in the plugin list",
    "ReadmeFile": "README.md",
    "ReleaseNotes": "RELEASE_NOTES.md",
    "DocumentationLink": "http://example.com/plugin-docs",
    "PluginType": "AppEnginePlugin",
    "MinimumCoreLevel": "1.0.0",
    "Dependencies": [
        {
        "PluginCode": "Core.Example01.API",
        "minVersion": "1.0"
        }
    ]
    }
    ```

## Field Descriptions and Validation Rules

| Field | Field Description | Validation Rules |
| --- | --- | --- |
| PluginCode | The unique code for the plugin. Must be a non-empty string.| Required |
| PluginName | The name of the plugin. Must be a non-empty string. | Required |
| Icon | Specifies the icon for the plugin, often as a URI or a reference to an icon library. | Optional |
| Assembly | The filename of the assembly containing the plugin. Must be a non-empty string. | Required |
| Company | The name of the company or individual who owns the plugin. | Optional |
| PluginVersion | Version of the plugin, following semantic versioning (must be in a valid `CTVersion` format). | Required |
| Remarks | Additional information about the plugin. | Optional |
| ReadmeFile | Path to the README file for the plugin. | Optional |
| ReleaseNotes | Path to the release notes file for the plugin. | Optional |
| DocumentationLink | A URL pointing to the plugin’s documentation. | Optional |
| PluginType | Type of plugin, which must be one of the following: `Standalone`, `BusinessLogic`, `AppEnginePlugin`, `SapUserInterface`, `Other`. | Required |
| MinimumCoreLevel | Minimum version of the core application required for the plugin (must follow `CTVersion` format). | Required |
| Dependencies | Array of objects specifying the plugin dependencies, where each object includes: <br/>PluginCode - The dependent plugin's code. <br/>minVersion - Minimum required version of the dependent plugin. | Optional |

## Plugin Type

The `PluginType` field categorizes the plugin, determining how it’s deployed, integrated, and used within the application ecosystem.

### Conversion Logic

Conversion between string representations and `ApplicationTypes` enum values ensures compatibility across different environments. Below is the table with the supported plugin types, descriptions, and acceptable string representations:

| Plugin Type Description | `ApplicationTypes` Enum Value | Acceptable String Representations |
|-------------------------|-------------------------------|-----------------------------------|
| Business Logic          | BusinessLogic                 | "BusinessLogic", "DiAPI", "Di"    |
| SAP User Interface      | SapUserInterface              | "SapUserInterface", "SapUI", "UI" |
| Standalone              | Standalone                    | "Standalone", "exe", "app"        |
| App Engine Plugin       | AppEnginePlugin               | "AePlugin", "plugin", "AEComponent", "AppEnginePlugin" |
| Other                   | Other                         | "Other"                           |

## Validation Logic

Below is the validation logic for the plugin configuration fields to ensure proper functionality and integration:

- **PluginCode** and **Assembly** fields must not be empty. `PluginCode` serves as a unique identifier, while `Assembly` specifies the main assembly.
- **PluginVersion** and **MinimumCoreLevel** must be in a valid version format to ensure correct handling of version dependencies. Follows [Semantic Versioning](https://semver.org/).
- **PluginType** must match one of the predefined types for correct integration into the application ecosystem.
- **Dependencies** (if specified): Each dependency must include both `PluginCode` and `minVersion` to verify compatibility with necessary components.

---
By following the guidelines provided in this document, developers can effectively configure and validate plugins for seamless integration into application ecosystems. The PluginDescription manifest ensures clarity, compatibility, and maintainability for plugin-related processes, empowering users to build robust and scalable solutions.
