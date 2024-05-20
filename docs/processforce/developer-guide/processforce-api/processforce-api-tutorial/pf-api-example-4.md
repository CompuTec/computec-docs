---
sidebar_position: 5
---

# Example 4: Working with Manufacturing Orders

How to work with Manufacturing Orders using ProcessForce API

## Adding New Manufacturing Order

1. Create IManufacturingOrder Object

    ```csharp
    IManufacturingOrder mor = company.CreatePFObject(CompuTec.ProcessForce.API.Core.ObjectTypes.ManufacturingOrder);
    ```

2. Set which BOM object you want to copy from:

    ```csharp
    //Set ItemCode if BillOfmaterial does not have a Revision 
    mor.U_ItemCode = "Chair01";
    //or Get Code of BillOFMaterial
    SAPbobsCOM.Recordset rec = company.SapCompany.GetBusinessObject(SAPbobsCOM.BoObjectTypes.BoRecordset);
          rec.DoQuery(string.Format("Select Code from [@CT_PF_OBOM] where U_ItemCode=N'{0} and U_Revision=N'{1}'", "Table01", "Rev01")); 
          mor.U_BOMCode = rec.Fields.Item(0).Value;
    ```

3. Set quantity and required date:

    ```csharp
    mor.U_Quantity = 100; 
    mor.U_RequiredDate = DateTime.Today.AddDays(20);
    ```

4. Add a document to a database:

    ```csharp
    mor.Add();
    ```

## Updating Manufacturing Order

1. Create an IManufacturingOrder object:

    ```csharp
    IManufacturingOrder mor = company.CreatePFObject(CompuTec.ProcessForce.API.Core.ObjectTypes.ManufacturingOrder);
    ```

2. Load from the database:

    ```csharp
    //parameter for GetBykey is DocEntry
    mor.GetByKey("4");
    ```

3. Change the values you require in this object:

    ```csharp
    mor.U_PlannedStartDate = DateTime.Today.AddDays(3);
    ///Calculate MOR Times
    mor.CalculateManufacturingTimes();
    mor.U_Status = ManufacturingOrderStatus.Released;
    ///Set Accept Lower Quantity for all backflushItems
    ///
    var itemsToChange = mor.Items.Where(p => p.U_IssueType == "B");
    foreach (var item in itemsToChange)
    {
        item.U_AcptLowerQty = YesNoType.Yes;
    }
    ```

4. Call update method:

    ```csharp
    mor.Update()
    ```
