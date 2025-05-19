---
sidebar_position: 12
---

# Storage Unit in SAP Business One Menu Error

After installing CompuTec WMS, users may notice that the "Storage Unit" option is missing from the SAP Business One menu. This is a known issue and will be fixed in one of the future releases.

In the meantime, you can restore the missing menu option by manually updating the relevant object in SAP Business One using the Object Registration Wizard. Please follow the step-by-step workaround below to fix the issue.

---

To manually update the matrix and header of the affected object:

1. In SAP Business One, navigate to the upper menu and select Tools > Customization Tools > Object Registration Wizard.
2. Click the Next button.
3. Select "Update an existing object option", then click Next.
4. Choose the CT_WMS_OSTU object and click the Next button three times.
5. In the UI Settings window, select the Matrix Style. Click the Next button.
6. Modifying the fields for the default form and check the following fields: Name, DocEntry, CreateDate, U_Code, U_WhsCode, UBinCode, U_Status, and U_SSCC checkboxes and click the Next button twice.
7. Modifying fields for a child table default form: choose the CT_WMS_STU1 from the drop-down list. Check the Code, U-LineNum, U_ItemCode, U_Quantity, U_ManageType, U_SnOrBtnAbs, U_ItemType, and U-DistNumber and click the Next button and then the Finish button.
8. Repeat the procedure for the Header Line Style.

---
