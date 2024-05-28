---
sidebar_position: 2
---

# Quick Time Booking

This function allows you to record time bookings for multiple Manufacturing Orders in one go by setting all the details in a single panel, eliminating the need to create and open separate task tiles..

---

The option is available from the main panel:

![List](./media/quick-time-booking/pdc-list.webp)

Clicking the option opens Quick Time Booking panel:

![Quick Work Registration](./media/quick-time-booking/quick-work-registration.webp)

## Header

In the header of the form, you can define filter options to display only required Tasks. The following options are available:

- **Status** – Manufacturing Order Status; available options: Released, Started, both Released and Started
- **Operation** – it is possible to choose a specific Operation or all Operations
- **Resource** – it is possible to choose a specific Resource or all Resources
- **Doc Number from and Doc Number to** – a range of Manufacturing Order document number
- **Time Types** – time types of the Tasks. Note that there are two time types, Queue and Stock, which cannot be accessed from the CompuTec PDC level. These can be set up and checked from the SAP Business One level.
- **Manufacturing Required Date From and Manufacturing Required Date To** – a range of Manufacturing Order required date
- **Task Start Date from and Task Start Date to** – a time range of starting a Task
- **Save icon** – if you click it after setting up filter options, the option set is saved and will be available on the next opening of the option.
- **Restore to default values icon** – click to erase all the changes made to the filters.

## Table Section

In this section, all the records defined by the filters option from the header are displayed.

![Table Section](./media/quick-time-booking/pdc-table-section.webp)

Click the icon next to the Operation Name to expand the line to Resources. More than one resource can be assigned to an operation. Clicking the icon next to the resource expands this line to Times. For each of the resources, setup and run time can be defined, followed by quantity, remarks, and the [Close Task](./overview.md) option.

Use the Save column checkbox to choose which lines are to be saved eventually. Click on "Saved Lines" to view only the lines with the Save checkbox checked.

After setting up all the details and checking the Save checkbox, click the confirmation icon on the lower right corner of the form to record Time Bookings.

## Footer

The footer of the form contains the following display options:

- **Results** – choose how many records are displayed on one page in the table
- **Total time** – total duration of all times set for all lines (both set up and run)
- **'+'/'-' icon** – expands/collapses all line by one level (levels: Operation > Resource > Times)
- **Pages** – navigating table pages
