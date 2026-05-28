import HeroIntro from "@/components/HeroIntro";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* CINEMATIC HERO INTRO */}
      <HeroIntro />

      {/* MAIN WEBSITE */}
      <Navbar />

      {/* HOME PAGE SECTION WITH CHATBOT */}
      <HomeSection />

      {/* REMAINING WEBSITE SECTIONS */}
      <About />
      <Products />
      <Services />
      <Process />
      <Technologies />
      <Contact />

      {/* GLOBAL FLOATING CHATBOT */}
      <Chatbot />

      <Footer />
    </main>
  );
}