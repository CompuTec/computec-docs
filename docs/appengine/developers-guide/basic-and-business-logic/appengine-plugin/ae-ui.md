---
sidebar_position: 6
---

# CompuTec AppEngine Plugin User Interface

:::note
    [Node.js](https://nodejs.org) version 20.11 or higher is required in development environment.
:::

Web User Interface is built using the [SAP UI5 Framework](https://ui5.sap.com/). It is a modern enterprise-ready UI framework. CompuTec AppEngine offers a set of libraries to simplify development of UI5 applications and to manage user authentication, translations.

## Parts of CompuTec AppEngine UI5 Application

- **Launchpad** - A UI5 application that displays all applications available to the user. It serves as a container for running all plugins within CompuTec AppEngine.
- **@computec/uicore** - Provides foundational classes for developing CompuTec AppEngine UI5 applications, essential for plugins operating within the CompuTec AppEngine Launchpad.
- **@computec/common** - A set of common controls, services and helpers that helps to build UI5 applications.
- **@computec/templating** - A set of controls designed to simplify view generation.

## Requirements for CompuTec AppEngine UI5 Plugin

CompuTec AppEngine Launchpad can run any UI5 application as long as below requirements are met:

1. The `computec.appengine.uicore` library is required (with `computec.appengine.common` as an optional addition). These libraries can be included in the manifest.json file.

    ```json
    {
        ...
        "sap.ui5": {
            ...
            "dependencies": {
                ...
                "libs": {
                    "computec.appengine.uicore": {},
                    "computec.appengine.common": {}
                }
            }
        }
        ...
    }
    ```

2. The plugin must extend `computec.appengine.uicore.UIComponent`, which serves as the foundation for CompuTec AppEngine UI5 applications. This component ensures user authentication, facilitates access to CompuTec AppEngine UI services, manages translations, and more. UIComponent itself is an extension of `sap.ui.core.UIComponent`.

    ```typescript
    import UIComponent from "computec/appengine/uicore/UIComponent";

    /**
    * @namespace ct.vehone
    */
    export default class Component extends UIComponent {
        ...
        public static metadata = {
            manifest: "json",
        };
        ...
    }
    ```

3. To enable proper navigation within the CompuTec AppEngine Launchpad, the plugin must utilize either `computec.appengine.uicore.plugin.m.PluginRouter` or `computec.appengine.uicore.plugin.f.PluginRouter`. These extend `sap.m.routing.Router` and `sap.f.routing.Router`, respectively. The desired router can be specified in the manifest.json file.

    ```json
    {
        ...
        "sap.ui5": {
            ...
            "routing": {
                "config": {
                    "routerClass": "computec.appengine.uicore.plugin.m.PluginRouter",
                    "viewType": "XML",
                    ...
                },
                ...
            }
        }
        ...
    }
    ```

## Crating Simple Ui5 Application for CompuTec AppEngine

The easiest way to start new CompuTec AppEngine UI Plugin project is by using the CompuTec AppEngine Plugin Project template from [CompuTec.AppEngine.Templates](../../basic-and-business-logic/framework/before-you-start.md)

```bash
dotnet new ctaeaeproject --RoutePrefix CTVehOne
```

 This command will create a new project with the basic structure for the CompuTec AppEngine UI5 Plugin. The plugin ID will be derived from the parent folder name, but you can specify a different one using the --name parameter. If the command is executed inside the CT.VehOne folder, the following structure will be created:

### Structure

**CT.VehOne**
    -**CustomViews** - folder for custom views
    - [**Jobs**](../appengine-plugin/ae-jobs.md) - folder for background jobs
    - **Properties** - folder for configuration files
    - [**Translations**](../../basic-and-business-logic/framework/message-translations.md) - folder for translations
    - **www**
        - **src** - source code of UI5 application
            - **assets** - additional file like css, images etc.
            - **controller** - folder for controllers
            - **view** - folder for views
            - **Component.ts** - UI5 Component extending computec.appengine.uicore.UIComponent
            - **manifest.json** - UI5 manifest already configured for CompuTec AppEngine
        - **additional configuration** - files like .eslintrc, etc.
        - **package.json** - npm configuration file
        - **ui5.yaml** - UI5 configuration file
        - **`www.code-workspace`** - Visual Studio Code workspace file for easy development with recommended extensions and debug configuration in place

### Build

In order to build UI5 application you need to run below command in www folder:

```bash
npm install
npm run build
```

For development it is recommended to use `npm run watch:ts` command that will start UI5 application in watch mode - any change in src will trigger transpilation of typescript files.
If in your dev.config.json file you have set `MapWwwAppFolder` to true then each browser request will get data from www/webapp folder instead of build path. Thanks to this you will see changes in your www ui5 application immediately after saving file.

## Translations

In order to use [Message Translations](../framework/message-translations.md) that are defined in backed you need to specify source of translations in manifest.json. This way ui5 will use this endpoint as translation provider. You can find this endpoint in openAPI documentation in swagger. Patter for this endpoint is as follows: `plugins/{RoutePrefix}/I18n/i18n.properties`. RoutePrefix can be found in manifest.json

```json
{
  ...
  "sap.app": {
    ...
    "i18n": "plugins/CTVehOne/I18n/i18n.properties",
    ...
  }
  ...
}
```

## Attaching Odata Endpoints to CompuTec AppEngine

Adding an OData model to a plugin is straightforward. You can do this within the component by calling the attachSLOdataModel function. In the example below, we are attaching the OData ProcessForce endpoint with the alias ProcessForce. From this point on, you can bind controls using the path `PF>/.....` Multiple endpoints can be defined with different aliases. Note that the alias "AE" is reserved for the CompuTec AppEngine OData endpoint, which is already included in the application.

```typescript
this.attachSLOdataModel("odata/ProcessForce/", "PF");
```

## CompuTec AppEngine Custom Views endpoint

:::note
This binding is one-way only; it is not possible to update data using this endpoint. Additionally, it does not currently return metadata for the selected table, view, or custom view.
:::

There are tow types of CustomViews endpoints:

1. **Simple** - It is an endpoint that returns data from selected table or view. The "DataSource" parameter should specify the name of the database table or view. It is a read-only endpoint but allows the usage of OData v4 features like $filter, $orderby, $top, $skip, $select, $groupby etc.

    `/odata/CustomViews/Simple(DataSource={DataSource})`

2. **Custom** - It is an endpoint that returns data from the selected custom view declared in plugin. The "Id" parameter should specify the ID of the custom view. It is q read-only endpoint but allows the usage of OData v4 features like $filter, $orderby, $top, $skip, $select, $apply etc.

    `/odata/CustomViews/Custom(Id={Id})`

### Crating Custom View in Plugin

Custom views are highly useful when there is a need to display data from multiple tables or views. To create a Custom View, you must add a JSON file named `{anyName}.customview.json` inside the CustomViews directory. This file needs to be set to be copied to the output directory in the project file. To apply this for all `CustomViews` files, add the following code to the project file:

```xml
<None Update="CustomViews\Vehicles.customview.json">
  <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
</None>
```

Below is an example of Custom View Definition:

```json
{
  "Id": "Vehicles",
  "Description": "Vehicles List",
  "Source": {
    "Hana": "Select \"ItemCode\", \"ItemName\" from \"OITM\"",
    "MsSql": "Select ItemCode, ItemName from OITM"
  }
}
```

### Binding Custom View

Since CustomViews is an OData v4 endpoint, it can be bound to UI5 controls such as tables or lists. Below is an example of binding a database table to a UI5 table control using the CustomViews.Simple endpoint:

```xml
...
<Table items="{
    path: 'AE>/CustomViews/Simple(DataSource=\'@CT_VO_OVMD\')'
}"/>
...
    <items>
        <ColumnListItem type="Navigation"
                        press="onItemPress">
            <cells>
                <Text text="{path: 'AE>U_Type', type: 'sap.ui.model.odata.type.String'}"/>
                ...
            </cells>
        </ColumnListItem>
    </items>
</Table>
```

To bind to CustomViews.Custom declared in the plugin, you need to provide the correct ID, which consists of `{RoutePrefix}:{CustomViewId}`. Below is an example of binding a database table to a UI5 table control using the CustomViews.Custom endpoint:

```xml
...
<Table items="{
    path: 'AE>/CustomViews/Custom(Id=\'CTVehOne:Vehicles\')'
}"/>
...
    <items>
        <ColumnListItem type="Navigation"
                        press="onItemPress">
            <cells>
                <Text text="{path: 'AE>ItemCode', type: 'sap.ui.model.odata.type.String'}"/>
                ...
            </cells>
        </ColumnListItem>
    </items>
</Table>
```

CustomViews are a powerful tool that enables the display of data from any database source without the need for creating dedicated backend controllers.
:::note
    Since there is no metadata for the CustomViews endpoint, you must specify the correct path to the data in the binding and declare the expected type.
:::

### Filtering Custom Views

As mentioned earlier, CustomViews endpoints do not have metadata for the returned data, so we need to filter the data directly using the $filter parameter. Since UI5 cannot generate the filter string without metadata, the `computec.appengine.common` library includes the FilterHelper function getODataFilterExpression, which generates the filter string for the filter. Below is an example of how to use it:

```typescript
private _applyFilter() {
    const filter = new Filter({
        path: "ItemCode",
        operator: FilterOperator.EQ,
        value1: "A00001",
    });

    const filterString = FilterHelper.getODataFilterExpression(filter);
    this._getVehiclesTableBinding().changeParameters({
            $filter: filter,
        });
}
```

### Libraries provided by CompuTec AppEngine

CompuTec AppEngine offers a set of libraries for use in UI5 applications. These libraries are already included in CompuTec AppEngine, so there's no need to add them to the build of your plugin. However, you can install them via npm to obtain the TypeScript definitions.

### @computec/uicore

`npm i @computec/uicore --save-dev`

This base library is essential for all plugins running within the CompuTec AppEngine Launchpad. It provides fundamental classes for building CompuTec AppEngine UI5 applications, with the CompuTec AppEngine UI5 component needing to extend the UIComponent class from this library. Additionally, it includes the PluginRouter, which should be specified in the manifest.json for proper navigation within the CompuTec AppEngine Launchpad.

The library also offers several useful helpers, including:

- FormatterHelper with static translation methods
- ErrorHelper that helps in handling errors
- CustomViewHelper that helps in binding CustomViews endpoint
- OdataHelper that helps retrieving binded objects

### @computec/common

`npm i @computec/common --save-dev`

This library offers a wide range of valuable controls, services, and helpers to streamline the development of UI5 applications. It includes common SelectDialog components, such as:

- ItemSelectDialog,
- WarehouseSelectDialog,
- UomSelectDialog,
- BusinessPartnersSelectDialog,
- DocumentTypeSelectDialog
- etc.

The library also provides numerous helpers, including:

- FilterHelper,
- StorageHelper,
- ValidationHelper,
- XLSXHelper,
- etc.

The library includes highly useful types based on SAP Business One field types, which automatically handle formatting according to SAP Business One settings:

- Quantity,
- Amount,
- Price,
- PriceCurrency,
- DateOnly,
- TimeOnly,
- etc.

This library also includes several base classes that can be extended to simplify the creation of new controls, dialogs, services, view models, and more.

For detailed information and examples, download the library and explore the example code and comments within.

:::info Examples
Refer to the [Example code](../../basic-and-business-logic/examples/examples.md) for guidance on using the CompuTec AppEngine UI5 Plugin.
:::
