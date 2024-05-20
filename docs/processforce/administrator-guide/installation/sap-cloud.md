---
sidebar_position: 5
---

# SAP Business One Cloud Environment

Here you can find notes on registering ProcessForce in the SAP Business One Cloud environment.

---

## Registering ProcessForce

Refer to the Managing Extensions chapter in the [SAP Business One Cloud Administrator's Guide](https://help.sap.com/docs/SAP_BUSINESS_ONE_CLOUD) for instructions on registering add-ons, deploying them to Service Units, and assigning them to Tenants in the Cloud Control Center.

## Error while deploying ProcessForce to Service Unit

If you encounter difficulties deploying the ProcessForce add-on to a Service Unit with an older version of SAP Business One Cloud or Cloud Control Center, it may be due to an error during the registration of the Microsoft COM DLL file (RegisterActiveX.dll). Should this occur, kindly submit a ticket through our support portal to request a version of the ProcessForce installer that facilitates proper deployment of the add-on.

## Closure of the SAP Business One Client

When logged in as Partner Support User (_PSU_1 or _PSU_2) and conducting tasks in ProcessForce, please close the SAP Business One client. There is a known defect causing the closure of the SAP Business One client without any message when performing activities in ProcessForce in the SAP Business One Cloud environment. It may cover several aspects, including:

- Trying to assign a user a ProcessForce license – please visit the [Licensing Issues](../../troubleshooting/licensing-issues.md) page for more information.

- Opening a ProcessForce window after at least 15 minutes of inactivity or after re-logging into the company database – please visit the [General Functions](../../troubleshooting/general-functions.md) page for more information.
