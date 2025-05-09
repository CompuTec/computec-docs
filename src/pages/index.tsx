import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";

import DocsHeader from "../components/DocsHeader";
import DocsCards from "../components/DocsCards";

export default function Docs(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={translate({
        id: "layout.title",
        message: "Documentation Center",
      })}
      description={translate({
        id: "layout.description",
        message:
          "Gain expert-level knowledge about CompuTec solutions for advanced manufacturing and logistics using our documentation and training resources.",
      })}
    >
      <DocsHeader />
      <main>
        <DocsCards />
      </main>
    </Layout>
  );
}
