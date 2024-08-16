---
sidebar_position: 2
---

# Installation

1. Run the CompuTec ProcessForce AppEngine installation file from the [Download]((../releases/appengine/download.md)) section and click "Install" in the installation wizard that appears.

    ![AppEngine Install](./media/installation/install.png)

2. Click "Finish" after the AppEngine Installation is successfully completed.

    ![Finish Installation](./media/installation/installation-finish.png)

3. Now, the new service should be running:

    ![Services](./media/installation/running-status.png)

4. After installation, the AppEngine page will automatically open in browser. The AppEngine will launch in either Production Mode or Installation Mode, depending on the current status of your system. The AppEngine will start in Installation Mode in the following scenarios:
    - Unable to establish a connection to the Database Server where the AppEngine configuration is stored.
    - The AppEngine configuration database does not exist.
    - The AppEngine configuration database requires an upgrade.

    ![Browser](./media/installation/browser.png)

    If AppEngine Page won't open automatically you can manually do so by opening web browser and entering default address: `https://localhost:54001`.

5. Setup the AppEngine by configuring the database server connection.

    1. Step 01 - Enter the following details: Database Server Name, User Name & Password, and Database Provider.

        ![Step 01](./media/installation/step-01.png)

    2. Step 02 - Create the Database.

        ![Step 02](./media/installation/step-02.png)

    3. Step 03 - After creating the database, you must restart the AppEngine

        ![Step 03](./media/installation/restart.png)

:::warning
    After upgrading from version 2.00 to version 3.00, please use the "Empty Cache and Hard Reload" option in the browser where you use AppEngine.

    <details>
    <summary>Click here to find out more</summary>
    <div>
    **Here is an example for Google Chrome or Microsoft Edge (Chromium)**

        1. Open Google Chrome or Microsoft Edge (Chromium) browser
        2. Click F12 to open Developers Tools (1.)
        3. Right-click on the refresh button (2.) and,
        4. Choose the Empty Cach and Hard Reload option (3.):

        ![Empty Cache and Hard Reload](./media/installation/empty-cache-and-hard-reload.png)
    </div>
    </details>
:::
