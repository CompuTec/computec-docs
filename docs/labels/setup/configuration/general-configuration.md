---
sidebar_position: 1
---

# General Configuration

All the configuration is done via the manager application shipped with the installation. After launching the application, you can navigate through the menu on the left.

---

Steps required to configure the service (order is not essential):

![General](./media/general-configuration/ct-labels-general.webp)

## Service Status

- **Status** – it indicates the service status (On/Off). You can change the status by using the icon next to it. It is recommended to restart the service using the icon whenever changes such as adding a printer or modifying rules are made. You can check how to set it up here:

<details>
<summary>Click here to find out more</summary>
<div>
1. Open: Control Panel > System and Security > Windows Firewall:
  ![Windows Firewall](./media/general-configuration/windows-firewall.png)
2. Click the Advanced settings:
  ![Advanced Settings](./media/general-configuration/advanced-settings.png)
3. Select Inbound Rules and choose New Rule... in the Actions window - this runs New Inbound Rule Wizard:
  ![Inbound Rules](./media/general-configuration/inbound-rules.png)
4. Choose Port as the rule type:
  ![Port](./media/general-configuration/port.png)
5. Choose TCP protocol and specify 33006 local port:
  ![Protocol and Ports](./media/general-configuration/protocol-and-ports.png)
6. Choose Allow the connection action:
  ![Allow the connection](./media/general-configuration/allow-the-connection.png)
7. Choose all profiles:
  ![Profiles](./media/general-configuration/profiles.png)
8. Specify the rule name and click "Finish.":
  ![Computec License Server](./media/general-configuration/computec-license-server.png)
</div>
</details>

Addresses fields should be filled up automatically after a successful installation. In case of installation on a local server, please change the Web Address and Ct License Server to localhost (keep the ports, like in the screenshot above).

General settings you need to define:

- **s** – Computec Label web service address (defines the connection between CompuTec Labels and SAP Business One) – default port value is 33006. **Make sure that the port is open**.
- **Server Address** – SAP Server Address – (with a port on HANA).
- **License Server Address** – SAP License Server – (with a port on HANA).
- **CT License Server Address** – CompuTec License Server connection address – (with a port on HANA).
- **Refresh** – refresh rate in seconds indicating how often the service scans for new printing requests.

## Printer Types

![Printer Types](./media/general-configuration/printer-types.webp)

There are three printer types available now:

- **Label Printers**: Bixolon, Zebra
- **Standard Printers**: for SAP Crystal Reports.

To use any of these types, it is required to load its drivers (on the screenshot above, the drivers are already assigned: Printer Driver Name column is filled). To load the drivers, click a row of a specific printer and then click Edit Type. Click the icon next to the Driver Location field and choose the driver file corresponding to the Printer Type.

In one of the future releases, the drivers will be assigned automatically to every printer type.

Click a row of a specific printer type to edit its details or remove it from the list. Clicking Add New Printer Type leads to the following form:

![Add New Printer](./media/general-configuration/add-new-printer-type.webp)

Define the Printer Type Code, Printer Type Name, and a path to the printer driver library (the default path: `[InstallationPath]\Drivers`). Clicking the '+' icon adds a new Printer Type to the list from the previous form.

## Printers

![Printers](./media/general-configuration/printers.webp)

Click a row of a specific printer to edit its details or remove it from the list.

Clicking Add New Printer leads to the form in which you can define the details of the new printer:

- Printer Code, Printer Name – printer identification,
- Printer Type can only be chosen from the predefined drop-down list,
- Localization – information field not connected to the application logic, e.g., Warehouse Click the '+' icon to add the printer to the list from the previous form.

Please note that every field must be filled up to save the settings.

![CompuTec Labels](./media/general-configuration/add-new-printer.webp)

After successful operation, assign a physical printer name and (if there are any) properties to the printer. To do that, please click on a tool wheel icon:

![Printing Manager](./media/general-configuration/printers-configuration.webp)

It leads to the following form:

![Printers](./media/general-configuration/printer-parameters.webp)

You can set properties accordingly by clicking on a property (the left box) and assessing its value (the right box).

Crystal printers have the following options:

- SaveAsPdf – when this parameter is set to True, every print will also be saved as a PDF file (the option can be active simultaneously with the printing option)
- Physical Name – all printers available on the server

  ![Printers](./media/general-configuration/windows-printers.webp)

Zebra printers have the following options:

- Physical Name – all printers available on the server
- CodePage – code page declaration

Bixolon printers have the following options:

- Physical Name – all printers available on the server.

The '+' button saves printer properties. In this view, we are also able to launch a test print. You can do this by clicking the icon highlighted in the screenshot below:

![Parameters](./media/general-configuration/printer-parameters-printer.webp)

You can access the specified printer log folder by clicking the folder icon (next to the test print icon).

## Label Templates

Here, we can create Label Templates that determine which actions on which transactions printing will take place and what data will be printed. A set of settings, e.g., [mapping](./company-installation-and-configuration.md#mapping-parameters-view) or [event triggers](./company-installation-and-configuration.md#event-triggers-view), can be assigned to a Template, which is later assigned to a specific printer.

![Label Templates](./media/general-configuration/label-templates.webp)

Click a row of a specific template to edit its details or remove it.

You can create templates that act as a simple connector between data configuration and report files in this form. To do this, click Add Template. The following form will be displayed:

![Add Template](./media/general-configuration/add-template.webp)

Define Template Code, Template Name, and optionally Description. Click the '+' icon to add it to the list from the previous form.

## Label Reports

Once the template is defined, it can be assigned to specific printers here. After installing the application, default entries will already be present (as indicated in the screenshot below).

![Label Reports](./media/general-configuration/label-reports.webp)

To add a new report, right-click on a table and click Open Report Manager. It leads to the following form:

![Reports Manager](./media/general-configuration/reports-manager.webp)

You can generate report files via permutations by a given printer or template. Choose a printer or template and press Generate. Doing so will provide new entries in the main report form with appropriate report input.

The first column, Info, indicates whether we have a report file assigned to it. Available statuses are OK or NOT FOUND. Select a row to assign a specific report file and press “Edit Report.” The application ships with default test reports. Standard localization: `[InstallationPath]/Reports` (default localization: `C:\Program Files (x86)\CompuTec\CompuTec LabelPrinting\Reports`). Place the report that you want to use in this directory.

![Edit Reports](./media/general-configuration/edit-report.webp)

Choose the report file and name and click the + icon. Go back after the Data published message successfully.

![Published](./media/general-configuration/published-file.webp)

Now, the report file is assigned to a template and a corresponding printer.

## Companies

Click on the Company tab and then the Refresh button. Once completed, add all company rows to our database by clicking the Update button.

![Companies](./media/general-configuration/companies-refresh.webp)

To process a company with our program, you must activate it. Click on the desired company, press Activate, and then click the Update button below the table.

Click [here](company-installation-and-configuration.md) to find out more about company installation and configuration.

![Active](./media/general-configuration/activate-company.webp)
