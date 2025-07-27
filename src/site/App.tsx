import { useEffect } from "react";
import Lenis from "lenis";

import NavigationsBar from "../components/NavigationBar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import { WhatsappLink } from "../components/whatsapp";
import Footer from "../components/footer";

function App() {
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.5 : 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: isMobile ? 0.3 : 0.5,
      touchMultiplier: isMobile ? 1 : 1,
      prevent: (node) =>
        node.tagName === "TEXTAREA" || node.tagName === "INPUT",
      lerp: isMobile ? 0.15 : 0.1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <NavigationsBar />
      <WhatsappLink />

      <main>
        <Home />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
