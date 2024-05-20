---
sidebar_position: 6
---

# Documents Rollback

You can use the Rollback Document option to correct Goods Issue or Goods Receipt documents.

To use this functionality, right-click on the document line (on a Manufacturing Order) you want to correct and choose Rollback Document from the context menu:

![Rollback document](./media/documents-rollback/rollback-document.webp)

Rollback details form will be displayed. You can set up document series, dates, and additional remarks:

![Rollback details](./media/documents-rollback/rollback-details.webp)

When you use Rollback Document on Goods Issue, it will create an appropriate Goods Receipt. In the same way, when you use Rollback Document on Goods Receipt, Goods Issue will be created.

![Rolled back document](./media/documents-rollback/rolled-back-document.webp)

When you use Rollback Document on Goods Receipt, and some documents are created using backflush, these documents will also be corrected.
