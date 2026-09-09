---
sidebar_position: 1
---

# Configure Report Rules

**Report Rules** in **CompuTec Labels** define how label requests are processed for specific scenarios.

You can use rule conditions to determine which report and printer are used and configure additional actions, such as sending the generated report by email or attaching a PDF to the requested document.

## Before you start

Before configuring a custom rule:

- Make sure the required report is available in CompuTec Labels.
- Identify the conditions that should determine when the rule applies.
- Configure any additional resources required by the rule, such as an email account.

## Configure a custom rule

To configure a custom rule, follow these steps:

1. Open **CompuTec Labels Printing Manager**.
2. Go to **Companies**.

    ![alt text](../media/edit-rules/labels-edit-rule1.png)

3. Right-click the company and select **Edit Report Rules**.

    ![alt text](../media/edit-rules/labels-edit-rule2.png)

4. Click the **plus (+) icon** to create a new rule.

    ![alt text](../media/edit-rules/labels-edit-rule3.png)

5. Enter the **Rule Name**.

    ![alt text](../media/edit-rules/labels-edit-rule5.png)

6. Select the Requester from the list.

    ![alt text](../media/edit-rules/labels-edit-rule6.png)

7. Select the required **Printer** if the report should be printed.

    ![alt text](../media/edit-rules/labels-edit-rule7.png)

8. Select the Report to use. The available reports come from the SAP Business One report list.

    ![alt text](../media/edit-rules/labels-edit-rule8.png)

9. Configure additional conditions, such as **Card Code** or **Card Type**, if required.

10. To add a custom condition, click the **plus (+) icon** under **Custom Rules**.  

    ![alt text](../media/edit-rules/labels-edit-rule9.png)

11. Enter a name for the custom condition and define its logic. Custom conditions support SQL, variables, and parameters.

    ![alt text](../media/edit-rules/labels-edit-rule10.png)

12. If required, enable **Send PDF to Email Recipient**, **Attach PDF document to Requested Document**, or both. [Read more](/docs/labels/using-computec-labels/reports/config-report-rules#configure-additional-actions)

    ![alt text](../media/edit-rules/labels-edit-rule11.png)

13. Save the rule.

    ![alt text](../media/edit-rules/labels-edit-rule12.png)

The rule from our example will let you print this report post-delivery automatically. The system will process it from the request list.

## Configure additional actions

Depending on your scenario, you can configure the rule to perform additional actions:

### Send the report by email

Enable **Send PDF to Email Recipien**t to send the generated report by email.

    ![alt text](../media/edit-rules/labels-edit-rule15.png)

Click **EDIT** to configure the email account, recipients, subject, and message body.

![alt text](../media/edit-rules/labels-edit-rule16.png)

:::note[info]
For more information, see [**Send reports by email**](/docs/labels/using-computec-labels/reports/send-reports).
:::

### Attach the PDF to the requested document

Enable **Attach PDF document to Requested Document** to attach the generated PDF to the document associated with the request.

    ![alt text](../media/edit-rules/labels-edit-rule17.png)

:::note[info]
For more information, see [**Attach PDF Reports to Requested Documents**](/docs/labels/using-computec-labels/reports/attach-reports-to-docs).
:::

## Result

The **Report Rule** is available for processing requests that meet its configured conditions.

You can review processed requests in **Requests** and use Logs when you need more information about request processing.

## Additional information

Review your rule conditions carefully to make sure the rule applies to the intended requests.
