---
sidebar_position: 1
---

# CompuTec WebUp Release Notes

## CompuTec WebUp 1.2611.1

**Release Date: 26 November 2026**

**Requirements**: CompuTec AppEngine 3.2611.6 or later

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | Auto Mode – Live Preview | **The new Auto Mode lets you customize views and see your changes automatically in the SAP Business One Web Client.** **CompuTec WebUp** saves changes in the background as you work, and the open preview refreshes to show the latest saved configuration. You can continue editing while a save or a preview refresh is in progress. A **Preview updated** notification confirms that the preview is current. The **Autosave** option in the side panel footer is on by default, and **CompuTec WebUp** remembers your choice in the browser. You can switch back to manual saving and previewing at any time. |
| Added | Simple Validation | **The new Simple Validation Smart Action lets you configure field validation rules without writing scripts or SQL queries.** You can define rules for text, numbers, dates, and unique values. Date rules can use the company holiday calendar. Each rule has its own severity and message. **CompuTec WebUp** sets the value state of the field, shows the configured message, and can optionally cancel the document or object action. |
| Added | Custom SQL Parameters | **You can now get data from the database with Custom SQL parameters.** Write a `SELECT` query with declared parameters in an SQL editor that suggests database schema objects as you type. Query results can be used in control properties, binding expressions, and grids. You can access individual result rows with the **First**, **Last**, and **At** templates. Only authorized users can create, edit, or delete Custom SQL definitions. |
| Added | Smart Action Events | You can now feed Smart Action parameters on control events and view events from a **Custom Model** parameter. In the parameter mapping, select the new **Parameter** source. |
| Added | WebUp Management View | **You can now open CompuTec WebUp as a standalone, full-page view** from the **CompuTec AppEngine Launchpad** or from the side panel. The view shows a read-only overview of the Web Client views and their versions, including the active version. |
| Improved | Smart Actions – View Events | Smart Actions can now also run when a user leaves a document. In addition to the existing form and data loading events, you can run business logic at more points in the document lifecycle. |
| Improved | Parameters – Automatic Refresh | **Custom Model, Custom SQL, and OData parameter values now refresh automatically when the data they depend on changes.** You don't need to reload the view to see current values. |
| Improved | Parameter Builder | In the **Parameter Builder**, you can now link **Custom Model** and **Custom SQL** parameters to control properties. You can search their properties and result columns and drag them into binding expressions. |
| Improved | Smart Action Scripts | Smart Action scripts can now read a **Custom Model** by name. The script editor suggests model names and their properties as you type. |
| Improved | Smart Actions – Navigation | Smart Actions attached to a control, and their parameters, now have a **Go to Definition** link that opens the Smart Action definition. |
| Improved | Configuration Scope | New Parameters, Actions, and Smart Actions now use the **Object** scope by default. Existing definitions keep their scope. |
| Improved | SQL Validation | **SQL Validation** now uses the same SQL editor, `@Name` parameter syntax, and on-demand schema loading as Custom SQL parameters. The options have clearer names: **Prevent Default** now states that it blocks the document or object action, and **Set Value** is now **Set Value State**. |
| Improved | Auto Mode | In **Auto Mode**, adding an item shows a single **Add** button instead of **Add & Preview**, because the preview refreshes automatically. The same single **Add** button now appears when you add a Smart Action or parameter from its list. |
| Improved | Script Editor | **The script editor now shows type errors in addition to syntax errors**, such as unknown names and wrong argument types. |
| Improved | Dot Actions | The icon picker for **Dot Actions** now shows a preview of the selected icon. |
| Improved | Supported Views | You can now select fields of user-defined tables (UDTs) in the **CompuTec WebUp** selection mode. |
| Improved | Performance | **CompuTec WebUp is faster and more reliable** when you edit customizations, select controls, generate previews, and navigate between records. The side panel, the view generator, and the Web Client runtime now cause fewer layout rebuilds and data reloads. Saving the placement of a control is also faster. |
| Fixed | SQL Validation | Validation queries in the SAP Business One Web Client **Add** mode no longer fail with the error `invalid column name` when they reference fields that are not filled in yet. If a validation query cannot run, **CompuTec WebUp** reports the problem and blocks the user only when the validation is set to block. |
| Fixed | Date Picker Controls | An invalid **Minimum Date** or **Maximum Date** value on a Date Picker control, such as **Posting Date**, no longer breaks the whole Web Client form. |
| Fixed | Grid Controls | You can add **Grid** controls through the side panel again. A column added to a Grid is now placed in that Grid, so the Grid no longer renders without columns. |
| Fixed | Control Configuration | New columns and multi-selection inputs can now be selected from the side panel. A second new control of the same type now gets its control type and can be placed in **Control Details**. |
| Fixed | Smart Action Bindings | A control no longer stays marked as changed after you unlink its last Smart Action from an event. Event bindings show the current name of a Smart Action after you rename it. A Smart Action that cannot be deleted keeps its bindings. |
| Fixed | Navigation Smart Actions | **Navigation Smart Actions** can now be saved when the target application is the first or the only one in the list. |
| Fixed | Binding Expressions | **Global-scope Binding Expression parameters can no longer use document data that exists only in a specific view.** **CompuTec WebUp** flags invalid references and blocks saving. Long expressions now wrap inside the editor, and template chips stay readable in the dark theme. |
| Fixed | Script and SQL Editors | Code suggestions and hover tooltips are no longer cut off at the edge of the editor. The **Dot Action** script editor now suggests the namespaces and enumerations of the SAP Business One UI API. |
| Fixed | Control List | **Object Number** controls now show their description in the control list instead of the raw dynamic number expression. |
| Fixed | View Versions | **Copying a view version now copies the complete configuration, including the action mappings.** If the copy fails, **CompuTec WebUp** creates no incomplete version. |
| Fixed | View Versions | **Activating a view version now either succeeds completely or leaves every version as it was.** A failed activation no longer leaves views partly updated. |
| Fixed | View Versions | A missing Smart Action no longer prevents the view tree from loading, and failed deletions of definitions are now reported. A removed pinned version no longer breaks layout builds. |
| Fixed | Editor State | Open forms in the side panel now stay open after a layout rebuild of the same version. Discarding changes clears the changed flag. |
| Fixed | Preview Generation | Preview generation no longer hangs, and busy dialogs no longer close each other. |
| Fixed | Control Selection | Ending control selection without a pick, or pressing **Esc**, now cancels selection cleanly. The data model dialog behaves the same way. |
| Fixed | Smart Action Parameters | Updating **CompuTec WebUp** no longer resets the required flag of existing Smart Action parameters. |
| Fixed | Generated Extensions | Generated Web Client extensions are more reliable. Names no longer collide, navigation is escaped safely, and Smart Action handlers stay in place when a parameter fails. |
| Fixed | Numbering | **CompuTec WebUp** no longer leaves a sequence row missing when you use a code prefix for the first time. |
| Fixed | Side Panel | Tables and validation results are no longer limited to 100 rows. The parameter search keeps its filter when you press **Enter**. Script editor suggestions now match the runtime, and several translations are corrected. |

## CompuTec WebUp 1.2610.2

**Release Date: 24 October 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | Smart Actions | **View Actions have been replaced by Smart Actions linked to View Events**, such as form and data loading. You can configure when each Smart Action runs, enable or disable individual bindings, and control their execution order. |
| Added | Smart Actions | **View Actions** have been replaced by **Smart Actions** linked to **View Events**. When you update to this version, your existing **View Actions** are converted to **Smart Actions automatically** and connected to the same events. |
| Added | SQL Validation | You can now validate SAP Business One documents using **SQL Validation Smart Actions**. Administrators can write and test read-only SQL queries against the current document and use built-in parameters, such as the page mode and document keys, to create context-specific validation rules. |
| Added | Navigation Smart Actions | You can now use **Navigation Smart Actions** to open SAP Business One documents, document lists with a selected variant, or CompuTec AppEngine application routes. **Navigation** can open in the current window or a new browser tab, and you can pass optional parameters to the destination. |
| Added | Smart Action Parameters | You can now **configure required and optional Smart Action parameters with static or reference-based default values**. CompuTec WebUp validates required parameters and reports missing mappings before an action is activated. |
| Added | Control Events | You can now **create a Smart Action directly from a control event** using the **+** button. The new action is automatically linked to the event when saved, simplifying configuration. |
| Added | Dot Actions | You can now add custom actions to the **SAP Business One Web Client's "." command palette**. Configure **Dot Actions** in **CompuTec WebUp** and link them to **Smart Actions** so users can run them directly from the **SAP Business One Web Client**. |
| Added | Parameters | You can now create **reusable Parameters** and reference them in control properties and scripts. The new **Parameters designer** supports **Binding Expression** parameters for dynamic values and **Custom Model** parameters for combining static values and document fields. |
| Added | Custom Models | You can now create **Custom Model parameters** with named properties and preview their values. These parameters can be used in **Dynamic Properties**, the **Parameter Builder**, and **Smart Action** event bindings to share information across your customized view. |
| Added | Grid Controls | You can now attach **Smart Actions** to events of controls inside grid cells, such as the **Quantity** field on **Sales Order** lines. This allows actions to respond to changes made directly in document grids. |
| Added | Supported Views | You can now customize **additional SAP Business One Web Client views**, including views introduced in **Feature Package 2608**, such as **Employees**, **Projects**, **Campaigns**, **Pick Lists**, and **Inventory Opening Balances**. Support for **User-Defined Table** views has also been added. |
| Improved | Save & Preview | **Save & Preview** now refreshes the preview without reloading the entire **SAP Business One Web Client**, making preview updates faster while preserving the current Web Client state. Changes also take effect on the first preview after saving. |
| Improved | Web Client Integration | **CompuTec WebUp extensions on SAP Business One Web Client 2602 and later** can use the **Web Client's authentication** to communicate with CompuTec AppEngine, removing the need for the CompuTec WebUp Client browser extension for these requests. |
| Improved | Binding Expression Editor | The **Binding Expression editor** now supports enumerations, improved drag-and-drop behavior, and more convenient searching. You can move existing expressions between template slots, find matching items more easily, and use corrected empty-value checks for `null` and `undefined`. |
| Improved | Smart Actions | The unavailable **During** event trigger has been removed from Smart Action configuration, so you can select only supported trigger options. |
| Improved | Control Properties | **Required control properties** are now clearly marked and validated before saving. Missing values appear under **Basic Options**, helping you identify incomplete configurations and preventing invalid controls from being saved. |
| Improved | Parameters | You can now create a parameter directly from a control property and link it automatically. A parameter preview is also available, with an option to remove the binding when it is no longer needed. |
| Improved | Dot Actions | **Dot Action** categories and icons are now easier to configure using saved category suggestions and predefined SAPUI5 icons, helping ensure actions appear in the correct command palette group. |
| Fixed | Menu Button | **Menu Items** added to a **CompuTec WebUp Menu Button** are now saved with the correct control relationship, preventing the view from being rejected as unsupported. |
| Fixed | Editor Navigation | **CompuTec WebUp** now warns you about unsaved changes when you leave a parameter or Smart Action that you are creating from a control or event. You can choose to keep editing or discard the changes without losing the connection to the original field. |
| Fixed | Editor Footer | **Save**, **Add**, and **Cancel** buttons now respond correctly when editing controls, parameters, and Smart Actions. This resolves issues with disabled buttons, incorrect footer actions, and changes not being detected. |
| Fixed | Save & Preview | **Save & Preview** no longer generates a preview from unsaved changes when validation prevents saving, ensuring the preview reflects the saved configuration. |
| Fixed | Grid Controls | **New Grid controls** now render correctly in the Web Client preview after their required properties are configured. This also resolves an issue where an unset **Rows Data** property could cause the preview to display a blank page. |
| Fixed | Control Configuration | **Control Type** is now required when adding a control, and target control and placement options remain unavailable until a type is selected. This prevents incomplete control configurations. |
| Fixed | Control Events | **Smart Action parameters** added after an event binding was created now appear in the existing binding and are validated when saving or activating the view. Changes to event trigger timing, such as **Before** or **After**, are also saved correctly. |
| Fixed | Grid Events | **Smart Actions** linked to grid cell events now run correctly in the Web Client, including actions triggered when the **Quantity** field changes on **Sales Order** lines. |
| Fixed | Dynamic Properties | **Dynamic property expressions** are now validated when switching from **Basic** to **Dynamic** mode, and you can save the control after correcting an invalid expression. Controls also reflect changes made to their referenced parameter definitions. |
| Fixed | Smart Action Editor | Changes to **Global** and **Object Smart Action** scripts are now detected and saved correctly. The script editor is also editable in draft views, and typing in the editor enables the appropriate **Save** or **Add** button. |
| Fixed | View Versions | Duplicating a view version now preserves custom parameter and Smart Action names, along with **Binding Expression** and **Custom Model** definitions. |
| Fixed | Custom Models | **Custom Model parameters now support empty static values**, and Object-scope Custom Models are available through `getCustomizedData()` during preview. |
| Fixed | SQL Editor | Selecting a column suggestion in the SQL editor no longer inserts duplicate quotation marks when an opening quote has already been entered. |
| Fixed | Dot Actions | **Global Dot Actions** are now available only on views that support **CompuTec WebUp extensions**, preventing errors when attempting to use them on unsupported views. |
| Fixed | Web Client Integration | **CompuTec WebUp** no longer reports an `initialization timeout` after a successful CompuTec AppEngine request on SAP Business One Web Client 2602 or later. |
| Fixed | Search and Filtering | **Searches** now handle values containing apostrophes correctly, such as `O'Brien`. Search in the **View Code** selection dialog also filters the available views as expected. |
| Fixed | View Selection | **The view version selector now provides a searchable dialog for accessing all available versions** and prevents the selection of versions that do not exist. |
| Fixed | Supported Views | Opening Web Client dialogs and configuration screens no longer causes `unsupported-view or layout` errors in CompuTec WebUp. Wizards that cannot be customized now display a clear message instead of a technical error. |
| Fixed | Supported Views | **Additional Web Client detail views** are now recognized correctly, including **Blanket Agreements**, **Inventory Transfer Requests**, **Deposits**, **Inventory Posting**, **Correction Invoices**, and **User-Defined Tables** and **Objects**. **Stock Transfer Requests** and **Inventory Counting** also use their correct view identifiers. |
| Fixed | Control Layout | **CompuTec WebUp** now handles control relationships and placement more reliably, preventing errors such as `Parent is not set for this control` and preserving the selected control's **Before**, **After**, or **Aggregation** relationship. |

## CompuTec WebUp 1.2608.6

**Release Date: 25 August 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Added | Web Client | Added support for additional **SAP Business One Web Client** views introduced in **SAP Business One 10.0 FP 2608**, allowing them to be customized using the **CompuTec WebUp Manager** side panel. This includes Checks for Payment, Inventory Opening Balances, Inventory Revaluation, Employees, Projects, Campaigns, Forecasts, MRP Runs, Resources, Pick Lists, Reconciliations, and related detail and draft views. |
| Fixed | Web Client | Extended CompuTec WebUp support to additional SAP Business One Web Client screens that previously displayed `Layout error - Unsupported view`. These screens can now be opened and customized using the **CompuTec WebUp Manager** side panel. |

## CompuTec WebUp 1.2608.1

**Release Date: 3 August 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Smart Actions | Fixed an issue where the **Smart Action** script editor was locked in read-only mode for draft views. Scripts can now be created and edited normally when adding or modifying **Smart Actions**. |

## CompuTec WebUp 1.2607.1

**Release Date: 24 July 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | View Actions | Fixed an issue where **Save & Preview** could display an outdated version of a view. Changes to **View Actions** and **View Events** are now applied immediately on the first preview. |

## CompuTec WebUp 1.2606.1

**Release Date: 22 June 2026**

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Fixed | CompuTec WebUp Manager | Added support for **Sales Opportunity** documents in **CompuTec WebUp Manager**. Opening the **CompuTec WebUp Manager** side panel on a **Sales Opportunity** now correctly displays the view designer instead of the ``Unsupported View`` or ``Layout Error`` message, allowing users to design and manage layouts for this document type. |

## CompuTec WebUp 1.2604.1

**Release Date: 1 April 2026**

| Type | Component | Release Note |
| --- | --- | --- |
| Fixed | Smart Actions | Fixed an issue where **Smart Actions** were not always visible, ensuring your configured actions now appear reliably and work as expected. |

## CompuTec WebUp 1.2603.2

**Release Date: 31 March 2026**

| Type | Component | Release Note |
| --- | --- | --- |
| New | Smart Actions | Introduced [**Smart Actions**](/docs/webup/components/smart-actions), extending the concept of **View Actions** by making your logic reusable, flexible, and applicable across multiple areas of the **SAP Business One Web Client**. [Read more](/docs/webup/components/smart-actions) |
| New | Control Management | Added **+ New Control** option, so you can now add your own controls instead of only editing existing ones, giving you full flexibility in UI design. |
| New | Control Management | Added support for two new controls: [**MultiComboBox**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/a8cd89ab240b4496b5b5b9bcdcb66731.html) and [**MultiInput**](https://help.sap.com/docs/SAP_BUSINESS_ONE_WEB_CLIENT/e6ac71d18c7543828bd4463f77d67ff7/63c7fb6ed1f04dd8b2f4625cede634ec.html), enabling more advanced user input scenarios. |
| Improved | CSP | Improved **Content Security Policy (CSP)** handling for **SAP Business One Web Client** environments. |
| Improved | Control Management | **Validation** is now triggered correctly when switching from **Basic** to **Dynamic** expressions, preventing invalid or empty values. |
| Improved | COntrol Management | Added help descriptions for all control properties, including guidance and links to SAP documentation – making configuration easier and faster. |
| Improved | Control Management | Selecting a control in the UI now automatically highlights it in the **Controls** list, making it easier to identify and edit. |
| Improved | View Actions | Introduced new script editor for **View Actions**, improving readability and editing experience for scripts. [Read more](https://microsoft.github.io/monaco-editor/) |
| Improved | UI | Improved handling of loading states and layout rendering, reducing visual glitches during navigation and preview. |
| Fixed | Control Management | Fixed issues with **DataContext** errors when editing controls multiple times, improving stability during configuration. |
| Fixed | UI | Fixed issue where **Save** remained disabled after correcting an invalid expression – you can now save changes without problems. |
