---
sidebar_position: 11
---

# Batches

![Batches](./media/batches.webp)

**Enable Batch Status change on Batch Info** – checking this option adds the Status field (with a drop-down list) to the Batch Details / UDF form on the Batch/Serial Info workflow. Unchecking the option removes the field and prevents changing the Batch status from the application. **This option is available only for a database with ProcessForce installed**.
    <details>
    <summary>Click here to find out more</summary>
    <div>
        ![Batches](./media/batches.PNG)
    </div>
    </details>

## Changes

Old Batches tab:
    ![WMS Custom Configuration](./media/batches/wms-custom-configuration.png)

New Batches form view: BatchSerial info: Show additional fields for batches and Extra field in Batch/Serial Info query options were removed:
    ![Batches New View](./media/batches/batches-new-view.png)

To be able to use the removed option it is required to created related SQL queries in Custom Query Manager: Manager tab > Enable Custom Query Manager > [choose required transaction]:
    ![Enable Custom Query Manager](./media/batches/enable-custom-query-manager.png)

**Batch Serial Info: Show additional fields for batches equivalent**

Choose an option to be changed:
    ![Batch Serial Info](./media/batches/batch-serial-info.png)

Put in required changes and save the document:
    ![Custom Query](./media/batches/custom-query.png)

The default query has three fields. In this example another three are added (SysNumber, Batch type and SAP user login). The left screenshot shows the window before the changes, the right one - the window after adding two fields.
    ![Batches Serials](./media/batches/batches-serials.png) ![Batches Serials](./media/batches/batches-serials-01.png)

The query for the window on the left:
    ![Query on the left](./media/batches/query-left.png)

The query for the window on the right:
    ![Query on the right](./media/batches/query-right.png)

**Extra field in Batch/Serial Info query equivalent**

Open Custom Query Manager, choose Batch/Serial Info from the list.

Otwieramy Custom Query Manager, wybieramy z listy Batch/Serial Info. In this example we operate on the following two fields:
    1. BatchInfoDetailsList
    2. SerialInfoDetailsList

    ![Batch Info Detail List](./media/batches/batch-serial-info-01.png)

    1. BatchInfoDetailsList

    There are no additional fields here, but we can add columns that are going to be find based on a specific query put in SQL Manager:
        ![Batch Info Details List](./media/batches/batch-info.png)
        ![Batch Info Details List](./media/batches/batch-info-01.png)

    2. SerialInfoDetailsList

    The same situation as in the example above, but this time choose columns from OSRN table:
        ![Test SQL Query](./media/batches/test-sql-query.png)
