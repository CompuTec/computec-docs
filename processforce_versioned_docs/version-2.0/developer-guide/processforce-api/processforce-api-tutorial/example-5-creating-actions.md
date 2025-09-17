---
sidebar_position: 6
---

# Example 5 Creating Actions

CompuTec ProcessForce API provides a streamlined way to manage manufacturing actions, including pick orders, pick receipts, and production issues/receipts. Actions allow you to automate processes such as issuing and receiving materials, reducing manual effort, and improving production efficiency.

This guide covers how to create different types of actions using the API.

---

## How to work with Actions using CompuTec ProcessForce API

An action is an object which gives you the possibility to:

- Create Pick Orders for one or more Manufacturing Orders.
- Create Pick Receipts for one or more Manufacturing Orders.
- Create Production Receipts/Issues on assigned Pick Order.
- Create Correction of Production Issues/Receipts.

1. **Create Pick Receipt for Manufacturing Order**:

    ```csharp
    ICreatePickReceiptForProductionReceipt prAction = company.CreatePFAction(CompuTec.ProcessForce.API.Core.ActionType.CreatePickReceiptForProductionReceipt);
    //You can add several MOR docentrys
    prAction.AddManufacturingOrderDocEntry(1);
    //Choose Receipt Type {All;Scraps;Coproducts;FinalGood}
    prAction.ReceiptType = PickOrderdReceiptType.All;
    object pickReceiptDocEntry;
    //Fires Action
    if (prAction.DoAction(out pickReceiptDocEntry))
    {
        Console.WriteLine("Pick Receipt created " + pickReceiptDocEntry.ToString());
    }
    ```

2. **Create Pick Order for Manufacturing Order**:

    ```csharp
    ICreatePickOrderForProductionIssue poAction = company.CreatePFAction(CompuTec.ProcessForce.API.Core.ActionType.CreatePickOrderForProductionIssue);
    //You can add several MOR docentrys
    poAction.AddMORDocEntry(1);
    object pickOrderDocEntry;
    //Fires Action
    if (poAction.DoAction(out pickOrderDocEntry))
    {
        Console.WriteLine("Pick Order created " + pickOrderDocEntry.ToString());
    }
    ```

3. **Create Production Goods Issue**:

    ```csharp
    ICreateGoodsIssueFromPickOrderBasedOnProductionIssue prodissue = company.CreatePFAction(CompuTec.ProcessForce.API.Core.ActionType.CreateGoodsIssueFromPickOrderBasedOnProductionIssue);
    prodissue.DocDate = DateTime.Today;
    prodissue.TaxDate = DateTime.Today;
    prodissue.PickOrderID = 1;
    object goodsIssueDocEntry;
    prodissue.DoAction(out goodsIssueDocEntry);
    ```

4. **Create Production Goods Receipt**:

    ```csharp
    ICreateGoodsReceiptFromPickReceiptBasedOnProductionReceipt prodeceipt = company.CreatePFAction(CompuTec.ProcessForce.API.Core.ActionType.CreateGoodsReceiptFromPickReceiptBasedOnProductionReceipt);
    prodeceipt.DocDate = DateTime.Today;
    prodeceipt.TaxDate = DateTime.Today;
    prodeceipt.PickReceiptID = 2;
    object goodsreceiptDocentry;
    prodeceipt.DoAction(out goodsreceiptDocentry);
    ```

    For Production Goods Issue and Receipt, you can also specify additional details such as: documents series, memos, and other information. If not explicitly defined, default values will be applied.

---
