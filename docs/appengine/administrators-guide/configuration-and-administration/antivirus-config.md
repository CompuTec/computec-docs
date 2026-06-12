---
sidebar_position: 9
---

# Antivirus Configuration for CompuTec AppEngine

Antivirus software can sometimes interfere with **CompuTec AppEngine** operations. Real-time scanning of application files, temporary folders, or installation packages may cause issues such as:

- Slow startup of the **CompuTec AppEngine Service**
- Failed plugin installations or updates
- Problems during company initialization or database setup
- Delays when loading application components

To prevent these issues, configure antivirus exclusions for the folders, processes, and temporary locations used by **CompuTec AppEngine**.

:::info[note]

The paths in this guide assume a default installation. If **CompuTec AppEngine** was installed in a custom location, adjust the paths accordingly.  

You can verify the installation path in the **Windows Registry**:

``HKLM\SOFTWARE\CompuTec\CompuTec AppEngine``

Registry value: ``Path``

:::

## Configure Antivirus Exclusions

To configure antivirus exclusions, follow these steps:

### Exclude the CompuTec AppEngine Installation Folder

Add the **CompuTec AppEngine** installation directory to your antivirus exclusions:

``C:\Program Files\CompuTec\AppEngine\``

This folder contains:

- The **CompuTec AppEngine** service executable
- Application libraries and dependencies
- Web application files
- Plugin components

Scanning this location is one of the most common causes of slow service startup.

:::info[Tip]

If multiple **CompuTec** products are installed on the same server, you can exclude the entire folder:  
 ``C:\Program Files\CompuTec\``

:::

### Exclude Application Data and Log Folders

Add the following folder to the antivirus exclusion list:

``C:\ProgramData\CompuTec\AppEngine\``

This location contains:

- Application logs
- Database setup logs
- Runtime configuration data

Files in this folder are updated frequently while **CompuTec AppEngine** is running.

### Exclude Service Working Folders

During plugin installation, company initialization, and database setup, **CompuTec AppEngine** extracts and processes files in the Windows service profile.

#### Default Service Account (LocalSystem)

If the **CompuTec AppEngine** service runs under the default **LocalSystem** account, exclude:

- ``C:\Windows\System32\config\systemprofile\AppData\Local\CompuTec\``
- ``C:\Windows\System32\config\systemprofile\CompuTec\AppEngine\``

These locations are used for:

- Plugin extraction
- Temporary installation files
- Database setup packages
- Cached application data

#### Custom Service Account

If the **CompuTec AppEngine** service runs under a dedicated Windows account, exclude the corresponding user profile folders instead:

- ``C:\Users\<ServiceUser>\AppData\Local\CompuTec\``
- ``C:\Users\<ServiceUser>\CompuTec\AppEngine\``

You can verify the service account in **Windows Services** (``services.msc``).

### Exclude the Temporary Download Location

**CompuTec AppEngine** uses a configurable temporary folder when downloading and extracting plugin packages.

Example: ``D:\AppEngine\TempDownloads\``

### Exclude SAP Components (If Required)

In some environments, antivirus software may interfere with **SAP Business One** components used by **CompuTec AppEngine**.

If this occurs, consider excluding the following folders:

``C:\Program Files\sap\hdbclient\C:\Program Files\SAP\SAP Business One DI API\``

These components are used for:

- **SAP HANA** connectivity
- **SAP Business One DI API** operations
- Company initialization and database setup

### Configure Process Exclusions

If your antivirus solution supports process-level exclusions, add the following executables.

| Executable | Description |
| --- | --- |
| `C:\Program Files\CompuTec\AppEngine\appengine.exe` | Main CompuTec AppEngine service |
| `C:\Program Files\CompuTec\AppEngine\CompuTec.AppEngine.DatabaseSetup.exe` | Database setup, company initialization, and plugin installation process |

Default locations:

- ``C:\Program Files\CompuTec\AppEngine\appengine.exe``
- ``C:\Program Files\CompuTec\AppEngine\CompuTec.AppEngine.DatabaseSetup.exe``

Process exclusions often provide better performance than folder exclusions alone.

### Installation Considerations

During installation, **CompuTec AppEngine** temporarily extracts installation files to a randomly generated folder within the user's temporary directory.

Because this location changes with every installation, it can't be excluded permanently.

If antivirus software blocks the installation:

- Temporarily disable real-time scanning during installation, or
- Temporarily exclude the installing user's ``%TEMP%`` folder

After the installation is complete, restore the original antivirus settings.

### Configure Network and Web Filtering

Some antivirus products include firewall, SSL inspection, or web-filtering modules. These features can interfere with communication between **CompuTec AppEngine** and external services.

Verify that:

- The **CompuTec AppEngine** **HTTPS port** (default: ``54001``) is accessible
- SSL inspection does not block **CompuTec AppEngine** traffic
- Communication with the **SAP Service Layer** is allowed
- Communication with **RabbitMQ** or **Azure Service Bus** (if used) is allowed

### Verify the Configuration

After configuring the exclusions:

1. Restart the **CompuTec AppEngine** service.
2. Confirm that the service starts successfully without unusual delays.
3. Review the **CompuTec AppEngine log file**:
    ``C:\ProgramData\CompuTec\AppEngine\Logs\``
4. Install or update a plugin in a test company.
5. Verify that company initialization, plugin installation, and database setup complete successfully.
6. If no errors occur during these operations, the antivirus configuration is complete.
