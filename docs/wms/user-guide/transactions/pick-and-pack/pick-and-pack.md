---
sidebar_position: 1
---

# Pick & Pack

:::caution
    Pick and Pack are not supported for Items with ‘Issue Primarily by’ (SAP Business One option) set to ‘Bin Locations.'
:::

Pick and Pack is a fulfilment process during which Items are selected or “picked” from the warehouse and then “packed” into a container for shipping or to be transferred to another internal location such as another warehouse or the production line.

The CompuTec WMS Pick and Pack and Production Manager is a tool that supports the pick and pack process by generating Pick Lists based on a variety of SAP Business One documents:

* Sales Orders;
* A/R Reserve Invoices;
* SAP Business One Production Orders;
* Inventory Transfer Requests.

The warehouse operatives can view these Pick Lists on their CompuTec WMS mobile device and record the picking and subsequent packing of the Items listed there.

You can see how CompuTec WMS Pick and Pack works in our demonstration video. > [CompuTec WMS Pick and Pack Demonstration](https://www.youtube.com/watch?v=pNzveSz-56w)

## Support of Storage Units

1. New Storage Units
2. Existing Storage Units (support only for Storage Units that have the same Items that are on the Pick List)

A top bar was added – for displaying an Storage Unit that is now in packing mode.

The change is related to the Pick List from the following documents:

1. Sales Order
2. Production Orders
3. Reserve Invoices
4. Inventory Transfer Requests

Support for both preallocation and without it (Custom Configuration: it is possible to block picking from different than assigned).

![WMS](./media/WMS.webp)

![picklist](./media/picklist.webp)

## List Display

The list will be displayed based on Custom Configuration settings

1. Standard (all Pick Lists).

    ![List](./media/list.webp)
2. Customer – Date

    ![List](./media/customer.webp)
3. Date – Customer

    ![List](./media/dc.webp)

    ![alt text](./media/dc2.webp)

## Document Details

:::caution
    All the data is automatically saved during the picking
:::

![Document Details](./media/p1.webp)

![Document Details](./media/p2.webp)

Buttons:

    - Cancel – going back to the main menu.
    - More – a dropdown list
    - Info – base document header remarks.
    - Accept – finishing a Pick List (no the floppy disk button anymore)
    - Add Storage Unit – adding a Storage Unit

        1. New Storage Unit
        2. Existing Storage Unit

    - Back – going back to the document list.

:::info
    Using Pick List supported.

    Pick List – visible for all selected users:

    Custom Configuration option:

    1. if the picker field is filled, then the pick list is visible only for this picker.

    2. if the picker field is empty in SAP B1, the pick list is visible for everyone + the CC setting.

    The picker is saved, and now only this picker can picker can continue the Pick List.
    Or the picker field stays blank.
:::

Manual and scanning quantity picking stays the same.

## A significant change

![Change](./media/p3.webp)

Each Item from now on will have a separate line for localization. The same way it is in SAP Business One.

![Change](./media/p4.webp)

Without preallocation (the bold font for the proposed location, sorted for the picker).

![Preallocation](./media/p5.webp)

With preallocation (the list sorted for the picker).

![Preallocation](./media/p6.webp)

Sorting Items by the closest location added (for speeding up the pick and pack process).

## 1. New Storage Unit

![Storage Unit](./media/p7.webp)

Choosing a new Storage Unit leads to the form.

Buttons:

    - Back – canceling an Storage Unit – it should be Cancel
    - Select all – checking a target Warehouse/Bin for an Storage Unit
    - Forward – Document Details creation of an Storage Unit and move to the Document Details form
    - Attachment – move to the UDF for the Storage Unit form

![Storage Unit](./media/p8.webp)

After SU is created, its number is displayed in the top bar. It means that the Item collection for this Storage Unit is active.

![Storage Unit](./media/p9.webp)

Clicking the top bar leads to an Storage Unit.

![Storage Unit](./media/p10.webp)

To choose the Storage Unit again, you can scan a code (e.g., Storage Unit Code) or select the Storage Unit manually from the list.

Buttons:

    - Return – Document Details return to the Document Details form
    - Search Storage Unit – an Storage Unit again (it will be displayed in the top bar)
    - Storage Unit Info – Storage Unit information
    - Back – go back to the Document Details form
    - Remove – removing from the Storage Unit list.

![Storage Unit](./media/p11.webp)

When the Storage Unit is chosen, clicking the line again opens a form.

Items available in the Storage Unit are displayed here. You can also edit them from here.

Buttons:

    - Return – go back to the Document Details form
    - SU Warehouse – change the target location for the Storage Unit
    - SU Info – Storage Unit information
    - Back – go back to the Document Details form
    - Remove – remove from the SU list

![Storage Unit](./media/p12.webp)

Editing Quantity is possible directly from the Item line level and by entering a line in the Storage Unit.

![Storage Unit](./media/p13.webp)

![Storage Unit](./media/p14.webp)

![Storage Unit](./media/p15.webp)

Editing quantity in SU does not require SU to be loaded in the top bar. You can do in from this level.

## 2. Existing Storage Unit

![Storage Unit](./media/p16.webp)

![Storage Unit](./media/p17.webp)

Buttons:

Return, Back – go back to the document Details form

In the case of Existing Storage Unit, choosing an Storage Unit with the same Items as in the Pick List will be possible

## 3. Pre-allocation

### Scenario 1: When pre-allocation is not used

1. None Items

    ![Preallocation](./media/p18.webp)
    ![Preallocation](./media/p19.webp)
    ![Preallocation](./media/p20.webp)
2. Batch Items

    ![Preallocation](./media/p21.webp)
    ![Peallocation](./media/p22.webp)
    ![Preallocation](./media/p23.webp)
    ![Preallocation](./media/p24.webp)
3. Serial Items

    ![Serial Items](./media/p25.webp)
    ![Serial Items](./media/p26.webp)
    ![Serial Items](./media/p27.webp)

### Scenario 2:  When pre-allocation is used

1. None Items

    ![None Items](./media/p28.webp)
    ![None Items](./media/p29.webp)
2. Batch Items

    ![Batch Items](./media/p30.webp)
    ![Batch Items](./media/p31.webp)
3. Serial Items

    ![Serial Items](./media/p32.webp)
    ![Serial Items](./media/p33.webp)

## 4. Scanning Management

![Scanning Management](./media/p34.webp)

## 5. Custom Configuration

![Custom Configuration](./media/p35.webp)

1. Hide the Storage Unit button.
2. Picking Items only by scanning.
3. Quantity must be confirmed by clicking a button.

## 6. Changes

1. Document Details
Items displayed the way they are on the Pick List, not like on the Sales Order. (On Sales Order, there can be one line, but if it is going to be taken from two locations, then on the Pick List, it will be split into two lines)

    ![Changes](./media/p36.webp)
2. Locations also will be available in the list.
3. A possibility to scan:

    1. Item Code, Barcode, Batch / Serial Number, Item + Batch / Serial Numbers,\
    2. Storage Unit/SSCC:

            - new (not assigned to any of the locations)
            - existing, containing only Items from the Pick List
            - existing, containing only Items and Batches / Serial Numbers, locations from Pick Lists (if allocated before in SAP Business One).

    3. Location.

        After scanning a location, only Items with quantity picked from this location are displayed (or just present in this location if they were not assigned).
    4. Adding Storage Unit.

---
