import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Creations from "@/components/Creations";
import KdsDemo from "@/components/KdsDemo";
import EcommerceDemo from "@/components/EcommerceDemo";
import Hosting from "@/components/Hosting";
import BookFlowTeaser from "@/components/BookFlowTeaser";
import ScratchTicket from "@/components/ScratchTicket";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <Services />
        <Creations />
        <KdsDemo />
        <EcommerceDemo />
        <BookFlowTeaser />
        <Hosting />
        <ScratchTicket />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
