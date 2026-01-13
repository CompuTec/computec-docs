---
sidebar_position: 1
---

# Best Practices

Creating an efficient and stable SAP Business One environment is critical for business performance, especially when integrating with **CompuTec ProcessForce** and other CompuTec solutions. This page explains the architectural and configuration principles that help maximize performance, reliability, and system longevity.

## Hardware Considerations

SAP Business One performance is closely tied to the underlying hardware. Selecting modern, certified hardware ensures optimal responsiveness and compatibility.

### CPU

- **Intel CPUs only** are supported for SAP HANA environments.
- The most recent hardware is recommended, even if not yet listed in SAP’s certification directory, as long as it matches or exceeds certified configurations in core count, clock speed, and cache.
- SAP-certified configurations are available in the [SAP HANA Hardware Directory](https://www.sap.com/dmc/exp/2014-09-02-hana-hardware/enEN/#/solutions?filters=appliance;v:at4).

### Storage

Disk performance significantly affects application responsiveness:

- Avoid **spinning disks** and **SATA SSDs** due to slower and half-duplex performance.
- Prefer **NVMe** or **SAS SSDs** for higher throughput and reliability.
- For optimal SAP HANA deployment:
  - Use **separate disks** for data and log volumes.
  - Employ **Intel VROC** or an **external all-flash array** for physical systems with RAID support.

:::note[For SAP HANA storage guidelines, see:]

- [SAP HANA TDI Storage Requirements (PDF)](https://download.computec.one/media/sap/SAP_HANA_Storage_Requirements.pdf)
- [SAP HANA Tailored Data Center Integration Overview (PDF)](https://download.computec.one/media/sap/SAP_HANA_Tailored_Data_Center_Integration_Overview.pdf)

ℹ️ In virtual environments, **LVM** can be used. For physical installations, avoid LVM to maintain performance.
:::

## Network Configuration

Low network latency is essential for smooth SAP Business One operations.

- SAP recommends latency below **1 ms**.
- Avoid **Wi-Fi** or **WAN connections** in production environments.
- A wired, local, low-latency setup is strongly preferred.

## Virtualization

SAP Business One supports virtualization (e.g., via **VMware**) but requires strict adherence to SAP guidelines:

- Virtualization is viable when hardware sizing, CPU reservations, and network performance are well-aligned.
- Refer to SAP’s official [HANA on VMware documentation](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere) and [VMware performance blog](https://blogs.vmware.com/apps/2018/01/hyper-threading-impact-virtual-sap-sizing-performance-part-1-2.html) for specifics.

## Operating System Configuration

Our recommendations are based on real-world experience with **SUSE Linux Enterprise Server (SLES)**.

- Tools like **`sapconf`** and **`saptune`** help automate SAP-compliant OS configurations.
- Use `sapconf` on standard SLES systems and `saptune` on **SLES for SAP Applications**.
- These tools are explained in [SAP Note 1275776](https://launchpad.support.sap.com/#/notes/1275776).

:::note[Additional resources:]

- [SAP Blog: Preparing SLES using sapconf (Part 1)](https://blogs.sap.com/2018/06/13/sapconf-a-way-to-prepare-a-sles-system-for-sap-workload-part-1)
- [SUSE: Recommended SLES for SAP Settings](https://www.suse.com/support/kb/doc/?id=000019526)

⚠️ Even after applying these tools, verify your OS settings manually against SAP Notes. Not all configurations are applied automatically.
:::

### Key SAP Notes for OS Configuration

- [2235581 – Supported Operating Systems](https://launchpad.support.sap.com/#/notes/2235581)
- [1944799 – Guidelines for SLES Installation](https://launchpad.support.sap.com/#/notes/1944799)
- [2684254 – Recommended Settings for SLES 15](https://launchpad.support.sap.com/#/notes/2684254)
- [2382421 – Optimizing Network Config for SAP HANA](https://launchpad.support.sap.com/#/notes/2382421)

## SAP HANA Replication: High Availability Considerations

For high availability (HA), SAP HANA supports three replication modes:

| Mode | Description |
| ---------- | ------------- |
| **SYNC** | Primary waits for acknowledgment from the secondary system before committing a transaction. |
| **SYNCMEM** | Similar to SYNC but with in-memory acknowledgment (faster, less durable). |
| **ASYNC** | Primary does not wait; best for geographically distributed systems. |

Each mode affects **latency** and **performance**. Choose based on your business continuity needs.

:::note[Learn more:]
[SAP Help - Replication Modes for SAP HANA System Replication](https://help.sap.com/viewer/6b94445c94ae495c83a19646e7c3fd56/2.0.05/en-US/c039a1a5b8824ecfa754b55e0caffc01.html)
:::

## Conclusion

Optimal system performance for SAP Business One - especially when extended with CompuTec solutions - requires careful attention to:

- Certified and performance-capable hardware
- Fast and reliable storage and network infrastructure
- Correct virtualization and OS-level tuning
- Thoughtful selection of SAP HANA replication strategy

Following these principles results in a more stable, scalable, and performant business system environment.
