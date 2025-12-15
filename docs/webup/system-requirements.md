---
sidebar_position: 3
---

# System Requirements

**CompuTec WebUp** is a certified extension built on the **CompuTec AppEngine framework**. It follows the same rules and configuration standards as all ComopuTec AppEngine plugins.

This section describes the minimum system requirements needed for CompuTec WebUp to run correctly.

## Software requirements

### SAP Business One

    - **Minimum supported version:** 10.0 FP 2502 (or higher)
    - **SAP Business One Web Client**: Must be installed and properly configured.

### CompuTec AppEngine

    - Download and install the **official release package** from the [**Download**](https://learn.computec.one/docs/appengine/releases/appengine/download) section of our guide. [Read more](https://learn.computec.one/pl/docs/appengine/administrators-guide/configuration-and-administration/installation)

### Web browsers

- CompuTec WebUp extensions can be used with the following browsers:
        - **Microsoft Edge** (Chromium-based)  
        - **Google Chrome**
        - **Mozilla Firefox**

        :::info[note]
        The **CompuTec WebUp Manager** extension is not available for Mozilla Firefox. If you need consultant or key-user functionality, use Google Chrome or Microsoft Edge.
        :::

- The installed **browser extension version** must always match or exceed the installed **CompuTec WebUp plugin** minimum supported version.

## Hardware requirements

    :::warning[important]
    For detailed **server and client hardware requirements**, refer to the official [**CompuTec AppEngine documentation**](https://learn.computec.one/docs/appengine/administrators-guide/requirements).
    :::

## Network and security requirements

### Local connectivity

    - WebUp communicates with the CompuTec AppEngine service over **HTTPS**.

### Outbound access

    - Both the **SAP Business One Web Client endpoint** and **CompuTec AppEngine** must be reachable from the client environment.

### Security

    - Authorization is seamless. After signing in to the SAP Business One Web Client, CompuTec WebUp uses the same active session for authentication and authorization.

:::note[info]
For detailed information on **CompuTec AppEngine** installation and configuration, read the official [CompuTec AppEngine Installation Guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation).
:::
