---
sidebar_position: 18
---

# Using External Libraries in CompuTec AppEngine

This guide demonstrates how to integrate and use an external Node.js library—SheetJS (xlsx)—within CompuTec AppEngine plugin written in TypeScript. SheetJS allows you to read, write, and manipulate Excel files directly in the browser or Node.js environments.

:::warning
    To include an external library in production-ready code, make sure to complete Steps 1 to 5 in the instructions below.
:::

## Requirements

1. **Node JS** (`https://nodejs.org/en/`).
2. **Yeoman** (`https://github.com/yeoman/yo`) .

    yo

        ```bash
        npm install --global yo
        ```

3. **Easy UI5** ()

    Easy UI5 ()

        ```bash
        npm install -g yo generator-easy-ui5
        ```

## Step-by-step Instruction

1. Install XLSX. Open your project (the www folder) and type in the terminal:

    npm install

        ```bash
        npm i xlsx
        ```

2. Use it somewhere in your code (code competition should work). For example:

    Testxlsx.ts

        ```ts
        import BaseController from "computec/appengine/core/BaseController";
        import { utils } from "xlsx"
        
        /**
        * @namespace extlibtest.controller
        */
        export default class Testxlsx extends BaseController {
            onInit(): void {
                super.onInit();
                this.setPageName("Test XLSX");
            }
            onTestXLSX() {
                console.log(utils.book_new());
            }
        }
        ```

3. Add UI5-tooling-modules that will pack external library into the build. In the terminal:

    UI5 Tooling Extensions

        ```text
        # 1. Start Easy UI5 generator add-extension
        /> yo easy-ui5 add-extension
        # 2. Select only Tooling and hit enter
        # 3. Select ui5-tooling-modulesadd-extension
        # 4. Set verbose to n
        # 5. Set prependPathMappings to y
        
        It should look like this:
        yo easy-ui5 add-extension
        
            _-----_
            |       |    ╭──────────────────────────╮
            |--(o)--|    │  Welcome to the easy-ui5 │
        `---------´   │     3.5.1 generator!     │
            ( _´U`_ )    ╰──────────────────────────╯
            /___A___\   /
            |  ~  |
        __'.___.'__
        ´   `  |° ´ Y `
        
        (node:40568) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
        (Use `node --trace-warnings ...` to show where the warning was created)
        ? Which extension type would you like to add? Tooling
        ? Choose your tooling extensions? ui5-tooling-modules - UI5 tooling extensions to load and convert node modules as UI5 AMD-like modules
        Set your variables for ui5-tooling-modules
        ? Set 'verbose' - Enables verbose logging (default to `false`) Yes
        ? Set 'prependPathMappings' - Prepends the path mappings for the UI5 loader to the `Component.js` which allows to run the Component using 3rd party libs in e.g. Fiori launchpad environments (default to
        `false`) (Y/n) yt
        ```

4. Open ui5.yaml and fix name in builder → customTasks. Change ui5-tooling-modules to ui5-tooling-modules-task. Finally, it should look similar to this:

    ui5.yaml

        ```yaml
        specVersion: '2.0'
        metadata:
        name: extlibtest
        type: application
        framework:
        name: SAPUI5
        version: 1.90.0
        libraries:
            - name: sap.m
            - name: sap.ui.core
            - name: sap.ui.unified
            - name: themelib_sap_fiori_3
        server:
        customMiddleware:
            - name: ui5-tooling-modules-middleware
            afterMiddleware: compression
            configuration:
                verbose: true
                prependPathMappings: true
            - name: ui5-middleware-livereload
            afterMiddleware: ui5-tooling-modules-middleware
            configuration:
                debug: true
                extraExts: xml,json,properties
                port: 35729
                path: webapp
        builder:
        customTasks:
            - name: ui5-tooling-modules-task
            afterTask: replaceVersion
            configuration:
                verbose: false
                prependPathMappings: true
        ```

5. Build:

        ```bash
        npm run build
        ```

6. Copy the resources folder from the dist directory to the webapp directory.

    :::warning
    This step is required only once during the development phase. By doing this, and with the path mapping configured in Step 7, you’ll be able to test your plugin using the external library directly from the webapp folder right after TypeScript transpilation - without needing to rebuild each time.

    However, in some cases, you may still need to perform a full rebuild to ensure the files are correctly copied into the plugins folder.
    :::

7. Add mapping to Component.ts:

    Component.ts

        ```ts
        sap.ui.loader.config(
                    {
                        paths: { "xlsx": sap.ui.require.Url("externallibs/resources/xlsx")}
                    }n
                );
        ```

    Finally, here’s how your Component.ts might look:

    Component.ts

        ```ts
        import UIComponent from "computec/appengine/ui/core/UIComponent";
        import { $UIComponentSettings } from "sap/ui/core/UIComponent";
        
        /**
        * @namespace externallibs
        */
        export default class Component extends UIComponent {
        
            constructor(mSettings?: $UIComponentSettings) {
                super(mSettings);
                sap.ui.loader.config(
                    {
                        paths: { "xlsx": sap.ui.require.toUrl("externallibs/resources/xlsx")}
                    }
                );
            }
            public static metadata = {
                manifest: "json"
            }
        
            init() {
                super.init();
                super.onInit();
                this.getRouter().initialize();
            }
        }
        ```

---
