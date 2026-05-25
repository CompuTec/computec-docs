---
sidebar_position: 5
---

# CompuTec AppEngine Actions

**CompuTec AppEngine Action** is a business operation that users can execute directly from the **CompuTec AppEngine** interface.

Actions appear as buttons or menu options and allow users to perform operations on selected records without leaving the current screen.

For example, an Action can:

- Generate a file
- Send data to an external system
- Open a SAP Business One document
- Start a background process
- Redirect the user to another screen

Actions are implemented by plugin developers and become available automatically after the plugin is installed.

## How actions work

When users select one or more records, **CompuTec AppEngine** automatically checks which Actions are available for the selected data.

Before an action becomes available, the system verifies:

- the selected object type
- user permissions
- required parameter values
- custom execution conditions

If all conditions are met, the action becomes available in the interface.

After the user executes the action, the system performs the operation and returns the result to the user interface.

## Action execution flow

The following process occurs when a user executes an action:

```http
User selects records
          │
          ▼
System checks whether the action can run
          │
          ▼
Available actions are displayed
          │
          ▼
User clicks the action name
          │
          ▼
The action performs the business operation 
(file download, redirect, task, message, etc.)
          │
          ▼
User sees the result
```

This design prevents users from executing actions on unsupported or invalid records.

## SAP Business One object types

Every business object in **SAP Business One** has a unique **Object Code**. This code identifies the object type internally within the system.

**CompuTec AppEngine Actions** are assigned to specific object types. The system uses the **Object Code** to determine which actions are available for selected records.

Examples of **SAP Business One** object codes:

| Object Code | Object Type |
| --- | --- |
| ``17`` | Sales Order |
| ``13`` | A/R Invoice |
| ``15`` | Delivery |
| ``23`` | Sales Quotation |
| ``4`` | Item |

Plugins built on **CompuTec Core** can also define custom object types with their own codes.  

Examples:

| Object Code | Object Type |
| --- | --- |
| ``CT_WMS_TASK`` | Warehouse Task |
| ``CT_PROD_BATCH`` | Production Batch |
| ``CT_QUALITY_INS`` | Quality Inspection |
| ``CT_SYNC_JOB`` | Synchronization Job |

When an action is defined, it declares which **Object Code(s)** it supports. The UI uses this to decide when to show that **Action** button.

## Action parameters

Every action needs some information from the selected record to do its work, for example, the document's internal number `DocEntry` or its unique code `Code`.

Typical parameters include:

- ``DocEntry``
- ``Code``
- ``ItemCode``
- ``WarehouseCode``

The system automatically reads parameter values from the selected records and passes them to the action during execution.

Example parameter definitions:

```http
AddParameter<string>("Code")
AddParameter<int>("DocEntry")
```

:::note[info]
In this example:

- ``Code`` reads the **Code** field from selected records
- ``DocEntry`` reads the document entry number

:::

Parameters can be:

- required
- optional
- single-value
- multi-value

If a required parameter value is missing, the action cannot execute for that record.

## Single and multiple record execution

Actions can support either:

- single record execution
- multiple record execution

### Single Actions

**Single Actions** work only when exactly one row is selected.

Typical examples include opening a document, generating a QR code, or redirecting to a detail screen.

Example registration:

```http
.AsSingle()
```

If multiple rows are selected, the action becomes unavailable.

### Multiple Actions

**Multiple Actions** can process several rows at the same time.

Typical examples include sending invoices, exporting records, or releasing production orders.

Example registration:

```http
.AsMulti()
```

## Action result types

After execution, an action returns a result to the user interface.

Different result types control what the user sees after execution.

| Result Type | Description |
| --- | --- |
| ``ActionResultStream`` | Downloads a file |
| ``ActionResultLinks`` | Displays clickable links |
| ``ActionResultTask`` | Starts a background task |
| ``ActionRedirectResult`` | Redirects the user to another screen |
| ``ActionResultOpen`` | Opens a SAP Business One form |
| ``ActionResultMessage`` | Displays a message dialog |
| ``CtActionResult`` | Completes without visible output |

## Action conditions

Before an action becomes available, the system runs a condition check. This check determines whether the action can run for each selected record.  

The condition check is implemented in the ``CanExecute`` method.

Example use cases include preventing duplicate processing, validating document status, checking authorization rules, or checking required data.

If the condition returns false, the action becomes unavailable for that record.

Example: A *Generate XML* action may become unavailable when the XML file has already been generated successfully.

## Implement an action

Actions are implemented as C# classes that implement the ``ICtAction<TResult>`` interface.

The generic type ``TResult`` defines the action result type.

Basic structure:

```http

public class MyAction : ICtAction<ActionResultMessage>
{
    public Task<ActionCanExecuteResultModel> CanExecute(ActionExecuteModel parameters)
    {
        // Validate whether the Action can run
    }

    public Task<ActionResultMessage> Execute(ActionExecuteModel parameters)
    {
        // Execute business logic
    }
}
```

An action contains two main methods:

| Method | Purpose |
| --- | --- |
| ``CanExecute`` | Determines whether the Action can run |
| ``Execute`` | Executes the business operation |

### Example: Redirect action

The following example opens a **Sales Order** screen.

```http

    public class OpenSalesOrderAction : ICtAction<ActionRedirectResult>
    {
        private readonly ICoreConnection _connection;

        public OpenSalesOrderAction(ICoreConnection connection)
        {
            _connection = connection;
        }

        public Task<ActionCanExecuteResultModel> CanExecute(ActionExecuteModel parameters)
        {
            return Task.FromResult(parameters.BuildCanExecuteResult(_ => true));
        }

        public Task<ActionRedirectResult> Execute(ActionExecuteModel parameters)
        {
            var docEntry = parameters.GetParameters<int>("DocEntry").First();
            var url = $"#/plugin/my.plugin,salesOrder/{docEntry}";

            return Task.FromResult(new ActionRedirectResult(url, "_self"));
        }
    }

```

This action:

- reads the ``DocEntry`` parameter
- builds a screen URL
- redirects the user to the selected **Sales Order**

### Example: Action with validation

The following example generates XML files only when XML has not already been created.

```http
public class GenerateXmlAction : ICtAction<ActionResultLinks>
{
    private readonly ICoreConnection _coreConnection;

    public GenerateXmlAction(ICoreConnection coreConnection)
    {
        _coreConnection = coreConnection;
    }

    public Task<ActionCanExecuteResultModel> CanExecute(ActionExecuteModel parameters)
    {
        var dataContext = _coreConnection.GetService<IDataContext>();
        var codes = parameters.GetParameters<string>("Code").ToArray();
        var invoices = dataContext.Get<IKsefOutputInvoice, string>(codes);

        var result = parameters.BuildCanExecuteResult(verify =>
        {
            var code = verify.GetParameterValue<string>("Code");
            var invoice = invoices.FirstOrDefault(p => p.Code == code);

            if (invoice == null)
                return false;

            return invoice.U_XmlGenStatus != KsefXmlGenerationType.Success;
        });

        return Task.FromResult(result);
    }

    public async Task<ActionResultLinks> Execute(ActionExecuteModel parameters)
    {
        var codes = parameters.GetParameters<string>("Code").ToArray();

        return new ActionResultLinks(codes);
    }
}
```

This action:

- validates invoice status before execution
- prevents duplicate XML generation
- returns generated file links

## Register an action

Actions must be registered in the plugin's ``Info.cs`` file.

Registration defines:

- action name
- supported object types
- execution mode
- parameters
- authorization settings
- descriptions and icons

Example:

```http
public override void RegisterActions(ActionsBuilder builder)
{
    builder
        .AddAction<GenerateXmlAction>(configure =>
            configure
                .AsMulti()
                .WithName("Generate XML")
                .WithDescription("Generates XML files")
                .WithTranslationId("GenerateXml")
                .WithSupportedEntities(new EntityMetadata()
                {
                    ObjectCode = "CT_KS_OUTINV",
                    ObjectName = "KSeF Output Invoice",
                    Description = "KSeF Output Invoice"
                })
                .AddParameter<string>("Code"));
}
```

After registration and plugin installation, the action becomes available automatically in supported screens.

## Builder methods reference

| Method | Purpose |
| --- | --- |
| ``.AsSingle()`` | Allows execution for one selected record |
| ``.AsMulti()`` | Allows execution for multiple records |
| ``.WithName()`` | Defines the Action label |
| ``.WithDescription()`` | Defines the tooltip description |
| ``.WithTranslationId()`` | Defines the translation key |
| ``.WithIcon()`` | Defines the SAP icon |
| ``.WithSupportedEntities()`` | Defines supported object types |
| ``.AddParameter<T>()`` | Defines an Action parameter |
| ``.WithAuthorizationId()`` | Defines required authorization |
| ``.WithHelpLink()`` | Adds a documentation link |

## Use case: Warehouse Management plugin

The following examples show how **CompuTec AppEngine** actions can support warehouse operations in **SAP Business One**.

### Release pick list

| Property | Value |
| --- | --- |
| Object type | Pick List |
| Execution mode | Multi |
| Result | Message |
| Condition | Only available for pick lists with Open status |

#### What it does

This action releases selected pick lists for warehouse processing. Warehouse employees can select multiple pick lists and release them in a single operation.

#### Why the condition matters

Pick lists that are already released or closed cannot be processed again.

### Generate shipping labels

| Property | Value |
| --- | --- |
| Object type | Delivery |
| Execution mode | Multi |
| Result | File download |
| Condition | Only available for deliveries with a shipping address |

#### What it does

This action generates printable shipping labels for selected deliveries.

The action returns a ZIP archive containing PDF label files.

#### Why the condition matters

    A shipping label cannot be generated if the delivery document does not contain shipping information.

## Best practices

- Keep each action focused on a single operation.
- Use clear and business-friendly names.
- Validate required values before execution.
- Use ``CanExecute`` to prevent invalid operations.
- Restrict actions to supported object types only.
- Use background tasks for long-running operations.
- Return clear success and error messages.
- Avoid destructive operations without confirmation dialogs.

## Troubleshooting

### Action is not visible

Verify that:

- the plugin is installed
- the action is registered correctly
- the action supports the selected object type
- the user has the required permissions

### Action is disabled

Verify that:

- the required parameter values exist
- the selected rows meet the execution conditions
- the correct number of rows is selected

### Action doesn't return the expected result

Verify that:

- the correct result type is used
- parameter mappings are correct
- the business logic completes successfully
