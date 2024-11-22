---
sidebar_position: 1
---

# Release Notes

:::caution
In order to use this plugin, you have to install the CompuTec ProcessForce plugin first.
:::

## BulkChange 1.10.3.1

**Release Date - 22 November 2024**

| Issue Type | Component/s | Release Note |
| --- | --- | --- |
| Bug | BulkChange | Error message occurred while running BulkChange: <br/>Query: WITH "RawSql" AS ((SELECT B."Code", B."Name", B."U_Status", U."U_NAME" AS "CreatedByUserName", B."CreateDate", UE."U_NAME" AS "LastExecutedByUserName", B."U_LastExecutedDate" FROM "@CT_PF_OBCS" B LEFT OUTER JOIN OUSR U ON U."INTERNAL_K" = B."UserSign" LEFT OUTER JOIN OUSR UE ON UE."INTERNAL_K" = B."U_LastExecutedBy"))<br/>SELECT * FROM "RawSql" WHERE "No" = 1 <br/>invalid column name: No: line 2 col 30 (at pos 350) |
| Bug | BulkChange | Error message occurred while adding new resource: <br/>"Exception while applaying changes to Bill Of Material B-000001, Revision rBA14. Details: Please fill U_RtgOprCode first !!!" |
| Bug | BulkChange | <l>The new resource is added to each resource under an operation instead of ‘per’ operation</l>. <br/><l>Filters under the Resource tab didn’t work properly.</l> |
