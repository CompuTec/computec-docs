---
sidebar_position: 5
---

# Time Booking Related Journal Entries

Time Bookings play a crucial role in tracking Resource work hours and related costs within an organization. These records are essential for financial reporting and project cost management. However, in certain cases, Journal Entries associated with Time Bookings may not be automatically generated.

To ensure that Journal Entries are correctly created for Resource work time, the following conditions must be met:

**Post Resource Confirmation**

The 'Post Resource Confirmation' checkbox in General Settings must be enabled. This setting ensures that time recorded for Resources is posted correctly. You can find more details on enabling this setting.

**Resource Accounting**

Each Resource must have a configured Resource Accounting setup. Without this configuration, Journal Entries will not be created during time recording.

**Resource Costing**

Journal Entries cannot be posted with a zero-value cost. Therefore, the Resource Costing must have values greater than zero to be included in financial postings.

**Time Corrections**

If a Time Correction does not result in a cost difference - whether in Time Cost, Fixed Cost, or Variable Cost - a Journal Entry will not be generated. This applies to corrections made for remarks, documentation updates, or adjustments that do not affect Resource Time.

---
