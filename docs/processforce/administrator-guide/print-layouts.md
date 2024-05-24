---
sidebar_position: 8
---

# Print Layouts

In this page, you can find corrected ProcessForce print layout files.

---

Apart from bug fixes and visual adjustment of the files, versions destined for SAP Business One HANA have been added too.

:::info
    Subsequent print layout files and updates of the current ones will be posted in this page until they are incorporated into the ProcessForce installer.
:::

:::info
    If you notice that any report from the list below should be corrected, do not hesitate to create an issue in the [http://support.computec.pl](http://support.computec.pl/) portal (Support ProcessForce project) with the Print Layouts or Reports component.
:::

:::danger
    If you want to adjust any of the layout and report files, please make sure to make a copy of it. The default ones (with ProcessForce in their names) may be overwritten during future updates, and changes in them may be lost.
:::

All reports are in the English version.

## Routing

| Name | Type | File Version | Content | Example | Remarks | Version for Microsoft SQL Server | Version for SAP HANA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Routing | Print Layout | 2.43 | Routing <li>header details</li> <li>Operation details</li> <li>Operation Properties (table)</li> <li>Operation Resource details</li> <li>Operation Resource times (table)</li> <li>Operation Resource Properties (table)</li> | [Preview](https://download.computec.one/media/processforce/CR_Routing_Layout_Preview_EN_2.43.pdf) | Values: <li>*Value, To Value* (Operations Properties table)</li>, <li>*Queue Time, Setup Time, Run Time, and Stock* Time (Resource Times table)</li> <br/>must have a limited length for displaying them correctly on the report. | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SQL_Server_EN_2.43.rpt) | [Download](https://download.computec.one/media/processforce/CR_Routing_Layout_SAP_HANA_EN_2.43.zip) |
| Bill of Materials | Print Layout | 2.13 | Bill of Materials: <li>header details</li> <li>Revision details</li> <li>Items (table)</li> <li>Coproducts (table)</li> <li>Scraps (table)</li> <li>WIP Items (table)</li> <li>Routing details</li> <li>Routing Operation details</li> <li>Routing Operation Properties (table)</li> <li>Routing Operation Resource details</li> <li>Routing Operation Resource times (table)</li> <li>Routing Operation Resource Properties (table)</li> | - | <li>Displaying / not displaying inactive Routings (parameter) </li> <li>Displaying / not displaying not default Resources (parameter)</li> | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SQL_Server_EN_2.13.rpt) | [Download](https://download.computec.one/media/processforce/CR_Bill_of_Materials_Layout_SAP_HANA_EN_2.13.rpt)|

:::warning Reports in version for SAP HANA
    To run a report in SAP Business One, a version for SAP HANA, there is a need to execute the attached SQL procedure/s on the applicable database.
:::
