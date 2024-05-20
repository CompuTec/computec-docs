---
sidebar_position: 12
---

# Automatic Creation of Quality Control Documents

This option allows automatic creation of Quality Control documents based on predefined conditions.

---

## Prerequisites

Check the related checkbox in General Settings:

:::info Path
        Administration → System Initialization → General Settings → ProcessForce tab → QC tab → Auto Create QC Test Documents checkbox
:::

![Automatic Creation of Quality Control Documents](./media/automatic-creation-of-quality-control-documents/auto-create-checkbox.jpg)

Create a Counter Scheme:

:::info Path
        Administration → Setup → Quality Control → Counter Schemes
:::

![Quality Control](./media/automatic-creation-of-quality-control-documents/counter-scheme.jpg)

## Usage Example

The Counter Scheme has a Name and a Code defined. It is set to create a Quality Control document every 30 Batches:

    ![Quality Control](./media/automatic-creation-of-quality-control-documents/counter-scheme-01.jpg)

Then, in Test Protocol, Frequency tab you can choose this scheme (1), set it to be active (2) and save the changes (3):

:::info Path
        Quality Control → Test Protocol
:::

![Quality Control](./media/automatic-creation-of-quality-control-documents/choosing-counter-scheme.jpg)

In QC Test/QC Pool Pr. tab you can decide about auto create Test using defined frequency:

![Quality Control](./media/automatic-creation-of-quality-control-documents/auto-create-use-frequency.jpg)

You can defined transaction/s from which Quality Control Test documents will be created:

![Quality Control](./media/automatic-creation-of-quality-control-documents/test-protocol-transactions.jpg)

You can also create a Quality Control Test per Business Partner:

First, you have to define a BP QC Qualifications:

:::info Path
        Quality Control → Test Protocol
:::

![Quality Control](./media/automatic-creation-of-quality-control-documents/qc-qualifications.jpg)

Then, link it to a Business Partner:

:::info Path
        Administration → Setup → Quality Control → BP QC Qualifications
:::

![Quality Control](./media/automatic-creation-of-quality-control-documents/business-partner-qc-qualifications.jpg)

Then you can link it to test protocol

![Quality Control](./media/automatic-creation-of-quality-control-documents/test-protocol-qc-qualification.jpg)
