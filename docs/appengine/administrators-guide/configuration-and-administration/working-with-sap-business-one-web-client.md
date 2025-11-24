---
sidebar_position: 9
---

# Working with SAP Business One Web Client

**CompuTec WebClient Start** is an essential tool for integrating CompuTec AppEngine plugins and extending the functionality of the SAP Business One Web Client. It connects the two systems so you can extend your ERP with more tools and features. CompuTec WebClient Start is installed during the company activation.

## Step 1: Install the CompuTec WebClient Extension Package

The **CompuTec WebClient Extension Package** contains all plugins enabled for a specific company. Each company has its own plugin pack, so you must install it separately for every company. Installing the CompuTec WebClient Extension is required to use CompuTec plugins in the SAP Business One Web Client.

To install the **CompuTec WebClient Extension Package**, follow these steps:

1. Log in to the **CompuTec AppEngine Administration Panel**.

    ![A help screen showing the CompuTec AppEngine Administration Panel login screen](./media/working-with-sap-business-one-web-client/00-appengine-admin-panel-login-screen.png)

2. Navigate to **Configuration**.

    ![A help screen showing where to find the Configuration in CompuTec AppEngine Administration Panel](./media/working-with-sap-business-one-web-client/1-appengine-admin-panel-configuration.png)

3. Find your company in the **Companies** list.

    ![A help screen showing where to find the company details in CompuTec AppEngine Administration Panel](./media/working-with-sap-business-one-web-client/2-1-appengine-admin-panel-company-details.png)

4. Click **Install CompuTec WebClient Extension**.

    ![A help screen showing where to find an installation link for the CompuTec WebClient Extension](./media/working-with-sap-business-one-web-client/2-2-appengine-admin-panel-install-extension.png)

5. Log in using your SLD Server username and password.

    ![A help screen showing how to log in to install WebClient Extension](./media/working-with-sap-business-one-web-client/9-appengine-login-webclient-extension-installation.png)

6. Done! The installation of the CompuTec WebClient Extension Package was completed successfully.

:::info[note]
Whenever you deactivate or activate a new company, repeat this process to install its updated CompuTec WebClient Extension Package.
:::

## Step 2: (Optional) Install and activate CompuTec WebClient Start manually using the Extension Manager

Sometimes, you need to install CompuTec WebClient Start extension manually. This kind of activation is mainly provided for SAP Business One Cloud Control Center (CCC).

To manually install and activate CompuTec WebClient Start, follow these steps:

1. Log in to **CompuTec AppEngine Administration Panel**.

2. Navigate to **Administration Panel** > **System**.

3. In the **System Details** section, click **Download CompuTec WebClient CTStart** installation pack.

    ![A help screen showing where to find a link to the CompuTec WebClient Start Installation Pack](./media/working-with-sap-business-one-web-client/2-3-appengine-admin-panel-install-webclient-manually.png)

4. Open the **Extension Manager** in your browser using this address: `https://<SAPExtensionHost>:<SAPExtensionPort>/ExtensionManager/.` Replace the placeholders with your system values, for example: `https://hanadev:40000/ExtensionManager/.`

    :::info[note]
    Make sure you have the necessary permissions to access the Extension Manager.
    :::

5. Click **Import**.

    ![A help screen showing how to import the downloaded file to the extension manager](./media/working-with-sap-business-one-web-client/10-appengine-import-the-webclientstart-extension-to-sapb1.png)

6. Choose the downloaded installation pack file, and click **Upload**.

    ![A help screen showing how to choose the file and send it to the extension manager](./media/working-with-sap-business-one-web-client/11-appengine-add-the-webclientstart-extension-to-sapb1.png)

7. Click **Next**.

8. (Optional) You can **Specify Shared Parameters**, and click **Finish**.

9. Navigate to **Company Assignment**, and select the company on the list on the left.

    ![A help screen showing how to choose the file and send it to the extension manager](./media/working-with-sap-business-one-web-client/12-appengine-company-assignment-tab.png)

10. In **Extensions**, click **Assign**.

    ![A help screen showing how to choose the file and send it to the extension manager](./media/working-with-sap-business-one-web-client/13-appengine-company-assignment-tab-assign.png)

11. In **Extension Assignment Wizard**, choose the **CompuTec.Start** extension from the list and click **Next**.

    ![A help screen showing how to choose the file and send it to the extension manager](./media/working-with-sap-business-one-web-client/14-appengine-company-assignment-tab-choose-extension.png)

12. (Optional) In **User Preferences**, you can change the **Startup Mode** for each user, and click **Next**.

13. Click **Finish** to complete the setup.

14. Done! You've successfully installed and activated CompuTec WebClient Start extension.

## Step 3: Configure Content Security Policy (CSP) Settings

To enable proper functionality of the SAP Web Client, especially for embedded frames and cross-domain requests, you need to configure Content Security Policy (CSP) settings in SAP Web Client. Correct CSP configuration prevents security issues and ensures smooth integration.

1. In the **CompuTec AppEngine Administration Panel**, navigate to **System** > **System Details**.  

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

7. Paste the copied entries into the **Content Security Policy** field.  

    ![A help screen showing where to paste the required CSP entries in CSP configuration process](./media/working-with-sap-business-one-web-client/8-appengine-config-paste-csp-entries.png)

8. Refresh the **SAP Business One Web Client** page to apply the changes.

9. Done! You've successfully configured CSP in SAP Web Client.

:::info[note]
If you need help at any point, feel free to reach out through the [CompuTec Helpdesk Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp).
:::
