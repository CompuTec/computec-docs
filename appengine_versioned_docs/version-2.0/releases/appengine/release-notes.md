---
sidebar_position: 1
toc_max_heading_level: 2
---

# Release Notes

:::info
The latest installer is available to download fom [here](/docs/appengine/releases/appengine/download)
:::

## CompuTec AppEngine 2.10.19.2

**Release Date - 01 April 2025**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | CompuTec AppEngine Core | Modification to Plugin Upgrade Mechanism |

## CompuTec AppEngine 2.10.18.103

**Release Date - 04 October 2024**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Bug |  Analytics | Fixed issue with settings permissions for variants. | - |
| Bug | CompuTec AppEngine Analytics | Fixed for import. | - |
| Bug | CompuTec AppEngine Analytics | Fixed empty list of aggregation functions for chars. | - |
| Bug | CompuTec AppEngine Background Processing | Fix for long start of AppEngine Service where there are lots of jobs to process. | - |

---

## CompuTec AppEngine 2.10.17.4 HF1

**Release Date - 26 June 2024**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Bug | CompuTec AppEngine Launchpad | Fixed issue with choose language that prevented login to launchpad and administration panel. | - |

---

## CompuTec AppEngine 2.10.16.6 HF1

**Release Date - 30 January 2024**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Bug | Plugins | For backward compatibility with previous CompuTec AppEngine versions permissions for users are not required to be set up until next plugin setup. | - |

---

## CompuTec AppEngine 2.10.16.4

**Release Date - 24 January 2024**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | SAP UI5 | UI5 version is now upgraded to 1.120.2 | - |
| Improvement | Plugins | Plugins with setup are now added to SAP Business One Additional Authorizations. To enable them for user permission need to be set either to Read-Only or Full Authorization. | - |
| Bug | Plugins | Fixed issue with plugin installation "Uploaded package needs to be a zip file". | SPROC-15050 |
| Bug | CompuTec AppEngine Configuration | Fixed issue with log level. Now log level changes back to "Trace" after CompuTec AppEngine restart. | - |
| Bug | CompuTec AppEngine Core | Log related to given job should now be visible under log tab on job definition page. | - |
| Bug | CompuTec AppEngine Configuration | It is now possible to set Database Type in case of Cloud environment. | - |

---

## CompuTec AppEngine 2.10.15.2

**Release Date - 17 October 2023**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | CompuTec AppEngine Analytics | The Select All option is added to all the collection lists. | - |
| Bug | CompuTec AppEngine Configuration | It is necessary to re-enter database credentials while logging in to CompuTec AppEngine from SAP Business One. | - |
| Bug | CompuTec AppEngine Core, MRP | An error occurs upon attempts to run a scenario in MRP 2.5 and then open Relationship Map in some cases. | - |
| Bug | SAP UI5 | When a plugin is launched through SAP UI, each time it asks for credentials. | - |

---

## CompuTec AppEngine 2.10.14.3

**Release Date - 27 September 2023**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | CompuTec AppEngine Analytics | Graph: sorting by the x or y axis is now possible. | - |
| Improvement | CompuTec AppEngine PWA | The icon of the application has been updated. | - |
| Improvement | CompuTec AppEngine UAA | (PWA) It is not possible to go to the administration panel. We redirect to login to Launchpad. | - |
| Improvement | CompuTec AppEngine Architecture | An error occurs upon attempts to generate a System configuration File in specific cases. <br/>Error message: <br/>Exception has been thrown by the target of an invocation. | - |

---

## CompuTec AppEngine 2.10.13.1

**Release Date - 10 August 2023**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | CompuTec AppEngine Analytics | New option: [Analytical Page Source Creator](/docs/appengine/appengine-users-guide/analytical-page/source-creator/). | - |
| Improvement | CompuTec AppEngine Analytics | The String and Number filters now have buttons to change operators like equal, not equal, greater than, and more complicated operators like: between, in (you can choose more than one value), not in. | - |
| Improvement | Launchpad | Possibility to log out any session from the Administration Panel level [the Active Connections tab](../../administrators-guide/configuration-and-administration/overview.md#active-connections). | - |
| Bug | Launchpad | The SAP Business One User's password change is not reflected in CompuTec AppEngine. | SPROC-12383 |

---

## CompuTec AppEngine 2.10.12.1

**Release Date - 26 June 2023**

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | CompuTec AppEngine Analytics | A new option in the table settings: auto-expand rows in a table tree (grouping). |
| Improvement | CompuTec AppEngine Analytics | A new table setting: auto-refresh - it is possible to set a period for refreshing Tables, Table Trees, and Charts. Also possible to add a refresh timer. |
| Bug | CompuTec AppEngine Administration Panel | Trace: the Sort button does not work. |
| Bug |  Analytics | A change of the name template of file when exporting variant to Excel: "name of variant_20CompuTec AppEngine23-01-01T12:00:00". |
| Bug | CompuTec AppEngine Analytics | Reports are not visible for users who previously had no assigned Groups. |
| Bug | CompuTec AppEngine Configuration | Job configuration: a change of Cron Expression is not always saved after an CompuTec AppEngine restart. |

---

## CompuTec AppEngine 2.10.11.5

**Release Date - 24 May 2023**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | Analytics | Analytical Page: a button for displaying information on data selected on the chart and a button for exporting the selection to an Excel file added. | - |
| Improvement | Architecture | Logging into Launchpad now takes less time - especially in the case of configuration with plenty of databases. | - |
| Improvement | Configuration | More information regarding installation steps were added to the Trace log. | SPROC-14330 |
| Bug | Administration Panel | Background Processing does not refresh when returning to the previous menu from it. | - |
| Bug | Administration Panel | No action and information upon attempts to uninstall a plugin that is required for another plugin. Now, there is a system message about it. | - |
| Bug | Administration Panel | When installing the plugin from a remote resource, the installation stops at the loading screen. | - |
| Bug | Analytics | Analytical Page: Date fields with a NULL value in the database are displayed as 30-12-1899. | - |
| Bug | Analytics | Analytical Page: Total rows added. | - |
| Bug | Analytics | Filtering fields: after deleting the number input the value is set to 0 (instead of leaving a blank field). | - |
| Bug | Configuration | Login to Launchpad with an incorrect username does not return an error. | - |

---

## CompuTec AppEngine 2.10.10.1

**Release Date - 19 April 2023**

:::danger
After upgrading to this version, user credentials for Background Processing need to be re-entered (SLD Server → Servers → Companies).
:::

| Issue Type | Component/s | Release Note |
| - | - | - |
| Improvement | Plugins | A validation of a minimal CompuTec AppEngine version during plugin installation. |
| Bug | Administration Panel | No action and information upon attempts to uninstall a plugin that is required for another plugin. Now, there is a system message about it. |
| Bug | Administration Panel | Cannot enter credentials for SAP User in the Background Jobs configuration (Companies tab). |
| Bug | Architecture | The LineNum and IsImage parameters are now available as optional in the Attachment Controller. |
| Bug | Background Processing | Fixed the issue that caused the background processing configuration password to be kept in the open text. Important note: After upgrading to this version of AE, user credentials for background processing need to be re-entered (SLD Server -> Servers -> Companies). |
| Bug | Core | A BT operator added to computec.appengine.ui.model.filter.Filter.Filter getStringFilterExpression. |
| Bug | Plugins | When an ID of a plugin contains ".", an error occurs. Error message: Index and length must refer to a location within the string. |

---

## CompuTec AppEngine 2.10.9.8

**Release Date - 1 February 2023**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | Architecture | CompuTec AppEngine now allows for managing variants. Code below [1] | - |
| Improvement | Architecture | Companies that require an update are now marked with Button Update Required. This is important, especially after upgrading CompuTec AppEngine. <br/><br/>This structure allows managing custom VariantQuerySources. Code below [2]| - |
| Improvement | Configuration | It is now possible to define preinstalled Variants and their Sources inside the plugin. | - |
| Improvement | Plugins | The User Authorizations for build-in standard analytical variants are now added during the plugin database update. | - |
| Bug | Configuration | The Choose company option is shown while logging in to CompuTec AppEngine from SAP Business One. | - |
| Bug | OData | String values in filter parameters are parsed as dates in some cases. | - |
| Bug | Plugins| An error occurs upon the first installation of a plugin in specific cases. | - |

<details>
<summary>Click here to view Code [1]</summary>
<div>
```text
### add new variant
POST http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/Variant
Content-Type: application/json

{
    "U_PluginId": "CompuTec.AppEngine.MO360",
    "U_ViewId": "MORTransactionsReportNew",
    "U_Name": "Sandard",
    "U_SourceGuid": "cba8c775-34ce-4a42-b8d6-f6eccdb47ff5",
    "U_Default": "Yes",
    "U_IsPublic": "Yes",
    "U_UserFilter": "string",
    "U_Definition": {
        "columns": [
            {
                "ColId": "DocNum",
                "Visible": true,
                "Name": "documentNumber",
                "Order": 0
            },
            {
                "ColId": "DocDate",
                "Visible": true,
                "Name": "documentDate",
                "Order": 1
            },
            {
                "ColId": "Quantity",
                "Visible": true,
                "Name": "quantity",
                "Order": 2
            }
        ]
    }
}

### get variant list for plugin and view id

GET http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/Variants/CompuTec.AppEngine.MO360/MORTransactionsReportNew

### get one variant

GET http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/Variant/79d13aab-3d38-4c02-a85e-12fc6c5fe61c

### update

PUT http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/Variant/79d13aab-3d38-4c02-a85e-12fc6c5fe61c
Content-Type: application/json

{
    "U_PluginId": "CompuTec.AppEngine.MO360",
    "U_ViewId": "MORTransactionsReportNew",
    "U_Name": "Standard 3",
    "U_Default": "Yes",
    "U_IsPublic": "Yes",
    "U_UserFilter": "string",
    "U_Definition": {
        "columns": [
            {
                "ColId": "DocNum",
                "Visible": true,
                "Name": "documentNumber",
                "Order": 0
            },
            {
                "ColId": "DocDate",
                "Visible": true,
                "Name": "documentDate",
                "Order": 1
            },
            {
                "ColId": "Quantity",
                "Visible": true,
                "Name": "quantity",
                "Order": 2
            }
        ]
    }
}

### DELETE http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/Variant/79d13aab-3d38-4c02-a85e-12fc6c5fe61c

    ```
</div>
</details>

<details>
<summary>Click here to view Code [2]</summary>
<div>
```text
POST http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantSource
Content-Type: application/json

{
    "U_PluginId": "CompuTec.AppEngine.MO360",
    "U_Name": "MORTransationcsReport",
    "U_Type": "View",
    "U_Definition": {
        "Fields": [
            {
                "fieldId": "DocNum",
                "displayName": "documentNumber",
                "type": "number",
                "generateDatesParts": false,
                "aggregable": false
            },
            {
                "fieldId": "Quantity",
                "displayName": "quantity",
                "type": "number",
                "generateDatesParts": false,
                "aggregable": true
            }
        ]
    }
}

### get variants sources list for plugin

GET http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantsSources/CompuTec.AppEngine.MO360

### Get all variant sources

GET http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantsSources

### get specific variant source

GET http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantSource/375bb92c-062c-417a-9273-f826e5762ea0

### update variant source

PUT http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantSource/375bb92c-062c-417a-9273-f826e5762ea0
Content-Type: application/json

{
    "U_PluginId": "CompuTec.AppEngine.MO360",
    "U_Name": "MORTransationcsReport",
    "U_Type": "View",
    "U_Definition": {
        "Fields": [
            {
                "fieldId": "DocNum",
                "displayName": "documentNumber",
                "type": "number",
                "generateDatesParts": false,
                "aggregable": false
            },
            {
                "fieldId": "Quantity",
                "displayName": "quantity",
                "type": "number",
                "generateDatesParts": false,
                "aggregable": true
            }
        ]
    }
}

### DELETE http://{{AE_Address}}:{{AE_Port}}/api/Launchpad/VariantSource/375bb92c-062c-417a-9273-f826e5762ea0

    ```
</div>
</details>
---

## CompuTec AppEngine 2.10.8.2

**Release Date - 19 September 2022**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | Configuration | CompuTec License Server address is now validated in Administration Panel, SLD Servers list and when adding an SLD Server. | - |
| Improvement | Configuration | It is now possible to download a file with CompuTec AppEngine and plugin installation information (e.g. installed versions) for improving the product support procedure. | - |
| Improvement | Configuration | Now job can react to more than one event. | - |
| Improvement | Plugins | A new optional setting: 'hidden'. Setting it to true hides the related plugin in CompuTec AppEngine Launchpad. | - |
| Improvement | Plugins | Layout improvements (e.g. removing unnecessary scrollbars in some of the forms). | - |
| Improvement | Plugins | UI5 Horizon theme of SAP Fiori applied (you can find out more on the [SAP website](https://community.sap.com/t5/technology-blogs-by-sap/horizon-theme-of-sap-fiori-update-on-productive-usage-for-web-applications/ba-p/13531459)). | - |
| Bug | Administration Panel | No scroll on Administration Panel, Plugins view. | - |
| Bug | Administration Panel | There are two refresh buttons on the Plugin Details header. | - |
| Bug | Administration Panel | Trace: default ascending sorting of the entries. Also, it is required to double-click to sort the list. | - |
| Bug | Administration Panel, Launchpad | Not all text user interface elements are translated in the Polish language version. | - |
| Bug | Background Processing | A lock of a job that cannot connect three times to a specific user (due to problems with the user, e.g. password change, a license being unassigned), to avoid continuous attempts to connect. | - |
| Bug | Configuration | Administration Panel, SLD Servers: SLD Addresses disappear after clicking the Discover button when a server is not working. | - |
| Bug | Configuration | Errors occur after removing a company with plugins that have dependent plugins assigned. | - |
| Bug | OData | The following OData expressions do not work: $top, $skip, $expand. | SPROC-13658 |
| Bug | ProcessForce Plugin | It is impossible to upgrade plugins by clicking the Install plugin button. | SPROC-13050 |

---

## CompuTec AppEngine 2.10.7.5, 2.93.7.5

**Release Date - 13 June 2022**

| Issue Type | Component/s | Release Note | Related issue/s |
| - | - | - | - |
| Improvement | Architecture | The CompuTec AppEngine plugins are now available for SAP Business One Web Client. | - |
| Improvement | Architecture | A minimal required CompuTec AppEngine version is now checked (if specified inside plugin manifest). <br/><br/>Example manifest entry: <br/><blockquote>AEVersion:  minVersion: 2.0.7.0.</blockquote> | - |
| Improvement | Configuration | Plugins, Companies: now a related database name is displayed in the table, along with a company name. | - |
| Bug | Architecture | Restarting CompuTec AppEngine from the Administrator panel does not always work (the CompuTec AppEngine service cannot be stopped in specific cases).| - |
| Bug | Background Processing | Batch Background Processes (AdditionalBatchDetailsCreatorEB, RestoreAditionalBatchDetails) cannot be activated. <br/><br/>Error message: Hours: <br/><blockquote>Value must be a number between 1 and 23 (all inclusive).</blockquote> | SPROC-13253 |
| Bug | Configuration | Unassigned plugins are still available in Launchpad in some cases. | - |
| Bug | Configuration | Upon deleting a database in configuration (Administration Panel) related dummy entries are not deleted from the assigned plugins in some cases. | - |
| Bug | EventBus | Trace: messages are incomplete in specific cases (part of them replaced with ellipsis). | - |
| Bug | Plugins | Turning off a plugin for a company does not work: <br/><li>Related menu entries are present in the SAP Business One menu, even though a plugin was not activated for a company. Clicking these options leads to an empty form.</li> <br/><li>A plugin that was turned on and then turned off is still available for a company after the CompuTec AppEngine restart.</li> | - |
| Bug | SAPUI | Filtering in the Select form is case sensitive. | - |
