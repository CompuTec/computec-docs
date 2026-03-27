---
sidebar_position: 5
---

# Smart Actions

**Smart Actions** feature in **CompuTec WebUp** extends the concept of **View Actions** by making your logic reusable, flexible, and applicable across multiple areas of the **SAP Business One Web Client**.

While **View Actions** are tied to document-level triggers (such as ``On Add`` or ``On Update``), **Smart Actions** solve a key limitation of traditional **View Action** allowing you to attach logic directly to UI elements like buttons, fields, or controls.  

Here are main differences between Smart and View Actions:

- **View Actions**:  
  - Run only on document events (such as ``On Add`` or ``On Update``).  
  - Best suited for document validation and background automation.

- **Smart Actions**:  
  - Work on user interactions inside the UI.  
  - Best suited for interactive user experience and dynamic logic.

## Key functions of Smart Actions

With **Smart Actions** in **Computec WebUp**, you define an action once and reuse it in multiple places.

**Smart Actions** can be used in many scenarios. For example, they allow you to:

- Trigger logic when a user edits a field
- Run actions when a button is pressed
- Display confirmations or validations at the exact moment of interaction
- Improve user experience without modifying SAP core functionality

This results in faster processes, fewer user errors, and better control over how users interact with business data.

### Example

You can create a **Smart Action** that shows a confirmation message: ``Do you want to save changes for document number 234?``

Instead of hardcoding ``234``, you define a Parameter (e.g., ``DocNum``). This parameter can dynamically pull the current document number from SAP Business One.

## Add and activate Smart Action

To add and activate a new **Smart Action**, follow these steps:

### Step 1: Create a new Smart Action

To create a Smart Action, follow these steps:

1. Open **Computec WebUp Manager**.
2. Navigate to **Smart Actions** tab.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-1.png)

3. Click **Edit** to enable the edit mode.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-2.png)

4. Click **Add Smart Action**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-3.png)

5. Define the **Action** scope. You can choose from:

    - **Global** : Available across all views and all document types, for example, a reusable validation used in **Sales Orders**, **Purchase Orders**, and **Business Partners**.
    - **Object**: Available for all **CompuTec WebUp** views (e.g., **Sales Order**), across all its view versions.
    - **Local**: Available only in the current view version. Use **Local** for temporary or highly customized behavior.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-4.png)

6. Enter the action **Name**. Optionally, you can also change the action **Code**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-4a.png)

7. (Optional) Add a **Description** of the action.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-4b.png)

8. In **Action Parameters**, use the **plus (+)** icon to add new parameters.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-5.png)

    :::note[info]
    In this step, enter only the **Parameter Names**. You will assign their values later when attaching a **Smart Action** to an **Event** for the selected control.  

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-6.png)
    :::

9. Enter your **Script**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-7.png)

    :::note[info]
    You can **right-click inside the script** editor to insert ready-made snippets such as ``show confirmation``, ``create activity``, or ``get table row by key``.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-9.png)

    :::

10. Add parameters to your script using the following syntax: ``${action.Parameters.parameter_name}``. Replace ``parameter_name`` with the name of your parameter. In our example, we use ``DocNum`` as the **Parameter Name**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-911.png)

11. Click **Add Smart Action**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-9112.png)

12. Done! Now you can see your **Smart Action** on the list.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-91123.png)

### Step 2: Assign the Smart Action to a Control

To assign the **Smart Action** to a control, follow these steps:

1. Open your screen in **SAP Business One Web Client**. In our example, we want our Smart Action to trigger a confirmation window after making changes in ``Contact Person`` field of the **Sales Orders**, so we open **Sales Order 4** in SAP Business One Web Client.

2. In the **Computec WebUp Manager** side panel, click **Select Control**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as1.png)

3. In **SAP Business One Web Client**, click a field, button, or UI element to select it.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as2.png)

4. In **CompuTec WebUp Manager** side panel on the right, go to **Control Details** > **More Options** > **Events**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as-gotoevents.png)

5. Click on **Select Smart Action** field to open the list of available **Smart Actions**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as3.png)

6. Choose your **Smart Action** from the list.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as4.png)

7. In **Triggers**, choose when your action should run: ``No Trigger``, ``After``, or ``Before`` the event occurs.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as5.png)

8. Select the **Source** for your **Smart Action**:
    - **Static**: A fixed value you enter manually 
    - **Data Model**: A dynamic value from SAP Business One (e.g., ``DocNum``, ``CardCode``)

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as6.png)

9. Click the **collection icon** to see the list of available values.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as7.png)

10. Choose your value from the list and click **Confirm**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as8.png)

11. Click **Save & Preview**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as9.png)

12. In preview mode, test your action.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as911.png)

13. If you like the results, click **Activate**.

    ![a screen showing navigation to smart actions tab in computec webup manager](./media/smart-actions\smart-actions-as912.png)

14. Done! You’ve added and activated your Smart Action.

## Use cases

- Prevent accidental data changes:  
    Sales teams may unintentionally update pricing fields. You can trigger a confirmation popup when a user changes a price field (for example: ``Are you sure you want to change the price?``).

- Improve data quality:  
    Users may forget to complete required fields such as ``Project`` or ``Cost Center``. You can attach a Smart Action to the field’s ``On Change`` event to validate input immediately and display a warning if the field is empty.

- Trigger actions from buttons:  
    Companies may need a quick way to log activities directly from a document. You can create a custom button and attach a Smart Action to trigger an action on button press (for example, ``create an activity via Service Layer``).

- Show context-aware confirmations:  
    Users may need additional clarity before saving important documents. You can use parameters to display dynamic confirmation messages (for example: ``Do you want to save changes for document 10567?``).

## Best practices

- Use **Global** scope for reusable business logic
- Keep scripts modular and simple
- Use **Parameters** instead of hardcoding values
- Always test using **Preview** before activation

**Smart Actions** in **Computec WebUp** give you precise control over user interactions, helping you build more intuitive, reliable, and efficient processes in **SAP Business One Web Client**.
