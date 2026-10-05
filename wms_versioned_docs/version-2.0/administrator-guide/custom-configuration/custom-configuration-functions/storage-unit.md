---
sidebar_position: 8
---

# Storage Unit

In the world of warehouse management, the ability to efficiently handle Storage Units (SUs) is essential for optimizing operations and ensuring accurate tracking. These settings ensure that your warehouse operations run smoothly, with better control over item allocation, SU creation, and authorization.

---

![SU](./media/storage-units/storage-unit.png)

**After scanning an item into new SU, auto return to: Document Details, Quantity** - This option allows you to specify the window the application will return to after scanning an item into a new SU, such as the Document Details or Quantity window.
    <details>
    <summary>Click here to expand</summary>
    <div>
    **Document Details**

        ![Document Details](./media/storage-units/doc-details-SU.png)

    **Quantity**

        ![Quantity](./media/storage-units/quantity-su.png)
    </div>
    </details>

**Quantity showed on WMS Item Lists** – Selecting this checkbox determines whether the quantity is displayed within the SU or outside of it.
    <details>
    <summary>Click here to expand</summary>
    <div>
     In the example below, you can compare how it will appear if you take 30 pieces of an item—10 pieces will be in the SU, and 20 pieces will be outside the SU.

        ![Quantity in SU](./media/storage-units/quantity-in-su.png)
    </div>
    </details>

**SU FIFO type** - Allows you to set the date to be displayed or created on a new SU. The options are the SU creation date or the creation date of the items within the SU.

**SU Code length** – Defines the number of characters allowed in the SU code.

**SU FIFO authorization** – Enabling this option activates SU creation authorization. It allows you to set up mandatory login for SU creation and specify which warehouses require authorization.

<details>
<summary>Click here to expand</summary>
<div>
When selecting an SU outside the FIFO queue, confirmation is required through the login of the user specified in the SU FIFO Confirmation Authorization Login field (in this case, the manager). The warehouses where this restriction applies are listed in the SU FIFO Authorization Only Warehouses field (in this case, warehouses 01 and 02).

        ![Login](./media/storage-units/su-fifo-authorization.png)

This is how the process would look like if you take the SU outside the FIFO queue:

        ![SU FIFO](./media/storage-units/su-fifo.png)
</div>
</details>

**SU FIFO authorization login** – This option is linked to the previous setting and involves login credentials for SU FIFO authorization. If an SU is selected outside the FIFO queue (i.e., a newer SU is chosen over an older one), confirmation is required via the designated user's login for specific warehouses.

**SU FIFO authorization only Warehouses** – This option, related to the previous two, allows you to specify which warehouses the authorization applies to.

**Enable and set custom barcode to the extra field in Scan SU Info** – Allows assigning a custom barcode to a different field in Scan SU Info.

**Hide SU Options** – When the checkbox is selected, SU-related options (Continue SU, New SU, New SU for Each Qty) will be hidden.

**Hide Continue SU button** – Disables the Continue SU option in Pick Receipt, limiting the available actions to New SU or New SU for Each Qty. This option is grayed out when the Hide SU Options checkbox is selected.

**Turn on UDF lookup/modification in SU info** – Allows editing user-defined fields (UDFs) within the SU Info form during transactions.

**Show SU location info on Delivery, Goods Issue, and SU Operations (New SU)** – Shows the number of available SUs at a specific Bin Location. This feature works only when a warehouse with Bin Locations is selected in the transaction. Ensure the appropriate warehouse is set by disabling the Enable scanning and adding items from distinct warehouses option in Custom Configuration > Delivery.

**Copy CardCode for SU every time new GRPO is added** – Copies the CardCode for an SU automatically each time a new Goods Receipt PO is created.

    ![Copy CardCode](./media/storage-units/copy-card.png)

**Enable Customer Selection on New SU in SU Operations** – Allows selecting a Customer while creating a new SU in SU Operations.

**Take only content when adding existing SU to another SU** – When enabled, only the contents of the SU are added to another SU. When disabled, the entire SU is added, resulting in a multi-level SU.

**SU Pick and Pack: Pick Item only from Base Document** – Restricts the addition of items not listed in the base document during SU Pick and Pack.

**Block quantity changes on Warehouse Info** – Checking this option blocks the possibility of opening an Item line on Whs Info → SU Info

**Stay on Existing SU List after picking/scanning a SU** - Keeps the user on the SU List screen instead of returning to the Document Details screen after picking or scanning an SU.

---
By leveraging the various options available for managing Storage Units, you can streamline your warehouse operations, enhance inventory accuracy, and improve overall efficiency. With these tools, you'll be better equipped to manage SUs effectively and maintain a seamless flow of operations in your warehouse environment.
