---
sidebar_position: 8
---

# Configurations

This guide provides a comprehensive overview of configuring plugins in AppEngine, covering custom configurations, additional configurations, and advanced configuration scenarios. By following these steps, you can effectively manage plugin settings at the company level through the AppEngine administration panel.

---

## Plugin Configuration

Each plugin can include one custom configuration object. This object is defined and managed at the company level using the AppEngine administration panel. The configuration is then injected as a service for plugin operations.

```csharp
public class VehicleWebPluginConfig
{
    public bool NotifyUserOnVehicleChanged { get; set; }
    public bool NotifyUserOnVehicleCreated { get; set; }
    public List<string> UsersToNotify { get; set; }
}
Registering the configuration within a plugin:

csharp
Copy code
public class Info : AEPlugin
{
    public Info()
    {
        PluginCode = "CT.VehOne";
        PluginName = "CT.VehOne Name";
        // Register the configuration to the plugin
        SetConfiguration<VehicleWebPluginConfig>();
    }
}
```

## Custom Configuration

You can extend the functionality of plugin configurations by storing simple configuration objects through the `IAdditionalConfigurationProvider` service. This approach is useful for storing supplementary settings that may not fit into the primary configuration object.

## Advanced Configuration

For plugins requiring default value creation, UI-side validation, or upgrade mechanisms during updates, you can implement the `IAdditionalConfiguration` interface.

Key methods of the IAdditionalConfiguration interface:

```csharp
public interface IAdditionalConfiguration
{
    Version Version { get; set; } // Configuration versioning.

    bool ValidateConfiguration(ICoreConnection connection, out string message); // Validate configurations before saving.

    bool UpgradeConfiguration(ICoreConnection connection); // Upgrade configurations when versions change.

    IAdditionalConfiguration GetDefaultConfiguration(); // Create default configuration values.
}
```

## UI Supported Types

AppEngine supports simple data types and collections for both job and plugin configurations. These types are easily managed through the administration panel, enabling streamlined configuration processes for administrators.

---
By leveraging the plugin configuration capabilities of AppEngine, you can efficiently manage custom settings, extend functionality with additional configurations, and ensure robust handling of version updates through advanced configurations. This structured approach empowers you to tailor plugins to meet your organization's needs while maintaining consistency and ease of use.
