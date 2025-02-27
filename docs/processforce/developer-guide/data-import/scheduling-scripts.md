---
sidebar_position: 4
---

# Scheduling PowerShell Scripts

Automating repetitive tasks can improve efficiency and reduce manual effort. Windows Task Scheduler allows you to run PowerShell scripts at predefined times or events, ensuring smooth and timely execution.

---

**Requirements**:

Before scheduling a PowerShell script, ensure you have the following:

- powershell.exe location on your server. By default, it is `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` for 64-bit and `C:\Windows\syswow64\WindowsPowerShell\v1.0\powershell.exe` for 32-bit

- path to PowerShell script. For example: `C:\PS\MP\PF\powershell-scripts\Production\Manufacturing Order\Manufacturing Order Update\ManufacturingOrderStatusUpdate.ps1`.

**Steps**:

1. Open Windows Task Scheduler:

    ![Task Scheduler](./media/scheduling-scripts/task-scheduler.webp)

2. Choose the "Create Task" option from the context menu (right-click on Task Scheduler (Local)).

    ![Add task](./media/scheduling-scripts/create-task.webp)

3. Provide a name for the Task and an optional description for the task. Select "Run" whether the user is logged on or not. You can also choose to Run with the highest privileges depending on your system settings.

    ![Task Name](./media/scheduling-scripts/task-name.webp)

4. In the Triggers tab, you can specify when this task should run. To add a trigger, choose New...

    ![New Task](./media/scheduling-scripts/new-task.webp)

5. Define trigger. The below example task will run every day at 23:00 starting from 20.10.2018.

    ![New Trigger](./media/scheduling-scripts/new-trigger.webp)

6. On the Action tab, you define actions that will be executed when the task starts. Click on "New" to add Action.

    ![Action](./media/scheduling-scripts/action-type.webp)

7. Provide values for the fields:

    a. **Program/script**: paste the path to powershell.exe, e.g.: C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe.

    b. **Add arguments (optional)**: paste the path to the PowerShell script in quotes. For example: "C:\PS\MP\PF\powershell-scripts\Production\Manufacturing Order\Manufacturing Order Update\ManufacturingOrderStatusUpdate.ps1"

    c. **Start in (optional)**: paste the path to the directory with a PowerShell script. For example: "C:\PS\MP\PF\powershell-scripts\Production\Manufacturing Order\Manufacturing Order Update\".

    ![Task Paths](./media/scheduling-scripts//task-paths.webp)

8. Click "OK" to save the task. You may be prompted to enter credentials (username and password):

    ![Credentials](./media/scheduling-scripts/scheduling-name.webp)

9. When you click on Task Scheduler Library, you can see a list of Tasks. Here, you can find your newly created task with status. You can also edit, manually start, disable, check execution history etc.

    ![Ready Task](./media/scheduling-scripts/ready-task.webp)

---
