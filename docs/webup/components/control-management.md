---
sidebar_position: 3
---

# Control Management

The **Control Management** function lets you define, edit, and organize how UI controls are arranged in the SAP Business One Web Client.

You can review, modify, and reposition controls across supported SAP views.
All layout changes are context-aware and saved in the active user profile.

Before making advanced layout adjustments, you must first create an editable view for the current SAP Web Client screen using **Create New View**.

:::info[note]
You can access each CompuTec WebUp function from the **CompuTec WebUp Manager Side Panel** inside the SAP Business One Web Client. Features open only if the current **SAP Business One** screen supports extensibility.

If a view is not supported by the SAP Web Client Extensibility model, the system displays `Unsupported View`, and editing is disabled.
Some view sections don't have visible titles. In these cases, they are identified by their order in the layout instead of a label.
:::

## Key functions of control management

- **Select Control**: Precisely select specific controls

    ![SAP Business One Web Client Sales Order screen with the CompuTec WebUp Manager side panel open and the Select Control button visible in control details](./media/0401control-management-select-control.png)

    :::note[info]
    Each control in SAP Business One Web Client has its **Global Unique Identifier (GUID)**. You can copy it and use it in the script during the **View Actions** creation to precisely reference a control in your SAP Business One interface.  
    To reference controls precisely when building actions, you can use the **Select Control** tool, the right-click **Inspect Element** or **Copy GUID** options.

    ![CompuTec WebUp Manager side panel showing control detail fields and the Copy GUID option available](./media/00-webup-functions-copy-guid.png)
    :::

- **Basic Options**: Edit control details such as name, visibility, and position

    ![CompuTec WebUp Manager side panel displaying basic control options for label, visibility, and position while SAP Business One screen is in the background](./media/0402control-management-basic-options.png)

- **Position**: Move or reorder controls within a section or between different sections

    ![CompuTec WebUp Manager side panel showing position controls while a selected control is highlighted on the SAP Business One screen](./media/0403control-management-position.png)

- **Mode**: View and edit control properties using **Basic** or **Dynamic** options:
  - **Basic**: Allows you to quickly update to standard control attributes (label, visibility, mandatory settings). It's ideal for simple layout changes that do not require data binding.
  - **Dynamic**: In this option, the control's value reacts dynamically to changes in a data source (for example, Sales Quotation Total). It is useful for dynamic layouts that are adjusted based on a condition: business logic or user input.

    ![CompuTec WebUp Manager side panel showing the Basic and Dynamic tabs for control properties with the Sales Order layout visible behind](./media/04control-management-basic-dynamic.png)

    :::note[info]

    Watch our video to see how to use the **Dynamic** mode to highlight chosen fields with color:  
    ▶ **Watch**: [CompuTec WebUp - Highlighting Fields with Colour](https://www.youtube.com/watch?v=ufN3qK_F1aY)
    :::

## Control management use cases

### Add a new control

If you want to add a new control, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen where you want to add a control. In our case, it is **Sales Order 4**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.

    ![SAP Business One Sales Order 4 screen with CompuTec WebUp Manager side panel open and the form area ready for adding a new control](media/add-control/1-wu-add-new-control.png)

4. Click **+ New Control**.

    ![CompuTec WebUp Manager side panel on the Sales Order screen showing the New Control button in the Control Details tab](media/add-control/2-wu-add-new-control-click.png)

5. Choose **Control Type** from the list.

    ![CompuTec WebUp Manager new control dialog listing control type options inside the side panel](media/add-control/3-wu-add-new-control-type.png)

6. In **Target Control** field, choose the position from the list, or use the **arrow icon** to do it manually.

    ![CompuTec WebUp Manager side panel showing the Target Control field with an arrow icon for manual placement](media/add-control/4-wu-add-new-control-position-icon.png)

7. In **SAP Business One Web Cient**, click the place where you want to add the control. In our example, we click the **Owner** field.

    ![Sales Order form showing the Owner field selected as the target position for the new control](media/add-control/5-wu-add-new-control-position-place.png)

8. In **CompuTec WebUp Manager** side panel, choose the **Relative Position** of the control. In our example, we want to add our control ``After`` the **Owner** field.

    ![CompuTec WebUp Manager side panel showing relative position options for the new control](media/add-control/6-wu-add-new-control-position-relative.png)

9. In **Basic Options**, define how the control should look and behave.

    ![CompuTec WebUp Manager Basic Options panel showing fields for control label, name, and visibility settings](media/add-control/8-wu-add-new-control-info.png)

    :::note[info]
    **CompuTec WebUp Manager** includes a **Help Mode** that provides quick access to SAP Business One documentation.

    If you want to know more about each control type or configuration option, turn on **Help Mode** by clicking the **question mark icon** in **CompuTec WebUp Manager**.  

    When **Help Mode** is active, additional **? icons** appear next to supported **controls**, **properties**, and **SAP Business One objects**. Click any of these icons to open the related SAP documentation and learn more about the selected element.

    This feature helps you quickly find information about SAP Business One controls and configuration options without leaving the current screen.

    [▶ Watch: CompuTec WebUp Manager Help Mode](https://www.youtube.com/watch?v=DBv20ifpcCY)

    :::

10. Click **Save**.

    ![CompuTec WebUp Manager side panel showing the Save button for the new control configuration](media/add-control/7-wu-add-new-control-save.png)

11. Now you can **Preview** the results.

    ![CompuTec WebUp Manager side panel showing the Preview button to review the new control placement](media/add-control/10-wu-add-new-control-preview.png)

12. If you are happy with the results, **Activate** the view.

    ![CompuTec WebUp Manager side panel showing the Activate button to enable the new control view](media/add-control/11-wu-add-new-control-activate.png)

13. Done! You've successfully added a control.

### Hide an unused control

If you want to hide an unused control, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![CompuTec WebUp Manager side panel showing the Control Details tab active with Select Control button in the upper-right and draft view status visible](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to hide on the **SAP Business One Web Client** screen. In our example, we want to hide the **Additional Information** section.

    ![SAP Business One Sales Order screen in select mode with the Additional Information section highlighted as the selected control](./media/wu-control-management-hide-choose2.png)

6. In **CompuTec WebUp Manager** side panel on the right, find **Visible** option, and click **the toggle** to turn it off.

    ![In the Control Details tab under Basic Options, the Visible setting is displayed with Basic and Dynamic options. The toggle switch next to Visible is set to enabled (checked). The user has to turn it off to hide the control.](./media/wu-control-management-hide-toggle2.png)

7. Click **Save**.

    ![CompuTec WebUp Manager side panel displaying Save and Cancel buttons in the Control Details tab at the bottom-right of the panel](media/wu-control-management-hide-save2.png)

8. Click **Preview** to see the changes.

    ![CompuTec WebUp Manager side panel open on a draft view showing the Preview button in the upper-right corner next to Activate](./media/wu-control-management-hide-preview.png)

9. Click **Activate** when you are satisfied with the result.

    ![CompuTec WebUp Manager side panel open on a draft view showing the Activate button in the upper-right corner next to Preview](./media/wu-control-management-hide-activate2.png)

10. Done! The control is hidden.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Hide Controls](https://www.youtube.com/watch?v=HBFxPcV0ris&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=2)

### Move a control to a different section

If you want to move a control to a different section, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![CompuTec WebUp Manager side panel showing the Control Details tab active with Select Control button and draft view status visible](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to move on the **SAP Business One Web Client** screen. In our example, we want to move the **Contact Person** field higher, to directly under the **Customer** field.

    ![SAP Business One Sales Order screen in select mode with the Contact Person field highlighted as the chosen control](./media/wu-functions-select-control-click.png)

6. In **CompuTec WebUp Manager** panel on the right, find the **Position** section, and click **the arrow** to turn on new location selection for the control.

    ![The selected field is highlighted. The highlighted area indicates the selected target control. Now the user has to click an arrow to choose a new position for the selected control. the arrow is on the right, in the CompuTec WebUp manager side panel.](./media/wu-functions-select-control-position.png)

7. Click the section where you want to move the control.

    ![SAP Business One Web Client showing a section highlighted for placing the selected control in a new location](media/wu-functions-select-control-new-location.png)

8. Click **Save** to continue.

    ![CompuTec WebUp Manager side panel showing Save and Cancel buttons in the Control Details tab after choosing a new location](media/wu-functions-select-control-reposition-save2.png)

9. Click **Preview** to review your changes, then click **Activate** when you are satisfied with the result.

    ![CompuTec WebUp Manager side panel open on a draft view showing the Activate button in the upper-right corner next to Preview](./media/wu-functions-select-control-activate.png)

10. Done! You've successfully moved the control.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Move Controls](https://www.youtube.com/watch?v=bUEkcdizCLY&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=3)

### Make a field mandatory

If you want to make a field mandatory, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![CompuTec WebUp Manager side panel showing the Control Details tab active with Select Control button next to view status information](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to make mandatory on the **SAP Business One Web Client** screen. In our example, we want to make the **Currency** field mandatory.

    ![SAP Business One Sales Order screen in select mode with the Currency field highlighted as the chosen control](./media/control-mandatory-choose-control.png)

6. In the **Control Details** tab of the **CompuTec WebUp Manager** side panel, navigate to **Mandatory** section, and turn on **the toggle**.

    ![CompuTec WebUp Manager side panel showing the Mandatory section with the toggle turned on for the selected Currency field](media/control-mandatory-toggle.png)

7. Click **Save** to continue.

    ![CompuTec WebUp Manager side panel displaying Save and Cancel buttons in the Control Details tab to apply the mandatory field configuration](media/control-mandatory-save.png)

8. Click **Preview** to review your changes, then click **Activate** when you are satisfied with the result.

    ![CompuTec WebUp Manager side panel open on a draft view showing the Activate button next to Preview](./media/control-mandatory-activate.png)

9. Done! You've successfully made the control mandatory.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - Controls - Other Configurations](https://www.youtube.com/watch?v=MQk_z-cr-v8&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=4)
