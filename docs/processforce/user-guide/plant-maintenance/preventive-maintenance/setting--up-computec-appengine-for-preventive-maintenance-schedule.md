---
sidebar_position: 8
---

# Setting up CompuTec AppEngine for Preventive Maintenance Schedule

## SLD Servers Configuration

1. Enable the 'Background Processing Date' on your company's SLD Servers by switching it to **ON**.

    ![SLD Servers Configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/sld-server.jpg)

2. If this is your first time setting it up, you may encounter an error requesting that you add a specific statement in the Post-transaction procedure. Once the required code is added, you can proceed to turn the "Background Processing Date" to **ON**.

    ![SLD Servers Configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-27-14-37-52.png)

## Plugins Configuration

1. Install **CompuTec ProcessForce** and the [MI360 plugin](/docs/appengine/2.0/releases/plugins/mi360/download).

    ![Plugins Configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/Plugins.jpg)

2. Activate both **CompuTec ProcessForce** and **MI360** for your company.

    ![Plugins Configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-27-14-45-43.png)

## Background Processing Configuration

Preventive Maintenance Schedule based on **Time** set up:

    1. Go to the **PMScheduleTimeBasedJob** background processing and activate it for your company.

    ![Background Processing configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-28-9-36-11.png)

    ![Background Processing configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-28-9-38-42.png)

Preventive Maintenance Schedule based on **Meter** values set up.

    1. Go to the **PMScheduleMeterBasedJob**, **PMScheduleTimeBasedJob**, and **SEventJob** background processing and activate them for your company.

        ![Background Processing configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-28-9-41-35.png)

Preventive Maintenance Schedule based on **Time** and **Meter** values set up:

    1. Go to the **PMScheduleMeterBasedJob**, **PMScheduleTimeBasedJob**, and **SEventJob** background processing and activate them for your company.

    ![Background Processing configuration](./media/how-to-set-up-appengine-for-preventive-maintenance-schedule/image2021-4-28-9-44-34.png)

---
