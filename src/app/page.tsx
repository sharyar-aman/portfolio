import BackgroundFX from "@/components/BackgroundFX";
import BootLoader from "@/components/BootLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <BootLoader />
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Stack /></Reveal>
        <Reveal><Timeline /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}