---
sidebar_position: 2
---

# SAPUI5 Plugin from Template Step-by-Step

CompuTec AppEngine offers ready-to-use Visual Studio templates that make it easy to build plugins with a modern SAPUI5 front end and JavaScript logic. These templates accelerate development by providing a scaffolded solution tailored to the CompuTec AppEngine ecosystem. This step-by-step guide walks you through the entire process - from installing the template and generating your plugin project, to configuring development mode for live UI changes and testing it on the CompuTec AppEngine launchpad.

---

## Create a New Plugin Project

### Download

Go to the following address: [https://www.nuget.org/packages?q=computec](https://www.nuget.org/packages?q=computec), and download CompuTec.AppEngine.Templates package.

### Adding

:::note
    The following example will use a template for the CompuTec AppEngine plugin with UI5 and JavaScript on the front end.
:::

To install the package, go to Windows Terminal and run the following command:

    ```bash
    dotnet new --install CompuTec.AppEngine.Templates::2.0.0
    ```

You will receive a confirmation message indicating a successful installation, along with a list of installed components. Among them, five are ready-to-use plugin solution templates (tagged as 'Add-In' or 'Add-In/Web/JavaScript' - these can also be identified by the word 'plugin' in their names and short descriptions), and seven are plugin items (tagged as 'Visual C# Items').

![Template List](./media/sapui5/template-list.webp)

Once the package is successfully installed, you can verify the list of available templates by running the following command:

    ```bash
    dotnet new --list AE
    ```

- Create a new folder for your plugin project (in this example, it's named FirstPlugin):
- Go to the folder (cd .\FirstPlugin).
- Generate a new plugin template using the following command. This command requires two mandatory parameters:
        - RoutePrefix (testPlugin in this example) and
        - PluginID (Compu:Tec.AppEngine.Plugin.Test in this example:

    ```bash
    dotnet new ctaepluginjs --RoutePrefix testPlugin --PluginId CompuTec.AppEngine.Plugin.Test
    ```

## Visual Studio – Configure Project Build and Debug

:::note
    To run your plugin without completing the full installation process, CompuTec AppEngine must be launched in DevMode. The configuration of CompuTec AppEngine is described in the next steps of this tutorial.
:::

1. To run your plugin, follow these steps:

    1. Open your Plugin Solution in Visual Studio.
    2. Open Properties for Plugin Project.
    3. Open the Debug tab.
    4. Under Start Action, select Start External Program and set up the path to CompuTec.AppEngine.Host.ConsoleApp.exe in the installation directory. In case of the default install, this file will be located in Program Files\CompuTec\CompuTec AppEngine\CompuTec.AppEngine.Host.ConsoleApp.exe

        ![Launch Profiles](./media/sapui5/launch-profiles.webp)
    5. Make sure that CompuTec AppEngine service is stopped. You can check this in System Services.

        ![Services](./media/sapui5/app-engine-services.webp)
    6. To prevent CompuTec AppEngine from auto-starting with Windows, open its service properties and set the Startup type to Manual or Disabled.

        ![Start up](./media/sapui5/startup-type.webp)

## Configure UI5 Application File Mapping

1. To make developers work more efficiently, CompuTec AppEngine offers a Development Mode that allows you to set up a path to frontend files in the Plugins project. This enables instant visibility of changes made to frontend files without needing to rebuild the project. The required steps to achieve this are outlined below:

    1. Start CompuTec.AppEngine.Host.ConsoleApp.exe by debugging your plugin or from the command line. This first run will create separate configuration files for debug mode (in ProgramData\Computec\AppEngine):

        - dev_appengine.config
        - dev_backgroundProcessing.config
    2. Stop CompuTec.AppEngine.Host.ConsoleApp.exe
    3. To turn on the frontend debug mode, we need to edit the dev_appengine.config file.
    4. Set up:

        1. DevMode to True.
        2. UIDevMode to True.
        3. In DevUIMapping, specify the path to the source code of your UI5 Application files as the following key-value pair: \<PluginId\>:\<PluginPath\>. Frontend files from this path will be used instead of files from the CompuTec AppEngine plugins directory.
    5. A path mapping example:

            ```javascript
            "DevMode": "True",
            "UIDevMode": "True",
            "DevUIMapping": {
                "CompuTec.Demo.TestPlugin": "C:/Users/maciejp/source/repos/CompuTec.Demo.TestPlugin/CompuTec.Demo.TestPlugin/www"
            },
            ```

    6. Start CompuTec.AppEngine.Host.ConsoleApp.exe, and verify your settings in the console.

        ![Console Settings](./media/sapui5/console-settings.webp)

## Results

1. After performing all these steps, your plugin should now be visible in the CompuTec AppEngine Administration Panel.
2. Open a browser and navigate to `http://localhost:54000/`. Click Administration Panel:

    ![Administration Panel](./media/sapui5/administration-panel.webp)
3. Login in with the default credentials. **User name: CTSiteUser** and the **Password is 12qw!@QW**. You can change it in the configuration as described here.
4. Now select the Plugins tab.

    ![Plugins Tab](./media/sapui5/plugins-tab.webp)
5. Click on your plugin to open its configuration.

    ![Plugin Configuration](./media/sapui5/plugin-configuration.webp)
6. Activate the Plugin on the selected database.

    ![Activate Plugin](./media/sapui5/activate-plugin.webp)
7. Open a new tab and navigate to `http://localhost:54000/`. Click on Launchpad:

    ![Launchpad](./media/sapui5/launch-pad.webp)
8. Log in using the SAP username and password.
9. After successful authentication, all available plugins will be visible. To open the plugin, click on its Tile.

    ![Plugin Tile](./media/sapui5/plugin-tile.webp)

    ![to-do-list](./media/sapui5/to-do-list.webp)

    ![to-do-list](./media/sapui5/to-do-list-2.webp)

---
