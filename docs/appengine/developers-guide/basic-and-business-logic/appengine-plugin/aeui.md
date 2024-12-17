---
sidebar_position: 6
---

# AppEngine Plugin User Interface

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

Easiest way to start new AppEngine UI Plugin project is to use [AppEngine UI5 Plugin Template](

## CompuTec.AppEngine.uicore.Component

## Translations

manifest entry

## Libraries

## Authorization

## Custom Views

## Base View Models 

## Dialogs

## Progress Bar

