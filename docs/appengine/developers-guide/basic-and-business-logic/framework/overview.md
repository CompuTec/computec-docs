---
sidebar_position: 1
---

# About Framework

This guide introduces the **Computec.Core2 Ecosystem**, a robust framework designed for developing extensions tailored to SAP UI and SAP web-based business applications. It emphasizes unification, scalability, maintainability, and advanced analytics, offering a streamlined approach to creating and managing business applications.

---

## Key Features

Below are the key features of the Computec.Core2 Ecosystem, designed to simplify and enhance SAP application development:

- **Unified Logging System** - Provides a cohesive logging approach, simplifying tracking and debugging across all extensions.
- **Comprehensive Reporting & Metrics** - Built-in tools for generating insightful reports and performance metrics to enhance decision-making.
- **Plugin Delivery & Updates** - A centralized store for seamless management and delivery of plugin updates, ensuring users have the latest features and fixes.
- **Licensing Management** - Ongoing development of a licensing feature to facilitate secure and efficient management of application access
- **Event Bus Architecture** - Supports asynchronous communication within applications, enabling a responsive and dynamic system.
- **Job Scheduling & Event-Driven Execution** - Easily configure jobs that can be triggered by specific events or scheduled to run at defined intervals.
- **Single Sign-On (SSO) Support** - Enhance user experience with seamless authentication across multiple applications.
- **Rapid Development with .NET 8** -  Leverage a fast and streamlined codebase that accelerates development cycles without compromising quality.
- **Service-Oriented Architecture** - Enjoy a well-structured architecture that promotes flexibility and ease of integration with other services.
- **Abstracted SAP APIs** - Simplifies integration by abstracting standard SAP DI and SL APIs, allowing developers to focus on business logic without navigating multiple technologies.
- **Licensing Management** - Ongoing development of a licensing feature to facilitate secure and efficient management of application access.
- **Unified Business Logic Access** - All user-defined objects are automatically accessible in both .NET Core assemblies and OData/CRUD controllers, enabling easy integration with third-party applications.
- **Custom API Development** - Simplified creation of custom OData/API controllers with support for Minimal APIs, including built-in authentication features.
- **Full Support for Extensions of Extensions** - Develop extensions that leverage existing plugins as dependencies, allowing you to enhance their logic with your own code. This feature promotes modular development and fosters a rich ecosystem of interconnected functionalities.
- **Complete SAP UI5 Framework Support** - Integrate seamlessly with the SAP UI5 framework using TypeScript, utilizing built-in libraries for quick and easy development. This support enables developers to harness the power of modern web technologies while ensuring compatibility with SAP standards.

## Why Choose Computec.Core2?

The Computec.Core2 ecosystem empowers developers to create robust extensions with minimal overhead, providing tools and features that enhance productivity while ensuring high standards of performance and security. Whether you're looking to streamline business processes or integrate new functionalities, Computec.Core2 is your go-to solution for modern business application development.

## Environment Overview

At the heart of the Computec.Core2 Ecosystem is the CompuTec AppEngine server, which serves as the central management hub for the SAP installation (SAP SLD) along with all associated databases and servers. This robust architecture enables administrators to efficiently manage all plugins across multiple companies within the ecosystem, ensuring streamlined operations and enhanced performance.

## CompuTec AppEngine Server Responsibilities

The CompuTec AppEngine Server serves as the backbone of the Computec.Core2 Ecosystem, providing centralized management and orchestration for SAP installations and associated components. It plays a pivotal role in ensuring seamless integration, streamlined operations, and efficient communication across the ecosystem. Below is an overview of the key responsibilities of the CompuTec AppEngine Server:

    - **Central Administration of SAP Companies Ecosystem**:
        - Facilitate the activation of multiple SAP companies within the ecosystem, ensuring seamless integration and management.
        - Efficiently manage the installation and updates of plugins for specific companies, ensuring that all applications are up-to-date and functioning optimally.

    - **Event Bus Management**: 
        - The CompuTec AppEngine server is responsible for hosting and managing the Event Bus, enabling asynchronous communication between different components of the ecosystem. This architecture promotes responsiveness and dynamic interactions across applications.
        - The Event Bus can be configured to utilize external message queue services such as Microsoft Event Bus or RabbitMQ, providing flexibility and scalability in communication.
    
    - **Hosting CompuTec AppEngine Plugins**:
        - The server hosts CompuTec AppEngine plugins, including controllers and web applications, allowing for modular development and enhancing the overall functionality of the ecosystem.
        
    - **Job Execution**: 
        - The CompuTec AppEngine server executes scheduled and event-driven jobs, ensuring timely execution of tasks critical to the operation of the ecosystem.
        
    - **Connection Logging and OpenTelemetry Management**: 
        - Manages connection logging and OpenTelemetry settings, providing comprehensive insights into application performance and facilitating effective monitoring and troubleshooting.

## Load Balancing Capabilities

The architecture of the CompuTec AppEngine server allows for the deployment of multiple instances to load balance the tasks handled by each server. While this capability is currently in progress and not fully supported yet, plans are in place to enhance scalability and reliability, ensuring optimal performance as demands increase.

---
The Computec.Core2 Ecosystem is a game-changer for SAP application development. By offering an intuitive and scalable framework, it empowers developers to build, extend, and manage business applications efficiently. With its centralized CompuTec AppEngine Server, powerful feature set, and support for modern development standards, it empowers organizations to streamline operations, enhance scalability, and drive innovation.
