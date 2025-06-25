---
sidebar_position: 2
---

# Scenario 1: Goods Receipt PO Printed from SAP Business One

Printing a Goods Receipt Purchase Order (GRPO) in SAP Business One requires proper configuration of printer settings, templates, and mapping parameters. In this guide, we will walk through the step-by-step process to configure the system for printing GRPOs, ensuring that they are also saved as PDF files.

---

## Printer Settings

SAP Business One allows saving prints as PDFs only when using the Crystal printer type. In this scenario, we will configure the following printer settings:

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

To print GRPO labels, we need to define and assign a Label Template. The template used in this scenario is as follows:

| TEMPLATE CODE | TEMPLATE NAME | TEMPLATE DESCRIPTION |
|:-------------:|:-------------:|:--------------------:|
| GRPO          | GRPO          | GRPO                 |

Click [here](../../setup/configuration/general-configuration.md#printers) to find out more about printer configuration.

## Printing Rules

The following rules apply to GRPO printing:

- Requester: SAP
- Transaction: Goods Receipt PO
- Employee/User/ItemGroup/Warehouse: All
- Unit of Measurement – not checked
- Header – not checked
- Template: GRPO

## Label Report

### Crystal Report

The Crystal Report file used in this scenario is as follows:

![Crystal Report](./media/scenario1-goods-receipt-po/crystal-report.webp)

Crystal Reports use different variables, such as StringPar and NumericPar, which need to be mapped in the next step.

#### CompuTec Labels Localization

Crystal reports for CompuTec Labels must be stored in the following location:

`C:\ProgramData\CompuTec\CT Label Printing\Reports\`

(or the corresponding installation directory if the default one was not chosen).

## Mapping

Next, we must define mapping parameters: Mapping rules define how data is assigned to specific variables within the label layout. The mappings for this scenario are:

|    Name    |    Type   |             Value             |
|:----------:|:---------:|:-----------------------------:|
| StringPar3 | Parameter | Item Code (Item Code)         |
| StringPar1 | Parameter | ItemName (ItemName)           |
| StringPar4 | Sql       | SELECT @DistNumber FROM DUMMY |
| NumberofCopies | Sql | SELECT 5 FROM DUMMY |

In addition to String Pars, The NumberofCopies parameter ensures that five copies are printed. If required, this value can be made dynamic by retrieving it from a database field.

Click [here](../../setup/configuration/company-installation-and-configuration.md#mapping-parameters-view) to find out more about mapping parameters configuration.

## Event Triggers

The next thing is to define what action printing will occur.

Event Triggers set up used in this scenario:

| Employee | Employee Department |    Object Type   |    SAP   |    PDC   |    WMS   |    ProcessForce    |
|:--------:|:-------------------:|:----------------:|:--------:|:--------:|:--------:|:--------:|
| All      | All                 | Goods Receipt PO | OnChange | NoAction | NoAction | NoAction |

Click [here](../../setup/configuration/company-installation-and-configuration.md#event-triggers-view) to find out more about event trigger configuration.

## Data Update

After configuring the settings, update the global data by navigating to Companies and selecting the Update Global Data option.

![Global Settings](./media/scenario1-goods-receipt-po/ct-labels-update-global-settings.webp)

## Template Assigning

To complete the setup, assign the [GRPO](#label-template) to a specific printer with the following configuration:

| INFO |    NAME   | TEMPLATE CODE | PRINTER CODE |                                               FILE                                              |
|:----:|:---------:|:-------------:|:------------:|:-----------------------------------------------------------------------------------------------:|
| OK   | GRPOtest1 | GRPO          | test1        | C:\Program Files (x86)\CompuTec\CompuTec LabelPrinting\Reports\LabelPrintingAyCrystalLayout.rpt |

Click [here](../../setup/configuration/general-configuration.md#label-reports) to find out more about Template and report file assigning.

## Printing

Since we configured the OnChange trigger, labels will print automatically when a Goods Receipt Purchase Order (GRPO) is updated.

We can also print a label manually at any time. To print labels manually:

1. Open SAP Business One.
2. Navigate to File > Print Labels in the upper menu.
3. Select Crystal printer from the drop-down list.
4. Click Print.

    ![Print Labels](./media/scenario1-goods-receipt-po/print-labels.webp)

Upon printing, the following message appears:

![System Message](./media/scenario1-goods-receipt-po/system-message.webp)

The label is printed and saved as a PDF in the default location: `Local Disk (C:)\ProgramData\CompuTec\CT Label Printing\Reports\Crystal`:

![Printed Label](./media/scenario1-goods-receipt-po/printed-label.webp)

---
