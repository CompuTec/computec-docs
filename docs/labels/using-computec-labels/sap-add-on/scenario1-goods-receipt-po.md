---
sidebar_position: 2
---

# Scenario 1: Goods Receipt PO Printed from SAP Business One

In this step-by-step manual, we will manually configure the application to print Goods Receipt Purchase Order from SAP Business One. Additionally, we want to save the prints to PDF.

---

## Printer Settings

Only the Crystal printer type allows to save to PDF. Therefore, we will use this option in this scenario.

We will use the following printer configuration:

- Printer Code: test1
- Printer Type: Crystal
- Printer Name: test1
- Localization: CT

With the following parameters, define

- SaveAsPdf: True
- PhysicalName: Send to OneNote 16 (one of the printer's names available on this test server)
- MaxCapacity: 75.

Click [here](../../setup/configuration/general-configuration.md#printers) to find out more about printer configuration.

## Label Template

We have to create a Label Template to which settings will be assigned and which itself will be assigned to a specific printer.

A Label Template used in this scenario:

| TEMPLATE CODE | TEMPLATE NAME | TEMPLATE DESCRIPTION |
|:-------------:|:-------------:|:--------------------:|
| GRPO          | GRPO          | GRPO                 |

Click [here](../../setup/configuration/general-configuration.md#printers) to find out more about printer configuration.

## Printing Rules

- Requester: SAP
- Transaction: Goods Receipt PO
- Employee/User/ItemGroup/Warehouse: All
- Unit of Measurement – not checked
- Header – not checked
- Template: GRPO

## Label Report

### Crystal Report

Crystal report used in this scenario:

![Crystal Report](./media/scenario1-goods-receipt-po/crystal-report.webp)

In Crystal Reports, different variables are used, e.g., StringPar, and NumericPar. It is possible to attach to each of its specific data in the next step: mapping.

#### CompuTec Labels Localization

Crystal reports used by CompuTec Labels have to be located in the following locations:

`C:\ProgramData\CompuTec\CT Label Printing\Reports\`

(or the corresponding installation directory if the default one was not chosen).

## Mapping

Next, we must define mapping parameters: what data is assigned to a specific variable from a label layout.

Mapping rules used in this scenario:

|    Name    |    Type   |             Value             |
|:----------:|:---------:|:-----------------------------:|
| StringPar3 | Parameter | Item Code (Item Code)         |
| StringPar1 | Parameter | ItemName (ItemName)           |
| StringPar4 | Sql       | SELECT @DistNumber FROM DUMMY |
| NumberofCopies | Sql | SELECT 5 FROM DUMMY |

In addition to String Pars, we have added NumberofCopies to always print 5 copies statically. If we need to make this value dynamic based on user input, we can use a field in the database.

Click [here](../../setup/configuration/company-installation-and-configuration.md#mapping-parameters-view) to find out more about mapping parameters configuration.

## Event Triggers

The next thing is to define what action printing will occur.

Event Triggers set up used in this scenario:

| Employee | Employee Department |    Object Type   |    SAP   |    PDC   |    WMS   |    PF    |
|:--------:|:-------------------:|:----------------:|:--------:|:--------:|:--------:|:--------:|
| All      | All                 | Goods Receipt PO | OnChange | NoAction | NoAction | NoAction |

Click [here](../../setup/configuration/company-installation-and-configuration.md#event-triggers-view) to find out more about event trigger configuration.

## Data Update

After setting up all the settings, go to Companies and choose Update Global Data option:

![Global Settings](./media/scenario1-goods-receipt-po/ct-labels-update-global-settings.webp)

## Template Assigning

Next, we have to assign the template, [GRPO](#label-template), in this case, to a specific printer and choose the following:

| INFO |    NAME   | TEMPLATE CODE | PRINTER CODE |                                               FILE                                              |
|:----:|:---------:|:-------------:|:------------:|:-----------------------------------------------------------------------------------------------:|
| OK   | GRPOtest1 | GRPO          | test1        | C:\Program Files (x86)\CompuTec\CompuTec LabelPrinting\Reports\LabelPrintingAyCrystalLayout.rpt |

Click [here](../../setup/configuration/general-configuration.md#label-reports) to find out more about Template and report file assigning.

## Printing

We defined the printing trigger as OnChange, which means that, in our case, a printing occurs on an updating a Goods Receipt PO document.

We can also print a label manually at any time. To do this in SAP Business One, go to the upper menu > File > Print Labels. Choose Crystal printer from a drop-down list and click Print.

![Print Labels](./media/scenario1-goods-receipt-po/print-labels.webp)

A system message will appear:

![System Message](./media/scenario1-goods-receipt-po/system-message.webp)

A label is printed and saved as a PDF file in the default location: `Local Disk (C:)\ProgramData\CompuTec\CT Label Printing\Reports\Crystal`:

![Printed Label](./media/scenario1-goods-receipt-po/printed-label.webp)
