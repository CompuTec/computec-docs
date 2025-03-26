---
sidebar_position: 1
toc_max_heading_level: 2
---

# Release Notes

:::info
The latest Installer is available to download from [here](../../plugins/mo360/download.md).
:::

## MO360 1.10.13.1

### *Release Date - 21 March 2025*

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Improvement  | MO360 | Planned Start and End Date/Time in MO360 Assignment Board |
| Bug | MO360 | Issues with filter in Assignment Board and Gantt Charts |
| Bug | MO360 | Incorrect Start and End date formatting in MO360 |

## MO360 1.10.12.1

### *Release Date - 23 May 2024*

| Issue Type | Component | Release Note |
| --- | --- | --- |
| Bug | MO360 | Users experienced difficulties in managing and viewing resources due to unexpected filtering behavior in both Assignment Board and Gantt Chart. |
| Bug | MO360 | Gantt chart weren't displayed on new UI5 version |

---

## MO360 1.10.10.1

### *Release Date - 9 November 2023*

| Issue Type | Release Note | Related Issue |
| --- | --- | --- |
| Bug | An error occurs upon attempts to run a scenario in MRP 2.5 and then open Relationship Map in some cases. | SPROC-15067 |
| Bug | The back button does not work when the plugin is run from SAP Business One. | - |

---

## MO360 1.10.8.3

### *Release Date - 1 February 2023*

| Issue Type | Release Note | Related Issue |
| --- | --- | --- |
| Improvement | A new optional setting: 'hidden'. Setting it to 'true' hides this plugin in AppEngine Launchpad. | - |
| Improvement | Adapt Filters: two new filters added - Operation Status, and Manufacturing Status. | - |
| Improvement | Assignment Board, Task List: fixed responsiveness upon the resizing of the form. | - |
| Improvement | Assignment Board: overall optimization of the form. | - |
| Improvement | More different colors to mark different Employees. | - |
| Improvement | Operation Code, Resource Code, Operation Status, and Manufacturing Order Status have been added to Tasks. | - |
| Improvement | Resource view: information about assigned Employees added to the tooltip and the right panel. | - |
| Bug | Assignment Board: the Employee table displays only one Team for an Employee, even when the Employee is in more than one Team. | - |
| Bug | Instability (blinking) of the View form. | - |
| Bug | Assignment Board: in the low-resolution screens the list of Employee is not displayed and cannot assign an Employee. | - |
| Bug | Overall UI fixes for the Add New View form. | - |
| Bug | Planned Time tab: inconsistent date format for different dates (Start Date, End Date, Required Date). | - |

---

## MO360 1.10.7.1

### *Release Date - 25 July 2022*

| Issue Type | Release Note | Related Issue |
| --- | --- | --- |
| Improvement | A date format is taken from the system settings instead of the SAP Business One settings. | - |
| Improvement | A possibility to display and manipulate Labor type Resources on the assignment board. | SPDC-618 |
| Improvement | Assignment Board: Manufacturing Orders / Operations with incorrect data (e.g. with dates set to 01-01-0001 because of a system error) are no longer displayed. | - |
| Bug | A Labor type Resource is not present in the assignment board list (even though it is present in the related Manufacturing Order). | SPROC-13599 |
| Bug | List Legend fixes and updates. | SPROC-13324 |
| Bug | Operation Start and Operation End times displayed in MO360 differ from the times in the related Manufacturing Orders due to time zone differences. | SPROC-13324 |
| Bug | Task selection form: the last line is not displayed entirely. | - |

---

## MO360 1.10.6.5, 1.93.6.5

### *Release Date - 26 April 2022*

| Issue Type | Release Note | Related Issue |
| --- | --- | --- |
| Bug | Assigning Board/Information panel (right): when the selection of a task is changed (central panel) information about Employees is not refreshed (switch for assigned to not assigned – employee from the first is still visible). | - |
| Bug | MO360 filters do not work. | - |
| Bug | No error message is shown when API and DB are of different version. | - |
| Bug | Problem with filtering Resources in View. | - |
