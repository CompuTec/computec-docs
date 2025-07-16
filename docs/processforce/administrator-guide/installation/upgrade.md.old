---
sidebar_position: 3
---

# Upgrade

Upgrading to ProcessForce 10.0 ensures you have the latest features and enhancements while maintaining compatibility with SAP Business One. This guide provides detailed instructions on upgrading ProcessForce, including transitioning from the MSI installer to the Lightweight Deployment version.

Before proceeding, ensure that your SAP Business One environment meets the prerequisites to avoid compatibility issues.

---

## ProcessForce 10.0 upgrade

:::info
    If you are installing ProcessForce on your database for the first time, refer to the [the ProcessForce Installation Guide](./first-installation/license-server.md).
:::

:::danger
    Before upgrading the ProcessForce add-on, verify that the following SAP Business One stored procedures are in their default form (without any custom modifications):

    - SP_TransactionNotification
    - SP_PostTransactionNotice
:::

:::caution
    It is recommended to restart the SAP Business One client before the installation of the ProcessForce add-on.
:::

1. Uninstall ProcessForce API from Program and Features.
2. Remove the previous version of the Lightweight Deployment extension.
3. Install the Lightweight Deployment extension.
4. Restart SAP Business One. If the ProcessForce extension is already assigned to a database, the installation and upgrade process will start automatically after the restart.

## Upgrade from MSI to Lightweight Deployment versions

Any ProcessForce 10.0 version is provided as a Lightweight Deployment extension only. Here you can find a manual for an upgrade from one of the previous versions with the MSI installer to the Lightweight Deployment version.

1. Uninstall CompuTec ProcessForce (Add-on Administration form).

2. Restart the SAP Business One client to have the ProcessForce uninstalled from the machine.

3. Uninstall CompuTec ProcessForce API from Program and Features.

    - It is essential not to have any older CompuTec ProcessForce API installed in Apps and Features, even if the LD extension is upgraded.
    - When the user is not using any other software (CompuTec WMS Server, CompuTec AppEngine, or any custom code) on the same machine, there is no need to have the CompuTec ProcessForce API installed.
    - However, if it is installed, it takes precedence (due to how the GAC works) on the API we deploy in the Lightweight Deployment package. If they are in different versions, ProcessForce will not work.

4. Install the CompuTec ProcessForce LD extension (click [here](./first-installation/extension.md) to see how to do it).

---
