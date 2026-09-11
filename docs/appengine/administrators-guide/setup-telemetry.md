---
sidebar_position: 3
---

# OpenTelemetry Configuration

**OpenTelemetry** lets you monitor system behavior and troubleshoot issues in **CompuTec AppEngine** and **SAP Business One**.  

This guide explains how to connect your environment to a telemetry backend (such as **Grafana Cloud**) using an **OpenTelemetry** profile, and how to view logs, traces, and metrics.

## Configure OpenTelemetry Profile

To configure **OpenTelemetry** in **OpenTelemetry-compatible backend**, for example, **Grafana Cloud**, follow these steps:

1. Visit [**Grafana** website](https://grafana.com/) and create an account.
2. After logging in, create a new **Stack**.

    ![create stack](media/grafana/grafana1.png)

3. Go to **My account**.

    ![navigation to servixce accounts in grafana](media/grafana/gr1.png)

4. Click your **stack name** to manage it.

    ![add a service account button](media/grafana/gr12.png)

5. Find **OpenTelemetry** integration and click **Configure**.

    ![open telemetry configuration](media/grafana/gr2.png)

6. In **Password / API Token**, click **Generate now**.

    ![generating new token](media/grafana/gr3.png)

7. Name the token, set an **expiry** (or **no expiry**), and click **Create token**.

    ![creating a token](media/grafana/gr4.png)

8. In **CompuTec AppEngine Administration Panel**, navigate to **System** > **Telemetry Profiles**.

    ![navigate to telemetry profiles](media/grafana/gr88.png)

9. Create a new profile by clicking the **copy icon** next to the predefined **OpenTelemetry_All** profile.

    ![clone profile](media/grafana/grafana89.png)

10. Copy **Endpoint for sending OLTP signals** from **Grafana.com**.

    ![copy endpoints form grafana](media/grafana/gr9990.png)

11. Paste it to all ``Endpoint`` fields in your new **CompuTec AppEngine Open Telemetry** profile.

    ![paste endpoints to appengine](media/grafana/gr999.png)

    :::warning[important]
    When replacing the **OpenTelemetry** endpoint, replace only the URL up to and including ``/otlp``. Keep the endpoint suffix for each telemetry type:

    - ``/v1/logs`` for logs
    - ``/v1/traces`` for traces
    - ``/v1/metrics`` for metrics

    For example, if your **OpenTelemetry** endpoint is ``https://example.com/otlp``, use ``https://example.com/otlp/v1/logs``, ``https://example.com/otlp/v1/traces``, and ``https://example.com/otlp/v1/metrics`` in the corresponding configuration entries.
    :::

12. Copy **Environmental Variable OTLP Header** from **Grafana.com**.

    ![copy headers from garfana](media/grafana/grafana990.png)

13. Paste it to all ``Headers`` in your new **CompuTec AppEngine Open Telemetry** profile.

    ![paste headers to appengine](media/grafana/gr99.png)

14. In **CompuTec AppEngine Administration Panel**, click **Save**.

    ![save the profile](media/grafana/gr6.png)

15. Done! Now you can see this profile on the list in **CompuTec AppEngine Administration Panel** > **System** > **Telemetry Profiles**.

## Assign OpenTelemetry Profile to CompuTec AppEngine

To assign a profile to the **CompuTec AppEngine instance**, follow these steps:

1. Navigate to **CompuTec AppEngine Administration Panel** > **Configuration** > **AppEngine Servers**.

    ![navigation to appengine servers tab](media/grafana/grafana999.png)

2. Clcik the **edit icon** next to the chosen **CompuTec AppEngine** instance.

    ![assigning telemetry profile](media/grafana/grafana9999.png)

3. Click the **OpenTelemetry profile** you want to assign.

    ![assign telemetry profile](media/grafana/gr7.png)

4. Now you can see the **OpenTelemetry profile name** in the list.

    ![successfully assigned telemetry profile](media/grafana/gr7.png)

5. Restart the **CompuTec AppEngine Service** to apply the changes.

## Assign the OpenTelemetry Profile to SAP Business One

To assign the **OpenTelemetry** profile to the **Computec AppEngine company**, follow these steps:

1. Go to **CompuTec AppEngine Administration Panel** > **Configuration**.

    ![CompuTec AppEngine Administration Panel Configuration page showing the Configuration section selected in the left navigation and a Companies table with PF Demo (GB), company schema PFDEMOGB, active status, background processing, and one AppEngine](media/grafana/gr-con1.png)

2. Choose the **company name** from the list to see its details.

    ![CompuTec AppEngine Administration Panel Configuration page showing the PF Demo GB company row with company schema PFDEMOGB, active status, background processing status, and one AppEngine; expanded details below show Database User SYSTEM and SAP User manager](media/grafana/gr-con2.png)

    :::info[note]
    You can assign **OpenTelemetry Profiles**:
    - To all users in the company
    - To specific users needing tailored configurations
    :::

3. To assign the default profile to all users in the company, choose the **company name** from the list to see its details.

    ![CompuTec AppEngine Administration Panel Configuration page showing the PF Demo GB company row with company schema PFDEMOGB, active status, background processing status, and one AppEngine; expanded details below show Database User SYSTEM and SAP User manager](media/grafana/gr-con2.png)

4. Click the **edit icon** next to **Telemetry Profile**.

    ![CompuTec AppEngine Administration Panel Configuration page for PF Demo (GB), with the Telemetry Profile edit button highlighted by a large blue arrow](media/grafana/gr-con3.png)

5. Choose the **OpenTelemetry profile** from the list.

    ![OpenTelemetry profile selection dialog showing the grafana.com_all profile and its configuration description, including text about sending logs, metrics, and traces to an OTLP server and replacing the endpoint and header values; a blue arrow points to the profile settings in the JSON editor](media/grafana/gr-con4.png)

6. Done! Now you can see the **Telemetry Profile** name assigned to your company.

    ![CompuTec AppEngine Administration Panel Configuration page for PF Demo (GB), showing the assigned Telemetry Profile grafana.com_all; a large blue arrow points to the profile name in the company details](media/grafana/gr-con5.png)

7. To assign the profile for a specific user, navigate to **Telemetry Profiles** in your company details.

    ![CompuTec AppEngine Configuration page for PF Demo (GB), with the Telemetry Profiles tab selected; the page shows an empty Telemetry Profiles table and an Assign profile link](media/grafana/gr-con6.png)

8. Click **Assign profile**.

    ![CompuTec AppEngine Configuration page for PF Demo (GB) with the Telemetry Profiles tab selected; an empty Telemetry Profiles table is shown, and the Assign profile link at the upper right is highlighted by a large blue arrow](media/grafana/gr-co67.png)

9. Type the **user name**, click the **edit icon** to assign the chosen **Telemetry Profile**, and click **Create Assignment**.

    ![Assign User Telemetry Profile dialog showing the username manager and the grafana.com_all telemetry profile; the Create Assignment button is highlighted by a large blue arrow, with the company details and Telemetry Profiles section visible in the background](media/grafana/gr-con7.png)

10. Restart **Sap Business One** to see the changes.

## Explore the OpenTelemetry Profiles and Logs

1. In Grafana, click **Launch Grafana Cloud**.

    ![Grafana Manage Stack page for my-stack, showing the Grafana Cloud section and a Launch Grafana Cloud button highlighted by a large blue arrow](media/grafana/stack1.png)

2. Navigate to **Explore**.

    ![Grafana Cloud Explore page with Explore selected in the left navigation; the dark interface shows a traces query panel with Search, TraceQL, and Service Graph tabs, a Service Name filter, and navigation and query controls across the top](media/grafana/stack2.png)

3. Choose the **exploration method** from the list:

    - ``traces``: View time-based traces
    - ``logs``: Inspect logs
    - ``prom``: Analyze metrics

    ![Grafana Explore interface showing the grafanacloud data source selected for traces; the dark page has Explore highlighted in the left navigation, a query panel with Search, TraceQL, and Service Graph tabs, a Service Name filter, and a blue arrow pointing to the selected traces data source](media/grafana/stack3.png)

4. When viewing traces, use **Service Name** to filter the results by service.  
    Available service names depend on your environment and configuration.

    ![grafana explorer](media/grafana/stack4.png)

:::note[info]
To further narrow the results by **User Name** or **Database ID**, use the **Tags** filter. Select resource, then select the required attribute and value.
:::

## Export log data from Grafana

You can export log data from Grafana when needed, for example, for further analysis or troubleshooting.

:::note[info]
For instructions, see the [Grafana documentation](https://grafana.com/docs/grafana/latest/visualizations/explore/logs-integration/#download-log-lines).
:::
