import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "./utils/scroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Intro } from "./components/Intro";
import { Accommodation } from "./components/Accommodation";
import { WhyStay } from "./components/WhyStay";
import { LocalArea } from "./components/LocalArea";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingCall } from "./components/FloatingCall";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Accommodation />
        <WhyStay />
        <LocalArea />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
