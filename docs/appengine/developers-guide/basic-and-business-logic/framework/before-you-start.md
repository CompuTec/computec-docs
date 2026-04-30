---
sidebar_position: 2
---

# Setting Up the Project and Debugging Environment

This guide explains how to prepare a development environment and run a project in debug mode using **CompuTec AppEngine** for **SAP Business One**.

## Before you start

Before you start, make sure the following components are available:

    - **CompuTec AppEngine** is installed and connected to your development database. [Read more](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation)
    - The target company is activated in **CompuTec AppEngine Administration Panel**. [Read more](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation#step-5-activate-a-company-in-computec-appengine)
    - **SAP Business One** is running on the same database. 
    - The **CompuTec.Start** extension is installed. By default, it is located at: ``C:\Program Files\sap\SAP Business One\AddOns\CT\CompuTec.Start\X64Client\``

  Optional:
    - **SAP WebClient** development environment. [See SAP Help Portal](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/b121ab221f4044baaf6051bba14cc160.html)
    - Example projects and code samples: https://github.com/CompuTec/appengine-examples

## Install CompuTec templates

CompuTec provides templates to simplify project setup.

To install project templates, follow these steps:

1. Open a **command prompt**.
2. Run the following command:

        ```bash
        dotnet new install CompuTec.AppEngine.Templates  
        ```

After installation, the templates are available when creating new projects.

## Configure CompuTec AppEngine for development

1. Go to the AppEngine installation folder: ``C:\Program Files\CompuTec\AppEngine``.
2. Open the file: ``Devapp.config.json``.
3. Update the following values:

    - **Connection string** for the ``CTAPPDATA`` database
    - **AppEngineInstance**:
      - Copy the instance guid from the installed CompuTec AppEngine, or
      - Generate a new for development

      :::info[note]
      If you create a new instance, assign it to a company in **CompuTec AppEngine Administration Panel**.
      :::

    Example:

    ```json
    {  
    "ConnectionStrings": {
        "DefaultDbProvider": "Hana",
        "DefaultConnection": "Database=DEV;server=hanadev:30013;uid=SYSTEM;password=xxxx;current Schema=CTAPPDATA"
    },
      "Logging": {
        "LogLevel": {
          "Default": "Warning",
          "Microsoft": "Error",
          "Microsoft.Hosting.Lifetime": "Information",
          "CompuTec": "Debug"
        },
        "Console": {
          "IncludeScopes": true
        },
        "Debug": {
          "IncludeScopes": true
        }
      },
      "DevelopmentConfiguration": {
        "Enabled": true
      },
      "AppEngineInstance": "e5aaf3d2-626c-4eea-a206-48979edee0e7",
      "DefaultAppEngineInstanceName": "Development From Sources"
    }
    ```

4. Save the file.
5. Stop the **CompuTec AppEngine Service**.
6. Start **CompuTec AppEngine** from the console in delvelopment mode by running:

    ```bash
    CompuTec.AppEngine.Host.DevApp.core.exe
    ```

## Configure project for debugging

### Step 1: Set the project dev environment variable

1. Open the **CT.VehOne/Properties/launchSettings.json** file.
2. Set the ``CT_DEBUG`` variable to the full path of: ``DevAeConfig.config.json``.

    :::info[note]
    The variable ``CT_DEBUG`` is the absolute path to the ``DevAeConvig.config.json`` file that is also located in `CT.VehOne/Properties` folder.
    :::

### Step 2: Configure plugins

1. Open the **CT.VehOne/Properties/DevAeConvig.config.json** file.
2. Add plugin entries to the ``Plugins`` array. Each entry must point to a ``dev.config.json`` file (use absolute paths).

    :::info[note]
    The variable ``Plugins`` is an array of all the plugins that will be launched when debugging the solution. They must lead to the ``CT.VehOne/dev.config.json`` file (absolute).
    :::

## Run the project

After completing the configuration:

1. Start the project using the **Default Configuration**.
2. **Computec AppEngine** loads the defined plugins and runs them in the development environment.

## Results

After this setup:

- **CompuTec AppEngine** runs in development mode
- Your project starts with configured plugins
- You can debug and test changes locally
