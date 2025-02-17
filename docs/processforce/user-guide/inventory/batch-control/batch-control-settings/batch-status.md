---
sidebar_position: 3
---

# Batch Status

Batch status indicators help users quickly identify the condition of batches within the Pick Order process. By using color-coded records, SAP Business One provides clear visual cues on batch availability, expiry, and accessibility, ensuring efficient inventory management and reducing errors in batch selection.

---

## Batch Record Colors

In the Pick Order screen, batch records are displayed in different colors based on their status:

- **Red**: the expiry date has passed.
- **Blue**: the warning Expiry Date has passed.
- **Black**: neither the expiry date nor the warning date has been reached.
- **Grey**: the batch is locked or non-accessible, set to DISPLAY based on [configuration settings](./manual-and-backflush-issue-type-configuration.md); these records are visible but cannot be picked.

![Available Batches](./media/batch-status/available-batches.webp)

## SAP Business One Documents

The Batch color rules (apart from Grey) have been implemented within Delivery, Goods Return, Inventory Transfer, and Goods Issue documents.

---
