---
sidebar_position: 9
---

# SU Settings

## SU Pick and Pack Settings

![SU Pick and Pack](./media/su-settings/su-pick-and-pack.png)

![HU Pick and Pack](./media/su-settings/hu-pick-and-pack.png)

1. **Show Warehouse on SU Pick and Pack and no default SU Pick and Pack Warehouse is chosen**

    It is possible to choose or skip Warehouse selection during creation of SU Pick and Pack based on Sales Order or Transfer Request. If a Warehouse is not chosen, transactions for all Warehouse will be displayed.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![SU Pick and Pack Operations](./media/su-settings/operations.png) ![Warehouse](./media/su-settings/warehouse-01.png) ![Customer Selection](./media/su-settings/customer-selection.png)
        </div>
        </details>

2. **Show Warehouse on SU Pick and Pack and default SU Pick and Pack Warehouse is chosen**

    If a different Warehouse is chosen in the first step, only transaction for this Warehouse will be displayed. If choosing a Warehouse step is skipped in the first step, only transactions for a Warehouse chosen in the settings are displayed.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![SU Pick and Pack Operations](./media/su-settings/operations-01.png) ![Warehouse](./media/su-settings/warehouse-02.png) ![Customer Selection](./media/su-settings/customer-selection-01.png) ![Order Selection](./media/su-settings/order-selection-01.png)
        </div>
        </details>

3. **Do not show Warehouse on SU Pick and Pack and no default SU Pick and Pack Warehouse is chosen**

    Choosing a transaction (From Sales Order or From Transfer Request) leads directly to Customer Selection from.

        <details>
        <summary>Click here to expand</summary>
        <div>
        ![SU Pick and Pack Operations](./media/su-settings/operations-02.png) ![Customer Selection](./media/su-settings/customer-selection-02.png) ![Order Selection](./media/su-settings/order-selection-02.png)
        </div>
        </details>

4. **Do not show Warehouse selection on SU Pick and Pack and default SU Pick and Pack Warehouse is chosen**

    No Warehouse selection at all. A Warehouse is chosen automatically from the settings.

    <details>
    <summary>Click here to expand</summary>
    <div>
    ![SU Pick and Pack Operations](./media/su-settings/operations-03.png) ![Customer Selection](./media/su-settings/customer-selection-03.png) ![Order Selection](./media/su-settings/order-selection-04.png)
    </div>
    </details>

## SU Creation - Default Warehouse Settings

When a default warehouse or bin location is configured in the WMS Options menu, the system automatically applies this setting during SU Operations. As a result, the Warehouse Selection screen is skipped, and users can proceed directly with SU creation.

**How it Works**:

1. Open the CompuTec WMS Client. Navigate to SU Operations and select New SU, or SU Wizard or SU Creation. The system starts the SU process.

    ![Open WMS Client](./media/su-settings/open-wms-client.png)![new su](./media/su-settings/su-operations.png)![SU wizard](./media/su-settings/su-wizard.png)![SU creation](./media/su-settings/su-creation.png)

2. Enter the preferred warehouse/bin value and Save.

    ![Warehous](./media/su-settings/warehouse.png)![Warehous](./media/su-settings/warehouse-selection.png)

3. Once set, performing any SU Operation - such as New SU, SU Creation, or SU Wizard will:

    - Automatically use the configured warehouse/bin.
    - Skip the manual Warehouse Selection screen.
    - Take you straight into the SU creation process.

        ![Documents](./media/su-settings/documents.png)
