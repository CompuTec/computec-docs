---
sidebar_position: 8
---

# CompuTec AppEngine Authorizations

Starting with **CompuTec AppEngine 3.0**, all CompuTec AppEngine authorizations are available under the **CompuTec AppEngine** authorization node.

:::warning[important]
The authorization structure used in **CompuTec AppEngine 2.0** has been deprecated and is no longer used in **Computec AppEngine 3.0**.
:::

## Authorization structure in CompuTec AppEngine 3.0

In **CompuTec AppEngine 3.0**, the root authorization node is:

| Root Authorization Node ID | Root Authorization Node Name |
| --- | --- |
| `AppEngine` | CompuTec AppEngine |

All **CompuTec AppEngine 3.0** authorizations are located under this node.

The following authorization groups are available:

| Authorization Group Name | Authorization Group ID |
| --- | --- |
| Analytics | `AE_Analytics` |
| Plugins | `AE_Plugins` |
| Custom | `CT_AE_Custom` |

Additional permissions are created under these groups as needed. For example:

- **Analytics** permissions use the `CTAN_` prefix.
- **Plugin** permissions use the `CTPL_` prefix.

## Set the authorizations

If you want to set the authorizations, follow these steps:

1. Log in to **SAP Business One**.
2. In menu, go to **Administration** > **System Initialization** > **Authorizations**.

    ![SAP Business One Administration menu with Authorizations highlighted under System Initialization. The left navigation shows Modules, Drag & Relate, Look Up Menus, Administration, Choose/Create Company, Web Client, Exchange Rates and Indexes, System Initialization, Company Details, General Settings, Posting Periods, Authorizations, Document Numbering, and Series Synchronization Configuration. The wider screen displays dashboard charts including Top 5 Customers by Receivables Overdue, Top 5 Vendors by Payables Overdue, Net Sales Revenue, My Sales Orders Not Delivered, and My Open AP Invoices.](./media/authorizations/user-auth1.png)

3. Navigate to **General Authorizations**.

    ![SAP Business One General Authorizations screen with General Authorizations selected in the System Initialization menu. The Authorizations window shows user and group tabs, a list of users including AlertSvc, B1i, EDSUser, manager, Support, Worker, and Workflow, and authorization categories such as General, Customization Tools, Administration, Financials, Opportunities, Sales - A/R, Purchasing - A/P, Business Partners, Banking, Inventory, Resources, Production, and MRP.](./media/authorizations/user-auth2.png)

4. On the left, choose the **user** you want to grant the authorizations to, and then choose **CompuTec AppEngine** from the list.

    ![SAP Business One Authorizations window with the manager user selected and the CompuTec AppEngine authorization node highlighted in the authorization tree. The tree lists Service, Human Resources, Project Management, Reports, Analytics, Fiori-Style Cockpit Management, Service Layer SQL View, Service Layer SQL Query, Report Layout API, User-Defined Tables, User-Defined Objects, User Authorization, Process Force, and CompuTec AppEngine. Authorization and Effective Authorization columns show Full Authorization, and the lower pane contains authorization controls including Expand, Collapse, Full Authorization, Read Only, No Authorization, OK, Cancel, and Apply Auth. to Back End. The blue arrow draws attention to CompuTec AppEngine in the General Authorizations interface.](./media/authorizations/user-auth3.png)

5. Here you can choose the authorizations for each CompuTec AppEngine authorization group.

    ![SAP Business One Authorizations window showing the manager user and the CompuTec AppEngine authorization tree. The Analytics group is expanded and includes CT_AE_Custom with permissions for Source Creator and Variant Manager, CompuTec.ProcessForce.Plugin, WebUp, PPF, MO360, MRP, PDC, WMS.Plugin, BT360, PFI, and MI360; the Plugins group is collapsed. The Authorization and Effective Authorization columns show Full Authorization. The surrounding SAP Business One interface includes the Authorizations navigation menu and controls for Expand, Collapse, Full Authorization, Read Only, No Authorization, OK, Cancel, and Apply Auth. to Back End. The screen presents a clear administrative permissions-management interface.](media/authorizations/user-auth4.png)

## Deprecated authorization structure

In **CompuTec AppEngine 2.0**, the root authorization node was:

| Root Authorization Node ID | Root Authorization Node Name |
| --- | --- |
| `CT_AppEngine` | AppEngine |

Starting with **CompuTec AppEngine 3.0**:

- The legacy authorization structure is no longer created.
- Existing authorizations under the **AppEngine** node are deprecated.
- **CompuTec AppEngine 3.0** does not use permissions assigned under the `CT_AppEngine` node.

:::info[Note]

After upgrading to **CompuTec AppEngine 3.0**, administrators can remove the deprecated **AppEngine** authorization node (`CT_AppEngine`) from the **Additional Authorization Center** if it is no longer needed.

CompuTec AppEngine 3.0 does not use authorizations stored under this node. All active CompuTec AppEngine authorizations are available under the **CompuTec AppEngine** authorization node (`AppEngine`).
:::

## Important upgrade information

When reviewing existing authorizations, note that the term **AppEngine** is used differently in the two authorization structures:

| CopuTec AppEngine Version | Root Authorization Node ID | Root Authorization Node Name |
| --- | --- | --- |
| CompuTec AppEngine 2.0 (deprecated) | `CT_AppEngine` | AppEngine |
| CompuTec AppEngine 3.0 | `AppEngine` | CompuTec AppEngine |

This difference can be confusing when searching for authorization nodes or comparing configurations between versions.

If you are upgrading from **CompuTec AppEngine 2.0**, verify that user permissions are assigned under the **CompuTec AppEngine** authorization node used by **CompuTec AppEngine 3.0**.
