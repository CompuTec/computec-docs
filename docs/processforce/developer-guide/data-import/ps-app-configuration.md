---
sidebar_position: 2
---

# PowerShell Application Configuration

On this page, you can find a step-by-step manual for configuring PowerShell to import or update data.

:::danger
    If you take our scripts and modify them, which then causes an issue of any sort which requires our team to spend time reviewing your scripts etc., we will charge you for the time spent in fixing these issues on a time and material basis at an hourly rate of 150 EUR/USD, plus expenses if applicable. Before any work is started, an email confirmation is required between both parties that these charges will be applied and accepted.
:::

---

## Installation

The machine where the scripts are run must have the same version of the CompuTec ProcessForce API installed as the version of CompuTec ProcessForce used in the company database.

To edit PowerShell scripts more conveniently, you can install the Windows PowerShell ISE application or Visual Studio Code with a PowerShell extension.

You must use the same bitness (64-bit) of the PowerShell as SAP Business One and ProcessForce you have.

If you are using Windows Server, here is an example of how you can add Windows PowerShell ISE in the Server Manager:

![Roles and Features](./media/ps-app-configuration/roles-features-wizard.webp)

## Execution Policy

Set execution policy to RemoteSigned. To check which execution policy is selected, choose the Get-ExecutionPolicy command.

![Get Execution Policy](./media/ps-app-configuration/get-execution-policy.webp)

If the result is Restricted (as in the screenshot above), perform the `Set-ExecutionPolicy RemoteSigned` command and type Y on the dialog window to complete it.

After rechecking the policy, you should see RemoteSigned communication.

![PowerShell Set Execution](./media/ps-app-configuration/ps-set-execution-policy.webp)

Now you can use PowerShell scripts to import data. Check [here](../data-import/overview.md) how to do it.
