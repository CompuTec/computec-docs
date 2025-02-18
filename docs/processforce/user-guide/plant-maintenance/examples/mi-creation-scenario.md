---
sidebar_position: 4
---

# MI Creation Scenario – Connection to Company Structure and Other Master Data

Creating a Maintainable Item (MI) structure aligned with a company’s physical and organizational hierarchy is critical for efficient asset management. In this scenario, we explore the steps to set up an MI structure for a metal processing factory, Company X. The goal is to establish a logical connection between locations, organizational levels, and other master data like Departments, Fixed Assets, Resources, and Equipment Cards. This systematic approach ensures seamless integration across various components, enabling effective monitoring and management of assets.

---

## Requirement

The objective is to establish a Maintainable Item (MI) structure that reflects the company's physical locations and organizational hierarchy. Additionally, the user aims to link specific assets to Master Data elements from other system areas, such as Departments, Fixed Assets, Resources, and Equipment Cards (Items).

The example assumes that all relevant Master Data, as well as the required MI Classes and Categories, have been predefined.

The scenario focuses on Company X, a metal processing factory, structured as follows:

| | Steps | Actions | Obligatory | Video |
|--- | --- | --- | --- | --- |
| 1 | Create locations level as Location Type MI's | **MI Type: Location** <br/>'Production Build 01': Class = Buildings,Category = Production,Fixed Asset No. = FA000015' <br/>'Production Build 02': Class = Buildings, Category = Production, Fixed Asset No. = FA000016 <br/>Administr. and management Build': Class = Buildings, Category = Administration, Fixed Asset No. = FA000017 <u>*Note 01*</u>: to see a list of all MI's with type: 'Location' – go to Find mode, choose to type any other than Location, and then change back to 'Location,' add your additional criteria and press 'Find' button.| Yes | [Step 01](https://youtu.be/va0b2QNTsqo?si=myb1UTq0KlvHOuzg) <br/>[Step 01 N](https://youtu.be/bZ3ztQR4Ajo?si=lQeeDcEQvGKLeWvW) |
| 2 | Create organization level as System Type MI's for each building (location) | **MI Type: System** <br/>'Production lines Metal processing': Class = Organization, Category = Lines, Parent MI Code: PB01(Production Build 01) 'Internal Logistic' (PBO1): Class =Organization, Category = Maint., Parent MI Code = PB01(Production Build 01) | Yes | [Step 02](https://youtu.be/ag3PXEVqMhQ?si=6dPul_J5QzZafrls) |
| 3 | Create a detail department level as Position Type MI's | **MI Type: Position** <br/>'Machining': Parent MI Code = PrLine_MP (Production lines Metal processing), Department = PRMA (Production-Machining) <br/>'Forming': Parent MI Code = PrLine_MS (Production lines Metal processing), Department = PRFO (Production-Forming) <br/>'Finishing': Parent MI Code = PrLine_MF (Production lines - finishing), Department = PRFN (Production-Finishing) <br/><u>*Note 02*</u>: to create a new MI's with similar data we can use the option 'Duplicate' instead of 'Add'. | Yes | [Step 03](https://youtu.be/lBJTT2Cv_5U?si=L85g1QOs3LM6crO6) |
| 4 | Create assets which are created as Resources (machines, production stations, etc.) | **MI Type: Asset Assigned Obj.=Yes (Resource)** <br/>'Lathe BERNARDO FTR980': Class = Machinery, Category = Lathes, <br/>Parent MI Code = Pr_Mach (Machining), <br/>Resource=M03 (Lathe BERNARDO), <br/>Department = PRMA (Production-Machining), <br/>Fixed Asset No. = FA000003 | Yes | [Step 04](https://youtu.be/kNyQFLzX96E?si=RbfDjm008o59MhJx) |
| 5 | Create assets which are not Resources but are serialized Items (tools, specialist equipment, devices, meters) | **MI Type: Asset Assigned Obj.=Yes (Item)** <br/>'Controller - saw line': <br/>Class = Tools, <br/>Category = Mach_Equipment, <br/>Parent MI Code = MI00004 (CNC Band Saw...), <br/>Item = I000001, <br/>Apparatus Type = Tool, <br/>Equipment Card= S00001 <br/>Department = PRMA (Production-Machining), <br/>Fixed Asset No. = FA000014 | Yes | [Step 05](https://youtu.be/nmplHtImkp4?si=yTeFZorG_lucd1Wm) |
| 6 | Create assets not defined as Resources or serialized Items but are fixed assets (forklifts, air conditioners, etc.) | **MI Type: Asset Assigned Obj.=Yes (Fixed Asset)** <br/>'Forklift 1': Class = Transport, <br/>Category = Forklifts, <br/>Parent MI Code = B01IN_LOG (B01 Internal Logistic), <br/>Fixed Asset No. = FA000008, <br/>Department = PRMA (Production-Machining), <br/>Fixed Asset No. = FA000008 | Yes | [Step 06](https://www.youtube.com/watch?v=_9-yoXLIqDs) |

---
