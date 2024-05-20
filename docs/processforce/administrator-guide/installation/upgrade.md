---
sidebar_position: 3
---

# Upgrade

## ProcessForce 10.0 upgrade

:::info
    If you install ProcessForce on your database for the first time, follow [the ProcessForce Installation Guide](./first-installation/license-server.md).
:::

:::danger
    Before the ProcessForce add-on upgrade, the following SAP Business One stored procedures are required to be in default form (do not contain any custom queries):

    - SP_TransactionNotification
    - SP_PostTransactionNotice
:::

:::caution
    It is recommended to restart the SAP Business One client before the installation of the ProcessForce add-on.
:::

1. Remove ProcessForce API from Program and Features.

2. Remove the previous version of the Lightweight Deployment extension.

3. Install the Lightweight Deployment extension.

4. Restart SAP Business One. If the ProcessForce extension has already been assigned to a database, the installation and upgrade will start after the restart.

## Upgrade from MSI to Lightweight Deployment versions

Any ProcessForce 10.0 version is provided as a Lightweight Deployment extension only. Here you can find a manual for an upgrade from one of the previous versions with the MSI installer to the Lightweight Deployment version.

1. Uninstall CompuTec ProcessForce (Add-on Administration form).

2. Restart the SAP Business One client to have the ProcessForce uninstalled from the machine.

3. Uninstall CompuTec ProcessForce API from Program and Features.

    It is essential not to have any older CompuTec ProcessForce API installed in Apps and Features, even if the LD extension is upgraded.

    When the user is not using any other software (CompuTec WMS Server, AppEngine, or any custom code) on the same machine, there is no need to have the CompuTec ProcessForce API installed.
    However, if it is installed, it takes precedence (due to how the GAC works) on the API we deploy in the Lightweight Deployment package. If they are in different versions, ProcessForce will not work.

4. Install the CompuTec ProcessForce LD extension (click [here](./first-installation/extension.md) to see how to do it).
