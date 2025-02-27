---
sidebar_position: 4
---

# Example 3 Working with Technology

This section explains how to add and manage hierarchical objects such as Operation Routing or Bill of Materials (BOM) using the ProcessForce API. Hierarchical data in ProcessForce follows a structured approach where objects like Operations, Resources, and Routing are interdependent.

---

**Short Information about Hierarchical Data in ProcessForce Technology**

When adding Operations to a Resource, follow these steps:

1. Make sure that you are on an empty operation row:

    ```csharp
    //Set current row to last position
    rtg.Operations.SetCurrentLine(rtg.Operations.Count-1)
    //Check if this line is not empty
    if(!string.IsNullOrEmpty(rtg.Operations.U_OprCode))
        rtg.Operations.Add()
    ```

2. Set the U_OprCode value of the Operation you want to add. After setting this value, all correspondent information is added to Routing (Operation Properties, Resources, Resource Properties with the default values taken from Operation object), and filled U_RtgOprCode will get the new value ( U_OprCode +U_RtgOprCode is a unique key for this operation):

    ```csharp
    rtg.Operations.U_OprCode = "Planing";
    ```

3. If you want to add something at a second or more level (for example, Routing-Operation-Resources), you must first set the parent information:

    ```csharp
    rtg.OperationResources.U_RtgOprCode = 1;
    ```

    Once the parent is set, you can assign a new resource to the operation. All child elements and default values will be populated automatically:

    ```csharp
    rtg.OperationResources.U_RscCode = "plane01";
    ```

4. To replace an existing resource, simply update its U_RscCode. The API will automatically remove the previous data and update it with the new information.

    - **Create a New Routing**
        - Create a routing object using the `CreatePFObject` method.
        - Set Mandatory header Information.
        - Set Child Data.
        - Add an object to the database.

            ```csharp
            IRouting rtg = company.CreatePFObject(CompuTec.ProcessForce.API.Core.ObjectTypes.Routing);
            rtg.U_RtgCode = "DIRtg1";
            rtg.U_RtgName = "Test Routing";
            /// Adding Operation To Resource
            /// Notice that after setting this code, all relative resources and other information will automatically load into the routing
            /// and U_RtgOprCode  will automatically receive the value that will be a key for this specific operation
            rtg.Operations.U_OprCode = "Planing";
            var operationKey = rtg.Operations.U_RtgOprCode;
            ///now we will try to add another resource for this specific operation.
            ///
            rtg.OperationResources.SetCurrentLine(rtg.OperationResources.Count - 1);
            if (!string.IsNullOrEmpty(rtg.OperationResources.U_RscCode))//Check if last line in udoobject is empty if not add new line
                rtg.OperationResources.Add();

            ///First set operation Key for with you want to add resource
            rtg.OperationResources.U_RtgOprCode = operationKey;
            //Again after setting ResourceCode all related information will be loaded
            rtg.OperationResources.U_RscCode = "plane01";
            ///U_RtgOprRscCode and U_RtgOprCode will be a key for OperationResourceProperty
            ///Add Another Operation
            rtg.Operations.Add();
            rtg.Operations.U_OprCode = "Cutting";
            rtg.Add();
            ```

    - **Updating BillOfMaterial Setting**
        - Create `BillOfMaterialObject`
        - Load data from the database using the `GetByItemCodeAndRevision` method
        - Add new Routing (note that setting `bom.Routing.U_RtgCode` will cause loading of all data to Bill of Material object)
        - Update Object

            ```csharp
            IBillOfMaterial bom = company.CreatePFObject(CompuTec.ProcessForce.API.Core.ObjectTypes.BillOfMaterial);
            if (bom.GetByItemCodeAndRevision("Chair01", "") == 0)
                {
                    bom.Routings.SetCurrentLine(bom.Routings.Count - 1);
                    if (!string.IsNullOrEmpty(bom.Routings.U_RtgCode))
                        bom.Routings.Add();
                    bom.Routings.U_RtgCode = "DIRtg1";
                    bom.Routings.U_IsDefault = "Y";
                    bom.Update();
                }
            else
                Console.WriteLine("Bill of material was not found.");
            ```

---
