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

- **Unit Price**: this value is automatically applied to the Bill of Materials (BOM) and Manufacturing Orders and is used in financial transactions.
- **Item Group**: required for License Plate functionality. A specific Item Group code must be configured under  [General Settings](../system-initialization/general-settings/overview.md) ProcessForce → License tab
- **Sales Item, Inventory Item, Purchase Item, Fixed Assets Item**: these fields should remain unchecked when Phantom Item is also unchecked for Co-Product production in General Settings.

  :::note
      When using license plates, CompuTec ProcessForce automatically generates a license plate number and assigns it to the Item Master, following the defined Item Group code.
  :::

## General tab

- **Serial and Batch Numbers**: essential for [Batch Template, Serial Template Definition](batch-serial-template-definition.md) function

## Planning tab

- **Procurement Method**: specifies whether an item is Make or Buy, impacting its use in the BOM and Manufacturing Orders.

## Production tab

- **Phantom Item**: to be checked to define a phantom item within the Bill of Materials.
- **Issue Method**: to define an Item as manual or backflush within the Bill of Materials and the Manufacturing Order

## Right-click navigation

For quick access, navigate to:

:::info Path
  Production → Item Details → Item Details
  Production → Bill of Materials → Bill of Materials
:::

---
