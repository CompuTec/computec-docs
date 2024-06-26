---
sidebar_position: 8
---

# Using ae:Link's

## Description

AppEngine includes a custom control called computec.appengine.ui.controls.link, which functions like the "yellow arrows" in SAP Business One. This control enables users to easily navigate to referenced Master Data or Documents. Below is an example of how to use this control.

:::warning
    AppEngine Link Control works only when plugin is started from SAP Business One.
:::

## Adding Link to Sales Orders and Business Partners

1. Open SalesOrder.view.xml:

    ![Sales Order](./media/using-ae-link/salesorder-view-xml.webp)
2. Add a namespace for AppEngine controls:

    `xmlns:ae="computec.appengine.ui.controls"`

    ![AppEngine](./media/using-ae-link/appengine-controls-namespace.webp)
3. Add a Link to the Document Number column. Change ObjectIdentifier to AppEngine Link.

    - **text** – text that will be displayed. Use DocNum and in curly brackets DocEntry
    - **objectType** – in case of SAP object, this needs to be BoFormObjectEnum (or ObjectType). BoFormObjectEnum can be found in SAP Business ne SDK. In this case this will be fo_Order:

        ![Order](./media/using-ae-link/fo-Order.webp)
    - **objectSubType** – only needed when opening ProcessForce objects. In this example, leave it empty
    - **key** – a key of an object we would like to open. In this case this will be Sales Order DocEntry.

            ```xml
            <ae:Link
            text="{path: 'AE>DocNum', type: 'sap.ui.model.odata.type.Int32'} ({path: 'AE>DocEntry', type: 'sap.ui.model.odata.type.Int32'})"
            objectType="fo_Order"
            objectSubType=""
            key="{path: 'AE>DocEntry', type: 'sap.ui.model.odata.type.Int32'}"/>
            ```

4. Do the same thing for a Business Partner. This time, instead of replacing the ObjectIdentifier, add a link next to it using the HBox control. Link text property is left empty.

        ```xml
        <HBox>
            <ae:Link
                text=""
                objectType="fo_BusinessPartner"
                objectSubType=""
                key="{path: 'AE>CardCode', type: 'sap.ui.model.odata.type.String'}"/>
            <ObjectIdentifier
                title="{path: 'AE>CardName', type: 'sap.ui.model.odata.type.String'}"
                text="{path: 'AE>CardCode', type: 'sap.ui.model.odata.type.String'}"/>
        </HBox>
        ```

5. SalesOrder.view.xml should look like this.

    SalesOrder.view.xml

        ```xml
        <mvc:View
                xmlns:mvc="sap.ui.core.mvc"
                xmlns:ae="computec.appengine.ui.controls"
                xmlns="sap.m">
            <Table
                    inset="false"
                    items="{AE>/CustomViews/Views.Custom(Id='FirstPlugin%3ASalesOrderList')}">
                <headerToolbar>
                    <Toolbar>
                        <Title text="{i18n>salesOrderTableTitle}"/>
                    </Toolbar>
                </headerToolbar>
                <columns>
                    <Column>
                        <Text text="{i18n>salesOrderDocumentNumberColumnLabel}"/>
                    </Column>
                    <Column>
                        <Text text="{i18n>salesOrderBusinessPartnerColumnLabel}"/>
                    </Column>
                </columns>
                <items>
                    <ColumnListItem>
                        <cells>
                            <ae:Link
                                    text="{path: 'AE>DocNum', type: 'sap.ui.model.odata.type.Int32'} ({path: 'AE>DocEntry', type: 'sap.ui.model.odata.type.Int32'})"
                                    objectType="fo_Order"
                                    objectSubType=""
                                    key="{path: 'AE>DocEntry', type: 'sap.ui.model.odata.type.Int32'}"/>
                            <HBox>
                                <ae:Link
                                        text=""
                                        objectType="fo_BusinessPartner"
                                        objectSubType=""
                                        key="{path: 'AE>CardCode', type: 'sap.ui.model.odata.type.String'}"/>
                                <ObjectIdentifier
                                        title="{path: 'AE>CardName', type: 'sap.ui.model.odata.type.String'}"
                                        text="{path: 'AE>CardCode', type: 'sap.ui.model.odata.type.String'}"/>
                            </HBox>
                        </cells>
                    </ColumnListItem>
                </items>
            </Table>
        </mvc:View>
        ```

## Results

After restarting SAP Business One, you will see the changes and be able to use the links as demonstrated below.

![AE Link](./media/using-ae-link/aelink-results.webp)
