---
sidebar_position: 6
---

# Manual and Backflush Issue type Configuration

In inventory management, configuring issue types correctly ensures smooth material handling in production and warehouse operations. This document outlines the behavior of different issue types—Manual and Backflush—detailing how they impact batch selection and processing. Understanding these settings helps streamline operations and maintain accurate inventory tracking.

---

## Manual Issue Method

The table below illustrates the interaction between Issue Type and Issue Behavior:

- **Yes**: the batch is listed within the Batch Number Selection form.
- **No**: the batch is not listed within the Batch Number Selection form.
- **Display**: the batch is visible but cannot be issued within the Batch Number Selection form.

|   Issue Type   | Issue Behavior |   Issue Behavior   | Issue Behavior |    Issue Behavior    |     Issue Type     |     Issue Type     |
| :------------: | :------------: | :----------------: | :------------: | :------------------: | :----------------: | :----------------: |
|                |                |                    |                |                      |   Not Accessible   |       Locked       |
|                |                |        Yes         |       No       |       Display        |                    |                    |
|     Locked     |      Yes       | :heavy_check_mark: |                |                      | :heavy_check_mark: |                    |
|                |       No       |                    |      :x:       |                      | :heavy_check_mark: |                    |
|                |    Display     |                    |                | :information_source: | :heavy_check_mark: |                    |
| Non Accessible |      Yes       | :heavy_check_mark: |                |                      |                    | :heavy_check_mark: |
|                |       No       |                    |      :x:       |                      |                    | :heavy_check_mark: |
|                |    Display     |                    |                | :information_source: |                    | :heavy_check_mark: |
|      Both      |      Yes       | :heavy_check_mark: |                |                      |                    |                    |
|                |       No       |                    |      :x:       |                      |                    |                    |
|                |    Display     |                    |                | :information_source: |                    |                    |

![General Settings Issue Type](./media/manual-and-backflush-issue-type-configuration/general-settings-issue-type.webp)

### Locked – Yes

![Locked - Yes](./media/manual-and-backflush-issue-type-configuration/locked-yes.webp)

### Locked – No

![Locked - No](./media/manual-and-backflush-issue-type-configuration/locked-no.webp)

### Locked – Display

![Locked - Display](./media/manual-and-backflush-issue-type-configuration/locked-display.webp)

### Non-Accessible – Yes

![Non-Accessible](./media/manual-and-backflush-issue-type-configuration/non-accessible-yes.webp)

### Non-Accessible – No

![Non-Accessible - No](./media/manual-and-backflush-issue-type-configuration/non-accessible-no.webp)

### Non-Accessible Display

![Non-accesswible - Display](./media/manual-and-backflush-issue-type-configuration/non-accessible-display.webp)

### Both - Yes

![Both - Yes](./media/manual-and-backflush-issue-type-configuration/both-yes.webp)

### Both - No

![Both - No](./media/manual-and-backflush-issue-type-configuration/both-no.webp)

### Both - Display

![Both - Display](./media/manual-and-backflush-issue-type-configuration/both-display.webp)

## Backflush Issue Method

The same principles that apply to manual issue types also apply to batch back-flushing. Ensuring accurate backflush settings prevents material shortages and maintains production efficiency.

---
