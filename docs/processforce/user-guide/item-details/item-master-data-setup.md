---
sidebar_position: 2
---

# Item Master Data Setup

Item Master Data is a critical component in SAP Business One, enabling efficient inventory and production management. When using CompuTec ProcessForce, specific fields within the Item Master Data setup influence manufacturing, procurement, and license plate functionality. This guide outlines the key fields and their roles in CompuTec ProcessForce.

To access Item Master Data Setup, navigate to:

:::note Path
    Inventory → Item Master Data
:::

---

When setting up Item Master Data within SAP Business One, the following fields are used by CompuTec ProcessForce:

## Form Header

- **Item No.**: The unique identifier/code of the item.
- **Description**: The name or description of the item for easier identification.
- **Foreign Name**: An alternate name of the item, often used for international customers/vendors.
- **Item Type**: Specifies what type of item it is.
- **Item Group**: Required for License Plate functionality. A specific Item Group code must be configured under  [General Settings](../system-initialization/general-settings/overview.md) ProcessForce → License tab
- **UoM Group** (Unit of Measure Group): Defines how the item is measured and sold (e.g., Box, Manual).
- **Bar Code**: Field for assigning a barcode to the item for scanning purposes.
- **Price List**: Defines the default price list from which the item price will be derived.
- **Unit Price**: This value is automatically applied to the Bill of Materials (BOM) and Manufacturing Orders and is used in financial transactions. The base selling price of the item in the primary currency.
- **Sales Item, Inventory Item, Purchase Item, Fixed Asset Indicator**: These fields should remain unchecked when Phantom Item is also unchecked for Co-Product production in General Settings.

  :::note
      When using license plates, CompuTec ProcessForce automatically generates a license plate number and assigns it to the Item Master, following the defined Item Group code.
  :::

## General tab

- **Serial and Batch Numbers**: essential for [Batch Template, Serial Template Definition](batch-serial-template-definition.md) function

## Planning tab

- **Procurement Method**: specifies whether an item is Make or Buy, impacting its use in the BOM and Manufacturing Orders.

## Purchasing tab

## Sales Data tab

## Inventory Data tab

## Planning Data tab

## Production Data tab

- **Properties**: This tab is designed to categorize and classify items based on predefined attributes. These classifications are useful for reporting, filtering, and analysis without the need to create custom fields.
- **Remarks**: Additional notes related to the specification.
- **Attachments**: Allows the user to upload relevant documents relating to Item Details.

## Production tab

- **Phantom Item**: to be checked to define a phantom item within the Bill of Materials.
- **Issue Method**: to define an Item as manual or backflush within the Bill of Materials and the Manufacturing Order

The Properties tab in the Item Master Data window of SAP Business One allows users to classify and filter items using predefined attributes called Item Properties. These properties serve as user-defined flags or categories that can be assigned to items for easier grouping, reporting, and searching.

## Properties tab

The Properties tab in the Item Master Data window of SAP Business One allows users to classify and filter items using predefined attributes called Item Properties. These properties serve as user-defined flags or categories that can be assigned to items for easier grouping, reporting, and searching.

Item properties help businesses organize and categorize their inventory beyond standard fields such as Item Group or Item Type. They can be used to:

- Classify items based on functional or commercial characteristics (e.g., “Imported Item,” “Eco-friendly,” “High-value,” etc.)
- Simplify searches and reporting by filtering items based on assigned properties.
- Support business analytics, dashboards, and custom queries.

## Right-click navigation

For quick access, navigate to:

:::info Path
  Production → Item Details → Item Details
  Production → Bill of Materials → Bill of Materials
:::

---
