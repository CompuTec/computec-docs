---
sidebar_position: 2
---

# Configuration

Configuration settings are accessible in the Administration Panel, which is available to selected users through the AppEngine. These settings enable you to define specific functionalities for the plugin.

    ![Configuration](./media/pm-02.png)

---

## Plugins Settings

To configure plugin functionalities:

1. Navigate to the Plugins menu option.

    ![Plugins Menu](./media/pm-03.png)

2. Select the desired plugin.

    ![Select Plugin](./media/pm-04.png)

3. Click on the Settings option.

    ![Settings](./media/pm-05.png)

4. A list of plugin-specific settings will be displayed.

    ![Plugin Settings](./media/pm-06.png)

### Available Plugin Settings

- **Disable Price Change** - Prevents editing the price in the document via the plugin. Prices imported from an Excel file will be displayed but cannot be modified.
- **Disable User Change** - Prevents users from editing the name of the document creator.
- **Enable Multi Price List** - Allows price updates across multiple price lists simultaneously. If disabled, exporting prices from SAP Business One to an Excel file will only be possible for one selected price list at a time. Similarly, new prices can only be added for a single price list when creating a document.
- **Multi Price Column Separator** - Defines the character used in the Excel file to separate the price list name and the "NewPrice" value in the first row of the column for entering new prices. For example, if the price list is named "Base Prices 2024" and the separator is set to "_", the column header in the Excel file will appear as "Base Prices 2024_NewPrice" for clarity.

## Background Processing Settings

To configure background processing:

1. Select the Background Processing menu option.

    ![Background Processing Menu](./media/bp-01.png)

2. Navigate to Configuration.

    ![Configuration](./media/bp-02.png)

3. Choose the Price Update Job option.

    ![Price Update](./media/bp-03.png)
    ![Attributes](./media/bp-04.png)

4. Specify the desired time for the background job. Optionally, enter a name for the job.

    ![Time](./media/bp-05.png)

---
These settings ensure seamless price updates and efficient management of plugin functionalities, empower businesses to customize workflows and optimize performance for specific needs.  Proper configuration is key to achieving seamless integrations and smooth operational performance across platforms.
