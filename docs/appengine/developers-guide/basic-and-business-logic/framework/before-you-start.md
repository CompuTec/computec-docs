---
sidebar_position: 2
---

# Setting Up the Project and Debugging Environment

This guide walks you through the process of setting up and debugging a project using CompuTec AppEngine, a powerful tool for extending and customizing SAP Business One. Whether you're configuring your development environment for the first time or setting up plugins to streamline your workflow, this document will serve as a comprehensive reference to get you started efficiently.

---

## Steps to Get Started

1. **Prepare Your Environment** - Before diving into development, ensure the following prerequisites are in place:

    - Install **CompuTec AppEngine** and configure it on your development company database.
    - Activate the target company within the CompuTec AppEngine interface.
    - Run the SAP Business One application on the same database and confirm that the **CompuTec.Start** add-on is installed.
    - SAP WebClient development environment: Development Environment Setup | SAP Help Portal
    - Code Samples - https://github.com/CompuTec/appengine-examples 
2. **Install CompuTec Templates** - CompuTec provides predefined templates to streamline your development process. To install these templates:

    - Open a command prompt.
    - Execute the following command:

        ```bash
        dotnet new install CompuTec.AppEngine.Templates  
        These templates provide a robust starting point for building plugins and customizations with minimal setup effort.
        ```

3. **Setting the AppEngine Dev Environment** - In the AppEngine instalation folder `C:\Program Files\CompuTec\AppEngine` edit `Devapp.config.json` file.
    - Please fill in the connection string for the CTAPPDATA database
    - AppEngineInstance: you can copy the instance guid from the installed AppEngine or generate a new one if you want to have a different instance for development than the production one ( when creating a different one, please assign a company to that AppEngine Instance in administration) 

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

After you save this file, you can start AppEngine from the console by running `CompuTec.AppEngine.Host.DevApp.core.exe` application ( please stop the AppEngine Service first).

4. **Setting the Project Dev Environment variables**
    - Edit the `CT.VehOne/Properties/launchSettings.json` file, the variable CT_DEBUG is the absolute path to the DevAeConvig.config.json file that is also located in `CT.VehOne/Properties` folder.
    - Edit the `CT.VehOne/Properties/DevAeConvig.config.json` file. The variable Plugins is an array of all the plugins that will be launched when debugging the solution. They must lead to the CT.VehOne/dev.config.json file (absolute).

After all the above steps are completed, you can run the Default Configuration.

---
By following this guide, you ensure a smooth and efficient start to your project, leveraging the power of prebuilt templates and a modular plugin system. Ready to take your SAP Business One customization to the next level? Start by setting up your environment today!
