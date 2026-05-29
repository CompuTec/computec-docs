---
sidebar_position: 4
---

# Import and Assign Computec ProcessForce License

After installing **CompuTec ProcessForce**, you must import and assign a valid license before users can use **CompuTec ProcessForce** plugin in **SAP Business One**.

This guide explains how to import the license file, assign the license to your company database, and assign licenses to users.

:::note[info]
If you are upgrading an existing **CompuTec ProcessForce** installation, you may not need to repeat this procedure.

The license assignment process is similar to assigning new **SAP Business One** license.
:::

Follow the steps below to import and assign the license:

## Step 1: Obtain the license file

1. Before you can continue, obtain a valid license file from your **CompuTec ProcessForce** provider.

:::info[note]
If you do not already have a license file, follow our [Request CompuTec ProcessForce License](https://learn.computec.one/docs/processforce/administrator-guide/licensing/request-for-a-license/) guide.
:::

## Step 2: Open License Administration

1. In **SAP Business One**, go to **Administration** > **License** > **ProcessForce License Administration**.

   ![SAP Business One Administration view showing ProcessForce License Administration selected, with a blue arrow pointing to the menu item and the ProcessForce License Administration dialog visible, including license server field, Test button, company allocation, and user license list](media/license-import-assignment/import-a-lic1.png)

2. Click **Test** to verify that the **CompuTec License Service** is running and available.

   ![SAP Business One ProcessForce License Administration window with a blue arrow pointing to the Test button. The dialog includes fields for license server and port and buttons around the license administration section.](media/license-import-assignment/import-a-lic2.png)

3. If the connection is successful, you will see a green success banner at the bottom of the screen.

   ![System message in SAP Business One showing a green success banner with the text Test the connection to the CompuTec License Server completed successfully in the ProcessForce License Administration window](media/license-import-assignment/import-a-lic21.png)

## Step 3: Import the license file

1. Click **Import License File**.

   ![SAP Business One ProcessForce License Administration window showing the Import License File button highlighted in the license administration dialog, with license server and user license controls visible in the wider SAP Business One interface](media/license-import-assignment/import-a-lic3.png)

2. Browse to the license file location.
3. Select the license file and confirm the import.

   ![SAP Business One file open dialog showing the Downloads folder with a highlighted license file and a large blue arrow pointing to it in the wider Windows file browser environment over the SAP Business One application](media/license-import-assignment/import-a-lic4.png)

   :::caution[important]
   The license file must have a `.xml` extension.  
   Some web browsers, such as Safari, may change the file type during download. If this happens, the import may fail.  
   :::

## Step 4: Confirm the license import

After the import is completed successfully, a confirmation **System Message** appears.

![SAP Business One ProcessForce License Administration window with a green system message banner confirming the license import completed successfully, showing license server and user license fields in the wider application interface](media/license-import-assignment/import-a-lic5.png)

## Step 5: Assign the licenses to users

1. Choose the users form the list and assign them to the chosen license type.

   ![ProcessForce License Administration dialog in SAP Business One showing the license server and port fields, Test button, company allocation, and a user list with manager selected. The Professional User license row displays Used and Available columns and a checkbox to assign the license type, within the wider SAP Business One administration window.](media/license-import-assignment/import-a-lic6.png)

2. Click **Update** to save the changes.

   ![ProcessForce License Administration dialog in SAP Business One with a blue arrow highlighting the Update button, showing license server and company allocation fields and a user license list inside the wider SAP Business One administration screen](media/license-import-assignment/import-a-lic7.png)

3. Click **OK**.
4. The license assignment is now complete, and users can access **CompuTec ProcessForce** according to their assigned license type.
