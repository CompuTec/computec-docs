---
sidebar_position: 5
---

# Working on Database with Branches

In this guide, we’ll walk you through the necessary steps to properly configure users and assign them to branches in CompuTec WMS.

---

## Configuration

To configure and work with CompuTec WMS on a database that includes multiple branches, follow these steps:

    1. A user defaults file needs to be created for each user that specifies the branch they will operate in. Refer to the [SAP Business One manual](https://help.sap.com/docs/SAP_BUSINESS_ONE/68a2e87fb29941b5bf959a184d9c6727/4506da43d8696c30e10000000a114a6b.html) for detailed instructions on how to create and configure this file.
    2. Assign each user to a specific branch in the system's user settings. (SAP Business One → Administration → Users).

        ![Working with Branch](./media/working-with-branch.png)

## Important Notes

- Every CompuTec WMS operating user must have a user defaults file with the selected branch assigned to them.
- A user can only be assigned to one branch at a time. Therefore, make sure that each user is correctly configured for the branch they will be working with.

---
By assigning users to individual branches and creating appropriate user defaults files, you can streamline processes and maintain accurate records across different branches of your organization. This setup will help facilitate seamless operations, ensure correct data handling, and improve overall efficiency in your Warehouse Management Processes.
