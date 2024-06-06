---
sidebar_position: 8
---

# PFI

PFI (short for ProcessForce Import) is a plugin that allows importing/updating data to ProcessForce objects. The idea behind this plugin is to be a simplifier, swifter, and more adjustable alternative for [PowerShell updates](/docs/processforce/developer-guide/data-import/overview/).

(The video was recorded on a pre-release version and the interface differs slightly in the released version.)

## Start

### Prerequisites

The ProcessForce plugin has to be installed and enabled for the company you want to use ProcessForce Import with.

If a new UDF is added to a ProcessForce object, the AppEngine service has to be restarted in order to see UDF as a column in a PFI template.

### Installation

Click [here](/docs/appengine/administrators-guide/configuration-and-administration/overview#plugins) to get to know more about AppEngine plugin installation.

## Usage

Once the plugin is installed, its tile is available in the [Launchpad](/docs/appengine/appengine-users-guide/launchpad/) Upon opening the plugin you can see a the ProcessForce objects represented by tiles. Choose the one you want to work with (scroll to get to other objects):

    ![PFI](./media/pfi/pfi-main.png)

The example view (Bill of Materials in this case):

![PFI](./media/pfi/pfi-bill-of-materials.png)

### Header

Here you can see the object's name (upper-left corner). On the right from it you can find all the objects related to the main one. Click the name (of the main or related objects) to display all the columns of the object (properties of the database table) in the table below. The numbers in the brackets represents object's level, e.g. Bill of Materials 0 > Routing 1 > Routing Operations 2 > Routing Operations Properties 3.

**Download Excel** – download the content of the table (with the columns names) displayed after clicking any object as a Microsoft Excel file. If you did not load any sample (check the Load Sample option below), you can download an empty file (just with column names). You can then add or update the content of the file in Microsoft Excel, save it and then upload it to the plugin with the next option (Import from Excel).

**Download with Advanced Settings** – option available from the arrow down next to Download Excel option:

    ![PFI](./media/pfi/pfi-advanced-download.png)

Include Error Messages – after importing entries, system returns results. With this setting user can download import results and see error description.

**Upload Data from Excel** – import previously downloaded Microsoft Excel file (see the option above), updated with data. Blank Excel cell in does not update the related property as blank. Use slash (/) to set property to blank. Leaving a cell blank means that the property will not be updated. It will be skipped during import (populated by system if new entry/line or values will stay the same if there were values there already) and marked with the following symbol:  .

**Load Sample** – using this option you can load data from the database to the table, download it (using the Download Excel Template), update it and upload it again to the table (using Import from Excel). This option allows to mass update of records. Usage: click the option, filter by choosing values in fields related to a specific form (optional), choose how many records you want to load, and click Load. A a specific object is loaded with all the lower level objects (e.g. Bill of Materials with Items, CoProducts, Scraps etc.)

**Import to SAP** – this option imports data from the matrix to a database

**Download Template CSV** – downloads a template for a specific, currently displayed object, e.g. Bill of Materials' Items (unlike the Download with advanced settings, Export data to CSV file which exports templates for the displayed object and all the lower level objects).

**Upload Data from CSV** – this option is similar to the Upload data from Excel, but for CSV files use.

### Filters

You can filter the result table by putting values in specific fields. You can also adapt the filters section: choose which fields are displayed to be used.

**Read-only fields** – If it is not checked, only fields that can be updated will be displayed. If checkbox is checked, you can see all the objects. Read-only objects are marked with a padlock icon then. Example: ![PFI](./media/pfi/pfi-padlock.png)

### Table

Here, you can find a table of data related to an object chosen in the header: all the columns followed by the UDFs (the far right columns of the table). This data can be then import to SAP (using an option in the header). The table has to be populated with data first (by using option in the header).

**Import Key** – the first column in the PFI matrix. It is a link column for the template (e.g. links Bill of Materials with its lower level objects).

**The key icon** – marks primary field for this object. If you leave this field empty during edition, it will be considered as adding a record. If there is any value here, this record will be updated.

**Action** – after uploading an Excel, the Action column determines manipulation type: Add/Update.

**Import Status** – indicator of successful/failed import of a specific line to SAP Business One.
