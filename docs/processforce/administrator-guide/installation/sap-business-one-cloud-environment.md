---
sidebar_position: 5
---

# SAP Business One Cloud Environment

**CompuTec ProcessForce** can be deployed in **SAP Business One Cloud** environments using the standard SAP Business One extension management process.

This article provides information about registering **CompuTec ProcessForce**, known deployment issues, and client behavior specific to **SAP Business One Cloud** installations.

## Register CompuTec ProcessForce

To register and deploy **CompuTec ProcessForce** in **SAP Business One Cloud**, follow the procedures described in the [SAP Business One Cloud Administrator's Guide](https://help.sap.com/docs/SAP_BUSINESS_ONE_CLOUD).

Use the **SAP Business One Cloud Control Center** to:

- Register the **CompuTec ProcessForce** extension
- Deploy the extension to a **Service Unit**
- Assign the extension to tenants

For detailed instructions, refer to the [Managing Extensions section of the SAP Business One Cloud Administrator's Guide](https://help.sap.com/docs/SAP_BUSINESS_ONE_CLOUD_GUIDES/cd6ee6810dbf4eda8f6a96a10285b852/717a1251caad4cb1b4c72490eb010fc6.html).

## Deployment issues

### Error during deployment to a Service Unit

In some older **SAP Business One Cloud** environments, deployment may fail due to issues with **Microsoft COM DLL** ``RegisterActiveX.dll`` file registration.

This issue is typically related to the registration of the **RegisterActiveX.dll** file during deployment.

#### Solution

If deployment fails:

- Verify the **SAP Business One Cloud and Cloud Control Center** versions.
- Contact **CompuTec Support**.
- Request a **CompuTec ProcessForce** installer compatible with your **SAP Business One Cloud** environment.

## Known limitations

### SAP Business One client closes unexpectedly

In some **SAP Business One Cloud** environments, the **SAP Business One** client may close unexpectedly while using **CompuTec ProcessForce**.

This behavior has been observed most frequently when logged in using a **Partner Support User** account, such as:

- PSU_1
- PSU_2

### License assignment

The **SAP Business One** client may close unexpectedly while assigning **CompuTec ProcessForce** licenses.

For more information, see the [**Licensing Issues** documentation](../../troubleshooting/licensing-issues.md).

### Opening CompuTec ProcessForce windows

After the **SAP Business One** client remains inactive for an extended period, or after reconnecting to the company database, some **CompuTec ProcessForce** windows may not open correctly.

This issue may occur:

- After approximately 15 minutes of inactivity
- After logging out and logging back into the company database

For more information, see the [**General Functions** documentation](../../troubleshooting/general-functions.md).

## Additional information

If you experience deployment or operational issues in **SAP Business One Cloud** environments, contact [**CompuTec Support**](https://support.computec.pl/servicedesk/customer/portals) for assistance.
