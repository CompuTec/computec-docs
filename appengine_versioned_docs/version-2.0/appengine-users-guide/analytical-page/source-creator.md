---
sidebar_position: 2
---

# Source Creator

The Source Creator allows advanced configuration of data used in [custom reports and analytics of the Analytical Page.](../../../version-2.0/appengine-users-guide/analytical-page/overview.md#usage).

---

To access it, click on the Analytical Page button (1.) in the Launchpad, then select Go To Source Creator:

![AppEngine User's Guide](./media/source-creator/source-creator-button.png)

This leads to the Source List:

![AppEngine User's Guide](./media/source-creator/source-list.png)

This is a list of sources currently used in the [Variants](/docs/appengine/appengine-users-guide/analytical-page/overview#variants) used in Analytical views.

You can add a new Variant by clicking the Add New Source button:

## Source tab

![AppEngine User's Guide](./media/source-creator/source-configuration.png)

Here you can configure:

- the name of the Variant
- the source – an MS SQL query that will be a source of data for the Variant
- available fields (for a specific query) – the list is available after clicking the Show - Preview button after entering a query. Here you can modify the Variant by changing values for specific lines. You can set:

        - Displayed Column Name
        - Column Description
        - Column Type
        - Set a Custom Collection (different than in related Table View)

          <details>
          <summary>Click here to find out more.</summary>
          <div>
          A Collection is a predefined set of values for a field - such as "Started", "Closed", etc., used in filters on the Analytical Page. You’ll see a special icon to open the list of available values:

          ![AppEngine User's Guide](./media/source-creator/document-type.png)

          ![AppEngine User's Guide](./media/source-creator/document-type-options.png)

          You can choose between:

            - **Table/View Collection**: Pulls values directly from the related table or view.
            - **Custom Collection**: Allows you to manually define the list.

              ![AppEngine User's Guide](./media/source-creator/choose-collection-type.png)

              The Table/View Collection:

              ![AppEngine User's Guide](./media/source-creator/table-view.png)

              The Custom Collection option:

              ![AppEngine User's Guide](./media/source-creator/custom-collection.png)
            </div>
            </details>

## Variants tab

In this tab, you can manage all Variants associated with a source - add, edit, or delete them.

![AppEngine User's Guide](./media/source-creator/variants.png)

To create a new Variant, click + Add Variant:

![AppEngine User's Guide](./media/source-creator/variant-basic-settings-1.png)

Here you can define:

- **Basic Settings**: Name, View, Default, Accessibility (Public/Private);
- **Table Startup Settings**: Settings related to the [Table view](../../../version-2.0/appengine-users-guide/analytical-page/overview.md#table-options).
- **Chart Startup Settings**: Settings related to the [Chart view](../../../version-2.0/appengine-users-guide/analytical-page/overview.md#chart-options).
- **Visual Filter Startup Settings**: Settings related to the [charts](../../../version-2.0/appengine-users-guide/analytical-page/overview.md#chart-options).

---
