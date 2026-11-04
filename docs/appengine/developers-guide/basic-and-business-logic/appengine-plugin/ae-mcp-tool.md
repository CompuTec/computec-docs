---
sidebar_position: 6
---

# Create Custom MCP Tools for CompuTec AppEngine

A custom MCP tool is a C# method in a **CompuTec AppEngine** plugin that AI clients, such as Claude, can call. Create a custom tool when the built-in MCP tools don't cover a workflow that your business needs, for example a company-specific report or a check that follows your own rules.

**CompuTec AppEngine** uses the [Model Context Protocol C# SDK](https://modelcontextprotocol.github.io/csharp-sdk/index.html) to create and expose the MCP protocol. In your tool class, you can use the session of the signed-in user for authorization and to access SAP Business One and **CompuTec AppEngine** features.

:::info[Note]
This article is for developers who write C# and build **CompuTec AppEngine** plugins. To use the built-in tools, you don't need to write code. See [**Get Started with CompuTec MCP Server**](/docs/ai/mcp-server-for-sap-b1/mcp-server-for-sap-business-one) instead.
:::

## Before you start

Before you begin, make sure that:

- You have a **CompuTec AppEngine** plugin project, or you know how to create one. [Read more](/docs/appengine/developers-guide/basic-and-business-logic/appengine-plugin/overview)
- **CompuTec AppEngine** 3.2509.1-rc-02 or later is installed, and **CompuTec MCP Server** is enabled for a test company. Read more <!-- TODO: add link to the Enable the MCP Server article -->
You have a test or demo company to test the tool. Don't test new tools for a production company.
- You have an AI client connected to **CompuTec MCP Server**, for example Claude Desktop. Read more <!-- TODO: add link to the Connect AI clients article -->

## How custom MCP tools work

An AI client doesn't see your code. It reads the name, the title, and the descriptions of your tool, and then decides when to call the tool and which values to send. If the descriptions are vague, the AI client calls the tool at the wrong time or sends wrong values.

For this reason, the description is the most important part of a custom tool. Describe what the tool does, when to use it, what each parameter means, and give an example value.

### Naming and description rules

| Element | Rule | Example |
| --- | --- | --- |
| Tool name (`Name`) | Must start with the prefix `CT_CustomTool_`. | `CT_CustomTool_ExecuteQuery` |
| Title (`Title`) | Short, readable name that the AI client can show to users. | `Execute Query In SAP Business Database` |
| Tool description (`Description`) | Describe in detail what the tool does and how to use it. Include examples and any step that must happen first. | `Requires SetCompany first. Executes a query in the SAP Business One database.` |
| Parameter description (`Description` on a parameter) | Describe the value and give an example. | `Query to execute, for example: SELECT TOP 10 "ItemCode" FROM OITM` |
| Behavior flags (`ReadOnly`, `Destructive`) | Set them so that they match what the tool really does. | `ReadOnly = true` for a tool that only reads data |

:::note[Info]

**Requires SetCompany first** in the example tool means that the AI client must first select a company with the built-in session tools. <!-- TODO: verify with developers that custom tools use the company selected in the current MCP session, and confirm the name of the built-in tool (SetCompany). -->

:::warning[Important]
Set `ReadOnly` and `Destructive` correctly. AI clients can use these flags to decide whether to ask users for approval before a tool runs. <!-- TODO: verify with developers (1) how AI clients use these flags, and (2) whether the SAP Business One authorization "Allow MCP Server to execute modification commands" also applies to custom tools. If it does not, state it here, because administrators need to know. -->
:::

## Step 1: Create the tool class

To create a custom MCP tool, follow these steps:

1. In your **CompuTec AppEngine** plugin project, add a new C# class.
2. Add the `[McpServerToolType]` attribute to the class.
3. Add the dependencies that the tool needs as parameters of the class constructor. The constructor supports inversion of control (IoC) injection. For example, you can inject `ICoreConnection` and `ILogger<T>`.
4. Add a public method for the tool. Add the `[McpServerTool]` attribute and set `Name`, `Title`, `ReadOnly`, and `Destructive`. Start `Name` with `CT_CustomTool_`.
5. Add a `[Description]` attribute to the method. Describe what the tool does, how to use it, and what must happen first. Add at least one example.
6. Add a `[Description]` attribute to every parameter of the method. Describe the value and give an example.
7. Return the result as a string. In the example below, the tool returns JSON.
8. Done! The tool class is ready.

For a complete class, see [Example: a tool that runs a query](#example-a-tool-that-runs-a-query).

## Step 2: Build and deploy the plugin

To make the tool available to AI clients, build the plugin and install it in **CompuTec AppEngine**.

1. Build the plugin project.
2. <!-- TODO: developers to provide: how a tool class is discovered or registered in the plugin (automatically through the attribute, or through an explicit registration), how to package the plugin, and how to install it in the CompuTec AppEngine Administration Panel. Link to the plugin installation article. -->
3. Done! The plugin is installed on the test **CompuTec AppEngine** instance.

## Step 3: Test the tool

To check that AI clients can use your tool, follow these steps:

1. Fully restart your AI client, so that it loads the new tool list. For Claude Desktop, close the app from the tray icon, and then open it again.
2. Start a new chat and enter this prompt:

   ```text
   Which tools do you have for SAP Business One? List the tools whose names start with CT_CustomTool_.
   ```

3. Check that your tool is in the list.
4. Enter a prompt that matches the tool description. For the example tool, enter:

   ```text
   Connect to <your test company> and show me the 10 first item codes from the database.
   ```

   Replace `<your test company>` with the name of your test company.

5. Check that the AI client calls your tool and that the result is correct.
6. Done! The tool works on the test company.

If the AI client doesn't call your tool, or calls it with wrong values, improve the descriptions of the tool and its parameters, and then test again. Test with the same questions that your users will ask.

## Example: a tool that runs a query

The following example creates a tool that runs a query in the SAP Business One company database. The tool name is `CT_CustomTool_ExecuteQuery`.

:::warning[Important]
This example is for demonstration only. The tool runs any statement that the AI client sends, including `DELETE` and `DROP`, and it doesn't apply SAP Business One business rules. It can damage your company database. Use it only on a test company, and don't install it on a production system.
:::

```csharp
using System.ComponentModel;
using CompuTec.Core2.AE.Utils.Extensions;
using Microsoft.Extensions.Logging;
using ModelContextProtocol.Server;

namespace MyCompany.MyPlugin.Mcp;

[McpServerToolType]
internal class MyQueryMCPTool
{
    private readonly ICoreConnection _connection;
    private readonly ILogger<MyQueryMCPTool> _logger;

    public MyQueryMCPTool(ICoreConnection connection, ILogger<MyQueryMCPTool> logger)
    {
        _connection = connection;
        _logger = logger;
    }

    [McpServerTool(
        Name = "CT_CustomTool_ExecuteQuery",
        Destructive = true,
        ReadOnly = false,
        Title = "Execute Query In SAP Business One Database")]
    [Description(@"**Requires SetCompany first**
    Executes a query in the SAP Business One company database.
    Check the database type first and use the matching SQL syntax.
    Supported syntaxes are SAP HANA and Microsoft SQL Server.")]
    public async Task<string> ExecuteQuery(
        [Description(@"Query to execute, for example: SELECT TOP 10 ""ItemCode"" FROM OITM")]
        string query)
    {
        using var measure = _logger.CreateMeasure();
        _logger.LogTrace("MCP tool executing query {query}", query);

        var queryModel = _connection.GetQuery();
        queryModel.CommandText = query;

        using var res = await queryModel.ExecuteAsync();
        return res.GetCachedData().ToSimpleJson();
    }
}
```

The example uses these parts:

- **`[McpServerToolType]`** – Marks the class as a container for MCP tools.
- **Constructor** – Receives the connection to SAP Business One and a logger through injection.
- **`[McpServerTool]`** – Defines the tool name with the `CT_CustomTool_` prefix, a readable title, and the behavior flags. This example sets `Destructive = true`, because the tool can run any statement.
- **`[Description]` on the method** – Tells the AI client what the tool does and that a company must be selected first.
- **`[Description]` on the parameter** – Tells the AI client what to send in `query`, with an example. In a C# verbatim string, write a double quote as two double quotes (`""`).
- **Method body** – Runs the query and returns the result as JSON.

## Next steps

- **CompuTec MCP Server built-in tools** – Check whether a built-in tool already covers your workflow. <!-- TODO: add link -->
- **Security and authorizations** – Learn how SAP Business One authorizations apply to MCP users. <!-- TODO: add link -->
- **Troubleshoot CompuTec MCP Server** – Fix connection and sign-in problems. <!-- TODO: add link -->

:::note[Info]
Do you have an idea for a new built-in tool? [Send it to CompuTec](https://support.computec.pl/), and we will consider it for implementation.
:::
