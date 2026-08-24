---
sidebar_position: 1
---

# Configure CompuTec KSeF

This guide provides an overview of the configuration required to start working with **CompuTec KSeF**.

The configuration includes:

- Installing and configuring KSeF certificates.
- Configuring the CompuTec KSeF Core plugin in CompuTec AppEngine.
- Configuring background processing jobs.
- Configuring incoming document categories, if you retrieve documents from KSeF.
- Assigning the required SAP Business One authorizations.

After completing the required configuration, CompuTec KSeF can generate and send outgoing invoices to KSeF and, if required, retrieve and process incoming KSeF documents.

## Before you start

Before you begin, make sure that:

- **CompuTec AppEngine** is installed and configured. [Read more](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation)
- The **CompuTec KSeF** plugin is installed for the required company. [Read more](https://learn.computec.one/docs/ksef/administrator-guide/installation/plugin-installation)
- You have administrator access to the **CompuTec AppEngine Administration Panel**.
- You have the required KSeF certificates and their private key passwords.
- You have administrator permissions on the Windows machine where the certificates will be installed.
- You have sufficient permissions in SAP Business One to configure user authorizations.
- You configured the session lifetime according to your environment and SAP recommendations.

### Notes

- CompuTec KSeF requires an extended **Keycloak** session lifetime. If the session expires too early, KSeF operations may be interrupted. For detailed instructions, see the [SAP Business One IAM/Keycloak documentation](https://help.sap.com/docs/SAP_BUSINESS_ONE_IAM/548d6202b2b6491b824a488cfc447343/0de0a124d0934ba4b03b92a7160ea921.html).
- The configuration examples in this documentation use certificate authentication and the **Windows Certificate Store**.

## Configure KSeF certificates

Import the required certificates into the Windows Certificate Store, grant the account used by CompuTec AppEngine access to their private keys, and copy their thumbprints.

You will use the certificate thumbprints when you configure authentication and offline processing in the CompuTec KSeF Core plugin.

:::note[info]
See [**Configure KSeF Certificates for CompuTec KSeF**](/docs/ksef/administrator-guide/configuration/config-certs).
:::

## Configure CompuTec KSeF Core

Configure the CompuTec.KSeF.Core plugin to define:

- The KSeF environment.
- Authentication.
- XML generation.
- KSeF schema settings.
- File storage.
- Authentication and offline certificates.
- Incoming document retrieval, if required.

:::note[info]
See [**Configure CompuTec KSeF Core**](/docs/ksef/administrator-guide/configuration/config-core).
:::

## Configure CompuTec KSeF background processing

Enable the background processing jobs required for your KSeF process.

Depending on your configuration, these jobs can:

- Generate KSeF XML files.
- Send documents to KSeF.
- Retry interrupted or failed sessions.
- Retrieve incoming documents.
- Monitor incoming document processing.

:::note[info]
See [**Configure CompuTec KSeF Background Processing**](/docs/ksef/administrator-guide/configuration/background-processing).
:::

## Configure incoming document categories

Complete this configuration if you use CompuTec KSeF to retrieve and process incoming KSeF documents.

Incoming document categories define how documents are downloaded, matched, and converted into SAP Business One drafts.

:::note[info]
See [**Configure CompuTec KSeF Incoming Document Categories**](/docs/ksef/administrator-guide/configuration/config-doc-cat).
:::

### Note

If you use CompuTec KSeF only to send outgoing invoices, you do not need to configure incoming document categories.

## Configure SAP Business One authorizations

Assign the required KSeF authorizations according to each user's responsibilities.

For example, users can have access to outgoing invoices, incoming invoices, or administrative configuration.

:::note[info]
See **Configure SAP Business One Authorizations for CompuTec KSeF**.
:::

## Result

CompuTec KSeF is configured for the selected company.

Depending on the configuration and background processing jobs you enabled, users can:

- Generate and send outgoing invoices to KSeF.
- Retrieve and process incoming KSeF documents.
- Use certificate authentication for KSeF communication.
- Generate the required QR codes for offline processing.
- Use CompuTec KSeF functions according to their assigned SAP Business One authorizations.

CompuTec AppEngine runs the configured KSeF processes according to the enabled background processing jobs and their schedules.
