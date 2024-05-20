---
sidebar_position: 3
---

# Meter Reading Scenario – Odometers in Trucks

## Requirement

The user wants to prepare an MO template for a cyclic reading of Odometers in trucks. Trucks have their base in a garage.

| | Steps | Actions | Obligatory | .mp4|
| --- | --- | --- | --- | --- |
| 1 | Creation of Maintainable Items (Garage - Trucks) | <p>Template Class/Category for Mis:</p> <p>Garage: Class = Buildings, Category = Logistic</p> <p>Truck: Class = Vehicles, Category = Trucks</p> <p>Parent MI defined before Child MI</p> <p>Parent: Garage (Type = Location),</p> <p>Child (Type = Asset): Truck 01</p> | Yes | |
| 2 | Creation of Item Master Data for Odometer | <p>If you want to use Physical Meter (meter linked to Effective Meter which count Total Usage for particular Item) it is obligatory to define Item Master Data managed by Serial Numbers for this Physical Meter</p> <p>Item Code = Odometer</p> <p>Manage Item by = Serial Numbers</p> | Yes | |
| 3 | GRPO for Odometers | If you want to assign Physical Meter which exists on Stock and use for its Equipment Card it is necessary to receipt it on Stock and defines Serial Number for it, and define Equipment Card for it (standard SAP Business One functionality) | No | |
| 4 | Creation of Equipment Card for Odometers | For Odometer existing on Stock with Serial Number. Standard B1 functionality | No | |
| 5 | Definition of Unit of Measure | <p>UoM will be used for Odometer and Effective Meter as Meter Unit (standard SAP B1 function)</p> <p>UoM = Kilometers</p> | Yes | |
| 6 | Creation of Maintainable Items for each Truck: Odometer 01, Odometer 02, …. | <p>MI Type = Asset</p> <p>Class = Odometers Vehicles; Category = Truck Odometers</p> <p>Header</p> <p>Item Code = Odometer</p> <p>Assigned Objects = Yes</p> <p>Item Code = Odometer</p> <p>Apparatus = Meter</p> <p>Equipment Card - selection from the list (if defined - optional)</p> <p>MI Details Tab, Meter Characteristics</p> <li>Frozen Parameters = No</li> <li>Meter Unit = Kilometers</li> <li>Maximum Value = 100 000</li> <li>Frozen Parameters = Yes</li> <li>Setup of starting value for Physical meter: select RMBM option Physical Meter Value Setting/Correction and enter: Reading and Number of Turns Over</li> | Yes | |
| 7 | Definition of Effective Meter Type: Total Kilometers | <p>Unit of Measure = Kilometers</p> <p>Entry Type = Difference</p> | Yes | |
| 8 | Adding of Effective Meter to Truck 01 | <p>Effective Meters Tab</p> <p>EM Type = Total Kilometers</p> <p>Entry Type = Difference</p> | Yes | |
| 9 | Creation of Truck 02, Truck 03, … | RMBM option Duplicate on Truck 01 | Yes | |
| 10 | Assigning of Physical Meters (Odometers) to EM Type (Total Kilometers) | For each truck assignee defined Odometers to Total Kilometers: select RMBM option Physical Meter Connection | Yes | |
| 11 | Definition of Findings for MI Class/Category | Class = Vehicles; Category = Trucks | No | |
| 12 | Definition of Checkpoints Template for Aspect / Point Type | <p>Checkpoint Template = Total Kilometers</p> <p>Checkpoint Type = Meter Reading</p> <p>EM Type = Total Kilometers</p> <p>MI Code = Truck 01</p> | Yes | |
| 13 | Definition of Task Templates | <p>Task Template = Track_Total_Kilometers_reading</p> <p>Class = Trucks</p> <p>For Checklist Tab:</p> <p>- Adding of Checkpoint Template = Total Kilometers for each inspected Truck (MI Code have to be changed)</p> | Yes | |
| 14 | MO Template for Garage | <p>MO Template = Total_Kilometers_Trucks</p> <p>Class = Total Kilometers Vehicles; Category = Total Kilometers Trucks</p> <p>Adding of Task = rack_Total_Kilometers_reading to MO Template</p> | Yes | |
| 15 | Creation of MO based on MO Template | New MO based on prepared MO Template | Yes | |
| 16 | Reporting of MO | <p>MO Status = Started</p> <p>RMBM Option Meter Reading for each Checkpoint</p> | Yes | |
