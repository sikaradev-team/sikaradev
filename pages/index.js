import About from "../components/about";
import Banner from "../components/banner";
import Choice from "../components/choice";
import Domaine from "../components/domaine";
import Layout from "../components/layout";
import Process from "../components/process";
import SolutionTech from "../components/solution-tech";
import { siteContent } from "../lib/sikara-dev-service";

export default function Home({ banner, about, choice, devProcess, expertise }) {
  return (
    <Layout home>
      <Banner {...banner} />
      <About {...about} />
      <Choice {...choice} />
      <Process {...devProcess} />
      <Domaine {...expertise} />
      <SolutionTech />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await siteContent();
  return {
    props: { ...data },
  };
}
