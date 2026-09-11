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

    ![CompuTec Labels Printing Manager showing the Companies section selected and a list of company databases](../media/edit-rules/labels-edit-rule1.png)

3. Right-click the company and select **Edit Report Rules**.

    ![Context menu for a company in CompuTec Labels Printing Manager with Edit Report Rules selected](../media/edit-rules/labels-edit-rule2.png)

4. Click the **plus (+) icon** to create a new rule.

    ![Report Rules window with the Add rule plus icon highlighted](../media/edit-rules/labels-edit-rule3.png)

5. Enter the **Rule Name**.

    ![Report Rule configuration form with the Rule Name field](../media/edit-rules/labels-edit-rule5.png)

6. Select the Requester from the list.

    ![Report Rule configuration form with the Requester dropdown open](../media/edit-rules/labels-edit-rule6.png)

7. Select the required **Printer** if the report should be printed.

    ![Report Rule configuration form with the Printer field](../media/edit-rules/labels-edit-rule7.png)

8. Select the Report to use. The available reports come from the SAP Business One report list.

    ![Report Rule configuration form with the Report field and available reports](../media/edit-rules/labels-edit-rule8.png)

9. Configure additional conditions, such as **Card Code** or **Card Type**, if required.

10. To add a custom condition, click the **plus (+) icon** under **Custom Rules**.  

    ![Report Rule configuration form with the Custom Rules section and Add condition plus icon](../media/edit-rules/labels-edit-rule9.png)

11. Enter a name for the custom condition and define its logic. Custom conditions support SQL, variables, and parameters.

    ![Custom condition editor with fields for the condition name, SQL statement, variables, and parameters](../media/edit-rules/labels-edit-rule10.png)

12. If required, enable **Send PDF to Email Recipient**, **Attach PDF document to Requested Document**, or both. [Read more](/docs/labels/using-computec-labels/reports/config-report-rules#configure-additional-actions)

    ![Report Rule configuration form with options to email the PDF and attach it to the requested document](../media/edit-rules/labels-edit-rule11.png)

13. Save the rule.

    ![Report Rule configuration window with the Save button](../media/edit-rules/labels-edit-rule12.png)

The rule from our example will let you print this report post-delivery automatically. The system will process it from the request list.

## Configure additional actions

Depending on your scenario, you can configure the rule to perform additional actions:

### Send the report by email

Enable **Send PDF to Email Recipien**t to send the generated report by email.

    ![Report Rule configuration form with Send PDF to Email Recipient enabled and the Edit button](../media/edit-rules/labels-edit-rule15.png)

Click **EDIT** to configure the email account, recipients, subject, and message body.

![Email settings dialog with fields for the account, recipients, subject, and message body](../media/edit-rules/labels-edit-rule16.png)

:::note[info]
For more information, see [**Send reports by email**](/docs/labels/using-computec-labels/reports/send-reports).
:::

### Attach the PDF to the requested document

Enable **Attach PDF document to Requested Document** to attach the generated PDF to the document associated with the request.

    ![Report Rule configuration form with Attach PDF document to Requested Document enabled](../media/edit-rules/labels-edit-rule17.png)

:::note[info]
For more information, see [**Attach PDF Reports to Requested Documents**](/docs/labels/using-computec-labels/reports/attach-reports-to-docs).
:::

## Result

The **Report Rule** is available for processing requests that meet its configured conditions.

You can review processed requests in **Requests** and use Logs when you need more information about request processing.

## Additional information

Review your rule conditions carefully to make sure the rule applies to the intended requests.
