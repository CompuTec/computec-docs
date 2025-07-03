---
sidebar_position: 4
toc_max_heading_level: 2
---

# CompuTec License Server Release Notes

## CompuTec License Server 5.12.1.1

**Release Date - 30 January 2023**

:::info
The installer is available to download from [here](../../../releases/download.md#computec-license-service).
:::

### Changes and Improvements

**Server – ProcessForce, Server – PDC/WMS (terminals), Server – Labels, Server – Premium**

- Possibility to generate the license Hardware Key (CompuTec Key / Terminal License Key / Labels Hardware Key / Premium Hardware Key) in HUAWEI Elastic Cloud Server (ECS) environment

**Service Manager**

- COMPUTEC LICENSE SERVER SETTINGS window: the blue framing style has been reverted to red.

:::info
The version that introduced the blue framing style: 5.11.0.1.
:::

### Fixes

**Server - Service Manager**

- Stopping CompuTec License Server service while opening CompuTec Service Manager windows in some cases.

:::info
This fix was implemented in version 5.10.2.9 but not included in versions 5.11.0.1-5.11.0.3.
:::

**Server - ProcessForce**

- Significant delay of SAP Business One client response during import (more than a minute) and selection (more than 20 seconds) of ProcessForce license

**Server - CompuTec WMS**

- Cannot license CompuTec WMS when defined SSL port only (without defining standard port) in CompuTec Service Manager, WMS SETTINGS window

**Service Manager**

- An error on starting/restarting CompuTec AppEngine service using CompuTec Service Manager in some cases.

    **Error Messages**
        - Time out has expired and the operation has not been completed. Error while restarting a service.
        - Cannot start service CompuTec AppEngine on computer. Error while starting a service.

- The address of CompuTec AppEngine configuration file, which is used when clicking Settings button for CompuTec AppEngine service in CompuTec Service Manager, has been corrected for the one used in CompuTec AppEngine from 2.0 version.

    **Error Message**
        - There has been an error accessing the configuration file. The system cannot find the file specified.

- CompuTec PDC/WMS LICENSING window, WMS Users tab: defined and not displayed records are deleted after updating a displayed record when using a filter
- CompuTec PDC/WMS LICENSING window, License Management tab: changing the option 'Assign available licenses for newly added terminal accounts automatically' is saved only after restarting CompuTec License Server service.

:::info
This fix was implemented in version 5.10.2.1 but not included in versions 5.10.2.9-5.11.0.3.
:::

- CompuTec Service Manager windows cannot be moved on the screen.

:::info
The versions affected by related defect: 5.11.0.1, 5.11.0.2 and 5.11.0.3.
:::

:::caution
Please note that from this version you can move the windows only by pressing and holding a white space inside them (and not by pressing and holding the grey, upper window bar anymore).
:::

- COMPUTEC LICENSE SERVER SETTINGS window, Database Connection tab: refreshing the database list of a saved server does not remove non-existent databases from the displayed list.

:::info
Related change was implemented in version 5.10.2.9 but not included in versions 5.11.0.1-5.11.0.3.
:::

- COMPUTEC LICENSE SERVER SETTINGS window, Database Connection tab: the database list of a saved server is not sorted alphabetically.

:::info
Related change was implemented in version 5.10.2.9 version but not included in versions 5.11.0.1-5.11.0.3.
:::

- Corrected the message appearing while trying to open the CompuTec WMS Server Settings when CompuTec.ServiceManager.WebApiSettings.exe file could not be found

---

## CompuTec License Server 5.11.0.3

**Release Date - 8 March 2022**

### Fixes

**Service Manager**

- COMPUTEC LICENSE SERVER SETTINGS window, Database Connection tab: cannot add/refresh database list in case of tenant-type database server.

:::info
The defect is related to 5.11.0.2 version only.
:::

---

## CompuTec License Server 5.11.0.2

**Release Date - 2 March 2022**

### Fixes

**Service Manager**

- No application window (including CompuTec PDC/WMS Licensing, CompuTec License Server Settings) can be opened except the main one.

:::info
The defect is related to 5.11.0.1 version only.
:::

---

## CompuTec License Server 5.11.0.1

**Release Date - 28 February 2022**

### Changes and Improvements

**Service Manager**

- COMPUTEC LICENSE SERVER SETTINGS window: the red framing style has been changed to blue.

### Fixes

**Server, Direct Data Access**

- Incorrect application behavior on systems with Microsoft SQL Server installed, causing errors in the log file and Windows Event Viewer, and possibly disabling the Direct Data Access mode in ProcessForce

**Log file content (XXXXX – 5-digit number)**

System.Data.SqlClient.SqlException (0x80131904): There is already an object named '##TableXXXXX' in the database.

**Server, Service Manager**

- A problem related to running/stopping the CompuTec License Server service (also using Windows Services) after starting or restarting the service using CompuTec Service Manager in some cases.

---

## CompuTec License Server 5.10.2.9

**Release Date - 4 November 2020**

:::info
The installer is available to download from [here](../../../releases/download.md#computec-license-service).
:::

### Changes and Improvements

**Server – ProcessForce, Server – CompuTec PDC/WMS (terminals), Server – Labels, Server – Premium**

- Possibility to generate the license Hardware Key (CompuTec Key / Terminal License Key / Labels Hardware Key / Premium Hardware Key) on Amazon Elastic Compute Cloud (EC2) Instance in Amazon Web Services (AWS) infrastructure in case of the inability to connect to IPv4 URI by the system

**Server – WMS**

- SSL support for CompuTec WMS implemented

**Service Manager**

    - COMPUTEC LICENSE SERVER SETTINGS window, Database Connection tab:
        - The database list of a saved server is now sorted alphabetically
        - Refreshing the database list of a saved server now removes non-existent databases from the displayed list (without having to reset the server entry)

### Fixes

**Server, Service Manager**

- Stopping CompuTec License Server service while opening CompuTec Service Manager windows in some cases

---

## CompuTec License Server 5.10.2.1

**Release Date - 13 March 2020**

### Changes and improvements

**Service Manager**

- COMPUTEC LICENSE SERVER SETTINGS window, Database Connection tab: database and its credentials highlighted when Database User Name or User Password is different than the one saved for the related database server in the root position

### Fixes

**Server**

- License Hardware Key (CompuTec Key / Terminal License Key / Labels Hardware Key / Premium Hardware Key) is not displayed in case of a problem with reading a hardware component

**Service Manager**

- An error on clicking the CompuTec PDC/WMS Licensing button in case of permanent CompuTec PDC/WMS license in some cases.

**Error message**

- Error connecting to the license server

- CompuTec PDC/WMS LICENSING window, License Management tab: changing the option 'Assign available licenses for newly added terminal accounts automatically' is saved only after restarting CompuTec License Server service

---

## CompuTec License Server 5.10.1.1

**Release Date - 19 February 2020**

### Changes and improvements

**Server**

- Compatibility with CompuTec solutions dedicated for SAP Business One 10.0
