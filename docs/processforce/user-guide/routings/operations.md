---
sidebar_position: 3
---

# Operations

These forms allow the user to define Operations, Properties and Input/Output Properties.

To view related video content, click [here](https://www.youtube.com/playlist?list=PLtT6kgaz5YneralBjyvyCSYXbTT0QRHYx).

---

![Operation Diagram](./media/operations/operations-diagram.webp)

## Operations

:::info Path
Production → Routings → Operations
:::

This form allows the user to define operations, which will be a part of the routing for making the product.

### Header

#### QC Active

This checkbox determines whether a specific Operation is affected by the [Create QC Document for Operation on MOR status change option](/docs/processforce/user-guide/system-initialization/general-settings/qc-tab).

The checkbox is also available from the Manufacturing Order, Production Process, Routing form level.

#### Force Order

Checking this checkbox blocks starting this Operation on any Manufacturing Order (booking time in either ProcessForce or CompuTec PDC) before the previous Operation is not finished.

The checkbox is also available from the Manufacturing Order, Production Process, Routing form level.

#### Rounding

When this checkbox is checked, the system rounds a number of Item pieces to an integer.

**Example**

There is a Manufacturing Order with 5 pieces (pcs) in Planned Quantity. There are 4 Resources in an Operation. Without the checkbox checked, each Resource has 1,25 pcs assign (5 pcs by 4 Resources). Run Time is 8 h/pc.

If the Rounding checkbox is checked, the system will act the following way: 5 pcs : 4 Resources = round down to 1 and assign the remaining amount to the last Resource:

- 1st Resource: 1 pc x 8 h,
- 2nd Resource: 1 pc x 8 h,
- 3rd Resource: 1 pc x 8 h,
- 4th Resource: 2 pcs x 8 h.

Other examples:

- 3 pcs : 4 Resources = 3 Resources, 1 pc each, the last Resource 0 pcs,
- 11 pcs : 4 Resources = 3 Resources, 3 pcs each, the last Resource 2 pcs.

The checkbox is also available from the Manufacturing Order, Production Process, Routing form level.

### Properties

- This tab allows the user to select, add and remove a number of properties for the operation.
- The user can select from a number of expressions to record a specific value or a from/to value dependent upon the expression.

![Operation](./media/operations/operation.webp)

### Resources

- This form allows the user to select, add and remove resources that are to be used within the operation.
- Multiple resources can be added, but one of the resources has to be selected as the default.
- The fixed and variable time element values and unit of rates of the selected resource are set as default in this tab.
- The user can change these default values if required for this specific operation/resource combination.

![Operation Resources](./media/operations/operation-resources.webp)

### Resource Properties

- The properties of the selected resource are set as default in this tab.
- This tab allows the user to select and add additional properties for this resource/operation combination and remove the defaulted values.

![Operation Resource Properties](./media/operations/operation-resource-properties.webp)

## Properties for Operations

:::info Path
    Administration → Setup → Production → Operation Properties
:::

This form allows the user to define properties for the operation, for example, consumables.

![Operation Property](./media/operations/operation-property.webp)

## I/O Properties for Operations

:::info Path
    Administration → Setup → Production → I/O Operation Properties
:::

This form allows the user to define an operation's input and output properties.

This is additional data to describe the production process, for example, input viscosity and output viscosity.

![I/O Properties for Operations](./media/operations/i-o-property.webp)
