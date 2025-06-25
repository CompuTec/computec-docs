---
sidebar_position: 2
---

# Item - Distribution and Cost Dimensions

## Introduction

In SAP Business One with CompuTec ProcessForce, managing distribution and cost dimensions is critical for efficient resource allocation and accurate financial reporting. This document outlines the process for associating Distribution Rules and Cost Centers with key forms and documents, ensuring streamlined workflows and consistent data management. These dimensions can be assigned to items and carried forward across various master data forms and documents:Currently Distribution Rules and Cost Centers can only be added to Items and added on the following CompuTec ProcessForce master data forms and documents:

- Bill of Materials
- Manufacturing Orders
- Pick Receipt
- Pick Order
- Roll Back correction

## Master Data

Distribution Rules can be allocated as follows, and once set at this level will be copied to the related forms, as per the list above:

- Bill of Materials Header
- Item, CoProduct and Scrap Lines

### Bill of Materials

- Select the Distribution rules for the appropriate dimensions.

    ![Bill of Materials](./media/item-distribution-and-cost-dimensions/bill-of-materials-select-distribution-rule.png)

- Using the Form Setting in Bills of Materials, select the dimensions to be displayed.

    ![Bill of Materials](./media/item-distribution-and-cost-dimensions/bill-of-materials-form-settings.png)

- For each line, select the distribution rule.

    ![Bill of Materials](./media/item-distribution-and-cost-dimensions/bill-of-materials-list-of-distribution-rules.png)

### Manufacturing Orders

- Based on the Bill of Materials, the dimensions are copied into the Manufacturing Order.

    ![Manufacturing Orders](./media/item-distribution-and-cost-dimensions/bill-of-materials.png)

### Pick Issues

- Based on the Manufacturing Order, the dimensions are copied into the Pick Issue Document.

    ![Pick Issues](./media/item-distribution-and-cost-dimensions/pick-issues.png)

### Goods Issues

- Based on the Pick Issue, the dimensions are copied into the SAP Business One Goods Issue Document.

    ![Goods Issues](./media/item-distribution-and-cost-dimensions/goods-issues.png)

### Pick Receipt

- Based on the Manufacturing Order header, the dimensions are copied into the Pick Receipt.

    ![Pick Receipt](./media/item-distribution-and-cost-dimensions/pick-receipt.png)

### Goods Receipt

- Based on the Pick Receipt, the dimensions are copied into the SAP Business One Goods Receipt.

    ![SAP Business One Goods Receipt](./media/item-distribution-and-cost-dimensions/goods-receipt.png)

---
