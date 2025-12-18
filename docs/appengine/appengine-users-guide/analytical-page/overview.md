---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Overview

The **Analytics** module of **CompuTec AppEngine** enables you to quickly analyze your data and create custom reports using information from connected plugins. It is designed to simplify data visualization while giving you flexible and efficient tools for managing and evaluating complex data sets.

![Analytics](./media/overview/01-appengine-analytics-overview.png)

## Access CompuTec AppEngine Analtics

To access the **Analytics** module of **CompuTec AppEngine**, follow these steps:

1. In your browser, open **CompuTec AppEngine site** and choose **Launchpad**.

    ![Screen showing appengine launchpad](./media/overview/00-appengine-analytics-login1.png)

2. Click **Login in with SAP Business One**.

3. Log in using you credentials.

    ![screen showing logging in](./media/overview/00-appengine-analytics-login2.png)

4. After logging in to **CompuTec AppEngine**, click on the **Analytics** icon.

    ![screen showing accessing analyics](./media/overview/02a-appengine-analytics-view.png)

5. Choose your data source by clicking the component name. In our example, we'll be analyzing **Manufacturing Order** transactions, so we choose **MO360**.

    ![screen showng choosing data source](./media/overview/02b-appengine-analytics-view.png)

6. Done! Now, you can see your **Analytics** dashboard.

    ![scrren showing analytics dashboard](./media/overview/01-appengine-analytics-overview.png)

## About a view

A **View** is a preset report configuration. When you install the CompuTec AppEngine plugin, you automatically receive one standard view, which is set as the default. You can easily create your own views or customize the existing ones.

To **create a new view**, follow these steps:

1. Click the **arrow** next to your extisting view name.

    ![screen showing how to save a view](./media/overview/03-appengine-analytics-variants1.png)

2. Click **Save As**.

    ![screen showing saving a view](./media/overview/04-appengine-analytics-variants2save.png)

3. Type the view name and decide if you want to set it as a default one. Here, you can also make it available to all users (Public) or keep it private.

    ![screen showing view options](./media/overview/05-appengine-analytics-variants-savenew.png)

4. Click **Save**.

To **manage your existing view**, follow these steps:

1. Click the **arrow** next to your extisting view name.

    ![screen showing how to manage a view](./media/overview/03-appengine-analytics-variants1.png)

2. Click **Manage**.

    ![screen showing where to click manage](./media/overview/04-appengine-analytics-variants34managepng.png)

3. Here, you can manage all your existing views. Dont't forget to click **Save** afterwards.

    ![screen showing all the existing views](./media/overview/04-appengine-analytics-variants3manage.png)

## About a dashboard

Before you begin working with the analytics, it’s helpful to know how each dashboard is structured. It includes two main sections:

- **Filters**, where you define your criteria
- **Reports**, where the filtered results are displayed

![screen showing a dashboard](./media/overview/01-appengine-analytics-overview.png)

### Filter your data

Filters help you narrow down the data shown in your report by entering specific values. Each filter type lets you refine your dataset based on different criteria.

#### Filter options

You can use the following filter types:

- **Text**: Allows you to filter data using text values. This is useful for searching for names, keywords, or phrases. Common operators include `Equal`, `Starts With`, `Contains`, and `Between`.

    ![screen showng the Text filter](./media/overview/07-appengine-analytics-filer-abc.png)

- **Number**: Enables filtering based on numeric values. Typical operators include `Greater Than`, `Less Than`, and `Equal`.

    ![screen showng the Number Filter](./media/overview/08-appengine-analytics-filer-123.png)

- **Collection**: Allows you to select values from predefined or dynamically loaded lists.
        - **Custom Collection**: A user-defined list of values.
        - **Table Collection**: Values pulled directly from a table field. Example: the `Item Group Name` field.

            ![Collection Filter](./media/overview/09-appengine-analytics-filter-collections.png)

- **Date**: Lets you filter data by a specific date or date range. To select a single day, simply double-click on the date.

    ![screen showng the Date Filter](./media/overview/10-appengine-analytics-filter-date.png)

#### Edit filters

The Adapt Filter option lets you choose which filters are shown in the interface. This helps you keep only the filters that matter to you, improving clarity and ease of use.

To edit your filters, follow these steps:

1. Click **Adapt Filter**.

    ![screen showng how to Adapt a Filter](./media/overview/11-appengine-analytics-filter-adapt.png)

2. Choose which filter options you want to see in your dashboard.

    ![screen showng the Adapt filter edition](./media/overview/12-appengine-analytics-filter-adapt-edit.png)

3. Click **Save**.

#### Use microcharts

Selected filters can also be displayed as microcharts. These visual summaries offer an interactive way to drill into your data and quickly understand key metrics.

1. To use microcharts as a filters in your view, click on the **microchart icon** in the **Filters** section of your view.

    ![screen showng the microcharts](./media/overview/13-appengine-analytics-filter-microoo.png)

2. Now, you can click on specific parts of the filter to see the detailed data on the metric.

    ![screen showng how the microcharts work](./media/overview/13-appengine-analytics-filter-microoo2.png)

### See your data in reports

Reports can be displayed as a **Chart**, a **Table**, or a combination of both. You can switch between these display modes at any time.

    ![screen showng how the Report looks like](./media/overview/23-appengine-analytics-reports-overview.png)

#### Use a table report

A table is a core component of Analytics and a powerful tool for interacting with your data.

    ![screen showng the the table report](./media/overview/14-appengine-analytics-reports-table.png)

**Table features**:

- **Direct links** – Some cells include yellow arrows that link directly to SAP Business One documents.

    ![screen showng the table report direct links](./media/overview/25-appengine-analytics-table-links.png)

- **Export to Excel** – In browser mode, you can export the table to Excel using the **Download Excel** option in the top-right corner.

    ![screen showng how to download the table report](./media/overview/24-appengine-analytics-table-download.png)

**Table options**

Located in the top-right corner, these options let you customize how your table is displayed:

    ![screen showng the Table Options](./media/overview/15-appengine-analytics-reports-table-options.png)

- **Sort by**: Sort columns in ascending or descending order.

    ![screen showng the Table sorting Options](./media/overview/16-appengine-analytics-reports-table-options-view.png)

- **Column Visbility**: Choose which columns are shown.

    ![screen showng the Table visibility Options](./media/overview/17-appengine-analytics-reports-table-options-column-visibility.png)

- **Freeze Column**: Lock selected columns for easier scrolling.

    ![screen showng the column freeze Options](./media/overview/18-appengine-analytics-reports-table-options-column-freeze.png)

- **Group Column**: Group rows based on selected columns.

    ![screen showng the Table column grouping Options](./media/overview/19-appengine-analytics-reports-table-options-column-grouping.png)

- **Other options**:
        - **Display Summaries**: Show totals or summaries for numeric columns.
        - **Auto Row Expand**: Automatically expand grouped results.
        - **Auto Refresh Data**: Refresh data automatically for real-time updates.

    ![screen showng the View Settings in table report](./media/overview/20-appengine-analytics-reports-table-options-other.png)

#### Use a chart report

Charts offer a visual way to analyze your data.

    ![screen showng the Data Visualisation in Charts](./media/overview/23-appengine-analytics-reports-overview.png)

The available chart types include **Line Chart**, **Bar Chart**, **Column Chart**, and **Pie Chart**, giving you flexibility in how you visualize your dataset.

    ![screen showng the pie chart](./media/overview/26-appengine-analytics-reports-chart-pie.png)

**Chart Options**

You can adjust the chart using the following settings:

- **Dimension**: Choose any column as the dimension.
- **Measure**: Select the columns used as measures (it must be marked as aggregable in the source creator).
- **Functions**: Apply operations such as `Count`, `Sum`, `Average`, `Minimum`, or `Maximum` (multiple functions allowed).
- **Sort**: Options include: `Without Sort`, `Dimension Ascending`, `Dimension: Descending`, `Measures: Ascending`, `Measures: Descending`.

    ![screen showng the chart options](./media/overview/21-appengine-analytics-reports-chart-options.png)

Users can also interact with chart elements to view summaries and download the data in XLSX format.

    ![screen showng how to Download charts in Excel](./media/overview/22-appengine-analytics-reports-chart-options-list.png)

:::info[note]
Note
If you have any questions, contact us via the [CompuTec Helpdesk Portal](https://support.computec.pl/servicedesk/customer/portals?q=webUp). Feedback on usability and performance is always welcome.
:::
