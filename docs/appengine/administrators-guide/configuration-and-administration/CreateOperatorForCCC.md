---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Create Cloud COntrol Center Operator and Assign to IAM Server
To enable the discovery of SAP companies and other required SAP environment settings, the system needs Cloud Control Center (CCC) operator credentials. These credentials allow AppEngine to retrieve all necessary information. Follow the steps below to create a CCC operator and assign them a password.
## Create an Operator
1. Login To CCC portal.
2. Navigate to System Configuration → Operator and create a new operator.
![Create Operator](./media/configuration-and-administration/CCC/CreateOperator.png)
3.Add the operator to the CCC.
![Add Operator](./media/configuration-and-administration/CCC/CreateOperator_Add.png)
4. Log in to the Keycloak server. In the sapb1 realm, create a user that matches the operator's name (excluding the domain).
![Ceeate Auth User](./media/configuration-and-administration/CCC/CreateUser.png)
![Add  Auth User](./media/configuration-and-administration/CCC/CreateUser_Add.png)
5.Set a password for the newly created user.
![Ceeate Auth User](./media/configuration-and-administration/CCC/SetPassword.png)
![Add  Auth User](./media/configuration-and-administration/CCC/SetPassword_Add.png)
## AppEngine Discovery
Now you can use this acount in AppEngine to discover servers and in the company Activation Process.
![Discover](./media/configuration-and-administration/CCC/Discover.png)