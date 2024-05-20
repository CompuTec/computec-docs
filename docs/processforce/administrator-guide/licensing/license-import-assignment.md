---
sidebar_position: 4
---

# License Import and Assignment

:::info
    Performing the following steps are required when you install ProcessForce for the first time on a server and may be skipped in case of making the add-on upgrade only.
:::

:::info
    Assigning the ProcessForce license works similarly to the SAP Business One license assignment.
:::

1. After successful installation, the system message appears:

    ![System Message](./media/license-import-assignment/system-message-installation.webp)

2. Ask your ProcessForce provider for a license file.

    :::info
        All information required for generating a license key is described on the [Request for a license](./license-request.md) page.
    :::

3. Open the ProcessForce License Administration form:

    ![License Administration](./media/license-import-assignment/license-administration.webp)

4. To test whether CompuTec License Service is up and running, click the Test button:

    ![License connection](./media/license-import-assignment/license-connection-test.webp)

5. If it is OK – click the Import License File button to load a valid license. You will be asked for a license file.

    :::caution
        Note that a license file should have a .xml extension. In some cases, a file downloaded from a license request issue ([support.computec.pl](https://support.computec.pl)) can have changed its type (e.g., on downloading the file by Safari browser), which may cause an error when trying to load it.
    :::

6. After the successful importation of a license, the message `ProcessForce license has been imported` appears:

    ![System Message](./media/license-import-assignment/license-assignment-message.webp)

7. Press the Change button to assign/change the license to/in the company. You will be asked to select a proper row from imported licenses. Select a license row and click the Select button:

    ![License change](./media/license-import-assignment/license-assignment.webp)

8. Assign users to the appropriate license type and click the Update button to save the changes:

    ![License assignment](./media/license-import-assignment/license-user-assign.webp)
