---
sidebar_position: 1
---

# Przegląd

Rozszerzenie CompuTec Premium upraszcza proces weryfikacji kontrahentów na białej liście podatników VAT. Funkcja ta umożliwia firmom zapewnienie zgodności z przepisami podatkowymi poprzez potwierdzenie statusu VAT partnerów biznesowych, sprawdzenie, czy firma została odmówiona rejestracji, oraz weryfikację numeru rachunku bankowego przed realizacją płatności.

---

## Co to jest Biała Lista Podatników VAT?

[Biała lista podatników VAT](https://www.podatki.gov.pl/wykaz-podatnikow-vat-wyszukiwarka), wprowadzona 1 września 2019 roku, stanowi skonsolidowaną bazę danych do natychmiastowej weryfikacji statusu VAT kontrahentów. Zastąpiła wcześniejsze listy podatników VAT zarejestrowanych, niezarejestrowanych i wykreślonych.

Biała lista pozwala firmom na:

- Weryfikację, czy kontrahent jest czynnym podatnikiem VAT.
- Sprawdzenie, czy kontrahentowi odmówiono rejestracji, został wykreślony lub przywrócony wraz z uzasadnieniem prawnym.
- Potwierdzenie numeru rachunku bankowego, na który należy dokonywać płatności.

## Konfiguracja

### Konfiguracja ogólna

Aby skorzystać z danej opcji, zaznacz odpowiednie pole wyboru w Ustawieniach Ogólnych:

![White List](./media/white-list.png)

Aby włączyć funkcję, przejdź do Narzędzia → Okna zdefiniowane przez użytkownika → CT_PR_Conf – Konfiguracja Premium. W oknie Konfiguracja Premium ustaw próg weryfikacji:

![Amount](./media/amount.png)

- 0: sprawdzane są wszystkie dokumenty.
- 15 000 zł: sprawdzane są dokumenty o wartości 15 000 zł lub więcej.

### Rachunek faktoringowy

Jeśli weryfikowany rachunek jest rachunkiem faktoringowym, włącz odpowiednią opcję w ustawieniach rachunku.

![Factoring Account](./media/factoring-account.png)

## Użytkowanie

### Kartoteka kontrahenta

![Business Partner Master Data](./media/business%20-partner-master-data.png)

Rozszerzenie sprawdza numery rachunków bankowych przypisanych do kontrahenta w białej liście. Wyniki wyświetlane są w systemie:

![System-Message](./media/system-message.png)

- Liczba przypisanych rachunków.
- Liczba pozytywnie zweryfikowanych rachunków.
- Liczba negatywnie zweryfikowanych rachunków.

### Faktura zakupu (A/P Invoice)

![AP Invoice White List](./media/ap-invoice-white-list.png)

W formularzu faktury zakupu, w zakładce Księgowość, użytkownicy mogą zweryfikować parowanie numeru NIP i rachunku bankowego na białej liście. Pole Weryfikacja na białej liście wyświetli:

![Last Checking Result](./media/last-checking-result.png)

- Y: pozytywna weryfikacja.
- Er: negatywna weryfikacja.

### Kreator płatności

![Payment Wizard](./media/payment-wizard.png)

Kreator płatności sprawdza numery rachunków bankowych powiązanych z dokumentami na białej liście. Wyniki są wizualnie oznaczone:

- Czerwone wiersze: negatywna weryfikacja.
- Zielone wiersze: pozytywna weryfikacja.
- Brak podświetlenia: brak weryfikacji (zgodnie z ustawieniami konfiguracji).

---
