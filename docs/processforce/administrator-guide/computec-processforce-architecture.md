---
sidebar_position: 1
---

# CompuTec ProcessForce Architecture

**CompuTec ProcessForce** extends **SAP Business One** with advanced manufacturing, quality control, traceability, costing, and planning functionality.

The solution is built on **Microsoft .NET** technology and integrates directly with **SAP Business One**, allowing users to manage manufacturing processes without leaving the SAP environment.

**CompuTec ProcessForce** supports both **Microsoft SQL Server** and **SAP HANA** deployments.

## Architecture overview

**CompuTec ProcessForce** consists of several components that work together to provide business functionality, user interfaces, data management, and reporting capabilities.

![computec processforce 3.0 Architecture screen](.\media\architecture\pf-30-architecture.jpg)

The solution operates via an executable process ``ProcessForce.exe``, and integrates with **SAP Business One** through standard SAP APIs and database structures while adding manufacturing-specific functionality and data.

## Key Architectural Components

### CompuTec ProcessForce API

The **CompuTec ProcessForce API** is responsible for processing business logic and communicating with **SAP Business One**. It handles manufacturing transactions, validations, calculations, and data processing required by **CompuTec ProcessForce** functionality.

The API communicates with **SAP Business One** using the **SAP Business One Data Interface (DI) API** and optimized database access with **Direct Access Mode** using **ADO.NET** mechanisms.

### User interface (UI)

**CompuTec ProcessForce** provides user interfaces integrated directly into **SAP Business One**.

Most functionality uses the standard **SAP Business One** user interface framework, ensuring a consistent user experience.

Some features use **SAPUI5** technology to provide more advanced and interactive screens. Examples include:

- Batch Traceability 360
- MRP 2.5
- Serialization
- Mass BOM Change

### Data storage

**CompuTec ProcessForce** stores its configuration and manufacturing data within the **SAP Business One** database.

The solution uses standard **SAP Business One** extensibility objects, including:

- **User-Defined Tables** (**UDTs**)
- **User-Defined Fields** (**UDFs**)
- **User-Defined Objects** (**UDOs**)

This approach ensures that manufacturing data remains fully integrated with the **SAP Business One** data model.

### Reporting and Analytics

**CompuTec ProcessForce** includes reporting and analytics capabilities for manufacturing, quality control, costing, and traceability processes.

Depending on the database platform, different technologies are used to optimize performance:

#### SAP HANA

**SAP HANA** deployments use:

- **Calculation Views**
- **CompuTec Semantic Model**

These technologies provide optimized analytical performance and advanced reporting capabilities.

#### Microsoft SQL Server

**Microsoft SQL Server** deployments use:

- **Views**
- **Functions**
- **Stored Procedures**

These objects support reporting and data retrieval for operational and analytical processes.

:::note[info]
On both platforms, users can retrieve data using **User Queries** and generate reports with **Crystal Reports**.
:::

### Database platform support

**CompuTec ProcessForce** supports both:

- **SAP HANA**
- **Microsoft SQL Server**

Most features are available on both platforms.

The primary difference is the availability of the **CompuTec Semantic Model**, which is supported only on **SAP HANA** and provides enhanced analytical capabilities.

## Benefits of the CompuTec ProcessForce 3.0 architecture

The **CompuTec ProcessForce** architecture is designed to:

- Extend **SAP Business One** with advanced manufacturing functionality
- Maintain tight integration with **SAP Business One** data and processes
- Support both **SAP HANA** and **Microsoft SQL Server** environments
- Provide scalable reporting and analytics capabilities
- Enable future enhancements without modifying** SAP Business One** core functionality

## Additional information

- For installation instructions, see the [CompuTec ProcessForce installation documentation](https://learn.computec.one/docs/processforce/administrator-guide/installation/first-installation/extension).

- For technical integration details, see the [developer documentation](https://learn.computec.one/docs/appengine/developers-guide/rest-odata-api/rest-odata-api-documentation/).
