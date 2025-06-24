---
sidebar_position: 1
---

# Installing the CompuTec Tool

The CompuTec Tool is a powerful utility designed to streamline the development and deployment of plugins, models, and translations for various SAP-related projects. Whether you're generating business logic models, creating plugin packages, or managing translations, this guide will provide you with a step-by-step process to efficiently leverage the tool.

**Key Features of the CompuTec Tool**

- **Model Generation** - Automate the creation of models, serializers, and related components to enhance development speed and accuracy.
- **Plugin Packaging** - Simplify plugin deployment by generating ZIP and NuGet packages for manual or repository-based installation.
- **Translation Management** - Effortlessly generate translations for SAP forms to support multilingual environments.
- **Custom Tasks Integration** - Use .csproj configurations to automate key processes such as model generation and package creation during builds.

---

To install the CompuTec tool, run the following command:

```batch
dotnet tool install CompuTec.Tool  
```

## Generate Models

To generate models, use:

```batch
dotnet ct gen
```

If the required options are missing, you will see an error similar to this:

```text
ERROR(S):
  Required option 's, SourceDll' is missing.
  Required option 'd, Destination' is missing.
  Required option 'n, PluginNamespace' is missing.
```

Below are the command options for generating models:

- **-b, --Debugger**: Attach debugger.
- **-l, --Log**: Log to information.
- **-s, --SourceDll** (Required): Source Business Logic DLL.
- **-d, --Destination** (Required): Plugin Destination Source Directory (e.g., "C:\git\ConsolePlugin\Sources").
- **-m, --ModelDestination**: Destination Source Model Directory.
- **-i, --SerializationDestination**: Destination Source Serializers Directory.
- **-n, --PluginNamespace** (Required): Plugin Namespace.
- **-e, --ModelNamespace**: Model Namespace.
- **-r, --SerializerNamespace**: Serializer Namespace.
- **-p, --PluralEndpointNames**: (Default: false) Plural endpoints names.
- **-a, --All**: (Default: false) Generate all.
- **-g, --generators**: Custom Generators (e.g., `s`-serializer, `o`-ODataController, `m`-models, `c`-REST controllers).
- **-w**: Serialize models for generation analysis.

## Generate Plugin

To create a plugin package for manual installation, use:

```batch
dotnet ct pack
```

### Example Error Message

If required values are missing, you may see an error like this:

```text
ERROR(S):
  A required value not bound to option name is missing.
  Directory (pos. 0)    Required. Directory to pack or unpack.
```

The command options are:

- **-s**: Save in same directory.
- **-d**: Attach debugger.
- **-v**: Validate DLL.
- **-r**: Version to set.
- **-x**: Dependencies separated by `;` that must have the same minimal version (e.g., `"ConsoleApp.DI;ConsoleApp.Core"`).
- **-o**: Only replace manifest file.

## Translating SAP Forms

To generate translations for SAP forms:

```batch
dotnet ct GenerateTranslations
```

If required options are missing, the error may look like this:

```text
ERROR(S):
  Required option 's' is missing.
  Required option 'r' is missing.
  Required option 't' is missing.
```

Options for generating translations:

- **-s** (Required): Sources Directory.
- **-r** (Required): Root Directory.
- **-t** (Required): Form Translation File.

## Creating Plugin Package for Manual Installation

Use:

```batch
dotnet ct pack
```

If required values are missing:

```text
ERROR(S):
  A required value not bound to option name is missing.
  Directory (pos. 0)    Required. Directory to pack or unpack.
```
## Installing Plugin DatabaseStructure
To start the database Structure installation  on the company for the given plugin DLL, use 

```batch
dotnet ct install
```
Options:

- **-s** - Sld Server : Required.
- **-c** - Company Name.
- **-i** - Company Id.
- **-u** - User Name : Required.
- **-p** - Password : Required.
- **-d** - Database Server : Required.
- **-t** - ServerType dst_HANADB,dst_MSSQL2016,dst_MSSQL2019,dst_MSSQL2022,etc : Required.
** path for the dll** 

Use:

```batch
dotnet ct install -v hanadev:40000 -c SBO_DB  -u manager -p "password" -d"DEV@hanadev:30013" -t dst_HANADB "CT.VehOne\bin\Debug\net8.0\CT.VehOne.dll"
```

## Creating NuGet Package for Plugin Repository

To push a NuGet package to the plugin repository, use:

```batch
dotnet ct push
```

If required values are missing, you might see:

```text
ERROR(S):
  A required value not bound to option name is missing.
```

Options:

- **-r** - Version to set.
- **-k** - API Key.
- **-s** - Source.
- **-x** - Dependencies with minimal version.

## Setting Up the .csproj File to Manage Required Tasks

### For Business Logic Plugin

1. Generate models, serializers, and other components.
2. Create a plugin zip file and NuGet package on release.

```xml
<Target Name="GenerateSerializers" AfterTargets="AfterBuild" Condition="'$(TargetFramework)' == 'net8.0'">
    <Message Importance="High" Text="Generate Models Serializers etc $(ProjectDir) "/>
    <Exec WorkingDirectory="$(TargetDir)" Command="del *.zip /F"/>
    <Exec WorkingDirectory="$(TargetDir)" Command="del *.nupkg /F"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet tool restore"/>
    <Exec Command="dotnet ct gen --Destination $(OneUpFolder)\CT.VehOne\ -l -g scmo -s $(TargetPath) -n CT.VehOne" />
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct push $(TargetDir) -r $(Version) -z " Condition="'$(Configuration)'!='Debug'"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct pack $(TargetDir) -r $(Version)"/>
</Target>
```

### For SAP UI Plugin

Generate translated forms on release.

```xml
<Target Name="CTpack" AfterTargets="AfterBuild">
    <Exec WorkingDirectory="$(TargetDir)" Command="del *.zip /F"/>
    <Exec WorkingDirectory="$(TargetDir)" Command="del *.nupkg /F"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet tool restore"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct push  $(TargetDir) -x CT.VehOne.BL -r $(Version) -z" Condition="'$(Configuration)'!='Debug'"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct pack $(TargetDir) -x CT.VehOne.BL -r $(Version)"/>
</Target>
```

### For CompuTec AppEngine Plugin

Generate plugin zip file and NuGet package on release.

```xml
<Target Name="CTpack" AfterTargets="AfterBuild">
    <Message Text="AfterBuild"/>
    <Exec WorkingDirectory="$(TargetDir)" Command="del *.zip /F"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet tool restore"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct push  $(TargetDir) -r $(Version)  -x CT.VehOne.BL -s $(ComputecPluginSource) -z" Condition="'$(Configuration)'!='Debug'"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct pack $(TargetDir) -r $(Version) -x CT.VehOne.BL"/>
</Target>
```

---
The CompuTec Tool is an indispensable resource for developers working with SAP systems. Its wide range of features not only accelerates the development process but also ensures consistency and efficiency in managing plugins, models, and translations. By following the steps in this guide, you can fully leverage the capabilities of the tool to streamline your workflow and focus on delivering value to your projects.
