---
sidebar_position: 1
---

# Model Generator

In software development, automation of model and controller generation plays a key role in enhancing productivity and reducing the likelihood of errors. This is especially true in complex systems where business logic (BL) dictates much of the structure. The content tool (ct content tool) facilitates the generation of essential components such as models, serializers, and CRUD controllers, tailored to business logic.

The `ct` content tool, based on business logic defined in the BL plugin and additional annotations, will generate:

- Models for serialization CTGeneratedCode\Models
- Serializers based on attributes and logic CTGeneratedCode\Serializers
- CRUD Controllers CTGeneratedCode\Controllers
- OData Controllers CTGeneratedCode\Controllers

The best practice is to set up the generator task in the project file so that required components are generated in the AE plugin after the BL build.

---

## Example Business Logic Project File

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
     <OneUpFolder>$(MSBuildProjectDirectory)\..</OneUpFolder>
```

```xml
    <Target Name="GenerateSerializers" AfterTargets="AfterBuild" Condition="'$(TargetFramework)' == 'net8.0'">
        <Message Importance="High" Text="Generate Models Serializers etc $(ProjectDir) "/>
        <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet tool restore"/>
        <!-- Below Code is used for generating controllers, models, and other files for the AE plugin.
        For more info, type `dotnet ct gen /h` in the command line. -->
        <Exec Command="dotnet ct gen --Destination $(OneUpFolder)\CT.VehOne\ -l -g scmo -s $(TargetPath) -n CT.VehOne" />
    </Target>
```

- **--Destination**: Path to the folder where the generated code will be placed.
- **-l**: Log output.
- **-g**: Generate types:
        - `s`: Serializers
        - `c`: CRUD Controllers
        - `o`: OData Controllers
        - `m`: Models
- **-n**: AE plugin root namespace.

For more information, see more about [dotnet ct](../development-tools/ct-tool.md).

## UDO Bean Required Attributes

To enable generation of the UDO Bean type, decorate the interfaces with appropriate attributes.

### HEADER Object

#### AppEngineUDOBean Attribute (applied to an `IUdo` interface)

- **TableName** *(required)*: Name of the table, e.g., `CT_VO_OVMD`
- **ObjectCode** *(required)*: Object code, e.g., `CT_VO_OVMD`
- **Ignore**: If true, the object is ignored.
- **ExcludedHttpMethods**: Specific methods can be excluded from generation, e.g., `"POST,DELETE"`.
- **ObjectType**: Type of the object.

### Child Object

#### AppEngineUDOChildBean Attribute (applied to an `IUDOChildBean` interface)

- **ObjectCode** *(required)*: Object code.
- **TableName** *(required)*: Table name.
- **Parent** *(optional)*: Used for tree-based relations, specifying the parent-child interface that contains an `AppEngineProperty` attribute holding a key to the parent collection.

### Property Attributes

#### AppEngineProperty

```csharp
public class AppEnginePropertyAttribute : Attribute
{
    /// <summary>
    /// If set to `true` for a `DateTime` property, it will be generated as a `DateOnly` type in the model.
    /// </summary>
    public bool IsDateOnly = false;

    /// <summary>
    /// If set to `true` for a `DateTime` property, it will be generated as a `TimeOnly` type in the model.
    /// </summary>
    public bool IsTimeOnly = false;

    /// <summary>
    /// Priority of the property; lower values indicate higher priority when filling in UDO from the model.
    /// </summary>
    public int Priority;

    /// <summary>
    /// Name of the parent property that this property is a child of.
    /// </summary>
    public string ParentKey;

    public bool Required;

    public bool Autogenerate;

    /// <summary>
    /// If set, the system will automatically clear the specified collection names.
    /// Example: setting `Lines` collection when a header field controls the content of the lines.
    /// </summary>
    public string[] ClearChilds;

    /// <summary>
    /// Disables standard convention for converting `DateTime` fields to `DateOnly` or `TimeOnly` if needed.
    /// </summary>
    public bool IgnoreConvertionConvention = false;
}
```

#### AppEnginePropertyIgnore

This attribute can be applied to ignore a property in generation.

---
The ct content tool and its associated configuration streamline the process of generating models, serializers, and controllers based on the business logic defined in your application. Proper integration of the generator task into the project file ensures that all necessary components are created automatically, enhancing the efficiency and scalability of the development process.
