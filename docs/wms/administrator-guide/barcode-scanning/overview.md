---
sidebar_position: 1
---

# Overview

Many of CompuTec WMS functions can be operated by scanning barcodes. Here, you can find information on barcode scanning.

---

## Barcodes Physical Attributes

The minimal and maximal size of supported barcodes depends on scanner attributes.

CompuTec WMS supports every barcode standard as long as it is recognizable for a scanner used with the application.

In the case of using USB scanners (with desktop applications, e.g., on PCs or tablets), it is required to configure prefixes additionally.

## GS1 Standard - CompuTec Decoder

GS1 Barcode Standard is supported by adjusting it to CompuTec WMS (see the table below). Full implementation of the standard is planned for future releases. To use CompuTec WMS-adapted GS1 standard coding, choose the right option in the Server options.

### Barcodes Creation

Barcodes created to be supported by WMS have to have specific prefixes. A particular prefix is recognized only in a corresponding WMS screen; e.g., a barcode with a warehouse prefix will be recognized only when scanned on the WMS warehouse selection screen.

|   AI   | Char count |                                     Description                                     |                 GS1BarcodeDecoder AI                 |                    Supported AI                   |
|:------:|:----------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------:|:-------------------------------------------------:|
| 00     | 18         | Serial Shipping Container Code (SSCC)                                               | GS1SSCC                                              | SSCC                                              |
| 01     | 14         | Global Trade Item Number (GTIN)                                                     | GS1GTIN                                              | GTIN                                              |
| 02     | 14         | GTIN of Contained Trade Items                                                       | GS1GTINInLogisticUnit                                | GTINInLogisticUnit                                |
| 10     | 1 to 20    | Batch or Lot Number                                                                 | GS1BatchNo                                           | BatchNumber                                       |
| 11     | 6          | Production Date (YYMMDD)                                                            | GS1ManufacturingDate                                 | ProductionDate                                    |
| 12     | 6          | Due Date (YYMMDD)                                                                   | GS1DueDate                                           | DueDate                                           |
| 13     | 6          | Packaging Date (YYMMDD)                                                             | GS1PackagingDate                                     | PackagingDate                                     |
| 15     | 6          | Best Before Date (YYMMDD)                                                           | GS1BestBefore                                        | BestBefore                                        |
| 16     | 6          | Last Offer Date (YYMMDD)                                                            | GS1LastOfferDate                                     | LastOfferDate                                     |
| 17     | 6          | Expiration Date (YYMMDD)                                                            | GS1ExpiryDate                                        | ExpiryDate                                        |
| 20     | 2          | Variant Number                                                                      | GS1VariantNumber                                     | VariantNumber                                     |
| 21     | 1 to 20    | Serial Number                                                                       | GS1SerialNo                                          | SerialNumber                                      |
| 30     | 1 to 8     | Variable Measure Trade Item – Count of Items                                        | GS1VMTICount                                         | VMTICount                                         |
| 310    | 1 to 8     | Trade Unit                                                                          | GS1TradeUnit*                                        | TradeUnit                                         |
| 37     | 1 to 8     | Count of Trade Items                                                                | GS1NumberOfUnitInLogisticUnit                        | NumberOfUnitInLogisticUnit                        |
| 90     | 1 to 30    | Information Mutually Agreed Between Trading Partners (Including FACT DIs)           | GS1MutuallyAgreedInformation                         | MutuallyAgreedInformation                         |
| 91     | 1 to 30    | Company Internal Information                                                        | GS1CTItemCode                                        | ItemCode                                          |
| 92     | 1 to 30    | Company Internal Information                                                        | GS1CTBinOrWhs                                        | BinOrWhs                                          |
| 93     | 1 to 30    | Company Internal Information                                                        | GS1CTSU                                              | SU                                                |
| 94     | 1 to 30    | Company Internal Information                                                        | GS1CTBpCode                                          | BP                                                |
| 95     | 1 to 30    | Company Internal Information                                                        | GS1CTQuantity*                                       | Quantity                                          |
| 96     | 1 to 30    | Company Internal Information                                                        | GS1CustomPrefix1                                     | CustomPrefix1                                     |
| 97     | 1 to 30    | Company Internal Information                                                        | GS1CustomPrefix2                                     | CustomPrefix2                                     |
| 98     | 1 to 30    | Company Internal Information                                                        | Revision                                             | Revision                                          |
| 99     | 1 to 30    | Company Internal Information                                                        | GS1CTFilterText                                      | FilterText                                        |
| 240    | 1 to 30    | Additional Item Identification                                                      | GS1AdditionalItemIdentification                      | AdditionalItemIdentification                      |
| 241    | 1 to 30    | Supplier Batch Number                                                               | GS1PartNumber                                        | Part Number                                       |
| 242    | 1 to 6     | Made-to-Order Variation Number                                                      | GS1MadeToOrderVariationNumber                        | MadeToOrderVariationNumber                        |
| 243    | 1 to 20    | Packaging Component Number                                                          | GS1PackagingComponentNumber                          | PackagingComponentNumber                          |
| 250    | 1 to 30    | Secondary Serial Number                                                             | GS1SecondarySerialNumber                             | SecondarySerialNumber                             |
| 251    | 1 to 30    | Reference to Source Entity                                                          | GS1SourceEntityReference                             | SourceEntityReference                             |
| 253    | 14 - 30    | Global Document Type Identifier (GDTI)                                              | GS1DocNo                                             | DocNum/DocEntry                                   |
| 254    | 1 to 20    | GLN Extension Component                                                             | GS1GLNExtensionComponent                             | GLNExtensionComponent                             |
| 255    | 14 - 25    | Global Coupon Number (GCN)                                                          | GS1GCN                                               | GCN                                               |
| 3100-5 | 6          | Variable Measure Trade Item – Net weight [kilograms]                                | GS1VMTINetWeightInKilograms                          | VMTINetWeightInKilograms                          |
| 3110-5 | 6          | Variable Measure Trade Item – Length or first dimension [metres]                    | GS1VMTIFirstDimensionInMeters                        | VMTIFirstDimensionInMeters                        |
| 3120-5 | 6          | Variable Measure Trade Item – Width, diameter, or second dimension [metres]         | GS1VMTISecondDimensionInMeters                       | VMTISecondDimensionInMeters                       |
| 3130-5 | 6          | Variable Measure Trade Item – Depth, thickness, height, or third dimension [metres] | GS1VMTIThirdDimensionInMeters                        | VMTIThirdDimensionInMeters                        |
| 3140-5 | 6          | Variable Measure Trade Item – Area [square metres]                                  | GS1VMTIAreaSquareInMeters                            | VMTIAreaSquareInMeters                            |
| 3150-5 | 6          | Variable Measure Trade Item – Net volume [litres]                                   | GS1VMTINetVolumeInLitres                             | VMTINetVolumeInLitres                             |
| 3160-5 | 6          | Variable Measure Trade Item – Net volume [cubic metres]                             | GS1VMTINetVolumeCubicInMeters                        | VMTINetVolumeCubicInMeters                        |
| 3200-5 | 6          | Variable Measure Trade Item – Net weight [pounds]                                   | GS1VMTINetWeightInPounds                             | VMTINetWeightInPounds                             |
| 3210-5 | 6          | Variable Measure Trade Item – Length or first dimension [inches]                    | GS1VMTIFirstDimensionInInches                        | VMTIFirstDimensionInInches                        |
| 3220-5 | 6          | Variable Measure Trade Item – Length or first dimension [feet]                      | GS1VMTIFirstDimensionInFeet                          | VMTIFirstDimensionInFeet                          |
| 3230-5 | 6          | Variable Measure Trade Item – Length or first dimension [yards]                     | GS1VMTIFirstDimensionInYards                         | VMTIFirstDimensionInYards                         |
| 3240-5 | 6          | Variable Measure Trade Item – Width, diameter, or second dimension [inches]         | GS1VMTISecondDimensionInInches                       | VMTISecondDimensionInInches                       |
| 3250-5 | 6          | Variable Measure Trade Item – Width, diameter, or second dimension [feet]           | GS1VMTISecondDimensionInFeet                         | VMTISecondDimensionInFeet                         |
| 3260-5 | 6          | Variable Measure Trade Item – Width, diameter, or second dimension [yards]          | GS1VMTISecondDimensionInYards                        | VMTISecondDimensionInYards                        |
| 3270-5 | 6          | Variable Measure Trade Item – Depth, thickness, height, or third dimension [inches] | GS1VMTIThirdDimensionInInches                        | VMTIThirdDimensionInInches                        |
| 3280-5 | 6          | Variable Measure Trade Item – Depth, thickness, height, or third dimension [feet]   | GS1VMTIThirdDimensionInFeet                          | VMTIThirdDimensionInFeet                          |
| 3290-5 | 6          | Variable Measure Trade Item – Depth, thickness, height, or third dimension [yards]  | GS1VMTIThirdDimensionInYards                         | VMTIThirdDimensionInYards                         |
| 3300-5 | 6          | Logistic – weight [kilograms]                                                       | GS1LogisticWeightInKilograms                         | LogisticWeightInKilograms                         |
| 3310-5 | 6          | Logistic – length or first dimension [metres]                                       | GS1LogisticFirstDimensionInMeters                    | LogisticFirstDimensionInMeters                    |
| 3320-5 | 6          | Logistic – width, diameter, or second dimension [metres]                            | GS1LogisticSecondDimensionInMeters                   | LogisticSecondDimensionInMeters                   |
| 3330-5 | 6          | Logistic – depth, thickness, height, or third dimension [metres]                    | GS1LogisticThirdDimensionInMeters                    | LogisticThirdDimensionInMeters                    |
| 3340-5 | 6          | Logistic – area [square metres]                                                     | GS1LogisticAreaInSquareMeters                        | LogisticAreaInSquareMeters                        |
| 3350-5 | 6          | Logistic – volume [litres]                                                          | GS1LogisticVolumeInLitres                            | LogisticVolumeInLitres                            |
| 3360-5 | 6          | Logistic – volume [cubic metres]                                                    | GS1LogisticVolumeInCubicMeters                       | LogisticVolumeInCubicMeters                       |
| 3370-5 | 6          | Kilograms per square metre [KG / m²]                                                | GS1LogisticKilogramsPerSquareMeters                  | LogisticKilogramsPerSquareMeters                  |
| 3400-5 | 6          | Logistic – weight [pounds]                                                          | GS1LogisticWeightInPounds                            | LogisticWeightInPounds                            |
| 3410-5 | 6          | Logistic – length or first dimension [inches]                                       | GS1LogisticFirstDimensionInInches                    | LogisticFirstDimensionInInches                    |
| 3420-5 | 6          | Logistic – length or first dimension [feet]                                         | GS1LogisticFirstDimensionInFeet                      | LogisticFirstDimensionInFeet                      |
| 3430-5 | 6          | Logistic – length or first dimension [yards]                                        | GS1LogisticFirstDimensionInYards                     | LogisticFirstDimensionInYards                     |
| 3440-5 | 6          | Logistic – width, diameter, or second dimension [inches]                            | GS1LogisticSecondDimensionInInches                   | LogisticSecondDimensionInInches                   |
| 3450-5 | 6          | Logistic – width, diameter, or second dimension [feet]                              | GS1LogisticSecondDimensionInFeet                     | LogisticSecondDimensionInFeet                     |
| 3460-5 | 6          | Logistic – width, diameter, or second dimension [yard]                              | GS1LogisticSecondDimensionInYards                    | LogisticSecondDimensionInYards                    |
| 3470-5 | 6          | Logistic – depth, thickness, height, or third dimension [inches]                    | GS1LogisticThirdDimensionInInches                    | LogisticThirdDimensionInInches                    |
| 3480-5 | 6          | Logistic – depth, thickness, height, or third dimension [feet]                      | GS1LogisticThirdDimensionInFeet                      | LogisticThirdDimensionInFeet                      |
| 3490-5 | 6          | Logistic – depth, thickness, height, or third dimension [yards]                     | GS1LogisticThirdDimensionInYards                     | LogisticThirdDimensionInYards                     |
| 3500-5 | 6          | Area, square [inches] (Variable Measure Trade Item)                                 | GS1VMTIAreaInSquareInches                            | VMTIAreaInSquareInches                            |
| 3510-5 | 6          | Area, square [feet] (Variable Measure Trade Item)                                   | GS1VMTIAreaInSquareFeet                              | VMTIAreaInSquareFeet                              |
| 3520-5 | 6          | Area, square [yards] (Variable Measure Trade Item)                                  | GS1VMTIAreaInSquareYards                             | VMTIAreaInSquareYards                             |
| 3530-5 | 6          | Logistic – area, square [inches]                                                    | GS1AreaInSquareInches                                | AreaInSquareInches                                |
| 3540-5 | 6          | Logistic – area, square [feet]                                                      | GS1AreaInSquareFeet                                  | AreaInSquareFeet                                  |
| 3550-5 | 6          | Logistic – area, square [yards]                                                     | GS1AreaInSquareYards                                 | AreaInSquareYards                                 |
| 3560-5 | 6          | Variable Measure Trade Item – Net weight [troy ounces]                              | GS1VMTINetWeightInTroyOunces                         | VMTINetWeightInTroyOunces                         |
| 3570-5 | 6          | Variable Measure Trade Item – Net weight (or volume) [ounces]                       | GS1VMTINetWeightInOunces                             | VMTINetWeightInOunces                             |
| 3600-5 | 6          | Variable Measure Trade Item – Net volume [quarts]                                   | GS1VMTINetVolumeInQuarts                             | VMTINetVolumeInQuarts                             |
| 3610-5 | 6          | Variable Measure Trade Item – Net volume [gallons U.S.]                             | GS1VMTINetVolumeInGallonsUS                          | VMTINetVolumeInGallonsUS                          |
| 3620-5 | 6          | Logistic – volume [quarts]                                                          | GS1LogisticVolumeInQuarts                            | LogisticVolumeInQuarts                            |
| 3630-5 | 6          | Logistic – volume [gallons U.S.]                                                    | GS1LogisticVolumeInGallonsUS                         | LogisticVolumeInGallonsUS                         |
| 3640-5 | 6          | ariable Measure Trade Item – Net volume [cubic inches]                              | GS1VMTINetVolumeInCubicInches                        | VMTINetVolumeInCubicInches                        |
| 3650-5 | 6          | Variable Measure Trade Item – Net volume [cubic feet]                               | GS1VMTINetVolumeInCubicFeet                          | VMTINetVolumeInCubicFeet                          |
| 3660-5 | 6          | Variable Measure Trade Item – Net volume [cubic yards]                              | GS1VMTINetVolumeInCubicYards                         | VMTINetVolumeInCubicYards                         |
| 3670-5 | 6          | Logistic – volume [cubic inches]                                                    | GS1LogisticVolumeInCubicInches                       | LogisticVolumeInCubicInches                       |
| 3680-5 | 6          | Logistic – volume [cubic feet]                                                      | GS1LogisticVolumeInCubicFeet                         | LogisticVolumeInCubicFeet                         |
| 3690-5 | 6          | Logistic – volume [cubic yards]                                                     | GS1LogisticVolumeInCubicYards                        | LogisticVolumeInCubicYards                        |
| 3900-5 | 1 to 15    | Applicable Amount Payable, local currency                                           | GS1ApplicableAmountPayableLocalCurrency              | ApplicableAmountPayableLocalCurrency              |
| 3910-5 | 4 to 18    | Applicable Amount Payable with ISO 4217 Currency Code                               | GS1ApplicableAmountPayableWithISOCurrencyCode        | ApplicableAmountPayableWithISOCurrencyCode        |
| 3920-5 | 1 to 15    | Variable Measure Trade Item – Applicable Amount Payable, single monetary area       | GS1VTMIApplicableAmountPayable                       | VTMIApplicableAmountPayable                       |
| 3930-5 | 4 to 18    | Variable Measure Trade Item – Applicable Amount Payable with ISO 4217 Currency Code | GS1VTMIApplicableAmountPayableWithISOCurrencyCode    | VTMIApplicableAmountPayableWithISOCurrencyCode    |
| 400    | 1 to  30   | Customer's Purchase Order Number                                                    | GS1PurchaseOrderNo                                   | PurchaseOrderNo                                   |
| 401    | 1 to 30    | Global Identification Number for Consignment (GINC)                                 | GS1GINC                                              | GINC                                              |
| 402    | 1 to 17    | Global Shipment Identification Number (GSIN)                                        | GS1GSIN                                              | GSIN                                              |
| 403    | 1 to 30    | Routing Code                                                                        | GS1RoutingCode                                       | RoutingCode                                       |
| 410    | 13         | Global Location Number – Ship to – Deliver to                                       | GS1GLNShipTo                                         | GLNShipTo                                         |
| 411    | 13         | Global Location Number – Bill to – Invoice to                                       | GS1GLNBillTo                                         | GLNBillTo                                         |
| 412    | 13         | Global Location Number – Purchased from                                             | GS1GLNPurchasedItem                                  | GLNPurchasedItem                                  |
| 413    | 13         | Global Location Number – Ship for – Deliver for – Forward to                        | GS1GLNShipFor                                        | GLNShipFor                                        |
| 414    | 13         | Global Location Number – Identification of a Physical Location                      | GS1GLNPhysicalLocationID                             | GLNPhysicalLocationID                             |
| 415    | 13         | Global Location Number – Invoicing Party                                            | GS1GLNInvoicingParty                                 | GLNInvoicingParty                                 |
| 420    | 1 to 20    | Ship to – Deliver to – Postal Code Within a Single Postal Authority                 | GS1ShipToPostalCode                                  | ShipToPostalCode                                  |
| 421    | 4 to 12    | Ship to – Deliver to – Postal Code with ISO 3166 Country Code                       | GS1ShipToPostalCodeWithCountryCode                   | ShipToPostalCodeWithCountryCode                   |
| 422    | 3          | Country of Origin of a Trade Item                                                   | GS1OriginCountry                                     | OriginCountry                                     |
| 423    | 4 to 15    | Country of Initial Processing                                                       | GS1InitialProcessingCountry                          | InitialProcessingCountry                          |
| 424    | 3          | Country of Processing                                                               | GS1ProcessingCountry                                 | ProcessingCountry                                 |
| 425    | 3          | Country of Disassembly                                                              | GS1DisassemblyCountry                                | DisassemblyCountry                                |
| 426    | 3          | Country Covering full Process Chain                                                 | GS1ProcessChainCoveringCountry                       | ProcessChainCoveringCountry                       |
| 427    | 1 to 30    | Country Subdivision of Origin                                                       | GS1OriginCountrySubdivision                          | OriginCountrySubdivision                          |
| 7001   | 13         | NATO Stock Number (NSN)                                                             | GS1NSN                                               | NSN                                               |
| 7002   | 1 to 30    | UN/ECE Meat Carcasses and cuts classification                                       | GS1UNECEMeatClassification                           | UNECEMeatClassification                           |
| 7003   | 10         | Expiration Date and Time (YYMMDDhhmm)                                               | GS1ExpirationDateAndTime                             | ExpirationDateAndTime                             |
| 7004   | 1 to 4     | Active Potency                                                                      | GS1ActivePotency                                     | ActivePotency                                     |
| 7005   | 1 to 12    | Fish catch area [http://www.fao.org/fishery/area/search/en](http://www.fao.org/fishery/area/search/en)                         | GS1FishCatchArea                                     | FishCatchArea                                     |
| 7006   | 6          | First Freeze date (RRMMDD)                                                          | GS1FirstFreezeDate                                   | FirstFreezeDate                                   |
| 7007   | 6 to 12    | Harvest date (RRMMDDrrmmdd)                                                         | GS1HarvestDate                                       | HarvestDate                                       |
| 7008   | 1 to 3     | Fish species [http://www.fao.org/fishery/collection/asfis/en](http://www.fao.org/fishery/collection/asfis/en)                       | GS1FishSpieces                                       | FishSpieces                                       |
| 7009   | 1 to 10    | Fishing gear type [http://www.fao.org/fishery/cwp/handbook/M/en](http://www.fao.org/fishery/cwp/handbook/M/en)                    | GS1FishingGearType                                   | FishingGearType                                   |
| 7010   | 1 to 2     | Production method                                                                   | GS1ProductionMethod                                  | ProductionMethod                                  |
| 703x   | 1 to 27    | Approval Number of Processor with ISO 3166 Country Code                             | GS1ProcessorApprovalNumberWithCountryCode0-9         | ProcessorApprovalNumberWithCountryCode0-9         |
| 710    | 1 to 20    | National Healthcare Reimbursement Number (NHRN) – Germany PZN                       | GS1NHRNGermanyPZN                                    | NHRNGermanyPZN                                    |
| 711    | 1 to 20    | National Healthcare Reimbursement Number (NHRN) – France CIP                        | GS1NHRNFranceCIP                                     | NHRNFranceCIP                                     |
| 712    | 1 to 20    | National Healthcare Reimbursement Number (NHRN) – Spain CN                          | GS1NHRNSpainCN                                       | NHRNSpainCN                                       |
| 8001   | 14         | Roll Products (Width, Length, Core Diameter, Direction, Splices)                    | GS1RollProducts                                      | RollProducts                                      |
| 8002   | 1 to 20    | Electronic Serial Identifier for Cellular Mobile Telephones                         | GS1ElectronicSerialNumberForCellularMobileTelephones | ElectronicSerialNumberForCellularMobileTelephones |
| 8003   | 14 to 30   | GS1 Global Returnable Asset Identifier                                              | GS1GlobalReturnableAssetIdentifier                   | GlobalReturnableAssetIdentifier                   |
| 8004   | 1 to 30    | GS1 Global Individual Asset Identifier                                              | GS1GlobalIndividualAssetIdentifier                   | GlobalIndividualAssetIdentifier                   |
| 8005   | 6          | Price Per Unit of Measure                                                           | GS1PricePerUnitOfMeasure                             | PricePerUnitOfMeasure                             |
| 8006   | 18         | Identification of the Components of a Trade Item                                    | GS1ComponentsIdentification                          | ComponentsIdentification                          |
| 8007   | 1 to 34    | International Bank Account Number (IBAN)                                            | GS1IBAN                                              | IBAN                                              |
| 8008   | 7 to 12    | Date and Time of Production (YYMMDDhhmmss)                                          | GS1ProductionDateAndTime                             | ProductionDateAndTime                             |
| 8010   | 1 to 30    | Component / Part Identifier (CPID)                                                  | GS1CPID                                              | CPID                                              |
| 8011   | 1 to 12    | Component / Part Identifier serial number                                           | GS1CPIDSerialNumber                                  | CPIDSerialNumber                                  |
| 8012   | 1 to 20    | Software version                                                                    | GS1SoftwareVersion                                   | SoftwareVersion                                   |
| 8017   | 18         | GS1 Global Service Relation Number, PROVIDER                                        | GS1GSRNProvider                                      | GSRNProvider                                      |
| 8018   | 18         | GS1 Global Service Relation Number, RECIPIENT                                       | GS1GSRNRecipient                                     | GSRNRecipient                                     |
| 8019   | 1 to 10    | Numer Zdarzenia Relacji Usługowej (SRIN)                                            | GS1SRIN                                              | SRIN                                              |
| 8020   | 1 to 25    | Payment Slip Reference                                                              | GS1GSRNRecipient                                     | PaymentSlipReference                              |
| 8110   | 1 to 70    | Coupon code ID (North America)                                                      | GS1CouponCodeID                                      | CouponCodeID                                      |
| 8111   | 1 to 8     | Loyalty points of a coupon                                                          | GS1CouponLoyaltyPoints                               | CouponLoyaltyPoints                               |
| 8200   | 1 to 70    | URL for product extended information                                                | GS1ProductExtendedInfoURL                            | ProductExtendedInfoURL                            |

\* - Scanning decimal numbers have a different prefix (than 37). For QR codes, we recommend using the 310 prefixes.

310XNNNNNN
95XNNNNNN

Where:
310, 95 - prefix
X - a number of digits after which there should be a decimal comma (counting from the end)
N - digits

Examples:
2,5:
3101000025

0,25:
3102000025

0,025:
3103000025

## Odette Standard

The following prefixes can be used for Odette standard barcode labels creation. To use Odette standard coding, choose the [right option](../installation/wms-server/overview.md) in the Server options.

| **Prefix** |                                                                                                           **Meaning**                                                                                                           |   |
|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
| P      | Item Code/Business Partner Catalog Number It is possible to add/open an Item on Goods Receipt PO, Delivery, Pick and Pack, and Dispatch Control Item lists by scanning its Business Partner Catalog Number with this prefix |   |
| V      | Business Partner                                                                                                                                                                                                            |   |
| Q      | Quantity                                                                                                                                                                                                                    |   |
| N      | DocEntry, Purchase Order Number or document number (depends on where it is used)                                                                                                                                            |   |
| H      | Batch Number                                                                                                                                                                                                                |   |
| S      | Serial Number or SSCC (depends on where is it used)                                                                                                                                                                         |   |
| D      | Production Date                                                                                                                                                                                                             |   |

## Custom Decoder

CompuTec WMS Custom Decoder offers an interpretation of barcodes without prefixes. This option allows scanning of a barcode that does not have Application Identificators in GS1 or Odette standard.

To input data from a barcode without a prefix to a desired field, it is required to focus on this field.

In the future, CompuTec WMS Team plans to implement a configurable prefix interpreter. This will allow the decoder to recognize barcode prefixes used in a specific company.

To use this kind of coding, choose the [right option](../installation/wms-server/overview.md) in the Server options.

## USB Scanners

WMS desktop client can be used with USB scanners. To do that, you should configure this kind of device in the following way:

- scanning device adds a start text sign (Ctrl + B)
- scanning device adds an end text sign (Ctrl + C).

The file contains a full programming barcode for plug-in Motorola scanners guide: Download.

## Barcode Scanner Simulator

For testing barcode scanning, you can use a dedicated application: [WMS Scanning Symulator](./wms-scanning-simulator.md).
