---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Overview

This user-friendly tool allows you to quickly and easily create custom reports and analytics based on data from plugins. Designed to simplify data visualization, it provides flexibility and efficiency in managing and analyzing complex data sets.

    ![Analytics](./media/overview/01-appengine-analytics-overview.png)

---

## Access

1. After logging in to **CompuTec AppEngine**, click on the **Analytics** icon.

    ![Access](./media/overview/02a-appengine-analytics-view.png)

2. Choose your data source by clicking the component name. In our example, we'll be analyzing Manufacturing Order transactions, so we choose MO360.

    ![Access](./media/overview/02b-appengine-analytics-view.png)

3. Done! Now, you can see your analytics dashboard.

    ![Access](./media/overview/01-appengine-analytics-overview.png)

## Variants

Variants are preset report configurations. When you install the plugin, you automatically receive one standard variant, which is set as the default. You can easily create your own variants or customize the existing ones.

To **create a new variant**, follow these steps:

1. Click the **arrow** next to your standard variant name.

    ![Variants](./media/overview/03-appengine-analytics-variants1.png)

2. Click **Save As**.

    ![Variants](./media/overview/04-appengine-analytics-variants2save.png)

3. Type the variant name and decide if you want to set it as a default one. Here, you can also make it available to all users (Public) or keep it private.

    ![Variants](./media/overview/05-appengine-analytics-variants-savenew.png)

4. Click **Save**.

To **manage your existing variants**, follow these steps:

1. Click the **arrow** next to your standard variant name.

    ![Variants](./media/overview/03-appengine-analytics-variants1.png)

2. Click **Manage**.

    ![Variants](./media/overview/04-appengine-analytics-variants34managepng.png)

3. Here, you can manage all your existing variants. Dont't forget to click **Save** afterwards.

    ![Variants](./media/overview/04-appengine-analytics-variants3manage.png)

## Main view

Before you begin working with the analytics, it’s helpful to know how each dashboard is structured. It includes two main sections:

- **Filters**, where you define your criteria
- **Reports**, where the filtered results are displayed

![Report](./media/overview/01-appengine-analytics-overview.png)

### Filter

Filters help you narrow down the data shown in your report by entering specific values. Each filter type lets you refine your dataset based on different criteria.

#### Filter Options

You can use the following filter types:

- **Text**: Allows you to filter data using text values. This is useful for searching for names, keywords, or phrases. Common operators include `Equal`, `Starts With`, `Contains`, and `Between`.

    ![Text filter](./media/overview/07-appengine-analytics-filer-abc.png)

- **Number**: Enables filtering based on numeric values. Typical operators include `Greater Than`, `Less Than`, and `Equal`.

    ![Number Filter](./media/overview/08-appengine-analytics-filer-123.png)

- **Collection**: Allows you to select values from predefined or dynamically loaded lists.
        - **Custom Collection**: A user-defined list of values.
        - **Table Collection**: Values pulled directly from a table field. Example: the `Item Group Name` field.

            ![Collection Filter](./media/overview/09-appengine-analytics-filter-collections.png)

- **Date**: Lets you filter data by a specific date or date range. To select a single day, simply double-click on the date.

    ![Date Filter](./media/overview/10-appengine-analytics-filter-date.png)

#### Editing filters

The Adapt Filter option lets you choose which filters are shown in the interface. This helps you keep only the filters that matter to you, improving clarity and ease of use.

To customize your filter, follow these steps:

1. Click **Adapt Filter**.

    ![Adapt Filter](./media/overview/11-appengine-analytics-filter-adapt.png)

2. Choose which filter options you want to see in your dashboard.

    ![Adapt filter edit](./media/overview/12-appengine-analytics-filter-adapt-edit.png)

#### Visualization Filters

Selected filters can also be displayed as micro charts. These visual summaries offer an interactive way to drill into your data and quickly understand key metrics. 

You can click on specific parts of the filter to see the detailed data on the metric.

    ![Visual chart](./media/overview/13-appengine-analytics-filter-micro.png)

### Report

Reports can be displayed as a Chart, a Table, or a combination of both. You can switch between these display modes at any time.


    ![Report](./media/overview/23-appengine-analytics-reports-overview.png)

#### Table

The table is the core component of the analytics view and provides powerful tools for interacting with your data.

    ![Report](./media/overview/14-appengine-analytics-reports-table.png)

**Table features**:

- **Direct links** – Some cells include yellow arrows that link directly to SAP Business One documents.

    ![Report](./media/overview/25-appengine-analytics-table-links.png)

- **Export to Excel** – In browser mode, you can export the table to Excel using the **Download Excel** option in the top-right corner.

    ![Report](./media/overview/24-appengine-analytics-table-download.png)

**Table options**

Located in the top-right corner, these options let you customize how your table is displayed:

    ![Table Options](./media/overview/15-appengine-analytics-reports-table-options.png)

- **Sort**: Sort columns in ascending or descending order.

    ![Table Options](./media/overview/16-appengine-analytics-reports-table-options-view.png)

- **Visible**: Choose which columns are shown.

    ![Table Options](./media/overview/17-appengine-analytics-reports-table-options-column-visibility.png)

- **Freeze**: Lock selected columns for easier scrolling.

    ![Table Options](./media/overview/18-appengine-analytics-reports-table-options-column-freeze.png)

- **Group**: Group rows based on selected columns.

    ![Table Options](./media/overview/19-appengine-analytics-reports-table-options-column-grouping.png)

- **Other**:
        - **Display Summaries**: Show totals or summaries for numeric columns.
        - **Auto Row Expand**: Automatically expand grouped results.
        - **Auto Refresh Data**: Refresh data automatically for real-time updates.

    ![View Settings](./media/overview/20-appengine-analytics-reports-table-options-other.png)

#### Chart

Charts offer a visual way to analyze your data.

    ![Data Visualisation in Charts](./media/overview/23-appengine-analytics-reports-overview.png)

The available chart types include line, bar, column, and pie. These options give you flexibility in how you represent your dataset.

**Chart Options**

You can adjust the chart using the following settings:

- **Dimension**: Choose any column as the dimension.
- **Measure**: Select the columns used as measures (it must be marked as aggregable in the source creator).
- **Functions**: Apply operations such as `Count`, `Sum`, `Average`, `Minimum`, or `Maximum` (multiple functions allowed).
- **Sort**: Options include: `Without Sort`, `Dimension Ascending`, `Dimension: Descending`, `Measures: Ascending`, `Measures: Descending`.

    ![chart options](./media/overview/21-appengine-analytics-reports-chart-options.png)

Users can also interact with chart elements to view summaries and download the data in XLSX format.

    ![Download Excel](./media/overview/22-appengine-analytics-reports-chart-options-list.png)

---
