---
sidebar_position: 3
---

# CompuTec ProcessForce References on SAP Business One Documents

This page serves as a **reference** guide to understand how CompuTec ProcessForce integrates with standard SAP Business One documents.

Each section below lists the fields populated by ProcessForce in the respective documents, covering both **header** and **child** (line-level) details. These fields support traceability, automation, and audit requirements in manufacturing scenarios.

---

## Receipt from Production

|   HEADER -OIGN   |                                             |                                                     |
|:----------------:|:-------------------------------------------:|:---------------------------------------------------:|
| Reference 2      | Mor Doc Num                                 | Filled if receipt is for one Manufacturing Document |
| Remarks          | Based on Manufacturing Order 7197,7253      |                                                     |
| Journal Memo     | Based on Manufacturing Order 7197,7253      |                                                     |
| U_FromProduction | 'Y'                                         |                                                     |
| CHILDS -IGN1     |                                             |                                                     |
| U_DocEntry       | MOR Doc Entry                               |                                                     |
| U_DocNum         | MOR Doc Num                                 |                                                     |
| U_ItemType       | 'SC' - scrap 'CP' coproduct 'HR' final good |                                                     |
| U_LineNum        | Reference to U_LineNum of MOR childs Table  |                                                     |
| U_PickEntry      | Pick Entry                                  |                                                     |
| U_PickLine       | U_LineNum in @CT_PF_PRE1 table              |                                                     |
| U_PickType       | Pick UDO_Code                               |                                                     |

## Issue to Production

|   HEADER -OIGE   |                                            |                                                   |
|:----------------:|:------------------------------------------:|:-------------------------------------------------:|
| Reference 2      | Mor Doc Num                                | Filled if issue is for one Manufacturing Document |
| Remarks          | Based on Manufacturing Order 7197,7253     |                                                   |
| Journal Memo     | Based on Manufacturing Order 7197,7253     |                                                   |
| U_FromProduction | 'Y'                                        |                                                   |
| CHILDS -IGE1     |                                            |                                                   |
| U_DocEntry       | MOR Doc Entry                              |                                                   |
| U_DocNum         | MOR Doc Num                                |                                                   |
| U_ItemType       | 'IT' -items 'HR' final good(Rework)        |                                                   |
| U_LineNum        | Reference to U_LineNum of MOR childs Table |                                                   |
| U_PickEntry      | Pick Entry                                 |                                                   |
| U_PickLine       | U_LineNum in @CT_PF_POR1 table             |                                                   |
| U_PickType       | Pick UDO_Code                              |                                                   |

## Non-Stock Item

| HEADER -OJDT |                                        |                                                   |
|:------------:|:--------------------------------------:|:-------------------------------------------------:|
| Reference 2  | MOR Doc Num                            | Filled if issue is for one Manufacturing Document |
| Remarks      | Based on Manufacturing Order 7197,7253 |                                                   |
| Journal Memo | Based on Manufacturing Order 7197,7253 |                                                   |
| U_TransType  | 'NonStock'                             |                                                   |
| U_BaseRef    | pick Receipt Doc Entry                 |                                                   |
| CHILDS -JDT1 |                                        |                                                   |
| U_LineNumRef | U_LineNum from Mor Items table         |                                                   |
| U_MOREntry   | Manufacturing Order Entry              |                                                   |
| U_MORDocNum  | Manufacturing Order Doc Number         |                                                   |
| Ref1         | Empty                                  |                                                   |
| Ref2         | Manufacturing Order Doc Num            |                                                   |
| Ref3         | Empty                                  |                                                   |
| LineMemo     | Item Code                              |                                                   |

## Subcontracting Procurement Document

|   HEADER -OPOR   |                                                        |
|:----------------:|:------------------------------------------------------:|
| Remarks          | empty                                                  |
| Journal Memo     | empty                                                  |
| U_FromProduction | 'N'                                                    |
| CHILDS -POR1     |                                                        |
| U_DocEntry       | MOR Doc Entry                                          |
| U_DocNum         | MOR DocNum                                             |
| U_ItemType       | 'IT' - non stock Item 'HR'-External 'RS'-Resource Item |
| U_LineNum        | Reference to U_LineNum of MOR childs Table             |
| U_PickEntry      | empty                                                  |
| U_PickLine       | empty                                                  |
| U_PickType       | empty                                                  |

## External Service Item (Goods Receipt PO)

| HEADER OPDN      |                                                        |                                |
|------------------|--------------------------------------------------------|--------------------------------|
| Remarks          | empty                                                  |                                |
| Journal Memo     | empty                                                  |                                |
| U_FromProduction | 'N'                                                    |                                |
| CHILDS -PDN1     |                                                        |                                |
| U_DocEntry       | MOR Doc Entry                                          |                                |
| U_DocNum         | MOR DocNum                                             |                                |
| U_ItemType       | 'IT' - non stock Item 'HR'-External 'RS'-Resource Item |                                |
| U_LineNum        | Reference to U_LineNum of MOR childs Table             |                                |
| U_PickEntry      | empty                                                  | Pick Entry                     |
| U_PickLine       | empty                                                  | U_LineNum in @CT_PF_PRE1 table |
| U_PickType       | empty                                                  | Pick UDO_Code                  |

## Stock Transfer

| HEADER OWTR      |                                            |                                   |
|------------------|--------------------------------------------|-----------------------------------|
| Remarks          | empty                                      | Based on Manufacturing Order 1234 |
| Journal Memo     | empty                                      |                                   |
| U_FromProduction | 'N'                                        |                                   |
| CHILDS -WTR1     |                                            |                                   |
| U_DocEntry       | MOR Doc Entry                              |                                   |
| U_DocNum         | MOR DocNum                                 |                                   |
| U_ItemType       | 'IT' - items                               |                                   |
| U_LineNum        | Reference to U_LineNum of MOR childs Table |                                   |
| U_PickEntry      | empty                                      |                                   |
| U_PickLine       | empty                                      |                                   |
| U_PickType       | empty                                      |                                   |

## Sales Order

| HEADER ORDR      |               |
|------------------|---------------|
| Remarks          | empty         |
| Journal Memo     | empty         |
| U_FromProduction | 'N'           |
| CHILDS -RDR1     |               |
| U_DocEntry       | MOR Doc Entry |
| U_DocNum         | MOR DocNum    |
| U_ItemType       | empty         |
| U_LineNum        | empty         |
| U_PickEntry      | empty         |
| U_PickLine       | empty         |
| U_PickType       | empty         |

## Receipt Adjustment

|   HEADER -OIGE   |                                            |                                              |
|:----------------:|:------------------------------------------:|:--------------------------------------------:|
| Reference 2      | Mor Doc Num                                |                                              |
| Remarks          | Adjustment for manufacturing order Nr 7253 |                                              |
| Journal Memo     | Adjustment for manufacturing order Nr 7253 |                                              |
| U_FromProduction | 'Y'                                        |                                              |
| CHILDS -IGE1     |                                            |                                              |
| U_DocEntry       | empty                                      | MOR Doc Entry                                |
| U_DocNum         | empty                                      | Mor Doc Num                                  |
| U_ItemType       | empty                                      | 'SC' - scrap 'CP' coproduct 'HR' finall good |
| U_LineNum        | empty                                      | Reference to U_LineNum of MOR childs Table   |
| U_PickEntry      | empty                                      |                                              |
| U_PickLine       | empty                                      |                                              |
| U_PickType       | empty                                      |                                              |

## Issue Adjustment

|   HEADER -OIGN   |                                            |                                                     |
|:----------------:|:------------------------------------------:|:---------------------------------------------------:|
| Reference 2      | Mor Doc Num                                | Filled if receipt is for one Manufacturing Document |
| Remarks          | Adjustment for manufacturing order Nr 7253 |                                                     |
| Journal Memo     | Adjustment for manufacturing order Nr 7253 |                                                     |
| U_FromProduction | 'Y'                                        |                                                     |
| CHILDS -IGN1     |                                            |                                                     |
| U_DocEntry       | empty                                      | MOR Doc Entry                                       |
| U_DocNum         | empty                                      | Mor Doc Num                                         |
| U_ItemType       | empty                                      | 'IT' -items 'HR' finall good(Rework)                |
| U_LineNum        | empty                                      | Reference to U_LineNum of MOR childs Table          |
| U_PickEntry      | empty                                      |                                                     |
| U_PickLine       | empty                                      |                                                     |
| U_PickType       | empty                                      |                                                     |

## Non-Stock Item Adjustment

| HEADER -OJDT |                                   |
|:------------:|:---------------------------------:|
| Reference 2  | Mor Doc Num                       |
| Remarks      | Based on Manufacturing Order 7197 |
| Journal Memo | Based on Manufacturing Order 7197 |
| U_TransType  | 'NonStock'                        |
| U_BaseRef    | empty                             |
| CHILDS -JDT1 |                                   |
| U_LineNumRef | U_LineNum from Mor Items table    |
| U_MOREntry   | Manufacturing Order Entry         |
| U_MORDocNum  | Manufacturing Order Doc Number    |
| Ref1         | Empty                             |
| Ref2         | Mor Doc Num                       |
| Ref3         | Empty                             |
| LineMemo     | Item Code                         |

## Time Booking Journal Entry

| HEADER -OJDT |                            |                                                   |                                |
|:------------:|:--------------------------:|:-------------------------------------------------:|:------------------------------:|
| Reference 2  | empty                      | Filled if issue is for one Manufacturing Document | Manufacturing Order Doc Number |
| Remarks      | Time Bookings              |                                                   | Time Bookings -7197,7198       |
| Journal Memo | rmpty                      |                                                   |                                |
| U_TransType  | empty                      |                                                   | 'Time'                         |
| U_BaseRef    | empty                      |                                                   |                                |
| CHILDS -JDT1 |                            |                                                   |                                |
| U_LineNumRef | U_LineNum from @CT_PF_OTR1 |                                                   |                                |
| U_MOREntry   | Manufacturing Order Entry  |                                                   |                                |
| U_MORDocNum  | ManufacturingOrder DocNum  |                                                   |                                |
| Ref1         | Empty                      |                                                   |                                |
| Ref2         | Empty                      |                                                   | Mor Doc Num                    |
| Ref3         | Empty                      |                                                   |                                |
| LineMemo     | Time Bookings              |                                                   | Time Bookings 7197             |

## Time Booking Adjustment Journal Entry

| HEADER -OJDT |                            |                                                   |                                |
|:------------:|:--------------------------:|:-------------------------------------------------:|:------------------------------:|
| Reference 2  | empty                      | Filled if issue is for one Manufacturing Document | Manufacturing Order Doc Number |
| Remarks      | Time Corrections           |                                                   | Time Corrections-7197,7198     |
| Journal Memo | rmpty                      |                                                   |                                |
| U_TransType  | empty                      |                                                   |                                |
| U_BaseRef    | empty                      |                                                   |                                |
| CHILDS -JDT1 |                            |                                                   |                                |
| U_LineNumRef | U_LineNum from @CT_PF_ATR1 |                                                   |                                |
| U_MOREntry   | Manufacturing Order Entry  |                                                   |                                |
| U_MORDocNum  | ManufacturingOrder DocNum  |                                                   |                                |
| Ref1         | Empty                      |                                                   |                                |
| Ref2         | Empty                      |                                                   | Mor Doc Num                    |
| Ref3         | Empty                      |                                                   |                                |
| LineMemo     | Time Corrections           |                                                   | Time Corrections 7197          |

## Manufacturing Order Closing

| HEADER -OJDT |                                 |                                 |
|:------------:|:-------------------------------:|:-------------------------------:|
| Reference 2  | ManufacturingOrder DocNum       |                                 |
| Remarks      | empty                           | Manufacturing Order Close- 7253. |
| Journal Memo | empty                           |                                 |
| U_TransType  | empty                           | 'close'                         |
| U_BaseRef    | empty                           |                                 |
| CHILDS -JDT1 |                                 |                                 |
| U_LineNumRef | empty                           |                                 |
| U_MOREntry   | empty                           | mor Entry                       |
| U_MORDocNum  | empty                           | mor DocNum                      |
| Ref1         | Empty                           |                                 |
| Ref2         | ManufacturingOrder DocNum       |                                 |
| Ref3         | Empty                           |                                 |
| LineMemo     | Manufacturng Order Close- 7253. |                                 |

## Receipt Correction Price Variance Journal

| HEADER -OJDT     | | |
| :--------------: | :-: | :-: |
| Reference 2      | ManufacturingOrder DocNum |  |
| Remarks          | empty |  |
| Journal Memo     | Goods Receipt Adjustment Sup. |  |
| U_TransType      | empty | '60' |
| U_BaseRef        | empty | Goods Issue DocEntry |
| **CHILDS -JDT1** | | |
| U_LineNumRef     | empty | Goods Issue LineNum |
| U_MOREntry       | empty | mor Entry |
| U_MORDocNum      | empty | mor DocNum |
| Ref1             | Empty |  |
| Ref2             | ManufacturingOrder DocNum |  |
| Ref3             | Empty |  |
| LineMemo         | Manuf Rec variance 7253. | Mor Doc Num |
