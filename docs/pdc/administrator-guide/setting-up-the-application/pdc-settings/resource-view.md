---
sidebar_position: 2
---

# Resources View

The purpose of this function is to filter tasks by multiple Resources.

---

## Requirements

The option requires the use of AppEngine's MO360 plugin. Click [here](/docs/appengine/plugins-user-guide/manufacturing-order-360/plugin-installation-and-configuration) for more information about AppEngine and AppEngine plugin installation.

Minimal related versions:

- ProcessForce: 9.30 PL14 R10 or 10.0 RL14,
- AppEngine: 2.10.3.1, 2.93.3.1 or 2.10.5.1, 2.93.5.1,
- MO360 - latest.

## Usage

Go to AppEngine, MO360 to define a view with multiple Resources:

![Main View](./media/resource-view/mo360-main-view.webp)

Click Add View:

![MO360 Add View](./media/resource-view/mo360-add-view.webp)

Define the view details:

![View Details](./media/resource-view/view-details.webp)

Now the view is available in the main MO360 view:

![New View](./media/resource-view/new-view.webp)

Open the view and choose the All option for the Resources:

![All Resources](./media/resource-view/all-resources.webp)

After defining this view, you can assign it in [PDC Settings](./overview.md).
In this example, in CompuTec PDC, you can see only tasks for the following Resources: Rsc01, Rsc02, and Rsc03.
