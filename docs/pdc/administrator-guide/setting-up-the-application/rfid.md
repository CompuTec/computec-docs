---
sidebar_position: 3
---

# RFID

Radio Frequency Identification (RFID) technology provides a seamless, contactless method for logging into systems and applications. By using RFID cards, employees can log in and out by simply placing their RFID-enabled cards near a dedicated reader, making the process faster and more efficient. This guide outlines how to configure RFID login for CompuTec PDC, enabling secure and automated employee identification for system access.

---

## RFID Settings

### Settings

To begin, you need to enable and configure the RFID module:

- **Enable**: choose whether to use the RFID module for system login or not.

- **RFID Controller**: select from a list of predefined controllers.

- **Time interval**: this defines the period (up to 1.4 seconds by default) after which the reader will attempt to detect the RFID identification.

    ![PDC RFID Settings](./media/rfid/settings.webp)

### Test

To verify that your RFID controller is working correctly, use the Test function. Click "Start" and the controller will attempt to read RFID identifiers at the interval specified in the settings. If configured correctly, it will display information for each detected ID.

![RFID Test](./media/rfid/test.webp)

### Assign ID

To assign an RFID card to an employee:

- Click Read ID and place the RFID card near the reader.
- The field will be populated with the data assigned to the RFID card.

    ![RFID Assign Filled](./media/rfid/assign.webp)

- Once the card's data appears, click Assign, then choose the employee to associate with the RFID card. If the ID is unassigned, it will be linked to the selected employee.

- Click Save to assign the user to an RFID identifier and making them ready to use.

#### Employee Master Data

The assigned RFID ID is stored in SAP Business One Employee Master Data:

:::info Path
    Human Resources → Employee Master Data
:::

![PDC RFID Settings](./media/rfid/employee-settings.webp)

If the RFID ID is known, it can be entered directly into the PDC RFID UID field in SAP Business One to assign the ID to an employee.

## Usage

Once the RFID module is correctly configured, employees can log into the system by simply placing their RFID card near the reader on the login screen. This action automatically authenticates the associated employee, removing the need for manual credential entry.

Additionally, tapping the card again will log the user out. If another employee's card is used while someone is logged in, the system will prompt a re-login for the new user.

---
