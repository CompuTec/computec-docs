---
sidebar_position: 1
---

# Overview

This section provides comprehensive information on PDC Settings, outlining the options available for configuration and how these settings can be assigned to either specific employees or CompuTec PDC installations. Proper management of these settings ensures that the system operates according to the organization’s unique requirements, improving efficiency and user experience.

---

## General Settings

You can define the settings to be taken from CompuTec PDC installation (assign just to it) or predefined settings templates (assign to a specific Employee) [CompuTec PDC installation](../overview.md) (assign just to it), or from predefined settings templates (assign to a particular Employee). The way of getting the settings can be set up in [ProcessForce settings](../overview.md#processforce-settings) (PDC Way of Getting Settings field).

## PDC Settings templates

:::info Path
    Administration → Setup → General → PDC Settings
:::

![PDC Settings](./media/pdc-settings/pdc-settings-general.webp)

Here, you can define and save a set of settings that can next be assigned to a specific Employee or a specific installation of CompuTec PDC. Go to the next section to check how to do this.

Most of the options are available either in [ProcessForce](../overview.md#processforce-settings) or [PDC-level](../overview.md) level settings.

Options present only in the PDC Settings form:

- **Resource Code** – if this field is filled in, users assigned with these PDC Settings will only be able to view Tasks related to a specified resource.
- **Notification after login** – the text entered in this box is displayed in an additional form after logging in to the application.
- **Show Date Picker** – this option allows to set amount of time in minutes (e.g., 67 minutes) instead of date and time on time registration:

  ![Show Date Picker](./media/pdc-settings/show-date-picker.webp)
- **Localizations** – weighting module-related option. Only devices from localizations listed here are available in [Weighting Wizard](../../weight-scales-integration/working-with-scales.md) (the weighting device, along with its localization, can be configured in [CompuTec Gateway Manager](../../weight-scales-integration/computec-gateway-manager.md)). If this field is left blank, all devices will be available.
- **Resources view** – click [here](./resource-view.md) to find out more.
- **Delay of closing dialogs(s)** – here, you can set the time (in seconds) for displaying dialog windows.

## Assigning PDC Settings Templates

A template can be assigned to a specific Employee.

:::info Path
    Human Resources → Employee Master Data
:::

![Assign Settings](./media/pdc-settings/pdc-assigning-settings.webp)

Click Choose from List icon to choose one of the predefined PDC Settings.

---
The ability to define and assign PDC Settings templates offers flexibility in managing employee-specific or installation-specific configurations. By understanding and utilizing the various settings and options provided in this section, administrators can optimize the application’s functionality and tailor the experience to meet specific business needs.
