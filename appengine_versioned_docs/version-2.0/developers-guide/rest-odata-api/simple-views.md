---
sidebar_position: 4
---

# Simple Views

CompuTec AppEngine Simple View is an OData v4-based tool designed to provide a unified and efficient way to consume data directly from the database. It simplifies data retrieval, making it easier to integrate with Web API clients or user interfaces

---

## Key Features

- **Simplified Data Consumption**: Enables seamless data retrieval for Web API clients and UIs.
- O**Data v4 Support**: Leverages the latest OData standards for efficient data querying.
- **Database Compatibility**: Works with both SAP HANA and Microsoft SQL Server.

![Custom Views](./media/simple-views/custom-views.webp)

### Request

To retrieve data using Simple View, use the following request format:

```text
http://{ae_url}/odata/CustomViews/Views.Custom(Id='<plugin identifier>:<view identifier>')
```

## Example

### Request

Curl

```bash
curl -X GET --header 'Accept: application/json' 'http://localhost:54000/odata/CustomViews/Views.Simple(DataSource='OITM')?$select=ItemCode%2C%20ItemName%2C%20OnHand&$top=1'
```

Request URL

```bash
http://localhost:54000/odata/CustomViews/Views.Simple(DataSource='OITM')?$select=ItemCode%2C%20ItemName%2C%20OnHand&$top=1
```

Response body

```json
{
  "@odata.context": "http://localhost:54000/odata/$metadata#Simple",
  "value": [
    {
      "No": 1,
      "ItemCode": "Active-Item-03",
      "ItemName": "Active-Item-03",
      "OnHand": 950
    }
  ]
}
```

---
