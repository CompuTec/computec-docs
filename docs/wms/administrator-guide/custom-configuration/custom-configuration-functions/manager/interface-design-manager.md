---
sidebar_position: 6
---

# Interface Design Manager

The Interface Design Manager allows administrators to visually configure the layout of workflow screens used in CompuTec WMS. Through this tool, you can design the structure, appearance, and behavior of each transaction screen, ensuring that the user interface is optimized for operational efficiency.

This manager provides the ability to merge or split containers, rename sections, assign functional areas and now, with the latest update, hide optional buttons and add custom icons for containers and transactions.

---

## Activating the Option

To create and assign templates, go to [Custom Configuration](../../../custom-configuration/overview.md), Manager tab, and check the Enable Workflow Designer Manager checkbox.

## Creating a Template

Clicking Load Designer leads to the Select Template form. Choose a template on the left side of the form and click Delete to delete it or Load to open it.

![Load Design Manager](./media/load-design-manager.webp)

In the new window on the left, there are available Templates; on the right, actions we can take:

- **New Template** – create a new Template from scratch
- **Copy template** – highlight a Template and click Copy template to create a copy
- **Load**– highlight a Template and click Load to start editing it
- **Delete** – highlight a Template and click Delete to remove it from the list.

## Editing

Clicking Load leads to Workflow Designer Manager, where it is possible to create a main menu template:

![Workflow Editing](./media/workflow-designer-manager-editing.png)

The form is divided into three panels:

- **The one on the left** is a mock-up of the application's main menu. Use the right-click context menu to add rows and columns. Doing so creates grids.
- **the center one** lists all of the transactions available from the application's main menu. Drag and drop it to the mock-up to fill a specific grid. You can drag and drop it back to the center panel to use it in another place.
  
    This panel also contains a Container element: it allows storing many transactions in one folder. Clicking a container on a main menu leads to another form with the container's content. It is possible to use container elements multiple times. It is also possible to create a multilevel menu using it. You can change a container's name using a context menu option.
- **the right one** contains general options: saving or canceling changes and saving and quitting the manager.

After adding some transactions to grids, it is possible to merge rows or columns. You can reach the option from a right-click context menu.

### Example

In the following example, we created a main menu template for users using Goods Issue and Stock Transfer transactions. We also use a container to group some of the informational options.

![Example](./media/example.webp)

### Default Template

Workflow Designer Manager comes with one predefined template. If Interface Design Manager is not used, this template will be used by default. You cannot load it for editing. It can be copied and then edit the copy.

## Assigning a Template to a User

A template must be assigned to a specific SAP Business One user to work on.

Click the drop-down list next to Enable Interface Design Manager to choose a user to whom a template will be assigned. This action requires logging in to a database to download a list of users. After this, select a required user from a drop-down list.

Click Set Template, choose a template assigned to a user, and click Save.

![Assigning Template](./media/assigning-template.png)

:::warning
    Restarting the CompuTec WMS Server is required to apply the changes to a user.
:::
