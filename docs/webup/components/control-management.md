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

    ![alt text](media/editactivate1.png)

    :::note[info]
    Each control in SAP Business One Web Client has its **Global Unique Identifier (GUID)**. You can copy it and use it in the script during the **View Actions** creation to precisely reference a control in your SAP Business One interface.  
    To reference controls precisely when building actions, you can use the **Select Control** tool, the right-click **Inspect Element** or **Copy GUID** options.

    ![alt text](media/ctrl-mgnmt/webup-control-mgmt4.png)
    :::

- **Position**: Move or reorder controls within a section or between different sections

    ![alt text](media/ctrl-mgnmt/webup-control-mgmt1.png)

- **Basic Options**: Edit control details such as name, visibility, and position

    ![alt text](media/ctrl-mgnmt/webup-control-mgmt2.png)

- **Mode**: View and edit control properties using **Basic** or **Dynamic** options:
  - **Basic**: Allows you to quickly update to standard control attributes (label, visibility, mandatory settings). It's ideal for simple layout changes that do not require data binding.
  - **Dynamic**: In this option, the control's value reacts dynamically to changes in a data source (for example, Sales Quotation Total). It is useful for dynamic layouts that are adjusted based on a condition: business logic or user input.

    ![alt text](media/ctrl-mgnmt/webup-control-mgmt3.png)

    :::note[info]

    Watch our videos to see how to use the **Dynamic** mode:  

    ▶ **Watch**: [CompuTec WebUp - Dynamic Control Configuration](https://www.youtube.com/watch?v=ugpA8rHT2P8)  
    ▶ **Watch**: [CompuTec WebUp - Highlighting Fields with Colour](https://www.youtube.com/watch?v=ufN3qK_F1aY)
    :::

## Control management use cases

### Add a new control

If you want to add a new control, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen where you want to add a control. In our example, it's **Sales Order 4**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. Click **+ Add New Control**.

    ![alt text](media/add-control/add-a-control1.png)

5. Choose **Control Type** from the list.

    ![alt text](media/add-control/add-a-control2.png)

6. In **Target Control** field, choose the position from the list, or use the **arrow icon** to do it manually.

    ![alt text](media/add-control/add-a-control3.png)

7. In **SAP Business One Web Cient**, click the place where you want to add the control.

8. In **CompuTec WebUp Manager** side panel, choose the **Relative Position** of the control. In our example, we want to add our control ``After`` the **Accounting** section.

    ![alt text](media/add-control/add-a-control4.png)

9. In **Basic Options**, define how the control should look and behave.

    ![alt text](media/add-control/add-a-control5.png)

    :::note[info]
    **CompuTec WebUp Manager** includes a **Help Mode** that provides quick access to SAP Business One documentation.

    If you want to know more about each control type or configuration option, turn on **Help Mode** by clicking the **question mark icon** in **CompuTec WebUp Manager**.

    ![alt text](media/help-icon1a.png)

    When **Help Mode** is active, additional **? icons** appear next to supported **controls**, **properties**, and **SAP Business One objects**. Click any of these icons to open the related SAP documentation and learn more about the selected element.

    ![alt text](media/help-icon2d.png)

    This feature helps you quickly find information about SAP Business One controls and configuration options without leaving the current screen.

    [▶ Watch: CompuTec WebUp Manager Help Mode](https://www.youtube.com/watch?v=DBv20ifpcCY)

    :::

10. Click **Add & Preview**.

    ![alt text](media/add-control/add-a-control7.png)

11. If you are happy with the results, **Activate** the view.

    ![alt text](media/add-control/add-a-control6.png)

12. Done! You've successfully added a control.

#### Video walkthrough

▶ **Watch**: [CompuTec WebUp - How to Add Controls](https://www.youtube.com/watch?v=1Veo7yo7pFU)

### Hide an unused control

If you want to hide an unused control, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![alt text](media/hide-control/hide-a-control1.png)

5. On the left panel, click the **Control** you want to hide on the **SAP Business One Web Client** screen. In our example, we want to hide the **Additional Information** section.

    ![alt text](media/hide-control/hide-a-control2.png)

6. In **CompuTec WebUp Manager** side panel on the right, find **Visible** option, and click **the toggle** to turn it off.

    ![alt text](media/hide-control/hide-a-control3.png)

7. Click **Save & Preview**.

    ![alt text](media/hide-control/hide-a-control4.png)

8. Click **Activate** when you are satisfied with the result.

    ![alt text](media/hide-control/hide-a-control5.png)

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Hide Controls](https://www.youtube.com/watch?v=HBFxPcV0ris&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=2)

### Move a control to a different section

If you want to move a control to a different section, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![alt text](media/move-ctrl/edit-a-control1.png)

5. On the left panel, click the **Control** you want to move on the **SAP Business One Web Client** screen. In our example, we want to move the **Contact Person** field higher, to directly under the **Customer** field.

    ![alt text](media/move-ctrl/edit-a-control2.png)

6. In **CompuTec WebUp Manager** panel on the right, find the **Position** section, and click **the arrow** to turn on new location selection for the control.

    ![alt text](media/move-ctrl/edit-a-control3.png)

7. Click the section where you want to move the control.

    ![alt text](media/move-ctrl/edit-a-control4.png)

8. Click **Save & Preview** to see your changes.

    ![alt text](media/move-ctrl/edit-a-control5.png)

9. Now it's time to **Activate** the view.

    ![alt text](media/move-ctrl/edit-a-control6.png)

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - How to Move Controls](https://www.youtube.com/watch?v=bUEkcdizCLY&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=3)

### Make a field mandatory

If you want to make a field mandatory, follow these steps:

1. Log in to **SAP Business One Web Client**.
2. Navigate to the screen you want to edit. In our example it's **Sales Order**.
3. Open **CompuTec WebUp Manager** by clicking on its browser extension icon.
4. In **Control Details** section of **CompuTec WebUp Manager** side panel, click **Select Control**.

    ![alt text](media/ctr-mandatory/make-ctrl-mandatory1.png)

5. On the left panel, click the **Control** you want to make mandatory on the **SAP Business One Web Client** screen. In our example, we want to make the **Currency** field mandatory.

    ![alt text](media/ctr-mandatory/make-ctrl-mandatory2.png)

6. In the **Control Details** tab of the **CompuTec WebUp Manager** side panel, navigate to **Mandatory** section, and turn on **the toggle**.

    ![alt text](media/ctr-mandatory/make-ctrl-mandatory3.png)

7. Click **Save & Preview** to continue.

    ![alt text](media/ctr-mandatory/make-ctrl-mandatory4.png)

8. Click **Activate**.

    ![alt text](media/ctr-mandatory/make-ctrl-mandatory5.png)

#### Video walkthrough

    ▶ **Watch**: [CompuTec WebUp - Controls - Other Configurations](https://www.youtube.com/watch?v=MQk_z-cr-v8&list=PLtT6kgaz5YneoXw5aRFA-SxXwzzB-u4vl&index=4)
