import Feature from "../components/Feature";
import Reason from "../components/Reason";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SeoHead title="Service Pompa Air" />
      <Layout>
        <Hero />
        <Feature />
        <Reason />
        <Contact />
      </Layout>
    </>
  );
}
