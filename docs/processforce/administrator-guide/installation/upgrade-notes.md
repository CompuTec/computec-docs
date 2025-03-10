---
sidebar_position: 4
toc_max_heading_level: 2
---

# Upgrade Notes

Keeping your SAP Business One environment up to date is crucial for maintaining stability, security, and performance. However, certain upgrades may introduce compatibility challenges with third-party solutions like CompuTec ProcessForce. This document provides an overview of known issues, workarounds, and resolutions related to recent SAP Business One service packs and feature packs. Please review these notes carefully before upgrading to ensure a seamless transition.

---

## SAP Business One SP2308

### [Updated on 17th of October, 2023]

The issues identified in previous versions have been resolved in CompuTec ProcessForce 10.0 Release 22 (R22).

### [Updated on 28th of September, 2023]

There are known issues with **SAP Business One SP2308** affecting ProcessForce. These are expected to be resolved in the upcoming ProcessForce 10.0.22 release. In the meantime, you can use the available [workarounds](../../troubleshooting/sap-business-one-sp2308.md).

### [Updated on 18th of August, 2023]

We are pleased to announce that **SAP Business One FP2305** and **FP2305 HF01** are now officially supported with the latest ProcessForce release – 10.0 R21.

Please note that previous ProcessForce releases will not function with these SAP versions, as SAP has upgraded the TLS version to 1.2. To accommodate this change, we have updated our codebase. However, there are two known issues to be aware of:

- SAP modified the SAP Business One License API configuration, preventing proper API calls if there are incorrect settings in the b1-local-machine.xml file. This can be resolved by updating the **LicenseServerProtocol** value from **CORBA** to **HTTPS** and setting **LicenseServer** to the appropriate hostname or IP address where the SAP Business One License Server is installed. The required changes should be made in the following file: C:\Program Files\SAP\SAP Business One DI API\Conf\b1-local-machine.xml

    ```xml
    <leaf kind="single" name="LicenseServer" type="String">
        <value>HOST_NAME_OR_IP_WITH_SAP_BUSINESS_ONE_LICENSE_SERVER:40000</value>
    </leaf>
    <leaf kind="single" name="LicenseServerProtocol" type="String">
        <value>HTTPS</value>
    </leaf>
    ```

- If you use any UDVs (FMSs) linked to a UDO object (either custom or in ProcessForce forms), you will be unable to open the form. This issue has been reported to SAP, confirmed, and we are awaiting their resolution.

If you decide to use any of the previous versions of SAP Business One, please do not use **FP2105 HF1** and **FP2108**, as there is a DI API bug that does not allow synchronization of ProcessForce Manufacturing Orders to SAP Business One Production Orders:

[3098465 - Error While Updating Production Orders Using the Data Interface (DI API)](https://launchpad.support.sap.com/#/notes/3098465)

It has been fixed by SAP in **FP2208 HF1**.

Please also do not use **FP2208**, as we see strange behavior with extensions and external applications using SAP Business One DI and UI API like AccessViolationException, problems with company database listing, connection issues, etc. They are all linked to backward compatibility with the previous versions of SAP Business One DI and UI API libraries, which we use to support previous SAP Business One versions with newer releases of our applications.
It has been fixed by SAP in **FP2208 HF1.**

## SAP Business One FP2208

### [Updated on 8th of May, 2023]

We are pleased to announce that **SAP Business One FP2208 HF01** is now officially supported. We have completed testing and confirm that CompuTec solutions can be used with this version. For more details, please refer to our previous communications below.

Thank you for your patience.

### [Updated on 5th of April, 2023]

SAP has announced that FP 2208 HF1 was prematurely released due to an internal process issue and has since been withdrawn from the Software Download Center.

Once re-released, further testing will be conducted, and an update will follow.

### [Original message]

Please avoid upgrading your customers to SAP Business One FP2208, as we have observed unusual behavior with extensions and external applications utilizing the SAP Business One DI and UI API. Issues include AccessViolationException, company database listing problems, and connection failures.

These problems stem from backward compatibility concerns with previous versions of the SAP Business One DI and UI API libraries, which we rely on to ensure our applications support both older and newer SAP Business One releases.

We are actively working with SAP to investigate these issues, identify the root cause, and determine a resolution. For any inquiries or assistance regarding these upgrade notes, please contact our Support Team.

---
