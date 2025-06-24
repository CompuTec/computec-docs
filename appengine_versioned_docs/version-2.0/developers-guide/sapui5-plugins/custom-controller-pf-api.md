---
sidebar_position: 11
---

# Custom Controller that uses ProcessForce API

This guide demonstrates how to create a custom API controller within your plugin that interacts with ProcessForce objects and logic. Specifically, we'll build a controller that schedules multiple Manufacturing Orders (MOs) using the ProcessForce API.

## Creating Custom Controller

1. Launch your plugin project in Visual Studio.
2. Add a new class named PF_SchedulingController.cs within the Controllers/Api directory.

    ![List](./media/custom-controller-pf-api/cc-pf-api-01.webp)
3. This controller should inherit from CompuTec.AppEngine.Base.Infrastructure.Controllers.API.AppEngineSecureController to ensure user authentication, which is required when working with SAP documents.

    SalesOrderController.cs

    ```csharp
    using CompuTec.AppEngine.Base.Infrastructure.Controllers.API;

    namespace CompuTec.AppEngine.FirstPlugin.Controllers.Api
    {
        public class PF_SchedulingController: AppEngineSecureController
        {

        }
    }
    ```

4. Add a POST method that accepts a list of integers as a parameter. These integers represent the DocEntry values of the Manufacturing Orders to be scheduled.

    GetSalesOrder

    ```csharp
    [HttpPost]

            [Route("SchduleMor")]
            public IHttpActionResult SchduleMor([FromBody] List<int> AllRelatedMorsDocEntries)
            {
                bool saving = false;
                //iF YOU NEED pf COMPANY PLEASE USE THIS
                var pfCompany = Session.GetCompany<IProcessForceCompany>();


                // you are already connected
                List<IManufacturingOrder> listOfMorsToBeAdded = BulkUdoConverter.GetBulkObjects<IManufacturingOrder, int>(Session.Token, ObjectTypes.ManufacturingOrder, AllRelatedMorsDocEntries);
                //GetListOfMors
                //You can manipulate Manufacturing orders now by iterating them and injest all the logic
                foreach (var item in listOfMorsToBeAdded)
                {
                    item.U_SchedulingMtd = PF_MORSchedulingMthd.Forward;
                    item.U_PlannedStartDate = DateTime.Today.AddDays(1);
                    item.U_PlannedStartTime = item.U_PlannedStartDate;
                }

                // AllRelatedMorsDocEntries this is a list that contains docentry of MORS to be scheduled on one run
                var sm = new CompuTec.ProcessForce.API.Scheduling.ScheduleManager(Session.Token);

                MultiScheduleParameters param =
                        Activator.CreateInstance(typeof(MultiScheduleParameters),
                        System.Reflection.BindingFlags.NonPublic |
                            System.Reflection.BindingFlags.Instance,
                        null, new object[] { Session.Token }, null) as MultiScheduleParameters;

                listOfMorsToBeAdded.ForEach(m => param.Add(m));
                param.UpdateParents();
                var scheduledMors = sm.Schedule(param);
                //save the mor list scheduledMors
                if (saving)
                {
                    foreach (var item in listOfMorsToBeAdded)
                    {
                        item.Update();
                    }
                }

                return Ok("");
            }
    ```

5. The method will now be visible and accessible in the Swagger UI for testing and documentation purposes.

    ![List](./media/custom-controller-pf-api/cc-pf-api-02.webp)
6. Calling Controller:

    - Address: URL of the CompuTec AppEngine and controller
    - HTTP method: POST
    - Content-Type: json
    - Body content:

    ```json
    [11,6,7,8]
    ```

:::note
To use the IProcessForceCompany object, retrieve it from the session using the following line:

`var pfCompany = Session.GetCompany<IProcessForceCompany>();`
:::

---
