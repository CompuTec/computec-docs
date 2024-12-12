---
sidebar_position: 2
---

# Source Creator

The Source Creator feature provides advanced configuration options for data presented in [custom reports and analytics of the Analytical Page.](../analytical-page/overview.md#usage). This tool allows you to define data sources, customize their structure, and manage variants to optimize data visualization and reporting. With its intuitive interface, users can easily create and configure sources for streamlined analytics.

---

To open the option, click the Analytical Page button (1.) in Launchpad and then the Go To Source Creator button:

![AppEngine User's Guide](./media/source-creator/source-creator-button.png)

This leads to the Source List:

![AppEngine User's Guide](./media/source-creator/source-list.png)

This is a list of sources currently used in the [Variants](/docs/appengine/appengine-users-guide/analytical-page/overview#variants) used in Analytical views.

You can add a new Variant by clicking the Add New Source button:

## Source tab

![AppEngine User's Guide](./media/source-creator/source-configuration.png)

In the Source tab, you can configure the following settings:

- **Variant Name** - the name of the Variant
- **Source** – An MS SQL query that defines the data source for the variant.
- **Available fields (for a specific query)** – Once you enter a query, click the Show Preview button to display available fields. Here, you can modify the variant by configuring values for specific fields, including:

        - Displayed Column Name
        - Column Description
        - Column Type
        - Set a Custom Collection (different than in related Table View)

          <details>
          <summary>Click here to find out more.</summary>
          <div>
          Collections are groups of predefined values (e.g., status options like "Started," "Closed"). In the context of the Analytical Page, collections are often used for filters.
          
          In this case, there is a special icon that you can click to open a list of values to choose from:

          ![AppEngine User's Guide](./media/source-creator/document-type.png)

          ![AppEngine User's Guide](./media/source-creator/document-type-options.png)

          You can either take the values from the related table (the Table/View Collection option) or set them manually (the Custom Collection option):

          ![AppEngine User's Guide](./media/source-creator/choose-collection-type.png)

          The Table/View Collection:

          ![AppEngine User's Guide](./media/source-creator/table-view.png)

          The Custom Collection option:

          ![AppEngine User's Guide](./media/source-creator/custom-collection.png)
          </div>
          </details>

## Variants tab

In the Variants tab, you can manage the variants associated with a source. Variants allow you to customize how data is presented and accessed. Key actions include:

- **Add** - Create new variants.
- **Edit** - Modify existing variants.
- **Delete** - Remove unused variants.

![AppEngine User's Guide](./media/source-creator/variants.png)

To add a Variant, Click + Add Variant.

![AppEngine User's Guide](./media/source-creator/variant-basic-settings-1.png)

Here you can define:

- **Basic Settings** -  Name, View, Default, Accessibility (Public/Private);
- **Table Startup Settings** - settings related to the [Table view](../analytical-page/overview.md#table-options).
- **Chart Startup Settings** - settings related to the [Chart view](../analytical-page/overview.md#chart-options).
- **Visual Filter Startup Settings** - settings related to the [charts](../analytical-page/overview.md#chart-options).

---
The Source Creator provides a powerful, flexible tool for configuring data sources and variants, enabling tailored analytics and reports. By leveraging its advanced settings, users can effectively structure and customize data for insightful decision-making. Whether adding a new source or managing existing variants, the Source Creator is a key component in optimizing the Analytical Page’s functionality.
