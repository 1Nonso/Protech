import { useEffect } from "react";
import Lenis from "lenis";

import NavigationsBar from "../components/NavigationBar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";
import { WhatsappLink } from "../components/whatsapp";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
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
    </>
  );
}

export default App;
