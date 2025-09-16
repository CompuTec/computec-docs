---
sidebar_position: 5
---

# SAP Business One Cloud Environment

CompuTec ProcessForce is a powerful extension for SAP Business One, designed to enhance manufacturing and process management. If you’re working in the SAP Business One Cloud environment, you’ll need to ensure that CompuTec ProcessForce is properly registered, deployed, and maintained. This guide provides key information on setting up CompuTec ProcessForce, resolving deployment issues, and handling known client behavior in the cloud environment.

---

## Registering CompuTec ProcessForce

To register CompuTec ProcessForce in SAP Business One Cloud, refer to the Managing Extensions chapter in the  [SAP Business One Cloud Administrator's Guide](https://help.sap.com/docs/SAP_BUSINESS_ONE_CLOUD). This section outlines the process for registering add-ons, deploying them to Service Units, and assigning them to Tenants using the Cloud Control Center.

## Error while Deploying CompuTec ProcessForce to Service Unit

If you encounter errors while deploying CompuTec ProcessForce to a Service Unit, particularly with older versions of SAP Business One Cloud or the Cloud Control Center, the issue may be related to the registration of the Microsoft COM DLL file (RegisterActiveX.dll). If this occurs, submit a ticket through our support portal to request a compatible version of CompuTec ProcessForce installer that supports proper deployment.

## Closure of the SAP Business One Client

There is a known issue in the SAP Business One Cloud environment where the SAP Business One client may close unexpectedly when working with CompuTec ProcessForce, especially when logged in as a Partner Support User (PSU_1 or PSU_2). This can occur in the following scenarios:

- **Assigning CompuTec ProcessForce Licenses**: The system may close unexpectedly while assigning user licenses. For more details, refer to the[Licensing Issues](../../troubleshooting/licensing-issues.md) page.

- **Opening CompuTec ProcessForce Window**: If the client remains inactive for 15 minutes or after re-logging into the company database, CompuTec ProcessForce windows may not open correctly. Visit the [General Functions](../../troubleshooting/general-functions.md) page for more information.

---
