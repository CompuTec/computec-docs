---
sidebar_position: 3
---

# Example Usage: Clustering

This example illustrates a clustering process based on the SEC Unique Numbered Product (UNP) standard.

---

## SEC Standard

SEC stands for Single European Coding, a unique identifier system mandated for marking human tissues and cells distributed across the European Union. The SEC has been compulsory for all tissue establishments (TEs) in the EU since 29 April 2017.

The SEC is composed of two parts:

- Donation Identification Number (SEC-DI) – 21 characters
- Product Identification Sequence (SEC-PI) – 19 characters

    ![Single European Coding](./media/clustering/image2020-1-8-13-19-3.png)

**Key Components of SEC**:

- **ISO Country Identifier**: Indicates the country of the tissue establishment issuing the SEC, following the ISO 3166-1 alpha-2 code format.
- **TE Code**: Tissue Establishment code of the manufacturer creating products out of the received human tissue. TEs are listed in the EU Tissue Establishment Compendium.
- **Unique Donation Number**: Identifies a specific donor.
- **Coding System Identifier**: Points to the coding system from which the Product Code is derived. Recognized systems within the EU are:

    | ***Coding System*** | ***Identifier*** |
    | --- | --- |
    | ISBT 128 | A|
    | Eurocode | B |
    | EUTC | E |

- **Product Code**: Identifies the product created from the donor tissue.
- **Split Number**: Used to uniquely identify each produced product, unique within each Donation Identification/Product Code combination
- **Expiry Date**: Specifies the product’s expiry in the format YYYYMMDD.

## Clustering

On Goods Receipt PO, Supplier Batch and Supplier Serial Numbers are recorded and Internal Batch numbers generated. The Receiver requires different scenario groups for Internal Batch number generation. The received items are clustered into Internal Batch numbers based on scenario group identifiers such as: same Item, same PO, same supplier DN/PL, same Supplier Batch, same Expiry Date.

Each organization, item group, or item may define its own clustering rules. For example:

- Receiver 1: Clustering is based on a unique combination of Item/PO/PackList/Supplier Batch.
- Receiver 2: Clustering is based on Item/PO/PackList/Expiry Date.

When all relevant criteria match, the same Internal Batch number is assigned to the received items.

Since Supplier Serial Numbers are only unique within a UDI Lot Number - and multiple lots may exist on a single PO line - the serial number registration must be linked both to the Internal Batch and the Supplier Batch.

The example below shows how a supplier’s internal batches are received by the receiver and how clustering into a single internal batch is identified:

![Batch Clustering](./media/clustering/batch-clustering.jpg)

Clustering rule:

| ***GRPO type*** | ***DN/PL # supplier*** | ***PO*** | ***Item*** | ***Supplier Batch #*** | ***Expiry Date*** |
| --- | --- | --- | --- | --- | --- |
| Receiver SEC/Serial# GRPO | Y | Y | Y |  | Y |

### Item Declaration for Serialization

For items managed by batches that require serialization, you must enable the Serialization option. In the Item Master Data, set the User-Defined Field (UDF) Serialization Enabled = Yes. Once enabled, all revisions of the item will follow the rules governing the selection of the Serialization Parameter Template (SPT) for that particular Item/Revision.

![Clustering](./media/clustering/image2020-1-8-13-57-39.png)

### WEB Application – log in

[Please check this section of the documentation](/docs/appengine/appengine-users-guide/launchpad/) for instructions on how to access the web application.

### Attributes Templates – Definition

The first step in setting up serialization and clustering is to define Attribute Templates. These templates are used to create various versions of the Serialization Parameter Template (SPT). Each UNP (Unique Numbered Product) component must be assigned a distinct attribute. Additional attributes also need to be defined to enable the clustering process.

![Clustering - Attribute Templates](./media/clustering/image2020-1-9-10-13-41.png)

![Clustering - Attribute Templates](./media/clustering/attribute-templates-h.png)

Below is the list of attributes aligned with the SEC standard and other required attributes necessary for the clustering process. To ensure clustering functions according to the defined rules, attributes must be created as per this list:

![Clustering - Attributes Definition](./media/clustering/list-of-attributes.png)

SEC Standard – Donation Identification:

The attributes related to the Donation Identification section of the SEC standard are shown below:

![SEC Standard – Donation Identification](./media/clustering/sec-standard-donation-identification.png)

SEC Standard – Product Identification:

![SEC Standard – Product Identification](./media/clustering/2020-11-13-11-49-00.png)

![SEC Standard – Product Identification](./media/clustering/Batch.png)

Clustering components:

![Clustering Components](./media/clustering/2020-11-13-11-44-59.png)
![Clustering Components](./media/clustering/exp-date.png)

SEC Serial Number component is obligatory and is a key to Track & Trace Table:

![Clustering - SEC Serial Number Component](./media/clustering/sec-serial-number-component.png)

Clustering is sensitive to Item changes by default. The rest of the parameters to which clustering is sensitive is determined at the Attribute level. These are the ones for which Clustering ID = Yes: SEC - Purchase Order, SEC - Delivery Note, SEC - Expiry Date.

![Clustering - Attribute Templates](./media/clustering/attribute-templates-expiry-date.png)

---

For field description please check [here](../serialization/fields-description.md#attribute-templates).

### Serialization Parameters Templates – definition

Attributes associated to SPT are a parameter of the rules that determine the use of a given SPT for clustering a given Item.
SPT is created by combining previously defined attribute templates. The user can modify Attribute's parameters.
When defining SPT, it is required to assign a given attribute to predefined Field (from Track & Trace Table) of a type compatible with the type of the given Attribute. This action allows you to create a dedicated Track & Trace Table for each Item in accordance to the defined SPT.

![Clustering - Serialization Parameters Templates](./media/clustering/image2020-1-9-12-20-23.png)
![Clustering - Serialization Parameters Templates](./media/clustering/image2020-1-9-12-21-51.png)

Please create a new SPT and add the predefined Attributes Templates to it, assigning them to predefined Field from Track & Trace Table.

![Clustering - Serialization Parameters Templates](./media/clustering/serialization-parameters-templates.png)

---

### Rules – definition

In order to be able to carry out the clustering process for a given Item/Revision, it is necessary to define at least one Rule that will cover this Item.

![Clustering](./media/clustering/image2020-1-9-12-54-7.png)

If in the Rule you specify only the Item Group, the SPT selected in the Result SPT column will be used for all of the Items in this Group. <br/>If you specify Item Code, then the Result SPT will be applied to all Revisions of the Item. <br/>If for a given Item you provide its revision, then Result SPT will be used only for this Item's Revision. <br/>The above applies to Items that have UDF set: Serialization enabled = Yes in Item Master Data. <br/>In our example, we will define a rule that specifies that previously defined SPT is applied to all of the revisions of a given Item.

![Clustering](./media/clustering/image2020-1-9-12-52-22.png)

### Start the clustering process

The clustering process is saved in a serialization document. This document is a subject to approval and verification. Serialization documents are visible in the WMS's Packing Hierarchy tile: [here](../serialization/fields-description.md#serialization-results)

For testing purposes, you can use the scanner simulator available here: [WMSScannerSimulator.exe](https://download.computec.one/software/wms/tools/WMS_Scanning_Simulator.exe).

For sample test data you can use the attached file: [SEC Clustering Test Case 09.01.2020 - 01.xlsx.](https://download.computec.one/software/wms/tools/SEC_Clustering_Test_Case.xlsx).

Attributes that have a GS1-ID defined must be preceded by it in the simulator, e.g. SEC - Purchase Order must be preceded (99).

![Clustering](./media/clustering/image2020-1-9-14-58-21.png)

Enable Serialization in CompuTec WMS (check [here](../serialization/serialization-plugin-installation-and-configuration.md#computec-wms). Log in to CompuTec WMS (check [here](/docs/wms/user-guide/starting/)).

Start Serialisation Document:
![Clustering](./media/clustering/image2020-1-15-12-19-29.png)![Clustering](./media/clustering/image2020-1-9-15-38-42.png)
![Clustering](./media/clustering/screenshot-2.png)![Clustering](./media/clustering/image2020-1-9-15-4-52.png)

Start scanning data for the first serial number:

    1. Purchase Order.
    2. Delivery Note.
    3. Serial Number.
    4. Supplier Batch.

After scanning the data of the first serial number you will be redirected to scan the next one.

(You can also choose the New Goods Receipt option to receipt goods serialized Items without a Purchase Order)

If you want to cancel scanning, select [Clustering](./media/clustering/tick.png), and then ![Clustering](./media/clustering/cross.png) . You will be able to return to this document.

![Clustering](./media/clustering/image2020-1-9-15-20-38.png)
![Clustering](./media/clustering/image2020-1-9-15-24-52.png)

Return to editing the serialization document.

![Clustering](./media/clustering/image2020-1-9-15-38-1.png)
![Clustering](./media/clustering/image2020-1-15-12-27-40.png)

Continue scanning serial numbers.vTo finish the serialization document, select ![Clustering](./media/clustering/image2020-1-9-15-23-9.png) , and then ![Clustering](./media/clustering/image2020-1-9-15-25-44.png).

**Deleting SN in CompuTec WMS**

When receiving a serialised item the SN is generated directly at GRPO scanning. When an employee notices it was received on a wrong PO, or wrong Pack List, it is possible to delete it.

![Clustering](./media/clustering/delete-serial-number.png)

    1. Clear Common Fields.
    2. Clear SU List.
    3. Delete Serial Numbers.

### Check serialisation document

The unfinished document is in Open status. The finished document is in the status of Ready To Accept. The document has to be accepted for further processing. Document in status Ready To Accept can be edited to make corrections. To do this, go to the WEB application and select:

![Clustering](./media/clustering/image2020-1-915-59-50.png)
![Clustering](./media/clustering/image2020-1-9-16-55-31.png)

Add or remove batch – RMBM option on batch line:

![Clustering](./media/clustering/image2020-1-9-17-8-8.png)

Change of SN assignment to batch:

![Clustering](./media/clustering/image2020-1-9-17-8-59.png)

Finally, accept the serialization document:

![Clustering](./media/clustering/image2020-1-9-17-10-24.png)

Once accepted, the status of the document changes to Verification.

![Clustering](./media/clustering/image2020-1-9-17-20-8.png)

### Verification Document

The accepted serialization document is subject to verification in WMS:

![Clustering](./media/clustering/image2020-1-9-17-13-43.png)![Clustering](./media/clustering/image2020-1-15-12-51-44.png)
![Clustering](./media/clustering/image2020-1-9-17-14-54.png)

To confirm verification, select ![Clustering](./media/clustering/image2020-1-9-15-25-44.png).

The document status changes to Closed which is visible in the WEB application in the document list.

![Clustering](./media/clustering/image2020-1-9-17-30-36.png)

### Receipt Document

Go to Receipt Document and enter Vendor, Warehouse and Bin Location (if applicable) and optionally Remarks, and then select ![Clustering - Receipt Document](./media/clustering/image2020-1-9-15-25-44.png). The GRPO document is saved and is now visible in SAP B1.

![Clustering](./media/clustering/image2020-1-9-17-21-28.png)![Clustering](./media/clustering/image2020-1-15-12-51-44-1.png)
![Clustering](./media/clustering/image2020-1-9-17-25-51.png)

Goods Receipt PO in SAP B1:

![Clustering](./media/clustering/goods-receipt-po-in-sapb1.png)

Batch Number Transactions Report:

![Clustering](./media/clustering/batch-no-transaction-report.png)

### Track & Trace Report

![Clustering](./media/clustering/track-trace.png)

By selecting Track & Trace Report in the WEB application it is possible to trace the Serial Number history:

![Clustering](./media/clustering/serial-no.png)
![Clustering](./media/clustering/serial-no-1.png)

## Example transactions in WMS using SN

### Stock Transfer

Source Warehouse selection

![Clustering](./media/clustering/stock-transfer.png)![Clustering](./media/clustering/transfer-operations.png)![Clustering](./media/clustering/warehouse-3.png)

Item selection

![Clustering](./media/clustering/document-details-7.png)![Clustering](./media/clustering/new-item-3.png)

Batch and quantity to transfer selection

![Clustering](./media/clustering/document-details-6.png)![Clustering](./media/clustering/options.png)![Clustering](./media/clustering/batches-7.png)![Clustering](./media/clustering/quantity-4.png)

Serial numbers to transfer selection

![Clustering](./media/clustering//search-serialization-4.png)![Clustering](./media/clustering/search-serialization-3.png)![Clustering](./media/clustering/quantity-5.png)

Destination warehouse selection

![Clustering](./media/clustering/document-details-5.png)![Clustering](./media/clustering/destination-warehouse.png)

Items confirmation and transfer document confirmation

![Clustering](./media/clustering/put-items.png)![Clustering](./media/clustering/remarks-4.png)

### Goods Issue

#### Warehouse Selection

![Clustering - Warehouse Selection](./media/clustering/warehouse-1.png)![Clustering - Warehouse Selection](./media/clustering/warehouse-2.png)

#### Item Selection

![Clustering - Item Selection](./media/clustering/document-details-4.png)![Clustering - Item Selection](./media/clustering/new-item-4.png)

#### Batch and Quantity Selection

![Clustering - Batch and Quantity Selection](./media/clustering/document-details-2.png)![Clustering - Batch and Quantity Selection](./media/clustering/batches-1.png)
![Clustering - Batch and Quantity Selection](./media/clustering/quantity-2.png)

#### Serial Numbers Selection

![Clustering - Serial Numbers Selection](./media/clustering/image2020-1-13-11-9-2.png)![Clustering - Serial Numbers Selection](./media/clustering/image2020-1-13-11-43-57.png)
![Clustering - Serial Numbers Selection](./media/clustering/image2020-1-13-11-22-38.png)

#### Issue Document Confirmation

![Clustering - Issue Document Confirmation](./media/clustering/document-details-1.png)![Clustering - Issue Document Confirmation](./media/clustering/remarks.png)

### Delivery

#### Warehouse Selection

![Clustering - Warehouse Selection](./media/clustering/delivery.png)![Clustering](./media/clustering/delivery-1.png)
![Clustering - Warehouse Selection](./media/clustering/warehouse.png)

#### Customer Selection

![Clustering - Customer Selection](./media/clustering/customer-selection.png)

#### Item Selection

![Clustering - Item Selection](./media/clustering/document-details.png)![Clustering - Item Selection](./media/clustering/new-item.png)

#### Batch and Quantity Selection

![Clustering - Batch and Quantity Selection](./media/clustering/image2020-1-13-11-2-10.png)![Clustering - Batch and Quantity Selection](./media/clustering/image2020-1-13-12-8-18.png)
![Clustering - Batch and Quantity Selection](./media/clustering/batches.png)![Clustering - Batch and Quantity Selection](./media/clustering/quantity-1.png)

#### Serial Number Selection

![Clustering - Serial Number Selection](./media/clustering/search-serialization.png)![Clustering - Serial Number Selection](./media/clustering/search-serialization-1.png)
![Clustering - Serial Number Selection](./media/clustering/quantity.png) ![Clustering - Serial Number Selection](./media/clustering/storage-info.png)

#### Delivery Document Confirmation

![Clustering - Delivery Document Confirmation](./media/clustering/document-details-3.png)![Clustering - Delivery Document Confirmation](./media/clustering/image2020-1-13-12-27-46.png)

---
