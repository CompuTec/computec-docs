---
sidebar_position: 1
---

# CompuTec Labels User Guide

**CompuTec Labels** helps you generate and print labels and reports based on data from **SAP Business One**. It supports different printing scenarios and allows report processing to be controlled through configurable rules.

This User Guide explains how to work with label and report processing after CompuTec Labels has been installed and configured.

:::note[info]
Watch the video to see how CompuTec Labels works: [CompuTec Labels video](https://www.youtube.com/watch?v=S5urmvsi-M0)
:::

## What you can do with CompuTec Labels

Depending on your configuration, you can use CompuTec Labels to:

- Generate and print labels and reports for SAP Business One documents.
- Process label requests using configured reports, printers, and rules.
- Use SQL queries and document parameters to retrieve data dynamically.
- Send generated reports by email.
- Attach generated PDF reports to the documents associated with requests.
- Review label requests and their processing status.
- Use logs to investigate request processing.
- Remove old requests that are no longer required.

## Work with SAP Business One

CompuTec Labels integrates with **SAP Business One** to support label and report processing for business documents.

Depending on the configured scenario, reports can be generated automatically when an applicable event occurs or manually from **SAP Business One**.

For examples of supported workflows and instructions for working with labels from **SAP Business One**, see [**SAP Add-on**](/docs/labels/setup/computec-labels-sap-addon).

## Work with report rules

Report rules determine how requests are processed for specific scenarios.

Depending on the rule configuration, CompuTec Labels can select the appropriate report and printer and perform additional actions, such as:

- Sending the generated report by email.
- Attaching the generated PDF to the requested document.

For more information, see:

- **Configure custom rules in CompuTec Labels**
- **Send reports by email**
- **Attach generated PDF reports to requested documents**

## Work with SQL queries

SQL queries can be used to retrieve data dynamically for label and report processing.

CompuTec Labels provides tools for writing, formatting, and testing queries before they are used in your configuration.

For more information, see [**Write and Test SQL Queries**](/docs/labels/using-computec-labels/sql-queries-test).

## Review and manage requests

The **Requests** section provides information about label requests and their processing.

You can use it to:

- Find and review requests.
- Check request and report processing statuses.
- Access additional information about individual requests.
- Remove old requests from the CTLABEL database when they are no longer required.

For more information, see:

- **Review label requests**
- **Clean up old requests in CompuTec Labels**

## Troubleshoot request processing

If a request does not produce the expected result, use **Requests** to identify the request and **Logs** to review its processing information.

For more information, see **Troubleshoot request processing with logs**.

## Before you start

CompuTec Labels must be installed and configured before you can use the features described in this guide.

For information about system configuration, printers, reports, templates, and other administrative settings, see the [**Administrator Guide**](/docs/labels/setup/overview).
