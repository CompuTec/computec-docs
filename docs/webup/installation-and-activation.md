--- 

sidebar_position: 4 

--- 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation and Activation

This guide walks you through installing and activating the **CompuTec WebUp extension** within the **CompuTec AppEngine Framework**.

## Overview

The **CompuTec WebUp** solution is made up of three key components:

- **CompuTec WebUp App**: Handles customization and automation logic, and stores configuration settings.
- **CompuTec WebUp Manager**: Provides a user interface for creating, editing, and testing configurations.
- **CompuTec WebUp Client**: Extends the SAP Business One Web Client where the standard extensibility framework is limited.

## Before you start

Before installing CompuTec WebUp, make sure the following prerequisites are met:

- Check if **CompuTec AppEngine** is installed and configured. Follow the [CompuTec AppEngine installation and configuration guide](/docs/appengine/administrators-guide/configuration-and-administration/installation) for detailed instructions.
- Make sure that the company is **active in CompuTec AppEngine**, and the **SAP Web Client is configured**. For full instructions, [see the configuration guide.](/docs/appengine/administrators-guide/configuration-and-administration/working-with-sap-business-one-web-client)

:::note[Video (optional)]
▶︎ **Watch**: [CompuTec WebUp Installation Step by Step](https://www.youtube.com/playlist?list=PLtT6kgaz5Ynf3ng3AKiiYoZ00_8eGH9_C)  
These short videos will walk you through the whole CompuTec AppEngine and CompuTec WebUp installation process.
:::

## Step 1: Install the CompuTec WebUp App

To install the **CompuTec WebUp App** directly from the CompuTec AppEngine Store, follow the [installation instructions](/docs/appengine/administrators-guide/configuration-and-administration/plugins/plugin-installation-process).  
The installation process is fully automated and managed within CompuTec AppEngine.

## Step 2: Enable Developer Mode

If you plan to customize the user interface using **CompuTec WebUp Manager**, you must enable **Developer Mode** in the SAP Web Client.

1. Click on your **profile icon** in the upper right corner of the SAP Web Client interface and choose **Settings**.  

    ![A help screen showing where to find settings in SAP Business One Web Client](./media/6-webup-profile-settings-sapb1-menu.png)

2. Go to **Extensibility**.  

    ![A help screen showing where to find Extensibility tab in SAP Business One Web Client](./media/10-webup-profile-settings-extensibility-developer-mode.png)

3. Turn on the **Developer Mode** toggle.  

    ![A help screen showing where to find Developer Mode in SAP Business One Web Client](./media/11-webup-config-turn-on-developer-mode.png)

4. Click **Save**.

## Step 3: Install browser extensions

You’ll need to install two extensions:

- **CompuTec WebUp Client**
- **CompuTec WebUp Manager**

:::info[note]
These extensions are currently **not available in public stores**.
Install them manually using the provided installation package until they are validated by Google, Mozilla and Microsoft.
:::

Select your browser to see the installation steps:

<Tabs>
  <TabItem value="chrome" label="Google Chrome" default>

### Step 1: Download the CompuTec WebUp extensions for Google Chrome

1. Click [**this link**](https://download.computec.one/software/appengine/plugins/webup/extensions/chromium/CompuTecWebUpClient_1.0.10.zip) to download the **CompuTec WebUp Client** extension.

2. Click [**this link**](https://download.computec.one/software/appengine/plugins/webup/extensions/chromium/CompuTecWebUpManager_1.0.15.zip) to download the **CompuTec WebUp Manager** extension.

3. Extract both downloaded files.

### Step 2: Install the extensions for Google Chrome

1. Open the **Google Chrome** browser.

2. Click the **menu icon** and choose **Extensions** > **Manage Extensions**.

    ![A help screen showing where to find extensions when installing the CompuTec webup extension in Chrome browser](./media/c1-webup-manual-inst-browser-extension-chrome-menu.png)

3. Turn on the **Developer mode** toggle.

    ![A help screen showing where to find dev mode when installing the CompuTec webup extension in Chrome browser](./media/c2-webup-manual-inst-browser-extension-chrome-dev-mode.png)

4. Click **Load unpacked**.

    ![A help screen showing how to unpack files when installing the CompuTec webup extension in Chrome browser](./media/c3-webup-manual-inst-browser-extension-chrome-load-file.png)

5. Select your extracted **CompuTec WebUp Client** folder and click **Select Folder**.

6. Select your extracted **CompuTec WebUp Manager** folder and click **Select Folder**.

7. Done! Now you can see both **CompuTec WebUp Client** and **CompuTec WebUp Manager** extensions on the **All Extensions** list of your Google Chrome browser.

    ![A help screen showing installed CompuTec webup extensions in Chrome browser](./media/c4-webup-manual-inst-browser-extension-chrome-installed.png)

  </TabItem>

  <TabItem value="edge" label="Microsoft Edge">

### Step 1: Download the CompuTec WebUp extensions for Microsoft Edge

1. Click [**this link**](https://download.computec.one/software/appengine/plugins/webup/extensions/chromium/CompuTecWebUpClient_1.0.10.zip) to download the **CompuTec WebUp Client** extension.

2. Click [**this link**](https://download.computec.one/software/appengine/plugins/webup/extensions/chromium/CompuTecWebUpManager_1.0.15.zip) to download the **CompuTec WebUp Manager** extension.

3. Extract both downloaded files.

### Step 2: Install the extensions for Microsoft Edge

1. Open the **Microsoft Edge** browser.

2. Click the **menu icon** and choose **Extensions**.

    ![A help screen showing where to find extensions when installing the CompuTec webup extension in Microsoft Edge browser](./media/e1-webup-manual-inst-browser-extension-edge-menu.png)

3. Click **Manage extensions**.

    ![A help screen showing where to find extensions manager when installing the CompuTec webup extension in Microsoft Edge browser](./media/e2-webup-manual-inst-browser-extension-edge-manage.png)

4. Turn on the **Developer mode** toggle.

    ![A help screen showing where to find dev mode when installing the CompuTec webup extension in Microsoft Edge browser](./media/e3-webup-manual-inst-browser-extension-edge-dev-mode.png)

5. Click **Load unpacked**.

    ![A help screen showing how to unpack files when installing the CompuTec webup extension in Microsoft Edge browser](./media/e4-webup-manual-inst-browser-extension-edge-load-files.png)

6. Select your extracted **CompuTec WebUp Client** folder and click **Select Folder**.

7. Select your extracted **CompuTec WebUp Manager** folder and click **Select Folder**.

8. Done! Now you can see both **CompuTec WebUp Client** and **CompuTec WebUp Manager** extensions on the **Installed extensions** list of your Microsoft Edge browser.

    ![A help screen showing installed CompuTec webup extensions in Microsoft Edge browser](./media/e5-webup-manual-inst-browser-extension-edge-installed.png)

  </TabItem>

  <TabItem value="firefox" label="Mozilla Firefox">

### Step 1: Download the extension for Mozilla Firefox

1. Click [**this link**](https://download.computec.one/software/appengine/plugins/webup/extensions/firefox/CompuTecWebUpClient_1.0.10.zip) to download the **CompuTec WebUp Client** extension.

    :::info[note]
    The **CompuTec WebUp Manager** extension is not available for Mozilla Firefox. If you need consultant or key-user functionality, use Google Chrome or Microsoft Edge.
    :::

2. Extract the downloaded file.

### Step 2: Install the extension for Mozilla Firefox

1. Open the **Mozilla Firefox** browser.

2. Click the **menu icon** and choose **Extensions and themes**.

    ![A help screen showing where to find extensions and themes section when installing the CompuTec webup extension in Firefox browser](./media/f1-webup-manual-inst-browser-extension-firefox-menu.png)

3. Navigate to **Extensions**.

    ![A help screen showing where to find extension section when installing the CompuTec webup extension in Firefox browser](./media/f2-webup-manual-inst-browser-extension-firefox-menu-extensions.png)

4. Click the **gear icon** and select **Debug Add-ons**.

    ![A help screen showing where to find debug section when installing the CompuTec webup extension in Firefox browser](./media/f3-webup-manual-inst-browser-extension-firefox-debug.png)

5. Click **Load Temporary Add-on**.

    ![A help screen showing where to find extension installation section when installing the CompuTec webup extension in Firefox browser](./media/f3-webup-manual-inst-browser-extension-firefox-load-file.png)

6. Select your extracted folder and click **Open**.

7. Done! Now you can see the **CompuTec WebUp Client** on the extension list of your Mozilla Firefox browser.

    ![A help screen showing installed CompuTec webup extension in Firefox browser](./media/f4-webup-manual-inst-browser-extension-firefox-installed.png)

    :::info[note]  
    Firefox only supports **temporary loading** of unpacked extensions.  
    The extension must be reloaded each time you restart Firefox.
    :::

  </TabItem>
</Tabs>

## Step 4: Verify the integration

After installation, confirm that both the CompuTec AppEngine plugin and the browser extension are active and communicating.

1. Pin the **CompuTec WebUp extension** to your browser toolbar for easy access.
2. Navigate to the **SAP Web Client** page.
3. Click the **CompuTec WebUp extension** icon to activate the integration.  

    ![A help screen showing where to find the CompuTec WebUp extension in your browser toolbar](./media/12-webup-config-browser-extension.png)

:::info[Note]
If you were already on the SAP Web Client page before installing the CompuTec WebUp browser extension, refresh the page before activating the extension.
:::

## Updates

- Updates are delivered automatically via the CompuTec AppEngine Store.  
- All configuration profiles and assignments are preserved during updates.  
- If a new version of the browser extension is available, you’ll be prompted to update it after installation.
- Maintain your CompuTec AppEngine and CompuTec WebUp versions up to date to ensure compatibility.

:::info[Note]
For technical issues or feature requests, contact us via the [CompuTec Support Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp). Feedback on usability and performance is always welcome.
:::
