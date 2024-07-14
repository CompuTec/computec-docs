---
sidebar_position: 5
---

# Time Booking Related Journal Entries

The main aim of Time Bookings is to record Resource times and related costs. However, in some cases, related Journal Entries may not be created.

To automatically create Journal Entries related to work time of Resources, the following conditions have to be met:

**Post Resource Confirmation**

'Post resource confirmation' checkbox in General Settings has to be checked. Click [here](../../system-initialization/general-settings/costing-tab.md) to find out more.

**Resource Accounting**

Each Resource to create a Journal Entry during related time recording has to have previously configured Resource Accounting assigned.

**Resource Costing**

As it is not possible to post a zero-value Journal Entry, related Resource Costing has to have values higher than zero.

**Time Corrections**

A related Journal Entry will not be posted when a difference in cost (Time Cost, Fixed Cost, Variable Cost) between a Time Correction document and a base document (either a Time Booking or a previous Time Correction) is zero (e.g. correction made to add/change Remarks or to record Employee Time that will not be added to Resource Time).
