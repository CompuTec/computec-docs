---
sidebar_position: 2
---

# Inspection Scenario – Pressure in Trucks' Tires

Regular tire pressure inspections are crucial for maintaining vehicle safety, fuel efficiency, and overall performance. This guide outlines the step-by-step process for creating and implementing a Maintenance Order (MO) template for cyclic tire pressure inspections in trucks stationed in a garage. The goal is to streamline the inspection process and ensure compliance with predefined safety standards.

---

## Requirement

The user wants to prepare an MO template for cyclic inspection pressure in trucks' tires. Trucks have their base in a garage.

| | Steps | Actions | Obligatory | .mp4|
| --- | --- | --- | --- | --- |
| 1 | Creation of Maintainable Items (Garage - Trucks) | <p>Class/Category for Mis:</p> <p>Garage: Class = Buildings, Category = Logistic</p> <p>>Truck: Class = Vehicles, Category = Trucks</p> <p>Parent MI defined before Child MI</p> <p>Parent: Garage (Type = Location),</p> <p>Child (Type = Asset): Truck 01</p> | Yes | media |
| 2 | Definition of Point Type: Tire | Define Class for Points = Truck Tire | Yes | [Step 02](https://youtu.be/YI-QdqzMhXE?si=un7de7CRp65QIfaV) |
| 3 | Definition of Methods | <p>Describe how and with what device to measure the pressure</p> and <p>Define Class for Methods = Pressure Measurement</p> | No | [Step 03](https://youtu.be/EyGBUu8k18Q?si=0M-DMBxGkW19AwKx) |
| 4 | Definition of Aspect: Pressure | <p>Define Class for Aspects = Pressure</p> and Unit of Measure for Aspects = Bar | Yes | [Step 04](https://youtu.be/nqYSBEvhVjY?si=b66ROzaWUqHl6Rt-) |
| 5 | Definition of Conditions | Describe at what ambient temperature do the measurement take? Define Class for Conditions = Ambient | No | [Step 05](https://youtu.be/Wx4BGoPiNT0?si=zaj3A5m9ObN4meUy) |
| 6 | Truck 01 - definition of Points | Inspection Points/Points Tab Define Points: Front Left, Front Right, Back Left, Back Right with Point Type = Tire | Yes | [Step 06](https://youtu.be/yf_BAu84X2I?si=6TvsNFvc87daCk9Z) |
| 7 | Truck 01 - definition of Aspects | Inspection Points/Aspects Tab Assigning of Aspect = Pressure to MI and optionally assigning of Method | Yes | [Step 07](https://youtu.be/pAEnVUoBYwQ?si=tjPfJLEGVzQolZC6) |
| 7.1 | | Nominal Value and limits: Minimum: Extreme < Critical < Preventive Maximum: Preventive < Critical < Extreme MO Templates for Follow up actions for limit values | No | [Step 07.1](https://youtu.be/5ANVB2HQYjY?si=oHZthIp8X4xdM5Sz) |
| 8 | Truck 01 - definition of Aspect Points | Inspection Points/Aspect Points Tab <br/>Combination of MI's Points and Aspect e.g. <br/>Point Front Left (Tire) and Aspect Pressure: <ul><li>Pressure_Front Left,</li> <li>Pressure_Front Right,</li> <li>Pressure_Back Left,</li> <li>Pressure_Back Right</li></ul> | Yes | [Step 08](https://youtu.be/pa9OUZ50zf0?si=bJJuKLNfm3uGvo1n)|
| 9 | Truck 01 - definition of Condition | Inspection Points/Condition Tab <br/>Condition for combination: Point Type (Tire) - Aspect (Pressure) | No | [Step 09](https://youtu.be/o5Llg3JejFk?si=D_ORFpxNbob_F1XT) |
| 10 | Creation of Truck 02, Truck 03, … | RMBM option Duplicate on Truck 01 | | [Step 10](https://youtu.be/C1ZvwFLF29g?si=XUxhCz_pqYbdDwRp) |
| 11 | Definition of Findings for MI's Class/Category | Class = Vehicles; Category = Trucks | No | [Step 11](https://youtu.be/FIZEw_Oz-70?si=rdcncnNNsbm3Eg91) |
| 12 | Definition of Checkpoints Templates for Aspect / Point Type | Checkpoint Template = Pressure Tire-Trucks <br/>Inspection Checkpoint for the combination of Aspect (Pressure) assigned to MI and Point Type used in MI <br/>Checkpoint Type = Inspection <br/>MI Code = Truck 01 <br/>Aspect = Pressure, Point Type = Tire | Yes | [Step 12](https://youtu.be/lkHvCQo8V0M?si=X972xCpOX27FSYVk)|
| 13 | Definition of Task Templates | Task Template = Track_Inspection_Pressure <br/>Class = Trucks <br/>For Checklist Tab: <br/>Adding of Checkpoint Template = Pressure Tire-Trucks for each inspected Truck (MI Code have to be changed) | Yes | [Step 13](https://youtu.be/o7lpigzVB-A?si=kgSYB23TUbW1UKQx) |
| 14 | MO Template for Garage | MO Template = Pressure-Tire-Truck <br/>Class = Pressure Vehicles <br/>Category = Pressure Trucks <br/>Adding of Task = <br/>Track_Inspection_Pressure to MO Template | Yes | [Step 14](https://youtu.be/LLZnwX5gCmM?si=h5Mq1TuUwHjWK1Ji) |
| 15 | Creation of MO based on MO Template | New MO based on prepared MO Template | Yes | [Step 15](https://youtu.be/xu6NMGugZfk?si=WMJwtkNPGmpcwIZZ) |
| 16 | Reporting of MO | MO has to be in Status = Started <br/>RMBM Option Inspection Reading for each Checkpoint | Yes | [Step 16](https://youtu.be/bHSvfJ8LAtI?si=ab5krw4cHrKQlGu_) |

---
This structured approach ensures a thorough inspection of truck tire pressures, enhancing operational safety and vehicle reliability. By following these steps, you can standardize the process, reduce manual effort, and ensure compliance with maintenance requirements. Regularly updating and refining the template as per operational needs will further improve the inspection process.
