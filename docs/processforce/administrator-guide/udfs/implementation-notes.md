---
sidebar_position: 2
---
# Use Prefixes for User-Defined Fields

When adding **User-Defined Fields (UDFs)** to **CompuTec ProcessForce** objects, always use a unique prefix in the field name.

Using a consistent naming convention helps prevent conflicts with standard **CompuTec ProcessForce** fields during upgrades and makes customizations easier to identify and maintain.

## Why use a prefix?

Using a unique prefix helps you:

- Avoid naming conflicts with fields added in future **CompuTec ProcessForce** releases.
- Make custom fields easy to identify during support and troubleshooting.
- Simplify upgrades and maintenance.

## Naming convention

Name your fields using the following format:

```text
Prefix_FieldName
```

Choose a short prefix (2–3 characters) that identifies your company or customer.

### Example

If your company abbreviation is **AB** and you want to create a field that stores weight information:

| Value | Example |
| --- | --- |
| Prefix | `AB` |
| Field name | `weight` |
| UDF name | `AB_weight` |
| Database field | `U_AB_weight` |

SAP Business One automatically adds the ``U_`` prefix to all User-Defined Fields stored in the database.

## Best practices

- Use the same prefix for all custom fields created for a customer or implementation.
- Keep the prefix short, unique, and meaningful.
- Separate the prefix and field name with an underscore (`_`).
- Do not use prefixes that could conflict with standard **CompuTec ProcessForce** field names.

## Result

Following this naming convention helps ensure that your customizations remain compatible with future **CompuTec ProcessForce** updates and are easier to identify during support, maintenance, and upgrades.
