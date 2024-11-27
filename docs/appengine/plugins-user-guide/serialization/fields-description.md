---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 6
---

# Serialization: Fields Description

Serialization plays a crucial role in streamlining inventory and warehouse processes, enabling precise tracking, traceability, and accountability of products through unique identifiers. Here, you can find a description of all of the configuration fields that affect the serialization process.

---

## SAP Business One/ProcessForce – Item Declaration

### Item Master Data

Only items managed by batches with Serialization Enabled = Yes are available for assignment to Serialization Parameters Templates (SPT).

![Serialization - Fields Description](./media/field-description/image2019-7-19-14-48-47.png)

**Serialization Enabled = Yes** - Ensures that items, including all revisions, are selectable for rule definition.

## WMS - Custom Configuration

![Serialization - Fields Description](./media/field-description/image2020-1-19-10-16-23.png)

- **Enable Serialization** – Activates serialization functionality within the WMS system.
- **Reuse Storage Unit** – Allows reusing the same packages (SSCC) during the reception process.
- **Show button printing label Storage Unit** – Enables a manual print option for storage unit labels via a visible button.
- **Possibility fill up SSCC code manually** – Permits manual input of SSCC codes without using a scanner.
- **Possibility change SSCC code** – Enables changes to system-generated SSCC codes during the acceptance process.
- **Always do process verification** – Enforces verification for all serialized items, even if not explicitly required.

## WEB application – Serialization Configuration

Below are the steps for configuring serialization:

![Serialization - Fields Description](./media/field-description/serialization.png)

First, define Attributes Template. Then from these templates, you are able to define Serialization Parameters Templates. The next obligatory step is to set up Rules. Step 4 is not required for clustering. It useful if you produce serialized products and you received SN pools from a customer or you have to generate SN pools according to determined schemes.

You can find an example of a clustering case here: [Example usage: clustering](../serialization/example-usage-clustering.md).

### Attribute Templates

![Serialization - Fields Description](./media/field-description/image2020-1-13-4-39-6.png)

#### Attributes List Window

List with all defined attributes. Here you can start adding a new one or modify the existing.

![Serialization - Fields Description](./media/field-description/list-of-attributes-all.png)

#### Single Attribute Window add/view/edit

![Serialization - Fields Description](./media/field-description/iso-country-code.png)

    1. **Code** – A unique identifier for the attribute.
    2. **Name** – The name of the attribute.
    3. **Type** – Specifies the data type (Text, Date, Time, Integer, Decimal).
    4. **Default Value** – Enabled when the "Type" is set to "Text".
    5. **GS1 ID** – ID in compliance with the GS1 standard.
    6. **Maximum Length** – Defines the length of the attribute component in the SPT.
    7. **Source** – The data source which can be: Batch Details, Document Line, Serial Details
    8. **Field** – Specifies the field from the selected source:
            - For Batch Details: Batch Number, Supplier Batch, Expiry Date, Batch Attribute 1, Batch Attribute 2
            - For Document Line: Base document Entry
            - For Serial Details: Serial Number, Remarks
            >**Note**: Source and Field are defined only for non-UNP Segments
    9. **Trim From, Trim To** – start and end position of an attribute in UNP, determine which part of the attribute is added to the UNP ID.
    10. **UNP ID Sequence** - Specifies the attribute's inclusion in the UNP ID:
            - If not null: The attribute is included, and the value determines its position.
            - If null: The attribute is excluded.
    11. **Clustering ID** – Indicates if the attribute is a clustering parameter.
    12. **Mandatory GRPO** – Indicates whether the attribute is required for a Good Receipt Purchase Order.
    13. **Mandatory MOR receipt** – Specifies if the attribute is required for a receipt from production.
    14. **Display in WMS** – Determines if the attribute will be visible on the WMS device screen.
    15. **Common in WMS** – Ensures the attribute remains visible in the upper part of the WMS screen, even when other fields are saved.
    16. **Description for WMS** – Allows the definition of a label for the attribute within the WMS interface.
    17. **Remarks** – Provides space for additional information related to the attribute.

### Serialization Parameters Templates (SPT)

![Serialization - Fields Description](./media/field-description/image2020-1-13-14-38-42.png)

Here you can pin Attribute Templates in one SPT it accordance with used serialization standard. Each component of SPT you have to assign to a Field from the Track & Trace Table according to attribute type.

#### SPT List Window

List with all defined SPT. From this place, you can start to add the new one or to modify the existing one.

![Serialization - Fields Description](./media/field-description/image2020-1-13-14-45-56.png)

#### Singe SPT Window add/view/edit

![Serialization - Fields Description](./media/field-description/serialization-parameters-templates.png)

##### Header

1. **Template Code** – The unique identifier of the SPT template.
2. **Template Name** – Name of the SPT template.
3. **Is Active** – Enabled by default, indicating that the template is available for use in rules.
4. **Remarks** – Provides space for additional notes or comments.

##### Attributes Tab

To add Attribute to the list you have to select [+]. In the column Attribute, you have to select Attribute Template and assign it to Attribute in column Field with a type compatible with Attribute's Template type. You are able to modify the Attribute’s parameters. Descriptions of fields are available at: Attribute's list window.

##### Pool Tab

You can assign a previously defined pool to the SPT (please see chapter Serial Numbers Pulls). One of them you should select as default.

![Serialization - Fields Description](./media/field-description/image2020-1-13-15-59-7.png)

### Rules

![Serialization - Fields Description](./media/field-description/image2020-1-13-15-27-14.png)

Define rules which will be used to decide which SPT should be used for serialized Item/Revision.

![Serialization - Fields Description](./media/field-description/image2020-1-13-15-39-38.png)

1. **Priority** – System-managed information that determines the hierarchy of rules.
2. **Rule Code** – The unique code identifying the rule.
3. **Rule Name** – Name of the rule.
4. **Item Group** – Allows selection of an Item Group from a dropdown menu. The rule for Items Group overwrite the rule in which the Item Group is not specified (Default rule in a picture above ).
5. **Item Code** – Enables the selection of a specific item from a list. Rules for a specific item override those for an Item Group or the default rule.
    >**Note**: In the list of items are only visible Items with "Serialization enabled = Yes" in Item Master Data
6. **Item Revision** – Enables selection of a specific item's revision (requires the item to be specified first). The rule for revision overwrites the rule for Item, Item Group, and Default rules.
7. **Result SPT** – Specifies the Serialization Parameter Template (SPT) to be applied, chosen from the available list.

**The logic of SPT assignment priority when you select Item/Revision for Serialization in WMS**:

    1. Find Rule for Item/Revision combination. If it does not exist:
    2. Find Rule for Item. If it does not exist:
    3. Find Rule for Item Group. If it does not exist:
    4. Find Default Rule. If it does not exist, the system displays a warning in CompuTec WMS.

When you define a rule for a particular Item/Revision, it will be as a first choice. If you want to assign SPT to all Item’s revisions (besides these for which you have to define a rule in 1st priority) you have to only define Item Code, this is the 2nd priority. If you want to assign SPT to all items from a particular group (besides these for which you have to define a rule in 1st and 2nd priority) you have to only define Items Group. For all Item/revisions for which you have not defined rules in priority 1 or 2 or 3, the default rule will be used. To define the Default rule please leave empty fields: Items Group, Item Code, Item Revision. You are able to define only one rule of this kind.

### Serialization Number Pool Definition

![Serialization - Fields Description](./media/field-description/image2020-1-13-15-45-44.png)

### Serialization Numbers Pools Window

This is a list of all defined Pools. From here you can start to add a new one or modify the existing.

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-18-33.png)

#### Serialization Numbers Pool Definition

##### Type Allocated – Serial Numbers from CSV file

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-6-58.png)

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-3-30.png)

    1. **Pool Code** – The unique identifier for the pool.
    2. **Pool Name** – Name of the pool.
    3. **Type** – Indicates whether the serial numbers in the pool are allocated or generated.
    4. **CSV file with serial numbers** – For allocated pools, an external file can be imported using the **Browse -> Import** option.
    5. **Query** – An SQL formula that defines the generation algorithm for serial numbers.
    6. **Last Item/Revision** – The most recent item or revision assigned to the pool.
    7. **Last Manufacturing Order** – The most recent MOR associated with the pool.
    8. **Total** – The total number of serial numbers in the pool.
    9. **Used** – The count of serial numbers that have been utilized.
    10. **Free** – The count of serial numbers still available for use.
    11. **Serial numbers** – A detailed list of serial numbers along with their statuses.   

##### SN Pool Type Generated

You can create an SQL formula that defines the generation algorithm which will be used to generate SN Pool during the production process:

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-12-1.png)

## Serialization Results

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-9-27.png)

### Track and Trace Reports

By definition of Serial Number Parameters, you are able to filter Serial Numbers.

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-19-49.png)

It is possible to analyze Track & Trace Report for each Serial Number:

![Serialization - Fields Description](./media/field-description/image2020-1-13-16-23-7.png)

### WMS’s Packing Hierarchy

From this place, you can check, modify, and finally accept clustering and aggregation documents generated in CompuTec WMS. Editing and acceptance of document is possible for documents with Status = Ready for accepting.

#### List of Documents Window

![Field Description](./media/field-description/image2020-1-14-17-33-6.png)

#### Single Dcument add/view/edit window

![Field Description](./media/field-description/image2020-1-14-17-34-31.png)

In this window, you can filter information according to CompuTec WMS’s document structure.

---
Serialization is a powerful tool for businesses relying on traceability, compliance, and streamlined warehouse operations. By leveraging these configurations effectively, organizations can enhance operational efficiency, maintain data accuracy, and support advanced traceability for serialized items.
