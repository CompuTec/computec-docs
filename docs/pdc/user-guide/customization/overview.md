---
sidebar_position: 1
---

# Overview

CompuTec PDC (Production Data Capture) is a versatile tool that can be tailored to meet the unique needs of your organization. Customizing the interface helps users interact with the tool in a way that suits their specific requirements, improving productivity and streamlining processes.

---

There are two primary ways to customize CompuTec PDC:

1. Form Settings
2. Task Tile and Task Panel Customization

## Form Settings

:::info
    To enable this option, you must activate the feature for a specific employee within the Employee Master Data. For detailed instructions, click [here](../../administrator-guide/setting-up-the-application/overview.md#requirements).
:::

Form settings allow users to control which columns appear on various CompuTec PDC forms, such as:

- Task Panel:

  - Details section
  - Operation Bind
  - Operation Properties
  - Resource Properties
  - Item Details
  - Tools
- Select Task – By Resource tab

Customization is accessible via the name bar of the respective forms. Users can check or uncheck specific column options to define which fields are displayed.

![Settings](./media/customization/pdc-customization-settings.webp)

## Task Tile and Task Panel Customization

To activate customization options for the task tile and task panel:

1. Press and hold Shift + Ctrl + Alt while clicking the Log In button on the login screen.
2. Once activated, select which values appear on the task tile by clicking the Change Icon: ![Change Icon](./media/customization/change-icon.webp).
3. Uncheck the Default checkbox and choose the desired value from the drop-down list. To revert, check the Default checkbox.

  ![Task Customization](./media/customization/task-panel-customization.webp)

Customization works similarly on the Task Panel form:

![Task Tile Customization](./media/customization/task-tile-customization.webp)

Users can also customize icons in the lower section of a task tile by rearranging them, assigning different actions, or hiding them using the Default and IsVisible checkboxes.

For example, a Quick Receipt action from the Receipt from Production panel can be assigned to a button. Adjustments can be saved by clicking the save icon (the left one on the screenshot below) or reverted using the rollback icon (the right one on the screenshot):

![Save Icon](./media/customization/save-icon.webp)

### Default View

For advanced customization, users can define SQL views to modify dropdown lists. To implement a custom view:

1. Define the view in the database.
2. Enter its name in the PDC Default View field within ProcessForce.

:::info Path
    Administration → System Initialization → General Settings → ProcessForce → PDC
:::

![PDC Default View](./media/customization/pdc-default-view.webp)

#### Example

**PDC Default View** = PDCVIEW for custom SQL View:

```sql title="MS SQL Example"
Create View [dbo].[PDCVIEW]
as
Select "DocEntry" ,"U_LineNum", U_RscCode+' | '+ U_RscType as "Description" from [@CT_PF_MOR16]
GO
```

```sql title="HANA Example"
Create View "PDCVIEW"
as
Select "DocEntry" ,"U_LineNum", "U_RscCode", "U_RscType" as "Description" from "@CT_PF_MOR16"
```

![Custom View](./media/customization/pdc-custom-view-1.webp)

![Custom View](./media/customization/pdc-custom-view-2.webp)

![Custom View](./media/customization/pdc-custom-view-3.webp)

**Additional space to accommodate user-specific buttons, ensuring sufficient room for their inclusion**

![Task Panel Customization](./media/customization/additional-space.png)

**Enhanced tile's capacity to incorporate additional custom fields**

![Task Panel Customization](./media/customization/custom-fields.png)
![Task Panel Customization](./media/customization/custom-fields-1.png)
![Task Panel Customization](./media/customization/custom-fields-2.png)

**Highlight PDC buttons to indicate the availability of additional information, such as drawings or instructions.**

![Task Panel Customization](./media/customization/pdc-buttons.png)

---
