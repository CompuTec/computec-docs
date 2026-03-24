---
sidebar_position: 4
---

# Permissions

By default, newly created Analytics variants are set to **Private**, which means they are visible only to the user who created them. If you set the variant to **Public** during creation, it becomes visible to all users.

If you want to make a variant available only to selected users or groups, you must configure permissions manually.

:::info[note]
To manage permissions, you must have ``Superuser`` authorization in SAP Business One.
:::

The process consists of two steps:

1. Configure permissions in **CompuTec AppEngine Analytics**.
2. Assign permissions to users or groups in **SAP Business One**.

## Add a permission to an Analytics variant

If a variant doesn’t have manual permissions configured, and it’s **Public**, it is available to all users. To restrict access to specific users or groups, you must configure permissions manually.

To add permissions to an existing **Analytics** variant, follow these steps:

1. In the **Source Manager**, select the **Source** that contains the variant.

    ![screen showing selecting a source in source manager](.\media\permissions\an-permissions-src-list.png)

2. Navigate to the **Variants** tab.

    ![screen showing variants tab](.\media\permissions\2026-02-25_12-20-41.png)

3. Enter the edit mode by clicking the **Edit** icon.

    ![screen showing selecting an edit icon](.\media\permissions\2026-02-25_12-20-07.png)

4. In the **Basic Settings** tab, locate the **Permissions** section.  

5. Click **+Add**.

    ![screen showing adding new permission](.\media\permissions\2026-02-25_12-20-411.png)

6. Click **Update** to save the added permission.

    ![screen showing updating the permission added](.\media\permissions\2026-02-25_12-21-52.png)

7. Click **Update** to save changes in the source.

    ![screen showing updateing the changes in the source](.\media\permissions\perm-update.png)

8. Done. The variant is now visible only to ``Superusers`` and the user who created it.

:::info[note]
Before configuring permissions in SAP Business One, note the variant **GUID**, which is displayed below the variant name. You will need this identifier in the next step.

![screen showing where to find the variant's guid](.\media\permissions\variant-idnumber.png)
:::

## Set the permissions in SAP Business One

To assign permissions to specific users or groups in **SAP Business One**, follow these steps:

1. Log in to **SAP Business One**.

2. Go to **Menu** > **Administration** > **System Initialization** > **Authorizations** > **General Authorizations**.

    ![screen showing how to enter general authorisation in sap b1](.\media\permissions\2026-02-25_12-15-22gen.png)

3. Select **Users** or **Groups** you want to configure permissions for. If the user is not listed, add the user first. [Read more](https://help.sap.com/docs/SAP_BUSINESS_ONE_IAM/548d6202b2b6491b824a488cfc447343/76de0bbf52a24cfc997084f3a294abc2.html)

    ![screen showing show to select groups or users in sap b1](.\media\permissions\2026-02-25_12-15-22usr.png)

4. In the authorization tree, scroll to the **User Authorization** section.

    ![screen showing the user authorization section is sap b1](.\media\permissions\an-permissions-sap123.png)

5. Navigate to **CompuTec AppEngine** > **Analytics** > **CT_AE_Custom**.

6. Find your variant name on the list.

    ![screen showing selecting a variant on the list in sap b1](.\media\permissions\an-permissions-sap12345.png)

7. Click the **arrow** next to ``No Authorization`` label.

    ![screen showing changing the authorization in sap b1](.\media\permissions\an-permissions-sap1234.png)

8. Select the permission level:

    - ``Full Authorization``
    - ``Read-Only``
    - ``No Authorization``

    ![screen showing changing the permission level in sap b1](.\media\permissions\an-permissions-sap123456.png)

9. Click **Update**.

    ![screen showing updating the changes in sap b1](.\media\permissions\an-permissions-sap1234567.png)

10. Done! The permissions are now applied.

## Review Variant Permissions in SAP Additional Authorization Creator

To review the variant permissions in **SAP Business One Additional Authorization Creator**, follow these steps:

1. Log in to **SAP Business One**.

2. Navigate to **Menu** > **Administration** > **System Initialization** > **Authorizations** > **Additional Authorization Creator**.

    ![screen showing where to find *Additional Authorization Creator in sap b1](.\media\permissions\an-additional-sap1.png)

3. In this window, a superuser can view all created additional authorizations related to **Analytics** variants. Use the previously noted **GUID** to find your variant in the list.

    ![screen showing selecting a variant in sap b1](.\media\permissions\an-additional-sap12.png)

:::info[note]
If you have any questions, contact us using [CompuTec Support Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp).
:::
