import Translate from "@docusaurus/Translate";

import { DocCardProps } from "./DocsCard";

const docsCards: DocCardProps[] = [
  {
    title: "CompuTec ProcessForce",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.processforce.description"
      >
        An advanced manufacturing solution for SAP Business One. It includes
        inventory and production process management, batch traceability, MRP,
        QC, production scheduling, costing, plant maintenance and more.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-ProcessForce.svg",
    pluginId: "processforce",
  },
  {
    title: "CompuTec AppEngine",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.appengine.description"
      >
        A web application programming and runtime platform. Based on plugin
        architecture, it allows developers to implement custom solutions for
        specific and unique business scenarios.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-AppEngine.svg",
    pluginId: "appengine",
  },
   {
    title: "CompuTec WebUp",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.webup.description"
      >
        A modern web-based business application platform that provides 
        intuitive access to business processes through any web browser. 
        Features responsive design, real-time data access, and seamless 
        integration capabilities.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-WebUp.svg",
    pluginId: "webup",
  },
  {
    title: "CompuTec PDC",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.pdc.description"
      >
        Plant Data Capture. CompuTec PDC connects the shop floor to the office
        via mobile touchscreen devices. It is used to manage production tasks,
        record production activities and downtime and give decision makers the
        production data they need.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-PDC.svg",
    pluginId: "pdc",
  },
  {
    title: "CompuTec WMS",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.wms.description"
      >
        Warehouse Management System. CompuTec WMS supports all major SAP
        Business One and CompuTec ProcessForce warehousing transactions. It can
        be used from a PC or from mobile devices to record and optimize
        logistics processes.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-WMS.svg",
    pluginId: "wms",
  },
  {
    title: "CompuTec Labels",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.labels.description"
      >
        A highly customizable solution for managing the printing of inventory
        labels. Capable of handling large numbers of printers and print jobs,
        CompuTec Labels ensures that inventory is labelled accurately and
        comprehensively by the right printer at the right time.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-Labels.svg",
    pluginId: "labels",
  },
  
  {
    title: "CompuTec Premium",
    description: (
      <Translate
        description="Homepage card description"
        id="homepage.cards.premium.description"
      >
        CompuTec Premium is a localization solution for Poland. It helps
        businesses comply with a number of fiscal, tax and other regulations
        required by Polish law.
      </Translate>
    ),
    image: "/img/cards/CDCTile-CompuTec-Premium.svg",
    pluginId: "premium",
  },
  // {
  //   title: "CompuTec Fiscal Server",
  //   description: (
  //     <Translate
  //       description="Homepage card description"
  //       id="homepage.cards.fiscalserver.description"
  //     >
  //       CompuTec Fiscal Server is a localization solution for Poland. It
  //       supports the printing of receipts on fiscal printers.
  //     </Translate>
  //   ),
  //   image: "/img/cards/FiscalServer.svg",
  //   link: "/docs/",
  // },
];

export default docsCards;
