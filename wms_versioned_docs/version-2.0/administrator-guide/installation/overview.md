---
sidebar_position: 1
---

# Installation Overview

This guide provides an overview of the installation process for **CompuTec WMS 2.0** and **CompuTec WMS 3.0**.

The installation process differs depending on the version you are using. Select your version below and complete the steps in the order shown.

:::warning[important]
Support for **CompuTec WMS 2.0** will end soon. We recommend planning your upgrade to **CompuTec WMS 3.0 Plugin** to continue receiving regular support and maintenance updates. [Read more](/docs/wms/administrator-guide/installation/overview)
:::

Complete the following steps to install and configure **CompuTec WMS 2.0**.

## Before you start

Before you start, review the [CompuTec WMS requirements](/docs/wms/2.0/administrator-guide/installation/requirements) and make sure your environment meets the requirements for your WMS version.

## Step 1: Download and install CompuTec WMS Server

1. Download the **CompuTec WMS Server** installation package from [CompuTec WMS Downloads](/docs/wms/2.0/releases/download).

2. Install and configure the **CompuTec WMS Server**.
    :::note[info]
    For detailed instructions, see the [WMS Server Installation Guide](/docs/wms/2.0/administrator-guide/installation/wms-server/overview)
    :::

## Step 2: Install CompuTec ProcessForce API, if required

If **CompuTec ProcessForce** is installed in the SAP Business One environment, you must also install the **CompuTec ProcessForce API**.

CompuTec WMS detects that CompuTec ProcessForce is installed and requires the CompuTec ProcessForce API to communicate with it correctly.

Download the appropriate API installation package from [CompuTec ProcessForce 2.0 Downloads](/docs/processforce/2.0/releases/download#computec-processforce-api).

:::info[Note]
If CompuTec ProcessForce is not installed in your environment, you can skip this step.
:::

## Step 3: Configure CompuTec WMS licensing

Configure the required **CompuTec WMS licenses** and assign them according to your environment.

:::note[info]
For detailed instructions, see [WMS Licensing](/docs/wms/2.0/administrator-guide/installation/wms-licensing).
:::

## Step 4: Install CompuTec WMS Client

Download and install **CompuTec WMS Client** on the devices that will be used for warehouse operations.

:::note[info]
For detailed instructions, see [Download CompuTec WMS Client](/docs/wms/2.0/administrator-guide/installation/wms-client/computec-wms-client-download).
:::

## Step 5: Configure CompuTec WMS Client

Connect the **CompuTec WMS Client** to the **CompuTec WMS Server** and configure the required client settings.

:::note[info]
For detailed instructions, see [Configure CompuTec WMS Client](/docs/wms/2.0/administrator-guide/installation/wms-client/configuration).
:::

## Additional Configuration

Depending on your environment and warehouse processes, additional configuration may be required, such as:

- CompuTec Gateway Service for weight scales and label printing
- RDP scanner configuration
- SAP Business One settings
- Barcode configuration
- Company-specific WMS settings

For company-specific application settings, see [Custom Configuration](/docs/wms/2.0/administrator-guide/custom-configuration/overview).
