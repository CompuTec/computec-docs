---
sidebar_position: 5
---

# User Defined Fields in PowerShell Scripts

When working with CompuTec ProcessForce objects in PowerShell scripts, you may need to assign values to User Defined Fields (UDFs). This guide explains the correct syntax and best practices for setting UDF values, ensuring proper data handling and script execution.

---

## General Rule

To assign a value to a User Defined Field in CompuTec ProcessForce object, use the following syntax:

```powershell
$PFObject.UDFItems.Item("U_UDF1").Value =  'some value';
```

Therefore instead of (example for U_LineNo field on Manufacturing Order's header):

```powershell
$mo.U_LineNo = $csvItem.LineNo
```

It should be:

```powershell
$mo.UDFItems.Item("U_LineNo").Value = $csvItem.LineNo
```

The same pattern applies to all the other User Defined Fields (UDFs).

## Hour Type User Defined Fields

If a UDF represents time values (Hour type), you must explicitly convert the value from the .csv file to DateTime format.

For example, if the .csv file contains a time value in the HH:MM format, you should cast it as follows:

```powershell
$mo.UDFItems.Item("U_PlannedHours").Value = [datetime] $csvItem.PlannedHours
```

---
