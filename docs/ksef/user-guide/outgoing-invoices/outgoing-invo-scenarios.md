---
sidebar_position: 3
---

# Outgoing Invoice Scenarios

This article describes specific scenarios for preparing outgoing SAP Business One documents for KSeF.

For the standard process of creating and sending outgoing invoices, see [**Send Outgoing Invoices to KSeF**](/docs/ksef/user-guide/outgoing-invoices/send-outgoing-inv).

## Create a correction invoice for multiple invoices

When you create a correction invoice that applies to multiple invoices, provide the numbers of the corrected invoices in the **KSEF-Upust za okres-numery fa.koryg.** user-defined field (UDF).

1. In **SAP Business One**, create the correction invoice and enter its details.

2. Display the **UDF Fields** panel.

   :::info[Note]
   If the panel is not visible, select **View** > **UDF Fields**.

   ![SAP Business One UDF Fields panel with the user-defined field KSEF-Upust za okres-numery fa.koryg. highlighted in the menu, showing a list of fields in Polish with the menu command Pola definiowane przez użytkownika Ctrl+Shift+U and the invoice form on the right. The interface has a dark blue top bar, a navigation menu, and a large window with a left panel listing invoice-related fields and a right panel displaying document information. The overall tone is professional and functional.](media/out-scenarios/ksef-koryg0.png)
   :::

3. In **UDF Fileds** on th right, find **KSEF-Upust za okres-numery fa.koryg.** and use it to enter the numbers of the invoices that the correction applies to.

    ![alt text](media/out-scenarios/ksef-koryg1.png)

    :::info[note]
    If you want to enter multiple invoice numbers, separate them with commas or enter each invoice number on a new line.

    ![SAP Business One invoice form showing the KSEF field KSEF - Upust za okres - numery fa. koryg. on the right side, with a list of invoice numbers 202300028, 202300029, 202300030, 202300031, 202300032, 202300033, and 202300034 in a beige panel. The left side shows a payment terms area and action buttons in the SAP interface, with a professional, functional business environment and a neutral tone.](media/out-scenarios/ksef-koryg2.png)
    :::

4. Complete the remaining document information and add the document.

CompuTec KSeF uses the provided invoice numbers when preparing the correction invoice for KSeF.

## Next steps

See [**Send Outgoing Invoices to KSeF**](/docs/ksef/user-guide/outgoing-invoices/send-outgoing-inv) to learn how to send the document and monitor its KSeF processing.
