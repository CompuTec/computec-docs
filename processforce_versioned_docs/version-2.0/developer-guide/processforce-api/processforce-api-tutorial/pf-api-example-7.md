---
sidebar_position: 8
---

# Example 7: Create Time Bookings Document

Th eexample below logs a Time Booking entry for each Resource and Resource type associated with a Manufacturing Order.

```csharp
IManufacturingOrder mor = pfCompany.CreatePFDocument(ObjectTypes.ManufacturingOrder);
mor.GetByKey("14");
IOperationTimeRecording ttr = pfCompany.CreatePFDocument(ObjectTypes.OperationTimeRecording);
ttr.U_DocData=DateTime.Today;
foreach (var item in mor.RoutingOperationResources.Where(p =>
        !string.IsNullOrEmpty(p.U_RscCode)
        && p.U_RscType != ResourceType.Tool
        && p.U_Active == YesNoType.Yes
        ))
{
if (item.U_QueueTotal > TimeSpan.Zero)
    { 
        ttr.Lines.U_BaseDocNum = mor.DocNum.ToString(); 
        ttr.Lines.U_BaseEntry = mor.DocEntry; 
        ttr.Lines.U_BaseLineNum = item.U_LineNum;  
        ttr.Lines.U_OprCode = item.U_OprCode;                                            
        ttr.Lines.U_RscCode = item.U_RscCode;      
        ttr.Lines.U_TimeType = RecordingTimeType.QueueTime; 
        ttr.Lines.U_StartDate = item.U_QueueStartDate;
        ttr.Lines.U_EndDate = item.U_QueueEndDate; 
        ttr.Lines.U_StartTime = item.U_QueueStartTime; 
        ttr.Lines.U_EndTime = item.U_QueueEndTime; 
        ttr.Lines.U_WorkingHours = timetoadd ;//WorkingHours is Effort * Number of resources 
        ttr.Lines.CalculateDuration(); 
        ttr.Lines.Add(); 
    }
if (item.U_SetupTotal > TimeSpan.Zero)
    { 
        ttr.Lines.U_BaseDocNum = mor.DocNum.ToString(); 
        ttr.Lines.U_BaseEntry = mor.DocEntry; 
        ttr.Lines.U_BaseLineNum = item.U_LineNum; 
        ttr.Lines.U_OprCode = item.U_OprCode; 
        ttr.Lines.U_RscCode = item.U_RscCode; 
        ttr.Lines.U_TimeType = RecordingTimeType.SetupTime; 
        ttr.Lines.U_StartDate = item.U_SetupStartDate; 
        ttr.Lines.U_EndDate = item.U_SetupEndDate; 
        ttr.Lines.U_StartTime = item.U_SetupStartTime; 
        ttr.Lines.U_EndTime = item.U_SetupEndTime; 
        ttr.Lines.U_WorkingHours = timetoadd;//WorkingHours is Effort * Number of resources ; 
        ttr.Lines.CalculateDuration(); 
        ttr.Lines.Add(); 
    }
if (item.U_RunTotal > TimeSpan.Zero)
    {
        ttr.Lines.U_BaseDocNum = mor.DocNum.ToString();
        ttr.Lines.U_BaseEntry = mor.DocEntry;
        ttr.Lines.U_BaseLineNum = item.U_LineNum;
        ttr.Lines.U_OprCode = item.U_OprCode;
        ttr.Lines.U_RscCode = item.U_RscCode;
        ttr.Lines.U_TimeType = RecordingTimeType.RunTime;
        ttr.Lines.U_StartDate = item.U_RunStartDate;
        ttr.Lines.U_EndDate = item.U_RunEndDate;
        ttr.Lines.U_StartTime = item.U_RunStartTime;
        ttr.Lines.U_EndTime = item.U_RunEndTime;
        ttr.Lines.U_WorkingHours = timetoadd;//WorkingHours is Effort * Number of resources ;
        if (item.U_RunRate == RateType.PiecesPerHour || item.U_RunRate == RateType.PiecesPerMinute || item.U_RunRate == RateType.PiecesPerSecond || item.U_RunRate ==  
            RateType.SecondsPerPiece || item.U_RunRate == RateType.MinutesPerPiece || item.U_RunRate == RateType.HoursPerPiece)
        { 
            ttr.Lines.U_NrOfResources = item.U_NrOfResources; 
        }
        ttr.Lines.CalculateDuration();
        ttr.Lines.Add();
}
if (item.U_StockTotal > TimeSpan.Zero)
    {
         ttr.Lines.U_BaseDocNum = mor.DocNum.ToString();
        ttr.Lines.U_BaseEntry = mor.DocEntry;
        ttr.Lines.U_BaseLineNum = item.U_LineNum; 
        ttr.Lines.U_OprCode = item.U_OprCode; ttr.Lines.U_RscCode = item.U_RscCode; 
        ttr.Lines.U_TimeType = RecordingTimeType.StockTime; 
        ttr.Lines.U_StartDate = item.U_StockStartDate; 
        ttr.Lines.U_EndDate = item.U_StockEndDate; 
        ttr.Lines.U_StartTime = item.U_StockStartTime;
        ttr.Lines.U_EndTime = item.U_StockEndTime; 
        ttr.Lines.U_WorkingHours = timetoadd;//WorkingHours is Effort * Number of resources ; 
        ttr.Lines.CalculateDuration(); 
        ttr.Lines.Add(); 
    }
}
tt.Add();
```

---
