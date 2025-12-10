---
sidebar_position: 1
---

# Installation

## Before you start

Before installing CompuTec AppEngine, make sure the following prerequisites are completed:

- **System requirements**: All hardware and software requirements are met. [Read more](https://learn.computec.one/docs/appengine/administrators-guide/requirements/)
- **SAP server readiness**: Your SAP server is properly configured and running. For detailed configuration steps, refer to the SAP Server Configuration Guides for either [SAP HANA](https://help.sap.com/docs/SAP_BUSINESS_ONE_ADMIN_GUIDE_HANA/1a2fc202f7f64336abf9fbc957d9b9ba/6c8b59c7f2a44aa2b474e58b9732e0d4.html) or [Microsoft SQL Server](https://help.sap.com/docs/SAP_BUSINESS_ONE_ADMIN_GUIDE_SQL/f6fb230cc90949d8b66586a39189992b/c0038069e54b46368b9e73c7218834da.html).
- **Operator credentials in SLD**: You've created and configured operator credentials in System Landscape Directory (SLD).  
Keep the operator password handy – you’ll need it when adding your company during the AppEngine configuration. If you are using Cloud Control Center (CCC) for SAP Business One, see the related [instructions for creating operator credentials in CCC](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/operator-setup-and-iam-server-assignment-in-cloud-control-center).
- **Installation file**: You have downloaded the CompuTec AppEngine installation from the [Download section](https://learn.computec.one/docs/appengine/releases/appengine/download) of our documentation.

:::warning[important]
    After upgrading from **CompuTec AppEngine** version **2.00** to version **3.00**, please use the **Empty Cache and Hard Reload** option in your browser.

    <details>
    <summary>Click here to find out more</summary>
    <div>
    **Here is an example for Google Chrome or Microsoft Edge**:

        1. Open **Google Chrome** or **Microsoft Edge** browser.
        2. Click **F12** to open **Developers Tools**.
        3. Right-click on the **Refresh** button.
        4. Choose the **Empty Cach and Hard Reload** option.

        ![Empty Cache and Hard Reload](./media/installation/3333333-additional-info-after-upgrader.png)
    </div>
    </details>
:::

## Step 1: Install CompuTec AppEngine

To install CompuTec AppEngine, follow these steps:

1. Run the CompuTec AppEngine installation file downloaded from the [Download](docs/appengine/releases/appengine/download.md) section of our guide.
2. Click **Install**.

    ![AppEngine Installation - click install](./media/installation/01-appengine-install-window.png)

3. (optional) If it’s your first installation, you may need to install Microsoft .NET Runtime and Microsoft ASP.NET Core Shared Framework. Click **Install** and follow the on-screen installation steps.

    ![AppEngine Installation - Install MS .NET Runtime](./media/installation/010-appengine-install-net.png)

4. When the installation is completed, click **Finish**.

    ![Finish Installation](./media/installation/02-appengine-finish-install-window.png)

5. Open **Services** on your computer and confirm that the CompuTec **AppEngine** service is listed and running.

    ![check in services if CompuTec AppEngine is running](./media/installation/03-appengine-install-services.png)

6. After installation, the **CompuTec AppEngine** page should open automatically in your default browser in the installation mode at: [https://localhost:54001](https://localhost:54001).

    ![opened appengine page](./media/installation/04-appengine-install-page.png)

    :::note[info]
    CompuTec AppEngine starts in either **production mode** or **installation mode**, depending on the system state.  
    CompuTec AppEngine enters **installation mode** when:
    - It can’t connect to the database server storing the CompuTec AppEngine configuration.
    - The configuration database doesn’t exist.
    - The configuration database requires an upgrade.

    If the CompuTec AppEngine page does not open automatically, you can open it **manually** at [https://localhost:54001](https://localhost:54001).
    :::

## Step 2: Set up CompuTec AppEngine database

To set up a database, follow these steps:

1. On the **CompuTec AppEngine** page in your browser, enter the database connection details. It’s where the CompuTec AppEngine configuration schema will be created.
    - **Database Server name**
    - **User name**
    - **User password**
    - **Database provider**

    ![setting up a database in computec appengine](./media/installation/05-appengine-setup-details-Copy.png)

2. Click **Test Connection**.

3. If the CompuTec AppEngine database does not exist, click **Create Database**. If it exists but requires an upgrade, click **Migrate Database**.

    ![create a database](./media/installation/06-appengine-setup-database.png)

4. After you create or migrate the database, click **Save Changes**.

    ![click save changes](./media/installation/06-appengine-setup-database-new.png)

5. Click **Restart**.

    ![click restart](./media/installation/07-appengine-setup-database-restart.png)

6. After restarting, CompuTec AppEngine will open in your browser in Production Mode at [https://localhost:54001](https://localhost:54001).

    ![comutec appengine page](./media/installation/04-appengine-install-localhost-Copy.png)

    :::note[info]
    Port 54001 is the default one and can be changed in the **Administration Panel** > **Configuration** > **Advanced Configuration**.
    ![screen showing how to find the advanced configuration](./media/installation/10-appengine-setup-administration-adv-config.png)
    :::

## Step 3: Configure CompuTec AppEngine

Follow these steps to configure CompuTec AppEngine after the installation:

1. On the CompuTec AppEngine page in your browser, click **Administration**.

    ![login to administration panel](./media/installation/08-appengine-setup-administration.png)

2. If this is your first installation, log in using the default credentials:

    - **Administrator ID**: CTSiteUser
    - **Password**: 1234  

    :::info[note]
    You can change your password in **Administration Panel** > **System** > **Password**.

    ![screen showing how to change password](./media/installation/09-appengine-setup-administration-password.png)
    :::

## Step 4: Connect CompuTec AppEngine to the System Landscape Directory (SLD)

**System Landscape Directory (SLD)** maintains information about the SAP Business One landscape. Connecting CompuTec AppEngine to the SLD enables it to detect and manage SAP companies.

To configure a connection to the SLD server, follow these steps:

1. In the CompuTec AppEngine **Administration Panel**, navigate to **Configuration**.

2. Click **Discover**.

    ![click discover](./media/installation/15-appengine-setup-company-list-discover.png)

3. Enter the **SLD Server Address** and **CompuTec License Server address**.

    ![enter sld and computec server details](./media/installation/10-appengine-setup-after-restart-cofig.png)

    :::info[note]
    You can find the **SLD Server Address** in **SAP Business One** > **Administration** > **License** > **License Administration**.

    ![screen showing how to fing the sld server address](./media/installation/101-sap-b1-license1.png)

    You can check your **CompuTec License Server Address** in two ways:

        <details>
    <summary>Using **CompuTec Service Manager**</summary>
    <div>
    <u></u>
        If you have [**CompuTec Service Manager**](https://learn.computec.one/docs/processforce/administrator-guide/licensing/license-server/configure-computec-service-manager/#starting-computec-service-manager) installed:
        - Run **Command Prompt** on your computer, type: `hostname`, and press **Enter**.
        - Here you’ll find the first part of your server address. In our example, it’s `CTL000`.

            ![screen showing how to find the server address](./media/installation/1022-sap-b1-license2.png)

        - Now, run **CompuTec Service Manager** on your computer and click **Settings.

            ![screen showing where to find settings in ct service manager](./media/installation/1021-appengine-requirements-sld.png)

        - Here you’ll find the port number. In our example, it’s `30002`.

            ![an example where to find port number](./media/installation/10212-appengine-requirements-sld2.png)

        - In our example, the **CT License Server** is `CTL000:30002`.

    </div>
    </details>

    <details>
    <summary>If you have **CompuTec ProcessForce** installed</summary>
    <div>
    <u></u>
        - Open **SAP Business One**.
        - Go to **Administration** > **License** > **ProcessForce License Administration**.
        - Here you’ll find the **CompuTec License Server Address**.  

            ![a screen showing where to find ct license server address](./media/installation/102-sap-b1-license2.png)
    </div>
    </details>

4. Click **Save and Discover**.

    ![a screen shoing where to click after entering server address](./media/installation/11-appengine-setup-config-sld.png)

5. When prompted, enter the **B1SiteUser** password. This is the password you created for the operator in the **System Landscape Directory (SLD)**.

    ![a login screen](./media/installation/12-appengine-setup-config-sld-login.png)

6. Click **Yes** to restart CompuTec AppEngine.

    ![click yes to restart](./media/installation/13-appengine-setup-config-sld-restart.png)

7. Done! CompuTec AppEngine will now retrieve the list of all available companies.

    ![a screen showing the list of companies](./media/installation/14-appengine-setup-company-list.png)

## Step 5: Activate a company in CompuTec AppEngine

To activate a company in CompuTec AppEngine, follow these steps:

1. In CompuTec AppEngine **Administration Panel** > **Configuration** > **Companies**, find the company you want to activate.

    :::info[note]
    If you can’t see your company, click **Discover** to refresh the list.

    ![a screen showing how to refresh the list of companies](./media/installation/15-appengine-setup-company-list-discover.png)
    :::

2. Click the edit icon to set **Database User** credentials in the **Server Details** section.

    ![a screen login to server](./media/installation/16-appengine-setup-company-user-credentials.png)

3. Click the edit icon next to **Database User** in the **Companies** section and enter the credentials for the company you want to activate.

    ![a screen showing adding database user credentials](./media/installation/17-appengine-setup-company-and-sap-credentials.png)

4. Click the edit icon next to **SAP User**.

    ![a screen showing adding sap user credentials](./media/installation/18-appengine-setup-sap-user.png)

    :::warning[important]
    This process creates a **CompuTec AppEngine user**, not an SAP user.  
    The selected user must have the right SAP Business One **permissions for installation and configuration tasks**.
    :::

5. Assign default user for the company you want to activate. You can select an existing **SAP Business One** user or create a new one by clicking **Add User**.

    ![a screen showing adding a new user](./media/installation/19-appengine-setup-add-new-user.png)

6. Enter **User Name** and **Password** and assign the new user to the company.

    ![a screen showing adding database user credentials](./media/installation/20-appengine-add-user2.png)

7. Click **Add & Select**.
8. Switch the **Active** toggle to activate the company.

    ![a screen showing company activation](./media/installation/20-appengine-setup-activate.png)

9. Log in using your **SLD Server user credentials** to activate the company within the SAP system.

    ![a screen showing login with sld server user credentials](./media/installation/21-appengine-setup-login.png)

10. You can view the company's activation progress.

    ![a screen showing activation progress](./media/installation/22-appengine-setup-activation-progress.png)

    :::note[info]
    This process may install necessary SAP extensions such as **CompuTec Start**.  
    In **Cloud Control Center** for SAP Business One environments, **CompuTec Start** must be installed manually.
    :::

11. Click **Close**.

## Step 6: Configure background processing within the SAP environment

CompuTec AppEngine can run plugins and background jobs that react to events occurring in SAP Business One, for example, when a document is added or updated.
To enable this event-driven functionality, SAP Business One must forward these events to CompuTec AppEngine. This is done by adding a small block of code to the SAP system procedure **SBO_SP_POSTTRANSACTIONNOTICE**, which is responsible for handling post-transaction events.  

Once updated, this procedure records and passes the required events to CompuTec AppEngine, where they can trigger jobs and background tasks.

To configure background processing within the SAP environment, follow these steps:

1. First, you’ll see a message with the **CompuTec AppEngine code snippet**. Keep this window open - you'll need to copy the code snippet into the database procedure in the next steps.

    ![a screen showing a code snippet](./media/installation/23-appengine-setup-activation-sbo.png)

2. Follow the configuration steps according to the database you’re using:

    <details>

        <summary>For **SAP HANA** users</summary>
        <div>
        <u></u>
        - Open **SAP HANA Studio** on your computer and log in.
        - Look for the **Procedures** folder, right-click on it and use filtering to find **SBO_SP_POSTTRANSACTIONNOTICE** procedure in your database.

            ![a screen showing where to find procedure](./media/installation/24-appengine-setup-activation-sap-hana-studio-filters.png)
        
        - Right-click on the **SBO_SP_POSTTRANSACTIONNOTICE** procedure and choose **Open Definition**.

            ![a screen showing how to open definition](./media/installation/26-appengine-setup-activation-sap-hana-studio-def.png)

        - Navigate to the **Create Statement** tab.

            ![a screen showing creating statement](./media/installation/27-appengine-setup-activation-sap-hana-studio-create-stat.png)

        - Copy the whole content of the tab. 
        - Navigate to your **database name** and right-click on it. 
        - Click **Open SQL Console**. 

            ![a screen showing opening sql console](./media/installation/28-appengine-setup-activation-sap-hana-studio-sql-console.png)

        - Paste the copied content in the **SQL** console.

            ![a screen showing using sql console](./media/installation/29-appengine-setup-activation-sap-hana-studio-sql-console-paste.png)

        - Copy the **code snippet** from the CompuTec AppEngine **Administration Panel**.

            ![a screen showing code snippet](./media/installation/23-appengine-setup-activation-sbo.png)

        - In **Sap Hana Studio**, paste the code under the **-- ADD YOUR CODE HERE** line. If there are other pieces of code there, add the code at the end of the section.

            ![a screen showing pasting code snippet](./media/installation/30-appengine-setup-activation-sap-hana-studio-sql-console-code.png)

        - Change `CREATE` to `ALTER`.

            ![a screen showing changing create to altrer](./media/installation/31-appengine-setup-activation-sap-hana-studio-sql-console-alter.png)

        - Click the **Execute** icon.

            ![a screen showing how to execute the code](./media/installation/32-appengine-setup-activation-sap-hana-studio-sql-console-execute.png)

        </div>
    </details>

    <details>

        <summary>For **Microsoft SQL** users</summary>
        <div>
        <u></u>

        - Open **Microsoft SQL Server Mangement Studio** on your computer and log in.
        - Look for the **Programmability** folder, right-click on it and use filtering to find the **SBO_SP_PostTransactionNotice** procedure in your database.

            ![a screen showing where to find the procedure in ms sql](./media/installation/2444-appengine-setup-activation-mssql-filtering.png)

        - Right-click on the **SBO_SP_PostTransactionNotice** procedure and choose **Modify**.

            ![a screen showing ahow to modify the procedure](./media/installation/2444-appengine-setup-activation-mssql-modify.png)

        - Copy the **code snippet** from the CompuTec AppEngine **Administration Panel**.

            ![a screen showing code snippet](./media/installation/23-appengine-setup-activation-sbo.png)

        - In **Microsoft SQL Server Management Studio**, paste the code under the **-- ADD YOUR CODE HERE** line. If there are other pieces of code there, add the code at the end of the section.

            ![a screen showing pasting the code snippet](./media/installation/24444-appengine-setup-activation-mssql-code.png)

        - Click the **Execute** icon and click **OK**.

            ![a screen showing how to execute the code](./media/installation/2444444-appengine-setup-activation-mssql-execute.png)
        </div>
    </details>

3. In **CompuTec AppEngine**, click **Confirm**.

    ![a screen showing how to confirm adding code snippet](./media/installation/33-appengine-setup-activation-sap-hana-studio-sql-console-confirm.png)

4. Choose a CompuTec AppEngine instance to assign to the activated company, and click **Accept**.

    ![a screen showing how to assign the company](./media/installation/34-appengine-setup-activation-assign.png)

5. After it’s finished, click **Close**.

## Step 7: (optional) Advanced configuration

Once the basic setup is complete, you can refine your configuration in the **Advanced Configuration** and **AppEngine Servers** sections.

In the **Advanced Configuration** section of CompuTec AppEngine **Administration Panel**, you can edit the following settings:

![a screen showing adding database user credentials](./media/installation/35-appengine-setup-adv-config.png)

- **SAP Services**: Edit the SLD Server Address
- **CompuTec Services**: Update the CompuTec License Server information
- **OpenId Settings**: Configure the CompuTec AppEngine External Address
- **OIDC (OpenID Connect)**: Manage secure authentication settings
- **EventBus**: Configure real-time communication between services
- **Jobs**: Manage scheduled tasks
- **Plugin Repository**: Install and manage custom plugin repository

In the **AppEngine Servers** section of CompuTec AppEngine **Administration Panel**, you can edit the following settings:

![a screen showing adding database user credentials](./media/installation/36-appengine-setup-servers.png)

- **Id**: Numeric identifier of the server instance
- **Instance Name**: The name assigned to the server instance (e.g., default)
- **GUID**: A globally unique identifier for each server instance
- **Address**: Indicates the network address or hostname of the server
- **Status**: Displays the operational status of the server (e.g., active/inactive)
- **Restart Required**: Shows if a restart is needed
- **Telemetry Profile**: Access server-specific settings
