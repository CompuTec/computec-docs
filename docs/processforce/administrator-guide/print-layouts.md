---
sidebar_position: 8
---

# Print Layouts

This page lists the available **CompuTec ProcessForce print layout files**, including versions for both Microsoft SQL Server and SAP HANA environments. These layouts are provided in English and are updated periodically with bug fixes, layout improvements and additional support for SAP HANA.

---

## Scope

- Includes standard print layouts used in CompuTec ProcessForce modules.
- Contains layout files with header, detail, and properties sections for documents like Routing and Bill of Materials.
- Provides both SQL Server (`.rpt`) and SAP HANA-compatible versions (`.zip` or `.rpt` with procedures).

## Update and Availability Notes

> ℹ️ **Ongoing Updates**  
Updated and corrected print layouts are published on this page until they are fully integrated into the ProcessForce installer.

> ℹ️ **Issue Reporting**  
To report issues with any listed report, use the [CompuTec Support Portal](http://support.computec.pl/) (select the *Support ProcessForce* project, and the *Print Layouts or Reports* component).

> ⚠️ **Custom Modifications**  
If you plan to customize any layout or report, ensure that you **create a backup**. Default layout files (with "ProcessForce" in their name) may be **overwritten during updates**, potentially resulting in the loss of changes.

## Compatibility

> ⚠️ **For SAP HANA Users**  
To use these layouts in SAP Business One for SAP HANA, you must **execute the included SQL procedures** on the appropriate HANA database.

---

## Available Layouts

### Routing

| Property | Details |
|----------|---------|
| **Name** | Routing |
| **Type** | Print Layout |
| **File Version** | 2.43 |
| **Content** | - Header details<br/> - Operation details<br/> - Operation Properties (table)<br/> - Operation Resource details<br/> - Operation Resource Times (table)<br/> - Operation Resource Properties (table) |
| **Example Preview** | [View PDF](https://download.computec.one/media/processforce/CR_Routing_Layout_Preview_EN_2.43.pdf) |
| **Remarks** | Values such as *Value / To Value*, *Queue Time*, *Setup Time*, *Run Time*, and *Stock Time* should be kept short for proper report display. |
| **Download (SQL Server)** | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SQL_Server_EN_2.43.rpt) |
| **Download (SAP HANA)** | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SAP_HANA_EN_2.43.zip) |

---

### Bill of Materials

| Property | Details |
|----------|---------|
| **Name** | Bill of Materials |
| **Type** | Print Layout |
| **File Version** | 2.13 |
| **Content** | - Header and Revision details<br/> - Items, Co-products, Scraps, and WIP Items (tables)<br/> - Routing details<br/> - Routing Operation and Resource details<br/> - Related Properties and Times (tables) |
| **Preview** | Not available |
| **Remarks** | Parameters included to toggle: <br/> - Displaying inactive Routings<br/> - Displaying non-default Resources |
| **Download (SQL Server)** | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SQL_Server_EN_2.13.rpt) |
| **Download (SAP HANA)** | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SAP_HANA_EN_2.13.rpt) |

---

:::warning Reports in version for SAP HANA
    To run reports in SAP Business One for SAP HANA, the included SQL procedures must be executed on the appropriate database.
:::

---
