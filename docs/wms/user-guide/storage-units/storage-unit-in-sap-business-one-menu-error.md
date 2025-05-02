---
sidebar_position: 12
---

# Storage Unit in SAP Business One Menu Error

There is no Storage Unit element in the SAP Business One after installing CompuTec WMS.

The problem will be fixed in one of the future releases. For now, we offer the following workaround:

Update the object in SAP Business One manually for the matrix and header.

1. Go to the upper menu > Tools > Customization Tools > Object Registration Wizard.
2. Click the Next butt  on.
3. Choose the Update an existing object option and click Next.
4. Choose the CT_WMS_OSTU object and click the Next button three times.
5. In the UI Settings window, choose the Matrix Style. Click the Next button.
6. Modifying the fields for the default form: check the Name, DocEntry, CreateDate, U_Code, U_WhsCode, UBinCode, U_Status, and U_SSCC checkboxes and click the Next button twice.
7. Modifying fields for a child table default form: choose the CT_WMS_STU1 from the drop-down list. Check the Code, U-LineNum, U_ItemCode, U_Quantity, U_ManageType, U_SnOrBtnAbs, U_ItemType, and U-DistNumber and click the Next button and then the Finish button.
8. Repeat the procedure for the Header Line Style.

---
