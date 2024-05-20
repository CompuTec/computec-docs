---
sidebar_position: 2
---

# Inspection Scenario – Pressure in Trucks' Tires

## Requirement

The user wants to prepare an MO template for cyclic inspection pressure in trucks' tires. Trucks have their base in a garage.

| | Steps | Actions | Obligatory | .mp4|
| --- | --- | --- | --- | --- |
| 1 | Creation of Maintainable Items (Garage - Trucks) | <p>Class/Category for Mis:</p> <p>Garage: Class = Buildings, Category = Logistic</p> <p>>Truck: Class = Vehicles, Category = Trucks</p> <p>Parent MI defined before Child MI</p> <p>Parent: Garage (Type = Location),</p> <p>Child (Type = Asset): Truck 01</p> | Yes | media |
| 2 | Definition of Point Type: Tire | Define Class for Points = Truck Tire | Yes | |
| 3 | Definition of Methods | <p>Describe how and with what device to measure the pressure</p> and <p>Define Class for Methods = Pressure Measurement</p> | No | |
| 4 | Definition of Aspect: Pressure | <p>Define Class for Aspects = Pressure</p> and Unit of Measure for Aspects = Bar | Yes | |
| 5 | Definition of Conditions | Describe at what ambient temperature do the measurement take? Define Class for Conditions = Ambient | No | |
| 6 | Truck 01 - definition of Points | Inspection Points/Points Tab Define Points: Front Left, Front Right, Back Left, Back Right with Point Type = Tire | Yes | |
| 7 | Truck 01 - definition of Aspects | Inspection Points/Aspects Tab Assigning of Aspect = Pressure to MI and optionally assigning of Method | Yes | |
| 7.1 | | Nominal Value and limits: Minimum: Extreme < Critical < Preventive Maximum: Preventive < Critical < Extreme MO Templates for Follow up actions for limit values | No | |
| 8 | Truck 01 - definition of Aspect Points | Inspection Points/Aspect Points Tab <br/>Combination of MI's Points and Aspect e.g. <br/>Point Front Left (Tire) and Aspect Pressure: <ul><li>Pressure_Front Left,</li> <li>Pressure_Front Right,</li> <li>Pressure_Back Left,</li> <li>Pressure_Back Right</li></ul> | Yes | |
| 9 | Truck 01 - definition of Condition | Inspection Points/Condition Tab <br/>Condition for combination: Point Type (Tire) - Aspect (Pressure) | No | |
| 10 | Creation of Truck 02, Truck 03, … | RMBM option Duplicate on Truck 01 | | |
| 11 | Definition of Findings for MI's Class/Category | Class = Vehicles; Category = Trucks | No | |
| 12 | Definition of Checkpoints Templates for Aspect / Point Type | Checkpoint Template = Pressure Tire-Trucks <br/>Inspection Checkpoint for the combination of Aspect (Pressure) assigned to MI and Point Type used in MI <br/>Checkpoint Type = Inspection <br/>MI Code = Truck 01 <br/>Aspect = Pressure, Point Type = Tire | Yes | |
| 13 | Definition of Task Templates | Task Template = Track_Inspection_Pressure <br/>Class = Trucks <br/>For Checklist Tab: <br/>Adding of Checkpoint Template = Pressure Tire-Trucks for each inspected Truck (MI Code have to be changed) | Yes | |
| 14 | MO Template for Garage | MO Template = Pressure-Tire-Truck <br/>Class = Pressure Vehicles <br/>Category = Pressure Trucks <br/>Adding of Task = <br/>Track_Inspection_Pressure to MO Template | Yes | |
| 15 | Creation of MO based on MO Template | New MO based on prepared MO Template | Yes | |
| 16 | Reporting of MO | MO has to be in Status = Started <br/>RMBM Option Inspection Reading for each Checkpoint | Yes | |
