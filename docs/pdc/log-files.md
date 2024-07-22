---
sidebar_position: 6
---

# Log Files

To change the NLog logging level in PDC, follow these steps:

- Find the NLog.config file in the PDC installation path.

    ![Log Files](./media/log-files/log-file-02.png)

- Use any text editor to open the NLog.config file.
- Locate the logging level property in the file.
- Change the logging level from "Info" to "Trace" or any other desired level. By default, it is set to "Info".

    ![Log Files](./media/log-files/log-file-01.png)

Logs from the PDC are collected in these files:

![Log Files](./media/log-files/log-file.png)
