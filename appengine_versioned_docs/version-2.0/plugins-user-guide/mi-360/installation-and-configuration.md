---
sidebar_position: 2
---

# Installation and Configuration

MI360 is a standard AppEngine Plugin designed to work with CompuTec ProcessForce. This guide explains how to install the plugin, mobile application, and configure background jobs for preventive maintenance automation.

:::Info
MI360 is not a standalone application - it requires CompuTec ProcessForce Plugin to function. Ensure that CompuTec ProcessForce Plugin is installed and enabled in your company database.
:::

References:

- [AppEngine 2.0 Plugin Installation Guide](https://learn.computec.one/docs/appengine/2.0/administrators-guide/configuration-and-administration/overview)

- [AppEngine 3.0 Plugin Installation Guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/plugins/overview)

---

## Installing the MI360 Mobile App

**Installation Steps**

MI360 can be installed as an application in your mobile devices.

- On your Android device, open a mobile browser.
- Enter the following URL:

    `https://<AppEngineHost>:<Port>/launchpad`
- Select Launchpad and log in with your credentials.
- Choose Install App to add MI360 to your device home screen.

    ![Mobile App](./media/mobile-app.png)

## Background Jobs

MI360 integrates with CompuTec AppEngine background jobs to automate the creation of Preventive Maintenance Orders. These jobs ensure that maintenance schedules are generated automatically based on time or meter readings.

| Job Name | Description |
| --- | --- |
| Preventive Maintenance Creator - Meter Based | After a meter reading (updating the **CT_PF_MeterRead** object) and updating the **Maintenance Order (CT_PF_MainOrder)**, this job checks data in **PMSchedule** and, when required, automatically creates new Maintenance Orders based on preventive maintenance configurations. The job ensures that all preventive Maintenance Order requirements are evaluated and, once conditions are met, generates the corresponding orders. Without running this job, automatic creation of Maintenance Orders does not occur. |
| Preventive Maintenance Creator - Time Based | This job runs every ten minutes to check data in **PMSchedule** and, when all preventive Maintenance Order configuration requirements are met, automatically creates new **Maintenance Orders**. Without running this job, the automatic creation of Maintenance Orders does not function. |

**References**

You can find detailed information on managing background jobs in the following documentation:

- [CompuTec AppEngine 2.0 Background Jobs Guide](https://learn.computec.one/docs/appengine/2.0/administrators-guide/configuration-and-administration/overview)

- [CompuTec AppEngine 3.0 Background Processing Guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/background-processing)

---
