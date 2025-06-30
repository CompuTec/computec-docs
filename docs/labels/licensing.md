---
sidebar_position: 4
---

# Licensing

This guide explains how to install, configure, and assign licenses for **CompuTec Labels**, including obtaining the license file, assigning it to the CompuTec License Server and allocating printer licenses.

---

## Guide: Licensing Setup for CompuTec Labels

### Prerequisites

Before proceeding, ensure you meet the following prerequisites:

- **CompuTec License Server version 5.5 or higher** is required.
- The CompuTec License Server (version 5.5 or higher) can be downloaded from the CompuTec License Service section of the [Releases page](/docs/processforce/releases/download#computec-license-service).

### Step 1: Install CompuTec Service Manager

> **Note**: The CompuTec Service Manager is part of the CompuTec License Server.

1. Run the License Server installation file.
2. After installation, launch **CompuTec Service Manager**.
3. From the service dropdown, select **CompuTec Label Service**.
4. Click **Settings** to open the configuration form.

   ![Service](./media/licensing/computec-label-service.webp)

5. In the new window, click **Settings** again to open the detailed configuration.

   ![Settings](./media/licensing/computec-label-settings.webp)

---

## How-to: Obtain and Apply License Files

### Step 2: Obtain a License File

To request a license file from CompuTec Support, provide the following:

1. **CompuTec Labels Key** – This is found in the Settings screen shown above.
   - 📝 *Please copy the key as text. Do not send a screenshot.*

2. **Number of Printer Licenses Required**:
   - **Demo/Test (partner use)**: 1 printer license.
   - **Production (client use)**: As per purchased quantity.

CompuTec Support will email you a license file in `.xml` format.

---

### Step 3: Assign the Main License

1. Open **Settings** in the CompuTec Service Manager.
2. In the Labels Settings form, click **Change** and browse to the `.xml` license file.

   ![Change License](./media/licensing/change-license.webp)

3. Once uploaded, restart both:
   - CompuTec License Server
   - CompuTec Label Service  
   Click the highlighted restart button:

   ![Restart](./media/licensing/computec-label-service-restart.webp)

---

### Step 4: Assign Printer Licenses

1. Go to **CompuTec Label Printing Manager** > **Printers**.
2. The interface will display a message about the license server connection and available licenses.

   ![Labels license](./media/licensing/labels-license.webp)

3. To assign a license to a printer:
   - Right-click on the printer.
   - Select **Assign a license**.
   - Click **Update**.

   ![Assign License](./media/licensing/assign-license.webp)

---

## Reference: Key License Components

| Component                     | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **License Server Version**   | Must be 5.5 or higher                                                        |
| **CompuTec Labels Key**      | Unique identifier needed to request the license file                        |
| **License File Format**      | `.xml` file issued by CompuTec Support                                      |
| **Service Manager Tool**     | Used to configure and assign both system and printer licenses               |

---

## Why Licensing is Required

Licensing ensures compliance and controls access to CompuTec Labels' printing capabilities. Each printer requires a license for operational authorization, whether it's for testing or production.

---
