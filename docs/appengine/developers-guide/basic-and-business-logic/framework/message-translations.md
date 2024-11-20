---
sidebar_position: 7
---

# Message Translations

This guide outlines the process for integrating message translations into your plugins, ensuring that your application provides multilingual support. By leveraging a `translations.xml` file, you can manage and apply consistent translations across different plugin types, making your application accessible to a broader audience.

---

## Translation File Structure

To enable multilingual support, define your messages in a structured XML file, as shown below. This XML file maps a unique message identifier to its corresponding translation in various languages. The translation file supports multiple languages such as English, Polish, German, Spanish, and many others.

```xml
<Message id="CT_PF_CannotUpdateBOM" param="2">
    <translation lang="Default">Cannot update Bill of Material. Code: {0}. Error: {1}.</translation>
    <translation lang="ln_English">Cannot update Bill of Material. Code: {0}. Error: {1}.</translation>
    <translation lang="ln_Polish">Nie można zaktualizować Receptury. Kod: {0}. Błąd: {1}.</translation>
</Message>
```

**Key Attributes**:

- **id** - A unique identifier for the message, generated according to the standard.
- **param** - Specifies the number of parameters in the translation string (e.g., {0}, {1}) which are placeholders for dynamic content.
- **lang** - Specifies the language code for the translation. Available language codes includes:

        - `Default`
        - `ln_English`
        - `ln_Polish`
        - `ln_Hebrew`
        - `ln_German`
        - `ln_Danish`
        - `ln_Norwegian`
        - `ln_Italian`
        - `ln_Hungarian`
        - `ln_Chinese`
        - `ln_Dutch`
        - `ln_Finnish`
        - `ln_Greek`
        - `ln_Portuguese`
        - `ln_Swedish`
        - `ln_French`
        - `ln_Spanish`
        - `ln_Russian`
        - `ln_Spanish_La`
        - `ln_Czech_Cz`
        - `ln_Slovak_Sk`
        - `ln_Korean_Kr`
        - `ln_Portuguese_Br`
        - `ln_Japanese_Jp`
        - `ln_Turkish_Tr`
        - `ln_TrdtnlChinese_Hk`
        - `ln_English_Gb`
        - `ln_Serbian`
        - `ln_Spanish_Ar`
        - `ln_Spanish_Pa`
        - `ln_Ukrainian`

## Manifest Declarations

To define a message translation file in the manifest, add the following section to `manifest.json`, marking the `messageTranslations` file as an embedded resource:

```json
{
  "TranslationDescription": {
    "XmlTranslationFile": "CT.VehOne.BL.Translations.MessageTranslations.xml"
  }
}
```

Here, **XmlTranslationFile** points to the embedded resource.

## Plugin Declaration

In addition to defining translations in the manifest, you can declare and load them programmatically within the plugin’s `Info` class:

```csharp
public MyPluginInfo()
{
    TranslationDescription = "www.mytranslation.xml";
    TranslationDescription.TranslationInvoker = getTranslationsFromWWW;
}
```

## Using Translations in Code

With the translations defined and integrated into your plugin, you can now retrieve them in your application code and display them in the appropriate language. To use translations in your code, follow the below example:

```csharp
internal class MyService
{
    private readonly Application _application;
    private readonly ITranslationService _translationService;

    public MyService(ITranslationService translationService, AppHolder appHolder)
    {
        _translationService = translationService;
        _application = appHolder.App;
    }

    public void MyMethod()
    {
        _application.MessageBox(_translationService.GetTranslatedMessage("CT_XX_MyTransId"));
    }
}
```

Alternatively, you can retrieve the translation service from the **ICoreConnection** interface:

```csharp
public void MyMethod()
{
    var trService = _coreConnection.GetService<ITranslationService>();
    _application.MessageBox(trService.GetTranslatedMessage("CT_XX_MyTransId"));
}
```

---
By following the steps in this guide, you can seamlessly integrate multilingual support into your plugins. Using a translations.xml file to store messages and their translations ensures that your application can cater to users in multiple regions. This approach promotes consistency, scalability, and maintainability across your software, improving the user experience for non-English speakers.
