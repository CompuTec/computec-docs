---
sidebar_position: 2
---

# Plugin Development Configuration

This file describe the plugin development configuration and its dependent plugins. so for example when we want to debug the plugin in CompuTec AppEngine we prepare a AE dev.configuration  file that will list all paths to plugins that must be loaded this path must lead to the  dev.config.json.

---

## Key Components of dev.config.json

- **SourceDirectory** - This defines the path to the source directory of the plugin. It can be specified as a relative path from the dev.config.json file or an absolute path.

- **OutputDll** - Specifies the relative path (from the SourceDirectory) to the compiled output DLL of the plugin.

- **Dependencies** - Lists other plugins that the current plugin depends on. Each dependency is represented by a relative path (from the SourceDirectory) pointing to the dependent plugin’s dev.config.json file.

- **MapWwwAppFolder** - This field is specific to AE plugins. It indicates whether web application resources (e.g., HTML, JavaScript, CSS) should be loaded from the plugin's resources or directly from the source directory.

## Examples

### BL Plugin example

```json
{
  "SourceDirectory": "",
  "OutputDll": "bin\\Debug\\net8.0\\CT.VehOne.BL.dll",
  "Dependencies": [],
  "MapWwwAppFolder": false
}

```

### SAP UI Plugin Example

```json
{
  "SourceDirectory": "",
  "OutputDll": "bin\\Debug\\net8.0\\CT.VehOne.dll",
  "MapWwwAppFolder":true,
  "Dependencies":["..\\CT.VehOne.BL\\dev.config.json"]
}
```

### AE Plugin Example

```json
{
  "SourceDirectory": "",
  "OutputDll": "bin\\Debug\\net8.0\\CT.VehOne.dll",
  "Dependencies": [
    "..\\CT.VehOne.BL\\dev.config.json"
  ],
  "MapWwwAppFolder": true
}
 
```

---
The dev.config.json file plays a crucial role in managing plugin development and debugging, particularly in environments like AppEngine. Understanding and correctly configuring this file for each plugin type simplifies the development process and enhances overall efficiency.
