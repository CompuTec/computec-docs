# ProcessForce API Performance Tips & Tricks

Since objects like Manufacturing Orders or Bill of Materials can be massive, keeping smooth performance when operating on them can be challenging. Here, you'll find several recommendations for enhancing performance when utilizing the ProcessForce API.

## Class QueryManager

Consider utilizing our QueryManager class instead of the one offered by SAP. When there's no ongoing transaction, employing our QueryManager should yield faster retrieval of information from the database. In cases where a transaction is active during the QueryManager function call, it will automatically revert to the SAP version, often expediting the process without any associated risks.

## Manufacturing Order and Bill of Materials Synchronization

A synchronization mechanism is implemented for objects like Manufacturing Order or Bill Of Materials. When you create or update our Manufacturing Order object, the Production Order object (SAP) is created with the same data. In the same way, when you add or update our Bill of Materials object, the SAP Business One version of this object is created. This synchronization plays a vital role in the proceeding of our objects, so you might consider turning this option off. You can find the settings responsible for that in General Settings.

But first, please try to determine if the mechanism is needed in business logic in your case.

## Direct Data Access

For now, direct data access works only for reading data from the database. You must configure your license server properly to use direct data access. Refer to the detailed instructions available here for guidance on its usage. Implementing this should boost performance. If you cannot access the mentioned website, please reach out to your CompuTec solutions provider for assistance.

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

Please note that this issue is not as stable as the standard way. It's advisable to wrap this code in a try-catch block and also verify if there's a BOMCode in the generated list. If BOMCode is absent, then set U_ItemCode. If BOMCode is present, then set BOMCode.
