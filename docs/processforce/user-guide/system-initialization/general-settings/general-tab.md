---
sidebar_position: 2
---

# General tab

The **General tab** provides configuration options that control core behaviors in production and resource-related processes within **SAP Business One** enhanced by **CompuTec ProcessForce**. These settings define defaults for visibility, automation, scheduling behavior, and data display preferences - impacting how production and resource information is managed and visualized.

To access General tab, navigate to:

:::info Path
Administration → System Initialization → General Settings → ProcessForce tab → General tab
:::

![General Tab](./media/general-tab/general-settings-general-tab.webp)

---

## Key Settings

1. **SAP Standard Modules**

    This section includes options to enable or disable default SAP Business One features that may overlap with CompuTec ProcessForce capabilities:

    - **Enable standard functionality of SAP Business One's Production menu**: Activates the native SAP Business One Production menu, allowing users to access SAP’s built-in production functionalities. This may be necessary for scenarios where hybrid use of SAP B1 and ProcessForce production is needed.
    - **Enable the standard functionality of the Resources menu**: Allows access to the default SAP Resources functionality. This is relevant if you’re managing machine or labor resources directly through SAP’s standard definitions and want them visible even when using ProcessForce.

2. **SAP Sales Order Controls**

    This section configures how Sales Orders interact with ProcessForce-specific functionalities, particularly Manufacturing Order Requests (MORs):

    - **Hide ProcessForce related controls on the Sales Order form**: When enabled, this hides all ProcessForce-specific fields and controls from the standard Sales Order form, offering a cleaner interface for users who do not need those options.

        ![ProcessForce Fields](./media/general-tab/sales-order-processforce-fields.webp)
    - **Disable update of MOR references on Sales Order lines**: Prevents manual modification of the MOR linkage once it has been created, ensuring the integrity of the manufacturing planning process once a Sales Order is linked to a Manufacturing Order Request.
    - **Forbid changing Sales Order line data if a Manufacturing Order is already assigned**: Ensures that no modifications are made to Sales Order lines that are already tied to a Manufacturing Order. This safeguards against accidental data inconsistency between Sales and Production processes.

---
