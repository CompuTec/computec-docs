---
sidebar_position: 3
---

# Inversion of Control (IoC) in CompuTec.Core2

In modern software development, managing dependencies and ensuring flexibility in handling various components is crucial. One powerful design pattern that helps achieve this is Inversion of Control (IoC). The CompuTec.Core2 framework utilizes IoC to efficiently manage services and dependencies across multiple database connections. This guide provides an overview of how IoC is implemented in CompuTec.Core2.

---

## Scopes - Basics

The CompuTec.Core2 framework utilizes an IoC (Inversion of Control) approach, allowing it to handle multiple connections to different databases simultaneously. For each connection, a separate scoped service collection is created, enabling independent handling and registration of services per connection.

### Main Levels of Registration

There are three primary levels of registrations available for developers:

1. **Application Level** - Created once at application startup, this primary level scope serves as the base container for all other scopes. Services registered here, like singletons, are accessible across all connections and databases.

2. **Company Level** - While not a distinct physical scope, this level allows for the registration of services that are shared across all connections within a specific database, providing a way to manage services specific to a company's data.

3. **Connection Level** - This is the default scope where most services are registered. Each connection to a database has its own set of services, allowing for scoped registrations that are specific to each database connection.

## Registration Methods

Below are the different methods available for registering services in the CompuTec.Core2 framework, providing flexibility in how services are instantiated and managed across different scopes.

### By Attribute (Default and Most Common Way)

Services can be registered using an IoC attribute, which allows for simple and declarative registration with the following parameters:

- **Scope** - Specify the scope of the service—choose from Application, Company, or Connection based on the level at which the service should be available.
- **Singleton** - Set this to true if the service should be instantiated once and shared, or false if a new instance should be created each time it is requested.
- **ReferenceType** - The type under which the service implementation is registered, which helps in resolving dependencies.
- **Named** - Optionally, provide a name for the service implementation if multiple implementations of the same interface are needed.

### By Plugin Information

Using the Autofac IoC framework, registrations can be customized by overriding methods:

- **Application Scope** -  Override the `BuildAppContainer` method to register services at the application level.
- **Company Scope** - Override the `BuildConnectionContainer` method, ensuring you call the base method to retain existing functionality while customizing service registration for company-specific needs.

### On Application Startup

This method is applicable when building a custom application that integrates with the CompuTec Core2 framework. Service registrations can be performed at startup to ensure that all required services are available as the application initializes. This approach is typically used for custom applications or extensions where the CompuTec Core2 infrastructure is involved.

## Creating Instances

Creating instances in the CompuTec.Core2 framework is straightforward, thanks to its robust IoC implementation. Services can be resolved dynamically based on their registration scope, ensuring that each connection or context receives the appropriate service instance.

### On the Connection

To create an instance of a registered object on the connection level, reference the `ICoreConnection` object and call `GetService<T>()`. Alternatively, use `IServiceProvider` from `Microsoft.Extensions.DependencyInjection.Abstractions` to resolve IoC services.

### Example

```csharp
public interface IVehicleInformationService
{
    string GetVehicleName(string code);
    bool ChangeVehicleNameForVehicle(string code, string name);
    bool AddOwner(string vehicleCode, string ownerName);
}

[Ioc(Scope = IocScope.Connection, ReferenceType = typeof(IVehicleInformationService))]
internal sealed class VehicleInformationService : IVehicleInformationService
{
    private readonly ICoreConnection _coreConnection;
    private readonly ILogger<VehicleInformationService> _logger;

    public VehicleInformationService(ICoreConnection coreConnection, ILogger<VehicleInformationService> logger)
    {
        _coreConnection = coreConnection;
        _logger = logger;
    }
    
    public string GetVehicleName(string code)
    {
        using var measure = _logger.CreateMeasure();
        _logger.LogInformation("Getting vehicle name for code {code}", code);
        return QueryManager.ExecuteSimpleQuery<string>(_coreConnection, "@CT_VO_OVMDA", "Name", "Code", code);
    }

    public bool ChangeVehicleNameForVehicle(string code, string name)
    {
        using var measure = _logger.CreateMeasure();
        var udo = _coreConnection.GetService<IVehicleMasterData>();
        var success = udo.GetByKey(code);
        if (!success)
        {
            _logger.LogWarning("Vehicle with code {code} not found", code);
            return false;
        }
        udo.Name = name;
        return udo.Update() == 0;
    }

    public bool AddOwner(string vehicleCode, string ownerName)
    {
        using var measure = _logger.CreateMeasure();
        var udo = _coreConnection.GetService<IVehicleMasterData>();
        var success = udo.GetByKey(vehicleCode);
        if (!success)
        {
            _logger.LogWarning("Vehicle with code {code} not found", vehicleCode);
            return false;
        }
        udo.Owners.SetCurrentLine(udo.Owners.Count - 1);
        if (!udo.Owners.IsRowFilled())
            udo.Owners.Add();
        udo.Owners.U_OwnerName = ownerName;
        return udo.Update() == 0;
    }
}
```

This example demonstrates defining and implementing an IoC-based service in the CompuTec.Core2 framework, with logging and OpenTelemetry measurement integration.

---
Incorporating Inversion of Control (IoC) in the CompuTec.Core2 framework provides developers with a robust and flexible mechanism for managing dependencies across multiple database connections. By registering services at the appropriate scope—whether at the application, company, or connection level—developers can optimize service management and ensure scalability.
