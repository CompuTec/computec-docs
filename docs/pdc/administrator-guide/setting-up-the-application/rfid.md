---
sidebar_position: 3
---

# RFID

Radio Frequency Identification (RFID) technology provides a seamless, contactless method for logging into systems and applications. By using RFID cards, employees can log in and out by simply placing their RFID-enabled cards near a dedicated reader, making the process faster and more efficient. This guide outlines how to configure RFID login for CompuTec PDC, enabling secure and automated employee identification for system access.

---

## RFID Settings

### Settings

To begin, you need to enable and configure the RFID module:

- **Enable** – Choose whether to use the RFID module for system login or not.

- **RFID Controller** – Select from a list of predefined controllers.

- **Time interval** – aThis defines the period (up to 1.4 seconds by default) after which the reader will attempt to detect the RFID identification.

    ![PDC RFID Settings](./media/rfid/settings.webp)

### Test

To ensure your RFID controller is functioning correctly, use the Test function. By clicking "Start," the controller will attempt to read RFID identifiers at the interval defined in the settings. If configured properly, it will display information for each identification read.

![RFID Test](./media/rfid/test.webp)

### Assign ID

To assign an RFID card to an employee:

- Click Read ID and place the RFID card near the reader.
- The field will be filled up with data assigned to the RFID Card:

    ![RFID Assign Filled](./media/rfid/assign.webp)

- Once the card's data is displayed, click Assign, then select the employee to associate with the RFID card.If the ID has not been assigned, it will be linked to the selected employee.

- Click Save to assign the user to an RFID identifier and making them ready to use.

#### Employee Master Data

The assigned RFID ID is stored in SAP B1 Employee Master Data:

:::info Path
    Human Resources → Employee Master Data
:::

![PDC RFID Settings](./media/rfid/employee-settings.webp)

If the RFID ID is known, it can be entered directly into the PDC RFID UID field in SAP Business One to assign the ID to an employee.

## Usage

Once the RFID module is properly configured, employees can use their RFID card to log into the system by simply placing it near the reader on the login screen. This action automatically logs in the associated employee, eliminating the need for manual credentials entry.

Additionally, inserting the card again will log the user out. If another employee's card is inserted while logged in, the system will prompt a re-login for that individual.

---
In conclusion, using RFID technology for login in CompuTec PDC simplifies the process for employees while enhancing security. It reduces the need for manual password input and improves efficiency, making it a valuable tool for organizations looking to streamline employee access management.
