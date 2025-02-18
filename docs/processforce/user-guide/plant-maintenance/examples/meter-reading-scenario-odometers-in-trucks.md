---
sidebar_position: 3
---

# Meter Reading Scenario – Odometers in Trucks

Efficient fleet management is crucial for businesses reliant on trucks for logistics and transportation. Regular monitoring of odometer readings ensures accurate tracking of vehicle usage, enabling timely maintenance and effective scheduling. This document outlines a detailed procedure for preparing a Maintenance Order (MO) template to facilitate cyclic odometer readings in trucks, centralizing operations within a garage-based fleet management setup.

---

## Requirement

The goal of the user is to create a Maintenance Order (MO) template for conducting cyclic odometer readings in trucks. These trucks are stationed at a garage.

| | Steps | Actions | Obligatory | .mp4|
| --- | --- | --- | --- | --- |
| 1 | Creation of Maintainable Items (Garage - Trucks) | <p>Template Class/Category for Mis:</p> <p>Garage: Class = Buildings, Category = Logistic</p> <p>Truck: Class = Vehicles, Category = Trucks</p> <p>Parent MI defined before Child MI</p> <p>Parent: Garage (Type = Location),</p> <p>Child (Type = Asset): Truck 01</p> | Yes | [Step 01](https://youtu.be/fcH6puby7Us?si=IRcgqd-w24OCnzHb) |
| 2 | Creation of Item Master Data for Odometer | <p>If you want to use Physical Meter (meter linked to Effective Meter which count Total Usage for particular Item) it is obligatory to define Item Master Data managed by Serial Numbers for this Physical Meter</p> <p>Item Code = Odometer</p> <p>Manage Item by = Serial Numbers</p> | Yes | [Step 02](https://youtu.be/rrU-HJCYMSI?si=RHlXTajP-MxYA1Cw) |
| 3 | GRPO for Odometers | If you want to assign Physical Meter which exists on Stock and use for its Equipment Card it is necessary to receipt it on Stock and defines Serial Number for it, and define Equipment Card for it (standard SAP Business One functionality) | No | [Step 03](https://youtu.be/r8ZqxYIi7Zs?si=V_zygRHDGNcsFOuU) |
| 4 | Creation of Equipment Card for Odometers | For Odometer existing on Stock with Serial Number. Standard B1 functionality | No | [Step 04](https://youtu.be/7Ahu25sv9t0?si=mjcjGyK6mOXK6GEZ) |
| 5 | Definition of Unit of Measure | <p>UoM will be used for Odometer and Effective Meter as Meter Unit (standard SAP B1 function)</p> <p>UoM = Kilometers</p> | Yes | [Step 05](https://youtu.be/tvzSpkWXChM?si=P_RItjBZv5bsGUpv) |
| 6 | Creation of Maintainable Items for each Truck: Odometer 01, Odometer 02, …. | <p>MI Type = Asset</p> <p>Class = Odometers Vehicles; Category = Truck Odometers</p> <p>Header</p> <p>Item Code = Odometer</p> <p>Assigned Objects = Yes</p> <p>Item Code = Odometer</p> <p>Apparatus = Meter</p> <p>Equipment Card - selection from the list (if defined - optional)</p> <p>MI Details Tab, Meter Characteristics</p> <li>Frozen Parameters = No</li> <li>Meter Unit = Kilometers</li> <li>Maximum Value = 100 000</li> <li>Frozen Parameters = Yes</li> <li>Setup of starting value for Physical meter: select RMBM option Physical Meter Value Setting/Correction and enter: Reading and Number of Turns Over</li> | Yes | [Step 06](https://youtu.be/DxrdB7AgOh0?si=sPYm62IBEiLXDzAB) |
| 7 | Definition of Effective Meter Type: Total Kilometers | <p>Unit of Measure = Kilometers</p> <p>Entry Type = Difference</p> | Yes | [Step 07](https://youtu.be/DtsBzgOQZRM?si=S_5KVryUf2Fb41jg) |
| 8 | Adding of Effective Meter to Truck 01 | <p>Effective Meters Tab</p> <p>EM Type = Total Kilometers</p> <p>Entry Type = Difference</p> | Yes | [Step 08](https://youtu.be/WnBJ-XWN80k?si=PXc7qZHVLEUA2uqe) |
| 9 | Creation of Truck 02, Truck 03, … | RMBM option Duplicate on Truck 01 | Yes | [Step 09](https://youtu.be/l3OBeV4Tpg4?si=NjunjpEj3PTpJjv6) |
| 10 | Assigning of Physical Meters (Odometers) to EM Type (Total Kilometers) | For each truck assignee defined Odometers to Total Kilometers: select RMBM option Physical Meter Connection | Yes | [Step 10](https://youtu.be/vjKu3Aodu-4?si=7hf1jouKiBT6-Cpz) |
| 11 | Definition of Findings for MI Class/Category | Class = Vehicles; Category = Trucks | No | [Step 11](https://youtu.be/S02fWwW4ci8?si=oKzUAotzNZ_yKsSq) |
| 12 | Definition of Checkpoints Template for Aspect / Point Type | <p>Checkpoint Template = Total Kilometers</p> <p>Checkpoint Type = Meter Reading</p> <p>EM Type = Total Kilometers</p> <p>MI Code = Truck 01</p> | Yes | [Step 12](https://youtu.be/S0N_Ocd_IB4?si=2iUDY0ZNAyLxXMWq) |
| 13 | Definition of Task Templates | <p>Task Template = Track_Total_Kilometers_reading</p> <p>Class = Trucks</p> <p>For Checklist Tab:</p> <p>- Adding of Checkpoint Template = Total Kilometers for each inspected Truck (MI Code have to be changed)</p> | Yes | [Step 13](https://youtu.be/FO0PD3Tgi2s?si=MgrcIi3o686CGjkm) |
| 14 | MO Template for Garage | <p>MO Template = Total_Kilometers_Trucks</p> <p>Class = Total Kilometers Vehicles; Category = Total Kilometers Trucks</p> <p>Adding of Task = rack_Total_Kilometers_reading to MO Template</p> | Yes | [Step 14](https://youtu.be/L_jk_cFbwwE?si=Q0AGjZUSjtQY_s3V) |
| 15 | Creation of MO based on MO Template | New MO based on prepared MO Template | Yes | [Step 15](https://youtu.be/fD57W9KCSfU?si=H4bGfJJk1zX7WNQ3) |
| 16 | Reporting of MO | <p>MO Status = Started</p> <p>RMBM Option Meter Reading for each Checkpoint</p> | Yes | [Step 16](https://youtu.be/w5VebwtvBMs?si=amrkxRpcoUWUxhQi) |

---
