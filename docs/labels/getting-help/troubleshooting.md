---
sidebar_position: 2
---

# Troubleshooting

This section outlines identified issues, potential root causes, and recommended resolutions.

Please visit [Log Files page](log-files.md) when you need to review logs of your issue.

## Printer wasn't Found

**Symptom**

After we create a new request, CompuTec Labels Service proceeds and update the status of the request. When you see Printer wasn't found error message, there might be several possible reasons behind this.

**Reason**

No printer assigned to the request during the creation of request.

**Resolution**

Please make sure that you applied the below steps.

- Make sure that when the request is created by auto-trigger, a printer is defined in the corresponding application. Check below references:

        - [SAP](../using-computec-labels/sap-add-on/overview.md)
        - [WMS](https://learn.computec.one/docs/wms/user-guide/starting)
        - [PDC](https://learn.computec.one/docs/pdc/administrator-guide/setting-up-the-application/overview#ct-labels-settings)

- Update global data
- Restart CompuTec Labels Service

---
