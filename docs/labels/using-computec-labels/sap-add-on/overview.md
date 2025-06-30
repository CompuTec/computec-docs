---
sidebar_position: 1
---

# Overview

This guide explains how to configure and use label printing in the SAP Business One add-on provided by CompuTec. It includes automatic and manual printing, configuration requirements, and printer assignment.

---

## Guide: Label Printing Setup

Label printing in the SAP add-on requires proper configuration of object types and event triggers. For full setup instructions, refer to:

- [SAP Add-on Setup](../../setup/computec-labels-sap-addon.md)
- [Company Installation and Configuration](../../setup/configuration/company-installation-and-configuration.md)

Only objects explicitly marked for printing will trigger automatic or manual print actions.

---

## Reference: Event Trigger Behavior

| Configuration in `CT_LP_ETRG` Table | Column | Behavior                                                                 |
|------------------------------------|--------|--------------------------------------------------------------------------|
| Object marked as `'Add'`           | SAP    | Automatically prints on *Add* action (if user has access)               |
| Object marked as `'OnChange'`      | SAP    | Automatically prints on *Add/Update* actions (if user has access)       |
| Any object                         | N/A    | Can be printed manually via SAP add-on (regardless of trigger setting) |

---

## How-to: Printing Labels

### Manual Printing from SAP Add-on

To manually print a document, follow these steps:

1. Open the document (ensure the object type has been defined for printing).
2. Navigate to:
    :::info Path
     File → Print Labels
    :::

        ![SAP Add-on](./media/sap-add-on/ct-labels-print-labels.webp)

3. A new window will appear. Select the desired printer and click **Print**.

    ![SAP Add-on](./media/sap-add-on/ct-labels-select-printer.webp)

---

### Automatic Printing (Autonomic Printing)

To enable automatic printing when an object is added or updated:

- Ensure the object type is configured in the **CT_LP_ETRG** table.
- Assign default printers per user for seamless printing.

#### Steps to Set Default Printer

1. In SAP Business One, go to:
    :::info Path
   Administration → Setup → General → User Defaults
   :::

2. Under the **General** tab, choose the default printer.
3. Assign the **User Code** to match the corresponding code from the users_default page.

   ![User Defaults](./media/sap-add-on/ct-user-defaults.webp)

4. Verify that the **Employee Master Data** is correctly configured and matches the user.

   ![Employee Master Data](./media/sap-add-on/ct-labels-employee-master-data.webp)

---

## Explanation: How Event Triggers Control Printing

The `CT_LP_ETRG` table determines which objects initiate printing and under what conditions. It enables fine-grained control over:

- Automatic printing upon creation or update.
- Manual printing accessibility.
- User-based access control for printing actions.

If an object isn’t listed or configured in this table, it won't trigger automatic printing—even if it's manually accessible.

---
