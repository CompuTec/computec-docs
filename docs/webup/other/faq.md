---
sidebar_position: 1
---

# FAQ

## General

**What is CompuTec WebUp?**  
CompuTec WebUp is a **customization and automation toolkit** for the **SAP Business One Web Client**, built on **CompuTec AppEngine 3.0**.

**What are the components of CompuTec WebUp?**  
The solution consists of three components:

1. **CompuTec WebUp App** – runs on AppEngine 3.0 and provides all customization and automation capabilities.  
2. **CompuTec WebUp Manager** – a browser-based side panel that allows configuration and live preview of customizations.  
3. **CompuTec WebUp Client** – a browser extension enabling advanced customization beyond what is available in the *SAP Business One Web Client Extensibility Framework*.

**What is the purpose of these components?**  

- **CompuTec WebUp App** – handles all customization and automation logic and stores persistent configuration settings.  
- **CompuTec WebUp Manager** – provides the user interface for creating, editing, and testing configurations.  
- **CompuTec WebUp Client** – extends the SAP Business One Web Client where the standard extensibility framework is limited.  
  It’s optional and required only for scenarios not yet supported natively by SAP. Over time, as SAP extends its own framework, the need for this component will diminish.

**Where are my customizations stored?**  
All configurations are stored in the **company database**.  
Those supported by the *SAP Business One Web Client Extensibility Framework* are deployed as standard Web Client Extensions via the **SAP Business One Extension Manager**.

**What can I customize?**  
WebUp provides access to nearly all features exposed through the *SAP Business One Web Client Extensibility Framework*, along with **additional capabilities**, such as embedding CompuTec App views directly into SAP Web Client sections.

**Does CompuTec WebUp work with both SAP Business One Desktop and Web Clients?**  
No — CompuTec WebUp is designed **exclusively for the SAP Business One Web Client**.

**Is CompuTec WebUp available for both SAP HANA and Microsoft SQL databases?**  
Yes, WebUp fully supports both database platforms.

**What version of SAP Business One is required?**  
The **minimum version is SAP Business One 10 FP 2502**, but we recommend using the **latest available release**.  
See the CompuTec [Documentation Center](../system-requirements.md) for up-to-date compatibility details.

**Does CompuTec WebUp support on-premise and cloud deployment?**  
Yes. It supports both **on-premise** and **cloud** environments, including **private** and **public cloud** deployments via the **SAP Customer Cloud Center (CCC)**.

---

## Installation & Configuration

**How do I install CompuTec WebUp?**  

You need to [install](docs/appengine/administrators-guide/configuration-and-administration/installation) CompuTec AppEngine 3.0 and download the **CompuTec WebUp App** from the CompuTec AppEngine App Store. You will also need to install **CompuTec WebUp Manager** and **CompuTec WebUp Client** for Google Chrome and Microsoft Edge, respectively, from their extension stores. However, at the time of writing, publication of the extensions in the Google Chrome and Microsoft Edge stores is pending. In the meantime, you can install the browser extensions manually by following the steps in the [installation guide](./extension-manual-installation.md).
:::info
Refer to the official [installation guide](../installation-and-activation.md) for detailed steps.
:::
**Do I need CompuTec AppEngine to use CompuTec WebUp?**  
Yes, **AppEngine 3.0** is required, but it is provided **free of charge**.

**Can I apply settings for specific users or groups?**  
Currently not. This limitation comes from the **SAP Business One Web Client Extensibility Framework**.

**How can I copy my customizations between company databases?**  
A built-in **export/import feature** will be available in future releases.  
For now, assign the CompuTec WebUp extension to additional company databases via the **SAP Business One Extension Manager**.

**Does WebUp work with Apps developed using the CompuTec AppEngine plugin framework (SAPUI5 UIs)?**  
Not yet, but this functionality is planned for a future release.

---

## Browsers & Compatibility

**Which web browsers are supported for creating customizations?**  
We recommend **Google Chrome**.  
**Microsoft Edge** is also supported, although due to a known issue (reported to Microsoft), the WebUp panel may disappear when switching tabs.

**Will Safari or Mozilla Firefox be supported?**  
Yes, these browsers will be supported in future releases.

**Which browsers can I use to run customized SAP Business One Web Client views?**  
You can use **any browser supported by the SAP Business One Web Client**, since deployed configurations become standard **SAP Web Client Extensions**.

---

## Licensing & Pricing

**What is the price of CompuTec WebUp during the preview program?**  
Preview releases are **free of charge** for SAP Business One Partners and Customers until **March 2026**.

**How long will the preview program last, and when is the official release planned?**  
The preview runs until **March 2026**, when the **official release** will become available.

**Can I continue to use the preview version after the official release?**  
Yes. However, to receive **support and maintenance**, you will need to switch to a licensed version.

**Is it required to purchase CompuTec WebUp for all SAP Business One users?**  
No, but it’s **recommended** for all users working with the Web Client.  
Users without WebUp entitlement will not see any applied customizations.

**Do I need a license to use CompuTec WebUp Manager?**  
No license is required to use **WebUp Manager** for configuration.  
However, end users applying the customizations must have valid WebUp entitlements.

**What pricing models are available?**  
Both **perpetual** and **subscription** models are offered.

**What is the price for the software?**  
Pricing aligns with the **SAP Business One regional price list**.  
Example for the **EMEA region**:  
- Initial bundle (5 users): **1,350 EUR perpetual** or **46 EUR/month** subscription.  
- Additional bundles (5 users): **675 EUR perpetual** or **23 EUR/month**.  
For details, contact your SAP Partner or email **webup@computec.one**.

**Do I need to be a CompuTec Partner to sell WebUp?**  
Yes. You must hold a valid **CompuTec Partnership Agreement**.  
To apply, contact **partners@computec.one**.

**As a CompuTec Partner, do I need a license for demo or test environments?**  
No. Partners may use WebUp **for free** in demo or testing environments.

**As an SAP Partner using SAP Business One internally, do I need to purchase WebUp?**  
Yes, for production environments where you use WebUp to customize your own Web Client.

**As a customer, do I need to purchase WebUp for development or test environments?**  
Yes. All users executing configured automations or customizations must be licensed, regardless of the environment.

**Is WebUp licensed per company database?**  
No. Licensing is **per user**, not per database.

---

## Support & Roadmap

**Will new releases be provided during the preview period?**  
Yes — preview versions will include **bug fixes and feature enhancements**.

**Is a public product roadmap available?**  
Yes — the roadmap is published in the CompuTec Documentation Center.

**Can I raise a support ticket or provide feedback?**  
Yes — support and feedback tickets can be submitted through the [CompuTec Helpdesk Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp).

**Will support and maintenance be available for the official release?**  
Yes — they will be included as part of your **CompuTec WebUp license or subscription**.
