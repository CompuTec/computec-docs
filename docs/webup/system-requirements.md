---
sidebar_position: 3
---

# System Requirements

## Overview

**WebUp** operates as a **certified extension** within the **CompuTec AppEngine (AE)** framework.  
It follows the same compatibility and configuration principles as all AE plugins.  
This section defines the **minimum environment requirements** necessary for proper operation.

---

## Software Requirements

### SAP Business One Version

- **Minimum supported version:** 10.0 FP 2502 (or higher)

### AppEngine

- **Official release package:** [`CompuTec.AppEngine.3.2510.1.msi`](/docs/appengine/releases/appengine/download)  
- **SAP Business One Web Client (AE)** must be installed and properly configured

### Web Browsers Supported

- **Microsoft Edge** (Chromium-based)  
- **Google Chrome**

### Version Compatibility

- The **browser extension version** must always match (or exceed) the installed **WebUp AE plugin** minimum supported version.

---

## Hardware Requirements

:::info
Refer to the official AppEngine [requirements](https://learn.computec.one/docs/appengine/administrators-guide/requirements) for server and client specifications.
:::

---

## Network & Security Requirements

### Local Connectivity

- WebUp communicates with the **AppEngine service** via **HTTPS**

### Outbound Access

- The **SAP Business One Web Client endpoint** and **AppEngine** must be reachable from the client environment.

### Security

- Authorization is seamless, you login to SAP Web Client and WebUp inherits the same authentication session

---

:::tip Additional Information
For detailed **technical parameters**, **performance recommendations**, and **version compatibility**,  
refer to the official **CompuTec AppEngine → Installation & Administration Guide**.
:::
