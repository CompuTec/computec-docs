import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import DocsHeader from "../components/DocsHeader";
import DocsCards from "../components/DocsCards";

export default function Docs(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Documentation Center">
      <DocsHeader />
      <main>
        <DocsCards />
      </main>
    </Layout>
  );
}
