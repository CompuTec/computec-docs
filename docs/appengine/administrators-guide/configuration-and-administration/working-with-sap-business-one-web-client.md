---
sidebar_position: 9
---

# Working with SAP Business One Web Client

The CompuTec Web Client Start is an essential tool for integrating plugins and extending the functionality of the SAP Business One Web Client. It enables seamless interaction between CompuTec AppEngine plugins and SAP Business One solutions, offering users enhanced capabilities for managing their ERP system. The CompuTec Web Client Start is installed during company activation.

## Step 1: Install the plugin pack

The Plugins Pack is a WebClientExtension with the collection of plugins that are activated for a company. The Plugins Pack WebClientExtension is unique for each company, hence this process needs to be carried out separately for each company. To access the CompuTec plugins in the SAP Business One Web Client, plugin pack installation is mandatory. This feature ensures centralized management and deployment across desired environments.

To install the plugin pack, follow these steps:

1. Log into the CompuTec AppEngine Administration Panel.

    ![Admin Login](./media/working-with-sap-business-one-web-client/0-appengine-admin-panel-login-screen.png)
2. Navigate to **Configuration**.

    ![Company Details](./media/working-with-sap-business-one-web-client/1-appengine-admin-panel-configuration.png)
3. Find the company name on the list.

    ![Company Details](./media/working-with-sap-business-one-web-client/2-1-appengine-admin-panel-company-details.png)

4. Click **Install WebClient Extension Package**.

    ![Install WebClient Extension Package](./media/working-with-sap-business-one-web-client/2-2-appengine-admin-panel-install-extension.png)

5. After activation/deactivation a new plugin for a company, remember to repeat this process to install the new plugins pack for that company.

## Step 2: Install and activate CompuTec Web Client Start manually using the Extension Manager

The manual activation is mainly provided for SAP Business One Cloud Control Center (CCC).

To manually install and activate CompuTec Web Client Start, follow these steps:

1. Download the CompuTec Web Client Start Installation Pack from Administration Panel -> System.

    ![CompuTec Web Client Start Installation Pack](./media/working-with-sap-business-one-web-client/2-3-appengine-admin-panel-install-webclient-manually.png)

2. Access the Extension Manager by navigating to `https://sqlsap10:40000/ExtensionManager/.`
3. Import the downloaded Installation Pack into the Extension Manager
4. Activate CompuTec Web Client Start for the selected company.
5. Follow the on-screen instructions to complete the activation process.

:::info[note]
Make sure you have the necessary permissions to securely access the Extension Manager.
:::

## Step 3: Configure Content Security Policy (CSP) Settings

To enable proper functionality of the Web Client, especially for embedded frames and cross-domain requests, you need to configure Content Security Policy (CSP) settings in SAP Web Client. Correct CSP configuration prevents security issues and ensures smooth integration.

1. In the **AppEngine Administration Panel**, navigate to **System** > **System Details**.  

    ![System Details help screen in CSP configuration process](./media/working-with-sap-business-one-web-client/3-appengine-config-csp.png)  

2. Click on the **Required CSP Entries for Web Client** link.  

    ![A help screen showing where to find the link to the required CSP entries in CSP configuration process](./media//working-with-sap-business-one-web-client/4-appengine-config-csp-entries-link.png)  

3. Here, you can find all the required entries for SAP Web Client Content Security Policy.

    ![A help screen showing where to find the required CSP entries in CSP configuration process](./media//working-with-sap-business-one-web-client/5-appengine-config-csp-entries.png)  

4. Copy the entries and close the window.  

5. Open **SAP Business One Web Client** and click on your **profile** icon in the upper right corner of the interface.  

    ![A help screen showing where to find your profile icon in SAP Business One Web Client](./media/working-with-sap-business-one-web-client/6-appengine-profile-settings-sapb1-menu.png)  

6. Navigate to **Settings** > **General Settings**.  

    ![A help screen showing where to find General Settings in SAP Business One Web Client](./media/working-with-sap-business-one-web-client/7-appengine-general-settings-sapb1-menu.png)  

7. Paste the copied entries to the **Content Security Policy** field.  

    ![A help screen showing where to paste the required CSP entries in CSP configuration process](./media/working-with-sap-business-one-web-client/8-appengine-config-paste-csp-entries.png)

8. Refresh the **SAP Business One Web Client** page to apply the changes.

:::info[note]
By following these guidelines, you can efficiently configure and manage the CompuTec Web Client Start and its associated plugins, ensuring seamless operation of your SAP Business One system. If you need further assistance, feel free to reach out!
:::
