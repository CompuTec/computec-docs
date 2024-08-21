---
sidebar_position: 5
---

# Error Codes and Messages

Here are some potential error codes and messages you might encounter from REST API calls:

- **HTTP/1.1 404 Not Found - endpoint not found** - This error indicates that the requested endpoint is missing or incorrect.

- **HTTP/1.1 401 Unauthorized - authentication required**

    Error Response:

    ```json
    {
    "error": {
        "code": "",
        "message": "Authorization has been denied for this request."
    }
    }
    ```

    This happens when  authentication credentials are either missing or invalid.

- **HTTP/1.1 500 Internal Server Error** - any other error. Details of problem are provided in the error message. the messages align with those found in the SAP Business One Client.

    Error Message:

    ```json
    {
    "error": {
        "code": "500",
        "message": "Object with specified Key was not found in database Key:000000000"
    }
    }
    ```
