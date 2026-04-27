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
        Only users with the authorization assigned in **SAP Business One** can execute modification commands using the **MCP Server**.
    :::

## Supported AI Clients

Currently, the **MCP Server** can be used with several AI tools:

* **Claude** (recommended):  
  The desktop version requires one of the following:
  * **Pro Plan Subscription** (for **Development Mode**)
  * **Team Plan Subscription** or **Claude for Work** (connectors)
* **GitHub Copilot**:  
  Requires manual configuration using the ``mcp.json`` file.  
  You can find the required configuration in **CompuTec AppEngine** under: **CompuTec AppEngine Administration Panel** > **Advanced Settings** > **MCP** > **GitHub Copilot**.
* **Claude Code**

:::caution
This information may change over time. For the most up-to-date details, refer to the official AI tool documentation.
:::

### Recommended AI Client

We recommend using **Claude** for most scenarios.

**Why choose Claude:**

* Native support for local MCP servers
* Easier setup, especially in **Claude Desktop**
* Suitable for business users and non-developers
* Built-in configuration experience

**When to use GitHub Copilot:**

Use **GitHub Copilot** if:

* You are comfortable working in **Visual Studio Code**
* You prefer a developer-oriented workflow
* You can manage configuration files like ``mcp.json``

## Built-in MCP Tools

The **MCP Server** provides several ready-to-use tools:

* **Session Tools**:
  * List companies and connect to one
  * Retrieve information about the logged-in SAP Business One user

* **Service Layer Objects and Metadata**:
  * Create and retrieve SAP Business One business objects

* **CompuTec AppEngine Plugin Information and Objects**:
  * Allows AI to get information about the plugins installed for this company
  * Work with plugin business objects

* **Document Access**:
  * Open documents and master data in SAP Business One or Web Client

* **Inventory Levels**

* **Approval Procedures**

:::note[info]
If you have an idea for a useful **MCP** tool, feel free to share it with us - we'll consider adding it as a standard feature in **CompuTec AppEngine**.

You can also create **your own tools** by developing a [custom CompuTec AppEngine plugin](../../developers-guide/basic-and-business-logic/appengine-plugin/ae-mcp-tool.md).
:::

### Troubleshooting MCP Activation

If the **MCP Server** is not working, follow these steps:

1. In the **CompuTec AppEngine Administration Panel**, go to **Advanced Settings**.
2. In the **MCP** section, you should see that:
    * **MCP Server Enabled** toggle is turned on and green.
    * **Client Information** is filled with the ``Client ID`` and ``Client Secret``.

    ![check if mpc server is enabled - a green toggle](media/mcp-server/mcp-serv-claude-00.png)

3. If the **MCP** indicator is disabled, please make sure that all requirements are met.
4. If the indicator is still off, please go to **CompuTec AppEngine Administration Panel** > **Configuration** and press the **Discover** button.

   ![ the discover button in appengine adimistration panel > configuration](media/mcp-server/mcp-serv-claude-001.png)

## Connect Claude Desktop to SAP Business One by CompuTec AppEngine

### Pro Plan setup

1. Install [**Node.js**](https://nodejs.org/en/download/).
2. Launch **Claude Desktop** on your computer.
3. Click the **Claude menu** in your system's menu bar, and select **Settings**.
4. Navigate to **Developer**.
5. Click **Edit Config** to open the `claude_desktop_config.json` file.
6. Go to the **CompuTec AppEngine Administration Panel** > **Advanced Settings**.

    ![go to Advanced Settings of CompuTec AppEngine Administration Panel](media/mcp-server/mcp-serv-claude-1.png)

7. Navigate to the **MCP** tab.

    ![mcp tab in CompuTec AppEngine Administration Panel](media/mcp-server/mcp-serv-claude-2.png)

8. Find the **Claude for Code configuration** and copy it.

    ![Claude for Code configuration in CompuTec AppEngine Administration Panel](media/mcp-server/mcp-serv-claude-3.png)

9. In the `claude_desktop_config.json`, in the **mcpServers** section, paste the previously copied content.  
    Example:

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

If authentication or session issues occur:

1. Restart the application.

    :::info[note]
    Closing the application window does not fully restart it, as it may still be running in the system tray.  
    To properly close it, click the **application icon**, for example, the Claude icon, in the system tray and select **Close**.
    :::

2. Navigate to the following folder: `c:\Users\[windowsUserAccountName]\.mcp-auth`.
3. Delete all files in this folder.
4. Reopen the application, for example, **Claude Desktop**.
5. When the browser opens automatically, sign in again using your **SAP Business One** user credentials.

## Use GitHub Copilot with CompuTec AppEngine MCP Server in VS Code

If you prefer using **GitHub Copilot**, follow these steps:

1. Open the following file on your computer: ``C:\Users\<USERNAME>\AppData\Roaming\Code\User\mcp.json``.
2. In **Computec AppEngine**, to **CompuTec AppEngine Administration Panel** > **Configuration** > **Advanced Configuration**.

    ![go to CompuTec AppEngine Administration Panel > Configuration > Advanced Configuration](media/mcp-server/mcp-serv-001.png)

3. Navigate to the **MCP** tab.

    ![MCP tab](media/mcp-server/mcp-serv-002.png)

4. Copy the **GitHub Copilot configuration**.

    ![copy the configuration](media/mcp-server/mcp-serv-003.png)

5. Paste it into the **mcp.json** file.  
    Example:

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
7. Open **Copilot Chat**.
8. Switch to **Agent** mode.

    ![switching to agent mode in vsc copilot chat](media/mcp-server/mcp-serv-004.png)

9. Done! Now you can start interacting with the **MCP Server**.

    ![using vcs copilot chat](media/mcp-server/mcp-serv-005.png)

:::info[note]

If **CompuTec AppEngine MCP** is not working as expected, check:

* The correct AI client is configured (**Claude** vs **Copilot**).
* **MCP** configuration is properly copied from **CompuTec AppEngine**.
* The application (**Claude**, **VS Code**, **ChatGPT**) has been fully restarted (including background processes).

:::
