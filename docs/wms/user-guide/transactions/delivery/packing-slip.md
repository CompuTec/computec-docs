---
sidebar_position: 7
---

# Packing Slip on Delivery

The Delivery process in SAP Business One allows you to move goods out of the warehouse and record them against customer orders. With CompuTec WMS, you can enhance this process by enabling **Packing Slips** to trace Storage Units (SUs).

---

## Purpose

- Record customer deliveries against base documents.  
- Track which items were packed into which Storage Units (SUs).  
- Provide transparency with **Packing Slips**, ensuring accurate logistics and traceability.

---

## How to Use Packing Slip in Delivery

- **Step 1: Enable Packing Slip**

        - Navigate to: Custom Configuration → Delivery tab

            ![Custom Config](./media/packing-slip/config-pic.png)

        - Enable the "Packing Slip" option.
        - After saving the document, the Packing Slip becomes accessible directly from the Delivery document.

            ![Packing list](./media/packing-slip/packing-list.png)

        - In the Packing Slip, you can view which items have been packed into each Storage Unit.

            ![Packing Slip](./media/packing-slip/packing-slip-items.png)

- **Step 2: Create a Delivery**

        - You can create a Delivery document based on: Pick List, Sales Order, A/R Reserve Invoice, Draft.

            ![Create Delivery](./media/packing-slip/create-delivery.png)

        - When you open or create a delivery, the **Document Details** screen displays the lines from the SAP base document.

            ![Document Details](./media/packing-slip/doc-det-screen.png)

**- Step 3: Manage Storage Units (SUs)**

        - Add a new "SU": its SU Code appears on the top bar.  
        - Switch between SUs by:  
        - Scanning the **SU Code/SSCC**, or  
        - Clicking the **top bar** to stop adding, then selecting the SU you want to edit.  

            ![New SU](./media/packing-slip/new-su.png) ![Add SU](./media/packing-slip/add-su.png) ![Searc SU](./media/packing-slip/search-su.png)

- **Step 4: Complete the Delivery**

        - When the requested quantity is fully picked, the line turns "green".  
        - Save the document to finalize the Delivery.

            ![Save Document](./media/packing-slip/save-doc.png)

---
