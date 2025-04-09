---
sidebar_position: 14
---

# CompuTec AppEngine Plugin Template for TypeScript

CompuTec AppEngine is a powerful extension framework designed to help developers build custom plugins for SAP Business One. With the TypeScript plugin template, you can create scalable and maintainable plugins using modern technologies like TypeScript and UI5.

This guide walks you through the steps to set up your development environment, create a new plugin using the CompuTec AppEngine template, and configure your project for a streamlined development workflow.

---

## Prerequisites

Before you begin, ensure the following software is installed on your machine:

Node.js version 12 or higher.

## Create New Plugin Project

### Download

Go to the following address: [https://www.nuget.org/packages?q=computec](https://www.nuget.org/packages?q=computec), and download the CompuTec.AppEngine.Templates package.

### Adding

:::note
    In the following example, we will use a template for AppEngine plugin with UI5 and Javascript on the frontend.
:::

To install the package, go to Windows Terminal and run the following command:

    ```bash
dotnet new --install CompuTec.AppEngine.Templates::2.0.0
    ```

You will get a message about successful installation, along with the list of installed elements. For now, five of them are ready plugin solution templates (tagged 'Add-In', 'Add-In/Web/Javascript', you can also recognize them by the word 'plugin' in their names and short names) and seven plugin items (tagged "Visual C# Items'):

![Template List](./media/computec-app-engine-plugin-template-for-typescipt/template-list.webp)

Once the package is installed, you can check the list again using the following command:

    ```bash
dotnet new --list AE
    ```

Create a new folder for your plugin project (e.g., FirstPlugin):

Go to the folder (cd .\FirstPlugin).

Use the following command to create a new template to work on it later (ctaepluginjs in this example). It has to be created along with two mandatory parameters: RoutePrefix (testPlugin in this example) and PluginID (Compu:Tec.AppEngine.Plugin.Test in this example):

    ```bash
dotnet new ctaeplugints --RoutePrefix testPlugin --PluginId CompuTec.AppEngine.Plugin.Test
    ```

## Visual Studio – Configure Project Build and Debug

1. It is a good approach to build directly to the AppEngine plugins location, so that you do not need to copy files every time after build.

    1. To do this, right-click on the plugin project and select properties.
    2. Open the Build tab, set up the Output path as shown below. AppEngine stores all plugins in ProgramData/Computec/AppEngine/Plugins. There you can create a new folder with a name that is the same as the Plugin Route (RoutePrefix in AppEngine manifest.json).

    ![Output](./media/computec-app-engine-plugin-template-for-typescipt/output-path.webp)

2. After the build, you can activate plugin in AppEngine Administration Panel. More information about this process can be found [here](../../../version-2.0/administrators-guide/configuration-and-administration/overview.md). Your plugin will now be accessible from the AppEngine Launchpad

    ![First List](./media/computec-app-engine-plugin-template-for-typescipt/first-list-of-todos.webp)

---
