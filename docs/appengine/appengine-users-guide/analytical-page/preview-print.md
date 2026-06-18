---
sidebar_position: 6
---

# Preview & Print Feature

The **Preview & Print** feature lets you generate PDF reports directly from an **Analytics** data source. You can preview reports in your browser, download them, or print data for one or multiple records.

Reports use **SAP Business One Crystal Reports** templates configured for the selected **Analytics** source.  

## Before You Begin

Make sure:

- You can access **CompuTec AppEngine Launchpad**.  
- The **Analytics** source already has at least one configured print option.  
- You know which data source you want to use.

## Open Preview & Print

To access the feature:

1. Log in to **CompuTec AppEngine Launchpad**.

    ![Screenshot showing CompuTec AppEngine Launchpad login interface with AppEngine branding, a white card over a mountain background, and navigation for choosing a workspace. The visible text includes Choose your workspace, Launchpad, and Log in with SAP Business One. The screen has a clean business application design with a calm blue environment.](media/preview_print/prev-and-print1.png)

2. Click the **Analytics** icon.  

    ![Analytics icon in the AppEngine Launchpad header navigation, shown as a stylized rising bar chart, with the launchpad interface and workspace cards visible below text](media/preview_print/prev-and-print2.png)

3. Click **Go to Source Manager**.  

    ![A blue Go To Source Manager button in the AppEngine Launchpad header navigation, shown on a clean business application screen with a large blue arrow pointing to the button, indicating where to access the source manager from the Analytics interfacetext](media/preview_print/prev-and-print3.png)

4. Select your data source.  

    ![Analytics Source Manager screen in AppEngine Launchpad showing a Source List table with columns Name and Sql; a large blue arrow points to the Sales Orders row in the table](media/preview_print/prev-and-print4.png)

5. Open the **Preview & Print** tab.  

    ![Preview and Print tab in AppEngine Launchpad source manager with Sales Orders selected and a large blue arrow pointing to the Preview and Print tab. The screen shows a header with Sales Orders and tabs labeled General Actions Preview and Print in a clean business application interface.](media/preview_print/prev-and-print5.png)

The tab displays all configured print options available for the selected source.

## Create a New Print Instance

A print instance is a saved print configuration. It defines which report to use and what data is sent to that report.

For example:

- Invoice PDF  
- Order Summary  
- Delivery Confirmation  

To create a new instance:

1. Click the **edit** icon to enter edit mode.

    ![Edit icon button in the Preview and Print tab of AppEngine Launchpad source manager, shown as a pencil symbol in a toolbar with other action buttons, indicating how to enter edit mode for configuring print instances](media/preview_print/prev-and-print6.png)

2. In the **Preview & Print** tab, click **+ Add**.  

    ![Preview and Print tab toolbar in AppEngine Launchpad source manager showing a blue plus Add button on the right side of the header and the label Add, indicating where to click to add a new print instance](media/preview_print/prev-and-print7.png)

3. Enter a **Name**, and select the **Content Type**.  

    ![AppEngine Launchpad Preview & Print configuration dialog showing the Name field set to Items and the Content Type dropdown open to Layout and Report options, displayed in the source manager interface on a white panel within the Analytics screen.](media/preview_print/prev-and-print8.png)

4. Select the **report** or **layout** that will generate the PDF.  

    ![Preview and Print configuration panel in AppEngine Launchpad showing the layout field set to RDR20002 and the Content Type set to Layout, with a large blue arrow pointing to the layout selector in the Analytics source manager interface](media/preview_print/prev-and-print9.png)

    :::info[Note]

    Currently, **Crystal Reports** are fully supported.
    :::

5. Configure the parameters:

    - Use **Constant** when the value should always stay the same. Example: ``CompanyCode`` = ``US01``
    - Use **Field** when the value should come from the Analytics data source. Example: Use the selected row’s **Document Number** column.
    - Enable **Ask** to turn on **Ask at Print Time** feature if users should enter or select a value when generating the report. This is useful when the value changes between print runs.

        ![Preview and Print parameter configuration dialog showing options for Constant, Field, and Ask. The screen includes guidance that Constant keeps a fixed value such as CompanyCode = US01, Field uses a value from the selected row’s Document Number column, and Ask enables Ask at Print Time so users can enter or select a value when generating the report. The interface appears as a white panel inside the AppEngine Launchpad environment.](media/preview_print/prev-and-print10.png)

6. Click **Save**.

7. Done! The new print option becomes available for users of this **Analytics source**.  

    ![Preview and Print scenarios table in AppEngine Launchpad source manager showing the row named Items with report RDR20002 selected. The interface includes tabs labeled General Actions Preview & Print Variants, a header for source OITM with ID 54facf9b-3eb0-4d5e-9329-f81e3bbc7bf3, and a clean business application layout with a blue arrow pointing to the Items entry.](media/preview_print/prev-and-print11.png)

## Combine Multiple Records into One PDF

Some reports support multi-value parameters. If available, you can enable **Combine into Single Export**.

Behavior depends on this setting:

| Selection | Result |
| --- | --- |
| ``Disabled`` | One PDF is generated per selected row |
| ``Enabled`` | One combined PDF is generated for all selected rows |

This option helps when users need a single report containing multiple records.  

## Edit or Delete a Print Instance

To change an existing instance:

1. Open the **Preview & Print** tab.

    ![Preview and Print tab showing the edit icon in a toolbar and a list of print instances in AppEngine Launchpad source manager, with the interface framed as a white header and content area that indicates edit mode for configuring print instances](media/preview_print/prev-and-print121.png)

2. Click the **edit icon** to enter the edit mode.

    ![alt text](media/preview_print/prev-and-print12.png)

3. Select the instance from the list.

    ![alt text](media/preview_print/prev-and-print13.png)

4. Make your changes.  

5. Click **Save**.

    ![alt text](media/preview_print/prev-and-print14.png)

6. To remove an instance, click **Delete**.

    ![alt text](media/preview_print/prev-and-print15del.png)

:::info[Note]
Deleted instances are no longer available to users.  
:::

## Use Preview & Print in Analytics

After a print instance is configured, users can generate reports directly from the **Analytics** table.

To generate a report, follow these steps:

1. Open the chosen **Analytics source**.  

    ![alt text](media/preview_print/prev-and-print16.png)

2. Select one or more rows.  

3. Click **Preview & Print** in the toolbar.  

    ![alt text](media/preview_print/prev-and-print17.png)

4. Choose a **print option** from the dropdown list.

    ![alt text](media/preview_print/prev-and-print18.png)

5. If prompted, enter any required parameter values, and click **OK**.

    ![alt text](media/preview_print/prev-and-print19.png)

6. Wait for the report generation to complete.

    ![alt text](media/preview_print/prev-and-print20.png)

    When finished, you can:
    - Preview the PDF in your browser  
    - Download the PDF
    - Print the report

## Supported Report Types

- Currently, **Crystal Reports** are supported.
- Layout-based reporting is planned for a future release. If a layout option is selected, the system displays a ``not yet implemented`` message.
