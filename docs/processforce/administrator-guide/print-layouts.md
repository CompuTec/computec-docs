---
sidebar_position: 8
---

# Print Layouts

This section provides access to corrected ProcessForce print layout files.

---

Apart from bug fixes and visual adjustment of the files, versions destined for SAP Business One HANA have been added too.

:::info
    Subsequent print layout files and updates of the current ones will be published here until they are integrated into the ProcessForce installer.
:::

:::info
    If you identify any issues with the reports listed below, please report them via the [http://support.computec.pl](http://support.computec.pl/) portal (Support ProcessForce project) using the Print Layouts or Reports component.
:::

:::danger
    If you plan to modify any layout or report file, make a backup copy. Default files (those with ProcessForce in their names) may be overwritten in future updates, leading to loss of custom changes.
:::

All reports are in the English version.

## Routing

| Name | Type | File Version | Content | Example | Remarks | Version for Microsoft SQL Server | Version for SAP HANA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Routing | Print Layout | 2.43 | Routing <li>header details</li> <li>Operation details</li> <li>Operation Properties (table)</li> <li>Operation Resource details</li> <li>Operation Resource times (table)</li> <li>Operation Resource Properties (table)</li> | [Preview](https://download.computec.one/media/processforce/CR_Routing_Layout_Preview_EN_2.43.pdf) | Values: <li>*Value, To Value* (Operations Properties table)</li>, <li>*Queue Time, Setup Time, Run Time, and Stock* Time (Resource Times table)</li> <br/>must have a limited length for displaying them correctly on the report. | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SQL_Server_EN_2.43.rpt) | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SAP_HANA_EN_2.43.zip) |
| Bill of Materials | Print Layout | 2.13 | Bill of Materials: <li>header details</li> <li>Revision details</li> <li>Items (table)</li> <li>Coproducts (table)</li> <li>Scraps (table)</li> <li>WIP Items (table)</li> <li>Routing details</li> <li>Routing Operation details</li> <li>Routing Operation Properties (table)</li> <li>Routing Operation Resource details</li> <li>Routing Operation Resource times (table)</li> <li>Routing Operation Resource Properties (table)</li> | - | <li>Displaying / not displaying inactive Routings (parameter) </li> <li>Displaying / not displaying not default Resources (parameter)</li> | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SQL_Server_EN_2.13.rpt) | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SAP_HANA_EN_2.13.rpt)|

:::warning Reports in version for SAP HANA
    To run reports in SAP Business One for SAP HANA, the included SQL procedures must be executed on the appropriate database.
:::
