import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
