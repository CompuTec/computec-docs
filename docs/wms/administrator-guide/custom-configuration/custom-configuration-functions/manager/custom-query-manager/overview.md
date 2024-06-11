---
sidebar_position: 1
---

# Overview

## Introduction

Custom Query Manager allows to put additional information to specific screens in CompuTec WMS transactions by using customized queries. In this section, you will find information on how to use the option.

---

:::caution

From 2.00 version parameters for database queries should no longer be written between inverted commas/ single quotation marks.

<details>
<summary>Click here to find out more</summary>
<div>
Obsolete usage:
```text
'@ItemCode'
```
Current usage
```text
@ItemCode
```
</div>
</details>

## Enabling the Option

1. Go to[Custom Configuration](../../../../custom-configuration/overview.md), Manager tab.
2. Check the Enable Custom Query Manager checkbox.
3. Choose a required transaction from a drop-down list and click Load.
4. Checking **Use default query** option blocks the creation/editing of a query and the default query is used:

    ![Custom Configuration Query](./media/cc-query.webp)

    ![Custom Query](./media/custom-query.webp)

5. Unchecking the option allows you to create your own query or edition of the default one:

    ![Query Parameters](./media/cc-query-parameters.webp)
