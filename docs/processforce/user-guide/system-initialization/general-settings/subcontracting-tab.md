---
sidebar_position: 8
---

# Subcontracting tab

Subcontracting is a method of managing the “purchase of a service” within manufacturing operations. For example, raw or semi-finished items are sent to a subcontractor to perform specific services like painting, heat treatment, or annealing, after which the items are returned for further processing or final assembly.

It allows configuration of procurement document types, numbering series, and automation logic related to these outsourced services. This ensures seamless integration of subcontracting into your production and procurement workflows, helping maintain traceability, compliance, and operational efficiency.

To access Subcontracting, navigate to:

:::info Path

Administration → System Initialization → General Settings → ProcessForce tab → Subcontracting

:::

![Subcontracting Tab](./media/subcontracting-tab/subcontracting-tab.webp)

---

## Key Settings

1. **Procurement Document Type**

    Defines the default document used to initiate subcontracting procurement: either an internal Purchase Request or a direct Purchase Order. Select one of the following:

        - **Purchase Request**: An internal document used to request goods or services. Triggers an internal approval process before issuing a Purchase Order.
        - **Purchase Order**: A formal order sent directly to the subcontractor. Directly creates an external PO to the subcontractor.

        ➡️ Learn more on how to create [Purchase Order](../../subcontracting/subcontract-assembly-and-free-issue-materials/process-flow.md#create-a-purchase-order-for-the-service).

2. **Default Series for Procurement Documents**

    Controls the numbering series applied to procurement-related documents generated during subcontracting activities. ocument series can be chosen from the drop-down list. These fields determine the document numbering format based on existing series configurations in SAP Business One.

        - **Series for Purchase Requests**: Document series used when creating Purchase Requests.
        - **Series for Purchase Orders**: Document series used when issuing Purchase Orders.
        - **Series for Goods Receipt PO**: Document series used when posting Goods Receipt POs.

    >Note: Proper series assignment ensures auditability and avoids document number conflicts. Ensure each series is uniquely identified within your SAP Business One setup.

    ➡️ Learn more on how to create [Document Numbering](../../system-initialization/document-numbering.md).

3. **Service Receipt Document**

    These settings govern the automatic handling of Goods Receipt Purchase Orders (GRPOs) related to subcontracting operations.

        - **Create a Goods Receipt PO on Receipt from Production**: Automatically generates a GRPO when subcontracted goods are received back into production.
        - **Cancel Goods Receipt PO on Goods Receipt Rollback**: Automatically cancels or reverses the GRPO if the production receipt is rolled back.

4. **Other Settings**

    Additional automation and integration features to streamline subcontracting workflows and support specific regional or operational requirements.

        - **Create a procurement document after scheduling Manufacturing Order**: Automatically triggers procurement after MO scheduling.
        - **Operation Quantity**: Enables subcontracting logic based on specific operation quantities.
        - **Enable integration with Nota Fiscal (Brazil only)**: Activates integration with Brazil’s fiscal system for legal compliance.
        - **Drop-Ship Warehouse**: This option is specific to the Brazilian localization and should be used only in that context. It represents a virtual warehouse used to simulate material transfers to subcontractors. An Inventory Transfer to this warehouse reflects the dispatch of materials. Subsequent Issues and Receipts can then be posted from it to track subcontracting activity.

            ➡️ Learn more about [Brazil localization subcontracting process](../../subcontracting/brazil-localization-subcontracting-process.md).

---
