---
sidebar_position: 12
---

# Automatic Creation of Quality Control Documents

Efficient quality control (QC) processes are essential for maintaining product standards and ensuring compliance. To simplify this, you can automate the creation of Quality Control documents based on predefined conditions. This guide outlines the prerequisites, setup, and usage of the automatic QC document creation feature.

---

## Prerequisites

To enable automatic QC document creation, follow these steps:

1. **Check the related checkbox in General Settings**: Navigate to the General Settings and check the option for automatic QC test document creation.

        :::info Path
                Administration → System Initialization → General Settings → ProcessForce tab → QC tab → Auto Create QC Test Documents checkbox
        :::

        ![Automatic Creation of Quality Control Documents](./media/automatic-creation-of-quality-control-documents/auto-create-checkbox.jpg)

2. **Create a Counter Scheme**: Define a Counter Scheme to determine the frequency of QC document creation.

        :::info Path
                Administration → Setup → Quality Control → Counter Schemes
        :::

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/counter-scheme.jpg)

## Usage Example

**Setting the Counter Scheme**:

Create a Counter Scheme with a specific name and code. For instance, you can configure the scheme to generate a QC document every 30 batches.

    ![Quality Control](./media/automatic-creation-of-quality-control-documents/counter-scheme-01.jpg)

**Configuring the Test Protocol**:

1. Open the Test Protocol section and navigate to the Frequency tab.

2. Select the previously created Counter Scheme (1), activate it (2), and save your changes (3).

        :::info Path
                Quality Control → Test Protocol
        :::

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/choosing-counter-scheme.jpg)

3. In the QC Test/QC Pool Pr. tab, configure the system to automatically create tests based on the defined frequency:

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/auto-create-use-frequency.jpg)

4. Specify the transaction types that trigger the creation of QC Test documents:

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/test-protocol-transactions.jpg)

**Creating QC Tests for Business Partners**

To tailor QC tests for specific business partners:

1. Create qualifications in the Test Protocol section.

        :::info Path
                Quality Control → Test Protocol
        :::

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/qc-qualifications.jpg)

2. Assign the defined qualifications to specific business partners.

        :::info Path
                Administration → Setup → Quality Control → BP QC Qualifications
        :::

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/business-partner-qc-qualifications.jpg)

3. Connect the business partner qualifications to the relevant test protocols.

        ![Quality Control](./media/automatic-creation-of-quality-control-documents/test-protocol-qc-qualification.jpg)

---
