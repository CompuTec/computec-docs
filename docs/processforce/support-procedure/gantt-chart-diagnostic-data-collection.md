---
sidebar_position: 3
---

# Gantt Chart Diagnostic Data Collection

In case any issues related to displaying data on the Gantt chart occur, it is possible to collect information to help determine the root cause. Collecting and attaching the appropriate data to the relevant support ticket may significantly shorten the time required to resolve the problem.

---

How to collect information on the Gantt chart

1. Go to CompuTec ProcessForce installation directory and open to edit CompuTec ProcessForce.exe.config file.
    The default installation directory are:

    - `C:\Program Files\sap\SAP Business One\AddOns\CT\ProcessForce` – for the 64-bit version,
    - `C:\Program Files (x86)\sap\SAP Business One\AddOns\CT\ProcessForce` – for the 32-bit version.
2. Add a new parameter in the appSettings section:

        ```config
        <add key="DumpGanttData" value="true" />
        ```

    and save the file.
3. Create a new directory: `c:\Temp\`.
4. Restart CompuTec ProcessForce.
5. Open Gantt chart – the system generates the Gantt chart content file and places it in this directory: `c:\Temp\schdata.xml`.
6. Compress this file and attach it to a related support ticket.
7. Return to CompuTec ProcessForce.exe.config and set the property to false.

---
