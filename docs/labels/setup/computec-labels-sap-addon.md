---
sidebar_position: 6
---

# CompuTec Labels SAP Addon

The CompuTec Labels SAP Add-on enhances SAP Business One by enabling seamless printing of SAP objects directly from the Business One Client.

## Installation

Download installation files from the [download](../releases/download.md#computec-labels-sap-addon)  page.

Since this is a lightweight deployment add-on, installation is straightforward:

1. Install the add-on.
2. Log in to your System Landscape Directory (SLD).
3. Import and assign the add-on within the SLD Service.

<details>
<summary>You can check how to do this here</summary>
<div>
1. Choose the right option in SAP Business One:

    ![CT Label Addon](./media/computec-labels-setup-addon/ct-labels-add.png)
2. Log in to the System Landscape Directory:

    ![Login](./media/computec-labels-setup-addon/sld-login.png)
3. Choose "Import" and browse to the path with the add-on installation file:

    ![Import Addon](./media/computec-labels-setup-addon/import-add-on.png)
4. Navigate to "Company Assignment," select the required database from the Company List, and click "Assign"

    ![Database Assign](./media/computec-labels-setup-addon/database-assign.png)
5. Select "CTLabelAddon" and proceed with the installation by clicking "Next":

    ![Assign CTL](./media/computec-labels-setup-addon/assign-ctl.png)
6. It is recommended to set up the manual type of Startup Mode on the first run of the application. This can be changed later to Automatic or Mandatory as needed.
</div>
</details>

Once it's done re-log your company, run the add-on, and wait until the installation is finished.
![Ct Labels Start Addon](./media/computec-labels-setup-addon/ct-labels-start-add-on.png)

---
