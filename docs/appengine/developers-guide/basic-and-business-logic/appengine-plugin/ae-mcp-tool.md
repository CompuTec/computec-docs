---
sidebar_position: 6
---



# Creating Custom MCP Tools/Resources

CompuTec AppEngine uses the [Model Context Protocol](https://modelcontextprotocol.github.io/csharp-sdk/index.html) library to create and expose the MCP protocol. Creating an MCP tool is straightforward. We have injected the `ICoreCompany` session support for authorization and access to SAP B1 and AppEngine features.

## Example

The example below demonstrates how to create an MCP tool that can execute queries on the SAP B1 company database.

:::important
This example is for demonstration purposes only. Use it at your own risk, as executing certain statements (such as DELETE or DROP) may harm your company database.
:::

1. IOC injection is fully supported in the tool class constructor.
2. The most important aspect is the tool description. Please ensure it describes in detail what the tool does and how to use it, including examples.
3. In the tool name, please add the **CT_CustomTool_** prefix.

```csharp
using System.ComponentModel;
using CompuTec.Core2.AE.Utils.Extensions;
using ModelContextProtocol.Server;

namespace CT.VehOne.mcp;

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

    [McpServerTool(Name = "CT_CustomTool_ExecuteQuery", Destructive = false, ReadOnly = false, Title = "Execute Query In SAP Business Database")]
    [Description(@"**Requires SetCompany first**
    Execute a query in the SAP Business Database. Please check the database type and use the appropriate SQL language. Supported syntaxes are HANA and MSSQL.")]
    public async Task<string> ExecuteQuery([
        Description(@"Query to execute, e.g., Select top 10  \"ItemCode\" from OITM")
    ] string query)
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

## How to Set Up MCP Server

For instructions on how to set up AI with AppEngine MCP, please visit the [documentation](../../../administrators-guide/configuration-and-administration/McpUserGuide.md).
