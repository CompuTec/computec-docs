---
sidebar_position: 11
toc_min_heading_level: 2
toc_max_heading_level: 5
unlisted: true
---

# Cloud Control Center (CCC) Create Operator and Assign to IAM Server

To enable seamless discovery of SAP companies and access essential SAP environment configurations, it is necessary to configure operator credentials within the Cloud Control Center (CCC). These credentials authorize CompuTec AppEngine to retrieve key system information during the company activation and discovery process.

This guide walks you through the steps to create a CCC operator, configure corresponding credentials in the IAM (Keycloak) server, and use the account in CompuTec AppEngine.

## Create an Operator

1. Access your Cloud Control Center using your admin credentials.
2. Navigate to System Configuration → Operator and create a new operator.

    ![Create Operator](./media/configuration-and-administration/CCC/CreateOperator.png)

3. After creating the operator, assign them to the relevant CCC instance.

    ![Add Operator](./media/configuration-and-administration/CCC/CreateOperator_Add.png)

4. Log in to the Keycloak server. In the SAP Business One realm, create a new user with the same name as the CCC operator (excluding the domain name).

    ![Create Auth User](./media/configuration-and-administration/CCC/CreateUser.png)

    ![Add Auth User](./media/configuration-and-administration/CCC/CreateUser_Add.png)

5.Set a password for the newly created user.

![Ceeate Auth User](./media/configuration-and-administration/CCC/SetPassword.png)

![Add  Auth User](./media/configuration-and-administration/CCC/SetPassword_Add.png)

## CompuTecAppEngine Discovery

With the operator and IAM user configured, you can now use these credentials in CompuTec AppEngine for SAP company discovery and activation.

![Discover](./media/configuration-and-administration/CCC/Discover.png)

---
