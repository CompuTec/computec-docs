---
sidebar_position: 1
---

# Overview

ProcessForce enhances Material Requirements Planning (MRP) in SAP Business One, leveraging its built-in features for seamless production planning and order management.

:::warning
    If you experience delays when opening the MRP Wizard with ProcessForce enabled, consider setting up Direct Data Access mode. This can improve response time, especially in systems with a large number of Item Master Data records.

    Click [here](../../administrator-guide/licensing/license-server/direct-access.md) to learn how to set up Direct Access mode for a specific database.
:::

---

## Introduction

ProcessForce integrates with the SAP Business One MRP Wizard and Order Recommendation forms, maintaining familiar workflows while adding advanced manufacturing functionality.

- The MRP Wizard runs as it would in SAP Business One.
- The Order Recommendation form enables the creation of ProcessForce Manufacturing Orders.
- Manufacturing Orders are scheduled using backward scheduling, ensuring production aligns with required due dates.

## Configuration

To see configuration details, visit the [Enable Synchronization](/docs/processforce/user-guide/system-initialization/general-settings/bom-mor#enable-synchronization) and [MRP-related configuration](/docs/processforce/user-guide/system-initialization/general-settings/mrp-tab/mrp-related-configuration/) within [General Settings](../../user-guide/system-initialization/general-settings/general-tab.md).

## Operation

- Run the MRP Wizard in the regular manner

  ![MRP Wizard](./media/overview/mrp-wizard.png)
- Save Recommendations at the end of the MRP run
- Select Order Recommendation from the context menu

  ![Order Recommendation](./media/overview/order-recommendation.png)
- Select which Production Order to create
- Press "Update" button

  ![Order Recommendation Update](./media/overview/order-recommendation-update.png)
- The system displays a confirmation message with the number of orders created.

  ![System Message](./media/overview/system-message.png)
- A report listing all documents created using the Order Recommendation option is displayed at the end of the document creation

  ![Created Recommendations](./media/overview/created-recommendations.png)
- Manufacturing Order is created:
  - its status is set to Scheduled
  - Scheduled Backwards from the Required Date
  
  ![Manufacturing Order](./media/overview/manufacturing-order.png)

---
