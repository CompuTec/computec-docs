---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 5
unlisted: true
---

# MCP Server for SAP Business One

## Requirements

* *CompuTec AppEngine* - must be installed, minimum version `3.2509.1-rc-02`.
* *OIDC enabled in SAP Business One* - In the SAP SLD server, make sure that you have the *SAP Business One Authentication Server* enabled (Identity Providers tab).

## Enable Company Database for MCP

1. Log in to the AppEngine Administration Panel.
2. Find the company you want to activate in the Configuration view.
3. Make sure that it is active.
4. Go to the company details, and on the settings page, check the "Enable Company For MCP Server" checkbox.

## User Authorization

In SAP Business One Authorizations, you will find a CompuTec AppEngine user authorization called *Allow MCP Server to execute modification commands*. If you enable this authorization for a user, they will be able to execute modification commands using the MCP Server.

## General information

Currently, there are a few AI clients that can connect to the MCP server:

* **Claude** - Claude desktop version requires minimum:
  * *Pro Plan Subscription* - (only in Development Mode)
  * *Team* Plan Subscription or *Claude for Work* (connectors)
* **ChatGPT** - requires at least one of the following:
  * Business Subscription
  * Enterprise Subscription
  * Edu Subscription
* **GitHub Copilot** - Configure the `mcp.json` file. You can find the configuration in AppEngine under *Administration -> Advanced Settings -> MCP -> GitHub Copilot*.
* **Claude Code**
:::caution
Note that this may change at any time. For the current situation, please refer to the AI documentation.
:::
## Build-in Tools


* **Session Tools** - Allows you to get a list of companies and connect to the one the user chooses. It also allows you to get information about the connected SAP Business One user.
* **Access to Service Layer Objects and Metadata** - Allows adding and retrieving all major business objects in SAP Business One.
* **Access to AppEngine Plugin Information and Objects** - Allows AI to get information about the plugins installed for this company. It can also manipulate their business objects.
* Opening documents and master data in SAP Business One and SAP Web Client.
* **Inventory Levels**
* **Approval Procedures**

If you have an idea for an MCP tool that would be useful, please share it with us and we will be happy to implement it in AppEngine as a standard tool. However, you can also write your own tools by creating an AppEngine Plugin.

## Troubleshooting

In the **CompuTec AppEngine Administration Panel**, please go to **Advanced Settings**. In the MCP section, you should see that the MCP server is active (toggle button is green) and the Client ID is filled with the OpenID Client ID. If the MCP indicator is disabled, please make sure that all requirements are met.
If the indicator is still off, please go to Configuration and press the *Discover* button.

## Connecting Claude Desktop to SAP Business One by CompuTec AppEngine

### Pro Plan setup

1. Install Node.js: [Download Node.js](https://nodejs.org/en/download/)
2. Launch Claude Desktop on your computer.
3. Open Settings by clicking on the Claude menu in your system's menu bar, and then selecting Settings....
4. Navigate to the Developer tab in the settings window that appears.
5. Click the Edit Config button to open the `claude_desktop_config.json` file.
6. Go to the AppEngine Administration -> Advanced Settings page, and in the MCP tab, find the Claude for Code configuration and copy it.
7. In the `claude_desktop_config.json`, in the `mcpServers` section, paste the previously copied content. It should be similar to the following:

```  
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

1. In the Connectors settings, click Add Custom Connector.
2. Enter a name and the address of AppEngine, e.g., `https://localhost:54001/mcp`.
3. In the advanced section, copy the OAuth Client ID and Client Secret from AppEngine Administration -> Advanced Settings -> MCP.

## Authorization problems

If you are connected but it seems there is a session problem:

1. Restart the application. For Claude and ChatGPT, please note that there is a process in the system tray, and closing the application window does not restart it. You must click the icon and select the close option.
2. Go to the `c:\Users\[windowsUserAccountName]\.mcp-auth` folder and remove its contents.
3. Open Claude Desktop or the ChatGPT application again. The browser should open, where you must authenticate with your SAP B1 user.
