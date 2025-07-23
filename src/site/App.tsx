import NavigationsBar from "../components/NavigationBar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import Work from "./Work";

function App() {
  return (
    <>
      <NavigationsBar />

      <main>
        <Home />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
