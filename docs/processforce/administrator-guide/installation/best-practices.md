---
sidebar_position: 1
---

# Best Practices

Setting up an optimized SAP Business One environment is crucial for ensuring smooth performance, particularly when integrated with CompuTec solutions. This guide outlines best practices for hardware, virtualization, operating system configuration, and SAP HANA replication to maximize system efficiency and reliability.

---

## Hardware Requirements

SAP Business One's performance heavily depends on the underlying hardware. Selecting the right components can significantly enhance efficiency and system responsiveness.

### CPU

For optimal performance, it is recommended to use the most up-to-date hardware platform available.

- SAP HANA is compatible only with Intel CPUs. Supported hardware configurations can be found in the  [Certified and Supported SAP HANA Hardware Directory](https://www.sap.com/dmc/exp/2014-09-02-hana-hardware/enEN/#/solutions?filters=appliance;v:at4).
- Hardware vendors may experience delays in certification. Therefore, it is a common and acceptable practice to select the latest hardware that meets or exceeds the specifications of certified models - particularly regarding CPU cores, clock frequency and cache size.

### Disks

Storage performance is critical for SAP Business One operations.

- Avoid spinning disks and SATA SSDs due to their slower performance and half-duplex operation.
- Use SAS SSDs or, preferably, NVMe disks for superior speed and reliability.
- NVMe disks connect via PCI slots, and older systems may only support software RAID at the OS level. For better performance, hardware platforms supporting Intel Virtual RAID on CPU (Intel VROC) or an external all-flash storage array are recommended.
- SAP HANA data and log volumes should be placed on separate disks.

:::note
For detailed information on SAP HANA storage requirements, please refer to the following documents: [**SAP HANA TDI-Storage Requirements**](https://download.computec.one/media/sap/SAP_HANA_Storage_Requirements.pdf) and [**SAP HANA Tailored Data Center Integration (TDI) Overview**](https://download.computec.one/media/sap/SAP_HANA_Tailored_Data_Center_Integration_Overview.pdf).
:::

In virtualized environments, LVM can be used. However, for physical installations, it is best to avoid it to ensure optimal disk performance.

### Network

A low-latency network is essential for seamless SAP Business One operations.

- SAP does not support networks with latency higher than 1 ms.
- Wi-Fi and WAN connections are not recommended as they do not provide the required responsiveness.

## Virtualization

SAP Business One can be virtualized using VMware, provided specific prerequisites are met.

- Detailed requirements are available in the [SAP Notes](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere).
- Additional information is also available on [VMware site](https://blogs.vmware.com/apps/2018/01/hyper-threading-impact-virtual-sap-sizing-performance-part-1-2.html).

## OS Configuration

Our practical experience is primarily with SUSE Linux Enterprise Server (SLES), so the references provided below are specific to this platform.

- Most necessary system settings can be applied automatically using the `sapconf` tool on standard SUSE systems, or `saptune` on SUSE for SAP Applications versions.
- These tools are described in the SAP Note [1275776 - Linux: Preparing SLES for SAP environments](https://launchpad.support.sap.com/#/notes/1275776).
- Additional guidance is available in the following resources:

        - [SAP blog: `sapconf` – A way to prepare a SLES system for SAP workload – Part 1](https://blogs.sap.com/2018/06/13/sapconf-a-way-to-prepare-a-sles-system-for-sap-workload-part-1)
        - [Recommended SUSE SLES for SAP Settings](https://www.suse.com/support/kb/doc/?id=000019526).

:::caution
Even after using these tools, it is strongly recommended to manually verify your OS configuration against all relevant SAP Notes. Some settings may not be automatically applied and require manual adjustment.
:::

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

---
