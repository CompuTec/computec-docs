---
sidebar_position: 3
---

# System Requirements

**CompuTec WebUp** is a certified extension built on the **CompuTec AppEngine framework**. It follows the same compatibility and configuration standards as all AppEngine plugins.
This section explains the minimum system requirements needed for WebUp to operate correctly.

## Software requirements

### SAP Business One

    - **Minimum supported version:** 10.0 FP 2502 (or higher)

### CompuTec AppEngine

    - Download the **official release package** from the [**Download**](https://learn.computec.one/docs/appengine/releases/appengine/download) section of our guide. 
    - **SAP Business One Web Client** must be installed and correctly configured.

### Web browsers

CompuTec WebUp extensions can be installed on the following browsers:

    - **Microsoft Edge** (Chromium-based)  
    - **Google Chrome**
    - **Mozilla Firefox**

        :::info[note]
        The **CompuTec WebUp Manager** extension is not available for Mozilla Firefox. If you need consultant or key-user functionality, use Google Chrome or Microsoft Edge.
        :::

### Version compatibility

    - The **browser extension version** must always match (or exceed) the installed **CompuTec WebUp plugin** minimum supported version.

## Hardware requirements

    :::warning[important]
    For detailed **server and client hardware requirements**, refer to the official [CompuTec AppEngine documentation](https://learn.computec.one/docs/appengine/administrators-guide/requirements).
    :::

## Network and security requirements

### Local connectivity

    - WebUp communicates with the **AppEngine service** via **HTTPS**.

### Outbound access

    - The **SAP Business One Web Client endpoint** and **AppEngine** must be reachable from the client environment.

### Security

    - Authorization is seamless. After signing in to the SAP Business One Web Client, CompuTec WebUp uses the same active session for authorization.

:::note[info]
For detailed information on **CompuTec AppEngine** installation and configuration, read the official [CompuTec AppEngine Installation Guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation).
:::
