---
sidebar_position: 2
---

# Storage Unit Allocation Issues

Incorrect usage of Storage Units (e.g., transfer of Items that belong to a Storage Unit in SAP Business One) may lead to discrepancies in quantity and Bin Location assignment compared with the actual inventory state.

To identify and fix these problems, we prepared a number of queries.

---

## Error message: 1470000336 - Bin location "X" does not belong to specified warehouse "Y"

A query that allows finding discrepancies in SUs when getting this error message:

```sql
SELECT T0."U_Code", T0."U_Status", T2."U_Quantity", T0."U_BinCode", T0."U_BinAbs", T1."AbsEntry", T1."BinCode"
FROM "@CT_WMS_OSTU" T0
INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
INNER JOIN "@CT_WMS_STU1" T2 on T2."Code" = T0."Code"
WHERE
T0."U_Status" = O
AND
(T1."AbsEntry" <> T0."U_BinAbs" OR T1."BinCode" <> T0."U_BinCode")
```

## Error message: 10001153 - Insufficient quantity for item "X" with batch "Y" in warehouse

In case of this error message, you have to find SUs in which the available quantity is different from the related Bin Location.

**Please remember to change X in the second last row to a Batch Name.**

```sql
SELECT SUM(T2."U_Quantity"), T3."OnHandQty", T2."U_ItemCode", T2."U_DistNumber", T1."BinCode"
FROM "@CT_WMS_OSTU" T0
INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
INNER JOIN "@CT_WMS_STU1" T2 on T2."Code" = T0."Code"
INNER JOIN "OIBQ" T3 on T3."ItemCode" = T2."U_ItemCode" AND T3."BinAbs" = T1."AbsEntry"
WHERE
T0."U_Status" = 'O'
AND
T2."U_DistNumber" = 'X'
GROUP BY T2."U_ItemCode", T2."U_DistNumber", T3."OnHandQty", T1."BinCode"
```

## Both Discrepancies

The following query searches for both SU discrepancies. It compares the Quantity and OnHand Qty columns. You should increase the quantity of a specific Item in a Batch given in the Bin Code locations. Next, compare the last two columns - BinAbs (of SU) and AbsEntry (of OBIN). In some cases, updating the BinAbs column after moving the missed quantity is required.

```sql
SELECT T2."U_ItemCode", T2."U_DistNumber", SUM(T2."U_Quantity"), T3."OnHandQty",T1."BinCode", T0."U_BinAbs",  T1."AbsEntry"
FROM "@CT_WMS_OSTU" T0
INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
INNER JOIN "@CT_WMS_STU1" T2 on T2."Code" = T0."Code"
INNER JOIN "OIBQ" T3 on T3."ItemCode" = T2."U_ItemCode" AND T3."BinAbs" = T1."AbsEntry"
WHERE
(T1."AbsEntry" <> T0."U_BinAbs" OR T1."BinCode" <> T0."U_BinCode")
AND T0."U_Status" = 'O'
GROUP BY T2."U_Quantity", T3."OnHandQty", T2."U_ItemCode", T2."U_DistNumber", T0."U_BinAbs",  T1."AbsEntry", T1."BinCode"
HAVING SUM(T2."U_Quantity") > T3."OnHandQty"
```

## Error message: Bin location "X" does not belong to specified warehouse "Y."

:::warning
    Any database update performed by a query may cause other errors and is generally not recommended. Although we have not recorded any errors yet after performing the following steps, we recommend (if it is possible) closing the incorrect SUs and creating them again, then using the following query without checking the quantity situation in the database first.
:::

1. Run the following query. It will return all the SUs with incorrect Bins:

    ```sql  
    SELECT T0."U_Code", T2."U_Quantity", T2."U_DistNumber", T0."U_BinAbs", T1."AbsEntry", T1."BinCode"
    FROM "@CT_WMS_OSTU" T0
    INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
    INNER JOIN "@CT_WMS_STU1" T2 on T2."Code" = T0."Code"
    INNER JOIN "OIBQ" T3 on T3."ItemCode" = T2."U_ItemCode" AND T3."BinAbs" = T1."AbsEntry"
    INNER JOIN "OBTN" T4 on T4."DistNumber" = T2."U_DistNumber"
    WHERE T1."AbsEntry" <> T0."U_BinAbs" AND T0."Status" = 'O'
    ```

2. Next, sum all the Batch Quantities in these SUs and compare them with Batches in the given Bin:

    ```sql
    SELECT T2."U_ItemCode", T2."U_DistNumber", SUM(T2."U_Quantity"), T3."OnHandQty",T1."BinCode", T0."U_BinAbs", T1."AbsEntry"
    FROM "@CT_WMS_OSTU" T0
    INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
    INNER JOIN "@CT_WMS_STU1" T2 on T2."Code" = T0."Code"
    INNER JOIN "OIBQ" T3 on T3."ItemCode" = T2."U_ItemCode" AND T3."BinAbs" = T1."AbsEntry"
    WHERE
    T0."U_Status" = 'O'
    GROUP BY T2."U_Quantity", T3."OnHandQty", T2."U_ItemCode", T2."U_DistNumber", T0."U_BinAbs", T1."AbsEntry", T1."BinCode"
    HAVING SUM(T2."U_Quantity") > T3."OnHandQty" AND T0."U_BinAbs" <> T1."AbsEntry"
    ```

3. Check in SAP Business One where the Quantities were moved (difference between OnHandQty and Quantity) from the given BinCode.
4. Next, complete (in SAP Business One) the missing Quantities (difference between OnHandQty and Quantity) in the given BinCode with Stock Transfer, Goods Receipt, Stock Posting transaction (where applicable) based on the Quantity move (the third point in this manual).
5. Then, perform the update:

    ```sql
    UPDATE T0
    SET "U_BinAbs" = T1."AbsEntry"
    FROM "@CT_WMS_OSTU" T0
    INNER JOIN "OBIN" T1 on T1."BinCode" = T0."U_BinCode"
    INNER JOIN "@CT_WMS_STU1" T2 ON T2."Code" = T0."Code"
    WHERE
    T1."AbsEntry" <> T0."U_BinAbs"
    AND
    T0."U_Status" = 'O'
    ```
