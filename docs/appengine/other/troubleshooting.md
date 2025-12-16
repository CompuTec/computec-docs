---
sidebar_position: 2
---

# Troubleshooting

## Problem: Hyper-V Reserving AppEngine Default Port 54001

On some Windows systems, **Hyper-V** networking may reserve **TCP ports** that **CompuTec AppEngine** needs to start. When this happens, CompuTec AppEngine can't use its default **port 54001**, and the service doesn't start.

When Hyper-V is turned on, the **Windows NAT (WinNAT)** service may automatically reserve certain port ranges for virtual networking. If **port 54001** is included in one of these ranges, CompuTec AppEngine cannot bind to it, even though nothing else seems to be using it.

You may see one or more of the following symptoms:

- The **CompuTec AppEngine service** doesn't start or stops immediately after starting.
- **Log files** or **Windows Event Viewer** show messages such as: `Address already in use or Failed to bind to port 54001.`
- No other visible application appears to be using **port 54001**.

## Solution

:::info[note]

- You must run these steps as a local administrator.
- Stopping **WinNAT** may temporarily interrupt networking for virtual machines, for example, Docker.

:::

1. Close **CompuTec AppEngine** and any related admin tools. If **CompuTec AppEngine** runs as a **Windows service**, stop it from **Services**.
2. Find **Command Prompt** in your **Start menu**, right-click on it and select **Run as administrator**.
3. Run the following command: `net stop winnat` to stop the WinNAT service.
4. Wait until Windows confirms that the service has stopped.
5. Run the following command: `net start winnat` to start the WinNAT service again.
6. Once restarted, Windows recalculates the reserved port ranges. In many cases, this frees port 54001 so CompuTec AppEngine can start normally.
7. Done! Now you can start **CompuTec AppEngine** again.

### If the problem persists

If AppEngine still cannot start **after restarting WinNAT**:

- Confirm that no other service is configured to use **port 54001**.
- Check with your system administrator whether other network tools (Docker, WSL2, additional Hyper-V setups) are reserving the same port range.
- Consider changing the CompuTec AppEngine port (if supported in your configuration) to a port outside the reserved range.

:::note[info]
If you need help, or have any questions, contact us via the [CompuTec Helpdesk Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp).
:::
