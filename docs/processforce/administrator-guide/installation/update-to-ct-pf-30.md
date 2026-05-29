---
sidebar_position: 3
---

# Update to CompuTec ProcessForce 3.0

CompuTec is focusing future product development on the modern generation of **CompuTec ProcessForce 3.0** and **CompuTec AppEngine 3.0**, built on modern **.NET**.

If you are currently using **CompuTec ProcessForce 2.0** (**.NET Framework**) or **CompuTec AppEngine 2.0**, we recommend planning your update to **CompuTec ProcessForce 3.0** and **CompuTec AppEngine 3.0**.

**CompuTec ProcessForce 3.0** is installed and managed as a plugin in **CompuTec AppEngine 3.0**. To use **CompuTec ProcessForce 3.0**, you must first install and configure **CompuTec AppEngine 3.0**.

## End-of-Support Information

:::warning[important]
After **31 December 2026**, updates, fixes, and new development will continue **only for CompuTec ProcessForce 3.0** and **CompuTec AppEngine 3.0**.
:::

The following lifecycle applies only to **CompuTec ProcessForce 2.0** or **CompuTec AppEngine 2.0** (**.NET Framework**).

| Phase | Date | Scope |
| --- | --- | --- |
| Maintenance mode | Effective immediately | Bug fixes only |
| Maintenance releases | Through 2026 | Quarterly releases |
| End of updates | 31 December 2026 | No further updates for .NET Framework editions |

This change does **not** affect:

- supported **SAP Business One 10.0** versions,
- **CompuTec ProcessForce 3.0**,
- **CompuTec AppEngine 3.0**,
- **CompuTec WMS**.

## Before You Start

Before starting the update:

- Identify all systems running **CompuTec ProcessForce 2.0** (**.NET Framework**).  
- Check whether your environment uses **CompuTec AppEngine 2.0**.  
- Review any custom extensions, integrations, or internal developments.

    :::info[note]
    If your environment contains custom developments, contact [**CompuTec Support**](https://support.computec.pl) before updating.
    :::

- Plan a maintenance window for the update.  
- Create backups for your environment.  

:::warning[Important]

**CompuTec AppEngine 3.0** introduces a redesigned architecture. All CompuTec components within a single environment must be updated together to compatible versions.
:::

## Choose Your Update Scenario

Choose the scenario that matches your environment.

### Scenario 1: Standard environment

Choose this scenario if your environment does **not** use:

- CompuTec ProcessForce API  
- custom plugins  
- custom APIs  
- custom extensions  
- custom integrations

To update to **Computec ProcessForce 3.0**, follow these steps:

1. Install and configure **CompuTec AppEngine 3.0**.  
2. Install the **CompuTec ProcessForce 3.0** plugin.  
3. Validate the installation.

:::info[Note]

If **CompuTec ProcessForce API** is detected on the server where **CompuTec AppEngine 3.0** is installed, it is removed automatically during installation.
:::

### Scenario 2: Environment with custom developments

Choose this scenario if your environment uses:

- CompuTec ProcessForce API  
- custom plugins  
- custom APIs  
- custom integrations  
- custom background jobs  
- partner or customer extensions  

In this case, additional update work may be required.

Because **CompuTec ProcessForce 3.0** runs on **CompuTec AppEngine 3.0** and uses a new architecture, existing custom developments may need to be reviewed, adapted, or rebuilt.

Before starting the update, contact your **CompuTec partner** or [**CompuTec Support**](https://support.computec.pl).

## Update CompuTec ProcessForce 2.0 to CompuTec ProcessForce 3.0

To update to CompuTec ProcessForce 3.0 for the [standard environment](https://learn.computec.one/docs/processforce/administrator-guide/installation/update-to-ct-pf-30#scenario-1-standard-environment), follow these steps:

### Step 1: Install and configure CompuTec AppEngine 3.0

The installation includes:
    - installing **CompuTec AppEngine** service,  
    - configuring the **CompuTec AppEngine** database,  
    - configuring the **CompuTec Administration Panel**,  
    - connecting to the **SAP Business One System Landscape Directory (SLD)**,  
    - activating companies,  
    - configuring background processing.  

    :::note[info]
    For detailed installation instructions, see [CompuTec AppEngine Installation and Configuration guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation).
    :::

### Step 2. Install CompuTec ProcessForce 3.0 Plugin

After CompuTec AppEngine 3.0 is installed and configured:

1. Open **CompuTec AppEngine Administration Panel**.  
2. Install the **CompuTec ProcessForce 3.0** plugin.  
3. Complete the required configuration.  
4. Assign the plugin to the required companies.  

:::note[info]
For detailed instructions, see: [CompuTec Plugin Installation guide](http://localhost:3000/docs/appengine/plugins-user-guide/install-plugin).
:::

### Step 3. Check the environment

After the update, verify the following:

- **CompuTec AppEngine service** is running.  
- Database connection is working.  
- Companies are activated.  
- **CompuTec ProcessForce 3.0** plugin is installed.  
- **SAP Business One** connectivity is working.  
- Background processing is operational.  
- Integrations and custom extensions function correctly.

## Need Help?

For update planning, technical questions, or partner enablement:

- [CompuTec Support](https://support.computec.pl)
- [Partner inquiries](mailto:partners@computec.one)

We recommend contacting your CompuTec partner or our team early in the planning process, especially if your environment includes custom extensions or integrations.
