---
sidebar_position: 6
---

# Tips & Tricks

When integrating CompuTec ProcessForce API with SAP Business One, there are a few key considerations to ensure smooth operation. This guide highlights useful tips for accessing SAP Business One objects and managing PowerShell script execution after CompuTec ProcessForce API updates.

---

**SAP Business One Objects Access from CompuTec ProcessForce API**

By leveraging this API, you can interact with SAP Business One data directly from your scripts, simplifying automation and integration tasks.

**Visual Studio Code / PowerShell ISE Session Restart**

If you are running a PowerShell script on a specific version of CompuTec ProcessForce API and later upgrade CompuTec ProcessForce and its API, you must restart your applications like: Visual Studio Code PowerShell terminal or PowerShell ISE.

These applications retain CompuTec ProcessForce API files in memory throughout the session. Even after an update, they continue using the old version unless restarted. To avoid issues, always restart your session after upgrading CompuTec ProcessForce API.

---
