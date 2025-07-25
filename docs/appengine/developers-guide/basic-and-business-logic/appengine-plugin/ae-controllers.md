---
sidebar_position: 3
---

# Creating Controllers

There are two types of controllers in CompuTec AppEngine: controllers with SAP authorization and controllers without authorization. In a secure controller, connection-scoped services are injected. This guide outlines the key differences between these controller types, provides code examples, and highlights Swagger integration to simplify API documentation.

## Classic Controllers

Classic controllers are classified as:

- **Secure Controller**: Use `AppEngineSecureController` for authorized access.
- **Non-Authorized Controller**: Use `AppEngineController`.

Routes will follow the pattern `api/<PluginRoutePrefix>`.

Example:

```csharp
public class MyOwnController : AppEngineSecureController
{
    [HttpGet]
    public string Get()
    {
        return "Hello World!";
    }
}
```

To access services in secure controllers, use `GetService<T>` in the method body or inject them in costructor.

>**Note**: In non-secure controllers, only application-scope services are accessible.

## Minimal API Controllers

To create a minimal API controller, inherit from `AeSecureMinimalApiEndpointBuilder` or `AeMinimalApiEndpointBuilder`. Use the `Route` property to set up the route.

Example:

```csharp
public class MyOpenApiBuilder : AeSecureMinimalApiEndpointBuilder
{
    public override string Route => "MyApiRoute";

    public override void Configure(RouteGroupBuilder endpointRouteBuilder)
    {
        endpointRouteBuilder.MapGet("/Test", Test);
    }

    private IResult Test([FromServices] ITranslationService translationService)
        => Results.Ok(translationService.Value.GetTranslatedMessage("VehOne.VinIsMissing"));
}
```

To access connection or company Scope  services you can get them simply by referencing them in the action declaration with `[FromServices]` attribute
>**Note** `SecureScopeService<T>` is obsolete.

## Swagger Integration

All controllers, including minimal API controllers, are visible in Swagger. This ensures seamless API exploration and testing, regardless of the controller type.

![Swagger Integration](./media/swagger-integration.png)

---
