---
sidebar_position: 2
---

# CompuTec ProcessForce API Performance Tips & Tricks

Working with large objects like Manufacturing Orders or Bills of Materials (BOM) in CompuTec ProcessForce can be challenging, especially when maintaining optimal performance. To help you get the most out of the CompuTec ProcessForce API, we've compiled a set of best practices and performance-enhancing techniques. These strategies will help speed up data retrieval, optimize synchronization, and improve efficiency when handling bulk operations.

---

## Class QueryManager

Instead of relying on SAP’s default QueryManager, consider using the CompuTec ProcessForce QueryManager class for better performance. When no active transaction is running, our QueryManager provides faster database queries. If a transaction is active, it automatically switches to the SAP version, ensuring optimal speed while maintaining system stability.

## Manufacturing Order and Bill of Materials Synchronization

CompuTec ProcessForce synchronizes Manufacturing Orders and Bill of Materials with their SAP Business One counterparts by default. While this ensures data consistency, it can slow down performance. If synchronization is not essential for your business logic, consider disabling it in General Settings to improve efficiency. However, evaluate the impact before making changes to avoid disruptions in your workflow.

## Direct Data Access

For read operations, Direct Data Access allows you to fetch data directly from the database, bypassing certain API layers for better speed. However, this feature requires proper configuration of your license server. Follow the detailed setup instructions, or contact your CompuTec solutions provider if you need assistance.

## Bulk Functionality

If you are reading many objects in a scenario, then you should consider using the Bulk functionality. This speeds up things in the case of using many objects (like tens or hundreds). But noticeable performance benefits can be observed even for three objects.
An example of how to use the Bulk functionality is below. Please note that setting up a direct data access connection is necessary for this.

The following example creates a list of ManufacturingOrderItems objects that have a BillOfMaterial object from the IManufacturingOrder collection and then takes the whole list of such BOM objects at once.

Object Items in the first line contain Items object from ManufacturingOrder UDO object and function GetBomCode at the end of the second line is returning Code of Bill of Material object for the specified U_ItemCode and U_Revision.

```csharp
var list = Items.Where(p => (p as ManufacturingOrderItems).IsRowFilled() && ItemUtils.Technology.BillOfMaterialExists(Token, p.U_ItemCode, p.U_Revision));
var boms = BulkUdoConverter.GetBulkObjects<string, IBillOfMaterial>(Token, ObjectTypes.BillOfMaterial, list.Select(p => GetBomCode(Token, p.U_ItemCode, p.U_Revision)));
```

## U_ItemCode and U_Revision filling

Better performance could be obtained by changing the implementation filling of U_ItemCode and U_Revision into filling U_BOMCode and U_ReferenceDicitionary properties of Manufacturing Order UDO.

Function GetBomCode at the end of the second line returns the Code of Bill of Material object for the specified U_ItemCode and U_Revision.

Example:

```csharp
Dictionary<Tuple<string, string>, string> bomCodes = new Dictionary<Tuple<string, string>, string>();
Dictionary<string, CompuTec.ProcessForce.API.Documents.BillOfMaterials.IBillOfMaterial> ReferenceDictionary = new Dictionary<string, API.Documents.BillOfMaterials.IBillOfMaterial>();

for (int i = 0; i < howManyRows; i++)
{
    string itemcode = dataTable.GetValue("ItemCode", i);
    string revision = dataTable.GetValue("Revision", i);

    if (!string.IsNullOrEmpty(itemcode) & !string.IsNullOrEmpty(revision))
    {
        Tuple<string, string> itemCodeAndRevision = new Tuple<string, string>(itemcode, revision);
        if (!bomCodes.ContainsKey(itemCodeAndRevision))
        {
            bomCodes.Add(itemCodeAndRevision), GetBomCode(itemCodeAndRevision.Item1, itemCodeAndRevision.Item2);
        }
    }
}

var boms = BulkUdoConverter.GetBulkObjects<string, IBillOfMaterial>("", ObjectTypes.BillOfMaterial, bomCodes.Values.Distinct().ToList());
foreach(IBillOfMaterial bom in boms)
ReferenceDictionary.Add(bom.Code, bom);

for (int i = 0; i < howManyRows; i++)
{
    CompuTec.ProcessForce.API.Documents.ManufacturingOrder.ManufacturingOrder udo = UdoFactoryClass.CreateDocument(string.Empty, ObjectTypes.ManufacturingOrder);

    udo.ReferenceDictionary = ReferenceDictionary;

    //udo.U_ItemCode = itemCode;
    //if (!string.IsNullOrEmpty(revision))
    //{
    //udo.U_Revision = revision;

    udo.U_BOMCode = bomCodes[new Tuple<string, string>(itemCode, revision)]
};

```

As you can see above, there is no need to set U_itemCode or U_Revision field. Because setting U_ItemCode is slow, we want to avoid it by setting up BOMCode and ReferenceDictionary.

Please note that this issue is not as stable as the standard way. It is advisable to wrap this code in a try-catch block and also verify if there is a BOMCode in the generated list. If BOMCode is absent, then set U_ItemCode. If BOMCode is present, then set BOMCode.

---
