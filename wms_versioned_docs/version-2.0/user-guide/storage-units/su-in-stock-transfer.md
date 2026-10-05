---
sidebar_position: 11
---

# SU in Stock Transfer

Stock transfers involving Storage Units (SUs) require a clear understanding of how to manage both new and existing SUs within the warehouse workflow. This guide walks you through handling SUs during stock transfers - whether you're creating new ones, assigning items to them, or using existing SUs to move goods between warehouse locations. The process is explained step-by-step with relevant screenshots for ease of use.

---

## Managing a New Storage Unit (SU)

![Document Details](./media/new-su.jpg)

1. Set the Storage Unit details. You can choose the Destination Warehouse now (the Arrow Down) or do it during the Items collection or in the Put Away Items screen:

    ![Storage Unit details](./media/new-su-put-away.jpg)

    You can also scan the SSCC number to set a new number instead of the generic one.
2. The top line holds information on an SU to which Items are being added. Click it to leave the adding SU mode. When the bar is empty, Items are added without an SU assigned.

    ![Document Details](./media/scanning-sscc.jpg)

3. You can add Items by scanning barcodes or adding them manually:

    ![Document Details](./media/su-document-details.jpg)

4. Clicking an item while in SU adding mode opens a screen where you can specify the Quantity, Batch, or Bin Locations - depending on the item type, warehouse setup, and workflow configuration.

    ![Batches](./media/su-batches.jpg)

5. Clicking on SU details opens its detailed view, where you can review the picked items. From this screen, you can navigate to the Storage Unit Details screen (B) to select a Destination Warehouse or exit the SU adding mode (A).

    ![Storage Unit Details](./media/new-su-details.jpg)

6. You can add another Storage Unit (SU) along with its items. To return to a previous SU, either scan its SSCC or SU Code, or navigate to it manually and click the magnifying glass icon.

    ![Document Details](./media/su-doc-details.jpg)
    ![Storage Unit Details](./media/su-doc-details-2.jpg)

7. When you exit the edit mode of a Storage Unit (SU) and open its details in the Line Details screen, you can view the selected batches, quantities, and whether the items are stored in another SU or individually (loose). You can delete items that are either not assigned to any SU or are part of newly created SUs, but items within pre-existing SUs cannot be deleted.

    ![Line Details](./media/line-details.jpg)

8. You can choose a Destination Warehouse after setting up the document details. You can skip this step by clicking the Right Arrow (which leads directly to the Put Away Items screen).

    ![Put Away Items](./media/put-away-items-screen.jpg)
    ![To Bin](./media/to-bin.jpg)

9. Using the Put Away Items screen, choose a location for each of the SUs. Delete selecting all of the SUs (A), place all of the SUs in the chosen location (B), and go to the document saving (C).

    ![Put Away Items](./media/put-away-items-end.jpg)

    ![Put Away Items](./media/destination-warehouse-1.jpg)

10. Once the location is selected, it is marked on its line. After choosing a location for all SUs, proceed to the document summary via the Right Arrow icon.

    ![Put Away Items](./media/put-away-items-mark.jpg)

11. Final review and add remarks if needed.

    ![Remarks](./media/new-su-remarks.jpg)

## Existing SU

1. Choose an existing SU. There are two ways to ways to do it:

    1. In the Document Details screen, scan an SU or SSCC code. This adds the entire SU and its contents (you can still modify the selection afterward).

        ![Document Details](./media/stock-transfer-doc-det.jpg)

    2. Scanning an SU or SSCC Code or choosing an SU manually in the List of SUs screen:

        ![Document Details](./media/stock-counting-sus.jpg)

        Choosing this option opens a List of SUs in the current Warehouse (if there are Bin locations in the Warehouse, a list of Bin Locations is opened first):

        ![SU Locations](./media/su-locations.jpg)

        ![List of SUs](./media/list-of-sus.jpg)

2. Choosing an existing SU leads to the Storage Unit details screen. Here, you can choose to receive all the Items or just some of them (A), with a pallet or other collective packaging (B) or without it (C):

    ![Storage Unit Details](./media/storage-unit-details.jpg)

    Android version:

    ![Storage Unit - Android](./media/storage-unit-details-android.jpg)

3. In the following example screenshot, you can see that the Item in the first line has not been picked at all, the second one has been picked partially, and the third has been picked fully. The child SU (the fourth row) has not been picked at all:

    ![Storage Unit Details](./media/storage-details-picked.jpg)

4. You can choose the child SU and choose Items, quantities, Batches, and if we are picking it with (A) or without (B) the collective packaging:

    ![Storage Unit Details](./media/child-su-details.jpg)

    1. Here you can see an example where the child SU has been chosen with content and collective packaging (the child SU stays in the parent SU):

        ![Storage Unit Details](./media/child-su-details-2.jpg)

    2. Here you can see an example where the child SU has been chosen with content but without the collective packaging (the child SU content goes to the parent SU):

        ![Storage Unit Details](./media/child-su-details-no-packaging.jpg)

5. The chosen lines can be transferred along with the parent SU (A) - then, Active-Item-01 will be left in the source Warehouse, and the rest will be transferred. Or transfer alone, Active-Item-01 will stay in the Parent pallet (B).

    ![Storage Unit Details](./media/su-details-transfer.jpg)

6. Choose the required Items and SUs and go to the document summary:

    ![Document Details](./media/su-document-summary.jpg)

7. Now, choose a Destination: Warehouse, Warehouse, and Bin, or skip this step.

    ![Destination Warehouse](./media/su-destination-warehouse.jpg)

    ![To Bin](./media/su-destination-bin.jpg)

    You can set the automatic skip of this step in Custom Configuration:

    ![WMS Custom Configuration](./media/su-config.jpg)

8. In the Put Away screen, you can: put each Item in a specific location by clicking its line, delete the location selection (A), put all the Items in the previously chosen location (B), and go to the Document Details (C):

    ![Put away Items](./media/put-away-items.jpg)

9. Optionally, add remarks and save the document.

    ![Remarks](./media/su-remarks.jpg)

---
