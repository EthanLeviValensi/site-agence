import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KdsDemo from "@/components/KdsDemo";
import EcommerceDemo from "@/components/EcommerceDemo";
import Hosting from "@/components/Hosting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <Services />
        <KdsDemo />
        <EcommerceDemo />
        <Hosting />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
