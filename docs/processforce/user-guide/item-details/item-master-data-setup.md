---
sidebar_position: 2
---

# Item Master Data Setup

:::note Path
    Inventory → Item Master Data
:::

When setting up Item Master Data within SAP Business One, the following fields are used by ProcessForce:

- Form header
  - Unit Price – this value within this field is defaulted onto the Bill of Materials and Manufacturing Order and is used for financial transactions
  - Item Group – to use License plate functions, a specific Item Group code is required and added within the [General Settings](../system-initialization/general-settings/overview.md) ProcessForce → License tab
  - Sales Item, Inventory Item, Purchase Item, Fixed Assets Item - not checked in combination with Phantom Item - not checked for CoProduct production General Settings

:::note
    When using license plates, ProcessForce will automatically create a license plate number and add this record to the Item Master with the Item Group code as defined.
:::

- General tab
  - Serial and Batch Numbers – to utilize [Batch Template, Serial Template Definition](batch-serial-template-definition.md) function
- Planning tab
  - Procurement Method – Make or Buy values are used within the Bill of Materials and Manufacturing Order components
- Production tab
  - Phantom Item – to be checked to define a phantom item within the Bill of Material
  - Issue Method – to define an Item as manual or backflush within the Bill of Materials and the Manufacturing Order
- Right-click navigation
  - Production → Item Details → Item Details
  - Production → Bill of Materials → Bill of Materials
