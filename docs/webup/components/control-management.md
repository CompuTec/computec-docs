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
:::

## Key functions of Control Management

- **Select Control**: Precisely select specific controls

    ![screen showing how to select a control](./media/0401control-management-select-control.png)

    :::note[info]
    Each control in SAP Business One Web Client has its **Global Unique Identifier (GUID)**. You can copy it and use it in the script during the **View Actions** creation to precisely reference a control in your SAP Business One interface.  
    To reference controls precisely when building actions, you can use the **Select Control** tool, the right-click **Inspect Element** or **Copy GUID** options.

    ![screen showing how to copy guid](./media/00-webup-functions-copy-guid.png)
    :::

- **Basic Options**: Edit control details such as name, visibility, and position

    ![screen showing basic control options](./media/0402control-management-basic-options.png)

- **Position**: Move or reorder controls within a section or between different sections

    ![screen showing how to change control's position](./media/0403control-management-position.png)

- **Mode**: View and edit control properties using **Basic** or **Dynamic** options:
  - **Basic**: Allows you to quickly update to standard control attributes (label, visibility, mandatory settings). It's ideal for simple layout changes that do not require data binding.
  - **Dynamic**: In this option, the control’s value reacts dynamically to changes in a data source (for example, Sales Quotation Total). It's useful for dynamic layouts that are adjusted based on a condition: business logic or user input.

    ![screen showing basic and dynamic options](./media/04control-management-basic-dynamic.png)

:::info[Note]
If a view is not supported by the SAP Web Client Extensibility model, the system displays `Unsupported View`, and editing is disabled.

Some view sections don't have visible titles. In these cases, they are identified by their order in the layout instead of a label.
:::

## Control Management use cases

### Hide an unused control

If you want to hide an unused control, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Select Control button appears in the upper-right area of the panel, next to the view information and status indicator.](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to hide on the **SAP Business One Web Client** screen. In our example, we want to hide the **Additional Information** section.

    ![The system is in Select Mode. In the main Sales Order screen, the section Additional Information is highlighted. The highlighted area indicates the selected target control.](./media/wu-control-management-hide-choose2.png)

6. In **Computec WebUp Manager** side panel on the right, find **Visible** option, and click **the toggle** to turn it off.

    ![In the Control Details tab under Basic Options, the Visible setting is displayed with Basic and Dynamic options. The toggle switch next to Visible is set to enabled (checked). The user has to turn it off to hide the control.](./media/wu-control-management-hide-toggle2.png)

7. Click **Save**.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Save and Cancel buttons are located at the bottom-right of the panel. The user has to click the Save button used to apply the configuration changes.](./media/wu-control-management-hide-save2.png)

8. Click **Preview** to see the changes.

    ![The CompuTec WebUp Manager side panel is open. The current view is displayed at the top with status Draft. The Preview button appears in the upper-right corner of the panel, next to the Activate button. The user has to click the Preview button.](./media/wu-control-management-hide-preview.png)

9. Click **Activate** when you’re satisfied with the result.

    ![The CompuTec WebUp Manager side panel is open. The current view is displayed at the top with status Draft. The Activate button appears in the upper-right corner of the panel, next to the Preview button. The user has to click the Activate button.](./media/wu-control-management-hide-activate2.png)

10. Done! The control is hidden.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Hide Controls](https://www.youtube.com/watch?v=HBFxPcV0ris&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=2)

### Move a control to a different section

If you want to move a control to a different section, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Select Control button appears in the upper-right area of the panel, next to the view information and status indicator.](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to move on the **SAP Business One Web Client** screen. In our example, we want to move the **Contact Person** field higher, to directly under the **Customer** field.

    ![The system is in Select Mode. In the main Sales Order screen, the Contact Person field is highlighted. The highlighted area indicates the selected target control.](./media/wu-functions-select-control-click.png)

6. In **Computec WebUp Manager** panel on the right, find the **Position** section, and click **the arrow** to turn on new location selection for the control.

    ![The selected field is highlighted. The highlighted area indicates the selected target control. Now the user has to click an arrow to choose a new position for the selected control. the arrow is on the right, in the CompuTec WebUp manager side panel.](./media/wu-functions-select-control-position.png)

7. Click the section where you want to move the control.

    ![CompuTec WebUp Manager is in the select mode. The user has to click on a chosen section on the left to choose a new location for the selected control.](./media/wu-functions-select-control-new-location.png)

8. Click **Save** to continue.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Save and Cancel buttons are located at the bottom-right of the panel. The user has to click the Save button used to apply the configuration changes.](./media\wu-functions-select-control-reposition-save2.png)

9. Click **Preview** to review your changes, then click **Activate** when you’re satisfied with the result.

    ![The CompuTec WebUp Manager side panel is open. The current view is displayed at the top with status Draft. The Activate button appears in the upper-right corner of the panel, next to the Preview button. The user has to click the Activate button.](./media/wu-functions-select-control-activate.png)

10. Done! You've successfully moved the control.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Move Controls](https://www.youtube.com/watch?v=bUEkcdizCLY&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=3)

### Make a field mandatory

If you want to make a field mandatory, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Select Control button appears in the upper-right area of the panel, next to the view information and status indicator.](./media/wu-functions-select-control.png)

5. On the left panel, click the **Control** you want to make mandatory on the **SAP Business One Web Client** screen. In our example, we want to make the **Currency** field mandatory.

    ![The system is in Select Mode. In the main Sales Order screen, the Currency field is highlighted. The highlighted area indicates the selected target control.](./media/control-mandatory-choose-control.png)

6. In the **Control Details** tab of the **CompuTec WebUp Manager** side panel, navigate to **Mandatory** section, and turn on **the toggle**.

    ![the Currency field is selected. on the right, we can see a computec webup manager side panel where we can find Mandatory section. the user has to turn on the toggle next to the mandatory label to make the selected coontrol mandatory.](./media/control-mandatory-toggle.png)

7. Click **Save** to continue.

    ![The Control Details tab is active in the CompuTec WebUp Manager side panel. The Save and Cancel buttons are located at the bottom-right of the panel. The user has to click the Save button used to apply the configuration changes.](./media\control-mandatory-save.png)

8. Click **Preview** to review your changes, then click **Activate** when you’re satisfied with the result.

    ![The CompuTec WebUp Manager side panel is open. The current view is displayed at the top with status Draft. The Activate button appears in the upper-right corner of the panel, next to the Preview button. The user has to click the Activate button.](./media/control-mandatory-activate.png)

9. Done! You've successfully made the control mandatory.

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - Controls - Other Configurations](https://www.youtube.com/watch?v=MQk_z-cr-v8&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=4)
