---
sidebar_position: 5
---

# Form Translations

Form translation is a critical step in ensuring applications are accessible and user-friendly across multiple languages. The process involves creating or updating translation files based on form XML definitions and generating translated forms, often integrated into the build process for efficiency. This guide provides a step-by-step approach to manage form translations using the ct tool, making it simple to internationalize your applications.

---

Form translations are usually stored in `FormTranslations.xml`. Using the ct tool, you can:

- Create or update translation files based on the form XML definitions.
- Generate translated forms, which is typically part of the build process.

To translate the forms, please fill in the `FormTranslations.xml` with appropriate values.

## Generating the FormTranslations.xml File

To generate the `FormTranslations.xml` file, use the following command:

```batch
dotnet ct GenerateTranslations -s C:\git\core\SampleApp\CT.VehOne\Source\CT.VehOne.UI\UI\Forms -r C:\git\core\SampleApp\CT.VehOne\Source\CT.VehOne.UI\ -t C:\git\core\SampleApp\CT.VehOne\Source\CT.VehOne.UI\UI\Translations\FormTranslations.xml
```

- **-s : Source** - pecifies the folder containing form definitions.
- **-r : Project Root Directory** - Points to the project’s root directory.
- **-t : Output Translations** - The output directory for translations.

This setup ensures that every build triggers the translation process, producing updated and translated forms automatically.

## Generating the Translated Forms

It is recommended to include this step in the SAP UI project to automatically trigger form generation.

```xml
<Target Name="Translate" AfterTargets="AfterBuild">
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet tool restore"/>
    <Exec WorkingDirectory="$(ProjectDir)" Command="dotnet ct translate -s $(ProjectDir) -t UI\Translations\FormTranslations.xml" />
</Target>
```

:::tip
When working with forms, add `FORMCachingDisabled` in the [connectionProperties](connection-properties.md) configuration. This ensures that files in `computec.start` are not cached, allowing the default form from the output directory to load in the UI every time.
:::

---
This guide equips you with the tools and steps necessary to manage form translations effectively using the ct tool. By automating the generation of FormTranslations.xml and integrating translated form creation into your build process, you can streamline internationalization workflows. These best practices ensure that your forms remain dynamic, accurate, and globally accessible.
