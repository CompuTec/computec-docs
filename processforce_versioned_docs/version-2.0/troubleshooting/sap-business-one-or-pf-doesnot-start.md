---
sidebar_position: 5
---

# SAP Business One or ProcessForce does not Start

---

## 'SQL Native Client’ not installed on workstation

Install the ‘SQL native client’ driver on every SAP Business One client workstation(s).

This software is available on the MS SQL 2005/2008/2012 CD – run the installation wizard and choose to install the SQL Native Client. It is also available for download on the Microsoft website.

## User alerts triggered after login

Run the following query on the company database to find out if there are active user alerts:

```sql
SELECT *
FROM OALT T0
WHERE TYPE = 'U' AND ACTIVE = 'Y'
```

If the above query returns any results, log in as a user for which the alert is not active and disable the alert for the affected user.

## SAP or 3rd Party add-ons starting automatically

Run the following query on the company database to find out if there are SAP or 3rd party add-ons starting automatically.

```sql
SELECT *
FROM OARI T0 INNER JOIN [SBO-COMMON].dbo.SARI T1
ON T0.AddOnID = T1.AddOnID
WHERE T0.AStatus = 'Y'
```

If the above query returns any results, log in as a super-user and set the add-ons to start manually.

## Additional code in the SBO_SP_TransactionNotification and SBO_SP_PostTransacionNotice

Comment the additional code in the *SBO_SP_TransactionNotification*  and *SBO_SP_PostTransacionNotice* (If any). Kindly refer to the SAP Note [2079411](https://me.sap.com/notes/2079411) for more details.

## Windows user lacks power or admin privileges on workstation

Please make sure the Windows user is a power or an admin user on the workstation:
    1. Go to *‘My Computer*’ right-click, and select *‘Manage*’.
    2. Expand *Local Users and Groups*, and select *Groups*.
    3. Double-click Power Users or Administrators and verify the currently logged in user is part of either group.
    4. If not, add the user using *‘Add*…’ button.

## DI API not installed correctly

Only one DI API version should be installed on a SAP Business One client. If SAP Business One client is installed on a workstation then the DI API is automatically installed with the client. Otherwise installing the stand-alone version of DI API is recommended.

To ensure only the client version of the DI is installed, follow these steps:
    1. Remove the standalone version of the DI API via Add/Remove Program
    2. Delete the directory %temp%/SM_OBS_DLL
    3. Install correct DI API from server location

## Anti-virus software running on the workstation

Please disable/stop any anti-virus software running on the server or client workstation and retest the application shutdown issue again.

## Windows update pending on the server or workstation

1. Please verify if there is a Windows update pending. Reboot workstation or server.
2. Please make sure that your Windows version is supported.

    [SAP current supported system for HANA](https://download.computec.one/media/sap/SAP_Business_One_Platform_Support_Matrix_HANA.pdf)

    [SAP current supported system for SQL](https://download.computec.one/media/sap/SAP_Business_One_Platform_Support_Matrix_SQL.pdf)

## License service set to ‘localhost’

Please make sure that the license server is not set to localhost. Change it to its server name or IP address by following these steps:

1. Go to SAP Business One service manager.
2. Select the *License Manager*.
3. Click *Settings*. In the *‘connection*’ section enter the server IP address or server name.

## VPN-configured setup in the server

Please make sure that there is no VPN-configured interface setup in the server by following these steps:

1. Disable any VPN connections.
2. Restart the server.

## UI Server not registered, failed to start correctly

Reinstall the SAP Business One client on the affected workstation. Please refer to SAP Note [1989534](https://me.sap.com/notes/1989534) for details.

## Reinstall the SAP Business One client on the affected workstation

Reinstall the SAP Business One client on the affected workstation. Please refer to SAP Note [1989534](https://me.sap.com/notes/1989534) for details.

## Reinstall ProcessForce correctly

How to reinstall ProcessForce add-on correctly (in case of any old ProcessForce API library is still stored in the system):

1. Run SAP Business One client with administrative permissions (option available from right mouse click menu on SAP Business One icon).
2. Unregister ProcessForce add-on from SAP Business One Client (Administration > Add-Ons > Add-On Administration).
3. Restart SAP Business One Client to complete the ProcessForce dismounting process.
4. Check the Task Manager on the server – there still can be some ProcessForce.exe processes (if are, please log off users and terminate these processes).
5. If you are using CompuTec WMS on this server, please stop CompuTec WMS Server and terminate all CompuTec.Client.Desktop.exe processes.
6. Remove ProcessForce API from Windows Programs & features.
7. Register ProcessForce add-on again.

**Note**: Above steps should be done when nobody is using SAP Business One client with ProcessForce add-on (out of working hours).
