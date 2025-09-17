---
sidebar_position: 4
---

# CompuTec ProcessForce Objects

 CompuTecProcessForce uses user-defined objects (UDOs) to manage various business processes, including master data and transactional documents. Understanding the underlying tables and fields within these objects is essential for reporting, customization, and data validation. Below are SQL queries that retrieve detailed information about CompuTec ProcessForce objects, including header fields and matrix row fields.

---

To list all header fields from master data or documents within CompuTec ProcessForce, use the following SQL query:

```sql
-- Object title (header) fields
 
SELECT U."Code" AS "UDO Code", U."Name" AS "UDO Name", UTB."TableName" AS "UDO Table Name",
F."AliasID" AS "Field", F."Descr" AS "Field Name"
FROM OUDO U
INNER JOIN OUTB UTB on U."TableName"=UTB."TableName"
INNER JOIN CUFD F ON F."TableID" = CONCAT('@',UTB."TableName")
WHERE UTB."TableName" LIKE 'CT_PF_%'
ORDER BY U."Code", F."FieldID";
```

To extract all fields belonging to matrix rows within CompuTec ProcessForce documents, use the query below:

```sql
-- Object row fields
  
SELECT U."Code" AS "UDO Code", U."Name" AS "UDO Name", UP."TableName" AS "UDO Table Name",
F."AliasID" AS "Field", F."Descr" AS "Field Name"
FROM OUDO U
INNER JOIN UDO1 UP on U."Code"=UP."Code"
INNER JOIN OUTB UTB on U."TableName" = UTB."TableName"
INNER JOIN OUTB UPTB on UP."TableName" = UPTB."TableName"
INNER JOIN CUFD F ON F."TableID" = CONCAT('@',UPTB."TableName")
WHERE UTB."TableName" LIKE 'CT_PF_%'
ORDER
BY U."Code", UPTB."TableName",  F."FieldID"
```
