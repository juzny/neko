import Topbar from "./components/topbar/Topbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/Contact";
import MenuMobile from "./components/menu_mobile/MenuMobile";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <Topbar isOpen={isOpen} toggle={toggle} />
      <MenuMobile isOpen={isOpen} toggle={toggle} />
      <div className="sections">
        <Hero />
        <About />
        <Offer />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
