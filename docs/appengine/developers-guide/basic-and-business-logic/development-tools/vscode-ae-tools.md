---
sidebar_position: 2
---

# CompuTec AE Tools for Visual Studio Code

**CompuTec AE Tools** is a Visual Studio Code extension that scaffolds the parts of
CompuTec AppEngine plugin development that are otherwise written by hand: **SAP Business One
Web Client UI API extensions** and **UI5 dialogs**.

Instead of copying a skeleton project from an existing plugin and adjusting identifiers by
hand, you right-click a file in the Explorer and answer a few prompts. The extension creates
the project structure and keeps the configuration files that describe it — `manifest.json`,
`mta.yaml`, `app.json`, `launch.json` and the plugin `.csproj` — in sync with each other.

---

## Installation

Open the **Extensions** view in Visual Studio Code (`Ctrl+Shift+X`), search for
**CompuTec AE Tools**, and select **Install**.

The extension can also be installed from a `.vsix` file, which is how pre-release builds are
distributed inside CompuTec:

```batch
code --install-extension computec-ae-tools-<version>.vsix
```

Alternatively, in Visual Studio Code: **Extensions** view → the `…` menu → **Install from VSIX…**.

## Requirements

- A CompuTec AppEngine plugin workspace. The commands are driven by the files they act on —
  the plugin's `manifest.json` and the UI API extension's `mta.yaml`.
- **Node.js** and **npm** on `PATH`, used to build the generated UI API extension projects.
- The **.NET SDK** on `PATH` for the dialog scaffolder. The `CompuTec.AppEngine.Templates`
  package is installed on demand — when you add a dialog and the template is missing, the
  extension offers to install it from nuget.org, and suggests an update when a newer version
  is available.

## Commands

All three commands live in the **Explorer context menu** and appear only on the file or
folder they apply to.

![Explorer context menu with the CompuTec AE Tools commands](/img/vscode-ae-tools/context-menu.png)

| Command | Where | What it does |
| ------- | ----- | ------------ |
| **Add WebClient UI API (AppEngine)** | right-click a plugin's `manifest.json` | Scaffolds a complete UI API extension project — gulp build, `mta.yaml`, `.vscode` configuration — and registers it in the plugin |
| **Add WebClient View to UI API (AppEngine)** | right-click `mta.yaml` | Adds a view module (controller, layout, i18n, models) to an existing UI API extension and updates every configuration file that has to know about it |
| **Add Dialog to App (AppEngine)** | right-click a folder | Generates a UI5 dialog scaffold from the `CompuTec.AppEngine.Templates` dotnet template into that folder |

## Creating a UI API extension

1. Open your AppEngine plugin workspace in Visual Studio Code.
2. Right-click the plugin's `manifest.json` and select **Add WebClient UI API (AppEngine)**.
3. Answer the prompts — the extension name and the target business object view.
4. Right-click the generated `mta.yaml` and select **Add WebClient View to UI API (AppEngine)**
   to add further views.

View scaffolding includes a picker for the known SAP Business One Web Client business object
view IDs — Sales Order, Business Partner and others — so a new extension binds to the correct
Fiori elements view without looking the identifier up.

## Adding a UI5 dialog

Right-click a folder inside your plugin's UI5 application and select
**Add Dialog to App (AppEngine)**. The dialog is generated into that folder from the dotnet
template package. If the template is not installed, accept the install prompt — the dialog is
generated once the installation finishes.

## Related topics

- [CompuTec Tool](./ct-tool.md) — the `dotnet ct` command-line utility for models, packaging
  and translations.
- [Plugin Development Configuration](./Configuration/dev-config-json.md) — the `dev.config.json`
  file the AppEngine host reads when loading a plugin for debugging.

## License and third-party notices

CompuTec AE Tools is released under the Apache License 2.0.

The UI API project templates bundled with the extension are derived from SAP's
`@sap/generator-businessone-webclient-extension` (© SAP SE, Apache License 2.0) and were
modified by CompuTec. The extension ships a `NOTICE` file with the full attribution.

SAP and SAP Business One are trademarks of SAP SE. CompuTec AE Tools is an independent
CompuTec product and is not endorsed by or affiliated with SAP.
