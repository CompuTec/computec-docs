---
sidebar_position: 2
---

# CompuTec License Server Installation

The CompuTec License Server is a crucial component for managing licenses in CompuTec solutions. This This guide walks you through the step-by-step installation of the CompuTec License Server on a Windows environment. It also includes firewall configuration to allow communication on the required port.

:::info
    Here, you can check the available [**ProcessForce user license types**](../license-chart.md).
:::

---

## Installing CompuTec License Server

:::danger
  Before installing a new version, uninstall any previous versions of the ProcessForce License Server and SAP COM License Bridge if you have used them with ProcessForce 8.81, 8.82, or 9.0 PL05 - PL08 HotFix.
:::

:::caution
    CompuTec License Server can be installed in a **Windows environment** only.
:::

1. Download the latest version of [CompuTec License Server](../../../releases/download.md)

2. Extract the ZIP file.

3. Run the `CompuTec.LicenseServer.Setup.msi` file and click "Next":

    ![CompuTec License Server Setup](./media/license-server-installation/CTLicenseServerInstallerA.png)

4. Specify the installation folder (default path is recommended) and click "Next":

    ![CompuTec License Server Setup](./media/license-server-installation/CTLicenseServerInstallerB.png)

5. Confirm installation – click the "Install" button:

    ![CompuTec License Server Setup](./media/license-server-installation/CTLicenseServerInstallerC.png)

6. Once the installation is completed successfully, click "Finish".

    ![CompuTec License Server Setup](./media/license-server-installation/CTLicenseServerInstallerD.png)

## Setting Windows Firewall rule

1. Navigate to `Windows Settings → Network & Internet → Windows Firewall`:

    ![Firewall rule](./media/license-server-installation/firewall-rule.webp)

2. Click on Advanced settings option:

    ![Firewall rule - advanced settings](./media/license-server-installation/firewall-rule-2.webp)

3. In the Windows Firewall with Advanced Security window, select Inbound Rules and click New Rule... to open the New Inbound Rule Wizard.

    ![New rule](./media/license-server-installation/new-rule.webp)

4. Choose "Port" as the rule type:

    ![Rule type](./media/license-server-installation/rule-type.webp)

5. Choose TCP protocol and specify 30002 as the local port:

    ![Local port](./media/license-server-installation/local-port.webp)

6. Choose "Allow the connection" action:

    ![Action](./media/license-server-installation/action.webp)

7. Choose all profiles:

    ![Profiles](./media/license-server-installation/profiles.webp)

8. Specify the rule name and click Finish:

    ![Rule name](./media/license-server-installation/rule-name.webp)

---
