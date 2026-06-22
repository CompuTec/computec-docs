---
sidebar_position: 2
---

# CompuTec License Server Installation

The **CompuTec License Server** manages user licenses for CompuTec solutions.

This guide explains how to install the **CompuTec License Server** and configure **Windows Firewall** to allow communication with client applications.

:::info[Note]

For information about available license types, see [**CompuTec ProcessForce User License Types**](../license-comparison-chart.md).
:::

## Before you start

Before you begin, make sure:

- You have administrator rights on the Windows server.  
- Any previous version of **CompuTec ProcessForce License Server** has been removed.
- Any previous version of **SAP COM License Bridge** has been removed (required only for environments that previously used **CompuTec ProcessForce 8.81**, **8.82**, or **9.0 PL05–PL08 HotFix**).
- You have downloaded the [latest **CompuTec License Server** installation package](../../../releases/download.md).

:::caution[important]

**CompuTec License Server** is supported only on **Windows** operating systems.
:::

## Install and congigure CompuTec License Server

### Step 1: Install CompuTec License Server

1. Extract the **CompuTec License Server** installation package.
2. Run **CompuTec.LicenseServer.Setup.msi**.
3. Click **Next**.

    ![CompuTec License Server Setup Wizard welcome dialog with title CompuTec License Server Setup, instructions to change installation options, and Next and Cancel buttons on a Windows desktop background](media/license-server-installation/lic-serv-ins1.png)

4. Accept the default installation folder (recommended) or select a custom location.
5. Click **Next**.  

    ![CompuTec License Server installer destination folder screen showing installation path C:\Program Files (x86)\CompuTec\License Server\ with Next and Cancel buttons on a hexagonal patterned desktop background](media/license-server-installation/lic-serv-ins2.png)

6. Review the installation settings, and click **Install**.

    ![CompuTec License Server Setup wizard ready to install CompuTec License Server with Install and Cancel buttons visible on a hexagonal patterned desktop background](media/license-server-installation/lic-serv-ins3.png)

7. Wait for the installation to finish.
8. Click **Finish**.

    ![CompuTec License Server Setup Wizard completion dialog on a Windows desktop with dark hexagonal background showing the message Completed the CompuTec License Server Setup Wizard and instructions to click the Finish button to exit the Setup Wizard](media/license-server-installation/lic-serv-ins4.png)

### Step 2: Configure Windows Firewall

To allow communication with the **CompuTec License Server**, create an inbound firewall rule for **TCP** port ``30002``.

1. Open **Windows Settings**.
2. Navigate to **Windows Security** > **Firewall & network protection**.
3. Click **Advanced settings**.

    ![Windows Security Firewall and network protection page showing domain private and public network status with Advanced settings link visible](media/license-server-installation/lic-serv-ins5.png)

4. In **Windows Defender Firewall with Advanced Security**, select **Inbound Rules**.

    ![Windows Defender Firewall with Advanced Security window with Inbound Rules selected in the left pane and rule list area on the right](media/license-server-installation/lic-serv-ins6.png)

5. Click **New Rule...**.

    ![Windows Defender Firewall with Advanced Security showing New Rule command in the Inbound Rules pane and the New Rule wizard available](media/license-server-installation/lic-serv-ins6-1.png)

6. Select **Port**, and click **Next**.

    ![New Inbound Rule wizard page with Port rule type selected and Next button available](media/license-server-installation/lic-serv-ins7.png)

7. Select **TCP**.
8. Enter ``30002`` in **Specific local ports**.

    ![New Inbound Rule wizard page with TCP selected and specific local ports field set to 30002](media/license-server-installation/lic-serv-ins8.png)

9. Click **Next**.
10. Choose **Allow the connection**, and click **Next**.

    ![New Inbound Rule wizard page with Allow the connection option selected and Next button visible](media/license-server-installation/lic-serv-ins9.png)

11. Select all profiles: ``Domain``, ``Private`` and ``Public``, and click **Next**.

    ![New Inbound Rule wizard page with Domain Private and Public profiles selected and Next button visible](media/license-server-installation/lic-serv-ins10.png)

12. Enter a name for the rule, and click **Finish**.

    ![New Inbound Rule wizard page prompting for the rule name with Finish button ready to complete the setup](media/license-server-installation/lic-serv-ins11.png)

## Result

After completing the installation:

- **CompuTec License Server** is installed and running.
- **Windows Firewall** allows inbound **TCP** connections on port ``30002``.
- CompuTec applications can connect to the **License Server** and validate user licenses.

:::info[note]
If client applications cannot connect to the **License Server** after installation:

- Verify that the **License Server** service is running.
- Confirm that **TCP** port ``30002`` is open.
- Check local and network firewall settings.
- Verify connectivity between the client workstation and the **License Server**.

:::
