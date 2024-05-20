import Translate from "@docusaurus/Translate";

export type DocsCard = {
  title: string;
  description: string | React.ReactElement;
  image: string;
  link: string;
};

const docsCards: DocsCard[] = [
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
    image: "/img/cards/ProcessForce.svg",
    link: "/docs/processforce",
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
    image: "/img/cards/PDC.svg",
    link: "/docs/pdc",
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
    image: "/img/cards/WMS.svg",
    link: "/docs/wms",
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
    image: "/img/cards/Labels.svg",
    link: "/docs/labels",
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
    image: "/img/cards/AppEngine.svg",
    link: "/docs/appengine",
  },
  // {
  //   title: "CompuTec Premium",
  //   description: (
  //     <Translate
  //       description="Homepage card description"
  //       id="homepage.cards.premium.description"
  //     >
  //       CompuTec Premium is a localization solution for Poland. It helps
  //       businesses comply with a number of fiscal, tax and other regulations
  //       required by Polish law.
  //     </Translate>
  //   ),
  //   image: "/img/cards/Premium.svg",
  //   link: "/docs/",
  // },
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
