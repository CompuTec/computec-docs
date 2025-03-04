---
sidebar_position: 1
---

# Best Practices

Setting up an optimized SAP Business One environment is crucial for ensuring smooth performance, particularly when integrated with CompuTec products. This guide outlines best practices for hardware, virtualization, operating system configuration, and SAP HANA replication to maximize system efficiency and reliability.

---

## Hardware Requirements

SAP Business One's performance heavily depends on the underlying hardware. Selecting the right components can significantly enhance efficiency and system responsiveness.

### CPU

For optimal performance, always use the latest available hardware platform.

- SAP HANA is compatible only with Intel CPUs. Supported hardware configurations can be found in the  [Certified and Supported SAP HANA Hardware Directory](https://www.sap.com/dmc/exp/2014-09-02-hana-hardware/enEN/#/solutions?filters=appliance;v:at4).
- Due to certification delays from hardware vendors, it is common practice to choose the latest hardware that matches certified specifications, particularly CPUs with equal or higher specifications in terms of cores, frequency, and cache.

### Disks

Storage performance is critical for SAP Business One operations.

- Avoid spinning disks and SATA SSDs due to their slower performance and half-duplex operation.
- Use SAS SSDs or, preferably, NVMe disks for superior speed and reliability.
- NVMe disks connect via PCI slots, and older systems may only support software RAID at the OS level. For better performance, hardware platforms supporting Intel Virtual RAID on CPU (Intel VROC) or an external all-flash storage array are recommended.
- SAP HANA data and log volumes should be placed on separate disks.

:::note
For detailed information on SAP HANA storage requirements, please consult the following documents: [**SAP HANA TDI-Storage Requirements**](https://download.computec.one/media/sap/SAP_HANA_Storage_Requirements.pdf) and [**SAP HANA Tailored Data Center Integration (TDI) Overview**](https://download.computec.one/media/sap/SAP_HANA_Tailored_Data_Center_Integration_Overview.pdf).
:::

In virtualized environments, LVM can be used, but for physical installations, it is best to avoid it to ensure optimal disk performance.

### Network

A low-latency network is essential for seamless SAP Business One operations.

- SAP does not support networks with latency higher than 1 ms.
- Wi-Fi and WAN connections are not recommended, as they do not provide the required responsiveness.

## Virtualization

SAP Business One can be virtualized using VMware, provided specific prerequisites are met.

- Detailed requirements are available in the [SAP Notes](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere).
- Additional information is also available on [VMware site](https://blogs.vmware.com/apps/2018/01/hyper-threading-impact-virtual-sap-sizing-performance-part-1-2.html).

## OS Configuration

Since our practical experience is limited to SUSE, all the provided links are for it.

Most settings can be automatically applied by using sapconf in SUSE or saptune in the case of SUSE for the SAP Applications version.

These tools are described in the SAP Note [1275776 - Linux: Preparing SLES for SAP environments](https://launchpad.support.sap.com/#/notes/1275776), and also here:

- [SAP blog: sapconf – A way to prepare a SLES system for SAP workload – Part 1](https://blogs.sap.com/2018/06/13/sapconf-a-way-to-prepare-a-sles-system-for-sap-workload-part-1)
- [Recommended SUSE SLES 4 SAP Settings](https://www.suse.com/support/kb/doc/?id=000019526).

Please verify your OS settings with all the SAP Notes even after running them, as not every setting is applied.

Here are the most important SAP Notes:

- [2235581 - SAP HANA: Supported Operating Systems](https://launchpad.support.sap.com/#/notes/2235581)
- [1944799 - SAP HANA Guidelines for SLES Operating System Installation](https://launchpad.support.sap.com/#/notes/1944799)
- [2684254 - SAP HANA DB: Recommended OS settings for SLES 15 / SLES for SAP Applications 15](https://launchpad.support.sap.com/#/notes/2684254)
- [2382421 - Optimizing the Network Configuration on HANA- and OS-Level](https://launchpad.support.sap.com/#/notes/2382421).

## SAP HANA Replication

For high availability (HA), SAP HANA offers three replication modes: SYNC, SYNCMEM, and ASYNC.

- SYNC and SYNCMEM introduce additional latency as transactions require confirmation from the secondary server.
- Details are available in the [Replication Modes for SAP HANA System Replication](https://help.sap.com/viewer/6b94445c94ae495c83a19646e7c3fd56/2.0.05/en-US/c039a1a5b8824ecfa754b55e0caffc01.html).

## Final Thoughts

To achieve optimal SAP Business One performance, carefully review and implement all the recommended configurations. Ensuring the correct hardware, network setup, OS tuning, and replication methods will lead to a more stable and efficient system that enhances business operations.
