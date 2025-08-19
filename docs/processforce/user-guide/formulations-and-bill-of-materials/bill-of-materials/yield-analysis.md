---
sidebar_position: 9
---

# Yield Analysis

Yield Analysis is a crucial aspect of production monitoring in CompuTec ProcessForce, helping manufacturers assess efficiency by comparing planned and actual production outcomes. The analysis can be simple, such as a basic Planned vs. Actual quantity comparison, or detailed, evaluating specific material usage across Parent Items, CoProducts, ByProducts, and Scrap.

---

## Yield Analysis Examples

The table below provides examples of different yield calculation methods, illustrating how various components contribute to yield efficiency.

|  Yield Basis  |        Yield Calculation         |                                                          Example                                                          |
| ------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  Item Parent  |           Item Parent            |                             Item Parent Actual Quantity / Item Parent Planned Quantity \* 100                             |
|  Item Parent  | Item Parent + CoProducts + Scrap | (Item Parent Actual Quantity + CoProducts Actual Quantity + Scrap Actual Quantity) / Item Parent Planned Quantity \* 100  |
|  Item Parent  | Item Parent + CoProducts - Scrap | (Item Parent Actual Quantity + CoProducts Actual Quantity - Scrap Actual Quantity) / Item Parent Planned Quantity \* 100  |
|  Item Parent  | Item Parent - CoProducts - Scrap | (Item Parent Actual Quantity - CoProducts Actual Quantity - Scrap Actual Quantity) / Item Parent Planned Quantity \* 100  |
|  Item Parent  |        CoProducts + Scrap        |                (CoProducts Actual Quantity + Scrap Actual Quantity) / Item Parent Planned Quantity \* 100                 |
|  Item Parent  |        CoProducts - Scrap        |                (CoProducts Actual Quantity - Scrap Actual Quantity) / Item Parent Planned Quantity \* 100                 |
| Specific Item |           Item Parent            |                            Item Parent Actual Quantity / Specific Item Actual Quantity \* 100                             |
| Specific Item | Item Parent + CoProducts + Scrap | (Item Parent Actual Quantity + CoProducts Actual Quantity + Scrap Actual Quantity) / Specific Item Actual Quantity \* 100 |
| Specific Item | Item Parent + CoProducts - Scrap | (Item Parent Actual Quantity + CoProducts Actual Quantity - Scrap Actual Quantity) / Specific Item Actual Quantity \* 100 |
| Specific Item | Item Parent - CoProducts - Scrap | (Item Parent Actual Quantity - CoProducts Actual Quantity - Scrap Actual Quantity) / Specific Item Actual Quantity \* 100 |
| Specific Item |        CoProducts + Scrap        |                (CoProducts Actual Quantity + Scrap Actual Quantity) / Specific Item Actual Quantity \* 100                |
| Specific Item |        CoProducts - Scrap        |                (CoProducts Actual Quantity - Scrap Actual Quantity) / Specific Item Actual Quantity \* 100                |
|   All Items   |           Item Parent            |                               Item Parent Actual Quantity / All Item Actual Quantity \* 100                               |
|   All Items   | Item Parent + CoProducts + Scrap |   (Item Parent Actual Quantity + CoProducts Actual Quantity + Scrap Actual Quantity) / All Item Actual Quantity \* 100    |
|   All Items   | Item Parent + CoProducts - Scrap |   (Item Parent Actual Quantity + CoProducts Actual Quantity - Scrap Actual Quantity) / All Item Actual Quantity \* 100    |
|   All Items   | Item Parent - CoProducts - Scrap |   (Item Parent Actual Quantity - CoProducts Actual Quantity - Scrap Actual Quantity) / All Item Actual Quantity \* 100    |
|   All Items   |        CoProducts + Scrap        |                  (CoProducts Actual Quantity + Scrap Actual Quantity) / All Item Actual Quantity \* 100                   |
|   All Items   |        CoProducts - Scrap        |                  (CoProducts Actual Quantity - Scrap Actual Quantity) / All Item Actual Quantity \* 100                   |

## Yield Formulas

:::info
    Please check the [Yield settings](../overview.md) for default formulas.
:::

Within the General Settings form → ProcessForce tab → Bill of Materials and Manufacturing Orders tab, four additional default formulas have been added:

- Yield,
- CoProduct Yield,
- ByProduct Yield,
- Scrap Yield.

Once configured, these formulas are applied automatically within the Bill of Materials (BOM) and Manufacturing Orders (MO).

![Bill of Materials Formulas](./media/yield-analysis/bill-of-materials-formulas-2.webp)

To view, create, or modify a Yield Formula, click the yellow button in the BOM form to open the Yield Formula Form:

![Yield Formula](./media/yield-analysis/bill-of-materials-yield-formula.webp)

The Yield Formulas defined within the Bill of Material form are also copied to the Manufacturing Order form and displayed by clicking on the yellow button.If required, the Yield Formulas can be edited.

![Manufacturing Order](./media/yield-analysis/manufacturing-order-yield-formula.webp)

## Yield Formula Formats

Below are examples of different yield analysis formulas:

| Yield Type |                            Default Description                            |                                                                                    Default Formula                                                                                    |
| ---------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   Yield    |     Item Parent Actual Quantity / Item Parent Planned Quantity \* 100     |                                                                           =U_ActualQty()/U_Quantity()\*100                                                                            |
| CoProduct  | Total CoProduct Actual Quantity / Total CoProduct Planned Quantity \* 100 |                                            =Coproducts.U_ActualQty.Sum()/if(Coproducts.U_Result.Sum()=0;1;Coproducts.U_Result.Sum())\*100                                             |
| ByProduct  | Total ByProduct Actual Quantity / Total ByProduct Planned Quantity \* 100 | =Scraps.U_ActualQty.Sum(equals(Scraps.U_Type();"Usefull"))/if(Scraps.U_Result.Sum(equals(Scraps.U_Type();"Usefull"))=0;1;Scraps.U_Result.Sum(equals(Scraps.U_Type();"Usefull")))\*100 |
|   Scrap    |     Total Scrap Actual Quantity / Total Scrap Planned Quantity \* 100     |                                                  =Scraps.U_ActualQty.Sum()/if(Scraps.U_Result.Sum()=0;1;Scraps.U_Result.Sum())\*100                                                   |

---
