---
sidebar_position: 5
---

# Error Codes and Messages

When interacting with REST APIs, you may encounter various error codes that indicate authentication issues, missing endpoints, or internal system errors. Below are some common HTTP error responses and their possible causes:

- **HTTP/1.1 401 Unauthorized**: This error occurs when authentication credentials are missing or invalid. Ensure you provide the correct authentication token or credentials.

    Error Response:

    ```json
    {
    "error": {
        "code": "",
        "message": "Authorization has been denied for this request."
    }
    }
    ```

- **HTTP/1.1 404 Not Found**: A "404 Not Found" error indicates that the requested API endpoint is incorrect or does not exist. Verify that the URL is accurate and that the resource is available.

- **HTTP/1.1 500 Internal Server Error**: This generic error signifies an issue within the server, such as database errors or unexpected failures. If using SAP Business One with CompuTec ProcessForce, the error message will often align with those seen in the SAP Business One Client.

    Error Message

    ```json
    {
    "error": {
        "code": "500",
        "message": "Object with specified Key was not found in database Key:000000000"
    }
    }
    ```

---
