---
sidebar_position: 2
---

# Multi-Batch Analysis

This functionality allows analyzing the relation between Batches on the transactions (documents) level.

The user can save data used in the graph as a xlsx file. There are three sets of underlying data directly from the trace graph:

    - Batches with attributes
    - Transactions (documents) for each Batch
    - Links between Batches

And one set of derived data:

- (Direct → Indirect Batch) - Transactions. For a direct batch, all indirect batches influencing it are specified, along with all transactions associated with the direct batch.

Using this data, users can create their own pivot tables to obtain information such as:

1. Are there any Batches affected by a raw material Batch with Country of Origin = Pakistan for selected delivery notes?
2. Display all delivery notes affected by batches from selected GRPO.

In BT360, it is possible to:

1. Filter Batches associated with the selected transaction - Document Type → Doc entry and switching to Trace Analysis on the list of Batches
2. Display Transaction Analysis for selected Batches with the following information:
    a. multi batches graph <br/>b. grid of batches with attributes <br/>c. grid of transactions <br/>d. grid of links <br/>e. grid of derived data.

3. Export data from these 4 grids to an xlsx file (each to a separate tab).
4. Selection of a Batch on multiple Batches graph will redirect the user to the functionality of a single batches graph.

---

## Batches Selection for Trace Analysis

You can directly select multiple batches from the batch list, or you can first choose documents to narrow down the batches to those related to the selected documents.

### To narrow down batches, click the "Select Documents" button

![Narrowed Down Documents](./media/multi-batch-analysis/narrowed-down-documents.png)

### Batch selection and run of Trace Analysis

![Batch selection and Run of Trace Analysis](./media/multi-batch-analysis/batch-selection.png)

## Trace Analysis

### Graph

On a graph, you can:

- Show related documents
- Open related Batch Details in SAP Business One - yellow arrow (BT360 have to be opened from the SAP Business One level)
- Go to a single Batch analysis (is opened in a new tab of the browser)
- view only related nodes.

![Trace Analysis](./media/multi-batch-analysis/trace-analysis.png)

### Export data

In each grid (Batches, Transactions, Links, Derived Data) you can sort data. All grids are exported to the same file. Each kind of data is exported to a separate sheet.

![Export Data](./media/multi-batch-analysis/export-data.png)
