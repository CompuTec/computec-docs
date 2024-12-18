---
sidebar_position: 6
---

:::note
    [Node.js](https://nodejs.org) version 20.11 or higher is required in development environment.
:::

# AppEngine Plugin - User Interface

Web User Interface is leveraging [SAP UI5 Framework](https://ui5.sap.com/). It is a modern enterprise ready UI framework. AppEngine provides set of libraries to simplify development of UI5 applications and to manage user authentication, translations.

## Parts of AppEngine UI5 Application

* Launchpad - ui5 application that list all applications available for user. It is container in which all plugins are started.
* @computec/uicore - provides base classes for building AppEngine UI5 applications. It is required for plugins that run inside AppEngine Launchpad.
* @computec/common - set of common controls, services and helpers that helps to build UI5 applications.
* @computec/templating - set of controls that helps in view generations.

## Requirements for AppEngine UI5 Plugin

AppEngine Launchpad can run any UI5 application as long as below requirements are met:

#### `computec.appengine.uicore` library is required (optionaly `computec.appengine.common`). This can be added to manifest.json.

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

#### Plugin must extend `computec.appengine.uicore.UIComponent`. This Component provides base functionality for AppEngine UI5 applications. It ensures user authentication, provides access to AppEngine UI services, handles translations etc. UIComponent extends `sap.ui.core.UIComponent`.

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

#### For correct navigation inside AppEngine Launchapd, plugin need to use `computec.appengine.uicore.plugin.m.PluginRouter` or `computec.appengine.uicore.plugin.f.PluginRouter`. Both of them extends `sap.m.routing.Router` or `sap.f.routing.Router` respectively. You can set usage of on of them inside manifest.json

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

## Crating simple ui5 application for AppEngine

The easiest way to start new AppEngine UI Plugin project is to use CT AppEngine Plugin Project template from [CompuTec.AppEngine.Templates](../framework/before-you-start.md)

```bash
dotnet new ctaeaeproject --RoutePrefix CTVehOne
```

 This will create new project with basic structure for AppEngine UI5 Plugin. You can plugin Id is taken from parent folder name but you can specify different one by adding parameter --name. Assuming that this command was run inside CT.VehOne folder below structure will be created:

### Structure

* **CT.VehOne**
  * **CustomViews** - folder for custom views
  * [Jobs](./ae-jobs.md) - folder for background jobs
  * **Properties** - folder for configuration files
  * [Translations](../framework/message-translations.md) - folder for translations
  * **www**
    * **src** - source code of UI5 application
      * **assets** - additional file like css, images etc.
      * **controller** - folder for controllers
      * **view** - folder for views
      * **Component.ts** - UI5 Component extending computec.appengine.uicore.UIComponent
      * **manifest.json** - UI5 manifest already configured for AppEngine
    * additional configuration files like .eslintrc, etc.
    * **package.json** - npm configuration file
    * **ui5.yaml** - UI5 configuration file
    * **www.code-workspace** - Visual Studio Code workspace file for easy development with recommended extensions and debug configuration in place

### Build

In order to build UI5 application you need to run below command in www folder:

```bash
npm install
npm run build
```

For development it is recommended to use `npm run watch:ts` command that will start UI5 application in watch mode - any change in src will trigger transpilation of typescript files.
If in your dev.config.json file you have set `MapWwwAppFolder` to true then each browser request will get data from www/webapp folder instead of build path. Thanks to this you will see changes in your www ui5 application immediately after saving file.

## Translations

In order to use [Message Translations](../framework/message-translations.md) that are defined in backed you need to specify source of translations in manifest.json. This way ui5 will use this enpoint as translation provider. You can find this endpoint in openAPI documentation in swagger. Patter for this enpoint is as follows: `plugins/{RoutePrefix}/I18n/i18n.properties`. RoutePrefix can be found in manifest.json

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

## Attaching odata endpoints to AppEngine

It is very easy to add odata model to plugin. You can do this inside component by calling attachSLOdataModel function. In below example we are attaching odata ProcessForce endpoint with alias PF. From now on we can bind controls using path: `PF>/....`. You can define multiple endpoints with different aliases. Alias "AE" is reserved for AppEngine odata endpoint that is already added to application.

```typescript
this.attachSLOdataModel("odata/ProcessForce/", "PF");
```

## AppEngine Custom Views endpoint

:::note
	This binding is only one way binding - it is not possible to update data using this endpoint. Also it does not return metadata at the moment for selected table, view or custom view.
:::

There are tow types of CustomViews endpoints:

* Simple - endpoint that returns data from selected table or view. Parameter DataSource should be name of view or table in database. It is read only endpoint but allows of useage of OData v4 features like $filter, $orderby, $top, $skip, $select, $groupby etc.

`/odata/CustomViews/Simple(DataSource={DataSource})`

* Custom - endpoint that returns data from selected custom view declared in plugin. Parameter Id should be id of custom view. It is read only endpoint but allows of usage of OData v4 features like $filter, $orderby, $top, $skip, $select, $apply etc.

`/odata/CustomViews/Custom(Id={Id})`

### Crating Custom View in plugin

Custom views are very usefull where there is a need to display data from multiple tables or views. To create Custom View you need to add json file with name `{anyName}.customview.json` inside `CustomViews` directory. It need to be set to be copied to output directory in project file. You can do this for all CustomViews file by adding below code to project file:

```xml
<None Update="CustomViews\Vehicles.customview.json">
  <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
</None>
```

Below is example of Custom View Definition:

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

Because of the fact that CustomViews is odata v4 endpoint you can bind it to UI5 constorls for example table or list control. Below is example of binding database table to UI5 table control using CustomViews.Simple endpoint.:

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

If we would like to bind to CustomViews.Custom declared in plugin we would need to provide correct Id. It consist of {RoutePrefix}:{CustomViewId}. Below is example of binding database table to UI5 table control using CustomViews.Custom endpoint.:

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

CustomViews are very powerfull tool that allows to display data from any source in database without need of creating dedicated controllers on backedn side.
:::note
	Because there is no metadata for CustomViews endpoint you need to provide correct path to data in binding declaring expected type. 
:::

### Filtering Custom Views

As mentioned earlier CusomViews endpoint don't have metadata for returned data we nedd to filter data using $filter parameter directly. UI5 is not able to generate filter string without metadata. In `computec.appengine.common` library you can find FilterHelper function getODataFilterExpression that generate filter string for Filter. Below is example of usage:

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

### Libraries provided by AppEngine

AppEngine provides set of libraries that can be used in UI5 applications. All of this libraries are already included in appengine so you don't need to add them to build of your plugin. You can install then using npm to get typescript definitions.

### @computec/uicore

`npm i @computec/uicore --save-dev`

Base library that is required for all plugins that run inside AppEngine Launchpad. It provides base classes for building AppEngine UI5 applications. AppEngine UI5 component need to extend from UIComponent provided by this library. Also it provides PluginRouter that should be used in manifest.json for correct navigation inside AppEngine Launchpad. 

It also provides some useful helpers like:

* FormatterHelper with static translation methods
* ErrorHelper that helps in handling errors
* CustomViewHelper that helps in binding CustomViews endpoint
* OdataHelper that helps retrieving binded objects

### @computec/common

`npm i @computec/common --save-dev`

This library contains many and more useful controls, services and helpers that helps to build UI5 applications. It contains common SelectDialog like:

* ItemSelectDialog,
* WarehouseSelectDialog,
* UomSelectDialog,
* BusinessPartnersSelectDialog,
* DocumentTypeSelectDialog
* etc.

There are also lots of helpers like:

* FilterHelper,
* StorageHelper,
* ValidationHelper,
* XLSXHelper,
* etc.

Very useful are types based on SAP Business One fields types that handle formating based on settings in SAP Business One:

* Quantity,
* Amount,
* Price,
* PriceCurrency,
* DateOnly,
* TimeOnly,
* etc.

In this library you can also find some base classes that you can extends from to easily create new controls, dialogs, services, viewModels etc.

For more information and examples (test/examples) please download this library and check examples and comments in code.
