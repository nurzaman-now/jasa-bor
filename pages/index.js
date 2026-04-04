import Feature from "../components/Feature";
import GalleryCarousel from "../components/GalleryCarousel";
import Reason from "../components/Reason";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Contact from "../components/Contact";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <>
      <SeoHead title="Service Pompa Air" />
      <Layout>
        <Hero />
        <Feature />
        <Reason />
        <GalleryCarousel />
        <Testimoni />
        <Contact />
      </Layout>
    </>
  );
}
