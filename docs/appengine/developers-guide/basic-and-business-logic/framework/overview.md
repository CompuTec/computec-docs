---
sidebar_position: 1
---

# About Framework

This guide introduces the **Computec.Core2** ecosystem, a framework for building and managing extensions for SAP UI and web-based SAP applications.  

The framework provides a consistent structure for development, deployment, and maintenance. It is designed to:

- Standardize how extensions are built
- Simplify integration with SAP
- Support scalable and maintainable solutions

## Key capabilities

The **Computec.Core2** ecosystem includes the following capabilities:

- **Unified logging and monitoring**
  - Centralized logging across all extensions
  - Built-in support for metrics and reporting

- **Plugin management**
  - Centralized delivery and updates of plugins
  - Version consistency across environments

- **Licensing management**
  - Central management of application access (feature under development)

- **Event-driven architecture**
  - **Event Bus** for asynchronous communication within applications
  - Enables a responsive and dynamic system

- **Automation**
  - Job scheduling
  - Event-triggered execution

- **Authentication**
  - Seamless **Single Sign-On (SSO)** authentication across applications

- **Development framework**
  - **.NET 8** support
  - Service-oriented architecture
  - Modular extensions with dependency support
  - Enables development of extensions that leverage existing plugins as dependencies

- **SAP integration**
  - Abstraction layer for **SAP DI API** and **Service Layer**
  - Unified access to user-defined objects

- **API and UI development**
  - Custom **OData/API** controllers creation with support for **Minimal APIs**, including built-in authentication features

- **Complete SAP UI5 Framework support**  
  - **SAP UI5** support with **TypeScript** and provided libraries
  - Ensures compatibility with SAP standards

- **Unified business logic access**
  - All user-defined objects are automatically accessible in both **.NET Core** assemblies and **OData/CRUD** controllers
  - Enables easy integration with third-party applications

- **Comprehensive analytics feature**
  - Built-in tools for generating insightful reports and performance metrics to enhance decision-making

The **Computec.Core2** ecosystem empowers developers to create robust extensions with minimal overhead, providing tools and features that enhance productivity while ensuring high standards of performance and security. Whether you're looking to streamline business processes or integrate new functionalities, Computec.Core2 is your go-to solution for modern business application development.

## Environment overview

The core component of the **Computec.Core2** ecosystem is **CompuTec AppEngine Server**.

It acts as a central management hub that connects:

- SAP System Landscape Directory (SLD)
- Company databases
- Application servers
- Plugins and extensions

This setup allows administrators to manage multiple SAP companies and their extensions from one place.

## CompuTec AppEngine Server responsibilities

The **CompuTec AppEngine Server** serves as the backbone of the **Computec.Core2** ecosystem, providing centralized management and orchestration for **SAP Business One** installations and associated components.  

Here's an overview of the key responsibilities of the **CompuTec AppEngine Server**:

    - **Central administration**
        - Manage multiple SAP companies within one environment
        - Control plugin installation and updates per company

    - **Event Bus management**
        - Host and manage the Event Bus
        - Enable communication between services and extensions
        - Support external messaging systems, for example, Microsoft Event Bus or RabbitMQ
    
    - **Plugin hosting**
        - Run backend services, controllers, and web applications
        - Support modular extension architecture
        
    - **Job execution**
        - Run scheduled tasks
        - Execute event-driven processes
        
    - **Logging and telemetry**
        - Manage connection logs
        - Configure OpenTelemetry for monitoring and diagnostics

## Scalability

The architecture supports running multiple **Computec AppEngine** instances to distribute workload.  

While **Load Balancing** capability is currently in progress and not fully supported yet, plans are in place to enhance scalability and reliability, ensuring optimal performance as demands increase.
