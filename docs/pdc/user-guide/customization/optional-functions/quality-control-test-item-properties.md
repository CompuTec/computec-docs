---
sidebar_position: 3
---

# Quality Control Test/Item Properties

This option allows checking and recording Tests and Item Properties of a related Quality Control Test. To make this option available, choose the QC Test Properties option from the [custom options for Task Panel](../../customization/overview.md#task-tile-and-task-panel-customization). The added button is active if there is any Quality Control Test created in ProcessForce for a specific Manufacturing Order or a specific Operation on a Manufacturing Order. You can see how to check it in related [ProcessForce documentation entry](/docs/processforce/user-guide/quality-control/quality-control-test/overview#transaction)

![Quality Control](./media/quality-control-test-item-properties/quality-control.webp)

## Header

Related Quality Control Test document number.

## Test/Item Properties table

**From Property to Reason columns** – here, you can find information on Properties copied from a related Quality Control Test (you can switch between Test and Item Properties by clicking one of the options on the top of the table). For each line, you can set either numeric or reference code values. If a specific property has a reference code and a reference name assigned, it is only possible to choose a value from a drop-down list in the Tested Reference column (it is impossible to add any numeric value then). If no Reference value is assigned, it is possible to set a numeric value.

**Checked column** – click this checkbox after setting a value for a specific line. The checked lines will be saved by clicking the Save icon.

**Add/Remove column** – If the option for creating multiple test results is checked in ProcessForce, then it is possible to add more than one result by clicking a plus icon in Add column (you can also remove any unwanted additional lines by clicking the minus icon in Remove column).

**Remarks column** – you can save any text as remarks for each line.

## Footer

**Save icon** – click here after setting up all the required data and checking the lines that will be saved.

**Update As icon** – Changes can be saved by a different employee than the one currently logged in. To do this, click this icon (the required employee's login details will need to be entered).

**Print icon** – CompuTec Labels related option

**Left Arrow icon** – closes the window without saving changes

**Remarks field** – you can add general remarks for a Quality Control Test. It will be saved to ProcessForce Quality Control Test > Defects tab > Remarks field.
