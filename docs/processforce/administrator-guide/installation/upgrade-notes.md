---
sidebar_position: 4
toc_max_heading_level: 2
---

# Upgrade Notes

## SAP Business One SP2308

### [Updated on 17th of October, 2023]

The issues have been solved in the CompuTec ProcessForce 10.0 Release 22 (R22) version.

### [Updated on 28th of September, 2023]

There are known issues with ProcessForce with **SAP Business One SP2308** planned to be fixed in the next Processforce release (10.0.22). For now, you can use these [workarounds](../../troubleshooting/sap-business-one-sp2308.md).

### [Updated on 18th of August, 2023]

We are pleased to announce that **SAP Business One FP2305** and **FP2305 HF01** are now officially supported with the latest ProcessForce release - 10.0 R21.
Previous ProcessForce releases will not work as SAP changed the TLS version to 1.2, and we needed to accommodate this change in our codebase. However, please be aware there are two known issues with these versions:

- SAP changed the SAP Business One License API configuration in a way that we cannot call it properly on these versions if there are wrong settings in the b1-local-machine.xml file. This can be easily fixed by changing the **LicenseServerProtocol**'s value from **CORBA** to **HTTPS**, and setting **LicenseServer** to a proper hostname or IP address where SAP Business One License Server is installed in the following file: C:\Program Files\SAP\SAP Business One DI API\Conf\b1-local-machine.xml:

    ```xml
    <leaf kind="single" name="LicenseServer" type="String">
        <value>HOST_NAME_OR_IP_WITH_SAP_BUSINESS_ONE_LICENSE_SERVER:40000</value>
    </leaf>
    <leaf kind="single" name="LicenseServerProtocol" type="String">
        <value>HTTPS</value>
    </leaf>
    ```

- If you use any UDVs (FMSs) attached to a UDO object (user's created or almost all ProcessForce forms) you cannot open the form. We reported this issue to SAP, it's confirmed, and are still waiting for an answer on how they will fix it.

If you decide to use any of the previous versions of SAP Business One, please do not use **FP2105 HF1** and **FP2108**, as there is a DI API bug that does not allow synchronization of ProcessForce Manufacturing Orders to SAP Business One Production Orders:

[3098465 - Error While Updating Production Orders Using the Data Interface (DI API)](https://launchpad.support.sap.com/#/notes/3098465)

It has been fixed by SAP in **FP2208 HF1**.

Please also do not use **FP2208**, as we see strange behavior with extensions and external applications using SAP Business One DI and UI API like AccessViolationException, problems with company database listing, connection issues, etc. They are all linked to backward compatibility with the previous versions of SAP Business One DI and UI API libraries, which we use to support previous SAP Business One versions with newer releases of our applications.
It has been fixed by SAP in **FP2208 HF1.**

## SAP Business One FP2208

### [Updated on 8th of May, 2023]

We are pleased to announce that **<u>SAP Business One FP2208 HF01</u>** is now officially supported. We have completed testing and confirm that CompuTec solutions can be used with this version. For more information, please read our previous communications below.

Thank you for your patience.

### [Updated on 5th of April, 2023]

SAP has announced that due to an internal process issue, FP 2208 HF1 was prematurely released and subsequently withdrawn from the Software Download Center.

Once this version is available again, we will continue the tests. Once the tests are completed, we will inform you.

### [Original message]

Please don't upgrade your customers to SAP Business One FP2208 as we see strange behavior with extensions and external applications using SAP Business One DI and UI API like AccessViolationException, problems with company database listing, connection issues, etc.

They are all linked to backward compatibility with previous versions of SAP Business One DI and UI API libraries, which we use to support previous SAP Business One versions with newer releases of our applications.

We are in contact with SAP to analyze these issues, find the root cause, and find a way to resolve them.

If you have any questions regarding this topic, please don't hesitate to contact our Support Team.
