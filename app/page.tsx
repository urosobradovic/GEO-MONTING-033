import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Quotes from "@/components/Quotes";
import Knowledge from "@/components/Knowledge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Features />
        <Process />
        <Quotes />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
