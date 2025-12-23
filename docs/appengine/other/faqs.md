---
sidebar_position: 1
---

# FAQs

## How to get Company Id

To obtain the company ID, navigate to the Administration Panel and hover over the company name.

    ![Company Id](../media/troubleshooting/gcid.png)

## How to configure CORS in the SAP Web Client manually

Sometimes, when activating your company in CompuTec AppEngine, you may want to set up CORS (Cross-Origin Resource Sharing) for the SAP Business One Web Client manually:

1. In the **CompuTec AppEngine Administration Panel**, go to **Configuration** > **Advanced Configuration**.  

    ![screen showing where to find advanced configuration when setting up CORS process](../media/1-webup-cors-config.png)  

2. In the **CORS Allowed Origins** field, enter your **SAP Web Client address**.  

    ![Advanced configuration help screen showing where to enter the web client CORS address](../media/2-webup-config-cors-address.png)

3. Restart **CompuTec AppEngine** to apply changes.

## How to set up Content Security Policy in the SAP Web Client manually

Sometimes, you may want to set up the Content Security Policy (CSP) in the SAP Web Client manually. To make sure it's filled with the correct data (or add your own CSP entries), follow these steps:

1. In the **CompuTec AppEngine Administration Panel**, navigate to **System** > **System Details**.  

    ![System Details help screen in CSP configuration process](../media/3-webup-config-csp.png)  

2. Click on the **Required CSP Entries for Web Client** link.  

    ![A help screen showing where to find the link to the required CSP entries in CSP configuration process](../media/4-webup-config-csp-entries-link.png)  

3. Here, you can find all the required entries for SAP Web Client Content Security Policy.

    ![A help screen showing where to find the required CSP entries in CSP configuration process](../media/5-webup-config-csp-entries.png)  

4. Copy the entries and close the window.  

5. Open **SAP Business One Web Client** and click on your **profile** icon in the upper right corner of the interface.  

    ![A help screen showing where to find your profile icon in SAP Business One Web Client](../media/6-webup-profile-settings-sapb1-menu.png)  

6. Navigate to **Settings** > **General Settings**.  

    ![A help screen showing where to find General Settings in SAP Business One Web Client](../media/7-webup-general-settings-sapb1-menu.png)  

7. Paste the copied entries to the **Content Security Policy** field.  

    ![A help screen showing where to paste the required CSP entries in CSP configuration process](../media/8-webup-config-paste-csp-entries.png)

8. Refresh the **SAP Business One Web Client** page to apply the changes.
