---
sidebar_position: 1
---

# Develop CompuTec AppEngine Plugins

This section describes how to build plugins of the **CompuTec AppEngine Plugin** type. A plugin of this type runs inside **CompuTec AppEngine** and extends it with your own endpoints, background processes, user actions, web pages, and AI tools. Each article covers one part of a plugin, so you can read only the parts that you need.

The **CompuTec AppEngine Plugin** type uses the `CompuTec.Core2.AE` reference and the `AEPlugin` base class. For a comparison with the other plugin types, see [**Plugin Types**](/docs/appengine/developers-guide/basic-and-business-logic/plugin-types).

## Find the guide you need

- To generate models, serializers, and CRUD and OData controllers from my business logic, read the [**Model Generator**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/generator)  article.
- To add my own endpoints to a generated controller, read the [**Extending Generated OData or CRUD Controllers**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/extend-udo-controllers)  article.
- To create my own HTTP endpoints, read the [**Creating Controllers**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-controllers) article.
- To run a process in the background, on an SAP Business One event, once, or on a schedule, read the [**CompuTec AppEngine Jobs**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-jobs)  article.
- To add a button or menu option that users select to run an operation on a record, read the [**CompuTec AppEngine Actions**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-actions) article.
- To build a web user interface for the CompuTec AppEngine Launchpad, read the [**CompuTec AppEngine Plugin User Interface**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-ui) article.
- To add a menu or context menu entry in SAP Business One that opens a web page or a plugin, read the [**JSON Configurations for SAP Business One Menu**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-content-in-sap-uis) article.
- To let AI clients, such as Claude, call my own logic in SAP Business One, read the [**Creating Custom MCP Tools/Resources**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-mcp-tool) article.

## Data and endpoints

Use these guides to expose SAP Business One data and your own logic through HTTP endpoints.

- [**Model Generator**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/generator) – Use the `ct` tool to generate models, serializers, and CRUD and OData controllers from the business logic project. You mark your user-defined objects (UDOs) with attributes, and the tool creates the code.
- [**Extending Generated OData or CRUD Controllers**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/extend-udo-controllers) – Add custom endpoints, such as a method that adds a row to a UDO, to a generated controller. The new endpoints appear in Swagger.
- [**Creating Controllers**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-controllers) – Create endpoints as classic controllers or as minimal API endpoints, with or without SAP Business One authorization.

## Processes and user operations

Use these guides to automate work or to give users an operation to run.

- [**CompuTec AppEngine Jobs**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-jobs) – Create jobs that react to SAP Business One events, run once on request, or run repeatedly on a Cron schedule.
- [**CompuTec AppEngine Actions**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-actions) – Create operations that users start from a button or menu option. You define on which records the action is available and what the user sees after it runs.

## User interfaces and AI

Use these guides to connect your plugin to users and AI clients.

- [**CompuTec AppEngine Plugin User Interface**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-ui) – Build an SAP UI5 application that the CompuTec AppEngine Launchpad hosts, with translations, OData endpoints, and custom views.
- [**JSON Configurations for SAP Business One Menu**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-content-in-sap-uis) – Define menu and context menu entries in SAP Business One that open a web page or a plugin and can pass values from the current record.
- **Creating Custom MCP Tools/Resources** – Create tools that AI clients can call through **CompuTec MCP Server**. To set up **CompuTec MCP Server** first, see **Introduction to CompuTec MCP Server**. 

## Before you start

Before you begin, make sure that:

- You know how to write C# code and build .NET 8 projects.
- You have a **CompuTec AppEngine** 3.0 environment for testing, with a demo or test company.
- You know which plugin type you need. [Read more](/docs/appengine/developers-guide/basic-and-business-logic/plugin-types)
- For a user interface, Node.js 20.11 or later is installed. [Read more](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-ui)

## Next steps

If you build your first plugin, start with [**Model Generator**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/generator) if your plugin works with user-defined objects, or with [**Creating Controllers**](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/ae-controllers) if it only needs your own endpoints.
