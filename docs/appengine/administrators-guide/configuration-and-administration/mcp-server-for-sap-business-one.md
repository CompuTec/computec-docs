---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 5
unlisted: false
---

# MCP Server for SAP Business One

## Requirements

Before you begin, make sure the following prerequisites are met:

* **CompuTec AppEngine** is installed. Minimum version `3.2509.1-rc-02`.
* **OIDC authentication** is enabled in **SAP Business One**.  
Here's how to check it:
  * In the **SAP SLD server**, open the **Identity Providers** tab.
  * Make sure that **SAP Business One Authentication Server** is enabled.

## Enable MCP for a company in CompuTec AppEngine

To allow **MCP Server** access for a specific **CompuTec AppEngine company**, follow these steps:

1. Log in to the **CompuTec AppEngine Administration Panel**.
2. Go to **Configuration**.

    ![a screen showing where to find configuration tab](media/mcp-server/mcp-serv-1.png)

3. Locate the company and make sure that it's **active**.

    ![a green toggle next to the company name indicates that it's active](media/mcp-server/mcp-serv-2.png)

4. Click the **company name** to open its details.
5. Click **Settings**.

    ![settings button in the company details](media/mcp-server/mcp-serv-3.png)

6. Choose ``Yes`` in the **EnableMcpServer** field.

    ![alt text](media/mcp-server/mcp-serv-4.png)

7. Click **Save & Close** to save your changes.

## Set user authorizations

To allow users to perform actions through **MCP**, follow these steps:

1. Open **SAP Business One**.
2. Go to **Menu** > **Administration** > **System Initialization** > **Authorizations**.

    ![navigation to authorizations tab in sap business one](media/mcp-server/mcp-serv-5.png)

3. Navigate to **General Authorizations**.

    ![navigation to general authorizations tab in sap business one](media/mcp-server/mcp-serv-6.png)

4. Use **Find Next** field to locate the ``Allow MCP Server to execute modification commands`` authorization.

    ![Allow MCP Server to execute modification commands authorization in sap budiness one](media/mcp-server/mcp-serv-7.png)

5. Assign it to the required users or groups.

    ![assigning authorizations to chosen users or gorups in sap b1](media/mcp-server/mcp-serv-8.png)

6. Save the changes.

    :::info[Important]
        Only users with this authorization can execute modification commands using the **MCP Server**.
    :::

## Supported AI Clients

Currently, the **MCP Server** can be used with several AI tools:

* **Claude** (recommended): Claude desktop version requires minimum:
  * *Pro Plan Subscription* - (only in Development Mode)
  * *Team* Plan Subscription or **Claude for Work** (connectors)
* **GitHub Copilot** - Configure the `mcp.json` file. You can find the configuration in AppEngine under *Administration -> Advanced Settings -> MCP -> GitHub Copilot*.
* **Claude Code**

:::caution
Note that this may change at any time. For the current situation, please refer to the AI documentation.
:::

### Recommended AI Client for MCP Server

When using the **CompuTec AppEngine MCP Server** with AI tools, we recommend **Claude** over **GitHub Copilot** for most scenarios:

* Use **Claude** if you want a simple, user-friendly setup
* Use **Copilot** if you are comfortable working in **Visual Studio Code** and developer tools

**Why Claude is recommended:**

* Designed with native support for local MCP servers
* Offers a more user-friendly setup, especially in **Claude Desktop**
* Suitable for non-technical users and business users
* Provides built-in configuration flows for MCP connections

**About GitHub Copilot:**

* MCP integration is supported, but requires manual configuration in **Visual Studio Code**
* Managed by ``mcp.json`` and then used from **Copilot Chat** in **Agent** mode
* More suitable for developers and technical users

## Build-in Tools

* **Session Tools** - Allows you to get a list of companies and connect to the one the user chooses. It also allows you to get information about the connected SAP Business One user.
* **Access to Service Layer Objects and Metadata** - Allows adding and retrieving all major business objects in SAP Business One.
* **Access to AppEngine Plugin Information and Objects** - Allows AI to get information about the plugins installed for this company. It can also manipulate their business objects.
* **Opening** documents and master data in SAP Business One and SAP Web Client.
* **Inventory Levels**
* **Approval Procedures**

If you have an idea for an MCP tool that would be useful, please share it with us and we will be happy to implement it in AppEngine as a standard tool. However, you can also write your own tools by creating an AppEngine Plugin.
[How to create own tool example](../../developers-guide/basic-and-business-logic/appengine-plugin/ae-mcp-tool.md)

### Troubleshooting

1. In the **CompuTec AppEngine Administration Panel**, go to **Advanced Settings**.
2. In the **MCP** section, you should see that the **MCP** server is ``active`` (toggle button is **green**) and the **Client ID** is filled with the ``OpenID Client ID``.
3. If the **MCP** indicator is disabled, please make sure that all requirements are met.
4. If the indicator is still off, please go to **Configuration** and press the **Discover** button.

## Connect Claude Desktop to SAP Business One by CompuTec AppEngine

### Pro Plan setup

1. Install **Node.js**: [Download Node.js](https://nodejs.org/en/download/)
2. Launch **Claude Desktop** on your computer.
3. Open **Settings** by clicking on the **Claude menu** in your system's menu bar, and then selecting **Settings...**.
4. Navigate to the **Developer** tab in the settings window that appears.
5. Click the **Edit Config** button to open the `claude_desktop_config.json` file.
6. Go to the **CompuTec AppEngine Administration Panel** > **Advanced Settings** page, and in the **MCP** tab, find the **Claude for Code configuration** and copy it.
7. In the `claude_desktop_config.json`, in the `mcpServers` section, paste the previously copied content. It should be similar to the following:

    ```http
    {
      "mcpServers": {
        "computecAppengine": {
          "command": "npx",
          "args": [
            "-y",
            "@computec/mcp-remote",
            "https://localhost:54001/mcp",
            "--static-oauth-client-info-base64",
            "[some generated token]",
            "--host",
            "localhost",
            "--force-refresh"
          ],
          "env": {
            "NODE_TLS_REJECT_UNAUTHORIZED": "0"
          }
        }
      },
      "isUsingBuiltInNodeForMcp": true
    }
    ```

### Team Plan setup

1. In the **Connectors** settings, click **Add Custom Connector**.
2. Enter a name and the address of **CompuTec AppEngine**, e.g., `https://localhost:54001/mcp`.
3. In the advanced section, copy the ``OAuth Client ID`` and ``Client Secret`` from **CompuTec AppEngine Administration Panel** > **Advanced Settings** > **MCP**.

### Troubleshooting

If you are connected but it seems there is a session problem:

1. Restart the application. For **Claude** and **ChatGPT**, please note that there is a process in the system tray, and closing the application window does not restart it. You must click the icon and select the close option.
2. Go to the `c:\Users\[windowsUserAccountName]\.mcp-auth` folder and remove its contents.
3. Open **Claude Desktop** or the **ChatGPT** application again. The browser should open, where you must authenticate with your **SAP B1 user**.

## Use GitHub Copilot with MCP Server (VS Code)

If you prefer to use **GitHub Copilot**, follow these steps to configure the **MCP Server** in **Visual Studio Code**.

1. Open the following file: ``C:\Users\<USERNAME>\AppData\Roaming\Code\User\mcp.json``.
2. Go to **CompuTec AppEngine Administration Panel** > **Advanced Settings** > **MCP**.
3. Copy the **GitHub Copilot configuration**.
4. Paste it into the ``mcp.json`` file.
5. Your configuration should look similar to this:

    ```http
      {
      "servers": {
        "computecAppengine": {
          "command": "npx",
          "args": [
            "-y",
            "@computec/mcp-remote",
            "https://XXXXX:54001/mcp",
            "--static-oauth-client-info",
            "{\\\"client_id\\\":\\\"XXXXXXXXXXXXXXXXXXXXXXXXXXX\\\",\\\"client_secret\\\":\\\"XXXXXXXXXXXXXXXXXXXXXXXXXXXX\\\"}",
            "--host",
            "localhost",
            "--force-refresh"
          ],
          "env": {
            "NODE_TLS_REJECT_UNAUTHORIZED": "0"
          },
          "description": "CompuTec AppEngine MCP Server with browser authentication"
        }
      }
      }
    ```

6. Restart **Visual Studio Code**.
7. Open **Copilot Chat** in **Agent** mode.
8. Done! Now you can start interacting with the **MCP Server**.

:::inof[note]

If the **MCP Server** is enabled but not working as expected, verify:

* The correct AI client is configured (**Claude** vs **Copilot).
* **MCP** configuration is properly copied from **CompuTec AppEngine**.
* The application (**Claude**, **VS Code**, **ChatGPT**) has been fully restarted (including background processes).

:::
