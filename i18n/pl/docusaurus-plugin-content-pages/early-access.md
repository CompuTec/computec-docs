# Program Wczesnego Dostępu CompuTec

Program wczesnego dostępu jest przeznaczony dla partnerów, którzy chcą przyczynić się do testowania wtyczek i frameworku CompuTec. Aby ubiegać się o wczesny dostęp, należy utworzyć zgłoszenie do pomocy technicznej pod adresem [https://support.computec.pl](https://support.computec.pl) w celu uzyskania tokenu dostępu do programu wczesnego dostępu.

## Wymagania wstępne

Przed włączeniem konfiguracji wczesnego dostępu należy wykonać następujące czynności:

- Pobierz i zainstaluj najnowszą wersję [CompuTec AppEngine](https://learn.computec.one/docs/appengine/releases/appengine/download).
- Postępuj zgodnie z krokami instalacji podanymi w [CompuTec AppEngine Installation Guide](https://learn.computec.one/docs/appengine/administrators-guide/configuration-and-administration/installation).
- Kroki instalacji serwera CompuTec WMS można znaleźć [tutaj](https://learn.computec.one/docs/wms/administrator-guide/installation/overview).

### Jak włączyć wtyczki wczesnego dostępu w CompuTec AppEngine Store

W panelu administracyjnym przejdź do Konfiguracja -> Konfiguracja zaawansowana. W zakładce Repozytorium pluginów, włącz repozytorium o adresie: `https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json`.

Utwórz plik o nazwie `CtNugetConfig.config` z zawartością podaną poniżej, zastępując APIKEY kluczem API. Zapisz ten plik w katalogu instalacyjnym CompuTec AppEngine w C:\Program Files\CompuTec\AppEngine\.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
   
  <packageSources>
    <add key="DevatAzure" value="https://pkgs.dev.azure.com/computec-one/development/_packaging/dev/nuget/v3/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <DevatAzure>
        <add key="Username" value="earlyaccess@computec.pl" />
        <add key="ClearTextPassword" value="APIKEY"/>
      </DevatAzure>
  </packageSourceCredentials>
</configuration>
```

Upewnij się, że zastąpiłeś `APIKEY` rzeczywistym kluczem API dostarczonym do wczesnego dostępu.