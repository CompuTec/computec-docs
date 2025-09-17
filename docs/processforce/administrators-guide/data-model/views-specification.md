---
sidebar_position: 3
---

# Views Specification

The model contains 17 calculation views, 8 of which are views that can be a direct source for analytics tools (like Dashboards, KPIs, or Microsoft Excel). The rest of the views are of the indirect type. Here you can find the list of all the views and a detailed description of the query views. A specific view can be also used in a standard SQL query.

---

## The Views List

|Name|Description|Type|Data category|
|:----|:----|:----|:----|
|ActualMaterialCostOnMorFact|Actual Issues and Receipts for a Manufacturing Order|Reuse Views| |
|[ActualMaterialCostOnMorQuery](#actualmaterialcostonmorquery)|Actual Issues and Receipt for a Manufacturing Order – a Query available for analytics tools|Query Views|cube|
|ActualResourceCostOnMorFact|Actual work time records for Resources|Reuse Views| |
|[ActualResourceCostOnMorQuery](#actualmaterialcostonmorquery|Actual work time records for Resources – a Query available for analytics tools|Query Views|cube|
|DocumentDate|Time table – a copy from SAP Business One model|Reuse Views|dimension|
|EmpEndDate|Time table – a copy from SAP Business One model|Reuse Views|dimension|
|EmpFact|Time and registered quantity for an Employee assign to a Resource on a Manufacturing Order (in cases of many log ins, start data is a date of the first log in and end date is a date of the last log in)|Reuse Views| |
|Employee|Employee dictionary|Reuse Views|dimension|
|[EmpQuery](#empquery)|Time and registered quantity for an Employee assign to a Resource on a Manufacturing Order (in cases of many log ins, start data is a date of the first log in and end date is a date of the last log in) – a Query available for analytics tools|Query Views|cube|
|EmpStartDate|Time table - a copy from SAP Business One model|Reuse Views|dimension|
|ItemDetailsRevisions|Item Revisions dictionary|Reuse Views|dimension|
|MorItem|Item dictionary for Manufacturing Order|Reuse Views|dimension|
|MorItemAndResource|Item and Resource's dictionary for Manufacturing Order|Reuse Views|dimension|
|MorResource|Resource dictionary for Manufacturing Order|Reuse Views|dimension|
|MorResourceOverviewFact|Key Performance Indicators describing Recourse for Manufacturing Order|Reuse Views| |
|[MorResourceOverviewQuery](#morresourceoverviewquery)|Key Performance Indicators describing Recourse for Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|Operation|Operation dictionary|Reuse Views|dimension|
|PlannedMaterialCostOnMorFact|Planned Issues and Receipts for Manufacturing Order|Reuse Views| |
|[PlannedMaterialCostOnMorQuery](#plannedmaterialcostonmorquery)|Planned Issues and Receipts for Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|PlannedResourceCostOnMorFact|Planned work time for Resources on Manufacturing Order|Reuse Views| |
|[PlannedResourceCostOnMorQuery](#plannedresourcecostonmorquery)|Planned work time for Resources on Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|[PlannedVsActualCostOnMorQuery](#plannedvsactualcostonmorquery)|Planned vs. actual work time costs for Resources and Issues and Receipts for Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|[PlannedVsActualMaterialCostOnMorQuery](#plannedvsactualmaterialcostonmorquery)|Planned vs. actual Issues and Receipts for Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|[PlannedVsActualResourceCostOnMorQuery](#plannedvsactualresourcecostonmorquery)|Planned vs. actual Resources work time for Manufacturing Order – a Query, available for analytics tools|Query Views|cube|
|QctBatch|Batches for Quality Control Test dictionary|Reuse Views|dimension|
|QctClosedDate|Time table – a copy from SAP Business One model|Reuse Views|dimension|
|QctComplaint|Complaint for Quality Control Test dictionary|Reuse Views|dimension|
|QctCreatedDate|Time table – a copy from SAP Business One model|Reuse Views|dimension|
|QctDefect|Defects for Quality Control Test dictionary|Reuse Views|dimension|
|QctItem|Items for Quality Control Test dictionary|Reuse Views|dimension|
|QctItemProperty|Item Properties for Quality Control Test dictionary|Reuse Views|dimension|
|QctNcmr|NCMR Properties for Quality Control Test dictionary|Reuse Views|dimension|
|QctPool|Pool Properties for Quality Control Test dictionary|Reuse Views|dimension|
|[QctQuery](#qctquery)|Counters for Quality Control Test (a number of Tests and related Batches, Complaints, Defects etc.) – a Query available for analytics tools|Query Views|cube|
|QctResource|Resource Properties for Quality Control Test dictionary|Reuse Views|dimension|
|QctSerialNumber|Serial Numbers Properties for Quality Control Test dictionary|Reuse Views|dimension|
|QctTest|Quality Control Test dictionary|Reuse Views|dimension|
|QctTestResult|Test result for Quality Control Test dictionary|Reuse Views|dimension|
|Resource|Resource dictionary|Reuse Views|dimension|
|Warehouse|Warehouse dictionary|Reuse Views|dimension|

---

## Measures and Dimensions for Query Views

### ActualMaterialCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|OINMItemCode|Issue or Receipt Item Code|Item Code|Attribute| |
|OINMTransType|Transaction type (Issue/Receipt)|Trans Type|Attribute| |
|Quantity|Issue/Receipt Quantity|Quantity|Measure| |
|TotalValue|Issue/Receipt Value|Total Value|Measure| |
|IGE_IGNU_Revision|Revision|Revision|Attribute| |
|OINMBASE_REF|Document Number|Document Number|Attribute| |
|OINMCreatedBy|Document Entry|Document Entry|Attribute| |
|OINMDocLineNum|Document Line|Document Line|Attribute| |
|OINMWarehouse|Warehouse|Warehouse|Attribute| |
|DocumentDate|Issue/Receipt date – Issue/Receipt date – date|Document Date|Attribute|DocumentDate|
|DocumentMonth|Issue/Receipt date – month|Document Month|Attribute|DocumentDate|
|DocumentQuarter|Issue/Receipt date – quarter|Document Quarter|Attribute|DocumentDate|
|DocumentWeek|Issue/Receipt date – week|Document Week|Attribute|DocumentDate|
|DocumentYear|Issue/Receipt date – year|Document Year|Attribute|DocumentDate|
|InternalKeyRevision|Internal Key Revision|InternalKeyRevision|Attribute|ItemDetailsRevisions|
|U_Code|Revision Code|Revision Code|Attribute|ItemDetailsRevisions|
|U_Default|Default|Default|Attribute|ItemDetailsRevisions|
|U_Description|Revision Name|Revision Name|Attribute|ItemDetailsRevisions|
|U_ILeadTime|Internal Lead Time|Internal Lead Time|Attribute|ItemDetailsRevisions|
|U_IsCostingDefault|Default for Costing|Default for Costing|Attribute|ItemDetailsRevisions|
|U_IsMrpDefault|Default for MRP|Default for MRP|Attribute|ItemDetailsRevisions|
|U_ItemCode|Item Code|Item Code|Attribute|ItemDetailsRevisions|
|U_MatPhantom|Material Phantom|Material Phantom|Attribute|ItemDetailsRevisions|
|U_Status|Status|Status|Attribute|ItemDetailsRevisions|
|U_ValidFrom|Valid From|Valid From|Attribute|ItemDetailsRevisions|
|U_ValidTo|Valid To|Valid To|Attribute|ItemDetailsRevisions|
|InternalKey|Internal Key|InternalKey|Attribute|MorItem|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorItem|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorItem|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorItem|
|MORU_Description|Item name for Manufacturing Order|Header Item Name|Attribute|MorItem|
|MORU_ItemCode|Manufacturing Order Item Code|Header Item Code|Attribute|MorItem|
|MORU_Revision|Item revision for Manufacturing Order|Header Revision|Attribute|MorItem|
|MORU_Status|Manufacturing Order status|Header Status|Attribute|MorItem|
|MORXTbl_ItemType|Component Type for Manufacturing Order (IT-Item; HR-header; SC-scrap; CP-coproduct; SV-non stock Item)|Line Item Type|Attribute|MorItem|
|MORXU_Description|Component Item Name for Manufacturing Order|Line Item Name|Attribute|MorItem|
|MORXU_ItemCode|Component Item Code for Manufacturing Order|Line Item Code|Attribute|MorItem|
|MORXU_LineNum|Component Line Number for Manufacturing Order|Line Line Number|Attribute|MorItem|
|MORXU_Revision|Component Item Revision for Manufacturing Order|Line Revision|Attribute|MorItem|
|CompanyMaximumItemQuantity|Company Maximum Item Quantity|Company Maximum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyMinimumItemQuantity|Company Minimum Item Quantity|Company Minimum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyRequiredItemQuantity|Company Required Item Quantity|Company Required Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|DefaultPreferredVendor|Default Preferred Vendor|Default Preferred Vendor|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryIsManagedByWarehouse|Stock Is Managed by Warehouse|Stock Is Managed by Warehouse|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryUoMName|Stock UoM Name|Stock UoM Name|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryValuationMethod|Stock Valuation Method|Stock Valuation Method|Attribute|sap.pfdemotomekm.adm::Item|
|IsInventoryItem|Is Stock Item|Is Stock Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsPurchaseItem|Is Purchasing Item|Is Purchasing Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsSalesItem|Is Sales Item|Is Sales Item|Attribute|sap.pfdemotomekm.adm::Item|
|ItemCode|Item Code|Item Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescription|Item Description|Item Description|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescriptionAndCode|Item Description & Code|Item Description & Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemGroup|Item Group|Item Group|Attribute|sap.pfdemotomekm.adm::Item|
|ItemIsActive|Item Is Active|Item Is Active|Attribute|sap.pfdemotomekm.adm::Item|
|ItemManufacturer|Item Manufacturer|Item Manufacturer|Attribute|sap.pfdemotomekm.adm::Item|
|ItemShippingType|Item Shipping Type|Item Shipping Type|Attribute|sap.pfdemotomekm.adm::Item|
|ItemType|Item Type|Item Type|Attribute|sap.pfdemotomekm.adm::Item|
|UoMGroup|UoM Group|UoM Group|Attribute|sap.pfdemotomekm.adm::Item|
|BinLocationIsEnabled|Bin Location Is Enabled|Bin Location Is Enabled|Attribute|Warehouse|
|FederalTaxID|VAT Number|VAT Number|Attribute|Warehouse|
|IsDropShipWarehouse|Is Drop Ship Warehouse|Is Drop Ship Warehouse|Attribute|Warehouse|
|IsNettableWarehouse|Is Nettable Warehouse|Is Nettable Warehouse|Attribute|Warehouse|
|WarehouseBranchCode|Warehouse Branch Code|Warehouse Branch Code|Attribute|Warehouse|
|WarehouseBranchName|Warehouse Branch Name|Warehouse Branch Name|Attribute|Warehouse|
|WarehouseCode|Warehouse Code|Warehouse Code|Attribute|Warehouse|
|WarehouseCountry|Warehouse Country|Warehouse Country|Attribute|Warehouse|
|WarehouseDefaultBinLocation|Warehouse Default Bin Location|Warehouse Default Bin Location|Attribute|Warehouse|
|WarehouseIsActive|Is Active Warehouse|Is Active Warehouse|Attribute|Warehouse|
|WarehouseLocation|Warehouse Location|Warehouse Location|Attribute|Warehouse|
|WarehouseName|Warehouse Name|Warehouse Name|Attribute|Warehouse|
|WarehouseNameAndCode|Warehouse Name & Code|Warehouse Name & Code|Attribute|Warehouse|

### ActualResourceCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|TBFixedCost|Actual Cost Sum for Resource – Fixed Cost|Fixed Value|Measure| |
|TBTimeCost|Actual Cost Sum for Resource - Time Cost|Time Value|Measure| |
|TBVariableCost|Actual Cost Sum for Resource - Variable Value|Variable Value|Measure| |
|TBWorkingHours|Actual Time Sum for Resource|Quantity|Measure| |
|TotalValue|Actual Cost Sum for Resource - Total Time|Total Value|Measure| |
|TBDocEntry|Document Entry|Document Entry|Attribute| |
|TBDocNum|Document Number|Document Number|Attribute| |
|TBLineNum|Document Line|Document Line|Attribute| |
|TBObject|Document Type|Document Type|Attribute| |
|DocumentDate|Time booking date – date|Document Date|Attribute|DocumentDate|
|DocumentMonth|Time booking date – month|Document Month|Attribute|DocumentDate|
|DocumentQuarter|Time booking date – quarter|Document Quarter|Attribute|DocumentDate|
|DocumentWeek|Time booking date – week|Document Week|Attribute|DocumentDate|
|DocumentYear|Time booking date – year|Document Year|Attribute|DocumentDate|
|InternalKey|Internal Key|InternalKey|Attribute|MorResource|
|MOR12U_OprCode|Operation Code for Manufacturing Order|Operation Code|Attribute|MorResource|
|MOR12U_Status|Operation Status Code for Manufacturing Order|Operation Status|Attribute|MorResource|
|MOR12U_StatusName|Operation Status Name for Manufacturing Order|Operation Status Name|Attribute|MorResource|
|MOR16U_LineNum|Operation Resource Line Number for Manufacturing Order|Resource Line Number|Attribute|MorResource|
|MOR16U_RscCode|Operation Resource Code for Manufacturing Order|Resource Code|Attribute|MorResource|
|MOR16U_RscType|Resource Type (M-machine, T-tool)|Resource Type|Attribute|MorResource|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorResource|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorResource|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorResource|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorResource|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorResource|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorResource|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorResource|
|OPRU_OprName|Operation Name for Manufacturing Order|Operation Name|Attribute|MorResource|
|RC1U_CostType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Time Type|Attribute|MorResource|
|RSCU_RscName|Operation Resource Name for Manufacturing Order|Resource Name|Attribute|MorResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|

### EmpQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|ActualTempo|Actual Tempo [Uom/h]|Actual Tempo [Uom/h]|Measure| |
|ActualTimeH|Actual Time [H]|Actual Time [H]|Measure| |
|QtyRW|Rework Qty|Rework Qty|Measure| |
|QtySC|Scrap Qty|Scrap Qty|Measure| |
|Time|Actual Time [sec]|Actual Time [sec]|Measure| |
|U_Quantity|Actual Qty|Actual Qty|Measure| |
|EmpEndDate|Emp End Date|Emp End Date|Attribute|EmpEndDate|
|EmpEndDay|Emp End Day|Emp End Day|Attribute|EmpEndDate|
|EmpEndDayINT|Emp End Day INT|Emp End Day INT|Attribute|EmpEndDate|
|EmpEndMonth|Emp End Month|Emp End Month|Attribute|EmpEndDate|
|EmpEndMonthINT|Emp End Month INT|Emp End Month INT|Attribute|EmpEndDate|
|EmpEndQuarter|Emp End Quarter|Emp End Quarter|Attribute|EmpEndDate|
|EmpEndQuarterINT|Emp End Quarter INT|Emp End Quarter INT|Attribute|EmpEndDate|
|EmpEndWeek|Emp End Week|Emp End Week|Attribute|EmpEndDate|
|EmpEndWeekINT|Emp End Week INT|Emp End Week INT|Attribute|EmpEndDate|
|EmpEndYear|Emp End Year|Emp End Year|Attribute|EmpEndDate|
|EmpEndYearINT|Emp End Year INT|Emp End Year INT|Attribute|EmpEndDate|
|EmployeeBranch|Employee Branch|Employee Branch|Attribute|Employee|
|EmployeeDepartment|Employee Department|Employee Department|Attribute|Employee|
|EmployeeIsActive|Is Employee Active|Is Employee Active|Attribute|Employee|
|EmployeeName|Employee Name|Employee Name|Attribute|Employee|
|EmployeeNumber|Employee Number|Employee Number|Attribute|Employee|
|Manager|Employee Manager|Employee Manager|Attribute|Employee|
|U_LabourCode|Employee Labour Code|Employee Labour Code|Attribute|Employee|
|UserCode|Employee User Code|Employee User Code|Attribute|Employee|
|UserName|Employee User Name|Employee User Name|Attribute|Employee|
|EmpStartDate|Emp Start Date|Emp Start Date|Attribute|EmpStartDate|
|EmpStartDay|Emp Start Day|Emp Start Day|Attribute|EmpStartDate|
|EmpStartDayINT|Emp Start Day INT|Emp Start Day INT|Attribute|EmpStartDate|
|EmpStartMonth|Emp Start Month|Emp Start Month|Attribute|EmpStartDate|
|EmpStartMonthINT|Emp Start Month INT|Emp Start Month INT|Attribute|EmpStartDate|
|EmpStartQuarter|Emp Start Quarter|Emp Start Quarter|Attribute|EmpStartDate|
|EmpStartQuarterINT|Emp Start Quarter INT|Emp Start Quarter INT|Attribute|EmpStartDate|
|EmpStartWeek|Emp Start Week|Emp Start Week|Attribute|EmpStartDate|
|EmpStartWeekINT|Emp Start Week INT|Emp Start Week INT|Attribute|EmpStartDate|
|EmpStartYear|Emp Start Year|Emp Start Year|Attribute|EmpStartDate|
|EmpStartYearINT|Emp Start Year INT|Emp Start Year INT|Attribute|EmpStartDate|
|InternalKey|InternalKey|InternalKey|Attribute|MorResource|
|MOR12U_OprCode|Operation Code|Operation Code|Attribute|MorResource|
|MOR12U_Status|Operation Status|Operation Status|Attribute|MorResource|
|MOR12U_StatusName|Operation Status Name|Operation Status Name|Attribute|MorResource|
|MOR16U_LineNum|Resource Line Number|Resource Line Number|Attribute|MorResource|
|MOR16U_RscCode|Resource Code|Resource Code|Attribute|MorResource|
|MOR16U_RscType|Resource Type|Resource Type|Attribute|MorResource|
|MORCreateDate|Header Create Date|Header Create Date|Attribute|MorResource|
|MORDocEntry|Header Doc Entry|Header Doc Entry|Attribute|MorResource|
|MORDocNum|Header Doc Number|Header Doc Number|Attribute|MorResource|
|MORU_Description|Header Item Name|Header Item Name|Attribute|MorResource|
|MORU_ItemCode|Header Item Code|Header Item Code|Attribute|MorResource|
|MORU_Revision|Header Revision|Header Revision|Attribute|MorResource|
|MORU_Status|Header Status|Header Status|Attribute|MorResource|
|OPRU_OprName|Operation Name|Operation Name|Attribute|MorResource|
|RC1U_CostType|Resource Time Type|Resource Time Type|Attribute|MorResource|
|RSCU_RscName|Resource Name|Resource Name|Attribute|MorResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|

### MorResourceOverviewQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|PlannedEndDateTime|Planned finish date/time for Resource|Planned End Date Time|Attribute| |
|PlannedStartDateTime|Planned start date/time for Resource|Planned Start Date Time|Attribute| |
|PlannedTimeHHMMSS|Planned work time for Resource in HHMMSS format|Planned Time HHMMSS|Attribute| |
|ActualTempo|U_Quantity"/"ActualTime"*3600|Actual Tempo [Uom/h]|Measure| |
|ActualTime|Time Sum from Time Bookings / CompuTec PDC in seconds|Actual Time [sec]|Measure| |
|ActualTimeH|"ActualTime"/3600|Actual Time [H]|Measure| |
|ActualVsPlannedTimePERC|"ActualTime"/"PlannedTime|Actual Vs Planned Time [perc]|Measure| |
|DelayEnd|seconds_between("PlannedStartDateTime","ActualStartDateTime")|Delay End [sec]|Measure| |
|DelayStart|seconds_between("PlannedEndDateTime","ActualEndDateTime")|Delay Start [sec]|Measure| |
|PlannedQty|Planned Quantity for Resource|Planned Qty|Measure| |
|PlannedTempo|PlannedQty"/"PlannedTime"*3600|Planned Tempo [Uom/h]|Measure| |
|PlannedTime|Planned work time for Resource in seconds|Planned Time [sec]|Measure| |
|QtyRW|Registered Rework Quantity|Rework Qty|Measure| |
|QtySC|Registered Scrap Quantity|Scrap Qty|Measure| |
|ShouldBeQty|"ActualTimeH"*"PlannedTempo|Should be Qty|Measure| |
|U_Quantity|Actual registered Quantity for Resource|Actual Qty|Measure| |
|ActualEndDate|Actual End Date|Actual End Date|Attribute| |
|ActualStartDate|Actual Start Date|Actual Start Date|Attribute| |
|ActualFixedCostValue|Actual Fixed Cost Value|Actual Fixed Cost Value|Measure| |
|ActualTimeCostValue|Actual Time Cost Value|Actual Time Cost Value|Measure| |
|ActualTotalCostValue|Actual Total Cost Value|Actual Total Cost Value|Measure| |
|ActualVariableCostValue|Actual Variable Cost Value|Actual Variable Cost Value|Measure| |
|ActualVsPlannedTotalCostValueDIFF|Actual Vs Planned Total Cost Value [diff]|Actual Vs Planned Total Cost Value [diff]|Measure| |
|ActualVsPlannedTotalCostValuePERC|Actual Vs Planned Total Cost Value [perc]|Actual Vs Planned Total Cost Value [perc]|Measure| |
|PlannedFixedCostValue|Planned Fixed Cost Value|Planned Fixed Cost Value|Measure| |
|PlannedTimeCostValue|Planned Time Cost Value|Planned Time Cost Value|Measure| |
|PlannedTotalCostValue|Planned Total Cost Value|Planned Total Cost Value|Measure| |
|PlannedVariableCostValue|Planned Variable Cost Value|Planned Variable Cost Value|Measure| |
|InternalKey|Internal Key|InternalKey|Attribute|MorResource|
|MOR12U_OprCode|Operation Code for Manufacturing Order|Operation Code|Attribute|MorResource|
|MOR12U_Status|Operation Status Code for Manufacturing Order|Operation Status|Attribute|MorResource|
|MOR12U_StatusName|Operation Status Name for Manufacturing Order|Operation Status Name|Attribute|MorResource|
|MOR16U_LineNum|Operation Resource Line Number for Manufacturing Order|Resource Line Number|Attribute|MorResource|
|MOR16U_RscCode|Operation Resource Code for Manufacturing Order|Resource Code|Attribute|MorResource|
|MOR16U_RscType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Type|Attribute|MorResource|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorResource|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorResource|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorResource|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorResource|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorResource|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorResource|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorResource|
|OPRU_OprName|Operation Name for Manufacturing Order|Operation Name|Attribute|MorResource|
|RC1U_CostType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Time Type|Attribute|MorResource|
|RSCU_RscName|Operation Resource Name for Manufacturing Order|Resource Name|Attribute|MorResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|

### PlannedMaterialCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|FixedValue|Planned Issue/Receipt value – Fixed Cost|Fixed Value|Measure| |
|ItemValue|Planned Issue/Receipt value – Material Cost|Item Value|Measure| |
|Quantity|Planned Issue/Receipt Quantity|Quantity|Measure| |
|TotalValue|Planned Issue/Receipt value – Total Time|Total Value|Measure| |
|VariableValue|Planned Issue/Receipt value – Variable Value|Variable Value|Measure| |
|MORXU_ItemCode_1|Item Code|Item Code|Attribute| |
|MORXU_Revision_1|Revision|Revision|Attribute| |
|MORXU_WhsCode|Warehouse|Warehouse|Attribute| |
|InternalKeyRevision|InternalKeyRevision|InternalKeyRevision|Attribute|ItemDetailsRevisions|
|U_Code|Revision Code|Revision Code|Attribute|ItemDetailsRevisions|
|U_Default|Default|Default|Attribute|ItemDetailsRevisions|
|U_Description|Revision Name|Revision Name|Attribute|ItemDetailsRevisions|
|U_ILeadTime|Internal Lead Time|Internal Lead Time|Attribute|ItemDetailsRevisions|
|U_IsCostingDefault|Default for Costing|Default for Costing|Attribute|ItemDetailsRevisions|
|U_IsMrpDefault|Default for MRP|Default for MRP|Attribute|ItemDetailsRevisions|
|U_ItemCode|Item Code|Item Code|Attribute|ItemDetailsRevisions|
|U_MatPhantom|Material Phantom|Material Phantom|Attribute|ItemDetailsRevisions|
|U_Status|Status|Status|Attribute|ItemDetailsRevisions|
|U_ValidFrom|Valid From|Valid From|Attribute|ItemDetailsRevisions|
|U_ValidTo|Valid To|Valid To|Attribute|ItemDetailsRevisions|
|InternalKey|Internal Key|InternalKey|Attribute|MorItem|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorItem|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorItem|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorItem|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorItem|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorItem|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorItem|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorItem|
|MORXTbl_ItemType|Component Type for Manufacturing Order (IT-Item; HR-header; SC-scrap; CP-coproduct; SV-non stock Item)|Line Item Type|Attribute|MorItem|
|MORXU_Description|Component Item Name for Manufacturing Order|Line Item Name|Attribute|MorItem|
|MORXU_ItemCode|Component Item Code for Manufacturing Order|Line Item Code|Attribute|MorItem|
|MORXU_LineNum|Component Item Name for Manufacturing OrderComponent Line Number for Manufacturing Order|Line Line Number|Attribute|MorItem|
|MORXU_Revision|Component Item Revision for Manufacturing Order|Line Revision|Attribute|MorItem|
|CompanyMaximumItemQuantity|Company Maximum Item Quantity|Company Maximum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyMinimumItemQuantity|Company Minimum Item Quantity|Company Minimum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyRequiredItemQuantity|Company Required Item Quantity|Company Required Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|DefaultPreferredVendor|Default Preferred Vendor|Default Preferred Vendor|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryIsManagedByWarehouse|Stock Is Managed by Warehouse|Stock Is Managed by Warehouse|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryUoMName|Stock UoM Name|Stock UoM Name|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryValuationMethod|Stock Valuation Method|Stock Valuation Method|Attribute|sap.pfdemotomekm.adm::Item|
|IsInventoryItem|Is Stock Item|Is Stock Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsPurchaseItem|Is Purchasing Item|Is Purchasing Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsSalesItem|Is Sales Item|Is Sales Item|Attribute|sap.pfdemotomekm.adm::Item|
|ItemCode|Item Code|Item Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescription|Item Description|Item Description|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescriptionAndCode|Item Description & Code|Item Description & Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemGroup|Item Group|Item Group|Attribute|sap.pfdemotomekm.adm::Item|
|ItemIsActive|Item Is Active|Item Is Active|Attribute|sap.pfdemotomekm.adm::Item|
|ItemManufacturer|Item Manufacturer|Item Manufacturer|Attribute|sap.pfdemotomekm.adm::Item|
|ItemShippingType|Item Shipping Type|Item Shipping Type|Attribute|sap.pfdemotomekm.adm::Item|
|ItemType|Item Type|Item Type|Attribute|sap.pfdemotomekm.adm::Item|
|UoMGroup|UoM Group|UoM Group|Attribute|sap.pfdemotomekm.adm::Item|
|BinLocationIsEnabled|Bin Location Is Enabled|Bin Location Is Enabled|Attribute|Warehouse|
|FederalTaxID|VAT Number|VAT Number|Attribute|Warehouse|
|IsDropShipWarehouse|Is Drop Ship Warehouse|Is Drop Ship Warehouse|Attribute|Warehouse|
|IsNettableWarehouse|Is Nettable Warehouse|Is Nettable Warehouse|Attribute|Warehouse|
|WarehouseBranchCode|Warehouse Branch Code|Warehouse Branch Code|Attribute|Warehouse|
|WarehouseBranchName|Warehouse Branch Name|Warehouse Branch Name|Attribute|Warehouse|
|WarehouseCode|Warehouse Code|Warehouse Code|Attribute|Warehouse|
|WarehouseCountry|Warehouse Country|Warehouse Country|Attribute|Warehouse|
|WarehouseDefaultBinLocation|Warehouse Default Bin Location|Warehouse Default Bin Location|Attribute|Warehouse|
|WarehouseIsActive|Is Active Warehouse|Is Active Warehouse|Attribute|Warehouse|
|WarehouseLocation|Warehouse Location|Warehouse Location|Attribute|Warehouse|
|WarehouseName|Warehouse Name|Warehouse Name|Attribute|Warehouse|
|WarehouseNameAndCode|Warehouse Name & Code|Warehouse Name & Code|Attribute| |

### PlannedResourceCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|FixedValue|Planned Cost Sum for Resource – Fixed Cost|Fixed Value|Measure| |
|Quantity|Planned Time Sum for Resource|Quantity|Measure| |
|TimeValue|Planned Cost Sum for Resource – Fixed Cost|Time Value|Measure| |
|TotalValue|Planned Cost Sum for Resource – Total Value|Total Value|Measure| |
|VariableValue|Planned Cost Sum for Resource – Variable Cost|Variable Value|Measure| |
|InternalKey|Internal Key|InternalKey|Attribute|MorResource|
|MOR12U_OprCode|Operation Code for Manufacturing Order|Operation Code|Attribute|MorResource|
|MOR12U_Status|Operation Status Code for Manufacturing Order|Operation Status|Attribute|MorResource|
|MOR12U_StatusName|Operation Status Name for Manufacturing Order|Operation Status Name|Attribute|MorResource|
|MOR16U_LineNum|Operation Resource Line Number for Manufacturing Order|Resource Line Number|Attribute|MorResource|
|MOR16U_RscCode|Operation Resource Code for Manufacturing Order|Resource Code|Attribute|MorResource|
|MOR16U_RscType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Type|Attribute|MorResource|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorResource|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorResource|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorResource|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorResource|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorResource|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorResource|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorResource|
|OPRU_OprName|Operation Name for Manufacturing Order|Operation Name|Attribute|MorResource|
|RC1U_CostType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Time Type|Attribute|MorResource|
|RSCU_RscName|Operation Resource Name for Manufacturing Order|Resource Name|Attribute|MorResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|

### PlannedVsActualCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|ActualCost|Actual Cost Sum for Resource/Material - Cost of Time/Material|Actual Cost|Measure| |
|ActualFixedCost|Actual Cost Sum for Resource/Material - Fixed Cost|Actual Fixed Cost|Measure| |
|ActualQuantity|Actual Time Sum for Resource / Quantity for Material|Actual Quantity|Measure| |
|ActualTotalCost|Actual Cost Sum for Resource/Material - Total Time|Actual Total Cost|Measure| |
|ActualVariableCost|Actual Cost Sum for Resource/Material - Variable Value|Actual Variable Cost|Measure| |
|ActualVsPlannedQuantityDIFF|PlannedQuantity-"ActualQuantity"|Actual Vs Planned Quantity [diff]|Measure| |
|ActualVsPlannedQuantityPERC|ActualQuantity"/"PlannedQuantity|Actual Vs Planned Quantity [perc]|Measure| |
|ActualVsPlannedTotalCostDIFF|PlannedTotalCost" - "ActualTotalCost|Actual Vs Planned Total Cost [diff]|Measure| |
|ActualVsPlannedTotalCostPERC|ActualTotalCost"/"PlannedTotalCost|Actual Vs Planned Total Cost [perc]|Measure| |
|PlannedCost|Planned Cost Sum for Resource/Material – TimeCost/Material|Planned Cost|Measure| |
|PlannedFixedCost|Planned Cost Sum for Resource/Material – Fixed Cost|Planned Fixed Cost|Measure| |
|PlannedQuantity|Planned Time Sum for Resource / Material Quantity|Planned Quantity|Measure| |
|PlannedTotalCost|Planned Time Sum for Resource/Material – Total Time|Planned Total Cost|Measure| |
|PlannedVariableCost|Planned Time Sum for Resource/Material – Variable Value|Planned Variable Cost|Measure| |
|IGE_IGNU_Revision|Revision|Revision|Attribute| |
|MOR12U_OprCode_1|Operation Code|Operation Code|Attribute| |
|MOR16U_RscCode_1|Resource Code|Resource Code|Attribute| |
|MORXU_ItemCode_1|Item Code|Item Code|Attribute| |
|MORXU_WhsCode|Warehouse|Warehouse|Attribute| |
|OperationType|Document Type|Document Type|Attribute| |
|TBDocEntry|Document Entry|Document Entry|Attribute| |
|TBDocNum|Document Number|Document Number|Attribute| |
|TBLineNum|Document Line|Document Line|Attribute| |
|InternalKeyRevision|InternalKeyRevision|InternalKeyRevision|Attribute|ItemDetailsRevisions|
|U_Code|Revision Code|Revision Code|Attribute|ItemDetailsRevisions|
|U_Default|Default|Default|Attribute|ItemDetailsRevisions|
|U_Description|Revision Name|Revision Name|Attribute|ItemDetailsRevisions|
|U_ILeadTime|Internal Lead Time|Internal Lead Time|Attribute|ItemDetailsRevisions|
|U_IsCostingDefault|Default for Costing|Default for Costing|Attribute|ItemDetailsRevisions|
|U_IsMrpDefault|Default for MRP|Default for MRP|Attribute|ItemDetailsRevisions|
|U_ItemCode|Item Code|Item Code|Attribute|ItemDetailsRevisions|
|U_MatPhantom|Material Phantom|Material Phantom|Attribute|ItemDetailsRevisions|
|U_Status|Status|Status|Attribute|ItemDetailsRevisions|
|U_ValidFrom|Valid From|Valid From|Attribute|ItemDetailsRevisions|
|U_ValidTo|Valid To|Valid To|Attribute|ItemDetailsRevisions|
|InternalKey|Internal Key|InternalKey|Attribute|MorItemAndResource|
|MOR12U_OprCode|Operation Code for Manufacturing Order|Operation Code|Attribute|MorItemAndResource|
|MOR12U_Status|Operation Status Code for Manufacturing Order|Operation Status|Attribute|MorItemAndResource|
|MOR16U_RscCode|Operation Resource Code for Manufacturing Order|Resource Code|Attribute|MorItemAndResource|
|MOR16U_RscType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Type|Attribute|MorItemAndResource|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorItemAndResource|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorItemAndResource|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorItemAndResource|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorItemAndResource|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorItemAndResource|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorItemAndResource|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorItemAndResource|
|MORXTbl_ItemType|Component Type for Manufacturing Order (IT-Item; HR-header; SC-scrap; CP-coproduct; SV-non stock Item)|Line Item Type|Attribute|MorItemAndResource|
|MORXU_Description|Component Item Name for Manufacturing Order|Line Item Name|Attribute|MorItemAndResource|
|MORXU_ItemCode|Component Item Code for Manufacturing Order|Line Item Code|Attribute|MorItemAndResource|
|MORXU_Revision|Component Item Revision for Manufacturing Order|Line Revision|Attribute|MorItemAndResource|
|RC1U_CostType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Time Type|Attribute|MorItemAndResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|
|CompanyMaximumItemQuantity|Company Maximum Item Quantity|Company Maximum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyMinimumItemQuantity|Company Minimum Item Quantity|Company Minimum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyRequiredItemQuantity|Company Required Item Quantity|Company Required Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|DefaultPreferredVendor|Default Preferred Vendor|Default Preferred Vendor|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryIsManagedByWarehouse|Stock Is Managed by Warehouse|Stock Is Managed by Warehouse|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryUoMName|Stock UoM Name|Stock UoM Name|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryValuationMethod|Stock Valuation Method|Stock Valuation Method|Attribute|sap.pfdemotomekm.adm::Item|
|IsInventoryItem|Is Stock Item|Is Stock Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsPurchaseItem|Is Purchasing Item|Is Purchasing Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsSalesItem|Is Sales Item|Is Sales Item|Attribute|sap.pfdemotomekm.adm::Item|
|ItemCode|Item Code|Item Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescription|Item Description|Item Description|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescriptionAndCode|Item Description & Code|Item Description & Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemGroup|Item Group|Item Group|Attribute|sap.pfdemotomekm.adm::Item|
|ItemIsActive|Item Is Active|Item Is Active|Attribute|sap.pfdemotomekm.adm::Item|
|ItemManufacturer|Item Manufacturer|Item Manufacturer|Attribute|sap.pfdemotomekm.adm::Item|
|ItemShippingType|Item Shipping Type|Item Shipping Type|Attribute|sap.pfdemotomekm.adm::Item|
|ItemType|Item Type|Item Type|Attribute|sap.pfdemotomekm.adm::Item|
|UoMGroup|UoM Group|UoM Group|Attribute|sap.pfdemotomekm.adm::Item|
|BinLocationIsEnabled|Bin Location Is Enabled|Bin Location Is Enabled|Attribute|Warehouse|
|FederalTaxID|VAT Number|VAT Number|Attribute|Warehouse|
|IsDropShipWarehouse|Is Drop Ship Warehouse|Is Drop Ship Warehouse|Attribute|Warehouse|
|IsNettableWarehouse|Is Nettable Warehouse|Is Nettable Warehouse|Attribute|Warehouse|
|WarehouseBranchCode|Warehouse Branch Code|Warehouse Branch Code|Attribute|Warehouse|
|WarehouseBranchName|Warehouse Branch Name|Warehouse Branch Name|Attribute|Warehouse|
|WarehouseCode|Warehouse Code|Warehouse Code|Attribute|Warehouse|
|WarehouseCountry|Warehouse Country|Warehouse Country|Attribute|Warehouse|
|WarehouseDefaultBinLocation|Warehouse Default Bin Location|Warehouse Default Bin Location|Attribute|Warehouse|
|WarehouseIsActive|Is Active Warehouse|Is Active Warehouse|Attribute|Warehouse|
|WarehouseLocation|Warehouse Location|Warehouse Location|Attribute|Warehouse|
|WarehouseName|Warehouse Name|Warehouse Name|Attribute|Warehouse|
|WarehouseNameAndCode|Warehouse Name & Code|Warehouse Name & Code|Attribute|Warehouse|

### PlannedVsActualMaterialCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|ActualQuantity|Quantity from Issue/Receipt document|Actual Quantity|Measure| |
|ActualTotalValue|Value from Issue/Receipt document|Actual Total Value|Measure| |
|PlannedFixedValue|Planned Issue/Receipt value – Fixed Cost|Planned Fixed Value|Measure| |
|PlannedItemValue|Planned Issue/Receipt value – Material Cost|Planned Item Value|Measure| |
|PlannedQuantity|Planned Issue/Receipt Quantity|Planned Quantity|Measure| |
|PlannedTotalValue|Planned Issue/Receipt value – Total Time|Planned Total Value|Measure| |
|PlannedVariableValue|Planned Issue/Receipt value – Variable Value|Planned Variable Value|Measure| |
|MORXU_ItemCode_1|Item Code|Item Code|Attribute| |
|MORXU_Revision_1|Revision|Revision|Attribute| |
|MORXU_WhsCode|Warehouse|Warehouse|Attribute| |
|OINMBASE_REF|Document Number|Document Number|Attribute| |
|OINMCreatedBy|Document Entry|Document Entry|Attribute| |
|OINMDocLineNum|Document Line|Document Line|Attribute| |
|OINMTransType|Document Type|Document Type|Attribute| |
|InternalKeyRevision|InternalKeyRevision|InternalKeyRevision|Attribute|ItemDetailsRevisions|
|U_Code|Revision Code|Revision Code|Attribute|ItemDetailsRevisions|
|U_Default|Default|Default|Attribute|ItemDetailsRevisions|
|U_Description|Revision Name|Revision Name|Attribute|ItemDetailsRevisions|
|U_ILeadTime|Internal Lead Time|Internal Lead Time|Attribute|ItemDetailsRevisions|
|U_IsCostingDefault|Default for Costing|Default for Costing|Attribute|ItemDetailsRevisions|
|U_IsMrpDefault|Default for MRP|Default for MRP|Attribute|ItemDetailsRevisions|
|U_ItemCode|Item Code|Item Code|Attribute|ItemDetailsRevisions|
|U_MatPhantom|Material Phantom|Material Phantom|Attribute|ItemDetailsRevisions|
|U_Status|Status|Status|Attribute|ItemDetailsRevisions|
|U_ValidFrom|Valid From|Valid From|Attribute|ItemDetailsRevisions|
|U_ValidTo|Valid To|Valid To|Attribute|ItemDetailsRevisions|
|InternalKey|Internal Key|InternalKey|Attribute|MorItem|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorItem|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorItem|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorItem|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorItem|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorItem|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorItem|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorItem|
|MORXTbl_ItemType|Component Type for Manufacturing Order (IT-Item; HR-header; SC-scrap; CP-coproduct; SV-non stock Item)|Line Item Type|Attribute|MorItem|
|MORXU_Description|Component Item Name for Manufacturing Order|Line Item Name|Attribute|MorItem|
|MORXU_ItemCode|Component Item Code for Manufacturing Order|Line Item Code|Attribute|MorItem|
|MORXU_LineNum|Component Line Number for Manufacturing Order|Line Line Number|Attribute|MorItem|
|MORXU_Revision|Component Item Revision for Manufacturing Order|Line Revision|Attribute|MorItem|
|CompanyMaximumItemQuantity|Company Maximum Item Quantity|Company Maximum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyMinimumItemQuantity|Company Minimum Item Quantity|Company Minimum Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|CompanyRequiredItemQuantity|Company Required Item Quantity|Company Required Item Quantity|Attribute|sap.pfdemotomekm.adm::Item|
|DefaultPreferredVendor|Default Preferred Vendor|Default Preferred Vendor|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryIsManagedByWarehouse|Stock Is Managed by Warehouse|Stock Is Managed by Warehouse|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryUoMName|Stock UoM Name|Stock UoM Name|Attribute|sap.pfdemotomekm.adm::Item|
|InventoryValuationMethod|Stock Valuation Method|Stock Valuation Method|Attribute|sap.pfdemotomekm.adm::Item|
|IsInventoryItem|Is Stock Item|Is Stock Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsPurchaseItem|Is Purchasing Item|Is Purchasing Item|Attribute|sap.pfdemotomekm.adm::Item|
|IsSalesItem|Is Sales Item|Is Sales Item|Attribute|sap.pfdemotomekm.adm::Item|
|ItemCode|Item Code|Item Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescription|Item Description|Item Description|Attribute|sap.pfdemotomekm.adm::Item|
|ItemDescriptionAndCode|Item Description & Code|Item Description & Code|Attribute|sap.pfdemotomekm.adm::Item|
|ItemGroup|Item Group|Item Group|Attribute|sap.pfdemotomekm.adm::Item|
|ItemIsActive|Item Is Active|Item Is Active|Attribute|sap.pfdemotomekm.adm::Item|
|ItemManufacturer|Item Manufacturer|Item Manufacturer|Attribute|sap.pfdemotomekm.adm::Item|
|ItemShippingType|Item Shipping Type|Item Shipping Type|Attribute|sap.pfdemotomekm.adm::Item|
|ItemType|Item Type|Item Type|Attribute|sap.pfdemotomekm.adm::Item|
|UoMGroup|UoM Group|UoM Group|Attribute|sap.pfdemotomekm.adm::Item|
|BinLocationIsEnabled|Bin Location Is Enabled|Bin Location Is Enabled|Attribute|Warehouse|
|FederalTaxID|VAT Number|VAT Number|Attribute|Warehouse|
|IsDropShipWarehouse|Is Drop Ship Warehouse|Is Drop Ship Warehouse|Attribute|Warehouse|
|IsNettableWarehouse|Is Nettable Warehouse|Is Nettable Warehouse|Attribute|Warehouse|
|WarehouseBranchCode|Warehouse Branch Code|Warehouse Branch Code|Attribute|Warehouse|
|WarehouseBranchName|Warehouse Branch Name|Warehouse Branch Name|Attribute|Warehouse|
|WarehouseCode|Warehouse Code|Warehouse Code|Attribute|Warehouse|
|WarehouseCountry|Warehouse Country|Warehouse Country|Attribute|Warehouse|
|WarehouseDefaultBinLocation|Warehouse Default Bin Location|Warehouse Default Bin Location|Attribute|Warehouse|
|WarehouseIsActive|Is Active Warehouse|Is Active Warehouse|Attribute|Warehouse|
|WarehouseLocation|Warehouse Location|Warehouse Location|Attribute|Warehouse|
|WarehouseName|Warehouse Name|Warehouse Name|Attribute|Warehouse|
|WarehouseNameAndCode|Warehouse Name & Code|Warehouse Name & Code|Attribute|Warehouse|

### PlannedVsActualResourceCostOnMorQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|ActualFixedValue|Actual Cost Sum for Resource – Fixed Cost|Actual Fixed Value|Measure| |
|ActualQuantity|Actual Time Sum for Resource|Actual Quantity|Measure| |
|ActualTimeValue|Actual Cost Sum for Resource - Time Cost|Actual Time Value|Measure| |
|ActualTotalValue|Actual Cost Sum for Resource - Total Time|Actual Total Value|Measure| |
|ActualVariableValue|Actual Cost Sum for Resource - Variable Value|Actual Variable Value|Measure| |
|ActualVsPlannedQuantityDIFF|PlannedQuantity-"ActualQuantity"|Actual Vs Planned Quantity [diff]|Measure| |
|ActualVsPlannedQuantityPERC|ActualQuantity/"PlannedQuantity"|Actual Vs Planned Quantity [perc]|Measure| |
|ActualVsPlannedTotalValueDIFF|PlannedTotalValue - "ActualTotalValue"|Actual Vs Planned Total Value [diff]|Measure| |
|ActualVsPlannedTotalValuePERC|ActualTotalValue/"PlannedTotalValue"|Actual Vs Planned Total Value [perc]|Measure| |
|PlannedFixedValue|Planned Cost Sum for Resource – Fixed Cost|Planned Fixed Value|Measure| |
|PlannedQuantity|Planned Time Sum for Resource|Planned Quantity|Measure| |
|PlannedTimeValue|Planned Cost Sum for Resource – Fixed Cost|Planned Time Value|Measure| |
|PlannedTotalValue|Planned Cost Sum for Resource – Total Value|Planned Total Value|Measure| |
|PlannedVariableValue|Planned Cost Sum for Resource – Variable Cost|Planned Variable Value|Measure| |
|TBDocEntry|Document Entry|Document Entry|Attribute| |
|TBDocNum|Document Number|Document Number|Attribute| |
|TBLineNum|Document Line|Document Line|Attribute| |
|TBObject|Document Type|Document Type|Attribute| |
|InternalKey|Internal Key|InternalKey|Attribute|MorResource|
|MOR12U_OprCode|Operation Code for Manufacturing Order|Operation Code|Attribute|MorResource|
|MOR12U_Status|Operation Status Code for Manufacturing Order|Operation Status|Attribute|MorResource|
|MOR12U_StatusName|Operation Status Name for Manufacturing Order|Operation Status Name|Attribute|MorResource|
|MOR16U_LineNum|Operation Resource Line Number for Manufacturing Order|Resource Line Number|Attribute|MorResource|
|MOR16U_RscCode|Operation Resource Code for Manufacturing Order|Resource Code|Attribute|MorResource|
|MOR16U_RscType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Type|Attribute|MorResource|
|MORCreateDate|Manufacturing Order creation date|Header Create Date|Attribute|MorResource|
|MORDocEntry|Manufacturing Order Doc Entry|Header Doc Entry|Attribute|MorResource|
|MORDocNum|Manufacturing Order Doc Number|Header Doc Number|Attribute|MorResource|
|MORU_Description|Item Name for Manufacturing Order|Header Item Name|Attribute|MorResource|
|MORU_ItemCode|Item Code for Manufacturing Order|Header Item Code|Attribute|MorResource|
|MORU_Revision|Item Revision for Manufacturing Order|Header Revision|Attribute|MorResource|
|MORU_Status|Manufacturing Order Status|Header Status|Attribute|MorResource|
|OPRU_OprName|Operation Name for Manufacturing Order|Operation Name|Attribute|MorResource|
|RC1U_CostType|Resource Time Type (RT-run; ST-setup; QT-queue; TT-stock)|Resource Time Type|Attribute|MorResource|
|RSCU_RscName|Operation Resource Name for Manufacturing Order|Resource Name|Attribute|MorResource|
|U_ForceExecOrder|Force Order|Force Order|Attribute|Operation|
|U_IgnoreYield|Ignore Yield|Ignore Yield|Attribute|Operation|
|U_OprCode|Operation Code|Operation Code|Attribute|Operation|
|U_OprName|Operation Name|Operation Name|Attribute|Operation|
|U_Activity|Is Active|Is Active|Attribute|Resource|
|U_Infinite|Is Infinite|Is Infinite|Attribute|Resource|
|U_OcrCode|Cost Center|Cost Center|Attribute|Resource|
|U_OcrCode2|Cost Center 2|Cost Center 2|Attribute|Resource|
|U_OcrCode3|Cost Center 3|Cost Center 3|Attribute|Resource|
|U_OcrCode4|Cost Center 4|Cost Center 4|Attribute|Resource|
|U_OcrCode5|Cost Center 5|Cost Center 5|Attribute|Resource|
|U_Project|Project|Project|Attribute|Resource|
|U_ResActCode|Resource Account Code|Resource Account Code|Attribute|Resource|
|U_RscCode|Resource Code|Resource Code|Attribute|Resource|
|U_RscGrpCode|Resource Group Code|Resource Group Code|Attribute|Resource|
|U_RscGrpName|Resource Group Name|Resource Group Name|Attribute|Resource|
|U_RscName|Resource Name|Resource Name|Attribute|Resource|
|U_RscType|Resource Type|Resource Type|Attribute|Resource|
|U_RWhsCode|Receipt Warehouse|Receipt Warehouse|Attribute|Resource|
|U_WhsCode|Warehouse|Warehouse|Attribute|Resource|

### QctQuery

|COLUMN_NAME|Description|COLUMN_CAPTION|DIMENSION_TYPE|SHARED|
|:----|:----|:----|:----|:----|
|NbrOfBatches|NbrOfBatches|NbrOfBatches|Measure| |
|NbrOfComplaints|NbrOfComplaints|NbrOfComplaints|Measure| |
|NbrOfDefects|NbrOfDefects|NbrOfDefects|Measure| |
|NbrOfNcmrs|NbrOfNcmrs|NbrOfNcmrs|Measure| |
|NbrOfPools|NbrOfPools|NbrOfPools|Measure| |
|NbrOfResources|NbrOfResources|NbrOfResources|Measure| |
|NbrOfSerialNumbers|NbrOfSerialNumbers|NbrOfSerialNumbers|Measure| |
|NbrOfTests|NbrOfTests|NbrOfTests|Measure| |
|NbrOfUniqueBatches|NbrOfUniqueBatches|NbrOfUniqueBatches|Measure| |
|NbrOfUniqueDefects|NbrOfUniqueDefects|NbrOfUniqueDefects|Measure| |
|Batch_ABTU_AdmDate|Batch Admission Date|Batch Admission Date|Attribute|QctBatch|
|Batch_ABTU_BestBefDate|Batch Best Before Date|Batch Best Before Date|Attribute|QctBatch|
|Batch_ABTU_ExpiryDate|Batch Expiry Date|Batch Expiry Date|Attribute|QctBatch|
|Batch_ABTU_LotNumber|Batch Attribute 2|Batch Attribute 2|Attribute|QctBatch|
|Batch_ABTU_MnfSerial|Batch Attribute 1|Batch Attribute 1|Attribute|QctBatch|
|Batch_ABTU_Origin|Batch Origin|Batch Origin|Attribute|QctBatch|
|Batch_ABTU_StatusName|Batch Status Name|Batch Status Name|Attribute|QctBatch|
|Batch_ABTU_SupNumber|Batch Supplier Batch|Batch Supplier Batch|Attribute|QctBatch|
|Batch_ABTU_VndDate|Batch Vendor Manuf. Date|Batch Vendor Manuf. Date|Attribute|QctBatch|
|Batch_U_Batch|Batch Number|Batch Number|Attribute|QctBatch|
|IntKeyBatch|IntKeyBatch|IntKeyBatch|Attribute|QctBatch|
|TestClosedDate|Test Closed Date|Test Closed Date|Attribute|QctClosedDate|
|TestClosedMonth|Test Closed Month|Test Closed Month|Attribute|QctClosedDate|
|TestClosedMonthINT|Test Closed Month INT|Test Closed Month INT|Attribute|QctClosedDate|
|TestClosedQuarter|Test Closed Quarter|Test Closed Quarter|Attribute|QctClosedDate|
|TestClosedQuarterINT|Test Closed Quarter INT|Test Closed Quarter INT|Attribute|QctClosedDate|
|TestClosedWeek|Test Closed Week|Test Closed Week|Attribute|QctClosedDate|
|TestClosedWeekINT|Test Closed Week INT|Test Closed Week INT|Attribute|QctClosedDate|
|TestClosedYear|Test Closed Year|Test Closed Year|Attribute|QctClosedDate|
|TestClosedYearINT|Test Closed Year INT|Test Closed Year INT|Attribute|QctClosedDate|
|Complaint_U_ComplaintType|Complaint Type|Complaint Type|Attribute|QctComplaint|
|Complaint_U_ComplaintTypeName|Complaint Type Name|Complaint Type Name|Attribute|QctComplaint|
|Complaint_U_Status|Complaint Status|Complaint Status|Attribute|QctComplaint|
|Complaint_U_StatusName|Complaint Status Name|Complaint Status Name|Attribute|QctComplaint|
|IntKeyCmpl|IntKeyCmpl|IntKeyCmpl|Attribute|QctComplaint|
|TestCreatedDate|Test Created Date|Test Created Date|Attribute|QctCreatedDate|
|TestCreatedMonth|Test Created Month|Test Created Month|Attribute|QctCreatedDate|
|TestCreatedMonthINT|Test Created Month INT|Test Created Month INT|Attribute|QctCreatedDate|
|TestCreatedQuarter|Test Created Quarter|Test Created Quarter|Attribute|QctCreatedDate|
|TestCreatedQuarterINT|Test Created Quarter INT|Test Created Quarter INT|Attribute|QctCreatedDate|
|TestCreatedWeek|Test Created Week|Test Created Week|Attribute|QctCreatedDate|
|TestCreatedWeekINT|Test Created Week INT|Test Created Week INT|Attribute|QctCreatedDate|
|TestCreatedYear|Test Created Year|Test Created Year|Attribute|QctCreatedDate|
|TestCreatedYearINT|Test Created Year INT|Test Created Year INT|Attribute|QctCreatedDate|
|Defect_U_DefCode|Defect Code|Defect Code|Attribute|QctDefect|
|IntKeyDefect|IntKeyDefect|IntKeyDefect|Attribute|QctDefect|
|IntKeyItem|IntKeyItem|IntKeyItem|Attribute|QctItem|
|QctItem_U_ActualQty|QctItem Actual Qty|QctItem Actual Qty|Attribute|QctItem|
|QctItem_U_ItemCode|QctItem Item Code|QctItem Item Code|Attribute|QctItem|
|QctItem_U_PlannedQty|QctItem Planned Qty|QctItem Planned Qty|Attribute|QctItem|
|QctItem_U_WhsCode|QctItem Whs Code|QctItem Whs Code|Attribute|QctItem|
|IntKeyItemProperty|IntKeyItemProperty|IntKeyItemProperty|Attribute|QctItemProperty|
|ItemProperty_U_Expression|ItemProperty Expression|ItemProperty Expression|Attribute|QctItemProperty|
|ItemProperty_U_PassFail|ItemProperty Pass Fail|ItemProperty Pass Fail|Attribute|QctItemProperty|
|ItemProperty_U_PassFailName|ItemProperty Pass Fail Name|ItemProperty Pass Fail Name|Attribute|QctItemProperty|
|ItemProperty_U_PrpCode|ItemProperty Property Code|ItemProperty Property Code|Attribute|QctItemProperty|
|ItemProperty_U_RangeValueFrom|ItemProperty Range Value From|ItemProperty Range Value From|Attribute|QctItemProperty|
|ItemProperty_U_RangeValueTo|ItemProperty Range Value To|ItemProperty Range Value To|Attribute|QctItemProperty|
|ItemProperty_U_RefCode|ItemProperty Reference Code|ItemProperty Reference Code|Attribute|QctItemProperty|
|ItemProperty_U_RsnCode|ItemProperty Reason Code|ItemProperty Reason Code|Attribute|QctItemProperty|
|ItemProperty_U_TestedRefCode|ItemProperty Tested Reference Code|ItemProperty Tested Reference Code|Attribute|QctItemProperty|
|ItemProperty_U_TestedValue|ItemProperty Tested Value|ItemProperty Tested Value|Attribute|QctItemProperty|
|IntKeyNcmr|IntKeyNcmr|IntKeyNcmr|Attribute|QctNcmr|
|Ncmr_U_Status|Ncmr Status|Ncmr Status|Attribute|QctNcmr|
|Ncmr_U_StatusName|Ncmr Status Name|Ncmr Status Name|Attribute|QctNcmr|
|IntKeyPool|IntKeyPool|IntKeyPool|Attribute|QctPool|
|Pool_DocNum|Pool Doc Num|Pool Doc Num|Attribute|QctPool|
|Pool_Series|Pool Series|Pool Series|Attribute|QctPool|
|Pool_U_Status|Pool Status|Pool Status|Attribute|QctPool|
|Pool_U_StatusName|Pool Status Name|Pool Status Name|Attribute|QctPool|
|Pool_U_TestStatus|Pool Test Status|Pool Test Status|Attribute|QctPool|
|Pool_U_TestStatusName|Pool Test Status Name|Pool Test Status Name|Attribute|QctPool|
|IntKeyResource|IntKeyResource|IntKeyResource|Attribute|QctResource|
|Resource_U_ActualQty|Resource Actual Qty|Resource Actual Qty|Attribute|QctResource|
|Resource_U_PlannedQty|Resource Planned Qty|Resource Planned Qty|Attribute|QctResource|
|Resource_U_RscCode|Resource Code|Resource Code|Attribute|QctResource|
|Resource_U_WhsCode|Resource Whs Code|Resource Whs Code|Attribute|QctResource|
|IntKeySerNum|IntKeySerNum|IntKeySerNum|Attribute|QctSerialNumber|
|SerNum_SRN_MnfDate|SerNum Manuf. Date|SerNum Manuf. Date|Attribute|QctSerialNumber|
|SerNum_U_BatchId|SerNum Lot Number|SerNum Lot Number|Attribute|QctSerialNumber|
|SerNum_U_IntrSerial|SerNum Serial Number|SerNum Serial Number|Attribute|QctSerialNumber|
|SerNum_U_SuppSerial|SerNum Number Manuf. Serial No.|SerNum Number Manuf. Serial No.|Attribute|QctSerialNumber|
|IntKeyTest|IntKeyTest|IntKeyTest|Attribute|QctTest|
|Test_DocNum|Test Doc Num|Test Doc Num|Attribute|QctTest|
|Test_Series|Test Series|Test Series|Attribute|QctTest|
|Test_U_BpCode|Test Business Partner Code|Test Business Partner Code|Attribute|QctTest|
|Test_U_Description|Test Description|Test Description|Attribute|QctTest|
|Test_U_InsCode|Test Inspector|Test Inspector|Attribute|QctTest|
|Test_U_InvMove|Test Inventory Movements|Test Inventory Movements|Attribute|QctTest|
|Test_U_ItemCode|Test Item Code|Test Item Code|Attribute|QctTest|
|Test_U_Ncmr|Test Ncmr|Test Ncmr|Attribute|QctTest|
|Test_U_NcmrInsCode|Test Ncmr Inspector Code|Test Ncmr Inspector Code|Attribute|QctTest|
|Test_U_RevCode|Test Revision Code|Test Revision Code|Attribute|QctTest|
|Test_U_Status|Test Status|Test Status|Attribute|QctTest|
|Test_U_StatusName|Test Status Name|Test Status Name|Attribute|QctTest|
|Test_U_TestProtocolNo|Test Protocol No|Test Protocol No|Attribute|QctTest|
|Test_U_TestStatus|Test Test Status|Test Test Status|Attribute|QctTest|
|Test_U_TestStatusName|Test Test Status Name|Test Test Status Name|Attribute|QctTest|
|Test_U_TransType|Test Transation Type|Test Transation Type|Attribute|QctTest|
|IntKeyTestResult|IntKeyTestResult|IntKeyTestResult|Attribute|QctTestResult|
|TestResult_U_Expression|TestResult Expression|TestResult Expression|Attribute|QctTestResult|
|TestResult_U_LineNum|TestResult Line Number|TestResult Line Number|Attribute|QctTestResult|
|TestResult_U_PassFail|TestResult Pass Fail|TestResult Pass Fail|Attribute|QctTestResult|
|TestResult_U_PassFailName|TestResult Pass Fail Name|TestResult Pass Fail Name|Attribute|QctTestResult|
|TestResult_U_PrpCode|TestResult Property Code|TestResult Property Code|Attribute|QctTestResult|
|TestResult_U_RangeValueFrom|TestResult Value From|TestResult Value From|Attribute|QctTestResult|
|TestResult_U_RangeValueTo|TestResult Value To|TestResult Value To|Attribute|QctTestResult|
|TestResult_U_RefCode|TestResult Reference Code|TestResult Reference Code|Attribute|QctTestResult|
|TestResult_U_RsnCode|TestResult Reason Code|TestResult Reason Code|Attribute|QctTestResult|
|TestResult_U_TestedRefCode|TestResult Tested Reference Code|TestResult Tested Reference Code|Attribute|QctTestResult|
|TestResult_U_TestedValue|TestResult Tested Value|TestResult Tested Value|Attribute|QctTestResult|
|TestResult_U_UnitOfMeasure|TestResult UoM|TestResult UoM|Attribute|QctTestResult|
