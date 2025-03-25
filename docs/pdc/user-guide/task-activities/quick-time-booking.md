---
sidebar_position: 2
---

# Quick Time Booking

Managing time bookings efficiently is crucial in streamlining manufacturing operations. The Quick Time Booking feature allows you to record time bookings for multiple Manufacturing Orders simultaneously, all from a single panel. This eliminates the need to create and open separate task tiles, saving time and enhancing productivity.

---

The Quick Time Booking option is accessible from the main panel:

![List](./media/quick-time-booking/pdc-list.webp)

Clicking the option opens the Quick Time Booking panel:

![Quick Work Registration](./media/quick-time-booking/quick-work-registration.webp)

## Header

The header section of the Quick Time Booking form allows you to apply filters to display only relevant tasks. The available filtering options include:

- **Status**: filter tasks by Manufacturing Order Status (options: Released, Started, or both).
- **Operation**: choose a specific Operation or display all Operations.
- **Resource**: choose a specific Resource or display all Resources.
- **Doc Number from and Doc Number to**: define a range for Manufacturing Order document numbers.
- **Time Types**: select time types for the tasks. Note that Queue and Stock time types cannot be accessed from the CompuTec PDC level; they can only be managed in SAP Business One.
- **Manufacturing Required Date From and Manufacturing Required Date To**: specify a date range for Manufacturing Order required dates.
- **Task Start Date from and Task Start Date to**: filter tasks by their starting time range.
- **Save icon** – Save the current filter settings for reuse.
- **Restore to default values icon**: reset all filters to their default values.

## Table Section

This section displays all records based on the filters applied in the header.

![Table Section](./media/quick-time-booking/pdc-table-section.webp)

- Click the icon next to the Operation Name to expand and view the assigned resources. An operation can have multiple resources.
- Click the icon next to a Resource to expand further and display time records.
- For each resource, setup time, run time, quantity, remarks, and the [Close Task](./overview.md)  option can be specified.
- Use the Save column checkbox to select which records should be saved.
- Click "Saved Lines" to filter and display only the selected records.
- Once all details are set and the Save checkbox is checked, click the confirmation icon in the lower right corner to finalize and record the time bookings.

## Footer

The footer of the form includes the following display options:

- **Results**: specifies the number of records displayed per page in the table.
- **Total time**: Displays the cumulative duration of all setup and run times.
- **'+'/'-' icon**: expands or collapses all rows to a single level (Operation > Resource > Times).
- **Pages**: allows navigation between pages in the table.

---
