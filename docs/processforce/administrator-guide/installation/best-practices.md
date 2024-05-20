---
sidebar_position: 1
---

# Best Practices

Here you can find notes on best practices for setting up an SAP Business One environment, which plays a crucial role in CompuTec products' performance.

---

## Hardware Requirements

SAP Business One's performance is highly dependent on the overall hardware performance.

### CPU

It would be best if you use the latest available hardware platform.

For SAP HANA, only Intel CPUs are compatible. You can find all the supported hardware configurations in the [Certified and Supported SAP HANA Hardware Directory](https://www.sap.com/dmc/exp/2014-09-02-hana-hardware/enEN/#/solutions?filters=appliance;v:at4). However, in many cases, there's often a significant delay when hardware vendors certify their latest platforms. Therefore, it's a widespread practice to opt for the latest available hardware platform that matches the certified hardware specifications, including CPUs with equal or higher specifications in terms of cores, frequency, and cache.

### Disks

Avoid using spinning disks due to their slow performance, as well as SATA SSD disks, which operate at half-duplex. Instead, opt for SAS SSDs or, preferably, NVMe disks.

As NVMe disks connect to PCI slots, older systems may only support software RAID at the operating system level. For better performance, it's recommended to use hardware platforms that support Intel Virtual RAID on CPU (Intel VROC) or use an external all-flash storage array.

SAP HANA data and log volumes should be placed on different disks.

:::note
For detailed information on SAP HANA storage requirements, please consult the following documents: [**SAP HANA TDI-Storage Requirements**](https://download.computec.one/media/sap/SAP_HANA_Storage_Requirements.pdf) and [**SAP HANA Tailored Data Center Integration (TDI) Overview**](https://download.computec.one/media/sap/SAP_HANA_Tailored_Data_Center_Integration_Overview.pdf).
:::

In a virtualized installation, LVM can be utilized, but in a physical installation, it's recommended to avoid it to achieve optimal disk performance.

### Network

A low-latency network should be used between all SAP Business One components. SAP does not support networks with latency higher than 1 ms. Therefore, Wi-Fi and WAN connections do not guarantee a pleasant experience in the responsiveness of the system.

## Virtualization

Virtualizing SAP Business One installation is restricted to VMware, and there are particular prerequisites for the setup.

They are thoroughly outlined on the page with links to [SAP Notes](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere).

Additional information is also available on [VMware site](https://blogs.vmware.com/apps/2018/01/hyper-threading-impact-virtual-sap-sizing-performance-part-1-2.html).

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

In case of using SAP HANA replication for high availability (HA), three modes are available: SYNC, SYNCMEM, and ASYNC. Please be aware that SYNC and SYNCMEM provide additional bottlenecks on each transaction since confirmation is required on the second server.

You can find the details in the SAP documentation: [Replication Modes for SAP HANA System Replication](https://help.sap.com/viewer/6b94445c94ae495c83a19646e7c3fd56/2.0.05/en-US/c039a1a5b8824ecfa754b55e0caffc01.html).

## Final Thoughts

All the settings described in the above links and SAP Notes should be carefully and thoroughly read, understood, and implemented, as each of them plays a role in enhancing the overall system performance, used by customers for many years.
