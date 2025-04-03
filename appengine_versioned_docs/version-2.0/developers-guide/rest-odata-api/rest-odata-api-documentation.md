---
sidebar_position: 1
---

# REST/OData API Documentation

The REST/OData API provides a powerful interface for integrating with the system, allowing seamless data retrieval and transaction execution. The API documentation is dynamically generated and can be accessed through the API documentation panel in the main menu.

---

To view the on-demand REST/OData API Swagger documentation, navigate to the main menu and select the API documentation panel:

![Main Menu](./media/rest-odata-api-documentation/app-engine-main-menu.webp)

An example view of the documentation:

![API](./media/rest-odata-api-documentation/processforce-api.webp)

![API](./media/rest-odata-api-documentation/processforce-api-2.webp)

![API](./media/rest-odata-api-documentation/processforce-api-3.webp)

## Steps to Create Pick Order or Pick Receipt using webAPI Calls

- Create pick order or pick receipt through webAPI requires 2 steps:

        - Create an empty document by calling the end point:
                - /ProcessForce/CreatePickOrderForProductionIssue and 
                - /ProcessForce/CreatePickReceiptForProductionReceipt respectively using method "POST"
        - Update the created document with necessary details using patch calling the end point:
                -  /ProcessForce/PickOrder(DocEntry) or 
                - /ProcessForce/PickReceipt(DocEntry)

- To create a pick order for an operation, users need to set operation details while creating the document. Use the following request template:

        ```java
        {"IssueType":"Operations","LineNumbers":  {"<MO DocNum>": [
                <U_LineNum of the operation from @CT_PF_MOR12 table>
            ]
        },"ManufacturingOrderDocEntries":
        [ "<MO DocNum>"]
        }
        ```

**API usage examples in Postman**

To learn more, click the link [API usage examples in Postman](https://github.com/CompuTec/appengine-examples/tree/main/postman)

---
