---
sidebar_position: 1
---

# Introduction to CompuTec KSeF

**CompuTec KSeF** connects **SAP Business One** with the **Polish National e-Invoice System (KSeF – Krajowy System e-Faktur)**.

It supports the exchange of invoice information between SAP Business One and KSeF, including sending outgoing invoices to KSeF and retrieving incoming invoices issued to your company.

**CompuTec KSeF** works with **CompuTec AppEngine** to automate document processing and provides tools for administrators and business users to configure, process, and monitor KSeF documents.

## What you can do with CompuTec KSeF

Depending on your configuration, you can use CompuTec KSeF to:

- Generate KSeF-compatible XML files for outgoing SAP Business One documents.
- Send outgoing invoices to KSeF automatically or manually.
- Monitor the processing status of outgoing invoices.
- Store the KSeF number assigned to successfully processed invoices.
- Generate and view invoice verification QR codes.
- Support offline invoice processing.
- Retrieve incoming invoices from KSeF.
- Match incoming invoices to SAP Business One Business Partners.
- Create SAP Business One drafts from incoming invoices.
- Match incoming invoice lines and base documents.
- Monitor incoming documents until the corresponding SAP Business One document is created.
- Review KSeF sending sessions and their processing history.

The available functions depend on your company's CompuTec KSeF configuration and your SAP Business One authorizations.

## How CompuTec KSeF works

CompuTec KSeF supports two main document flows.

### Outgoing documents

The outgoing process starts with a supported document created in SAP Business One.

The general flow is:

**SAP Business One > CompuTec KSeF > KSeF**

For outgoing documents, CompuTec KSeF:

1. Identifies documents that should be processed.
2. Generates and validates the XML required by KSeF.
3. Sends the document to KSeF automatically according to the configured schedule or when sending is started manually.
4. Monitors KSeF processing.
5. Stores the processing result and KSeF information.

After KSeF successfully processes an invoice, CompuTec KSeF stores the assigned KSeF number and makes the invoice verification QR code available.

CompuTec KSeF supports outgoing documents such as:

- A/R invoices.
- Corrections.
- A/R down payment invoices.

### Incoming documents

The incoming process starts with a document available in KSeF.

The general flow is:

**KSeF > CompuTec KSeF > SAP Business One**

Depending on the configuration, CompuTec KSeF can:

1. Retrieve incoming documents from KSeF.
2. Match the document to an SAP Business One Business Partner.
3. Determine the SAP Business One document type and subtype.
4. Match document lines to SAP Business One items.
5. Match the invoice to existing base documents.
6. Create an SAP Business One draft.
7. Monitor the document until the corresponding final SAP Business One document is created.

Incoming document categories control how documents are retrieved, matched, and processed.

:::info[note]

Incoming document processing is configurable. The exact processing flow can differ depending on your company's category configuration and business requirements.

:::

## CompuTec KSeF components

CompuTec KSeF works with CompuTec AppEngine and SAP Business One.

### CompuTec AppEngine

CompuTec AppEngine provides the platform used to run CompuTec KSeF and its background processing.

Administrators use the **CompuTec AppEngine Administration Panel** to configure CompuTec KSeF and manage background processing jobs.

Business users access CompuTec KSeF through the **CompuTec AppEngine Launchpad**.

### CompuTec KSeF Core

CompuTec KSeF Core contains the main configuration used to control KSeF communication and document processing.

Administrators can configure settings such as:

- KSeF environment.
- Authentication method.
- XML generation.
- KSeF schema.
- File storage.
- Authentication and offline certificates.
- Incoming document retrieval.

### Background processing

CompuTec AppEngine background processing jobs automate CompuTec KSeF operations.

Depending on the configuration, background processing can:

- Generate outgoing invoice XML files.
- Send documents to KSeF.
- Retry interrupted or failed sending sessions.
- Retrieve incoming documents.
- Monitor incoming document processing.

### SAP Business One integration

CompuTec KSeF works with SAP Business One documents and authorizations.

- For outgoing documents, users can access KSeF communication directly from supported SAP Business One documents.

- For incoming documents, CompuTec KSeF can create and monitor SAP Business One drafts and their resulting documents.

SAP Business One authorizations determine which CompuTec KSeF functions each user can access.

## CompuTec KSeF application

Business users work with CompuTec KSeF from the **CompuTec AppEngine Launchpad**.

Depending on the user's authorizations and company configuration, the application can provide access to:

- **Output Invoices** – Outgoing invoices prepared for or processed by KSeF.
- **Input Invoices** – Incoming invoices retrieved from KSeF.
- **Sessions** – KSeF sessions used when sending outgoing invoices.
- **Categories** – Configuration used to control incoming document processing.

:::info[note]

The functions available to a user depend on the assigned SAP Business One authorizations.

:::

## Output Invoices

Use **Output Invoices** to monitor outgoing invoices and their KSeF processing status.

From an outgoing invoice, you can review information such as:

- Integration status.
- XML generation status.
- KSeF number.
- Processing dates.
- KSeF verification QR code.
- Invoice information.
- Document visualization.
- XML document.
- Session history.

You can also manually send an invoice when it is ready for KSeF processing.

## Input Invoices

Use **Input Invoices** to work with documents retrieved from KSeF.

Depending on the document and your company's configuration, you can review its processing information and continue the process of creating the corresponding SAP Business One purchasing document.

Incoming processing can include Business Partner matching, document and item determination, base document matching, and SAP Business One draft creation.

## KSeF sessions

CompuTec KSeF uses sessions when sending outgoing invoices to KSeF.

A session contains one or more outgoing invoices sent to KSeF as part of the same sending process.

You can use **Sessions** to review the status and result of the sending process and the invoices included in the session.

## Categories

Categories define how CompuTec KSeF retrieves and processes incoming documents.

A category can control:

- Incoming document filters.
- Business Partner matching.
- Draft creation.
- Document type determination.
- Item determination.
- Base document matching.
- Field mappings.

Categories are normally configured by an administrator or consultant according to the company's SAP Business One data and document processing requirements.

## Authentication and certificates

CompuTec KSeF supports authentication settings used to communicate with KSeF.

The configuration supports certificate authentication and access-token authentication.

Certificate configuration can also be used for offline processing and offline QR code generation.

The certificates can be configured using supported certificate providers, including the Windows Certificate Store.

## Automatic processing

CompuTec KSeF can automate regular KSeF operations through CompuTec AppEngine background processing.

For example, an administrator can configure jobs to:

- Generate XML when an applicable SAP Business One document is created.
- Send ready documents to KSeF on a schedule.
- Recover interrupted KSeF sessions.
- Periodically retry failed sessions.
- Retrieve incoming documents on a schedule.
- Monitor SAP Business One documents created from incoming invoices.

Users can also perform selected operations manually when required.

## Offline processing

CompuTec KSeF supports offline invoice processing when it is configured for the company.

Offline processing uses a configured certificate to support the required offline QR code generation.

The authentication certificate and offline certificate can be configured separately.

:::info[note]

Offline processing must be configured before it can be used. The available QR codes and processing information depend on how the invoice was processed.

:::

## Before you start using CompuTec KSeF

Before business users start processing documents, an administrator or consultant must prepare CompuTec KSeF for the required SAP Business One company.

The setup can include:

1. Installing CompuTec KSeF.
2. Configuring the required KSeF certificates.
3. Configuring CompuTec KSeF Core.
4. Configuring CompuTec AppEngine background processing.
5. Configuring incoming document categories, if incoming document processing is used.
6. Assigning SAP Business One authorizations.

## Where to go next

Choose the documentation according to what you need to do:

### Administrator Guide

Use the [**Install CompuTec KSeF Guide**](/docs/ksef/administrator-guide/installation/plugin-installation) if you want to install CompuTec KSeF.

Continue with [**Configure CompuTec KSeF**](/docs/ksef/administrator-guide/configuration/configuration) for an overview of the complete configuration process.

The Administrator Guide covers:

- Installation.
- KSeF certificates.
- CompuTec KSeF Core configuration.
- Background processing.
- Incoming document categories.
- SAP Business One authorizations.

### User Guide

Use the **User Guide** for day-to-day work with KSeF documents.

The User Guide covers:

- Sending outgoing invoices to KSeF.
- Reviewing outgoing invoice details and processing results.
- Working with incoming invoices.
- Reviewing KSeF sessions.
- Working with QR codes and invoice verification.
- Troubleshooting common processing problems.

If you work with outgoing sales invoices, start with [**Send Outgoing Invoices to KSeF**](/docs/ksef/user-guide/outgoing-invoices/send-outgoing-inv).
