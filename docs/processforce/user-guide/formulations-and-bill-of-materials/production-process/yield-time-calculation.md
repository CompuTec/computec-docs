---
sidebar_position: 2
---

# Yield - Time Calculation

In many production environments, yield directly affects the overall production time. CompuTec ProcessForce automatically considers yield when planning resource quantities.

- The yield value defined in the Bill of Materials (BOM) header is used to calculate the planned resource quantity.
- When the Ignore Yield checkbox is selected, ProcessForce assumes a 100% yield, disregarding the actual yield percentage specified in the BOM.

**Example Calculation**:

If Yield = 80%, the system adjusts the planned resource quantity by 1.25 to meet the required output: (1/Yield% = 1/0.8 = 1.25). This ensures that additional resources are allocated to compensate for yield loss.

The yield value defined in the BOM is automatically copied to the Manufacturing Order.

![Ignore Yield](./media/yield-time-calculation/production-process-ignore-yield.webp)

![Yield Checkbox](./media/yield-time-calculation/manufacturing-order-yield-checkbox.webp)

---
